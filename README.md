# 2San Game Night

A live, individual quiz game for 2San team events, with Dota-style lobbies. Everyone plays on their own phone or laptop.

Live: https://2san-games.vercel.app/

## How it works

1. **Lobby browser**: make your blocky character (nickname, shirt color, 10 faces, 9 hairstyles in your shirt color, and a 2San device as your weapon: Easy Pen Test sword, Breath Alcohol Test blaster, Home Water Test bottle, Safe Sip+ shield, Digital Thermometer wand, Swimcount hammer or 3 in 1 Self-Test paddle) and see every open lobby with its host, player count and status.
2. **Create lobby**: anyone can create one and becomes its **host**. A password is optional.
3. **Join**: tap a lobby (type the password if it has one).
4. **Host controls**: pick a game, start, reveal answers, show the leaderboard, remove players (×), or hand the host role to someone else (👑). Closing the lobby removes everyone from it.

One device is in one lobby at a time. Lobbies with no activity for 12 hours are cleaned up automatically.

### Games

Every game uses 2San content from [2san.com](https://2san.com): products, values, offices and sustainability.

| Game | How players answer | What it is |
| --- | --- | --- |
| 2San Quiz | 4 choices | Facts about 2San |
| True or False | 2 choices | Quick 2San facts |
| 4 Pics 1 Word | type a word | Four emoji pictures, one 2San word |
| Word Scramble | type a word | Unscramble a 2San word |
| Emoji Riddle | 4 choices | Read the emojis, pick the 2San phrase |
| Odd One Out | 4 choices | Spot what is not true to 2San |
| 2San Riddles | 4 choices | Guess the 2San product or value from the clue |
| Quick Math | type a number | 2San word problems |
| Color Clash | 4 choices | 2San brand colors: tap the ink color, not the word |
| Count It | type a number | Count 2San kit icons on the big screen |
| Memory Flash | 4 choices | Six 2San kit icons flash for 5 seconds; which was missing? |
| Sliding Puzzle | solve on phone | Slide the tiles to spell 2SAN HOME; fastest wins |
| Closest Number | type a number | Guess the 2San number |
| Finish the Slogan | 4 choices | Fill in the missing word of a 2San line |
| Who Am I? | 4 choices | Clues about a 2San product, value or person appear one by one; 1000 on clue 1, 800, 600, 400 after |
| Higher or Lower | 2 choices | Two 2San numbers of the same kind: is the second higher or lower? |
| Type Race | type the line | Type a 2San line as fast as you can (capitals and punctuation do not matter) |
| Pixel Reveal | type the name | A real 2San product photo comes into focus. Earlier = more points (1000 down to 400). Exact name 100%, small typo 75%, part of the name 50% |
| Draw It | draw / type a word | One player draws a 2San thing on their phone (only they see the word); others type guesses. The drawer scores by how many guessed |
| Two Lines! | tap the pad | Watch a 2San test strip; tap when the second line shows. Fastest 1000, slower less, too soon 0 |
| Spot the Difference | tap a box | Grid A on every screen, grid B on the big screen; tap the box in B that changed |
| Order It | tap in order | Put 2San steps or facts in the right order |
| Majority Wins | 4 choices | No right answer: the most picked option gets 1000, others by share |
| Last One Standing | 4 choices | Wrong or no answer and you are out; 100 per round survived, +500 for the last one in |
| Hydration Pump | press Space / tap PUMP | Fill your Hydration Test bottle; fullest bottle wins (1000, 900, 800 …) |
| Catch the Kit | tap falling items | Catch falling 2San kit; tapping non-2San items freezes you for 1 second; most catches wins |
| 2San Duck Race | press Space / tap PADDLE | Every character rides a duck down the 2San river. Each press of Space (computer) or tap on PADDLE (phone) moves the duck forward; the finish line is 4.5 paddles per second of race (45 for 10s, 135 for 30s, 270 for 1 min). First over the line wins; when time runs out, more paddles places higher. 1st 1000, 2nd 900, 3rd 800 … at least 100; a duck that never moves gets 0 |

Correct answers score 500 to 1000 points: the faster, the more. Closest Number scores by how near the guess is.

**Team Battle:** in the lobby the host can set Teams to 2 or 4 for any game. Players are split evenly into colored teams; each team's score is the average of its members, shown as bars on the leaderboard and final screen.

If players tie for a podium place (top 3) at the end of any game, the host starts a duck race between them to decide the order. Only the tied players paddle; everyone else watches.

Paddles go to the database through `player_paddle` (at most 20 a second count, checked on the server clock, GO is 5 seconds after the race starts) and every screen reads them back with `race_board`. The host saves the final order when time is up or every duck has finished.

## 3D world

During question rounds the big screen shows a blocky 3D world in 2San colors: the question sits on a giant TV, every player's character walks around, and at the reveal each character runs to the pad of the answer they picked (right pad lights up, right players dance). Phones show the same world in a panel above the answer buttons, following your own character. It uses three.js from jsDelivr (`world.js`); devices without WebGL, and host screens narrower than 760px, keep the normal screens.

## Slow devices

Tablets and budget phones are detected (4 GB of memory or less, 4 cores or less, or an Android tablet) and start the 3D world without anti-aliasing at a lower resolution. While the 3D world runs, the frame rate is checked every 2 seconds. Below about 42 frames a second the resolution steps down (1×, 0.8×, 0.65×) and fewer characters are drawn. If even the lowest step stays below about 24, the device switches to the plain screens for the rest of the visit and shows a short note. If the plain screens also run slowly, costly decorations (duck shadows, rippling water, idle bobbing) turn off. The game itself never changes.

Big races and long player lists are kept light everywhere: in Chrome-based browsers (Android, desktop Chrome and Edge) each character made of CSS boxes in a race, a head in a list, or a weapon tile is turned once into a still picture of the same boxes, so the page moves one picture instead of dozens of 3D sides. A 32-rider race went from about 7 to about 56 frames a second on a 4× slowed-down processor. On tablets and budget phones the podium characters are still pictures too, with the rank number laid on top.

## Music

Original 8-bit background music, played live in the browser with Web Audio (no music files, nothing to license). There are four tunes: Lobby (while waiting), Questions, Duck Race, and Scores (leaderboard, final results and podium). The tune follows the game screen and fades between tracks. The big screen plays music by default. Phones start with music off so a room full of phones does not clash. The 🎵 button in the top bar turns music on or off on that device and remembers the choice. Music pauses while the tab is hidden. Sound effects play on top of the music.

## Stack

- Static site (`index.html`, `app.js`, `world.js`, `config.js`) on Vercel. No build step.
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
