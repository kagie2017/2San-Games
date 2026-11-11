# 2San Game Night

A live, individual quiz game for 2San team events, with Dota-style lobbies. Everyone plays on their own phone or laptop.

Live: https://2san-games.vercel.app/

## How it works

1. **Lobby browser**: make your blocky character (nickname, shirt color, face) and see every open lobby with its host, player count and status.
2. **Create lobby**: anyone can create one and becomes its **host**. A password is optional.
3. **Join**: tap a lobby (type the password if it has one).
4. **Host controls**: pick a game, start, reveal answers, show the leaderboard, remove players (×), or hand the host role to someone else (👑). Closing the lobby removes everyone from it.

One device is in one lobby at a time. Lobbies with no activity for 12 hours are cleaned up automatically.

### Games

| Game | How players answer | What it is |
| --- | --- | --- |
| 2San Quiz | 4 choices | Facts from [2san.com](https://2san.com) |
| True or False | 2 choices | Quick 2San facts |
| 4 Pics 1 Word | type a word | Four emoji pictures, one linking word |
| Word Scramble | type a word | Unscramble a 2San word |
| Emoji Riddle | 4 choices | Read the emojis, pick the phrase |
| Odd One Out | 4 choices | Spot the one that does not belong |
| Riddles | 4 choices | Classic brain teasers |
| Quick Math | type a number | Mental math sprint |
| Color Clash | 4 choices | Tap the ink color, not the word |
| Count It | type a number | Count icons on the big screen |
| Memory Flash | 4 choices | Six icons flash for 5 seconds; which was missing? |
| Sliding Puzzle | solve on phone | Same 3×3 puzzle for everyone; fastest wins |
| Closest Number | type a number | The closer, the more points |

Correct answers score 500 to 1000 points: the faster, the more. Closest Number scores by how near the guess is.

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
