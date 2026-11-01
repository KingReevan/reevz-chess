# Sicilian Defense: theory map

Research source of truth for the Reevz Chess Sicilian course. The opening is 1.e4 c5, ECO B20–B99. The course teaches both sides: what Black is aiming for in each system, and how White should handle it, including White's popular alternatives to the Open Sicilian (the "anti-Sicilians").

## How to read this document

- **Lines.** Every move sequence shown in a `- \`id\`` bullet is copied from `sicilian-lines.json`. All 178 lines were replayed move by move with chess.js 1.4.0: every move is legal and every SAN token is exactly chess.js's own spelling (including `+` and `#`). Each line shows the FEN after its last move. The doc bullets and the JSON are generated from one source file (`test-results/sic-research/lines.mjs`, built by `build.mjs`), so they can't drift apart.
- **Engine checks.** Every line except the model games was scanned with Stockfish 19 (the repo's `stockfish` package, one process at a time): every position at depth 14, flagging any move that throws away more than about three quarters of a pawn, and a partial second pass at depth 20 (325 positions: all of 50 lines and the opening moves of the rest; see [Claims not fully confirmed](#claims-not-fully-confirmed-flagged-on-purpose)). The model games were scanned at depth 14 and their famous moments were checked at depth 20. Every tactical claim (trap, "wins a piece", "fork", "mate", "only move") was checked separately at depth 20 with three candidate moves, using `scripts/engine.mjs` or the equivalent one-process probe script in the research folder. Outcomes are written in words ("Black wins a pawn", "White is much better"), never as engine numbers. Where a well-known claim turned out to be folklore, the text says what really happens; see [Folklore the engine contradicts](#folklore-the-engine-contradicts).
- **Move numbers in prose.** Moves are counted from 1.e4. "5...a6" means Black's 5th move.
- **`side`** in the JSON says whose choice defines the line: `white`, `black`, or `both` (a tabiya both sides steer into). For a `trap`, `side` is the side that springs the trap (the side that wins). For a `dubious` line, `side` is the side that profits from the dubious move.
- **Status.** This is the status in top-level play, 2020–2026. Values:
  - `popular`: a mainstream elite choice.
  - `respectable`: sound and played, but not the first choice.
  - `rare`: playable, but seldom seen at the top (this includes several lines that are very common in club and online play, such as the Smith–Morra Gambit and the Grand Prix Attack).
  - `dubious`: objectively suspect: the engine and the literature agree that the side choosing it ends up clearly worse than with its normal moves (about half a pawn or more), but nothing is lost by force.
  - `trap`: a teaching line that contains a mistake that loses material or the game (there are 13). Every trap was confirmed at depth 20.
  - `historical`: the moves of a famous game (all are in §17).

  **Popularity sources.** The lichess opening explorer (both the masters and the lichess databases) returned HTTP 401 (it now needs authentication), and The Week in Chess download server refused the game files (HTTP 406, "Not Acceptable"), so no fresh game counts could be made for this course. The labels are a qualitative synthesis of the sources at the end, mainly: Wikipedia ("Sicilian Defence": about 80% of master games after 1.e4 c5 continue 2.Nf3; 2...d6 is Black's most common reply; the Najdorf is Black's most popular system; the English Attack is White's most popular answer to it; the Pin Variation is "considered theoretically suspect"; the Löwenthal "declined in play"), the openings chosen in recent World Championship matches (2018: Rossolimo in games 1, 3 and 5, Sveshnikov with 7.Nd5 in games 8, 10 and 12), and the lichess `chess-openings` naming dataset.
- **Names and ECO codes.** These follow the lichess `chess-openings` dataset (which mirrors ECO naming) and Wikipedia. lichess classifies by position, so a line that transposes gets the code of the position it reaches (for example, the Accelerated Dragon line that turns into a Yugoslav Attack gets B77). Where sources disagree, that is noted in place and again in [Naming conflicts and corrections](#naming-conflicts-and-corrections).
- **Spelling.** US spelling in prose ("Defense", "center", "maneuver"). Wikipedia article titles keep their own British spelling ("Sicilian Defence").

---

## 1. Variation tree

```
1.e4 c5
├─ 2.Nf3                                      (about 80% of master games)
│   ├─ 2...d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3      Open Sicilian with ...d6     §4
│   │   ├─ 5...a6    Najdorf (B90–B99)                                    §5
│   │   │   6.Be3 (English Attack) · 6.Bg5 e6 7.f4 (Poisoned Pawn, Göteborg)
│   │   │   6.Be2 (Opočenský) · 6.Bc4 (Fischer–Sozin) · 6.h3 · 6.f3 · 6.Nb3 · 6.f4 · 6.g3
│   │   ├─ 5...g6    Dragon (B70–B79)                                     §6
│   │   │   6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 (Yugoslav): 9.Bc4 · 9.O-O-O · 9.g4
│   │   │   6.Be2 (Classical) · 6.Bc4 · 6.f4 (Levenfish)
│   │   ├─ 5...Nc6   Classical (B56–B69)                                  §7
│   │   │   6.Bg5 (Richter–Rauzer) · 6.Bc4 (Sozin, Velimirović) · 6.Be2 e5 (Boleslavsky)
│   │   └─ 5...e6    Scheveningen (B80–B85)                               §8
│   │       6.g4 (Keres) · 6.Be2 (Classical) · 6.Be3/f3 (English)
│   │   4.Qxd4  Chekhover (B53) · 5.f3 Prins (B54–B55)                    §4
│   ├─ 2...Nc6 3.d4 cxd4 4.Nxd4
│   │   ├─ 4...Nf6 5.Nc3 e5   Sveshnikov (B33)                            §9
│   │   ├─ 4...e5             Kalashnikov 5.Nb5 d6 · Löwenthal 5.Nb5 a6 (B32)   §9
│   │   ├─ 4...g6             Accelerated Dragon (B34–B39), Maróczy Bind 5.c4   §6
│   │   ├─ 4...Nf6 5.Nc3 d6   Classical by transposition                  §7
│   │   ├─ 4...Nf6 5.Nc3 e6   Four Knights (B45)                          §10
│   │   ├─ 4...e6             Taimanov (B44–B49)                          §10
│   │   └─ 4...Qb6            Godiva (B32)                                §10
│   │   3.Bb5   Rossolimo (B30–B31) · 3.Nc3 Anti-Sveshnikov (B30)         §15, §9
│   ├─ 2...e6 3.d4 cxd4 4.Nxd4
│   │   ├─ 4...Nc6   Taimanov (B44–B49)                                   §10
│   │   ├─ 4...a6    Kan / Paulsen (B41–B43)                              §10
│   │   └─ 4...Nf6 5.Nc3 Nc6 Four Knights · 5...Bb4 Pin · 5...d6 Scheveningen   §10, §8
│   │   3.d3 / g3   King's Indian Attack set-up (A08)                     §15
│   ├─ 2...d6 3.Bb5+   Moscow (B51–B52)                                   §15
│   ├─ 2...g6          Hyperaccelerated Dragon (B27)                      §4
│   └─ 2...a6          O'Kelly (B28)                                      §4
├─ 2.c3                Alapin (B22): 2...d5 · 2...Nf6                    §11
├─ 2.d4 cxd4 3.c3      Smith–Morra Gambit (B21)                           §12
├─ 2.Nc3               Closed Sicilian (B23–B26) with g3/Bg2; Grand Prix Attack with f4   §13
├─ 2.f4                McDonnell Attack / Grand Prix (B21)                §13
├─ 2.Bc4 · 2.Qh5 · 2.b4   Bowdler, Scholar's Mate tries, Wing Gambit (B20)   §14
└─ 2.d3 + g3           King's Indian Attack style (B20)                   §15
```

---

## 2. Suggested learning order

The course outline (`content/openings/sicilian/OUTLINE.md`) is the authoritative order. In short:

| # | Block | Main lines | Difficulty |
|---|-------|-----------|-----------|
| 1 | 1...c5, the big trade, the d5 square, Black's second moves | `open-2d6-5nc3`, `open-2nc6-5nc3`, `open-2e6-4nxd4`, `mistake-venice-5e5` | 1 |
| 2 | Najdorf: ...a6, English Attack, 6.Bg5, quiet sixth moves | `najdorf`, `najdorf-be3-e5`, `najdorf-6bg5`, `najdorf-6be2` | 2–3 |
| 3 | Dragon and Accelerated Dragon: the long diagonal and the race | `dragon-yugoslav`, `dragon-yug-9bc4`, `accel-dragon`, `accel-maroczy` | 2–3 |
| 4 | Classical, Richter–Rauzer, Sozin; the Scheveningen | `rauzer`, `sozin`, `scheveningen-6be2` | 3 |
| 5 | Sveshnikov and Kalashnikov | `svesh-main`, `svesh-9bxf6`, `svesh-7nd5`, `kalashnikov` | 3–4 |
| 6 | Taimanov, Kan, Four Knights | `taimanov-qc7`, `kan-bd3`, `four-knights-ndb5` | 2–3 |
| 7 | Alapin and Smith–Morra (what club players meet most) | `alapin-d5`, `alapin-nf6`, `morra-accepted` | 2 |
| 8 | Closed, Grand Prix, 2.Bc4, 2.Qh5, 2.b4 | `closed`, `gpa-bc4`, `bowdler`, `qh5-2qh5` | 1–2 |
| 9 | Rossolimo, Moscow, King's Indian Attack | `rossolimo-bxc6`, `moscow-bd7-c4`, `kia-e6` | 2–3 |

Difficulty is 1–5 for a beginner-to-club player: 1 = a few moves and one idea, 5 = long forcing theory. In the razor-sharp main lines (Poisoned Pawn, Sveshnikov 9.Bxf6, Yugoslav Attack) the course teaches the ideas and the first critical moves, not long forced theory.

---

## 3. About the Sicilian

- **Origins.** The earliest recorded analysis is by Giulio Polerio in a 1594 manuscript, though he did not use the name; Alessandro Salvio (1604), Pietro Carrera (c. 1617), Gioachino Greco (1623) and Cozio (c. 1740) also analyzed it (Wikipedia, "Sicilian Defence").
- **The name.** In 1813 Jacob Henry Sarratt standardized the English name, after an old Italian manuscript that called it *il gioco siciliano*, "the Sicilian game" (Wikipedia).
- **A doubtful reputation in the 19th century.** La Bourdonnais, Anderssen, Staunton, Paulsen and Jaenisch played it, and Staunton endorsed Jaenisch's view that it was "the best possible reply" to 1.e4. But Morphy criticized "that pernicious fondness for the Sicilian Defense", and Steinitz preferred 1...e5 (Wikipedia). James Mason wrote in *The Art of Chess* (1895): "Fairly tried and found wanting, the Sicilian has now scarcely any standing as a first-class defence" (quoted by Edward Winter, chesshistory.com). It was absent from all 75 games of St. Petersburg 1914 (Wikipedia).
- **The 20th-century rise.** Botvinnik, Boleslavsky, Kotov, Bronstein and Najdorf revived it in the 1940s and 1950s; Fischer and Kasparov then made it the defense that offered Black "the most winning chances against 1.e4". A 1990 edition of *Modern Chess Openings* said it "has become the most played and most analysed opening" of the 20th century (Wikipedia). The Dutch tournament at Scheveningen in 1923 gave its name to the ...e6/...d6 system (§8).
- **Famous players.** Wikipedia names, among later players, Larsen, Ljubojević, Polugaevsky, Stein, Taimanov, Tal, Fischer, Kasparov, Karpov, Nunn and Carlsen. Wikipedia says Fischer and Kasparov used the Sicilian almost exclusively against 1.e4: Fischer's weapon was the Najdorf (he popularized the Poisoned Pawn), and Kasparov played 5...a6 aiming for ...e6 structures. Kasparov also surprised Anand with the Dragon in the 1995 PCA match, winning games 11 and 13 with it (§17). Carlsen used the Sveshnikov in the 2018 World Championship.
- **Today.** About 80% of master games after 1.e4 c5 continue 2.Nf3 (Wikipedia). At the very top, White often avoids the main Open Sicilian with 3.Bb5 (Rossolimo) or 3.Bb5+ (Moscow), as in the 2018 World Championship. At club and online level, the Alapin (2.c3), the Smith–Morra Gambit, the Grand Prix Attack and even 2.Bc4 or 2.Qh5 are much more common than at the top, which is why the course gives them two full chapters.

---

## 4. Foundations: 1...c5 and the Open Sicilian

### 4.1 Why 1...c5?

- `sic-1c5` (B20, popular): 1.e4 c5
  - FEN: `rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2`
- `sic-2nf3` (B27, popular): 1.e4 c5 2.Nf3
  - FEN: `rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2`
- `open-2d6-3d4` (B50, popular): 1.e4 c5 2.Nf3 d6 3.d4
  - FEN: `rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3`

- **The idea in one sentence.** Black fights for the d4-square from the side with the c-pawn instead of copying White with 1...e5, which makes the game unbalanced from move one.
- **White's main plan** is 2.Nf3 and 3.d4, opening the center while ahead in development. Everything else (2.c3, 2.Nc3, 2.d4 with 3.c3, 2.f4, 3.Bb5) is an "anti-Sicilian" (§11–§15).
- **2...d6, 2...Nc6, 2...e6** are Black's three main second moves; each prepares a different family of systems (§4.6 and the tree in §1).

### 4.2 The big trade: 3.d4 cxd4 4.Nxd4

- `open-2d6-4nxd4` (B54, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4
  - FEN: `rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4`
- `open-2d6-5nc3` (B54, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3
  - FEN: `rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5`
- `open-2nc6-4nxd4` (B32, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4
  - FEN: `r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4`
- `open-2nc6-5nc3` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3
  - FEN: `r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5`
- `open-2e6-4nxd4` (B40, popular): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4
  - FEN: `rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4`

- **The pawn structure.** White's d-pawn has been traded for Black's c-pawn. Black now has **two center pawns** (d7/d6 and e7/e6) against White's **one** (e4). This is a long-term asset for Black: in many endgames the extra center pawn matters.
- **Half-open files.** Black has the half-open c-file (no Black pawn on it) for the rooks and queen, aimed at White's queenside (c3, c2). White has the half-open d-file, aimed at d6/d7.
- **What White gets.** A lead in development (the knight on d4 is already in play) and more space, which is why White usually attacks on the kingside or in the center, while Black counterattacks on the queenside.
- **Which side castles where.** In many main lines White castles queenside (O-O-O) and storms with the g- and h-pawns, and Black castles kingside and storms with the a- and b-pawns: an "opposite-side castling race", where tempo matters more than material.

### 4.3 Why 4...Nf6 and 5.Nc3? The Prins Variation

- `prins-5f3` (B55, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.f3 e5 6.Bb5+ Nbd7
  - FEN: `r1bqkb1r/pp1n1ppp/3p1n2/1B2p3/3NP3/5P2/PPP3PP/RNBQK2R w KQkq - 2 7`

- **4...Nf6 attacks e4.** White has to defend it. 5.Nc3 is the normal answer, but it blocks White's c-pawn, so White can no longer set up a "clamp" with c2–c4 (the Maróczy Bind, §6.6). That is why Black usually plays ...Nf6 before ...Nc6 or ...g6 in the 2...d6 lines.
- **5.f3 (Prins Variation)** defends e4 with a pawn and keeps c2–c4 possible. Black can answer 5...e5, and after 6.Bb5+ Nbd7 (the "Venice Attack" of the Prins) the engine calls the position level. Status: rare.

### 4.4 Recapture with the knight, not the queen

- `chekhover-4qxd4` (B53, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Qxd4 Nc6 5.Bb5 Bd7 6.Bxc6 Bxc6 7.Nc3 Nf6 8.Bg5 e6 9.O-O-O Be7
  - FEN: `r2qk2r/pp2bppp/2bppn2/6B1/3QP3/2N2N2/PPP2PPP/2KR3R w kq - 2 10`
- `sic-2d4-3qxd4` (B21, rare): 1.e4 c5 2.d4 cxd4 3.Qxd4 Nc6 4.Qd1 Nf6 5.Nc3 e6 6.Nf3 Bb4
  - FEN: `r1bqk2r/pp1p1ppp/2n1pn2/8/1b2P3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 7`
- `trap-4qxd4-nxd4` (B32, trap): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Qxd4 Nxd4 5.Nxd4
  - FEN: `r1bqkbnr/pp1ppppp/8/8/3NP3/8/PPP2PPP/RNB1KB1R b KQkq - 0 5`

- **The general rule.** After ...cxd4, White normally takes back with the knight. A queen on d4 can be hit by ...Nc6 with gain of time.
- **The Chekhover (4.Qxd4, B53)** works only because 4...Nc6 can be met by 5.Bb5, pinning the knight; after 5...Bd7 6.Bxc6 Bxc6 7.Nc3 Nf6 8.Bg5 e6 9.O-O-O Be7 the engine calls it level. Status: respectable.
- **2.d4 cxd4 3.Qxd4 Nc6** chases the queen at once: after 4.Qd1 Nf6 5.Nc3 e6 6.Nf3 Bb4 Black is comfortable (the engine calls it level). It is not a blunder, just a lost tempo. Status: rare.
- **The real blunder** is 4.Qxd4?? after 2...Nc6: the knight on c6 simply takes the queen (4...Nxd4). White gets a knight back after 5.Nxd4 and is a queen for a knight down. Engine: Black is winning. Status: trap.

### 4.5 The d5 square and an early ...e5

- `mistake-venice-5e5` (B56, dubious): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Bb5+ Bd7 7.Bxd7+ Qxd7 8.Nde2 Qc6 9.Ng3 Nbd7
  - FEN: `r3kb1r/pp1n1ppp/2qp1n2/4p3/4P3/2N3N1/PPP2PPP/R1BQK2R w KQkq - 4 10`
- `mistake-2e5` (B27, trap): 1.e4 c5 2.Nf3 e5 3.Nxe5 Nc6 4.Nxc6 dxc6
  - FEN: `r1bqkbnr/pp3ppp/2p5/2p5/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 5`

- **Why ...e5 is a big decision.** ...e5 kicks the d4-knight and grabs space, but it leaves a **hole on d5** (no Black pawn can ever attack d5 again once the c- and e-pawns are gone from c6/e6) and a **backward pawn on d6** (it can't be protected by another pawn and sits on a half-open file). Black plays ...e5 in the Najdorf, the Boleslavsky and the Sveshnikov anyway, because there Black gets enough activity and can control d5 with pieces.
- **Without ...a6: the Venice Attack.** In the 2...d6 Open Sicilian, 5...e5?! allows 6.Bb5+! Whether Black blocks with 6...Bd7 or 6...Nbd7, White gets a clear edge (engine). After 6...Bd7 7.Bxd7+ Qxd7 8.Nde2 the light-squared bishops are gone, which makes d5 even weaker, and the knight heads for g3 and f5 or d5. Status: dubious. Compare the Najdorf 6.Be2 e5 (§5.5): there ...a6 has taken the b5-square away from White's bishop and knight.
- **2...e5? at once** is simply a loose pawn: 3.Nxe5 wins it, because nothing defends e5. After 3...Nc6 4.Nxc6 dxc6 White is a clean pawn up (engine: White is much better). Status: trap.

### 4.6 Rare second moves: 2...g6 and 2...a6

- `hyper-2g6` (B32, rare): 1.e4 c5 2.Nf3 g6 3.d4 cxd4 4.Nxd4 Nc6
  - FEN: `r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5`
- `hyper-2g6-3c3` (B27, respectable): 1.e4 c5 2.Nf3 g6 3.c3 Bg7 4.d4 cxd4 5.cxd4 d5 6.e5 Nc6
  - FEN: `r1bqk1nr/pp2ppbp/2n3p1/3pP3/3P4/5N2/PP3PPP/RNBQKB1R w KQkq - 1 7`
- `okelly-3c3` (B28, rare): 1.e4 c5 2.Nf3 a6 3.c3 d5 4.exd5 Qxd5 5.d4 Nf6
  - FEN: `rnb1kb1r/1p2pppp/p4n2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 1 6`
- `okelly-5nc3-e5` (B28, rare): 1.e4 c5 2.Nf3 a6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Nf3 Bb4
  - FEN: `rnbqk2r/1p1p1ppp/p4n2/4p3/1b2P3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 7`
- `okelly-5e5-trap` (B28, trap): 1.e4 c5 2.Nf3 a6 3.d4 cxd4 4.Nxd4 Nf6 5.e5 Qa5+ 6.Nc3 Qxe5+
  - FEN: `rnb1kb1r/1p1ppppp/p4n2/4q3/3N4/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 7`

- **2...g6 (Hyperaccelerated Dragon).** After 3.d4 cxd4 4.Nxd4 Nc6 it is simply an Accelerated Dragon (§6.5). White's most testing answer is 3.c3!, aiming for a big pawn center: after 3...Bg7 4.d4 cxd4 5.cxd4 d5 6.e5 Nc6 the engine says White is clearly better (more space). Status: rare for 2...g6, respectable for 3.c3.
- **2...a6 (O'Kelly Variation).** A waiting move that makes the Open Sicilian awkward for White: after 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5! White's knight has no b5-square and there is no Bb5+, so the d4-knight must retreat (6.Nf3 Bb4 is level). The simplest answer is 3.c3 (or 3.c4), when ...a6 is a wasted move: after 3...d5 4.exd5 Qxd5 5.d4 Nf6 White is slightly better.
- **O'Kelly trap.** 3.d4 cxd4 4.Nxd4 Nf6 5.e5? Qa5+! is a check and a double attack on the king and the e5-pawn; after 6.Nc3 Qxe5+ Black has won a pawn (engine: Black is clearly better). Status: trap.

---

## 5. The Najdorf: 5...a6 (B90–B99)

### 5.1 Three jobs for one small move

- `najdorf` (B90, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6
  - FEN: `rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6`

- **5...a6** takes the b5-square from White's knights and bishop (no Ndb5, no Bb5+), prepares ...e5 without allowing the Venice Attack (§4.5), and prepares ...b5 to gain space on the queenside and put the bishop on b7.
- **Two structures.** With ...e5 Black accepts the d5 hole and the backward d6-pawn in exchange for space and active pieces (§5.5). With ...e6 Black keeps a compact "small center" (pawns on d6 and e6) that controls d5 and can later break with ...d5 or ...b5–b4; this is a Scheveningen structure (§8).
- **Typical Black set-up.** ...b5, ...Bb7, ...Nbd7, ...Qc7, ...Be7 and a later ...b4 to chase White's c3-knight away from defending e4.
- **Status.** Wikipedia calls it Black's most popular Sicilian system; it was Fischer's and Kasparov's main weapon.

### 5.2 The English Attack: 6.Be3, f3, Qd2, g4 and O-O-O

- `najdorf-6be3` (B90, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3
  - FEN: `rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6`
- `najdorf-be3-e5` (B90, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 e5 7.Nb3 Be6 8.f3 Be7 9.Qd2 O-O 10.O-O-O Nbd7
  - FEN: `r2q1rk1/1p1nbppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R w - - 5 11`
- `najdorf-be3-e5-race` (B90, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 e5 7.Nb3 Be6 8.f3 Be7 9.Qd2 O-O 10.O-O-O Nbd7 11.g4 b5 12.g5 b4 13.Ne2 Ne8
  - FEN: `r2qnrk1/3nbppp/p2pb3/4p1P1/1p2P3/1N2BP2/PPPQN2P/2KR1B1R w - - 2 14`
- `najdorf-be3-e6` (B90, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 e6 7.f3 b5 8.Qd2 Nbd7 9.g4 h6 10.O-O-O Bb7 11.h4 b4 12.Na4 Qa5 13.b3
  - FEN: `r3kb1r/1b1n1pp1/p2ppn1p/q7/Np1NP1PP/1P2BP2/P1PQ4/2KR1B1R b kq - 0 13`
- `najdorf-6f3` (B90, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.f3 e5 7.Nb3 Be6 8.Be3
  - FEN: `rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R b KQkq - 3 8`

- **White's plan.** Be3, f3, Qd2, O-O-O, then g4–g5 and h4–h5 against Black's kingside. f3 supports e4 and g4 and takes the g4-square from Black's knight. Wikipedia calls the English Attack White's most popular reply to the Najdorf today; the name comes from the English grandmasters (Nunn, Short, Chandler) who popularized it in the 1980s.
- **6...e5 7.Nb3 Be6 8.f3 Be7 9.Qd2 O-O 10.O-O-O Nbd7.** Black's bishop on e6 fights for d5; Black's attack is ...b5–b4 (and ...a5–a4) against White's king, White's is g4–g5. After 11.g4 b5 12.g5 b4 13.Ne2 Ne8 the race is on; the engine gives White a small edge, but both kings are in danger. 6.f3 e5 7.Nb3 Be6 8.Be3 reaches the same position as 6.Be3 e5 7.Nb3 Be6 8.f3.
- **6...e6 7.f3 b5 8.Qd2 Nbd7 9.g4 h6 10.O-O-O Bb7 11.h4 b4 12.Na4 Qa5 13.b3.** Black's ...h6 slows g4–g5; ...b4 drives the knight to the edge, and ...Qa5 attacks it (it is not a pin: the a4-knight is simply undefended until 13.b3). By the end the engine gives White a clear edge, but the position is very sharp and Black's counterplay against a4 and c3 is real; it remains a main line in practice.

### 5.3 6...Ng4: chasing the e3-bishop

- `najdorf-be3-ng4` (B90, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 Ng4 7.Bg5 h6 8.Bh4 g5 9.Bg3 Bg7 10.Be2 h5 11.Bxg4 Bxg4 12.f3 Be6
  - FEN: `rn1qk2r/1p2ppb1/p2pb3/6pp/3NP3/2N2PB1/PPP3PP/R2QK2R w KQkq - 1 13`
- `najdorf-be3-ng4-bc1` (B90, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 Ng4 7.Bc1 Nf6 8.Be3 Ng4
  - FEN: `rnbqkb1r/1p2pppp/p2p4/8/3NP1n1/2N1B3/PPP2PPP/R2QKB1R w KQkq - 6 9`

- **Why it works here.** Without f3, the e3-bishop can be hit by ...Ng4. After 7.Bg5 h6 8.Bh4 g5 9.Bg3 Bg7 10.Be2 h5 11.Bxg4 Bxg4 12.f3 Be6, Black has gained space on the kingside and the bishop pair; the engine calls it level.
- **7.Bc1 Nf6 8.Be3 Ng4** repeats the position. If neither side deviates, it is a draw by repetition; White avoids it with 7.Bg5, or by playing 6.f3 before Be3 (§5.2).
- **Compare the Dragon.** The same ...Ng4 idea is a mistake in the Dragon move order 6.Be3 Ng4? because 7.Bb5+! comes with check (no ...a6), see §6.1. ...a6 makes ...Ng4 possible here.

### 5.4 6.Bg5 e6 7.f4: the classical attack, the Poisoned Pawn, Göteborg

- `najdorf-6bg5` (B96, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4
  - FEN: `rnbqkb1r/1p3ppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R b KQkq - 0 7`
- `najdorf-bg5-be7` (B99, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Be7 8.Qf3 Qc7 9.O-O-O Nbd7 10.g4 b5 11.Bxf6 Nxf6 12.g5 Nd7 13.f5
  - FEN: `r1b1k2r/2qnbppp/p2pp3/1p3PP1/3NP3/2N2Q2/PPP4P/2KR1B1R b kq - 0 13`
- `najdorf-bg5-nbd7` (B96, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Nbd7 8.Qf3 Qc7 9.O-O-O b5
  - FEN: `r1b1kb1r/2qn1ppp/p2ppn2/1p4B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R w kq - 0 10`
- `najdorf-poisoned-pawn` (B97, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Qb6 8.Qd2 Qxb2 9.Rb1 Qa3
  - FEN: `rnb1kb1r/1p3ppp/p2ppn2/6B1/3NPP2/q1N5/P1PQ2PP/1R2KB1R w Kkq - 2 10`
- `najdorf-qb6-nb3` (B97, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Qb6 8.Nb3 Be7 9.Qf3 Nbd7 10.O-O-O Qc7
  - FEN: `r1b1k2r/1pqnbppp/p2ppn2/6B1/4PP2/1NN2Q2/PPP3PP/2KR1B1R w kq - 7 11`
- `najdorf-goteborg` (B98, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Be7 8.Qf3 h6 9.Bh4 g5 10.fxg5 Nfd7 11.Nxe6 fxe6 12.Qh5+ Kf8
  - FEN: `rnbq1k1r/1p1nb3/p2pp2p/6PQ/4P2B/2N5/PPP3PP/R3KB1R w KQ - 2 13`

- **White's idea.** Bg5 pins the f6-knight to the queen; f4 prepares e4–e5 (hitting the pinned knight) or f4–f5 (hitting e6). Qf3 and O-O-O follow.
- **7...Be7 8.Qf3 Qc7 9.O-O-O Nbd7 10.g4 b5 11.Bxf6 Nxf6 12.g5 Nd7 13.f5** is the old main line (B99): White trades on f6 to gain time for the g- and f-pawn advance; Black counterattacks with ...b4 and ...Nc5. The engine prefers White a little.
- **7...Nbd7 8.Qf3 Qc7 9.O-O-O b5** is the modern main set-up: the engine calls it level.
- **The Poisoned Pawn: 7...Qb6.** The queen hits b2 and, through the d4-knight, puts pressure on d4 (a double attack). After 8.Qd2 Qxb2 9.Rb1 Qa3 Black has grabbed a pawn and White has a big lead in development; the engine calls it about level. This is razor-sharp theory and the course teaches **the idea only**. 8.Nb3 avoids the gambit (level after 8...Be7 9.Qf3 Nbd7 10.O-O-O Qc7). Spassky–Fischer 1972, game 11 (§17) went 9.Nb3 instead of 9.Rb1.
- **The Göteborg Variation: 7...Be7 8.Qf3 h6 9.Bh4 g5?! 10.fxg5 Nfd7 11.Nxe6!.** In round 14 of the 1955 Göteborg (Gothenburg) Interzonal, three Argentine players tried 9...g5 against three Soviet players and all three lost (chessgames.com). The knight sacrifice 11.Nxe6 is the engine's top move; after 11...fxe6 12.Qh5+ Kf8 the engine says White is clearly better, but not winning by force. Geller–Panno is in §17.

### 5.5 6.Be2: the Opočenský Variation, and why 7.Nf5?! fails

- `najdorf-6be2` (B92, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be2 e5 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6
  - FEN: `rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 w - - 6 10`
- `najdorf-be2-nf5` (B92, dubious): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be2 e5 7.Nf5 d5 8.Bg5 d4 9.Bxf6 Qxf6 10.Nd5 Qd8
  - FEN: `rnbqkb1r/1p3ppp/p7/3NpN2/3pP3/8/PPP1BPPP/R2QK2R w KQkq - 2 11`

- **6.Be2 e5 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6.** The quiet main line: White plays positionally (a4 to stop ...b5, Nd5 to use the hole), Black develops naturally. The engine gives White a small edge. A beginner-friendly way to learn the ...e5 structure.
- **7.Nf5?! d5!** The knight jump to f5 looks active, but Black strikes in the center at once: 8.Bg5 d4 9.Bxf6 Qxf6 10.Nd5 Qd8 and the engine prefers Black slightly. (Taking the knight with 7...Bxf5 8.exf5 d5 is weaker: then White is slightly better.) Status: dubious for White.

### 5.6 6.Bc4: the Fischer–Sozin Attack

- `najdorf-6bc4` (B87, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bc4 e6 7.Bb3 b5 8.O-O Be7 9.Qf3 Qc7 10.Qg3 O-O 11.Bh6 Ne8
  - FEN: `rnb1nrk1/2q1bppp/p2pp2B/1p6/3NP3/1BN3Q1/PPP2PPP/R4RK1 w - - 8 12`
- `najdorf-sozin-nxe4` (B87, dubious): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bc4 e6 7.Bb3 b5 8.O-O b4 9.Na4 Nxe4 10.Re1 d5 11.Bf4
  - FEN: `rnbqkb1r/5ppp/p3p3/3p4/Np1NnB2/1B6/PPP2PPP/R2QR1K1 b kq - 1 11`

- **The bishop's target.** From c4 (later b3) the bishop aims at e6 and f7, the weak points of Black's ...e6 structure, which makes sacrifices on e6 (Nxe6, Bxe6) and Nd5 possible. Black answers with ...b5 to gain time and ...Nbd7–c5 or ...Nc6–a5 to trade the bishop.
- **Main line here:** 6...e6 7.Bb3 b5 8.O-O Be7 9.Qf3 Qc7 10.Qg3 O-O 11.Bh6 Ne8: White hits g7, Black defends; the engine calls it about level.
- **The ...b4/...Nxe4 pawn grab.** After 8...b4 9.Na4, 9...Nxe4?! opens the e-file against Black's king: 10.Re1 d5 11.Bf4 and White's pieces pour in (engine: White is much better). 9...Bd7 or 9...Be7 is correct. Status: dubious.

### 5.7 Other sixth moves

- `najdorf-6h3` (B90, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.h3 e5 7.Nde2 h5 8.g3 Be6 9.Bg2 b5
  - FEN: `rn1qkb1r/5pp1/p2pbn2/1p2p2p/4P3/2N3PP/PPP1NPB1/R1BQK2R w KQkq - 0 10`
- `najdorf-6nb3` (B90, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Nb3 e6 7.Be2 Be7 8.O-O
  - FEN: `rnbqk2r/1p2bppp/p2ppn2/8/4P3/1NN5/PPP1BPPP/R1BQ1RK1 b kq - 3 8`
- `najdorf-6f4` (B93, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.f4 e5 7.Nf3 Nbd7 8.a4 Be7
  - FEN: `r1bqk2r/1p1nbppp/p2p1n2/4p3/P3PP2/2N2N2/1PP3PP/R1BQKB1R w KQkq - 1 9`
- `najdorf-6g3` (B91, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.g3 e5 7.Nde2 Be7 8.Bg2 O-O 9.O-O b5
  - FEN: `rnbq1rk1/4bppp/p2p1n2/1p2p3/4P3/2N3P1/PPP1NPBP/R1BQ1RK1 w - - 0 10`

- **6.h3 (Adams Attack).** Named after Weaver Adams (Wikipedia). White prepares g4 to kick the f6-knight. Fischer used it to beat Bolbochan (Stockholm 1962) and Najdorf (Varna 1962, §17). 6...e5 7.Nde2 h5 is one answer (stopping g4); the engine calls it level.
- **6.Nb3, 6.f4 (Amsterdam), 6.g3 (Zagreb).** Quieter tries; in each case Black can play ...e5 or ...e6 normally. All rated level by the engine. Status: rare.

---

## 6. The Dragon and the Accelerated Dragon

### 6.1 The Dragon bishop, and why White plays f3

- `dragon` (B70, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6
  - FEN: `rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6`
- `dragon-yugoslav` (B76, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6
  - FEN: `r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 3 9`
- `dragon-7qd2-ng4` (B72, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.Qd2 Ng4 8.Bg5 h6 9.Bh4 Nc6 10.Nb3 Be6 11.f3 Nge5
  - FEN: `r2qk2r/pp2ppb1/2npb1pp/4n3/4P2B/1NN2P2/PPPQ2PP/R3KB1R w KQkq - 1 12`
- `dragon-6be3-ng4-trap` (B72, trap): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Ng4 7.Bb5+ Nc6 8.Nxc6 bxc6 9.Bxc6+ Bd7 10.Bxa8 Nxe3 11.fxe3 Qxa8
  - FEN: `q3kb1r/p2bpp1p/3p2p1/8/4P3/2N1P3/PPP3PP/R2QK2R w KQk - 0 12`

- **The name.** Fyodor Dus-Chotimirsky said he named it in 1901 because Black's pawn chain (d6, e7, f7, g6, h7) reminded him of the constellation Draco; Edward Winter could not find a printed use before 1914 (§Naming conflicts).
- **The long diagonal.** ...g6 and ...Bg7 put the bishop on the a1–h8 diagonal, aiming at d4, c3, b2 and a1, toward the queenside where White's king often goes. Black rarely trades it: without it, Black's king is weak and the counterattack disappears.
- **The Yugoslav Attack: 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6.** White prepares O-O-O, Bh6 (to trade the Dragon bishop) and h4–h5 (to open the h-file). The engine gives White a small but clear edge in the Dragon tabiyas; by 1995 Wikipedia describes the Dragon as "a once-popular defence which at the time was only played at the top level by a few specialists". Wikipedia calls the Yugoslav Attack White's most dangerous try.
- **Why 7.f3?** Without it, ...Ng4 hits the e3-bishop: after 7.Qd2?! Ng4 8.Bg5 h6 9.Bh4 Nc6 10.Nb3 Be6 11.f3 Nge5 the bishop has been chased and White's edge is smaller (engine: White still slightly better). f3 also supports e4 and prepares g4.
- **The Dragon trap: 6.Be3 Ng4? 7.Bb5+!** Here ...Ng4 comes too early: with no ...a6, the bishop can give check on b5, and the check does two jobs. The g4-knight is guarded only by the c8-bishop (White's queen already attacks it along d1–g4), so if Black blocks with 7...Bd7, that bishop is pinned to the king and can't recapture on g4, and 8.Qxg4 wins the knight; 7...Nbd7 cuts the c8-bishop off from g4 just the same. And if Black blocks with ...Nc6, White takes twice on c6 and checks the king while hitting the a8-rook. After 7...Nc6 8.Nxc6 bxc6 9.Bxc6+ Bd7 10.Bxa8 Nxe3 11.fxe3 Qxa8 White has won the exchange and a pawn (engine: White is much better). Other replies to the check lose even more (7...Bd7 8.Qxg4). Status: trap.

### 6.2 The Yugoslav race: 9.Bc4, the Soltis and ...Rxc3

- `dragon-yug-9bc4` (B78, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4 Bd7 10.O-O-O Rc8 11.Bb3 Ne5 12.Kb1
  - FEN: `2rq1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/1K1R3R b - - 10 12`
- `dragon-yug-soltis` (B78, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4 Bd7 10.O-O-O Rc8 11.Bb3 Ne5 12.h4 h5 13.Bg5 Rc5
  - FEN: `3q1rk1/pp1bppb1/3p1np1/2r1n1Bp/3NP2P/1BN2P2/PPPQ2P1/2KR3R w - - 2 14`
- `dragon-soltis-rxc3` (B78, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4 Bd7 10.O-O-O Rc8 11.Bb3 Ne5 12.h4 h5 13.Bg5 Rc5 14.Bh6 Qa5 15.Kb1 Rfc8 16.g4 Rxc3 17.Bxg7 Kxg7 18.bxc3 hxg4
  - FEN: `2r5/pp1bppk1/3p1np1/q3n3/3NP1pP/1BP2P2/P1PQ4/1K1R3R w - - 0 19`

- **9.Bc4 Bd7 10.O-O-O Rc8 11.Bb3 Ne5 12.Kb1.** The bishop on b3 is out of reach of ...d5 and aims at f7; Black's knight jumps ...Ne5–c4 to trade it, the rook on c8/c4 uses the half-open c-file, and ...b5–b4 or ...a5–a4 follow. White's attack is h4–h5, Bh6 and g4. The engine gives White a clear edge after 12.Kb1.
- **12.h4 h5 (Soltis Variation).** Black stops h4–h5 at once by putting a pawn on h5. White answers 13.Bg5 (pinning f6 and eyeing ...h5) and later g4 to break open the h-file; after 13...Rc5 the engine gives White a small edge.
- **The exchange sacrifice ...Rxc3.** Giving a rook for White's c3-knight (the "exchange") wrecks the pawns in front of White's king (bxc3) and removes a defender of e4. In the Soltis line, if White plays 14.Bh6 Qa5 15.Kb1 Rfc8 16.g4?!, then 16...Rxc3! 17.Bxg7 Kxg7 18.bxc3 hxg4 leaves Black slightly better (engine), even though Black is an exchange down for a pawn. (White's better 14th move is 14.Kb1.)
- **Model games.** Fischer–Larsen 1958 (White's h-file attack with a rook sacrifice on h5), Karpov–Korchnoi 1974 (h4–h5 and Bh6 in one textbook game) and Anand–Kasparov 1995 game 11 (Black's ...h5, ...Nc4 and ...b5 holding and winning). All in §17.

### 6.3 9.O-O-O d5! and 9.g4

- `dragon-yug-9ooo` (B76, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.O-O-O d5 10.exd5 Nxd5 11.Nxc6 bxc6 12.Bd4 Bxd4 13.Qxd4 Qb6
  - FEN: `r1b2rk1/p3pp1p/1qp3p1/3n4/3Q4/2N2P2/PPP3PP/2KR1B1R w - - 1 14`
- `dragon-yug-9g4` (B76, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.g4 Be6 10.O-O-O Nxd4 11.Bxd4 Qa5 12.a3 Rab8 13.h4 b5
  - FEN: `1r3rk1/p3ppbp/3pbnp1/qp6/3BP1PP/P1N2P2/1PPQ4/2KR1B1R w - - 0 14`

- **9.O-O-O d5!** When White castles before Bc4, Black frees the game at once with ...d5: 10.exd5 Nxd5 11.Nxc6 bxc6 12.Bd4 Bxd4 13.Qxd4 Qb6 and the engine gives White only a small edge, with an open game where Black's pieces are active.
- **9.g4 Be6 10.O-O-O Nxd4 11.Bxd4 Qa5 12.a3 Rab8 13.h4 b5.** White pushes g4 first to prepare h4–h5; Black trades on d4 and attacks with the b-pawn. The engine calls it about level.

### 6.4 Quieter tries: 6.Be2, 6.Bc4 and 6.f4

- `dragon-6be2` (B74, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be2 Bg7 7.O-O O-O 8.Be3 Nc6 9.Nb3 Be6 10.f4 Qc8
  - FEN: `r1q2rk1/pp2ppbp/2npbnp1/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w - - 1 11`
- `dragon-6bc4` (B70, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Bc4 Bg7 7.h3 O-O 8.O-O Nc6 9.Be3 Nxe4 10.Nxe4 d5 11.Nxc6 bxc6 12.Bd3 dxe4 13.Bxe4
  - FEN: `r1bq1rk1/p3ppbp/2p3p1/8/4B3/4B2P/PPP2PP1/R2Q1RK1 b - - 0 13`
- `dragon-levenfish` (B71, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.f4 Nbd7
  - FEN: `r1bqkb1r/pp1npp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R w KQkq - 1 7`
- `dragon-levenfish-trap` (B71, trap): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.f4 Bg7 7.e5 dxe5 8.fxe5 Ng4 9.Bb5+ Kf8 10.Ne6+ Bxe6 11.Qxd8#
  - FEN: `rn1Q1k1r/pp2ppbp/4b1p1/1B2P3/6n1/2N5/PPP3PP/R1B1K2R b KQ - 0 11`

- **6.Be2 (Classical Dragon).** White castles kingside and plays f4–f5 or Nb3 and f4: 6...Bg7 7.O-O O-O 8.Be3 Nc6 9.Nb3 Be6 10.f4 Qc8. A positional game; the engine calls it level. Status: rare at the top.
- **6.Bc4 and the fork trick.** A beginner favorite: the bishop aims at f7. After 7.h3 O-O 8.O-O Nc6 9.Be3, Black has the "fork trick" 9...Nxe4! 10.Nxe4 d5: the d-pawn forks the c4-bishop and the e4-knight, and after 11.Nxc6 bxc6 12.Bd3 dxe4 13.Bxe4 material is level and Black is comfortable (engine: level). Typical tactic, not a trap.
- **6.f4 (Levenfish Attack).** White threatens e4–e5. 6...Nbd7 (the traditional main line, controlling e5) is safe; the engine slightly prefers 6...Nc6. Status: rare.
- **The Levenfish trap.** 6...Bg7?! allows 7.e5! dxe5 8.fxe5. The knight must go to d7 (8...Nfd7). 8...Ng4? 9.Bb5+! is the trap: 9...Nc6 10.Nxc6 bxc6 11.Bxc6+ Bd7 12.Bxa8 loses the exchange, and 9...Kf8?? 10.Ne6+! forks the king and the queen: 10...fxe6 11.Qxd8+ wins the queen, and 10...Bxe6 11.Qxd8# is mate. (Engine: after 8...Ng4? White's 9.Bb5+ is the only good move; any other move lets Black win the e5-pawn with a better game.) Status: trap.

### 6.5 The Accelerated Dragon: ...g6 before ...d6

- `accel-dragon` (B35, respectable): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.Nc3 Bg7 6.Be3 Nf6 7.Bc4
  - FEN: `r1bqk2r/pp1pppbp/2n2np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq - 5 7`
- `accel-dragon-main` (B77, respectable): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.Nc3 Bg7 6.Be3 Nf6 7.Bc4 O-O 8.Bb3 d6 9.f3 Bd7 10.Qd2 Nxd4 11.Bxd4 b5
  - FEN: `r2q1rk1/p2bppbp/3p1np1/1p6/3BP3/1BN2P2/PPPQ2PP/R3K2R w KQ - 0 12`
- `accel-d5` (B34, respectable): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.Nc3 Bg7 6.Be3 Nf6 7.Be2 O-O 8.O-O d5
  - FEN: `r1bq1rk1/pp2ppbp/2n2np1/3p4/3NP3/2N1B3/PPP1BPPP/R2Q1RK1 w - - 0 9`
- `accel-reshevsky-trap` (B35, trap): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.Nc3 Bg7 6.Be3 Nf6 7.Bc4 O-O 8.Bb3 Na5 9.e5 Ne8 10.Bxf7+ Kxf7 11.Ne6 dxe6 12.Qxd8
  - FEN: `r1bQnr2/pp2pkbp/4p1p1/n3P3/8/2N1B3/PPP2PPP/R3K2R b KQ - 0 12`

- **The idea.** With 2...Nc6 and 4...g6 Black skips ...d6, so if White plays the Yugoslav set-up Black may be able to play ...d7–d5 in one move instead of two. 7.Be2 O-O 8.O-O d5 is a clean example: the engine calls it level.
- **The cost.** White can set up the Maróczy Bind with 5.c4 (§6.6), because Black has not hit e4 with ...Nf6 yet, so White doesn't need Nc3 first.
- **Transposition.** After 7.Bc4 O-O 8.Bb3 d6 9.f3 Bd7 10.Qd2 the position is a Yugoslav Attack (B77) after all; 10...Nxd4 11.Bxd4 b5 is a typical continuation (engine: White slightly better).
- **The Fischer–Reshevsky trap (8...Na5?).** After 5.Nc3 Bg7 6.Be3 Nf6 7.Bc4 O-O 8.Bb3, the natural-looking 8...Na5?, attacking the bishop, runs into 9.e5!: the f6-knight is attacked and the a5-knight is loose. 9...Ne8? then loses at once to 10.Bxf7+! Kxf7 (10...Rxf7 11.Ne6 is also hopeless) 11.Ne6!, attacking the queen and threatening Nxg7/Nxd8; after 11...dxe6 12.Qxd8 Black has two minor pieces for the queen and is lost (engine). Black's best after 9.e5 is 9...Nxb3, but White is still clearly better. Fischer–Reshevsky, US Championship 1958/59 (§17) followed the trap to move 12. Status: trap.

### 6.6 The Maróczy Bind, the Gurgenidze, the Breyer and 5.Nxc6

- `accel-maroczy` (B38, respectable): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.c4 Bg7 6.Be3 Nf6 7.Nc3 O-O 8.Be2 d6 9.O-O Bd7
  - FEN: `r2q1rk1/pp1bppbp/2np1np1/8/2PNP3/2N1B3/PP2BPPP/R2Q1RK1 w - - 2 10`
- `accel-gurgenidze` (B36, respectable): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.c4 Nf6 6.Nc3 Nxd4 7.Qxd4 d6
  - FEN: `r1bqkb1r/pp2pp1p/3p1np1/8/2PQP3/2N5/PP3PPP/R1B1KB1R w KQkq - 0 8`
- `accel-breyer-ng4` (B39, respectable): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.c4 Bg7 6.Be3 Nf6 7.Nc3 Ng4 8.Qxg4 Nxd4 9.Qd1 Ne6
  - FEN: `r1bqk2r/pp1pppbp/4n1p1/8/2P1P3/2N1B3/PP3PPP/R2QKB1R w KQkq - 2 10`
- `accel-5nxc6` (B34, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.Nxc6 bxc6 6.Qd4 Nf6 7.e5 Nd5
  - FEN: `r1bqkb1r/p2ppp1p/2p3p1/3nP3/3Q4/8/PPP2PPP/RNB1KB1R w KQkq - 1 8`

- **The Maróczy Bind (5.c4).** White's pawns on c4 and e4 clamp the d5-square, so Black's freeing ...d5 is very hard and ...b5 is difficult too. Named after Géza Maróczy. Black plays patiently (...d6, ...Bd7, ...a5, ...Nxd4 and ...Bc6) and waits for a chance to break with ...b5 or ...f5. The engine gives White a pleasant edge. The same bind appears in the Kan (§10.3), the Taimanov with 5.Nb5 (§10.2) and the Moscow with 5.c4 (§15.2).
- **5.c4 Nf6 6.Nc3 Nxd4 7.Qxd4 d6 (Gurgenidze).** Trading knights reduces White's space advantage.
- **5.c4 Bg7 6.Be3 Nf6 7.Nc3 Ng4! (Breyer).** The ...Ng4 trick: 8.Qxg4 Nxd4 regains the piece, because the d4-knight was White's and the c6-knight takes it; after 9.Qd1 Ne6 Black has traded a pair of minor pieces, but the engine still gives White a clear edge.
- **5.Nxc6 bxc6** gives Black a strong pawn center (c6, d7, e7); after 6.Qd4 Nf6 7.e5 Nd5 the engine calls it level. Status: rare.

---

## 7. The Classical (5...Nc6), Richter–Rauzer, Sozin and Boleslavsky

### 7.1 5...Nc6

- `classical` (B56, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6
  - FEN: `r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6`
- `classical-2nc6-order` (B56, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 d6
  - FEN: `r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6`
- `classical-6be3-ng4` (B56, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Be3 Ng4 7.Bb5 Nxe3 8.fxe3 Bd7
  - FEN: `r2qkb1r/pp1bpppp/2np4/1B6/3NP3/2N1P3/PPP3PP/R2QK2R w KQkq - 1 9`

- **The idea.** Black develops the queen's knight toward the center and keeps all options (...e6, ...e5, ...g6). The same position comes from 2...Nc6 with 5...d6.
- **6.Be3?! Ng4!** Again ...Ng4 hits the e3-bishop: 7.Bb5 Nxe3 8.fxe3 Bd7 and Black has the bishop pair (engine: level). This is why White plays 6.Bg5, 6.Bc4 or 6.Be2.

### 7.2 The Richter–Rauzer: 6.Bg5

- `rauzer` (B63, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bg5 e6 7.Qd2
  - FEN: `r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq - 1 7`
- `rauzer-a6` (B69, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bg5 e6 7.Qd2 a6 8.O-O-O Bd7 9.f4 Be7 10.Nf3 b5 11.Bxf6 gxf6
  - FEN: `r2qk2r/3bbp1p/p1nppp2/1p6/4PP2/2N2N2/PPPQ2PP/2KR1B1R w kq - 0 12`
- `rauzer-be7` (B65, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bg5 e6 7.Qd2 Be7 8.O-O-O O-O 9.f4 Nxd4 10.Qxd4 Qa5
  - FEN: `r1b2rk1/pp2bppp/3ppn2/q5B1/3QPP2/2N5/PPP3PP/2KR1B1R w - - 1 11`
- `rauzer-6g6` (B60, dubious): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bg5 g6 7.Bxf6 exf6
  - FEN: `r1bqkb1r/pp3p1p/2np1pp1/8/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq - 0 8`
- `rauzer-6e5` (B60, dubious): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bg5 e5 7.Bxf6 gxf6 8.Nf5 Bxf5 9.exf5
  - FEN: `r2qkb1r/pp3p1p/2np1p2/4pP2/8/2N5/PPP2PPP/R2QKB1R b KQkq - 0 9`

- **Names.** Kurt Richter introduced 6.Bg5; Vsevolod Rauzer added the plan Qd2 and O-O-O (Wikipedia).
- **The idea.** Bg5 stops ...g6 (a Dragon would now be met by Bxf6) and threatens Bxf6, doubling Black's f-pawns. 6...e6 7.Qd2 is the main line; White castles queenside and plays f4 (and sometimes f4–f5 or e4–e5).
- **Bxf6 gxf6.** Black's pawns are broken (doubled f-pawns, no h-file cover), but Black gets the bishop pair and the g-file for a rook. In 7...a6 8.O-O-O Bd7 9.f4 Be7 10.Nf3 b5 11.Bxf6 gxf6 the engine gives White a small edge.
- **7...Be7 8.O-O-O O-O 9.f4 Nxd4 10.Qxd4 Qa5.** Black trades on d4, and the a5-queen eyes the g5-bishop along the 5th rank (no pin). Rechecked during course writing: White is slightly better.
- **Typical mistakes.** 6...g6?! 7.Bxf6 exf6 leaves Black with a Dragon whose pawns are broken (engine: White is better; status dubious). 6...e5? 7.Bxf6 gxf6 8.Nf5 Bxf5 9.exf5 gives White the d5-square, the better pawns and the better minor pieces (engine: White is clearly better; status dubious).

### 7.3 The Sozin (6.Bc4) and the Velimirović Attack

- `sozin` (B88, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bc4 e6 7.Bb3 Be7 8.Be3 O-O 9.f4
  - FEN: `r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/1BN1B3/PPP3PP/R2QK2R b KQ - 0 9`
- `sozin-qb6` (B57, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bc4 Qb6 7.Nb3 e6 8.O-O Be7 9.Be3 Qc7
  - FEN: `r1b1k2r/ppq1bppp/2nppn2/8/2B1P3/1NN1B3/PPP2PPP/R2Q1RK1 w kq - 4 10`
- `velimirovic` (B89, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bc4 e6 7.Be3 Be7 8.Qe2 a6 9.O-O-O Qc7 10.Bb3 Na5 11.g4 b5 12.g5 Nxb3+ 13.axb3 Nd7
  - FEN: `r1b1k2r/2qnbppp/p2pp3/1p4P1/3NP3/1PN1B3/1PP1QP1P/2KR3R w kq - 1 14`
- `velimirovic-nf5` (B89, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bc4 e6 7.Be3 Be7 8.Qe2 a6 9.O-O-O Qc7 10.Bb3 Na5 11.g4 b5 12.g5 Nxb3+ 13.axb3 Nd7 14.Nf5 exf5 15.Nd5 Qd8 16.exf5
  - FEN: `r1bqk2r/3nbppp/p2p4/1p1N1PP1/8/1P2B3/1PP1QP1P/2KR3R b kq - 0 16`
- `magnus-smith-trap` (B57, trap): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bc4 g6 7.Nxc6 bxc6 8.e5 dxe5 9.Bxf7+ Kxf7 10.Qxd8
  - FEN: `r1bQ1b1r/p3pk1p/2p2np1/4p3/8/2N5/PPP2PPP/R1B1K2R b KQ - 0 10`

- **The Sozin (Veniamin Sozin).** 6.Bc4 aims at e6 and f7; after 6...e6 7.Bb3 Be7 8.Be3 O-O 9.f4 (the Fischer Variation) White plans f4–f5. The engine calls it level.
- **6...Qb6 (Anti-Sozin).** The queen hits the d4-knight (attacked twice now, by the queen and the c6-knight) and the b2-pawn: a double attack. White answers 7.Nb3 and the engine calls it level.
- **The Velimirović Attack** (Dragoljub Velimirović): 7.Be3 Be7 8.Qe2 a6 9.O-O-O Qc7 10.Bb3 Na5 11.g4 b5 12.g5 Nxb3+ 13.axb3 Nd7. White castles queenside and storms with the g-pawn. The famous sacrifice 14.Nf5!? exf5 15.Nd5 Qd8 16.exf5 gives up a knight to open the e-file and use d5; the engine calls it level (sound, but not winning).
- **The Magnus Smith Trap (B57).** After 6.Bc4 g6 7.Nxc6 bxc6 8.e5, the natural 8...dxe5?? loses to 9.Bxf7+! Kxf7 10.Qxd8: 8...dxe5 opened the d-file, and the bishop check pulls the king to f7, where it no longer guards the queen on d8. 8...Ng4 is the right answer (engine: White only slightly better). 6...g6 itself is only slightly inaccurate. Status: trap.

### 7.4 The Boleslavsky: 6.Be2 e5

- `boleslavsky` (B59, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Be2 e5 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6
  - FEN: `r2q1rk1/pp2bppp/2npbn2/4p3/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 w - - 6 10`
- `boleslavsky-7nf3` (B58, rare): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Be2 e5 7.Nf3 h6 8.O-O Be7 9.Re1 O-O 10.h3 Be6
  - FEN: `r2q1rk1/pp2bpp1/2npbn1p/4p3/4P3/2N2N1P/PPP1BPP1/R1BQR1K1 w - - 1 11`

- **The idea** (Isaac Boleslavsky): the same ...e5 structure as the Najdorf (d5 hole, d6-pawn) but with ...Nc6 instead of ...a6. 6.Be2 can't play Bb5+ any more, so ...e5 is safe: 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6 and 7.Nf3 h6 8.O-O Be7 9.Re1 O-O 10.h3 Be6 are both level according to the engine.

---

## 8. The Scheveningen: 5...e6 (B80–B85)

### 8.1 The small center and the Keres Attack

- `scheveningen` (B80, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6
  - FEN: `rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6`
- `keres-6g4` (B81, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6 6.g4 h6 7.h4 Nc6 8.Rg1 d5 9.exd5 Nxd5 10.Nxd5 exd5 11.Be3
  - FEN: `r1bqkb1r/pp3pp1/2n4p/3p4/3N2PP/4B3/PPP2P2/R2QKBR1 b Qkq - 1 11`
- `keres-nxg4-trap` (B81, trap): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6 6.g4 Nxg4 7.Qxg4
  - FEN: `rnbqkb1r/pp3ppp/3pp3/8/3NP1Q1/2N5/PPP2P1P/R1B1KB1R b KQkq - 0 7`

- **The name.** From the 1923 tournament at Scheveningen, near The Hague, where Max Euwe played it against Maróczy and Spielmann (New In Chess book excerpt; Wikipedia).
- **The "small center".** Pawns on d6 and e6 control d5, e5, c5 and f5. The structure is compact and flexible: Black can later break with ...d5 or ...e5 or expand with ...b5. Its drawback: Black's pieces have less space, and White can attack the kingside.
- **The Keres Attack: 6.g4!** (introduced by Paul Keres in 1943, Wikipedia) threatens g4–g5, chasing the f6-knight away from the center. This is why many players reach the Scheveningen via the Najdorf or the Taimanov (§8.2) instead of playing 5...e6 directly. The main answer is 6...h6, and after 7.h4 Nc6 8.Rg1 the engine's choice is 8...d5!: answer a wing attack with a central counterattack. After 9.exd5 Nxd5 10.Nxd5 exd5 11.Be3 the engine gives White an edge (Black's d5-pawn is isolated), but Black's pieces are active.
- **6...Nxg4??** is a beginner's blunder: the g4-pawn is guarded by the d1-queen (the e2 and f3 squares are empty), so 7.Qxg4 wins a knight for a pawn. Status: trap.

### 8.2 The Classical Scheveningen and its move orders

- `scheveningen-6be2` (B85, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6 6.Be2 a6 7.O-O Be7 8.f4 O-O 9.Kh1 Qc7 10.a4 Nc6 11.Be3 Re8 12.Bf3
  - FEN: `r1b1r1k1/1pq1bppp/p1nppn2/8/P2NPP2/2N1BB2/1PP3PP/R2Q1R1K b - - 4 12`
- `scheveningen-from-najdorf` (B85, respectable): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be2 e6 7.O-O Be7 8.f4 O-O 9.Kh1 Qc7 10.a4 Nc6
  - FEN: `r1b2rk1/1pq1bppp/p1nppn2/8/P2NPP2/2N5/1PP1B1PP/R1BQ1R1K w - - 1 11`
- `scheveningen-from-taimanov` (B85, respectable): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 Qc7 6.Be2 a6 7.O-O Nf6 8.Be3 Be7 9.f4 d6 10.Qe1 O-O
  - FEN: `r1b2rk1/1pq1bppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R3QRK1 w - - 2 11`
- `scheveningen-english` (B90, popular): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6 6.Be3 a6 7.f3 b5 8.Qd2 Nbd7 9.g4 h6
  - FEN: `r1bqkb1r/3n1pp1/p2ppn1p/1p6/3NP1P1/2N1BP2/PPPQ3P/R3KB1R w KQkq - 0 10`

- **Same position, three roads.** The Classical Scheveningen with 6.Be2, O-O, f4, Kh1 and a4 for White against ...a6, ...Be7, ...O-O, ...Qc7 and ...Nc6 for Black is reached from the pure Scheveningen, from the Najdorf (6.Be2 e6) and from the Taimanov (5.Nc3 Qc7 6.Be2 a6 ...). The English Attack against ...e6 (6.Be3, f3, Qd2, g4) arises from both the Scheveningen and the Najdorf.
- **Plans.** White: a4 (stops ...b5), f4, Kh1, Be3, Bf3, Qe1–g3 and a kingside attack with f4–f5 or e4–e5. Black: ...Qc7, ...Re8, ...Bd7, ...Rb8 and ...b5, or the central breaks ...e5 and ...d5. The engine calls these positions level or slightly better for White.
- **Model games.** Tal–Larsen 1965 (a Nd5 sacrifice against this structure, reached via the Taimanov move order) and Anand–Kasparov 1995 game 9 (a classical Scheveningen via the Najdorf, won by White's queenside play and a central break). Both in §17.

---

## 9. The Sveshnikov, Kalashnikov and Löwenthal (B32–B33)

### 9.1 4...Nf6 5.Nc3 e5: kicking the knight at once

- `svesh-5e5` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5
  - FEN: `r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6`
- `svesh-6ndb5` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6
  - FEN: `r1bqkb1r/pp3ppp/2np1n2/1N2p3/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 7`
- `svesh-6a6` (B33, dubious): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 a6 7.Nd6+ Bxd6 8.Qxd6 Qe7
  - FEN: `r1b1k2r/1p1pqppp/p1nQ1n2/4p3/4P3/2N5/PPP2PPP/R1B1KB1R w KQkq - 1 9`

- **The idea.** Black accepts the d5 hole and the backward d6-pawn in return for time (the knight must move) and space. Pioneered by Evgeny Sveshnikov and Gennadi Timoshchenko in the 1970s; earlier called the Lasker–Pelikan Variation (Wikipedia). Kramnik and Carlsen are among its famous users.
- **6.Ndb5 d6!** The knight threatens Nd6+, so ...d6 is forced in practice. 6...a6? 7.Nd6+ Bxd6 8.Qxd6 costs Black the dark-squared bishop and leaves weak dark squares (engine: White is clearly better). Status: dubious.

### 9.2 7.Bg5 a6 8.Na3 b5, and 9.Bxf6 gxf6 10.Nd5 f5

- `svesh-main` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5
  - FEN: `r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 9`
- `svesh-9bxf6` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5 9.Bxf6 gxf6 10.Nd5 f5
  - FEN: `r1bqkb1r/5p1p/p1np4/1p1Npp2/4P3/N7/PPP2PPP/R2QKB1R w KQkq - 0 11`
- `svesh-11bd3` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5 9.Bxf6 gxf6 10.Nd5 f5 11.Bd3 Be6 12.O-O Bxd5 13.exd5 Ne7
  - FEN: `r2qkb1r/4np1p/p2p4/1p1Ppp2/8/N2B4/PPP2PPP/R2Q1RK1 w kq - 1 14`
- `svesh-11c3` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5 9.Bxf6 gxf6 10.Nd5 f5 11.c3 Bg7 12.exf5 Bxf5 13.Nc2 O-O 14.Nce3 Be6
  - FEN: `r2q1rk1/5pbp/p1npb3/1p1Np3/8/2P1N3/PP3PPP/R2QKB1R w KQ - 4 15`
- `svesh-peresypkin` (B33, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5 9.Bxf6 gxf6 10.Nd5 f5 11.Bxb5 axb5 12.Nxb5
  - FEN: `r1bqkb1r/5p1p/2np4/1N1Npp2/4P3/8/PPP2PPP/R2QK2R b KQkq - 0 12`

- **The knight on the rim.** 8.Na3 b5 leaves White's knight on a3 out of play for a while; it usually comes back via c2 (after c3) or c4.
- **9.Bxf6 gxf6 10.Nd5 f5.** White removes the f6-knight (a defender of d5) and plants a knight on d5. Black's pawns are broken, but Black gets the bishop pair, the half-open g-file and the ...f5 break against e4. After 11.Bd3 Be6 12.O-O Bxd5 13.exd5 Ne7 and 11.c3 Bg7 12.exf5 Bxf5 13.Nc2 O-O 14.Nce3 Be6 the engine calls it level. Razor-sharp: the course teaches the ideas and these first moves only.
- **Peresypkin's sacrifice 11.Bxb5!? axb5 12.Nxb5.** White gives a bishop for two pawns and an attack on the queenside and Black's king; the engine calls it level. Status: rare.

### 9.3 9.Nd5 and the ...Qa5+ repetition offer

- `svesh-9nd5` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5 9.Nd5 Be7 10.Bxf6 Bxf6 11.c3 O-O 12.Nc2 Bg5
  - FEN: `r1bq1rk1/5ppp/p1np4/1p1Np1b1/4P3/2P5/PPN2PPP/R2QKB1R w KQ - 3 13`
- `svesh-9nd5-qa5` (B33, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5 9.Nd5 Qa5+ 10.Bd2 Qd8 11.Bg5 Qa5+ 12.Bd2 Qd8
  - FEN: `r1bqkb1r/5ppp/p1np1n2/1p1Np3/4P3/N7/PPPB1PPP/R2QKB1R w KQkq - 8 13`

- **9.Nd5 Be7 10.Bxf6 Bxf6 11.c3 O-O 12.Nc2 Bg5.** White keeps Black's pawns intact but brings the a3-knight back via c2 to e3; Black trades the "bad" dark-squared bishop with ...Bg5. The engine gives White a small edge.
- **9...Qa5+ 10.Bd2 Qd8 11.Bg5 Qa5+** invites a repetition, but White doesn't have to accept: 11.c4! (instead of 11.Bg5) keeps a clear edge (engine). Status: rare.

### 9.4 7.Nd5: White's modern choice

- `svesh-7nd5` (B33, popular): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Nd5 Nxd5 8.exd5 Ne7 9.c4 Ng6
  - FEN: `r1bqkb1r/pp3ppp/3p2n1/1N1Pp3/2P5/8/PP3PPP/R1BQKB1R w KQkq - 1 10`

- **7.Nd5 Nxd5 8.exd5** closes the center at once: the d5-pawn cramps Black, and Black's knight looks for a new home (...Ne7–g6 or ...Nb8–d7). Black's plan is ...f5 and a kingside expansion. After 8...Ne7 9.c4 Ng6 the engine gives White a small edge. Caruana chose 7.Nd5 against Carlsen in all three Sveshnikov games of the 2018 World Championship (Carlsen answered 8...Nb8; §17).

### 9.5 White's sixth-move sidelines

- `svesh-6nf5` (B33, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Nf5 d5 7.exd5 Bxf5 8.dxc6 bxc6
  - FEN: `r2qkb1r/p4ppp/2p2n2/4pb2/8/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 9`
- `svesh-6nb3` (B33, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Nb3 Bb4 7.Bd3 d5
  - FEN: `r1bqk2r/pp3ppp/2n2n2/3pp3/1b2P3/1NNB4/PPP2PPP/R1BQK2R w KQkq - 0 8`
- `svesh-6nf3` (B33, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Nf3 Bb4 7.Bc4 O-O
  - FEN: `r1bq1rk1/pp1p1ppp/2n2n2/4p3/1bB1P3/2N2N2/PPP2PPP/R1BQK2R w KQ - 4 8`
- `svesh-6nxc6` (B33, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Nxc6 bxc6 7.Bc4 Be7 8.O-O O-O
  - FEN: `r1bq1rk1/p2pbppp/2p2n2/4p3/2B1P3/2N5/PPP2PPP/R1BQ1RK1 w - - 4 9`

- **6.Nf5 d5!** The knight jump gives Black an easy game: 7.exd5 Bxf5 8.dxc6 bxc6 and the engine calls it level (worse for White than the main line).
- **6.Nb3 Bb4 7.Bd3 d5** and **6.Nf3 Bb4 7.Bc4 O-O**: the retreats let Black develop with ...Bb4 and ...d5; both level.
- **6.Nxc6 bxc6** strengthens Black's center (...d5 comes next); level.

### 9.6 The Kalashnikov and the Löwenthal: 4...e5

- `kalashnikov` (B32, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 e5 5.Nb5 d6 6.c4 Be7 7.N1c3 a6 8.Na3 f5
  - FEN: `r1bqk1nr/1p2b1pp/p1np4/4pp2/2P1P3/N1N5/PP3PPP/R1BQKB1R w KQkq - 0 9`
- `kalashnikov-6n1c3` (B32, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 e5 5.Nb5 d6 6.N1c3 a6 7.Na3 b5 8.Nd5 Nge7
  - FEN: `r1bqkb1r/4nppp/p1np4/1p1Np3/4P3/N7/PPP2PPP/R1BQKB1R w KQkq - 2 9`
- `lowenthal` (B32, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 e5 5.Nb5 a6 6.Nd6+ Bxd6 7.Qxd6 Qf6 8.Qd1 Qg6 9.Nc3 Nge7
  - FEN: `r1b1k2r/1p1pnppp/p1n3q1/4p3/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq - 5 10`

- **4...e5 5.Nb5 d6 (Kalashnikov).** A Sveshnikov without ...Nf6: Black keeps the f-pawn free for ...f5. White's main choices are 6.c4 (a Maróczy-style clamp; 6...Be7 7.N1c3 a6 8.Na3 f5) and 6.N1c3 a6 7.Na3 b5 8.Nd5. The engine gives White an edge in both; in the 6.N1c3 line, 8...Nge7 leaves White clearly better (8...Nf6 is Black's best try, with only a small edge for White). Checked at depth 20–23 during course writing.
- **4...e5 5.Nb5 a6 (Löwenthal).** 6.Nd6+ Bxd6 7.Qxd6 gives White the bishop pair and the dark squares; after 7...Qf6 8.Qd1 Qg6 9.Nc3 Nge7 the engine says White is clearly better (7...Qe7 is a better try for Black; checked at depth 20–23 during course writing). Named after Johann Löwenthal (19th century); Wikipedia says it "declined in play" once White was found to keep the advantage. Status: rare.

### 9.7 How White avoids the Sveshnikov

- `anti-svesh-3nc3` (B30, popular): 1.e4 c5 2.Nf3 Nc6 3.Nc3 e5 4.Bc4 Be7 5.d3 d6 6.Nd2 Bg5
  - FEN: `r1bqk1nr/pp3ppp/2np4/2p1p1b1/2B1P3/2NP4/PPPN1PPP/R1BQK2R w KQkq - 2 7`

- **3.Nc3 e5 4.Bc4 Be7 5.d3 d6 6.Nd2 Bg5** (Anti-Sveshnikov, Kharlov–Kramnik line). White develops quietly and aims at d5 with Bc4, Nd2–f1–e3 or Nd5; Black trades the dark-squared bishop with ...Bg5. The engine calls it level. The other way is 3.Bb5, the Rossolimo (§15.1). Both are very popular at the top.

---

## 10. The ...e6 Sicilians: Taimanov, Kan, Four Knights and Pin

### 10.1 The Taimanov: 4...Nc6 and ...Qc7

- `taimanov` (B44, popular): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6
  - FEN: `r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5`
- `taimanov-qc7` (B48, popular): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 Qc7 6.Be3 a6 7.Qd2 Nf6 8.O-O-O Bb4 9.f3 Ne5 10.Nb3 b5
  - FEN: `r1b1k2r/2qp1ppp/p3pn2/1p2n3/1b2P3/1NN1BP2/PPPQ2PP/2KR1B1R w kq - 0 11`
- `taimanov-be3-bd3` (B48, popular): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 Qc7 6.Be3 a6 7.Bd3 Nf6 8.O-O Ne5 9.h3 Bc5
  - FEN: `r1b1k2r/1pqp1ppp/p3pn2/2b1n3/3NP3/2NBB2P/PPP2PP1/R2Q1RK1 w kq - 1 10`

- **The idea** (Mark Taimanov): Black keeps the d-pawn at home as long as possible, so the pawn structure stays flexible (...d6 Scheveningen, ...d5 break, or ...d7 forever). Typical moves: ...Qc7, ...a6 (to stop Nb5), ...Nf6, ...Bb4 or ...Be7.
- **5.Nc3 Qc7 6.Be3 a6 7.Qd2 Nf6 8.O-O-O Bb4 9.f3 Ne5 10.Nb3 b5** is the English Attack against the Taimanov: Black's ...Bb4 pins the c3-knight and ...Ne5–c4 aims at White's king. Engine: White slightly better.
- **7.Bd3 Nf6 8.O-O Ne5 9.h3 Bc5** is a quieter set-up; engine: level.

### 10.2 5.Nb5 d6 6.c4 and the Kasparov Gambit

- `taimanov-nb5` (B44, respectable): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nb5 d6 6.c4 Nf6 7.N1c3 a6 8.Na3 Be7 9.Be2 O-O 10.O-O b6
  - FEN: `r1bq1rk1/4bppp/ppnppn2/8/2P1P3/N1N5/PP2BPPP/R1BQ1RK1 w - - 0 11`
- `taimanov-kasparov-gambit` (B44, dubious): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nb5 d6 6.c4 Nf6 7.N1c3 a6 8.Na3 d5 9.cxd5 exd5 10.exd5 Nb4
  - FEN: `r1bqkb1r/1p3ppp/p4n2/3P4/1n6/N1N5/PP3PPP/R1BQKB1R w KQkq - 1 11`
- `taimanov-nxc6` (B46, rare): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 a6 6.Nxc6 bxc6 7.Bd3 d5
  - FEN: `r1bqkbnr/5ppp/p1p1p3/3p4/4P3/2NB4/PPP2PPP/R1BQK2R w KQkq - 0 8`

- **5.Nb5 d6 6.c4.** White's knight on b5 forces ...d6, and c4 sets up a Maróczy-style clamp. Black plays a Hedgehog-like set-up (...a6, ...Be7, ...O-O, ...b6, ...Bb7). After 7.N1c3 a6 8.Na3 Be7 9.Be2 O-O 10.O-O b6 the engine calls it level.
- **The Kasparov Gambit (lichess: "Gary Gambit"): 8...d5!?** Black gives a pawn to free the game; after 9.cxd5 exd5 10.exd5 Nb4 Black's knight heads for d3. Kasparov used it to beat Karpov in the 1985 World Championship (game 16, §17). Theory and engine agree it is not good enough for full equality: after 11.Bc4 the engine gives White a small but clear edge. Status: dubious.
- **5.Nc3 a6 6.Nxc6 bxc6 7.Bd3 d5** gives Black a solid center; engine: White slightly better.

### 10.3 The Kan (Paulsen): 4...a6

- `kan` (B41, popular): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6
  - FEN: `rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5`
- `kan-bd3` (B42, popular): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6 5.Bd3 Nf6 6.O-O Qc7 7.Qe2 d6 8.c4 g6
  - FEN: `rnb1kb1r/1pq2p1p/p2ppnp1/8/2PNP3/3B4/PP2QPPP/RNB2RK1 w kq - 0 9`
- `kan-c4` (B41, respectable): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6 5.c4 Nf6 6.Nc3 Qc7 7.a3 b6 8.Be3 Bb7 9.f3 d6
  - FEN: `rn2kb1r/1bq2ppp/pp1ppn2/8/2PNP3/P1N1BP2/1P4PP/R2QKB1R w KQkq - 0 10`
- `kan-nc3` (B43, popular): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 a6 5.Nc3 Qc7 6.Bd3 Nc6 7.Be3 Nf6 8.O-O Ne5 9.h3 Bc5
  - FEN: `r1b1k2r/1pqp1ppp/p3pn2/2b1n3/3NP3/2NBB2P/PPP2PP1/R2Q1RK1 w kq - 1 10`

- **The idea** (named after Ilya Kan, also after Louis Paulsen): the most flexible ...e6 system. ...a6 stops Nb5 and Bb5 and prepares ...b5; the knights wait to see where they belong.
- **5.Bd3** is White's most popular fifth move (Wikipedia): it guards e4 and prepares c4. After 5...Nf6 6.O-O Qc7 7.Qe2 d6 8.c4 g6 the engine gives White a clear edge (more space).
- **5.c4 (Maróczy Bind):** Black answers with a **Hedgehog**: pawns on a6, b6, d6, e6, pieces behind them (...Qc7, ...Bb7, ...Be7, ...Nbd7), waiting for a ...b5 or ...d5 break. The engine gives White a clear edge; the Hedgehog is a patient defense, not a way to equalize quickly.
- **5.Nc3 Qc7 6.Bd3 Nc6 7.Be3 Nf6 8.O-O Ne5 9.h3 Bc5**: Black's knight and bishop use the dark squares; level.

### 10.4 The Four Knights: 4...Nf6 5.Nc3 Nc6

- `four-knights` (B45, respectable): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6
  - FEN: `r1bqkb1r/pp1p1ppp/2n1pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6`
- `four-knights-ndb5` (B45, respectable): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Ndb5 Bb4 7.a3 Bxc3+ 8.Nxc3 d5 9.exd5 exd5 10.Bd3 O-O 11.O-O
  - FEN: `r1bq1rk1/pp3ppp/2n2n2/3p4/8/P1NB4/1PP2PPP/R1BQ1RK1 b - - 3 11`
- `four-knights-nxc6` (B45, respectable): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Nxc6 bxc6 7.e5 Nd5 8.Ne4 Qc7 9.f4
  - FEN: `r1b1kb1r/p1qp1ppp/2p1p3/3nP3/4NP2/8/PPP3PP/R1BQKB1R b KQkq - 0 9`
- `four-knights-svesh` (B33, respectable): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Ndb5 d6 7.Bf4 e5 8.Bg5 a6 9.Na3 b5
  - FEN: `r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 10`

- **6.Ndb5 Bb4 7.a3 Bxc3+ 8.Nxc3 d5 9.exd5 exd5 10.Bd3 O-O 11.O-O.** Black gives the bishop pair to free the game with ...d5 and gets an isolated d-pawn; engine: White slightly better.
- **6.Nxc6 bxc6 7.e5 Nd5 8.Ne4 Qc7 9.f4.** White grabs space; Black's center pawns and the half-open b-file give counterplay (the immediate breaks 9...d6, ...f6 and ...f5 are bad for Black); engine: White slightly better.
- **6.Ndb5 d6 7.Bf4 e5 8.Bg5 a6 9.Na3 b5** is a Sveshnikov by transposition (the position of §9.2).

### 10.5 The Pin Variation, 3...d5 and 4...Qb6

- `pin-variation` (B40, rare): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Bb4 6.e5 Nd5 7.Bd2 Nxc3 8.bxc3 Be7 9.Qg4
  - FEN: `rnbqk2r/pp1pbppp/4p3/4P3/3N2Q1/2P5/P1PB1PPP/R3KB1R b KQkq - 2 9`
- `pin-ne4-trap` (B40, trap): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Bb4 6.e5 Ne4 7.Qg4 Nxc3 8.Qxg7 Rf8 9.a3
  - FEN: `rnbqkr2/pp1p1pQp/4p3/4P3/1b1N4/P1n5/1PP2PPP/R1B1KB1R b KQq - 0 9`
- `e6-3d4-d5` (B40, rare): 1.e4 c5 2.Nf3 e6 3.d4 d5 4.exd5 exd5 5.Bb5+ Bd7 6.Bxd7+ Nxd7 7.O-O Be7 8.dxc5 Nxc5
  - FEN: `r2qk1nr/pp2bppp/8/2np4/8/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 9`
- `godiva-4qb6` (B32, rare): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Qb6 5.Nb3 Nf6 6.Nc3 e6
  - FEN: `r1b1kb1r/pp1p1ppp/1qn1pn2/8/4P3/1NN5/PPP2PPP/R1BQKB1R w KQkq - 0 7`

- **5...Bb4 (Pin Variation).** Black pins the c3-knight and hits e4. The answer is 6.e5!: after 6...Nd5 7.Bd2 Nxc3 8.bxc3 Be7 9.Qg4 White attacks g7 and the dark squares; engine: White is clearly better. Wikipedia: "considered theoretically suspect". Status: rare.
- **The Pin trap: 6.e5 Ne4? 7.Qg4!** The queen hits both g7 and the e4-knight. After 7...Nxc3 8.Qxg7 Rf8 9.a3 the black king is stuck in the center and the rook on f8 is trapped behind g7; the engine says White is much better, In its main line material ends level (9...Nb5+ 10.axb4 Nxd4 11.Bg5 Qb6 12.Bh6 Qxb4+ 13.c3 Nf5 14.cxb4 Nxg7 15.Bxg7), with White much better on position; only 9...Be7 10.bxc3 leaves White a pawn up (rechecked at depth 20–22 during course writing). Status: trap.
- **2...e6 3.d4 d5 (Marshall Counterattack).** 4.exd5 exd5 5.Bb5+ Bd7 6.Bxd7+ Nxd7 7.O-O Be7 8.dxc5 Nxc5: Black ends up with an isolated d5-pawn, and the engine gives White a small but clear edge. Status: rare.
- **4...Qb6 (Godiva).** The queen hits d4 and b2 at once; 5.Nb3 answers it. After 5...Nf6 6.Nc3 e6 the engine gives White a clear edge (Black's queen has wasted time). Status: rare.

---

## 11. The Alapin: 2.c3 (B22)

- `alapin` (B22, popular): 1.e4 c5 2.c3
  - FEN: `rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2`
- `alapin-d5` (B22, popular): 1.e4 c5 2.c3 d5 3.exd5 Qxd5 4.d4 Nf6 5.Nf3 Bg4 6.Be2 e6 7.O-O Nc6 8.Be3 cxd4 9.cxd4 Be7
  - FEN: `r3k2r/pp2bppp/2n1pn2/3q4/3P2b1/4BN2/PP2BPPP/RN1Q1RK1 w kq - 1 10`
- `alapin-d5-iqp` (B22, popular): 1.e4 c5 2.c3 d5 3.exd5 Qxd5 4.d4 Nc6 5.Nf3 cxd4 6.cxd4 e6 7.Nc3 Qd6
  - FEN: `r1b1kbnr/pp3ppp/2nqp3/8/3P4/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 8`
- `alapin-nf6` (B22, popular): 1.e4 c5 2.c3 Nf6 3.e5 Nd5 4.d4 cxd4 5.Nf3 Nc6 6.Bc4 Nb6 7.Bb3 d5 8.exd6 Qxd6 9.O-O Be6
  - FEN: `r3kb1r/pp2pppp/1nnqb3/8/3p4/1BP2N2/PP3PPP/RNBQ1RK1 w kq - 2 10`
- `alapin-nf6-cxd4` (B22, popular): 1.e4 c5 2.c3 Nf6 3.e5 Nd5 4.d4 cxd4 5.cxd4 d6 6.Nf3 Nc6 7.Bc4 Nb6 8.Bb5 dxe5 9.Nxe5 Bd7
  - FEN: `r2qkb1r/pp1bpppp/1nn5/1B2N3/3P4/8/PP3PPP/RNBQK2R w KQkq - 1 10`
- `alapin-ivanchuk` (B22, rare): 1.e4 c5 2.c3 Nf6 3.e5 Nd5 4.Nf3 Nc6 5.Bc4 Nb6 6.Bb3 c4 7.Bc2 Qc7 8.Qe2 g5
  - FEN: `r1b1kb1r/ppqppp1p/1nn5/4P1p1/2p5/2P2N2/PPBPQPPP/RNB1K2R w KQkq - 0 9`

- **The idea** (Semyon Alapin, 1856–1923): c3 prepares d2–d4 so that after ...cxd4 White can retake with the c-pawn and keep two center pawns. Wikipedia calls it "one of the most solid and respectable" anti-Sicilians; Evgeny Sveshnikov wrote a book about it (*The Complete c3 Sicilian*, New in Chess 2010). The engine calls the main lines level.
- **2...d5 3.exd5 Qxd5.** Normally an early queen move loses time to Nc3, but here c3 has taken that square from White's knight. After 4.d4 Nf6 5.Nf3 Bg4 6.Be2 e6 7.O-O Nc6 8.Be3 cxd4 9.cxd4 Be7 Black develops easily. After 4...Nc6 5.Nf3 cxd4 6.cxd4 e6 7.Nc3 Qd6 White has an **isolated queen's pawn** (IQP) on d4: active pieces and the e5-square for White, a weak pawn to blockade (on d5) and attack for Black. The engine gives White a small edge in the IQP line.
- **2...Nf6 3.e5 Nd5.** Black hits e4 and lets the pawn advance, then attacks it with ...d6 or ...d5. 4.d4 cxd4 5.Nf3 Nc6 6.Bc4 Nb6 7.Bb3 d5 8.exd6 Qxd6 9.O-O Be6 and 5.cxd4 d6 6.Nf3 Nc6 7.Bc4 Nb6 8.Bb5 dxe5 9.Nxe5 Bd7 are both level. Wikipedia says 2...Nf6 is the most popular answer.
- **The Ivanchuk idea: 4.Nf3 Nc6 5.Bc4 Nb6 6.Bb3 c4 7.Bc2 Qc7 8.Qe2 g5!?** Black attacks the e5-pawn with the g-pawn (...g4 kicks the f3-knight). Engine: White slightly better. Status: rare.

---

## 12. The Smith–Morra Gambit: 2.d4 cxd4 3.c3 (B21)

- `morra` (B21, rare): 1.e4 c5 2.d4 cxd4 3.c3
  - FEN: `rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3`
- `morra-accepted` (B21, rare): 1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Nxc3 Nc6 5.Nf3 d6 6.Bc4 e6 7.O-O Nf6 8.Qe2 Be7 9.Rd1 e5 10.h3 O-O 11.Be3
  - FEN: `r1bq1rk1/pp2bppp/2np1n2/4p3/2B1P3/2N1BN1P/PP2QPP1/R2R2K1 b - - 2 11`
- `morra-e6-setup` (B21, rare): 1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Nxc3 Nc6 5.Nf3 e6 6.Bc4 a6 7.O-O Nge7 8.Bg5 f6 9.Be3 Ng6
  - FEN: `r1bqkb1r/1p1p2pp/p1n1ppn1/8/2B1P3/2N1BN2/PP3PPP/R2Q1RK1 w kq - 2 10`

- **Names.** After Pierre Morra (France), who published a booklet on it in the 1950s, and Ken Smith (Dallas), its great promoter, who wrote nine books on it (Wikipedia; in Europe usually "Morra Gambit").
- **The idea.** White gives a pawn for fast development, an open c-file and a half-open d-file: Nc3, Nf3, Bc4, O-O, Qe2 and Rd1 against the d6-pawn. After 3...dxc3 4.Nxc3 Nc6 5.Nf3 d6 6.Bc4 e6 7.O-O Nf6 8.Qe2 Be7 9.Rd1 e5 10.h3 O-O 11.Be3 the engine calls it level (if anything, it prefers Black): the gambit is sound enough to play but not better for White. Rare at the top, very common at club level.
- **A set-up that avoids the tricks:** 5...e6 6.Bc4 a6 7.O-O Nge7 8.Bg5 f6 9.Be3 Ng6: the knight goes to g6 so that e4–e5 and Nd5 tricks don't work. It is safe from traps but passive: the engine gives White a small edge at the end (rechecked at depth 23 during course writing; 9...b5 instead of 9...Ng6 keeps it about level) (the pawn on f6 weakens e6 and Black is behind in development), so White's gambit has paid off in this line.

### 12.1 Morra traps (both sides)

- `morra-siberian-trap` (B21, trap): 1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Nxc3 Nc6 5.Nf3 e6 6.Bc4 Qc7 7.Qe2 Nf6 8.O-O Ng4 9.h3 Nd4 10.Nxd4 Qh2#
  - FEN: `r1b1kb1r/pp1p1ppp/4p3/8/2BNP1n1/2N4P/PP2QPPq/R1B2RK1 w kq - 1 11`
- `morra-nf6-e5-trap` (B21, trap): 1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Nxc3 Nc6 5.Nf3 d6 6.Bc4 Nf6 7.e5 Nxe5 8.Nxe5 dxe5 9.Bxf7+ Kxf7 10.Qxd8
  - FEN: `r1bQ1b1r/pp2pkpp/5n2/4p3/8/2N5/PP3PPP/R1B1K2R b KQ - 0 10`
- `morra-nf6-e5-dxe5` (B21, trap): 1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Nxc3 Nc6 5.Nf3 d6 6.Bc4 Nf6 7.e5 dxe5 8.Qxd8+ Nxd8 9.Nb5 Rb8 10.Nxe5
  - FEN: `1rbnkb1r/pp2pppp/5n2/1N2N3/2B5/8/PP3PPP/R1B1K2R b KQk - 0 10`
- `morra-nf6-ng4` (B21, rare): 1.e4 c5 2.d4 cxd4 3.c3 dxc3 4.Nxc3 Nc6 5.Nf3 d6 6.Bc4 Nf6 7.e5 Ng4 8.exd6 exd6 9.O-O Be7
  - FEN: `r1bqk2r/pp2bppp/2np4/8/2B3n1/2N2N2/PP3PPP/R1BQ1RK1 w kq - 2 10`

- **The Siberian Trap (Black wins).** After 5...e6 6.Bc4 Qc7 7.Qe2 Nf6 8.O-O Ng4!, Black threatens ...Nd4 (hitting the e2-queen) with ...Qh2# in the air, because the c7-queen and the g4-knight both aim at h2. If White plays the natural 9.h3??, then 9...Nd4! wins at least the queen: 10.Nxd4 Qh2# is mate; 10.hxg4 Nxe2+ wins the queen; and if the queen steps away (10.Qd1 or 10.Qd3), then 10...Nxf3+ and 11...Qh2# is mate whichever way White takes on f3 (all checked with chess.js). (Engine: after 8...Ng4 White's best is 9.Rd1, guarding d4 and freeing f1 for the king (9.Nb5 is about level; 9.Nd5 is slightly worse for White); 9.h3?? loses. Rechecked at depth 20 during course writing.) Status: trap.
- **6...Nf6 and 7.e5 (White's traps).** With ...d6 played, 6...Nf6 lets White hit the knight with 7.e5. The correct answer is **7...Ng4!** 8.exd6 exd6 9.O-O Be7: level (engine).
  - 7...Nxe5?? 8.Nxe5 dxe5 9.Bxf7+! Kxf7 10.Qxd8: the d-file is open, and the bishop check pulls the king to f7, where it no longer guards the queen on d8. White wins the queen. Status: trap.
  - 7...dxe5 8.Qxd8+ Nxd8? (8...Kxd8 is correct) 9.Nb5! threatens Nc7+, forking king and rook; after 9...Rb8 10.Nxe5 White has won back one of the two pawns, so Black is still a pawn up, but White's activity makes White clearly better (engine). 7...dxe5 is only dubious in itself: after the correct 8...Kxd8 White is a bit better. Status: trap.

### 12.2 Declining the Morra

- `morra-declined-nf6` (B22, respectable): 1.e4 c5 2.d4 cxd4 3.c3 Nf6 4.e5 Nd5 5.Nf3 Nc6 6.cxd4 d6
  - FEN: `r1bqkb1r/pp2pppp/2np4/3nP3/3P4/5N2/PP3PPP/RNBQKB1R w KQkq - 0 7`
- `morra-declined-d5` (B21, respectable): 1.e4 c5 2.d4 cxd4 3.c3 d5 4.exd5 Qxd5 5.cxd4 Nc6 6.Nf3 e6 7.Nc3 Qd8 8.Bc4 Nf6 9.O-O Be7
  - FEN: `r1bqk2r/pp2bppp/2n1pn2/8/2BP4/2N2N2/PP3PPP/R1BQ1RK1 w kq - 6 10`
- `morra-declined-d3` (B21, rare): 1.e4 c5 2.d4 cxd4 3.c3 d3 4.Bxd3 Nc6 5.c4
  - FEN: `r1bqkbnr/pp1ppppp/2n5/8/2P1P3/3B4/PP3PPP/RNBQK1NR b KQkq - 0 5`

- **3...Nf6 4.e5 Nd5** and **3...d5 4.exd5 Qxd5** turn the game into an Alapin (§11). Both are good, safe choices for Black: the engine calls the 3...Nf6 line level and gives White an edge in this 3...d5 line (the isolated-pawn position).
- **3...d3** gives the pawn back at once to keep the c-file closed: 4.Bxd3 Nc6 5.c4 and White has a pleasant space edge (engine: White slightly better). Status: rare.

---

## 13. The Closed Sicilian and the Grand Prix Attack (B21–B26)

### 13.1 2.Nc3: closed or open?

- `closed` (B25, respectable): 1.e4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7 5.d3 d6
  - FEN: `r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR w KQkq - 0 6`
- `closed-to-open` (B90, popular): 1.e4 c5 2.Nc3 d6 3.Nf3 Nf6 4.d4 cxd4 5.Nxd4 a6
  - FEN: `rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6`
- `closed-6be3` (B26, respectable): 1.e4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7 5.d3 d6 6.Be3 e6 7.Qd2 Rb8 8.Nge2 Nd4
  - FEN: `1rbqk1nr/pp3pbp/3pp1p1/2p5/3nP3/2NPB1P1/PPPQNPBP/R3K2R w KQk - 4 9`
- `closed-6f4` (B25, respectable): 1.e4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7 5.d3 d6 6.f4 e6 7.Nf3 Nge7 8.O-O O-O
  - FEN: `r1bq1rk1/pp2npbp/2npp1p1/2p5/4PP2/2NP1NP1/PPP3BP/R1BQ1RK1 w - - 4 9`
- `closed-botvinnik` (B25, rare): 1.e4 c5 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7 5.d3 d6 6.f4 e5 7.Nh3 Nge7
  - FEN: `r1bqk2r/pp2npbp/2np2p1/2p1p3/4PP2/2NP2PN/PPP3BP/R1BQK2R w KQkq - 2 8`

- **2.Nc3 is flexible.** If White follows with Nf3 and d4, it is an Open Sicilian (2.Nc3 d6 3.Nf3 Nf6 4.d4 cxd4 5.Nxd4 a6 is a Najdorf). If White plays g3, Bg2, d3 and Be3 (or f4), it is the **Closed Sicilian**.
- **White's plan in the Closed.** Kingside play: Be3, Qd2, sometimes Bh6 to trade the g7-bishop; f4–f5 with Nge2 or Nf3. **Black's plan:** queenside expansion with ...Rb8 and ...b5–b4, the d4-outpost for a knight (...Nd4), or the Botvinnik set-up ...e5 with ...Nge7 that blocks the center. 6.Be3 e6 7.Qd2 Rb8 8.Nge2 Nd4 and 6.f4 e6 7.Nf3 Nge7 8.O-O O-O are both level (engine); 6.f4 e5 7.Nh3 Nge7 too.

### 13.2 The Grand Prix Attack and 2.f4

- `gpa-bc4` (B23, rare): 1.e4 c5 2.Nc3 Nc6 3.f4 g6 4.Nf3 Bg7 5.Bc4 e6 6.O-O Nge7 7.d3 d5 8.Bb3 O-O
  - FEN: `r1bq1rk1/pp2npbp/2n1p1p1/2pp4/4PP2/1BNP1N2/PPP3PP/R1BQ1RK1 w - - 2 9`
- `gpa-bb5` (B23, rare): 1.e4 c5 2.Nc3 Nc6 3.f4 g6 4.Nf3 Bg7 5.Bb5 Nd4 6.O-O Nxb5 7.Nxb5 d6
  - FEN: `r1bqk1nr/pp2ppbp/3p2p1/1Np5/4PP2/5N2/PPPP2PP/R1BQ1RK1 w kq - 0 8`
- `gpa-e6-d5` (B23, rare): 1.e4 c5 2.Nc3 Nc6 3.f4 e6 4.Nf3 d5
  - FEN: `r1bqkbnr/pp3ppp/2n1p3/2pp4/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 0 5`
- `gpa-2f4-d5` (B21, rare): 1.e4 c5 2.f4 d5 3.exd5 Nf6 4.Bb5+ Bd7 5.Bxd7+ Qxd7 6.c4 e6
  - FEN: `rn2kb1r/pp1q1ppp/4pn2/2pP4/2P2P2/8/PP1P2PP/RNBQK1NR w KQkq - 0 7`
- `gpa-2f4-nc6` (B21, rare): 1.e4 c5 2.f4 Nc6 3.Nf3 g6 4.Bb5 Bg7 5.Bxc6 bxc6 6.d3 d6 7.O-O Nf6
  - FEN: `r1bqk2r/p3ppbp/2pp1np1/2p5/4PP2/3P1N2/PPP3PP/RNBQ1RK1 w kq - 2 8`

- **The name.** It became known as the Grand Prix Attack in the 1980s, when it was widely played in English weekend "Grand Prix" tournaments (chess.com).
- **White's plan.** Nc3, f4, Nf3, then Bc4 or Bb5, O-O, d3, Qe1–h4 and f4–f5 against Black's king.
- **Black's answers.** ...g6/...Bg7 with ...e6 and ...d5 (2.Nc3 Nc6 3.f4 g6 4.Nf3 Bg7 5.Bc4 e6 6.O-O Nge7 7.d3 d5 8.Bb3 O-O: the d5 break blunts the c4-bishop; engine: level, if anything slightly better for Black); against 5.Bb5, 5...Nd4 trades the bishop (level); 3...e6 4.Nf3 d5 strikes in the center at once (level).
- **2.f4 at once.** 2...d5 (the Tal Gambit; level, though the engine slightly prefers 2...e6, rechecked during course writing) 3.exd5 Nf6 4.Bb5+ Bd7 5.Bxd7+ Qxd7 6.c4 e6: Black regains the pawn or gets quick development; engine: level. 2...Nc6 3.Nf3 g6 4.Bb5 Bg7 5.Bxc6 bxc6 6.d3 d6 7.O-O Nf6 is White's Bb5xc6 idea (doubled c-pawns for Black); engine: White slightly better. lichess calls 2.f4 the "McDonnell Attack".

---

## 14. Beginner sidelines: 2.Bc4, 2.Qh5 and 2.b4

- `bowdler` (B20, rare): 1.e4 c5 2.Bc4 e6 3.Nc3 a6 4.a4 Nc6
  - FEN: `r1bqkbnr/1p1p1ppp/p1n1p3/2p5/P1B1P3/2N5/1PPP1PPP/R1BQK1NR w KQkq - 1 5`
- `bowdler-qh5-e6` (B20, rare): 1.e4 c5 2.Bc4 Nc6 3.Qh5 e6 4.Nf3 Nf6
  - FEN: `r1bqkb1r/pp1p1ppp/2n1pn2/2p4Q/2B1P3/5N2/PPPP1PPP/RNB1K2R w KQkq - 2 5`
- `bowdler-scholars-trap` (B20, trap): 1.e4 c5 2.Bc4 Nc6 3.Qh5 Nf6 4.Qxf7#
  - FEN: `r1bqkb1r/pp1ppQpp/2n2n2/2p5/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4`
- `qh5-2qh5` (B20, rare): 1.e4 c5 2.Qh5 e6 3.Qe2 Nc6 4.Nf3 Nge7
  - FEN: `r1bqkb1r/pp1pnppp/2n1p3/2p5/4P3/5N2/PPPPQPPP/RNB1KB1R w KQkq - 4 5`
- `qh5-nf6` (B20, rare): 1.e4 c5 2.Qh5 Nf6 3.Qxc5 Nxe4 4.Qe3 d5
  - FEN: `rnbqkb1r/pp2pppp/8/3p4/4n3/4Q3/PPPP1PPP/RNB1KBNR w KQkq - 0 5`
- `wing-2b4` (B20, rare): 1.e4 c5 2.b4 cxb4 3.a3 d5 4.exd5 Qxd5 5.Nf3 e5 6.axb4 Bxb4 7.c3 Be7
  - FEN: `rnb1k1nr/pp2bppp/8/3qp3/8/2P2N2/3P1PPP/RNBQKB1R w KQkq - 1 8`

- **2.Bc4 (Bowdler Attack).** The bishop aims at f7. The calm answer is ...e6, which blocks the c4–f7 diagonal and prepares ...d5 with gain of time. After 2...e6 3.Nc3 a6 4.a4 Nc6 the engine calls it level.
- **The Scholar's Mate idea.** 2.Bc4 Nc6 3.Qh5 threatens Qxf7#. 3...e6! blocks the bishop, and after 4.Nf3 Nf6 the queen is hit and Black is much better (engine): the early queen move just loses time. But 3...Nf6?? 4.Qxf7# is mate. Status: trap.
- **2.Qh5.** The queen attacks f7 and also c5 (along the 5th rank). 2...e6! opens the f8-bishop's diagonal so the c5-pawn is defended; after 3.Qe2 Nc6 4.Nf3 Nge7 Black is slightly better (engine). 2...Nf6 hits the queen: 3.Qxc5 Nxe4 4.Qe3 d5 wins the pawn back with tempo (engine: level). Careless 2...Nc6? allows 3.Qxc5, winning a pawn (the engine calls it about level, because Black gets fast development).
- **2.b4 (Wing Gambit).** White gives the b-pawn to deflect Black's c-pawn and build a center with d4. 2...cxb4 3.a3 d5! 4.exd5 Qxd5 5.Nf3 e5 6.axb4 Bxb4 7.c3 Be7: Black returns nothing important and has a good center; engine: level, if anything slightly better for Black.

---

## 15. Rossolimo, Moscow and the King's Indian Attack

### 15.1 The Rossolimo: 2...Nc6 3.Bb5 (B30–B31)

- `rossolimo` (B30, popular): 1.e4 c5 2.Nf3 Nc6 3.Bb5
  - FEN: `r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3`
- `rossolimo-g6` (B31, popular): 1.e4 c5 2.Nf3 Nc6 3.Bb5 g6 4.O-O Bg7 5.Re1 e5 6.Bxc6 dxc6 7.d3 Qe7
  - FEN: `r1b1k1nr/pp2qpbp/2p3p1/2p1p3/4P3/3P1N2/PPP2PPP/RNBQR1K1 w kq - 1 8`
- `rossolimo-bxc6` (B31, popular): 1.e4 c5 2.Nf3 Nc6 3.Bb5 g6 4.Bxc6 dxc6 5.d3 Bg7 6.h3 Nf6 7.Nc3 O-O 8.Be3 b6 9.Qd2 e5
  - FEN: `r1bq1rk1/p4pbp/1pp2np1/2p1p3/4P3/2NPBN1P/PPPQ1PP1/R3K2R w KQ - 0 10`
- `rossolimo-e6` (B30, popular): 1.e4 c5 2.Nf3 Nc6 3.Bb5 e6 4.O-O Nge7 5.Re1 a6 6.Bf1 d5 7.exd5 Nxd5
  - FEN: `r1bqkb1r/1p3ppp/p1n1p3/2pn4/8/5N2/PPPP1PPP/RNBQRBK1 w kq - 0 8`
- `rossolimo-e6-bxc6` (B30, respectable): 1.e4 c5 2.Nf3 Nc6 3.Bb5 e6 4.Bxc6 bxc6 5.d3 Ne7 6.b3 d6 7.Bb2 e5
  - FEN: `r1bqkb1r/p3nppp/2pp4/2p1p3/4P3/1P1P1N2/PBP2PPP/RN1QK2R w KQkq - 0 8`

- **Names.** After Nicolas Rossolimo and Rashid Nezhmetdinov; lichess and chess.com spell it "Nyezhmetdinov–Rossolimo Attack".
- **The idea.** White pins/pressures the c6-knight, castles fast and keeps the game away from the main Open Sicilian (no Sveshnikov). Very popular at the top: Caruana played it three times against Carlsen in 2018.
- **3...g6:** 4.O-O Bg7 5.Re1 e5 6.Bxc6 dxc6 7.d3 Qe7 (level), or 4.Bxc6 dxc6 at once: 5.d3 Bg7 6.h3 Nf6 7.Nc3 O-O 8.Be3 b6 9.Qd2 e5. **Bxc6** gives Black the bishop pair but doubled c-pawns; White plays h3, Nc3, Be3 and Qd2 (sometimes Bh6 to trade the g7-bishop) and later f4 or Nh2–g4. Black recaptures ...dxc6 to open the d-file and the c8-bishop's diagonal. Engine: level or White slightly better.
- **3...e6:** 4.O-O Nge7 5.Re1 a6 6.Bf1 d5 7.exd5 Nxd5 (level); or 4.Bxc6 bxc6 5.d3 Ne7 6.b3 d6 7.Bb2 e5 (engine: level).

### 15.2 The Moscow: 2...d6 3.Bb5+ (B51–B52)

- `moscow` (B51, popular): 1.e4 c5 2.Nf3 d6 3.Bb5+
  - FEN: `rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 3`
- `moscow-bd7-c4` (B52, popular): 1.e4 c5 2.Nf3 d6 3.Bb5+ Bd7 4.Bxd7+ Qxd7 5.c4 Nc6 6.Nc3 g6 7.d4 cxd4 8.Nxd4 Bg7 9.Be3 Nf6 10.f3 O-O
  - FEN: `r4rk1/pp1qppbp/2np1np1/8/2PNP3/2N1BP2/PP4PP/R2QK2R w KQ - 1 11`
- `moscow-bd7-oo` (B52, popular): 1.e4 c5 2.Nf3 d6 3.Bb5+ Bd7 4.Bxd7+ Qxd7 5.O-O Nf6 6.Re1 Nc6 7.c3 e6 8.d4 cxd4 9.cxd4 d5 10.e5 Ne4
  - FEN: `r3kb1r/pp1q1ppp/2n1p3/3pP3/3Pn3/5N2/PP3PPP/RNBQR1K1 w kq - 1 11`
- `moscow-nc6` (B51, respectable): 1.e4 c5 2.Nf3 d6 3.Bb5+ Nc6 4.O-O Bd7 5.Re1 Nf6 6.c3 a6 7.Bf1 Bg4 8.d3 e6
  - FEN: `r2qkb1r/1p3ppp/p1nppn2/2p5/4P1b1/2PP1N2/PP3PPP/RNBQRBK1 w kq - 0 9`
- `moscow-nd7` (B51, popular): 1.e4 c5 2.Nf3 d6 3.Bb5+ Nd7 4.d4 Nf6 5.Nc3 cxd4 6.Qxd4 e5 7.Qd3 h6 8.Nd2
  - FEN: `r1bqkb1r/pp1n1pp1/3p1n1p/1B2p3/4P3/2NQ4/PPPN1PPP/R1B1K2R b KQkq - 1 8`

- **Names.** Also called the Canal–Sokolsky Attack (Wikipedia). White checks to trade light-squared bishops and avoid the Najdorf.
- **3...Bd7 4.Bxd7+ Qxd7.** Then 5.c4 Nc6 6.Nc3 g6 7.d4 cxd4 8.Nxd4 Bg7 9.Be3 Nf6 10.f3 O-O is a **Maróczy Bind** (lichess: Sokolsky Variation); or 5.O-O Nf6 6.Re1 Nc6 7.c3 e6 8.d4 cxd4 9.cxd4 d5 10.e5 Ne4, a French-like structure. The engine calls both the 5.c4 line and the 5.O-O line roughly level (rechecked at depth 20 during course writing; White has a little more space in the 5.O-O line).
- **3...Nc6** keeps more pieces: 4.O-O Bd7 5.Re1 Nf6 6.c3 a6 7.Bf1 Bg4 8.d3 e6; rechecked at depth 20 during course writing, White keeps a small edge throughout (8.d4 is a little stronger than 8.d3). **3...Nd7** is the sharpest: 4.d4 Nf6 5.Nc3 cxd4 6.Qxd4 e5 7.Qd3 h6 8.Nd2, level.

### 15.3 The King's Indian Attack set-up (and 2.d3)

- `kia-e6` (A08, rare): 1.e4 c5 2.Nf3 e6 3.d3 Nc6 4.g3 d5 5.Nbd2 Nf6 6.Bg2 Be7 7.O-O O-O 8.Re1 b5 9.e5 Nd7
  - FEN: `r1bq1rk1/p2nbppp/2n1p3/1pppP3/8/3P1NP1/PPPN1PBP/R1BQR1K1 w - - 1 10`
- `kia-2d3` (B20, rare): 1.e4 c5 2.d3 Nc6 3.g3 g6 4.Bg2 Bg7 5.f4 d6 6.Nf3 e6 7.O-O Nge7
  - FEN: `r1bqk2r/pp2npbp/2npp1p1/2p5/4PP2/3P1NP1/PPP3BP/RNBQ1RK1 w kq - 2 8`

- **The idea.** White plays d3, g3, Bg2, Nf3, Nbd2, O-O and Re1, then e4–e5 to cramp Black and attack the kingside (Nf1–h2–g4, h4–h5). Black usually takes queenside space with ...b5–b4 and ...a5–a4. After 2...e6 3.d3 Nc6 4.g3 d5 5.Nbd2 Nf6 6.Bg2 Be7 7.O-O O-O 8.Re1 b5 9.e5 Nd7 the engine calls it level (lichess: King's Indian Attack, Sicilian Variation, A08).
- **2.d3 with g3 and f4** is a Closed Sicilian set-up without Nc3: 2...Nc6 3.g3 g6 4.Bg2 Bg7 5.f4 d6 6.Nf3 e6 7.O-O Nge7, level.

---

## 16. Traps and typical tactics index

All traps below were checked with Stockfish at depth 20 (multipv 3). "Wins" means the engine confirms the material win holds up after the opponent's best defense.

| Line | Side that wins | What happens |
|---|---|---|
| `trap-4qxd4-nxd4` | Black | 2...Nc6 3.d4 cxd4 4.Qxd4?? Nxd4: the queen is simply lost. |
| `mistake-2e5` | White | 2...e5? 3.Nxe5: nothing defends e5; White is a clean pawn up. |
| `okelly-5e5-trap` | Black | 5.e5? Qa5+! checks and hits e5; Black wins a pawn. |
| `dragon-6be3-ng4-trap` | White | 6.Be3 Ng4? 7.Bb5+!: White wins the exchange and a pawn (no ...a6 to cover b5). |
| `dragon-levenfish-trap` | White | 8...Ng4? 9.Bb5+! wins the exchange; 9...Kf8?? 10.Ne6+ wins the queen (10...Bxe6 11.Qxd8#). |
| `accel-reshevsky-trap` | White | 8...Na5? 9.e5! Ne8? 10.Bxf7+ Kxf7 11.Ne6!: Black loses the queen for two minor pieces. |
| `magnus-smith-trap` | White | 8.e5 dxe5?? 9.Bxf7+! Kxf7 10.Qxd8 wins the queen (8...Ng4 holds). |
| `keres-nxg4-trap` | White | 6.g4 Nxg4?? 7.Qxg4: the queen guards g4; White wins a knight for a pawn. |
| `pin-ne4-trap` | White | 6.e5 Ne4? 7.Qg4! hits g7 and e4; White is much better. |
| `morra-siberian-trap` | Black | 8...Ng4 9.h3?? Nd4! 10.Nxd4 Qh2#. |
| `morra-nf6-e5-trap` | White | 7...Nxe5?? 8.Nxe5 dxe5 9.Bxf7+! Kxf7 10.Qxd8 wins the queen. |
| `morra-nf6-e5-dxe5` | White | 7...dxe5 8.Qxd8+ Nxd8? 9.Nb5! (Nc7+ fork threat) Rb8 10.Nxe5 wins a pawn. |
| `bowdler-scholars-trap` | White | 3.Qh5 Nf6?? 4.Qxf7#. |

Typical tactics that are **not** traps, but are worth teaching:

- **Pin with ...Qa5+ / double attack with ...Qb6:** `okelly-5e5-trap` (...Qa5+ hits king and e5), `sozin-qb6` and `godiva-4qb6` (...Qb6 hits d4 and b2), `najdorf-poisoned-pawn` (...Qb6xb2).
- **Bb5+ tricks:** `mistake-venice-5e5` (Bb5+ trades Black's good bishop), `dragon-6be3-ng4-trap` and `dragon-levenfish-trap` (Bb5+ wins material when ...a6 hasn't been played).
- **The ...Nxe4 fork trick:** `dragon-6bc4` (...Nxe4 and ...d5 forks c4 and e4; material stays level).
- **The ...Ng4 trick:** `najdorf-be3-ng4` and `classical-6be3-ng4` (hitting a bishop on e3), `accel-breyer-ng4` (...Ng4 and ...Nxd4 regain the piece).
- **Exchange sacrifice ...Rxc3:** `dragon-soltis-rxc3`.
- **Knight sacrifices on e6, f5 and d5:** `najdorf-goteborg` (Nxe6), `velimirovic-nf5` (Nf5 and Nd5, level), `model-tal-larsen-1965` (Nd5, see the folklore section).
- **Early knight jumps that don't work:** `najdorf-be2-nf5` (7.Nf5?! d5!), `svesh-6nf5` (6.Nf5 d5!), `svesh-6a6` (Black's ...a6? allows Nd6+), `najdorf-sozin-nxe4` (a pawn grab that opens the e-file).

---

## 17. Model games

All games below were **confirmed** against at least one reliable source (players, event, year, result and moves). The moves in each `model-*` line were copied from the chessgames.com PGN (downloaded through `nph-chesspgn?text=1&gid=<id>`) and replayed with chess.js; the only change is a missing check sign (`O-O+` in Geller–Panno, which chessgames printed as `O-O`). Lines marked "opening only" stop before the end of the game. Engine checks of the famous moments are noted.

### 17.1 Najdorf

- `model-geller-panno-1955` (B98, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Be7 8.Qf3 h6 9.Bh4 g5 10.fxg5 Nfd7 11.Nxe6 fxe6 12.Qh5+ Kf8 13.Bb5 Ne5 14.Bg3 Bxg5 15.O-O+ Ke7 16.Bxe5 Qb6+ 17.Kh1 dxe5 18.Qf7+ Kd6 19.Rad1+ Qd4 20.Rxd4+ exd4 21.e5+ Kc5 22.Qc7+ Nc6 23.Bxc6
  - FEN: `r1b4r/1pQ5/p1B1p2p/2k1P1b1/3p4/2N5/PPP3PP/5R1K b - - 0 23`
- `model-fischer-najdorf-1962` (B90, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.h3 b5 7.Nd5 Bb7 8.Nxf6+ gxf6 9.c4 bxc4 10.Bxc4 Bxe4 11.O-O d5 12.Re1 e5 13.Qa4+ Nd7 14.Rxe4 dxe4 15.Nf5 Bc5 16.Ng7+ Ke7 17.Nf5+ Ke8 18.Be3 Bxe3 19.fxe3 Qb6 20.Rd1 Ra7 21.Rd6 Qd8 22.Qb3 Qc7 23.Bxf7+ Kd8 24.Be6
  - FEN: `3k3r/r1qn3p/p2RBp2/4pN2/4p3/1Q2P2P/PP4P1/6K1 b - - 2 24`
- `model-spassky-fischer-1972-g11` (B97, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Qb6 8.Qd2 Qxb2 9.Nb3 Qa3 10.Bxf6 gxf6 11.Be2 h5 12.O-O Nc6 13.Kh1 Bd7 14.Nb1 Qb4 15.Qe3 d5 16.exd5 Ne7 17.c4 Nf5 18.Qd3 h4 19.Bg4 Nd6 20.N1d2 f5 21.a3 Qb6 22.c5 Qb5 23.Qc3 fxg4 24.a4 h3 25.axb5 hxg2+ 26.Kxg2 Rh3 27.Qf6 Nf5 28.c6 Bc8 29.dxe6 fxe6 30.Rfe1 Be7 31.Rxe6
  - FEN: `r1b1k3/1p2b3/p1P1RQ2/1P3n2/5Pp1/1N5r/3N2KP/R7 b q - 0 31`

- **Geller–Panno, Gothenburg Interzonal 1955, round 14, 1-0 (23 moves).** The Göteborg Variation (§5.4). In the same round Keres–Najdorf and Spassky–Pilnik reached the same position, and all three Argentines lost (chessgames.com tournament page; the Keres–Najdorf PGN was also checked). Engine: 11.Nxe6 is White's best move; Black's 13...Ne5 and 14...Bxg5 were mistakes.
- **Fischer–Najdorf, Varna Olympiad 1962, round 2 of the final, 1-0 (24 moves).** Fischer's 6.h3 against Najdorf himself; 7.Nd5 and the exchange sacrifice 14.Rxe4! (the engine's top move, winning). Engine: Najdorf's 12...e5? was the losing mistake (12...Bxg2 was better). Fischer annotated it in *My 60 Memorable Games* (British Chess News review; olimpbase).
- **Spassky–Fischer, World Championship 1972, game 11, 1-0 (31 moves).** The Poisoned Pawn with 9.Nb3 and the famous retreat 14.Nb1, which trapped Fischer's queen in the long run; Fischer's only loss in the Poisoned Pawn (Wikipedia, "Poisoned Pawn Variation"; chess.com). Engine: 14.Nb1 is not stronger than quiet moves (see the folklore section); Black went wrong later with 19...Nd6.

### 17.2 Dragon and Accelerated Dragon

- `model-fischer-larsen-1958` (B77, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4 Nxd4 10.Bxd4 Be6 11.Bb3 Qa5 12.O-O-O b5 13.Kb1 b4 14.Nd5 Bxd5 15.Bxd5 Rac8 16.Bb3 Rc7 17.h4 Qb5 18.h5 Rfc8 19.hxg6 hxg6 20.g4 a5 21.g5 Nh5 22.Rxh5 gxh5 23.g6 e5 24.gxf7+ Kf8 25.Be3 d5 26.exd5 Rxf7 27.d6 Rf6 28.Bg5 Qb7 29.Bxf6 Bxf6 30.d7 Rd8 31.Qd6+
  - FEN: `3r1k2/1q1P4/3Q1b2/p3p2p/1p6/1B3P2/PPP5/1K1R4 b - - 2 31`
- `model-karpov-korchnoi-1974-g2` (B77, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 Nc6 8.Qd2 O-O 9.Bc4 Bd7 10.h4 Rc8 11.Bb3 Ne5 12.O-O-O Nc4 13.Bxc4 Rxc4 14.h5 Nxh5 15.g4 Nf6 16.Nde2 Qa5 17.Bh6 Bxh6 18.Qxh6 Rfc8 19.Rd3 R4c5 20.g5 Rxg5 21.Rd5 Rxd5 22.Nxd5 Re8 23.Nef4 Bc6 24.e5 Bxd5 25.exf6 exf6 26.Qxh7+ Kf8 27.Qh8+
  - FEN: `4rk1Q/pp3p2/3p1pp1/q2b4/5N2/5P2/PPP5/2K4R b - - 2 27`
- `model-anand-kasparov-1995-g11` (B78, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4 Bd7 10.O-O-O Ne5 11.Bb3 Rc8 12.h4 h5 13.Kb1 Nc4 14.Bxc4 Rxc4 15.Nde2 b5 16.Bh6 Qa5 17.Bxg7 Kxg7 18.Nf4 Rfc8 19.Ncd5 Qxd2 20.Rxd2 Nxd5 21.Nxd5 Kf8 22.Re1 Rb8 23.b3 Rc5 24.Nf4 Rbc8 25.Kb2 a5 26.a3 Kg7 27.Nd5 Be6 28.b4 axb4 29.axb4 Rc4 30.Nb6 Rxb4+ 31.Ka3 Rxc2
  - FEN: `8/4ppk1/1N1pb1p1/1p5p/1r2P2P/K4P2/2rR2P1/4R3 w - - 0 32`
- `model-fischer-reshevsky-1958` (B35, historical): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.Be3 Bg7 6.Nc3 Nf6 7.Bc4 O-O 8.Bb3 Na5 9.e5 Ne8 10.Bxf7+ Kxf7 11.Ne6 dxe6 12.Qxd8 Nc6 13.Qd2 Bxe5 14.O-O
  - FEN: `r1b1nr2/pp2pk1p/2n1p1p1/4b3/8/2N1B3/PPPQ1PPP/R4RK1 b - - 1 14`
- `model-nezhmetdinov-chernikov-1962` (B35, historical): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 g6 5.Nc3 Bg7 6.Be3 Nf6 7.Bc4 O-O 8.Bb3 Ng4 9.Qxg4 Nxd4 10.Qh4 Qa5 11.O-O Bf6 12.Qxf6 Ne2+ 13.Nxe2 exf6 14.Nc3 Re8 15.Nd5 Re6 16.Bd4 Kg7 17.Rad1 d6 18.Rd3 Bd7 19.Rf3 Bb5 20.Bc3 Qd8 21.Nxf6 Be2 22.Nxh7+ Kg8 23.Rh3 Re5 24.f4 Bxf1 25.Kxf1 Rc8 26.Bd4 b5 27.Ng5 Rc7 28.Bxf7+ Rxf7 29.Rh8+ Kxh8 30.Nxf7+ Kh7 31.Nxd8 Rxe4 32.Nc6 Rxf4+ 33.Ke2
  - FEN: `8/p6k/2Np2p1/1p6/3B1r2/8/PPP1K1PP/8 b - - 1 33`

- **Fischer–Larsen, Portorož Interzonal 1958, round 8, 1-0 (31 moves).** Yugoslav Attack with 9.Bc4: h4–h5, hxg6 and the exchange sacrifice 22.Rxh5! (engine's top move) open the h-file. Fischer's game 2 in *My 60 Memorable Games* ("Slaying the Dragon"); Fischer wrote that Black had to try 22...Bxd4 instead of 22...gxh5, and the engine agrees (lichess study, chess.com blog, ChessBase "Modern Classics").
- **Karpov–Korchnoi, Candidates final (Moscow) 1974, game 2, 1-0 (27 moves).** The textbook Yugoslav Attack: h4–h5, g4, Bh6 trading the Dragon bishop, and a mating attack on the h-file (mark-weeks.com, lichess study, chess.com). Engine: 14.h5 is one of White's two best moves (14.g4 is the other); Black's 16...Qa5 was clearly inferior to 16...Re8 (rechecked at depth 20 during course writing).
- **Anand–Kasparov, PCA World Championship (New York) 1995, game 11, 0-1 (31 moves).** Kasparov surprised Anand with the Dragon (Wikipedia: "Kasparov sprung a major surprise by playing the Sicilian Dragon with black"). The Soltis set-up (12.h4 h5) with ...Nc4, ...Rxc4 and ...b5; the queens came off and Black won the endgame.
- **Fischer–Reshevsky, US Championship 1958/59, round 6, 1-0 (42 moves; the line stops at move 14).** The Accelerated Dragon trap 8...Na5? 9.e5! Ne8? 10.Bxf7+ (lichess mirror, Chess Life, gameknot). The game reached the trap position by the move order 5.Be3 Bg7 6.Nc3.
- **Nezhmetdinov–Chernikov, Chigorin Team Cup, Rostov-on-Don 1962, 1-0 (33 moves).** Accelerated Dragon 8...Ng4 9.Qxg4 Nxd4 10.Qh4 Qa5 11.O-O Bf6 12.Qxf6!?, a queen sacrifice for two minor pieces and a lasting attack (ChessBase "Modern Classics", chess.com). Engine: the sacrifice is sound but not stronger than quiet moves (see the folklore section).

### 17.3 Scheveningen and Taimanov

- `model-tal-larsen-1965` (B82, historical): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 e6 5.Nc3 d6 6.Be3 Nf6 7.f4 Be7 8.Qf3 O-O 9.O-O-O Qc7 10.Ndb5 Qb8 11.g4 a6 12.Nd4 Nxd4 13.Bxd4 b5 14.g5 Nd7 15.Bd3 b4 16.Nd5 exd5 17.exd5 f5 18.Rde1 Rf7 19.h4 Bb7 20.Bxf5 Rxf5 21.Rxe7 Ne5 22.Qe4 Qf8 23.fxe5 Rf4 24.Qe3 Rf3 25.Qe2 Qxe7 26.Qxf3 dxe5 27.Re1 Rd8 28.Rxe5 Qd6 29.Qf4 Rf8 30.Qe4 b3 31.axb3 Rf1+ 32.Kd2 Qb4+ 33.c3 Qd6 34.Bc5 Qxc5 35.Re8+ Rf8 36.Qe6+ Kh8 37.Qf7
  - FEN: `4Rr1k/1b3Qpp/p7/2qP2P1/7P/1PP5/1P1K4/8 b - - 5 37`
- `model-anand-kasparov-1995-g9` (B84, historical): 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be2 e6 7.O-O Be7 8.a4 Nc6 9.Be3 O-O 10.f4 Qc7 11.Kh1 Re8 12.Bf3 Bd7 13.Nb3 Na5 14.Nxa5 Qxa5 15.Qd3 Rad8 16.Rfd1 Bc6 17.b4 Qc7 18.b5 Bd7 19.Rab1 axb5 20.Nxb5 Bxb5 21.Qxb5 Ra8 22.c4 e5 23.Bb6 Qc8 24.fxe5 dxe5 25.a5 Bf8 26.h3 Qe6 27.Rd5 Nxd5 28.exd5 Qg6 29.c5 e4 30.Be2 Re5 31.Qd7 Rg5 32.Rg1 e3 33.d6 Rg3 34.Qxb7 Qe6 35.Kh2
  - FEN: `r4bk1/1Q3ppp/1B1Pq3/P1P5/8/4p1rP/4B1PK/6R1 b - - 2 35`
- `model-karpov-kasparov-1985-g16` (B44, historical): 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nb5 d6 6.c4 Nf6 7.N1c3 a6 8.Na3 d5 9.cxd5 exd5 10.exd5 Nb4 11.Be2 Bc5 12.O-O O-O 13.Bf3 Bf5 14.Bg5 Re8 15.Qd2 b5 16.Rad1 Nd3 17.Nab1 h6 18.Bh4 b4 19.Na4 Bd6 20.Bg3 Rc8 21.b3 g5 22.Bxd6 Qxd6 23.g3 Nd7 24.Bg2 Qf6 25.a3 a5 26.axb4 axb4 27.Qa2 Bg6 28.d6 g4 29.Qd2 Kg7 30.f3 Qxd6 31.fxg4 Qd4+ 32.Kh1 Nf6 33.Rf4 Ne4 34.Qxd3 Nf2+ 35.Rxf2 Bxd3 36.Rfd2 Qe3 37.Rxd3 Rc1 38.Nb2 Qf2 39.Nd2 Rxd1+ 40.Nxd1 Re1+
  - FEN: `8/5pk1/7p/8/1p4P1/1P1R2P1/3N1qBP/3Nr2K w - - 1 41`

- **Tal–Larsen, Candidates semifinal (Bled) 1965, game 10, 1-0 (37 moves).** A Scheveningen reached via the Taimanov move order (2...Nc6, 4...e6, 5...d6); Tal's 16.Nd5!? exd5 17.exd5 sacrifices a knight to open the e-file (Rde1 follows) and attack. It decided the match (Tal won 5½–4½; olimpbase, Mark Weeks; Kasparov analyzed it in *My Great Predecessors*). Engine: see the folklore section; the losing mistake was 18...Rf7?.
- **Anand–Kasparov, PCA World Championship (New York) 1995, game 9, 1-0 (35 moves).** Classical Scheveningen via the Najdorf (6.Be2 e6, a4, Be3, f4, Kh1, Bf3); White's b4–b5 and c4–c5 plus the exchange sacrifice 27.Rd5 broke through (Wikipedia: "Anand ... broke through Kasparov's Sicilian Scheveningen defence to win"). Engine: 27.Rd5 kept White clearly better, though 27.c5 was even stronger.
- **Karpov–Kasparov, World Championship (Moscow) 1985, game 16, 0-1 (40 moves).** The Kasparov Gambit 8...d5!?; Black's knight landed on d3 (16...Nd3) and dominated (gameknot, Stabroek News, The Spectator 1985, ChessBase India). **Note:** White was Karpov, so the correct name is Karpov–Kasparov, not "Kasparov–Karpov". Engine: Black was only slightly better after 16...Nd3; Karpov's 17.Nab1? was the decisive mistake (17.d6 or 17.b4 holds).

### 17.4 Sveshnikov and Rossolimo at the top

- `model-caruana-carlsen-2018-g8` (B33, historical): 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Nd5 Nxd5 8.exd5 Nb8 9.a4 Be7 10.Be2 O-O 11.O-O Nd7 12.Bd2 f5 13.a5 a6 14.Na3 e4 15.Nc4 Ne5 16.Nb6 Rb8
  - FEN: `1rbq1rk1/1p2b1pp/pN1p4/P2Pnp2/4p3/8/1PPBBPPP/R2Q1RK1 w - - 4 17`
- `model-caruana-carlsen-2018-g1` (B31, historical): 1.e4 c5 2.Nf3 Nc6 3.Bb5 g6 4.Bxc6 dxc6 5.d3 Bg7 6.h3 Nf6 7.Nc3 Nd7 8.Be3 e5 9.O-O b6 10.Nh2 Nf8 11.f4 exf4 12.Rxf4 Be6
  - FEN: `r2qkn1r/p4pbp/1pp1b1p1/2p5/4PR2/2NPB2P/PPP3PN/R2Q2K1 w kq - 1 13`

- **Caruana–Carlsen, World Championship (London) 2018, game 8, ½–½ (38 moves; opening only).** Sveshnikov with 7.Nd5 Nxd5 8.exd5 Nb8 (Wikipedia, "World Chess Championship 2018": games 8, 10 and 12 were all Sveshnikovs with 7.Nd5). Shows Black's ...Nb8–d7, ...f5 and ...e4 plan.
- **Caruana–Carlsen, World Championship (London) 2018, game 1, ½–½ (115 moves; opening only).** Rossolimo 3...g6 4.Bxc6 dxc6 5.d3 Bg7 6.h3 with Nc3, Be3, O-O, Nh2 and f4 (Wikipedia: games 1, 3 and 5 were Rossolimos).

### 17.5 Model-games index

| Game | Event / year | Variation | Result | Confirmed | Why it is instructive |
|---|---|---|---|---|---|
| Geller–Panno | Gothenburg Interzonal 1955 | Najdorf, Göteborg | 1-0 | yes (chessgames; one source for the moves) | The Nxe6 sacrifice against an over-ambitious ...g5 |
| Fischer–Larsen | Portorož Interzonal 1958 | Dragon, Yugoslav 9.Bc4 | 1-0 | yes (chessgames, lichess, chess.com, ChessBase) | Opening the h-file; the Rxh5 sacrifice |
| Fischer–Reshevsky | US Championship 1958/59 | Accelerated Dragon | 1-0 | yes (chessgames, lichess, Chess Life) | The 8...Na5? 9.e5! trap |
| Fischer–Najdorf | Varna Olympiad 1962 | Najdorf 6.h3 | 1-0 | yes (chessgames, olimpbase, British Chess News) | Punishing Black's king in the center |
| Nezhmetdinov–Chernikov | Rostov-on-Don 1962 | Accelerated Dragon, ...Ng4 | 1-0 | yes (chessgames, ChessBase, chess.com) | A queen sacrifice for lasting pressure |
| Tal–Larsen | Candidates semifinal, Bled 1965 (g10) | Scheveningen via Taimanov | 1-0 | yes (chessgames, olimpbase, Mark Weeks) | The Nd5 sacrifice; a practical gamble |
| Spassky–Fischer | WCh 1972 (g11) | Najdorf, Poisoned Pawn 9.Nb3 | 1-0 | yes (chessgames, Wikipedia, chess.com) | Trapping the queen that took b2 |
| Karpov–Korchnoi | Candidates final 1974 (g2) | Dragon, Yugoslav | 1-0 | yes (chessgames, mark-weeks, lichess) | h4–h5, Bh6 and mate on the h-file |
| Karpov–Kasparov | WCh 1985 (g16) | Taimanov, Kasparov Gambit | 0-1 | yes (chessgames, gameknot, Stabroek News, Spectator) | The knight on d3 |
| Anand–Kasparov | PCA WCh 1995 (g9) | Scheveningen via Najdorf | 1-0 | yes (chessgames, Wikipedia) | White's queenside and central breakthrough |
| Anand–Kasparov | PCA WCh 1995 (g11) | Dragon, Soltis set-up | 0-1 | yes (chessgames, Wikipedia) | Black's defense and counterattack in the Yugoslav |
| Caruana–Carlsen | WCh 2018 (g8) | Sveshnikov 7.Nd5 | ½–½ | yes (chessgames, Wikipedia) | The modern Sveshnikov at the top |
| Caruana–Carlsen | WCh 2018 (g1) | Rossolimo, 4.Bxc6 | ½–½ | yes (chessgames, Wikipedia) | Doubled pawns vs the bishop pair |

**Checked but not to be used as Sicilian examples:**
- **Kasparov–Topalov, Wijk aan Zee 1999** is a Pirc Defense (1.e4 d6), not a Sicilian.
- **D. Byrne–Fischer, New York 1956** ("Game of the Century") is a Grünfeld Defense, not a Sicilian.
- **Kasparov–Anand 1995, game 10** (Kasparov's famous win) is an Open Ruy Lopez, not a Sicilian. All the match's Sicilians had Anand as White: games 1, 3, 5, 7 and 9 were Najdorfs with 6.Be2 e6 (Scheveningen structure; Anand won game 9), and games 11, 13, 15 and 17 were Dragons (Kasparov won 11 and 13; 15 and 17 were drawn), per the chessgames.com PGNs.
- **Spassky–Fischer 1972, game 7** was also a Poisoned Pawn (drawn); not turned into a line here.

---

## Folklore the engine contradicts

Each item was checked with Stockfish 19 at depth 20 (three candidate moves). Writers should repeat the corrected version, not the folklore.

1. **"Fischer–Reshevsky: the trap is 10.Bxf7+."** The real mistakes came earlier: 8...Na5? already gives White a clear advantage after 9.e5!, and 9...Ne8? is what allows 10.Bxf7+. After 11.Ne6, 11...dxe6 was actually Black's best try; the game was already lost.
2. **"Tal's 16.Nd5 against Larsen was a winning sacrifice."** At depth 20 the engine rates 16.Nd5 as unsound (16.Ne2 was White's best, and after 16...exd5 17.exd5 Black is better). The decisive mistake was Larsen's 18...Rf7?; 18...Bd8 would have held (about level at depth 20, rechecked during course writing). Earlier, 17...g6 was Black's best; after Larsen's 17...f5 White could already force a draw with Qe2 or Qe3. Other engine reports differ (a talkchess thread quotes a neural-network Stockfish preferring White), so call it "a bold practical sacrifice that computers doubt".
3. **"Spassky's 14.Nb1!! refuted Fischer's opening."** The engine prefers 14.Nd1, 14.Rab1 or 14.h3 (all level) and is fine with Black after 14.Nb1. Black lost because of later mistakes, the biggest being 19...Nd6.
4. **"Nezhmetdinov's 12.Qxf6 was a winning combination."** It is sound (the engine calls it level after 12...Ne2+ 13.Nxe2 exf6) but not stronger than the quiet 12.Qh6 or 12.Qg4. The game was decided later.
5. **"Kasparov's 16...Nd3 octopus won the 1985 game by itself."** After 16...Nd3 Black was only slightly better; Karpov's 17.Nab1? was the decisive mistake.
6. **"The Kasparov Gambit is refuted."** Not by force: after 11.Bc4 the engine gives White a small edge (rechecked at depth 24 during course writing; 11.Be2 Nbxd5 is roughly level, only a little worse for White). "Not fully sound" is accurate; "refuted" overstates it.
7. **"The Göteborg sacrifice 11.Nxe6 wins by force."** It is the best move and White is clearly better, but there is no forced win.
8. **"Peresypkin's 11.Bxb5 in the Sveshnikov is unsound"** and **"the Velimirović 14.Nf5 sacrifice wins"**: the engine calls both level.
9. **"In the Magnus Smith Trap, 6...g6? is the mistake."** 6...g6 is only slightly inaccurate. The losing move is 8...dxe5??; 8...Ng4 holds.
10. **"In the Morra, 6...Nf6? loses to 7.e5!"** No: 7...Ng4! equalizes. Only 7...Nxe5?? loses material (the queen). 7...dxe5 8.Qxd8+ Nxd8? keeps Black a pawn up but gives White strong play: White is clearly better.
11. **"In the Levenfish, 6...Bg7? loses."** It is only slightly inaccurate; 8...Ng4? is the real mistake and 9...Kf8?? the blunder.
12. **"The Dragon is refuted by ...Ng4 tricks against Qd2"** / **"7.Qd2 loses to ...Ng4"**: after 7.Qd2 Ng4 8.Bg5 White keeps a small edge. The trap goes the other way: 6.Be3 Ng4? 7.Bb5+! wins material for White.
13. **"Against 7.Nf5 in the Najdorf (6.Be2 e5), take the knight."** 7...Bxf5 8.exf5 d5 leaves White slightly better; 7...d5! at once is clearly stronger.
14. **"The Venice Attack refutes an early ...e5."** White gets a clear edge (6.Bb5+ and then Nde2/Nf5 or Bxd7+), not a winning one.
15. **"After 2.Qh5, just develop with 2...Nc6."** That leaves c5 hanging (3.Qxc5); 2...e6 or 2...Nf6 is cleaner.
16. **"The Sveshnikov ...Qa5+ trick forces a draw."** White can decline the repetition with 11.c4 and keep an edge.
17. **"Christiansen's Dream (Kan: 5.Nc3 b5 6.Bd3 Qb6 7.Be3 Bc5 8.Qg4) wins for White."** 8...Bxd4! and the engine calls it level. (No line in the JSON; mention only if asked.)

---

## Naming conflicts and corrections

1. **Sveshnikov vs Lasker–Pelikan.** lichess files the Sveshnikov under "Lasker–Pelikan Variation, Sveshnikov Variation" (B33); Wikipedia and most modern books say "Sveshnikov Variation" and call Lasker–Pelikan the older name. This doc says "Sveshnikov" for 7.Bg5 a6 8.Na3 b5 and the 6.Ndb5 d6 complex.
2. **Kalashnikov.** The usual explanation is a pun on the rifle: *New in Chess* (1990, quoted by Edward Winter) called it "the semi-automatic, fast-firing version of the Sveshnikov". Some web pages credit a "Georgi Kalashnikov"; no reliable source confirms such a person. Don't assert either as fact beyond the NIC quote.
3. **Rossolimo vs Nyezhmetdinov–Rossolimo.** lichess and chess.com: "Nyezhmetdinov–Rossolimo Attack"; most books: "Rossolimo Variation". Both are the same 3.Bb5.
4. **Smith–Morra vs Morra.** Same gambit; "Morra Gambit" is preferred in Europe (Wikipedia).
5. **Chekhover vs "Hungarian".** lichess and Wikipedia call 4.Qxd4 the Chekhover Variation (B53). The name "Hungarian Variation" for 4.Qxd4 appears in some sources but was not confirmed in a reliable one; the course should say "Chekhover".
6. **Kasparov Gambit vs Gary Gambit.** lichess: "Taimanov Variation, Gary Gambit" (B44); most sources: "Kasparov Gambit".
7. **"Kasparov–Karpov 1985 game 16"** is a common slip: White was Karpov (Karpov–Kasparov, 0-1).
8. **Scheveningen ECO.** For the Classical Scheveningen with a4, Kh1, ...Qc7 and ...Nc6 this doc uses B85 (the ECO book's classical ...Qc7/...Nc6 code); lichess's deepest name for these exact positions is B84 "Scheveningen Variation, Classical Variation". Wikipedia also calls 6.Be2 the "Maróczy Variation" of the Scheveningen (not to be confused with the Maróczy Bind).
9. **Soltis Variation.** lichess gives the name to 10...Qa5 11.h4 Rfc8 12.Bb3 h5; most books use it for ...h5 against h4 in general, including 10...Rc8 11.Bb3 Ne5 12.h4 h5 (this doc's `dragon-yug-soltis`, which lichess classifies as B78 "Old Line").
10. **Grand Prix Attack.** In this doc and on lichess it means 2.Nc3 with f4 (B23); many sources also call 2.f4 the Grand Prix, while lichess names 2.f4 the "McDonnell Attack" and 2.f4 d5 3.exd5 Nf6 the "Tal Gambit".
11. **English Attack.** Named for the English grandmasters (Nunn, Short, Chandler) who popularized it; sources date it to the early or late 1980s.
12. **Dragon.** Dus-Chotimirsky said he coined the name in 1901 (in a 1953 book); the earliest printed use Edward Winter found is 1914, and Heinrich Wolf (1924) wrote "Paulsensche Drachenvariante".
13. **"Sicilian".** Polerio analyzed 1...c5 in 1594 without the name; Sarratt standardized "Sicilian" in English in 1813.
14. **Capablanca's "Black's game is full of holes".** Quoted on Wikipedia, but Edward Winter says its source is unknown and the remark is unverified; don't quote it as fact.
15. **Bowdler Attack.** Credited to Thomas Bowdler (1754–1825) in some sources and to another member of the Bowdler family in others; no reliable source was found for a famous early game.
16. **Göteborg / Gothenburg.** The variation is usually spelled "Göteborg" (lichess: "Goteborg Variation"); the city is Gothenburg in English (the chessgames event name).
17. **Fischer–Sozin vs Sozin.** "Sozin Attack" (lichess B86–B89) covers 6.Bc4 against both 5...Nc6 and 5...a6/5...e6; "Fischer–Sozin" usually means 6.Bc4 against the Najdorf (lichess calls 6.Bc4 e6 7.Bb3 b5 "Sozin Attack, Flank Variation").
18. **Venice Attack.** lichess uses the name both for 5...e5 6.Bb5+ (B56) and for the Prins 5.f3 e5 6.Bb5+ (B55).
19. **Spelling of names.** Najdorf; Opočenský / Opocensky; Maróczy / Maroczy; Löwenthal / Loewenthal; Nezhmetdinov / Nyezhmetdinov; Velimirović / Velimirovic; Portorož / Portoroz.

## Claims not fully confirmed (flagged on purpose)

- **Where the moves come from.** Every line starts from a position named in the lichess `chess-openings` dataset. The moves after the last lichess-named position were written from standard theory or chosen as the engine's top move, and then checked: every position in every non-historical line was scanned at depth 14, and part of them at depth 20 (see "Depth-20 sweep was partial" below). Lines that go more than two moves beyond the last lichess name: `chekhover-4qxd4` (+11), `trap-4qxd4-nxd4` (+3), `sic-2d4-3qxd4` (+9), `mistake-venice-5e5` (+7), `mistake-2e5` (+4), `hyper-2g6-3c3` (+8), `okelly-3c3` (+5), `okelly-5nc3-e5` (+7), `okelly-5e5-trap` (+7), `najdorf-be3-e5` (+5), `najdorf-be3-e5-race` (+11), `najdorf-be3-e6` (+12), `najdorf-be3-ng4` (+12), `najdorf-bg5-be7` (+7), `najdorf-bg5-nbd7` (+5), `najdorf-qb6-nb3` (+6), `najdorf-be2-nf5` (+9), `najdorf-6bc4` (+8), `najdorf-sozin-nxe4` (+7), `najdorf-6h3` (+7), `najdorf-6nb3` (+5), `najdorf-6f4` (+5), `najdorf-6g3` (+7), `dragon-yug-9bc4` (+3), `dragon-yug-soltis` (+6), `dragon-soltis-rxc3` (+16), `dragon-yug-9ooo` (+9), `dragon-yug-9g4` (+9), `dragon-7qd2-ng4` (+11), `dragon-6be3-ng4-trap` (+11), `dragon-6bc4` (+15), `dragon-levenfish-trap` (+10), `accel-dragon-main` (+3), `accel-reshevsky-trap` (+10), `accel-d5` (+7), `accel-maroczy` (+7), `accel-breyer-ng4` (+4), `accel-5nxc6` (+5), `rauzer-6e5` (+6), `sozin-qb6` (+6), `velimirovic` (+11), `velimirovic-nf5` (+16), `magnus-smith-trap` (+4), `boleslavsky` (+5), `boleslavsky-7nf3` (+8), `classical-6be3-ng4` (+6), `keres-6g4` (+10), `scheveningen-6be2` (+11), `scheveningen-from-najdorf` (+8), `scheveningen-english` (+5), `svesh-6a6` (+6), `svesh-11bd3` (+6), `svesh-11c3` (+8), `svesh-9nd5` (+7), `svesh-9nd5-qa5` (+3), `svesh-7nd5` (+8), `svesh-6nf5` (+6), `svesh-6nb3` (+3), `svesh-6nf3` (+3), `svesh-6nxc6` (+5), `kalashnikov` (+6), `kalashnikov-6n1c3` (+6), `lowenthal` (+10), `taimanov-qc7` (+9), `taimanov-be3-bd3` (+7), `taimanov-kasparov-gambit` (+4), `taimanov-nxc6` (+4), `kan-bd3` (+7), `kan-c4` (+9), `kan-nc3` (+9), `four-knights-ndb5` (+11), `four-knights-nxc6` (+6), `pin-variation` (+6), `pin-ne4-trap` (+6), `e6-3d4-d5` (+10), `godiva-4qb6` (+4), `alapin-d5` (+8), `alapin-d5-iqp` (+5), `alapin-nf6` (+10), `alapin-nf6-cxd4` (+10), `morra-accepted` (+9), `morra-siberian-trap` (+4), `morra-nf6-e5-trap` (+13), `morra-nf6-e5-dxe5` (+13), `morra-nf6-ng4` (+12), `morra-e6-setup` (+6), `morra-declined-nf6` (+4), `morra-declined-d5` (+12), `morra-declined-d3` (+3), `closed-6be3` (+5), `closed-6f4` (+5), `gpa-bc4` (+11), `gpa-bb5` (+9), `gpa-2f4-d5` (+6), `bowdler` (+5), `bowdler-scholars-trap` (+4), `bowdler-qh5-e6` (+5), `qh5-2qh5` (+6), `qh5-nf6` (+6), `wing-2b4` (+9), `rossolimo-g6` (+8), `rossolimo-bxc6` (+12), `rossolimo-e6` (+9), `rossolimo-e6-bxc6` (+9), `moscow-bd7-c4` (+11), `moscow-bd7-oo` (+14), `moscow-nc6` (+11), `moscow-nd7` (+10), `kia-e6` (+3), `kia-2d3` (+12).
- **Constructed teaching lines.** The traps (`mistake-2e5`, `trap-4qxd4-nxd4`, `okelly-5e5-trap`, `dragon-6be3-ng4-trap`, `dragon-levenfish-trap`, `magnus-smith-trap`, `keres-nxg4-trap`, `pin-ne4-trap`, `morra-nf6-e5-trap`, `morra-nf6-e5-dxe5`, `bowdler-scholars-trap`) and the illustrative lines `mistake-venice-5e5`, `najdorf-be2-nf5`, `najdorf-sozin-nxe4`, `dragon-7qd2-ng4`, `dragon-6bc4`, `dragon-soltis-rxc3`, `rauzer-6g6`, `rauzer-6e5`, `svesh-6a6`, `qh5-2qh5`, `qh5-nf6` are constructed: the mistake is a plausible move, and the follow-up is the engine's best line (depth 20). The Siberian Trap and the Fischer–Reshevsky trap are named, documented lines.
- **Engine continuations used as theory.** Where a line goes beyond well-known theory, the later moves are the engine's choices: `keres-6g4` (8...d5), `morra-declined-d5` (6...e6 7.Nc3 Qd8), `najdorf-6h3`, `dragon-yug-9g4`, `dragon-yug-9ooo` (12...Bxd4 13.Qxd4 Qb6; 12...e5 is the main book move), `kan-c4`, `rossolimo-e6-bxc6`, `wing-2b4`, `gpa-bc4`, `kia-2d3`.
- **Depth-20 sweep was partial.** The full depth-20 scan was stopped early to free memory: it covered 325 of the 1114 non-historical positions, i.e. all positions of 50 of the 164 non-historical lines (§4, §5 and most of §6.1–§6.4) and the opening moves of the rest. Every position still has the depth-14 scan, every trap and every famous moment has its own depth-20 check, and the verbal evaluations of the other lines are based on the depth-14 scan plus those probes.
- **Status labels** are qualitative (no explorer or TWIC counts were possible in this session; see "How to read").
- **History claims with a single or weak source.** The Kalashnikov name; the Bowdler namesake; the exact decade of the English Attack name; Magnus Smith as the namesake of the Magnus Smith Trap (the name is in the lichess dataset; the namesake was not confirmed); Euwe as the first player of the Scheveningen (a New In Chess book excerpt; Wikipedia's mirror agrees).
- **Model games with moves from one source only** (chessgames.com): Geller–Panno 1955 and Anand–Kasparov 1995 game 9 (Wikipedia confirms result and opening, not the moves). For Tal–Larsen, a talkchess thread mentions a 28-move version of the score; chessgames, olimpbase and Mark Weeks give 37 moves, which this doc follows.
- **Engine disagreement.** Tal–Larsen's 16.Nd5 and Nezhmetdinov's 12.Qxf6 are rated differently by different engines and depths; the verdicts here are Stockfish 19 at depth 20.

## Sources

- Wikipedia: [Sicilian Defence](https://en.wikipedia.org/wiki/Sicilian_Defence), [Sicilian Defence, Alapin Variation](https://en.wikipedia.org/wiki/Sicilian_Defence,_Alapin_Variation), [Sicilian Defence, Scheveningen Variation](https://en.wikipedia.org/wiki/Sicilian_Defence,_Scheveningen_Variation), [Sicilian Defence, Dragon Variation](https://en.wikipedia.org/wiki/Sicilian_Defence,_Dragon_Variation), [Sicilian Defence, Sveshnikov Variation](https://en.wikipedia.org/wiki/Sicilian_Defence,_Sveshnikov_Variation), [Smith–Morra Gambit](https://en.wikipedia.org/wiki/Smith%E2%80%93Morra_Gambit), [Poisoned Pawn Variation](https://en.wikipedia.org/wiki/Poisoned_Pawn_Variation), [Kurt Richter](https://en.wikipedia.org/wiki/Kurt_Richter), [Vsevolod Rauzer](https://en.wikipedia.org/wiki/Vsevolod_Rauzer), [World Chess Championship 2018](https://en.wikipedia.org/wiki/World_Chess_Championship_2018), [Classical World Chess Championship 1995](https://en.wikipedia.org/wiki/Classical_World_Chess_Championship_1995), [World Chess Championship 1985](https://en.wikipedia.org/wiki/World_Chess_Championship_1985)
- lichess opening names dataset (ECO + names, files `a.tsv`, `b.tsv`, `d.tsv`, `e.tsv`): [lichess-org/chess-openings](https://github.com/lichess-org/chess-openings)
- History and names: [Edward Winter, "The Sicilian Defence" (chesshistory.com)](https://chesshistory.com/winter/extra/sicilian.html); [chess.com, Grand Prix Attack](https://www.chess.com/openings/Closed-Sicilian-Defense-Grand-Prix-Attack); [chess.com, Nyezhmetdinov–Rossolimo Attack](https://www.chess.com/openings/Sicilian-Defense-Nyezhmetdinov-Rossolimo-Attack); [chess.com, "The Smith–Morra Gambit: A History"](https://www.chess.com/article/view/the-smith-morra-gambit-a-history); [New In Chess, *The Sicilian Scheveningen* sample](https://www.newinchess.com/media/wysiwyg/product_pdf/7062.pdf); [New Zealand Chess, Chandler and the English Attack](https://newzealandchess.co.nz/history/pdfs/1980%20June%2007%20-%20Miles%20top%20but%20Nigel%20falls%20short.pdf)
- Model-game confirmation (chessgames.com game pages; PGNs from `nph-chesspgn?text=1&gid=<id>`):
  - Geller–Panno 1955: [chessgames 1048762](https://www.chessgames.com/perl/chessgame?gid=1048762); Keres–Najdorf 1955: [chessgames 1255552](https://www.chessgames.com/perl/chessgame?gid=1255552); [Gothenburg 1955 tournament page](https://chessgames.com/perl/chess.pl?tid=79308)
  - Fischer–Larsen 1958: [chessgames 1008373](https://www.chessgames.com/perl/chessgame?gid=1008373), [lichess study](https://lichess.org/study/embed/i1Sbam2m/DzWbcHf2), [chess.com, My 60 Memorable Games #2](https://www.chess.com/blog/PhilipFry3000/bobby-fischer-my-60-memorable-games-game-2), [ChessBase Modern Classics](https://books.chessbase.com/de/modern-classics/fischer-larsen-1958)
  - Fischer–Reshevsky 1958/59: [chessgames 1008376](https://www.chessgames.com/perl/chessgame?gid=1008376), [lichess mirror](https://lichess.org/@/NaidichArkasha/blog/bobby-fischers-best-chess-game/IZXDvqvU), [gameknot](https://m.gameknot.com/annotation.pl/bobby-vs-reshevsky?gm=35881)
  - Fischer–Najdorf 1962: [chessgames 1008414](https://www.chessgames.com/perl/chessgame?gid=1008414), [olimpbase](https://www.olimpbase.org/other/fischer60.html), [British Chess News](https://britishchessnews.com/?p=17481)
  - Nezhmetdinov–Chernikov 1962: [chessgames 1260278](https://www.chessgames.com/perl/chessgame?gid=1260278), [ChessBase Modern Classics](https://books.chessbase.com/de/modern-classics/nezhmetdinov-chernikov-1962), [chess.com](https://www.chess.com/blog/SamCopeland/nezhmetdinovs-immortal-queen-sacrifice-best-of-the-60s-nezhmetdinov-vs-chernikov-1962)
  - Tal–Larsen 1965: [chessgames 1139729](https://www.chessgames.com/perl/chessgame?gid=1139729), [olimpbase](https://olimpbase.org/ind-wcc/wc1966-candsf.html), [Mark Weeks](https://www.mark-weeks.com/aboutcom/aa05e21.htm), [talkchess thread](https://talkchess.com/viewtopic.php?p=857629)
  - Spassky–Fischer 1972 g11: [chessgames 1044724](https://www.chessgames.com/perl/chessgame?gid=1044724), [chess.com](https://www.chess.com/article/view/50-year-anniversary-fischer-spassky-game-11), [ChessBase](https://en.chessbase.com/post/bobby-fischer-in-iceland-45-years-ago-9)
  - Karpov–Korchnoi 1974 g2: [chessgames 1067858](https://www.chessgames.com/perl/chessgame?gid=1067858), [Mark Weeks](https://www.mark-weeks.com/chess/74kkc1.htm), [lichess study](https://lichess.org/study/embed/aUGM899G/R8LCqED8)
  - Karpov–Kasparov 1985 g16: [chessgames 1067175](https://www.chessgames.com/perl/chessgame?gid=1067175), [gameknot](https://gameknot.com/annotation.pl/world-championship-match-game-16-moscow-1985?gm=4273), [Stabroek News](https://www.stabroeknews.com/2013/features/07/14/chess-66/), [The Spectator, 26 October 1985](https://archive.spectator.co.uk/article/26th-october-1985/53/chess), [ChessBase India](https://chessbase.in/news/1985-wc-garry-kasparov)
  - Anand–Kasparov 1995 g9 and g11: [chessgames 1018624](https://www.chessgames.com/perl/chessgame?gid=1018624), [chessgames 1018626](https://www.chessgames.com/perl/chessgame?gid=1018626), [Wikipedia](https://en.wikipedia.org/wiki/Classical_World_Chess_Championship_1995)
  - Caruana–Carlsen 2018 g1 and g8: [chessgames 1937713](https://www.chessgames.com/perl/chessgame?gid=1937713), [chessgames 1937842](https://www.chessgames.com/perl/chessgame?gid=1937842), [Wikipedia](https://en.wikipedia.org/wiki/World_Chess_Championship_2018)
- Engine: Stockfish 19 (npm `stockfish` 19.0.1) through `scripts/engine.mjs` and the one-process scanner and probe in `test-results/sic-research/` (`scan.mjs`, `sf.mjs`, `probe.mjs`).
