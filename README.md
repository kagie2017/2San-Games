# 2San Game Night

A live, individual quiz game for 2San team events, with Dota-style lobbies. Everyone plays on their own phone or laptop.

Live: https://2san-games.vercel.app/

## How it works

1. **Lobby browser**: make your blocky character (nickname, shirt color, face) and see every open lobby with its host, player count and status.
2. **Create lobby**: anyone can create one and becomes its **host**. A password is optional.
3. **Join**: tap a lobby (type the password if it has one).
4. **Host controls**: pick a game, start, reveal answers, show the leaderboard, remove players (×), or hand the host role to someone else (👑). Closing the lobby removes everyone from it.

One device is in one lobby at a time. Lobbies with no activity for 12 hours are cleaned up automatically.

### Games (content from [2san.com](https://2san.com))

- **2San Quiz**: four choices; faster correct answers score more (500 to 1000 points).
- **True or False**: quick 2San facts.
- **Closest Number**: type a number; exact answers get 1000 points.

## Stack

- Static site (`index.html`, `app.js`, `config.js`) on Vercel. No build step.
- [Supabase](https://supabase.com) for shared game data, with realtime updates and polling as a fallback.

## Setup (new Supabase project)

1. Run `supabase/setup.sql` in the Supabase SQL editor.
2. Put the project URL and anon (public) key into `config.js`. Both are safe to publish.
3. Import this repo in Vercel (framework preset: Other, no build command).

## Data and security

| Table | Public can read | Written by |
| --- | --- | --- |
| `lobbies`, `players` | yes | game functions only |
| `answers`, `lobby_secrets`, `player_tokens` | no | game functions only |

Each browser gets a private token. Host functions check that the token belongs to that lobby's host. Lobby passwords are stored hashed. Answer times are measured on the server clock, and only the first answer to each question counts.
