-- 2San Game Night: database setup for Supabase (multi-lobby version)
-- Run once in the Supabase SQL editor. Safe to re-run: it drops and recreates the game objects.
-- Anyone can create a lobby and becomes its host. Hosts can hand the host role to another player.

create extension if not exists pgcrypto with schema extensions;

-- ---------- clean slate (removes the earlier single-game version too) ----------
drop table if exists public.answers, public.player_tokens, public.players, public.lobby_secrets,
  public.lobbies, public.host_key, public.scores, public.game_state, public.config cascade;
drop function if exists public.is_host(text), public.host_check(text), public.player_me(text),
  public.player_join(text,text,text,text), public.player_leave(text),
  public.player_answer(text,text,int,int,double precision,text),
  public.host_set_state(text,jsonb,boolean), public.host_set_scores(text,jsonb),
  public.host_set_key(text,jsonb), public.host_get_key(text), public.host_answers(text),
  public.host_kick(text,uuid), public.host_clear(text) cascade;

-- ---------- tables ----------
create table public.lobbies (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 30),
  has_password boolean not null default false,
  state jsonb not null default '{"phase":"lobby"}',
  scores jsonb not null default '{}',
  started_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.lobby_secrets (
  lobby_id uuid primary key references public.lobbies(id) on delete cascade,
  password_hash text,
  key jsonb not null default '{}'
);

create table public.players (
  id uuid primary key default gen_random_uuid(),
  lobby_id uuid not null references public.lobbies(id) on delete cascade,
  role text not null default 'player' check (role in ('host','player')),
  nick text not null check (char_length(nick) between 1 and 18),
  color text not null default '#FB7569' check (color ~ '^#[0-9A-Fa-f]{6}$'),
  face text not null default 'smile' check (face ~ '^[a-z0-9]{1,12}$'),
  hair text not null default 'none' check (hair ~ '^[a-z0-9]{1,12}$'),
  weapon text not null default 'none' check (weapon ~ '^[a-z0-9]{1,12}$'),
  joined timestamptz not null default now()
);
create index players_lobby_idx on public.players(lobby_id);

create table public.player_tokens (
  token text primary key check (char_length(token) between 20 and 80),
  player_id uuid not null unique references public.players(id) on delete cascade
);

create table public.answers (
  player_id uuid primary key references public.players(id) on delete cascade,
  lobby_id uuid not null references public.lobbies(id) on delete cascade,
  session text not null,
  idx int not null,
  choice int,
  value double precision,
  text text check (char_length(text) <= 40),
  answered_at timestamptz not null default now()
);

-- ---------- row level security ----------
-- Public can READ lobbies and players. Everything else is private.
-- All writes go through the functions below.
alter table public.lobbies       enable row level security;
alter table public.lobby_secrets enable row level security;
alter table public.players       enable row level security;
alter table public.player_tokens enable row level security;
alter table public.answers       enable row level security;
create policy "read lobbies" on public.lobbies for select to anon, authenticated using (true);
create policy "read players" on public.players for select to anon, authenticated using (true);

-- ---------- realtime ----------
do $$
begin
  begin alter publication supabase_realtime add table public.lobbies; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.players; exception when duplicate_object then null; end;
end $$;

-- ---------- internal helpers (not callable from the browser) ----------
create or replace function public._me(p_token text) returns public.players
language sql stable security definer set search_path = public as $$
  select p.* from player_tokens t join players p on p.id = t.player_id where t.token = p_token;
$$;

create or replace function public._host_lobby(p_token text) returns uuid
language plpgsql stable security definer set search_path = public as $$
declare v uuid;
begin
  select p.lobby_id into v from player_tokens t join players p on p.id = t.player_id
   where t.token = p_token and p.role = 'host';
  if v is null then raise exception 'not_host'; end if;
  return v;
end $$;

-- Leaving: a host leaving closes the lobby; a player leaving just removes them.
create or replace function public._leave(p_token text) returns void
language plpgsql security definer set search_path = public as $$
declare me players;
begin
  me := public._me(p_token);
  if me.id is null then return; end if;
  if me.role = 'host' then delete from lobbies where id = me.lobby_id;
  else delete from players where id = me.id; end if;
end $$;

revoke execute on function public._me(text), public._host_lobby(text), public._leave(text) from public, anon, authenticated;

-- ---------- lobby browser ----------
create or replace function public.me(p_token text) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object('player_id', p.id, 'lobby_id', p.lobby_id, 'role', p.role)
    from player_tokens t join players p on p.id = t.player_id where t.token = p_token;
$$;

create or replace function public.lobby_create(p_token text, p_name text, p_password text,
  p_nick text, p_color text, p_face text, p_hair text default 'none', p_weapon text default 'none') returns uuid
language plpgsql security definer set search_path = public, extensions as $$
declare v_lobby uuid; v_player uuid; v_pw boolean := coalesce(char_length(p_password), 0) > 0;
begin
  if char_length(coalesce(p_token,'')) < 20 then raise exception 'bad_token'; end if;
  delete from lobbies where updated_at < now() - interval '12 hours';
  if (select count(*) from lobbies) >= 30 then raise exception 'too_many_lobbies'; end if;
  perform public._leave(p_token);
  insert into lobbies (name, has_password) values (trim(p_name), v_pw) returning id into v_lobby;
  insert into lobby_secrets (lobby_id, password_hash)
    values (v_lobby, case when v_pw then crypt(p_password, gen_salt('bf')) end);
  insert into players (lobby_id, role, nick, color, face, hair, weapon)
    values (v_lobby, 'host', trim(p_nick), p_color, p_face, coalesce(p_hair,'none'), coalesce(p_weapon,'none')) returning id into v_player;
  insert into player_tokens (token, player_id) values (p_token, v_player);
  return v_lobby;
end $$;

create or replace function public.lobby_join(p_token text, p_lobby uuid, p_password text,
  p_nick text, p_color text, p_face text, p_hair text default 'none', p_weapon text default 'none') returns uuid
language plpgsql security definer set search_path = public, extensions as $$
declare v_hash text; me players; v_player uuid;
begin
  if char_length(coalesce(p_token,'')) < 20 then raise exception 'bad_token'; end if;
  if not exists (select 1 from lobbies where id = p_lobby) then raise exception 'lobby_not_found'; end if;
  me := public._me(p_token);
  if me.id is not null and me.lobby_id = p_lobby then
    update players set nick = trim(p_nick), color = p_color, face = p_face,
      hair = coalesce(p_hair,'none'), weapon = coalesce(p_weapon,'none') where id = me.id;
    return p_lobby;
  end if;
  select password_hash into v_hash from lobby_secrets where lobby_id = p_lobby;
  if v_hash is not null and (p_password is null or crypt(p_password, v_hash) <> v_hash) then
    raise exception 'wrong_password';
  end if;
  if (select count(*) from players where lobby_id = p_lobby) >= 61 then raise exception 'lobby_full'; end if;
  perform public._leave(p_token);
  insert into players (lobby_id, role, nick, color, face, hair, weapon)
    values (p_lobby, 'player', trim(p_nick), p_color, p_face, coalesce(p_hair,'none'), coalesce(p_weapon,'none')) returning id into v_player;
  insert into player_tokens (token, player_id) values (p_token, v_player);
  update lobbies set updated_at = now() where id = p_lobby;
  return p_lobby;
end $$;

create or replace function public.player_update(p_token text, p_nick text, p_color text, p_face text,
  p_hair text default 'none', p_weapon text default 'none') returns void
language sql security definer set search_path = public as $$
  update players set nick = trim(p_nick), color = p_color, face = p_face,
    hair = coalesce(p_hair,'none'), weapon = coalesce(p_weapon,'none')
   where id = (select player_id from player_tokens where token = p_token);
$$;

create or replace function public.lobby_leave(p_token text) returns void
language sql security definer set search_path = public as $$
  select public._leave(p_token);
$$;

-- First answer per round is final; only accepted while that round is open in the player's lobby.
create or replace function public.player_answer(p_token text, p_session text, p_idx int,
  p_choice int, p_value double precision, p_text text default null) returns boolean
language plpgsql security definer set search_path = public as $$
declare me players; v_state jsonb;
begin
  me := public._me(p_token);
  if me.id is null or me.role <> 'player' then return false; end if;
  select state into v_state from lobbies where id = me.lobby_id;
  if v_state->>'phase' <> 'question' or v_state->>'session' <> p_session or (v_state->>'idx')::int <> p_idx then
    return false;
  end if;
  insert into answers (player_id, lobby_id, session, idx, choice, value, text, answered_at)
  values (me.id, me.lobby_id, p_session, p_idx, p_choice, p_value, left(p_text, 40), now())
  on conflict (player_id) do update
    set lobby_id = excluded.lobby_id, session = excluded.session, idx = excluded.idx,
        choice = excluded.choice, value = excluded.value, text = excluded.text, answered_at = excluded.answered_at
    where answers.session is distinct from excluded.session or answers.idx is distinct from excluded.idx;
  return true;
end $$;

-- ---------- host functions (each checks the caller is this lobby's host) ----------
create or replace function public.host_set_state(p_token text, p_data jsonb, p_restart_clock boolean default false) returns timestamptz
language plpgsql security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token); v timestamptz;
begin
  update lobbies set state = p_data,
         started_at = case when p_restart_clock then now() else started_at end,
         updated_at = now()
   where id = lid returning started_at into v;
  return v;
end $$;

create or replace function public.host_set_scores(p_token text, p_data jsonb) returns void
language plpgsql security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token);
begin update lobbies set scores = p_data, updated_at = now() where id = lid; end $$;

create or replace function public.host_set_key(p_token text, p_data jsonb) returns void
language plpgsql security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token);
begin update lobby_secrets set key = p_data where lobby_id = lid; end $$;

create or replace function public.host_get_key(p_token text) returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token);
begin return (select key from lobby_secrets where lobby_id = lid); end $$;

-- Answers in the host's lobby, with ms after the round opened (server clock).
create or replace function public.host_answers(p_token text)
returns table (player_id uuid, session text, idx int, choice int, value double precision, text text, ms double precision)
language plpgsql stable security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token);
begin
  return query
    select a.player_id, a.session, a.idx, a.choice, a.value, a.text,
           (extract(epoch from (a.answered_at - l.started_at)) * 1000)::double precision
      from answers a join lobbies l on l.id = a.lobby_id
     where a.lobby_id = lid;
end $$;

create or replace function public.host_kick(p_token text, p_player uuid) returns void
language plpgsql security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token);
begin delete from players where id = p_player and lobby_id = lid and role = 'player'; end $$;

-- Hand the host role to another player in the same lobby. The old host stays as a player.
create or replace function public.host_transfer(p_token text, p_player uuid) returns void
language plpgsql security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token);
begin
  if not exists (select 1 from players where id = p_player and lobby_id = lid and role = 'player') then
    raise exception 'player_not_found';
  end if;
  update players set role = 'player' where lobby_id = lid and role = 'host';
  update players set role = 'host' where id = p_player;
  delete from answers where player_id = p_player;
  update lobbies set updated_at = now() where id = lid;
end $$;

create or replace function public.host_close(p_token text) returns void
language plpgsql security definer set search_path = public as $$
declare lid uuid := public._host_lobby(p_token);
begin delete from lobbies where id = lid; end $$;

grant execute on function
  public.me(text),
  public.lobby_create(text,text,text,text,text,text,text,text),
  public.lobby_join(text,uuid,text,text,text,text,text,text),
  public.player_update(text,text,text,text,text,text),
  public.lobby_leave(text),
  public.player_answer(text,text,int,int,double precision,text),
  public.host_set_state(text,jsonb,boolean), public.host_set_scores(text,jsonb),
  public.host_set_key(text,jsonb), public.host_get_key(text), public.host_answers(text),
  public.host_kick(text,uuid), public.host_transfer(text,uuid), public.host_close(text)
to anon, authenticated;

-- ---------- duck race: paddle by pressing Space or tapping ----------
-- Paddles are kept in answers: session = the race seed, idx = -1, value = paddles so far,
-- choice = ms after GO (server clock) when the duck reached the finish line.
-- GO is 5 seconds after the race state was saved (started_at). At most 20 paddles a second count.
create or replace function public._race_board(p_lobby uuid, p_seed text) returns jsonb
language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_object_agg(a.player_id::text, jsonb_build_array(a.value::int, a.choice)), '{}'::jsonb)
    from answers a where a.lobby_id = p_lobby and a.session = p_seed and a.idx = -1;
$$;
revoke execute on function public._race_board(uuid,text) from public, anon, authenticated;

create or replace function public.race_board(p_token text) returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare me players; v_seed text; v_start timestamptz;
begin
  me := public._me(p_token);
  if me.id is null then return null; end if;
  select state->'race'->>'seed', started_at into v_seed, v_start from lobbies where id = me.lobby_id;
  if v_seed is null then return '{}'::jsonb; end if;
  -- _el: ms after GO on the server clock, so every screen can line up its countdown.
  return public._race_board(me.lobby_id, v_seed)
         || jsonb_build_object('_el', round((extract(epoch from (now() - v_start)) - 5) * 1000));
end $$;

create or replace function public.player_paddle(p_token text, p_seed text, p_taps int) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me players; st jsonb; r jsonb; v_start timestamptz; el double precision; tgt int; dur double precision; n int;
begin
  me := public._me(p_token);
  if me.id is null then return null; end if;
  select state, started_at into st, v_start from lobbies where id = me.lobby_id;
  r := st->'race';
  if r is null or r->>'seed' is distinct from p_seed then return null; end if;
  el := extract(epoch from (now() - v_start)) - 5;
  tgt := greatest(1, coalesce((r->>'target')::int, 1));
  dur := coalesce((r->>'dur')::double precision, 10);
  if me.role = 'player' and st->>'phase' = 'race' and coalesce((r->>'done')::boolean, false) = false
     and (r->'ids') ? me.id::text and el > -1 and el < dur + 3 then
    n := least(greatest(coalesce(p_taps, 0), 0), greatest(0, floor((el + 1) * 20))::int, tgt);
    insert into answers (player_id, lobby_id, session, idx, choice, value, text, answered_at)
    values (me.id, me.lobby_id, p_seed, -1,
            case when n >= tgt then greatest(0, round(el * 1000))::int end, n, null, now())
    on conflict (player_id) do update set
      lobby_id = excluded.lobby_id,
      value  = case when answers.session = excluded.session and answers.idx = -1
                    then greatest(answers.value, excluded.value) else excluded.value end,
      choice = case when answers.session = excluded.session and answers.idx = -1
                    then coalesce(answers.choice, excluded.choice) else excluded.choice end,
      session = excluded.session, idx = -1, text = null, answered_at = now();
  end if;
  return public._race_board(me.lobby_id, p_seed) || jsonb_build_object('_el', round(el * 1000));
end $$;

grant execute on function public.race_board(text), public.player_paddle(text,text,int) to anon, authenticated;
