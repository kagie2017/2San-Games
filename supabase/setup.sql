-- 2San Game Night: database setup for Supabase
-- Run this once in the Supabase SQL editor (or via the Supabase connector).
-- The facilitator secret is NOT in this file. Set it separately:
--   insert into public.config (id, host_secret) values (1, '<your secret>')
--   on conflict (id) do update set host_secret = excluded.host_secret;

create extension if not exists pgcrypto;

-- ---------- tables ----------
create table if not exists public.config (
  id int primary key default 1 check (id = 1),
  host_secret text not null
);

create table if not exists public.game_state (
  id int primary key default 1 check (id = 1),
  data jsonb not null default '{"phase":"lobby"}',
  started_at timestamptz,
  updated_at timestamptz not null default now()
);
insert into public.game_state (id) values (1) on conflict do nothing;

create table if not exists public.scores (
  id int primary key default 1 check (id = 1),
  data jsonb not null default '{}'
);
insert into public.scores (id) values (1) on conflict do nothing;

create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  nick text not null check (char_length(nick) between 1 and 18),
  color text not null default '#FB7569' check (color ~ '^#[0-9A-Fa-f]{6}$'),
  face text not null default 'smile' check (face in ('smile','cool','wow')),
  joined timestamptz not null default now()
);

create table if not exists public.player_tokens (
  token text primary key check (char_length(token) between 20 and 80),
  player_id uuid not null references public.players(id) on delete cascade
);

create table if not exists public.answers (
  player_id uuid primary key references public.players(id) on delete cascade,
  session text not null,
  idx int not null,
  choice int,
  value double precision,
  answered_at timestamptz not null default now()
);

create table if not exists public.host_key (
  id int primary key default 1 check (id = 1),
  data jsonb not null default '{}'
);
insert into public.host_key (id) values (1) on conflict do nothing;

-- ---------- row level security ----------
-- Public (anon) can only READ game_state, scores and players.
-- config, player_tokens, answers and host_key have no policies, so they are private.
alter table public.config        enable row level security;
alter table public.game_state    enable row level security;
alter table public.scores        enable row level security;
alter table public.players       enable row level security;
alter table public.player_tokens enable row level security;
alter table public.answers       enable row level security;
alter table public.host_key      enable row level security;

drop policy if exists "read state"   on public.game_state;
drop policy if exists "read scores"  on public.scores;
drop policy if exists "read players" on public.players;
create policy "read state"   on public.game_state for select to anon, authenticated using (true);
create policy "read scores"  on public.scores     for select to anon, authenticated using (true);
create policy "read players" on public.players    for select to anon, authenticated using (true);

-- ---------- realtime ----------
do $$
begin
  begin alter publication supabase_realtime add table public.game_state; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.scores;     exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.players;    exception when duplicate_object then null; end;
end $$;

-- ---------- helpers ----------
create or replace function public.is_host(p_secret text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from config where host_secret = p_secret and char_length(p_secret) >= 16);
$$;
revoke execute on function public.is_host(text) from public, anon, authenticated;

create or replace function public.host_check(p_secret text) returns boolean
language sql stable security definer set search_path = public as $$
  select public.is_host(p_secret);
$$;

-- ---------- player functions ----------
create or replace function public.player_me(p_token text) returns uuid
language sql stable security definer set search_path = public as $$
  select player_id from player_tokens where token = p_token;
$$;

create or replace function public.player_join(p_token text, p_nick text, p_color text, p_face text) returns uuid
language plpgsql security definer set search_path = public as $$
declare v_id uuid;
begin
  if (select count(*) from players) >= 60 and not exists (select 1 from player_tokens where token = p_token) then
    raise exception 'room_full';
  end if;
  select player_id into v_id from player_tokens where token = p_token;
  if v_id is null then
    insert into players (nick, color, face) values (trim(p_nick), p_color, p_face) returning id into v_id;
    insert into player_tokens (token, player_id) values (p_token, v_id);
  else
    update players set nick = trim(p_nick), color = p_color, face = p_face where id = v_id;
  end if;
  return v_id;
end $$;

create or replace function public.player_leave(p_token text) returns void
language sql security definer set search_path = public as $$
  delete from players where id = (select player_id from player_tokens where token = p_token);
$$;

-- First answer per question is final; only accepted while that question is open.
create or replace function public.player_answer(p_token text, p_session text, p_idx int, p_choice int, p_value double precision) returns boolean
language plpgsql security definer set search_path = public as $$
declare v_id uuid; v_state jsonb;
begin
  select player_id into v_id from player_tokens where token = p_token;
  if v_id is null then return false; end if;
  select data into v_state from game_state where id = 1;
  if v_state->>'phase' <> 'question' or v_state->>'session' <> p_session or (v_state->>'idx')::int <> p_idx then
    return false;
  end if;
  insert into answers (player_id, session, idx, choice, value, answered_at)
  values (v_id, p_session, p_idx, p_choice, p_value, now())
  on conflict (player_id) do update
    set session = excluded.session, idx = excluded.idx, choice = excluded.choice,
        value = excluded.value, answered_at = excluded.answered_at
    where answers.session is distinct from excluded.session or answers.idx is distinct from excluded.idx;
  return true;
end $$;

-- ---------- facilitator functions (all check the secret) ----------
create or replace function public.host_set_state(p_secret text, p_data jsonb, p_restart_clock boolean default false) returns timestamptz
language plpgsql security definer set search_path = public as $$
declare v_started timestamptz;
begin
  if not public.is_host(p_secret) then raise exception 'not_host'; end if;
  update game_state
     set data = p_data,
         started_at = case when p_restart_clock then now() else started_at end,
         updated_at = now()
   where id = 1
  returning started_at into v_started;
  return v_started;
end $$;

create or replace function public.host_set_scores(p_secret text, p_data jsonb) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_host(p_secret) then raise exception 'not_host'; end if;
  update scores set data = p_data where id = 1;
end $$;

create or replace function public.host_set_key(p_secret text, p_data jsonb) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_host(p_secret) then raise exception 'not_host'; end if;
  update host_key set data = p_data where id = 1;
end $$;

create or replace function public.host_get_key(p_secret text) returns jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_host(p_secret) then raise exception 'not_host'; end if;
  return (select data from host_key where id = 1);
end $$;

-- Answers for the facilitator, with how many ms after the question opened each one arrived (server clock).
create or replace function public.host_answers(p_secret text)
returns table (player_id uuid, session text, idx int, choice int, value double precision, ms double precision)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_host(p_secret) then raise exception 'not_host'; end if;
  return query
    select a.player_id, a.session, a.idx, a.choice, a.value,
           (extract(epoch from (a.answered_at - g.started_at)) * 1000)::double precision
      from answers a cross join game_state g
     where g.id = 1;
end $$;

create or replace function public.host_kick(p_secret text, p_player uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_host(p_secret) then raise exception 'not_host'; end if;
  delete from players where id = p_player;
end $$;

create or replace function public.host_clear(p_secret text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_host(p_secret) then raise exception 'not_host'; end if;
  delete from players where true;
end $$;

grant execute on function
  public.host_check(text), public.player_me(text), public.player_join(text,text,text,text),
  public.player_leave(text), public.player_answer(text,text,int,int,double precision),
  public.host_set_state(text,jsonb,boolean), public.host_set_scores(text,jsonb),
  public.host_set_key(text,jsonb), public.host_get_key(text), public.host_answers(text),
  public.host_kick(text,uuid), public.host_clear(text)
to anon, authenticated;
