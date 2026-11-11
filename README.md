# 2San Game Night

A live, individual quiz game for 2San team events. Everyone plays on their own phone or laptop; the facilitator runs the game on the big screen.

- **Lobby** with two rooms:
  - **Facilitator Room**: locked. Opens only from the secret facilitator link. Pick a game, start, reveal answers, show the leaderboard.
  - **Player Room**: open to everyone. Make a blocky character, join, and answer.
- **Games** (content from [2san.com](https://2san.com)):
  - **2San Quiz**: four choices; faster correct answers score more (500 to 1000 points).
  - **True or False**: quick 2San facts.
  - **Closest Number**: type a number; exact answers get 1000 points.
- Up to 60 players.

## Stack

- Static site (`index.html`, `app.js`, `config.js`), hosted on Vercel. No build step.
- [Supabase](https://supabase.com) for the shared game data, with realtime updates and polling as a fallback.

## Setup

1. **Supabase**: create a project, open the SQL editor and run `supabase/setup.sql`.
2. **Facilitator secret**: in the SQL editor, run this with your own long random secret (letters, digits, `-` or `_`, at least 16 characters). Do not commit it.
   ```sql
   insert into public.config (id, host_secret) values (1, 'YOUR-LONG-RANDOM-SECRET')
   on conflict (id) do update set host_secret = excluded.host_secret;
   ```
3. **Config**: put the project URL and anon (public) key into `config.js`. Both are safe to publish; the database rules only allow reading the game and calling the game functions.
4. **Deploy**: import this repo in Vercel (framework preset: Other, no build command).

## Links

- Players: `https://<your-site>/`
- Facilitator: `https://<your-site>/#host=YOUR-LONG-RANDOM-SECRET`
  The secret is saved on that device and removed from the address bar after it opens. Keep this link private.

## Data and security

| Table | Public can read | Written by |
| --- | --- | --- |
| `game_state`, `scores`, `players` | yes | game functions only |
| `answers`, `host_key`, `player_tokens`, `config` | no | game functions only |

Facilitator functions check the secret on every call. Each player gets a private token stored in their browser, so nobody can answer for someone else. Answer times are measured on the server clock.

To change the facilitator secret, run step 2 again with a new value.
