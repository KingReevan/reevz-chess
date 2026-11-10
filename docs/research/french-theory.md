# French Defense: theory map

Research source of truth for the Reevz Chess French course. The opening is 1.e4 e6 2.d4 d5, ECO C00–C19. The course teaches both sides: what Black is aiming for in each system, and how White should handle it, including White's early alternatives (2.d3, 2.Qe2, 2.Nf3, 2.c4, 2.f4, 2.b3, the Exchange, 3.Bd3 and the early gambits).

## How to read this document

- **Lines.** Every move sequence shown in a `- \`id\`` bullet is copied from `french-lines.json`. All 153 lines were replayed move by move with chess.js 1.4.0: every move is legal and every SAN token is exactly chess.js's own spelling (including `+` and `#`). Each line shows the FEN after its last move. The doc bullets and the JSON are generated from one source file (`test-results/fr-research/lines.mjs`, built by `build.mjs`), so they can't drift apart.
- **Engine checks.** Every line except the model games was scanned with Stockfish 19 (the repo's `stockfish` package, one process at a time): every position at depth 14, flagging any move that throws away more than three quarters of a pawn. The model games were scanned at depth 14 and their famous moments were checked at depth 20. Every tactical claim (trap, "wins a piece", "wins the queen", "fork", "only move", every Greek Gift) was checked separately at depth 20 with three candidate moves, using the one-process probe script in the research folder (`probe.mjs`, equivalent to `scripts/engine.mjs`). Outcomes are written in words ("Black wins a pawn", "White is much better"), never as engine numbers. Where a well-known claim turned out to be folklore, the text says what really happens; see [Folklore the engine contradicts](#folklore-the-engine-contradicts).
- **Move numbers in prose.** Moves are counted from 1.e4. "5...Qb6" means Black's 5th move.
- **`side`** in the JSON says whose choice defines the line: `white`, `black`, or `both` (a position both sides steer into). For a `trap`, `side` is the side that springs the trap (the side that wins). For a `dubious` line, `side` is the side that profits from the dubious move.
- **Status.** This is the status in top-level play, 2020–2026. Values:
  - `popular`: a mainstream elite choice.
  - `respectable`: sound and played, but not the first choice.
  - `rare`: playable, but seldom seen at the top (this includes lines that are common in club and online play, such as 2.d3 and the Exchange Variation's quieter set-ups).
  - `dubious`: objectively suspect: the engine and the literature agree that the side choosing it ends up clearly worse than with its normal moves (about half a pawn or more), but nothing is lost by force.
  - `trap`: a teaching line that contains a mistake that loses material or the game (there are 11). Every trap was confirmed at depth 20.
  - `historical`: the moves of a famous game (all are in §14).

  **Popularity sources.** No fresh game counts could be made for this course: the lichess opening explorer needs authentication (it returned HTTP 401 for the Sicilian research), and chessgames.com, 365chess.com and chesstempo.com all refused automated access (HTTP 403) during this research. The labels are a qualitative synthesis of the sources at the end, mainly Wikipedia's "French Defence" article (the French "has usually been the third most popular reply to 1.e4, behind only 1...c5 and 1...e5"; 3.Nc3 is played in over 40% of games after 2...d5; 3...Nf6 has overtaken 3...Bb4 in popularity since the 1980s; the Advance "has become nearly as popular as 3.Nd2"; against 4.Bg5 the Burn "is the most common reply at the top level"; the Rubinstein is "a drawing weapon but theory still gives White a slight edge"), the French games of the 2023 and 2024 World Championship matches (§14), and the lichess `chess-openings` naming dataset.
- **Names and ECO codes.** These follow the lichess `chess-openings` dataset (file `c.tsv`, which mirrors ECO naming) and Wikipedia. lichess classifies by position, so a line that transposes gets the code of the position it reaches (for example, 2.d3 lines that reach a King's Indian Attack position get A08, and 4...Ne7 5.a3 Bxc3+ 6.bxc3 c5 gets the Winawer main-line code C18). Where sources disagree, that is noted in place and again in [Naming conflicts and corrections](#naming-conflicts-and-corrections).
- **Spelling.** US spelling in prose ("Defense", "center", "maneuver"). Wikipedia article titles keep their own British spelling ("French Defence").

---

## 1. Variation tree

```
1.e4 e6 2.d4 d5
├─ 3.Nc3                                         (over 40% of games, Wikipedia)
│   ├─ 3...Bb4    Winawer (C15–C19)                                         §11
│   │   ├─ 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7
│   │   │   7.Qg4 (7...O-O, 7...Qc7 Poisoned Pawn) · 7.Nf3 · 7.a4 · 7.h4
│   │   │   6...Qc7 · 5...Ba5 (Armenian) · 5.Bd2 (Bogoljubow)
│   │   ├─ 4.e5 Ne7 · 4...Qd7 (Petrosian) · 4...b6
│   │   └─ 4.exd5 · 4.a3 · 4.Ne2 (Alekhine Gambit) · 4.Bd2 · 4.Qg4
│   ├─ 3...Nf6    Classical (C11–C14)                                       §10
│   │   ├─ 4.e5 Nfd7  Steinitz: 5.f4 c5 6.Nf3 Nc6 7.Be3 · 5.Nce2 (Shirov–Anand)
│   │   ├─ 4.Bg5 Be7 5.e5 Nfd7  6.Bxe7 Qxe7 7.f4 (main line) · 6.h4 (Alekhine–Chatard)
│   │   ├─ 4.Bg5 Bb4  McCutcheon (C12)
│   │   ├─ 4.Bg5 dxe4 Burn (C13)
│   │   └─ 4.exd5 exd5  Delayed Exchange / Svenonius
│   └─ 3...dxe4   Rubinstein (C10): 4...Nd7 · 4...Bd7 5.Nf3 Bc6 Fort Knox    §9
├─ 3.Nd2                                         Tarrasch (C03–C09)          §8
│   ├─ 3...c5     4.exd5 Qxd5 · 4.exd5 exd5 (isolated d-pawn) · 4.Ngf3
│   ├─ 3...Nf6    4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 (closed)
│   ├─ 3...Be7    Morozevich · 3...Nc6 Guimard · 3...a6 · 3...dxe4 (Rubinstein)
├─ 3.e5                                          Advance (C02)              §5
│   └─ 3...c5 4.c3 Nc6 5.Nf3 Qb6  6.a3 · 6.Be2 · 6.Bd3 (Milner-Barry Gambit)
│       5...Bd7 (Euwe) · 4...Qb6 (Wade) · 3...b6 · 4.Nf3 · 4.dxc5 · 4.Qg4
├─ 3.exd5 exd5                                   Exchange (C01)              §6
│   └─ 4.Bd3 · 4.Nf3 · 4.c4 (Monte Carlo)
└─ 3.Bd3 (Schlechter) · 3.Be3 (Alapin Gambit) · 3.c4 (Diemer–Duhm)          §7

White's second-move alternatives (§7): 2.d3 (King's Indian Attack) · 2.Qe2 (Chigorin)
· 2.Nf3 d5 3.Nc3 (Two Knights) · 2.c4 (Steiner) · 2.f4 (La Bourdonnais) · 2.b3 (Horwitz)
· 2.Nc3 (usually back to 3.d4)
```

---

## 2. Suggested learning order

The course outline (`content/openings/french/OUTLINE.md`) is the authoritative order. In short:

| # | Block | Main lines | Difficulty |
|---|-------|-----------|-----------|
| 1 | Why 1...e6 and 2...d5, the pawn chain, the two breaks, the c8-bishop, counting on d4 | `fr-2d5`, `adv-3c5`, `adv-5qb6`, `fr-count-d4`, `tar-closed-f6` | 1 |
| 2 | The Advance: ...Qb6 against d4, 6.a3, 6.Be2, the Milner-Barry and the Bb5+ trap | `adv-5qb6`, `adv-6a3-c4`, `adv-6be2`, `adv-mb-main`, `adv-mb-trap` | 2 |
| 3 | The Exchange and White's early sidelines (2.d3, 2.Qe2, 2.Nf3, 3.Bd3, gambits) | `exch-4bd3`, `exch-greek`, `side-2d3`, `side-2qe2-pin` | 1–2 |
| 4 | The Tarrasch: 3...c5 (both recaptures) and 3...Nf6 with ...f6 | `tar-qxd5`, `tar-exd5`, `tar-closed-f6` | 2 |
| 5 | The Rubinstein and Fort Knox | `rub-4nd7`, `rub-7bd3`, `fk-main`, `fk-neg5-h6` | 2 |
| 6 | The Classical: Steinitz, 4.Bg5 main line, Alekhine–Chatard, McCutcheon, Burn | `cla-steinitz`, `cla-main`, `cla-ac`, `cla-mcc`, `cla-burn` | 2–3 |
| 7 | The Winawer: 6...Ne7, 7.Qg4, the Poisoned Pawn (ideas), positional lines | `win-6ne7`, `win-7qg4-oo`, `win-pp`, `win-7nf3` | 3 |
| 8 | Greek Gift, ...f6 and e5, the d4 blockade, f4–f5, the bad bishop, model games | `exch-greek`, `cla-greek`, `theme-e5-blockade`, `theme-bad-bishop` | 3 |

Difficulty is 1–5 for a beginner-to-club player: 1 = a few moves and one idea, 5 = long forcing theory. In the razor-sharp lines (the Winawer Poisoned Pawn, the Milner-Barry Gambit, the Alekhine–Chatard Attack) the course teaches the ideas and the first critical moves, not long forced theory.

---

## 3. About the French

- **The name.** Wikipedia: "The French Defence is named after a match played by correspondence between the cities of London and Paris in 1834 (although earlier examples of games with the opening do exist). It was Jacques Chamouillet, one of the players of the Paris team, who persuaded the others to adopt this defence." Wikipedia's infobox dates the match 1834–1836. Neither Wikipedia nor Edward Winter's "The French Defence" (chesshistory.com) gives the score or the moves of the game in which Paris played 1...e6, so the course should not say who won it (see [Claims not fully confirmed](#claims-not-fully-confirmed-flagged-on-purpose)).
- **Before the name.** Edward Winter notes that John Cochrane's *Treatise on the Game of Chess* (1822) already analyzed 1.e4 e6 2.d4 d5 3.e5 c5, and that "It was not until the next decade that the name 'French Defence' was introduced; Cochrane called it the 'King's pawn one game'." George Walker and James Leonard disliked 1...e6 (Winter quotes the nickname "King's Pawn one sneak"). Wikipedia says the idea of 5...Bd7 in the Advance "was mentioned by Greco as early as 1620".
- **A slow start.** Wikipedia: "Along with other openings besides 1.e4 e5, the French Defence received relatively little attention until the twentieth century." It quotes Wilhelm Steinitz: "I have never in my life played the French Defence, which is the dullest of all openings" (the original source of this quote was not checked; Steinitz's name is nevertheless on two French variations, 4.e5 in the Classical and 4.dxc5 in the Advance). Wikipedia calls Géza Maróczy "perhaps the first world-class player to make it his primary weapon against 1.e4" in the early 20th century.
- **Famous players.** Wikipedia names Mikhail Botvinnik, Viktor Korchnoi, Akiba Rubinstein, Aron Nimzowitsch, Tigran Petrosian, Lev Psakhis, Wolfgang Uhlmann and Rafael Vaganian as major contributors, and among more recent players Evgeny Bareev, Alexey Dreev, Mikhail Gurevich, Alexander Khalifman, Smbat Lputian, Alexander Morozevich, Teimour Radjabov, Nigel Short, Gata Kamsky, Ding Liren and Yury Shulman. The Winawer was "pioneered by Aron Nimzowitsch and Mikhail Botvinnik"; Nimzowitsch believed the Advance "to be White's best choice"; Karpov used the Tarrasch "to great effect" in the 1970s and early 1980s.
- **Today.** Wikipedia: "For the last several decades, it has usually been the third most popular reply to 1.e4, behind only 1...c5 and 1...e5. It was even temporarily ranked above 1...e5 in frequency around 2006." It also says "Many players who begin with 1.e4 find that the French Defence is the most difficult opening for them to play against." At World Championship level, Ding Liren played it in both of his matches: he lost a Tarrasch to Nepomniachtchi in 2023 (game 7), beat Gukesh with a Classical Steinitz in 2024 (game 1) and drew an Exchange Variation in 2024 (game 5) (Wikipedia; games 1 and 7 are in §14). Korchnoi played it in his matches with Karpov (Wikipedia: all seven French games of the 1974 Candidates final were drawn; in 1978 Korchnoi played it once, in game 16).
- **The "French bishop".** Wikipedia: "the pawn on e6 can impede the development of the bishop on c8, known by many players as the 'French bishop'." Much of French strategy is about what Black does with this bishop (§4.5).

---

## 4. Foundations: 1...e6, 2...d5 and the pawn chain

### 4.1 Why 1...e6 and 2...d5?

- `fr-1e6` (C00, popular): 1.e4 e6
  - FEN: `rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2`
- `fr-2d4` (C00, popular): 1.e4 e6 2.d4
  - FEN: `rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2`
- `fr-2d5` (C00, popular): 1.e4 e6 2.d4 d5
  - FEN: `rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3`
- `fr-3nc3` (C10, popular): 1.e4 e6 2.d4 d5 3.Nc3
  - FEN: `rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3`

- **The idea in one sentence.** Black prepares ...d5 with a pawn already behind it on e6, so that when Black challenges e4 the d5-pawn is protected and can't be won.
- **1...e6** also opens the f8-bishop's diagonal (it can go to e7, d6, c5 or b4). The cost is that the c8-bishop is shut in behind the e6-pawn (§4.5).
- **2.d4** takes the whole center. **2...d5** attacks e4. White now has three basic choices, and the whole course is organized around them: **defend** e4 (3.Nc3, 3.Nd2, 3.Bd3), **advance** it (3.e5, §5), or **trade** it (3.exd5, §6). After 3.Nc3 or 3.Nd2, Black can also give up the center with ...dxe4 (§9).

### 4.2 The pawn chain and its base

- `adv-3e5` (C02, popular): 1.e4 e6 2.d4 d5 3.e5
  - FEN: `rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3`
- `adv-3c5` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5
  - FEN: `rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4`
- `cla-4e5` (C11, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7
  - FEN: `rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5`

- **What a pawn chain is.** After 3.e5 White's pawns stand on d4 and e5, Black's on d5 and e6, in two diagonal "chains" that block each other. The **base** of a chain is its rearmost pawn (White's d4, Black's e6); the **head** is its front pawn (White's e5, Black's d5).
- **Who has space where.** White's chain points at Black's kingside: White has more room there and often attacks the black king. Black's chain points at White's queenside, so Black plays on the queenside and in the center.
- **Attack the base.** Nimzowitsch's rule: attack a chain at its base. Black's main break is **...c5** against d4 (§4.3). Black's second break is **...f6** against the head e5 (§4.4). White's matching lever is f4–f5 against e6 (§12.4).
- The same chain appears after 3.Nc3 Nf6 4.e5 (Steinitz, §10.1), 3.Nd2 Nf6 4.e5 (closed Tarrasch, §8.6) and 3.Nc3 Bb4 4.e5 (Winawer, §11).

### 4.3 The fight for d4: counting attackers and defenders

- `adv-4c3` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3
  - FEN: `rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4`
- `adv-5nf3` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3
  - FEN: `r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5`
- `adv-5qb6` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6
  - FEN: `r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6`
- `fr-count-d4` (C02, trap): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Be2 cxd4 7.cxd4 Nxd4 8.Nxd4 Qxd4 9.Qxd4
  - FEN: `r1b1kbnr/pp3ppp/4p3/3pP3/3Q4/8/PP2BPPP/RNB1K2R b KQkq - 0 9`
- `adv-mb-nxd4-piece` (C02, trap): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Nxd4 8.Nxd4 Bc5 9.Nb5
  - FEN: `r1b1k1nr/pp3ppp/1q2p3/1NbpP3/8/3B4/PP3PPP/RNBQK2R b KQkq - 2 9`

- **...c5, ...Nc6, ...Qb6** all hit d4. **c3, Nf3** and the d1-queen (later also Be3) defend it. With the bishop on e2 the queen still sees d4; with the bishop on d3 it does not. In the Advance after 5...Qb6 6.Be2 cxd4 7.cxd4, d4 is attacked by the c6-knight and the queen (two) and defended by the f3-knight and the d1-queen (two).
- **Two against two: don't take.** 7...Nxd4? 8.Nxd4 and Black has given a knight for a pawn; 8...Qxd4?? 9.Qxd4 then loses the queen too (`fr-count-d4`; engine: White is winning after either). A good choice is 7...Nh6 (about as good as 7...Nge7 at depth 20), bringing a **third** attacker (the knight goes to f5), so White must defend d4 again (§5.4).
- **When a defender is blocked.** With the bishop on d3 instead of e2 (the Milner-Barry Gambit, §5.5), the queen's line from d1 to d4 is blocked, so d4 is only defended once and Black can take it. But taking it with the knight before ...Bd7 is still a mistake: 7...Nxd4? 8.Nxd4 and Black can't take White's knight on d4, because 8...Qxd4?? 9.Bb5+ uncovers the queen (§5.6). After 8...Bc5 9.Nb5 White is simply a piece for a pawn up (`adv-mb-nxd4-piece`, engine: White is winning).

### 4.4 The second break: ...f6 against the head

- `tar-closed-f6` (C06, popular): 1.e4 e6 2.d4 d5 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4 f6 9.exf6 Nxf6 10.Nf3 Bd6 11.O-O Qc7 12.Nc3 a6
  - FEN: `r1b1k2r/1pq3pp/p1nbpn2/3p4/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w kq - 0 13`
- `adv-4dxc5` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 c5 4.dxc5 Nc6 5.Nf3 Bxc5 6.Bd3 f6 7.Qe2 fxe5 8.Nxe5 Nf6
  - FEN: `r1bqk2r/pp4pp/2n1pn2/2bpN3/8/3B4/PPP1QPPP/RNB1K2R w KQkq - 1 9`
- `adv-mb-decline-bd7` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4
  - FEN: `r3k1nr/pp1bb1pp/1qn1pp2/3pP3/1P3B2/2PB1N2/P4PPP/RN1Q1RK1 b kq - 2 10`

- **What ...f6 does.** It attacks e5, the head of White's chain. After exf6 Black recaptures with the knight (...Nxf6) or a piece, the f-file opens for Black's rook, and the e6-pawn may later advance to e5 to free the c8-bishop. The downside: e6 can become a weak, backward pawn, and the e5-square can become a home for White's pieces (§12.2).
- **Closed Tarrasch:** 8...f6 9.exf6 Nxf6 10.Nf3 Bd6 11.O-O Qc7 12.Nc3 a6: Black has free piece play and pressure on d4; the engine gives White a small edge.
- **Advance with 4.dxc5:** after 4...Nc6 5.Nf3 Bxc5 6.Bd3 f6 7.Qe2 fxe5 8.Nxe5 Nf6, Black has removed the e5-pawn and has a fine game. Rechecked at depth 20 during course writing: this exact position is level (9.Bf4 O-O 10.O-O Nd4 11.Qd1 Nc6 repeats); 8...Nxe5 9.Qxe5 Nf6 is what keeps a small edge for Black.
- **White's answer: hold e5 with pieces.** 6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4: White gives up the d4-pawn but keeps control of e5 with Bf4, Nf3 and Qe2 (Nimzowitsch's plan; engine: White slightly better). See §12.2.

### 4.5 The c8-bishop and how Black solves it

- `adv-4qb6-wade` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Qb6 5.Nf3 Bd7 6.Be2 Bb5 7.c4 Bxc4 8.Bxc4 dxc4
  - FEN: `rn2kbnr/pp3ppp/1q2p3/2p1P3/2pP4/5N2/PP3PPP/RNBQK2R w KQkq - 0 9`
- `win-7nf3-b6` (C19, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Nf3 b6 8.a4 Ba6 9.Bxa6 Nxa6 10.Qe2 Nb8 11.O-O Nbc6
  - FEN: `r2qk2r/p3nppp/1pn1p3/2ppP3/P2P4/2P2N2/2P1QPPP/R1B2RK1 w kq - 4 12`
- `fk-4bd7` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bd7 5.Nf3 Bc6
  - FEN: `rn1qkbnr/ppp2ppp/2b1p3/8/3PN3/5N2/PPP2PPP/R1BQKB1R w KQkq - 3 6`
- `exch-3exd5` (C01, respectable): 1.e4 e6 2.d4 d5 3.exd5 exd5
  - FEN: `rnbqkbnr/ppp2ppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4`
- `adv-3b6` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 b6 4.c3 Qd7 5.Nf3 Ba6 6.Bxa6 Nxa6 7.O-O
  - FEN: `r3kbnr/p1pq1ppp/np2p3/3pP3/3P4/2P2N2/PP3PPP/RNBQ1RK1 b kq - 1 7`

- **The problem.** With pawns on e6 and d5 (light squares), the light-squared bishop on c8 has no good diagonal. In the endgame it can become a "bad" bishop that defends its own pawns while White's pieces use the light squares (§12.5).
- **Five standard cures.**
  1. **...b6 and ...Ba6**, trading it for White's good f1-bishop (Winawer 7.Nf3 b6 8.a4 Ba6 9.Bxa6 Nxa6; Advance 3...b6 4.c3 Qd7 5.Nf3 Ba6; the Morozevich 3...Be7 with ...b6/...Ba6, §8.7).
  2. **...Bd7–b5**, also a trade (the Wade 4...Qb6 5.Nf3 Bd7 6.Be2 Bb5, §5.7).
  3. **...Bd7–c6** on the long diagonal after ...dxe4 (the Fort Knox, §9.5), often followed by ...Bxf3 or ...Bxe4.
  4. **Exchanging pawns** so the diagonal opens: in the Exchange Variation the bishop is free at once (§6).
  5. **...f6 and later ...e5**, or ...c5xd4 and ...e5, opening the c8–h3 diagonal (§4.4).
- **White's view.** White should usually keep the good light-squared bishop and avoid trades that help Black (for example 6.Bb5? in §4.6 is a mistake, and White meets ...Bb5 with Bxb5 only when it gains something).

### 4.6 Early mistakes for both sides

- `fr-bb5-trap` (C02, trap): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Bd7 6.Bb5 Nxe5 7.Nxe5 Bxb5 8.Na3 Bc6
  - FEN: `r2qkbnr/pp3ppp/2b1p3/2ppN3/3P4/N1P5/PP3PPP/R1BQK2R w KQkq - 2 9`
- `adv-6a3-c4-b4` (C02, trap): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 c4 7.b4 cxb3 8.Qxb3 Qxb3
  - FEN: `r1b1kbnr/pp3ppp/2n1p3/3pP3/3P4/PqP2N2/5PPP/RNB1KB1R w KQkq - 0 9`
- `fr-mistake-ne4` (C11, rare): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Ne4 5.Nxe4 dxe4 6.Be3 c5 7.dxc5 Nd7 8.Qg4
  - FEN: `r1bqkb1r/pp1n1ppp/4p3/2P1P3/4p1Q1/4B3/PPP2PPP/R3KBNR b KQkq - 2 8`
- `rub-6gxf6` (C10, dubious): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Nxf6+ gxf6 7.Bd3 c5 8.d5
  - FEN: `r1bqkb1r/pp1n1p1p/4pp2/2pP4/8/3B1N2/PPP2PPP/R1BQK2R b KQkq - 0 8`

- **6.Bb5? Nxe5! (White's mistake).** After 5...Bd7 the bishop on d7 guards b5, so the c6-knight is **not** pinned: 6...Nxe5 wins the e5-pawn, and 7.Nxe5 Bxb5 leaves Black a clean pawn up (engine: Black is clearly better). Status: trap.
- **7.b4?! cxb3 and 8.Qxb3?? (White's mistake).** After 6.a3 c4, the push b2–b4 lets Black capture **en passant** (7...cxb3), and White is already slightly worse. 8.Qxb3?? then loses the queen to 8...Qxb3, because the a-pawn has gone to a3 and nothing can recapture on b3. Status: trap.
- **4...Ne4?! (Black's mistake).** 3.Nc3 Nf6 4.e5 Ne4 5.Nxe4 dxe4 6.Be3: the knight trip costs time and the e4-pawn becomes a target; White is better (engine). The normal move is 4...Nfd7 (§10.1).
- **6...gxf6?! (Black's mistake).** In the Rubinstein, 4...Nd7 5.Nf3 Ngf6 6.Nxf6+ is meant to be met by 6...Nxf6. 6...gxf6?! 7.Bd3 c5 8.d5 opens lines against Black's king (engine: White is clearly better). Status: dubious.

---

## 5. The Advance Variation: 3.e5 (C02)

### 5.1 3.e5: space against the base attack

- `adv-5nf3` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3
  - FEN: `r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5`
- `adv-5qb6` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6
  - FEN: `r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6`
- `adv-6a3` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3
  - FEN: `r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R b KQkq - 0 6`

- **White's idea.** Lock the center, gain space, and keep the pawn on e5, which takes f6 from Black's knight and cramps Black's kingside. White's pieces: Nf3, c3 to support d4, then Be2 or Bd3, O-O, and sometimes a3/b4 on the queenside.
- **Black's plan.** 3...c5 at once, ...Nc6 and ...Qb6, all against d4; then ...Nge7–f5 or ...Nh6–f5 adds more pressure. Later ...f6 hits e5.
- **5...Qb6** also eyes b2, so White can't easily develop the c1-bishop. **6.a3** prepares b4 (gaining space and making c3–b2 stronger); **6.Be2** and **6.Bd3** are the main alternatives. Wikipedia: the Advance "has become nearly as popular as 3.Nd2"; Sveshnikov revived it in the 1980s and Grischuk "has championed it successfully at the highest levels".

### 5.2 6.a3 and the ...c4 answer

- `adv-6a3-c4` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 c4 7.Nbd2 Na5 8.Rb1 Bd7 9.h4 Ne7 10.h5 h6
  - FEN: `r3kb1r/pp1bnpp1/1q2p2p/n2pP2P/2pP4/P1P2N2/1P1N1PP1/1RBQKB1R w Kkq - 0 11`
- `adv-6a3-c4-f6` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 c4 7.Nbd2 f6 8.Be2 fxe5 9.Nxe5 Nxe5 10.dxe5 Bc5
  - FEN: `r1b1k1nr/pp4pp/1q2p3/2bpP3/2p5/P1P5/1P1NBPPP/R1BQK2R w KQkq - 1 11`
- `adv-6a3-c4-b4` (C02, trap): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 c4 7.b4 cxb3 8.Qxb3 Qxb3
  - FEN: `r1b1kbnr/pp3ppp/2n1p3/3pP3/3P4/PqP2N2/5PPP/RNB1KB1R w KQkq - 0 9`

- **6...c4** closes the queenside: White's b4 now allows ...cxb3 en passant, and Black's knight goes to a5 and b3. After 7.Nbd2 Na5 8.Rb1 Bd7 9.h4 Ne7 10.h5 h6 both sides have locked their sectors: Black has space on the queenside, White on the kingside (engine: White slightly better). Wikipedia's main line is 7.Nbd2 Na5 8.Rb1 Bd7.
- **The trade-off.** ...c4 releases the pressure on d4, so White's center is safe; Black's compensation is the queenside space and the b3-square. Rechecked at depth 20 and 25 during course writing, 7...Na5 and 7...f6 are about equal (7...Na5 is a hair ahead). With 7...f6 Black hits the head of the chain at once (8.Be2 fxe5 9.Nxe5 Nxe5 10.dxe5 Bc5, White slightly better; `adv-6a3-c4-f6`).
- **7.b4?!** is the natural-looking mistake: 7...cxb3 (en passant) and 8.Qxb3?? Qxb3 loses the queen (§4.6).

### 5.3 The Lputian 6...Nh6, and 6...Bd7

- `adv-6a3-nh6` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 Nh6 7.b4 cxd4 8.cxd4 Nf5 9.Bb2 Be7
  - FEN: `r1b1k2r/pp2bppp/1qn1p3/3pPn2/1P1P4/P4N2/1B3PPP/RN1QKB1R w KQkq - 3 10`
- `adv-lput-bd7` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 Nh6 7.b4 cxd4 8.cxd4 Nf5 9.Bb2 Be7 10.Bd3 Bd7 11.Nbd2 Nfxd4 12.Nxd4 Nxd4
  - FEN: `r3k2r/pp1bbppp/1q2p3/3pP3/1P1n4/P2B4/1B1N1PPP/R2QK2R w KQkq - 0 13`
- `adv-lput-trap` (C02, trap): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 Nh6 7.b4 cxd4 8.cxd4 Nf5 9.Bb2 Be7 10.Bd3 Nfxd4 11.Nxd4 Nxd4 12.Bxd4 Qxd4 13.Bb5+ Bd7 14.Bxd7+ Kxd7 15.Qxd4
  - FEN: `r6r/pp1kbppp/4p3/3pP3/1P1Q4/P7/5PPP/RN2K2R b KQ - 0 15`
- `adv-6a3-bd7` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.a3 Bd7 7.b4 cxd4 8.cxd4 Rc8 9.Bb2 Na5 10.Nbd2 Nc4
  - FEN: `2r1kbnr/pp1b1ppp/1q2p3/3pP3/1PnP4/P4N2/1B1N1PPP/R2QKB1R w KQk - 5 11`

- **6...Nh6** heads for f5 to hit d4 a fourth time. After 7.b4 cxd4 8.cxd4 Nf5 9.Bb2 Be7 the engine calls it about level. Named after Smbat Lputian (lichess).
- **10.Bd3: develop first.** After 10.Bd3 the queen's defense of d4 is blocked again, but 10...Nfxd4? is a mistake: 11.Nxd4 and Black's best is 11...Nxe5, two pawns for a piece (engine: White is clearly better). If 11...Nxd4 12.Bxd4 Qxd4??, 13.Bb5+ uncovers the queen and wins Black's queen, the same trick as §5.6. The engine's move is 10...Bd7, and only then ...Nfxd4 (11.Nbd2 Nfxd4 12.Nxd4 Nxd4 is fine for Black because b5 is covered).
- **6...Bd7 7.b4 cxd4 8.cxd4 Rc8 9.Bb2 Na5 10.Nbd2 Nc4:** Black uses the c-file and the c4-square; engine: White slightly better.

### 5.4 6.Be2 and the ...Nh6–f5 maneuver

- `adv-6be2` (C02, popular): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Be2 cxd4 7.cxd4 Nh6 8.Nc3 Nf5 9.Na4 Qa5+ 10.Bd2 Bb4 11.Bc3 b5
  - FEN: `r1b1k2r/p4ppp/2n1p3/qp1pPn2/Nb1P4/2B2N2/PP2BPPP/R2QK2R w KQkq - 0 12`
- `adv-6be2-bxh6` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Be2 cxd4 7.cxd4 Nh6 8.Bxh6 gxh6 9.Qd2 Bg7 10.Nc3 O-O 11.Bb5 f6
  - FEN: `r1b2rk1/pp4bp/1qn1pp1p/1B1pP3/3P4/2N2N2/PP1Q1PPP/R3K2R w KQ - 0 12`

- **6.Be2 cxd4 7.cxd4 Nh6 8.Nc3 Nf5 9.Na4 Qa5+ 10.Bd2 Bb4 11.Bc3 b5.** Black piles up on d4 and White hits the queen with Na4; the engine calls the end position level. Rechecked during course writing: after 7...Nh6 the engine's top reply is 8.Bxh6 (a small White edge), while 8.Nc3 is level.
- **8.Bxh6 gxh6.** White trades bishop for knight, giving Black doubled h-pawns but the bishop pair and the open g-file; after 9.Qd2 Bg7 10.Nc3 O-O 11.Bb5 f6 Black hits e5 (the engine prefers White). Rechecked during course writing: the engine's best reply to 8.Bxh6 is 8...Qxb2! (b2 has lost its guard), then ...gxh6, which is roughly level; 8...gxh6 is clearly second.

### 5.5 The Milner-Barry Gambit: 6.Bd3

- `adv-6bd3` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3
  - FEN: `r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R b KQkq - 4 6`
- `adv-mb-main` (C02, dubious): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Bd7 8.O-O Nxd4 9.Nxd4 Qxd4 10.Nc3 a6 11.Qe2 Ne7 12.Kh1
  - FEN: `r3kb1r/1p1bnppp/p3p3/3pP3/3q4/2NB4/PP2QPPP/R1B2R1K b kq - 3 12`
- `adv-mb-qxe5` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Bd7 8.O-O Nxd4 9.Nxd4 Qxd4 10.Nc3 Qxe5 11.Re1 Qb8 12.Nxd5 Bd6
  - FEN: `rq2k1nr/pp1b1ppp/3bp3/3N4/8/3B4/PP3PPP/R1BQR1K1 w kq - 1 13`

- **The gambit.** With the bishop on d3 the queen no longer defends d4. After 6...cxd4 7.cxd4 Bd7! (preparing to take d4 safely, because the bishop now covers b5) 8.O-O Nxd4 9.Nxd4 Qxd4 10.Nc3, White has given a pawn for quick development, the e5-pawn's space and chances against Black's king (Nb5, Qe2, Kh1 and f4, or Re1). Named after Stuart Milner-Barry (Wikipedia).
- **Engine verdict.** At depth 20 the engine prefers Black after 10...a6 11.Qe2 Ne7 12.Kh1 (about three quarters of a pawn), so the gambit is objectively dubious, though dangerous over the board. Status: dubious. Teach the ideas, not long theory.
- **10...Qxe5.** Grabbing a second pawn is not a blunder: after 11.Re1 Qb8 12.Nxd5 Bd6 the engine calls it level, because White's rook and knight become very active on the open e-file. The safer 10...a6 keeps Black's edge.
- **Declining:** 6...Bd7 7.dxc5 Bxc5 8.O-O is also possible (§4.4).

### 5.6 The Bb5+ queen trap

- `adv-mb-trap` (C02, trap): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 cxd4 7.cxd4 Nxd4 8.Nxd4 Qxd4 9.Bb5+ Bd7 10.Bxd7+ Kxd7 11.Qxd4
  - FEN: `r4bnr/pp1k1ppp/4p3/3pP3/3Q4/8/PP3PPP/RNB1K2R b KQ - 0 11`

- **The trap.** 6.Bd3 cxd4 7.cxd4 Nxd4? 8.Nxd4 Qxd4?? 9.Bb5+! The bishop leaves d3 with check and uncovers the queen's attack on d4. After 9...Bd7 10.Bxd7+ Kxd7 11.Qxd4 White has won the queen for a pawn (engine: White is winning; 9...Kd8 or 9...Ke7 10.Qxd4 is no better).
- **What really happens.** Black's first mistake is 7...Nxd4?, which already loses a piece for a pawn (`adv-mb-nxd4-piece`, §4.3). 8...Qxd4?? makes it a queen. Wikipedia gives the trap as "7...Nxd4?? 8.Nxd4 Qxd4 9.Bb5+, winning Black's queen".
- **The rule.** In the Advance, Black takes on d4 with a piece only after ...Bd7 has covered b5. The same trick appears in the Lputian with 10.Bd3 (§5.3).

### 5.7 Trading the problem bishop: 5...Bd7, the Wade, 3...b6

- `adv-5bd7` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Bd7 6.Be2 Nge7 7.Na3 cxd4 8.cxd4 Nf5 9.Nc2 Qb6 10.O-O
  - FEN: `r3kb1r/pp1b1ppp/1qn1p3/3pPn2/3P4/5N2/PPN1BPPP/R1BQ1RK1 b kq - 4 10`
- `adv-5bd7-a3-f6` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Bd7 6.a3 f6 7.Bd3 Qc7 8.O-O O-O-O
  - FEN: `2kr1bnr/ppqb2pp/2n1pp2/2ppP3/3P4/P1PB1N2/1P3PPP/RNBQ1RK1 w - - 4 9`
- `adv-4qb6-wade` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Qb6 5.Nf3 Bd7 6.Be2 Bb5 7.c4 Bxc4 8.Bxc4 dxc4
  - FEN: `rn2kbnr/pp3ppp/1q2p3/2p1P3/2pP4/5N2/PP3PPP/RNBQK2R w KQkq - 0 9`
- `adv-4qb6-a3` (C02, respectable): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Qb6 5.Nf3 Bd7 6.a3 Bb5 7.b4 cxd4 8.Bxb5+ Qxb5 9.cxd4 Nd7 10.Nc3 Qc6
  - FEN: `r3kbnr/pp1n1ppp/2q1p3/3pP3/1P1P4/P1N2N2/5PPP/R1BQK2R w KQkq - 3 11`
- `adv-3b6` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 b6 4.c3 Qd7 5.Nf3 Ba6 6.Bxa6 Nxa6 7.O-O
  - FEN: `r3kbnr/p1pq1ppp/np2p3/3pP3/3P4/2P2N2/PP3PPP/RNBQ1RK1 b kq - 1 7`

- **5...Bd7 (Euwe Variation).** Black develops the bishop first and keeps options (...Qb6, ...Nge7–f5, ...Rc8). After 6.Be2 Nge7 7.Na3 cxd4 8.cxd4 Nf5 9.Nc2 Qb6 10.O-O the engine gives White a small edge. Wikipedia: "mentioned by Greco as early as 1620 ... popularised by Viktor Korchnoi in the 1970s". Against 6.a3 Wikipedia says "Black at least equalises after 6...f6!"; after 6...f6 7.Bd3 Qc7 8.O-O O-O-O the engine gives White a small edge, so "about level" is the fair summary.
- **4...Qb6 5.Nf3 Bd7 (Wade Variation) 6.Be2 Bb5.** Black offers to trade light-squared bishops; after 7.c4 Bxc4 8.Bxc4 dxc4 the engine calls it level, but 7.c4 (a pawn offer) is not among its top three choices: 7.Bxb5+ Qxb5 is White's best (rechecked during course writing). Against 6.a3 Bb5 7.b4 cxd4 8.Bxb5+ Qxb5 9.cxd4 the bishops come off anyway (engine: White slightly better).
- **3...b6** prepares ...Ba6: 4.c3 Qd7 5.Nf3 Ba6 6.Bxa6 Nxa6 7.O-O. Black has traded the bishop but is behind in development; the engine gives White a clear edge. Status: rare.

### 5.8 Nimzowitsch's ideas: 4.Nf3, 4.Qg4 and 4.dxc5

- `adv-4nf3` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 c5 4.Nf3 cxd4 5.Bd3 Nc6 6.O-O Nge7 7.Bf4 Ng6
  - FEN: `r1bqkb1r/pp3ppp/2n1p1n1/3pP3/3p1B2/3B1N2/PPP2PPP/RN1Q1RK1 w kq - 6 8`
- `adv-4qg4` (C02, dubious): 1.e4 e6 2.d4 d5 3.e5 c5 4.Qg4 cxd4 5.Nf3 Nc6 6.Bd3 h5 7.Qf4 f6
  - FEN: `r1bqkbnr/pp4p1/2n1pp2/3pP2p/3p1Q2/3B1N2/PPP2PPP/RNB1K2R w KQkq - 0 8`
- `adv-4dxc5` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 c5 4.dxc5 Nc6 5.Nf3 Bxc5 6.Bd3 f6 7.Qe2 fxe5 8.Nxe5 Nf6
  - FEN: `r1bqk2r/pp4pp/2n1pn2/2bpN3/8/3B4/PPP1QPPP/RNB1K2R w KQkq - 1 9`

- **4.Nf3 cxd4 5.Bd3.** White gives up d4 for quick development and keeps e5 (lichess names 5.Bd3 the "Ruisdonk Gambit"). After 5...Nc6 6.O-O Nge7 7.Bf4 Ng6 the engine slightly prefers Black. Status: rare.
- **4.Qg4?!** (Nimzowitsch Attack) attacks g7 before Black has developed. After 4...cxd4 5.Nf3 Nc6 6.Bd3 h5! 7.Qf4 f6 Black chases the queen and hits e5; the engine says Black is clearly better. Status: dubious.
- **4.dxc5** (Steinitz Variation) gives up the base of the chain; Black recaptures with ...Bxc5 and hits the head with ...f6 (§4.4). Status: rare.

---

## 6. The Exchange Variation: 3.exd5 exd5 (C01)

### 6.1 Symmetry and a free bishop

- `exch-3exd5` (C01, respectable): 1.e4 e6 2.d4 d5 3.exd5 exd5
  - FEN: `rnbqkbnr/ppp2ppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4`
- `exch-4bd3` (C01, respectable): 1.e4 e6 2.d4 d5 3.exd5 exd5 4.Bd3 Nc6 5.c3 Bd6 6.Nf3 Bg4 7.O-O Nge7 8.Re1 Qd7
  - FEN: `r3k2r/pppqnppp/2nb4/3p4/3P2b1/2PB1N2/PP3PPP/RNBQR1K1 w kq - 7 9`
- `exch-4nf3` (C01, respectable): 1.e4 e6 2.d4 d5 3.exd5 exd5 4.Nf3 Bd6 5.Bd3 Ne7 6.O-O O-O 7.Re1 Bf5 8.Bg5 Bxd3 9.Qxd3 c6
  - FEN: `rn1q1rk1/pp2nppp/2pb4/3p2B1/3P4/3Q1N2/PPP2PPP/RN2R1K1 w - - 0 10`

- **What changes.** Both sides have a pawn on d4/d5, the e-file is open, and Black's c8-bishop is free at once (the French's usual problem disappears). Both sides develop the same way: Bd3/...Bd6, Nf3/...Nf6 or ...Ne7, O-O, Re1/...Re8, and pins with Bg5/...Bg4.
- **4.Bd3 Nc6 5.c3 Bd6 6.Nf3 Bg4 7.O-O Nge7 8.Re1 Qd7.** Black develops with the pin ...Bg4; the engine gives White a small edge. **4.Nf3 Bd6 5.Bd3 Ne7 6.O-O O-O 7.Re1 Bf5 8.Bg5 Bxd3 9.Qxd3 c6** trades the light-squared bishops and is level.
- **Reputation.** Wikipedia: the Exchange "was recommended by Howard Staunton in the 19th century, but has been in decline ever since"; Kasparov "briefly experimented with it" in the early 1990s. It also says: "Despite the symmetrical pawn structure, White cannot force a draw", and cites Tatai–Korchnoi (Be'er Sheva 1978, 0–1) and Gurevich–Short (Manila 1990, "ground down by Short in 42 moves") as Black wins. Those games' moves were not checked; don't cite their moves.

### 6.2 Playing for a win from a symmetric position

- `exch-c5` (C01, respectable): 1.e4 e6 2.d4 d5 3.exd5 exd5 4.Nf3 Nf6 5.Bd3 c5 6.O-O c4 7.Re1+ Be7 8.Bf1 O-O
  - FEN: `rnbq1rk1/pp2bppp/5n2/3p4/2pP4/5N2/PPP2PPP/RNBQRBK1 w - - 4 9`
- `exch-4c4` (C01, rare): 1.e4 e6 2.d4 d5 3.exd5 exd5 4.c4 Nf6 5.Nc3 Bb4 6.Nf3 O-O 7.Bd3 dxc4 8.Bxc4 Nc6 9.O-O Bg4
  - FEN: `r2q1rk1/ppp2ppp/2n2n2/8/1bBP2b1/2N2N2/PP3PPP/R1BQ1RK1 w - - 3 10`
- `exch-ooo` (C01, dubious): 1.e4 e6 2.d4 d5 3.exd5 exd5 4.Bd3 Nc6 5.c3 Bd6 6.Nf3 Bg4 7.O-O Nge7 8.Re1 Qd7 9.Nbd2 O-O-O 10.b4 Ng6 11.b5 Na5
  - FEN: `2kr3r/pppq1ppp/3b2n1/nP1p4/3P2b1/2PB1N2/P2N1PPP/R1BQR1K1 w - - 1 12`
- `exch-qe2-check` (C01, rare): 1.e4 e6 2.d4 d5 3.exd5 exd5 4.Bd3 Bd6 5.Qe2+ Ne7 6.Nf3 Nc6 7.c3 O-O
  - FEN: `r1bq1rk1/ppp1nppp/2nb4/3p4/3P4/2PB1N2/PP2QPPP/RNB1K2R w KQ - 1 8`

- **Unbalance the pawns.** Black can play ...c5: 4.Nf3 Nf6 5.Bd3 c5 6.O-O c4 7.Re1+ Be7 8.Bf1 O-O gains queenside space, and the engine calls it level. White can play **4.c4** (Monte Carlo Variation): after 4...Nf6 5.Nc3 Bb4 6.Nf3 O-O 7.Bd3 dxc4 8.Bxc4 White has an isolated d-pawn with active pieces; level.
- **Opposite-side castling** makes the game sharp, but timing matters. In `exch-ooo` Black castles long (9...O-O-O?!) and White's queenside pawns arrive first: 10.b4 Ng6 11.b5 Na5 and the engine says White is (rechecked during course writing: better, rather than clearly) better. Castling short (9...O-O) or 9...Bf5 is level. The lesson: opposite-side castling is a race; count whose attack is faster before you commit.
- **The open e-file.** Rooks and queens use the e-file; a piece standing on e7 or e2 can be pinned, and checks on the e-file (Qe2+, ...Re8+, Re1+) can win time. 4.Bd3 Bd6 5.Qe2+ is harmless: 5...Ne7 (the knight is pinned for a moment, so the b8-knight develops with 6...Nc6, not "Nbc6") and the engine calls it level (`exch-qe2-check`).

### 6.3 The Bxh7+ trick in the Exchange

- `exch-greek` (C01, trap): 1.e4 e6 2.d4 d5 3.exd5 exd5 4.Nf3 Bd6 5.Bd3 Ne7 6.O-O O-O 7.Re1 Bg4 8.Bxh7+ Kxh7 9.Ng5+ Kg8 10.Qxg4
  - FEN: `rn1q1rk1/ppp1npp1/3b4/3p2N1/3P2Q1/8/PPP2PPP/RNB1R1K1 b - - 0 10`

- **The trap.** 4.Nf3 Bd6 5.Bd3 Ne7 6.O-O O-O 7.Re1 Bg4? 8.Bxh7+! Kxh7 9.Ng5+. The knight check uncovers the d1-queen's line to the bishop on g4: after 9...Kg8 10.Qxg4 White has won back the piece and is a clean pawn up (engine: White is clearly better). 9...Kg6?? or 9...Kh8?? loses much more (the engine finds a winning attack for White).
- **Why it works.** Three things: the bishop on d3 sees h7, the f3-knight can reach g5 with check, and the bishop on g4 is loose once the queen's diagonal opens. 7...Bf5 (trading bishops) or 7...Nbc6 is correct. With the bishop on f5, Bxh7 is impossible (f5 blocks the d3–h7 diagonal). But after 7...Bf5 8.Bg5, Black must act at once (for example 8...Bxd3): the e7-knight, the f5-bishop's only defender, is pinned, so a quiet move like 8...c6? loses a piece to 9.Bxf5 (checked during course writing). This is a Greek Gift (§12.1) that wins material by a discovered attack rather than by mate.

---

## 7. White's early alternatives

### 7.1 2.d3: the King's Indian Attack

- `side-2d3` (A08, rare): 1.e4 e6 2.d3 d5 3.Nd2 Nf6 4.Ngf3 c5 5.g3 Nc6 6.Bg2 Be7 7.O-O O-O 8.Re1 b5 9.e5 Nd7 10.Nf1 a5
  - FEN: `r1bq1rk1/3nbppp/2n1p3/ppppP3/8/3P1NP1/PPP2PBP/R1BQRNK1 w - - 0 11`
- `side-2d3-attack` (A08, rare): 1.e4 e6 2.d3 d5 3.Nd2 Nf6 4.Ngf3 c5 5.g3 Nc6 6.Bg2 Be7 7.O-O O-O 8.Re1 b5 9.e5 Nd7 10.Nf1 a5 11.h4 b4 12.Bf4 a4
  - FEN: `r1bq1rk1/3nbppp/2n1p3/2ppP3/pp3B1P/3P1NP1/PPP2PB1/R2QRNK1 w - - 0 13`

- **White's set-up.** d3, Nd2, Ngf3, g3, Bg2, O-O, Re1 and e4–e5, then Nf1, h4, Bf4 and N1h2–g4 against Black's king (a King's Indian Defense with colors reversed and an extra tempo). lichess classifies these positions as A08 (King's Indian Attack, Sicilian Variation) once ...c5 and g3 are played.
- **Black's set-up.** ...d5, ...Nf6, ...c5, ...Nc6, ...Be7, ...O-O and a fast queenside pawn storm ...b5–b4, ...a5–a4. Both sides race; the engine calls it level. Wikipedia names Benko, Fischer, Stein and Psakhis as users of 2.d3.

### 7.2 2.Qe2 and 2.Nf3

- `side-2qe2` (C00, rare): 1.e4 e6 2.Qe2 c5 3.Nf3 Nc6 4.g3 Nge7 5.Bg2 g6
  - FEN: `r1bqkb1r/pp1pnp1p/2n1p1p1/2p5/4P3/5NP1/PPPPQPBP/RNB1K2R w KQkq - 0 6`
- `side-2qe2-pin` (C00, rare): 1.e4 e6 2.Qe2 d5 3.exd5 Qxd5 4.Nc3 Qd8 5.Nf3 Nf6
  - FEN: `rnbqkb1r/ppp2ppp/4pn2/8/8/2N2N2/PPPPQPPP/R1B1KB1R w KQkq - 4 6`
- `side-2nf3` (C00, rare): 1.e4 e6 2.Nf3 d5 3.Nc3 Nf6 4.e5 Nfd7 5.d4 c5 6.dxc5 Nc6 7.Bf4 Bxc5 8.Bd3 f6
  - FEN: `r1bqk2r/pp1n2pp/2n1pp2/2bpP3/5B2/2NB1N2/PPP2PPP/R2QK2R w KQkq - 0 9`
- `side-2nf3-d4` (C00, rare): 1.e4 e6 2.Nf3 d5 3.Nc3 d4 4.Ne2 c5 5.c3 Nc6 6.cxd4 cxd4
  - FEN: `r1bqkbnr/pp3ppp/2n1p3/8/3pP3/5N2/PP1PNPPP/R1BQKB1R w KQkq - 0 7`

- **2.Qe2 (Chigorin Variation).** The queen discourages ...d5 for a tactical reason: after 2...d5 3.exd5, Black's e6-pawn is **pinned** to the king on e8 (e7 is empty), so 3...exd5 is illegal and only the queen can recapture (3...Nf6, leaving the pawn for now, is the engine's top move; rechecked during course writing). After 3...Qxd5, 4.Nc3 gains time on the queen (engine: White slightly better). 2...c5 3.Nf3 Nc6 4.g3 Nge7 5.Bg2 g6 is simplest (level).
- **2.Nf3 d5 3.Nc3 (Two Knights Variation).** 3...Nf6 4.e5 Nfd7 5.d4 c5 6.dxc5 Nc6 7.Bf4 Bxc5 8.Bd3 f6 is level. 3...d4 4.Ne2 c5 5.c3 Nc6 6.cxd4 cxd4 grabs space (engine: White slightly better).

### 7.3 2.c4, 2.f4, 2.b3 and 2.Nc3

- `side-2c4` (C00, rare): 1.e4 e6 2.c4 d5 3.exd5 exd5 4.cxd5 Nf6 5.Nc3 Nxd5 6.Nf3 Nc6
  - FEN: `r1bqkb1r/ppp2ppp/2n5/3n4/8/2N2N2/PP1P1PPP/R1BQKB1R w KQkq - 2 7`
- `side-2f4` (C00, rare): 1.e4 e6 2.f4 d5 3.e5 c5 4.Nf3 Nc6 5.c3 Nh6 6.d4 Qb6
  - FEN: `r1b1kb1r/pp3ppp/1qn1p2n/2ppP3/3P1P2/2P2N2/PP4PP/RNBQKB1R w KQkq - 1 7`
- `side-2b3` (C00, rare): 1.e4 e6 2.b3 d5 3.Bb2 dxe4 4.Nc3 Nf6 5.Qe2 Bb4
  - FEN: `rnbqk2r/ppp2ppp/4pn2/8/1b2p3/1PN5/PBPPQPPP/R3KBNR w KQkq - 4 6`
- `side-2nc3` (C10, rare): 1.e4 e6 2.Nc3 d5 3.d4
  - FEN: `rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3`

- **2.c4 (Steiner Variation).** 2...d5 3.exd5 exd5 4.cxd5 Nf6 5.Nc3 Nxd5 6.Nf3 Nc6: Black has quick development; level.
- **2.f4 (La Bourdonnais Variation).** 2...d5 3.e5 c5 4.Nf3 Nc6 5.c3 Nh6 6.d4 Qb6: an Advance French where f4 has weakened White's dark squares; the engine slightly prefers Black.
- **2.b3 (Horwitz Attack).** 2...d5 3.Bb2 dxe4 4.Nc3 Nf6 5.Qe2 Bb4: Black takes the pawn and develops the bishop with tempo (there is no pin: White's d2-pawn stands between b4 and the king; and 3...Ne7 or 3...Nc6 are slightly better than 3...dxe4, rechecked during course writing); the engine gives White a little compensation and calls it about level (lichess names this pawn offer the "Papa-Ticulat Gambit").
- **2.Nc3** usually returns to the main lines after 2...d5 3.d4.

### 7.4 3.Bd3: the Schlechter

- `side-3bd3` (C00, rare): 1.e4 e6 2.d4 d5 3.Bd3 dxe4 4.Bxe4 Nf6 5.Bf3 c5 6.Ne2 Nc6
  - FEN: `r1bqkb1r/pp3ppp/2n1pn2/2p5/3P4/5B2/PPP1NPPP/RNBQK2R w KQkq - 2 7`
- `side-3bd3-c5` (C00, rare): 1.e4 e6 2.d4 d5 3.Bd3 c5 4.exd5 Qxd5 5.Nf3 cxd4 6.O-O Nc6
  - FEN: `r1b1kbnr/pp3ppp/2n1p3/3q4/3p4/3B1N2/PPP2PPP/RNBQ1RK1 w kq - 2 7`

- **3...dxe4 4.Bxe4 Nf6 5.Bf3 c5 6.Ne2 Nc6** gains time on the bishop; level. Named after Carl Schlechter (Wikipedia).
- **3...c5 4.exd5 Qxd5 5.Nf3 cxd4 6.O-O Nc6** grabs a pawn; White gets quick development for it (engine: about level, White has enough compensation).

### 7.5 Early gambits: 3.Be3 and 3.c4

- `side-3be3` (C00, dubious): 1.e4 e6 2.d4 d5 3.Be3 dxe4 4.Nd2 Nf6 5.f3 exf3 6.Ngxf3 Be7 7.Bd3 O-O
  - FEN: `rnbq1rk1/ppp1bppp/4pn2/8/3P4/3BBN2/PPPN2PP/R2QK2R w KQ - 3 8`
- `side-3c4` (C00, dubious): 1.e4 e6 2.d4 d5 3.c4 dxe4 4.Nc3 Nf6 5.f3 exf3 6.Nxf3 Be7 7.Bd3 c5
  - FEN: `rnbqk2r/pp2bppp/4pn2/2p5/2PP4/2NB1N2/PP4PP/R1BQK2R w KQkq - 0 8`

- **3.Be3 (Alapin Gambit)** dxe4 4.Nd2 Nf6 5.f3 exf3 6.Ngxf3 Be7 7.Bd3 O-O and **3.c4 (Diemer–Duhm Gambit)** dxe4 4.Nc3 Nf6 5.f3 exf3 6.Nxf3 Be7 7.Bd3 c5. In both, White gives a pawn for open lines; the engine says Black is better by about half a pawn or more, and the simple recipe is: take the pawn, develop (...Nf6, ...Be7, ...O-O) and strike with ...c5. Status: dubious for White.

---

## 8. The Tarrasch Variation: 3.Nd2 (C03–C09)

### 8.1 Why 3.Nd2?

- `tar-3nd2` (C03, popular): 1.e4 e6 2.d4 d5 3.Nd2
  - FEN: `rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3`
- `tar-3c5` (C07, popular): 1.e4 e6 2.d4 d5 3.Nd2 c5
  - FEN: `rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 0 4`

- **Pros.** The knight defends e4, and a pin with 3...Bb4 doesn't last: 4.c3 kicks the bishop and White is better, and the c-pawn stays free to go to c3 and support d4. Named after Siegbert Tarrasch; Wikipedia says Karpov "used it to great effect".
- **Cons.** The knight on d2 blocks the c1-bishop and the queen's view of d4, and it puts less pressure on d5 than a knight on c3. That is why Black can strike at once with 3...c5.

### 8.2 3...c5 4.exd5 Qxd5: the queen recapture

- `tar-qxd5` (C07, popular): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4 Qd6 7.O-O Nf6 8.Nb3 Nc6 9.Nbxd4 Nxd4 10.Nxd4 a6
  - FEN: `r1b1kb1r/1p3ppp/p2qpn2/8/2BN4/8/PPP2PPP/R1BQ1RK1 w kq - 0 11`
- `tar-qxd5-plan` (C07, popular): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4 Qd6 7.O-O Nf6 8.Nb3 Nc6 9.Nbxd4 Nxd4 10.Nxd4 a6 11.Re1 Qc7 12.Bb3 Bd6 13.Nf3 O-O
  - FEN: `r1b2rk1/1pq2ppp/p2bpn2/8/8/1B3N2/PPP2PPP/R1BQR1K1 w - - 6 14`

- **The idea.** Black recaptures with the queen to avoid an isolated pawn. White gains time on the queen (6.Bc4) and develops quickly; after 9.Nbxd4 Nxd4 10.Nxd4 a6 Black has a healthy pawn structure and an extra central pawn (e6, against no White pawn on the d- or e-file), and White has a lead in development. 11.Re1 Qc7 12.Bb3 Bd6 13.Nf3 O-O: level. lichess names 4...Qxd5 the Chistyakov Defense.

### 8.3 3...c5 4.exd5 exd5: the isolated d-pawn

- `tar-exd5` (C09, popular): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 exd5 5.Ngf3 Nc6 6.Bb5 Bd6 7.dxc5 Bxc5 8.O-O Ne7 9.Nb3 Bd6
  - FEN: `r1bqk2r/pp2nppp/2nb4/1B1p4/8/1N3N2/PPP2PPP/R1BQ1RK1 w kq - 4 10`
- `tar-iqp-blockade` (C09, popular): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 exd5 5.Ngf3 Nc6 6.Bb5 Bd6 7.dxc5 Bxc5 8.O-O Ne7 9.Nb3 Bd6 10.Nbd4 O-O 11.c3 Bg4 12.Qa4 Qc7
  - FEN: `r4rk1/ppq1nppp/2nb4/1B1p4/Q2N2b1/2P2N2/PP3PPP/R1B2RK1 w - - 3 13`

- **The structure.** After dxc5 (or ...cxd4) Black's d5-pawn has no pawn neighbors on the c- and e-files: an **isolated queen's pawn** (IQP). Pros for Black: open lines for the pieces, the e4- and c4-squares, the open e-file and the half-open c-file (the d-file is half-open for White). Cons: the pawn can be attacked and needs protection, and the square in front of it (d4) is a perfect outpost for a White knight.
- **White's plan.** Blockade d4 with a knight (Nb3–d4), trade pieces (each trade makes the pawn weaker), and attack d5. **Black's plan:** active pieces (...Bg4, ...Qc7, ...Rfe8), kingside chances, and ...d4 if it can be pushed safely.
- **6.Bb5 Bd6 7.dxc5 Bxc5 8.O-O Ne7 9.Nb3 Bd6 10.Nbd4 O-O 11.c3 Bg4 12.Qa4 Qc7:** a small edge for White (engine). Wikipedia gives the similar order 7.O-O Nge7 8.dxc5 Bxc5 9.Nb3 Bb6.

### 8.4 Trading queens with 5.Bb5+

- `tar-exd5-bb5` (C08, respectable): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 exd5 5.Bb5+ Bd7 6.Qe2+ Qe7 7.Bxd7+ Nxd7 8.dxc5 Nxc5 9.Nb3 Qxe2+ 10.Nxe2 Nxb3 11.axb3
  - FEN: `r3kbnr/pp3ppp/8/3p4/8/1P6/1PP1NPPP/R1B1K2R b KQkq - 0 11`

- **5.Bb5+ Bd7 6.Qe2+ Qe7 7.Bxd7+ Nxd7 8.dxc5 Nxc5 9.Nb3 Qxe2+ 10.Nxe2 Nxb3 11.axb3:** queens and light-squared bishops are off, and the isolated d5-pawn is a long-term target in the endgame. The engine gives White a small edge. Karpov chose this against Korchnoi in 1978 (§14). Rechecked during course writing: 6...Be7, keeping the queens on, is slightly better for Black than 6...Qe7 (level instead of a small White edge).

### 8.5 4.Ngf3

- `tar-4ngf3` (C07, respectable): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.Ngf3 cxd4 5.Nxd4 Nf6 6.exd5 Nxd5 7.N2f3 Be7 8.Bc4 Nc6
  - FEN: `r1bqk2r/pp2bppp/2n1p3/3n4/2BN4/5N2/PPP2PPP/R1BQK2R w KQkq - 4 9`

- **4.Ngf3 cxd4 5.Nxd4 Nf6 6.exd5 Nxd5 7.N2f3 Be7 8.Bc4 Nc6:** open lines and quick development; level (engine). Wikipedia: played by Keres and Euwe. Nepomniachtchi–Ding, World Championship 2023, game 7 followed this line (§14).

### 8.6 The closed Tarrasch: 3...Nf6 4.e5

- `tar-3nf6` (C05, popular): 1.e4 e6 2.d4 d5 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2
  - FEN: `r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2PB4/PP1NNPPP/R1BQK2R b KQkq - 2 7`
- `tar-closed-f6` (C06, popular): 1.e4 e6 2.d4 d5 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4 f6 9.exf6 Nxf6 10.Nf3 Bd6 11.O-O Qc7 12.Nc3 a6
  - FEN: `r1b1k2r/1pq3pp/p1nbpn2/3p4/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w kq - 0 13`
- `tar-closed-qb6` (C06, popular): 1.e4 e6 2.d4 d5 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4 Qb6 9.Nf3 f6 10.exf6 Nxf6 11.O-O Bd6 12.Nc3 O-O
  - FEN: `r1b2rk1/pp4pp/1qnbpn2/3p4/3P4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 4 13`
- `tar-closed-nb6` (C06, dubious): 1.e4 e6 2.d4 d5 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4 Nb6 9.Nf3 Bd7 10.O-O a5
  - FEN: `r2qkb1r/1p1b1ppp/1nn1p3/p2pP3/3P4/3B1N2/PP2NPPP/R1BQ1RK1 w kq - 0 11`

- **The structure.** 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2: the chain again; the knight goes to e2 (not f3) so that the f-pawn stays free and, after cxd4, the e2-knight helps guard d4. White's g1-knight goes to e2 and the d2-knight later goes to f3.
- **Black's breaks.** 7...cxd4 8.cxd4 f6! 9.exf6 Nxf6 10.Nf3 Bd6 11.O-O Qc7 12.Nc3 a6: Black's pieces become active and e6 is the weakness (engine: White slightly better). 8...Qb6 9.Nf3 f6 10.exf6 Nxf6 11.O-O Bd6 12.Nc3 O-O is the other main way (engine: White slightly better).
- **8...Nb6?! (Leningrad Variation)** takes the knight away from the kingside and from the ...f6 break; the engine gives White a clear advantage. Status: dubious.
- **A Greek Gift that fails** in this structure (with 7.Ngf3 instead of 7.Ne2 and Black's bishop on e7) is in §12.1 (`tar-greek-fail`).

### 8.7 Morozevich's 3...Be7

- `tar-3be7` (C03, respectable): 1.e4 e6 2.d4 d5 3.Nd2 Be7 4.Ngf3 Nf6 5.e5 Nfd7 6.Bd3 c5 7.c3 b6 8.O-O Ba6
  - FEN: `rn1qk2r/p2nbppp/bp2p3/2ppP3/3P4/2PB1N2/PP1N1PPP/R1BQ1RK1 w kq - 2 9`
- `tar-3be7-bd3` (C03, respectable): 1.e4 e6 2.d4 d5 3.Nd2 Be7 4.Bd3 c5 5.dxc5 Nf6 6.Qe2 O-O 7.Ngf3 a5
  - FEN: `rnbq1rk1/1p2bppp/4pn2/p1Pp4/4P3/3B1N2/PPPNQPPP/R1B1K2R w KQ - 0 8`

- **The idea.** A useful waiting move: Black keeps ...c5, ...Nf6 and ...dxe4 in reserve and sees what White does first. After 4.Ngf3 Nf6 5.e5 Nfd7 6.Bd3 c5 7.c3 b6 8.O-O Ba6 Black trades the problem bishop; the engine gives White a small but clear edge. Wikipedia: "A fashionable line among top grandmasters in recent years."
- **4.Bd3 c5 5.dxc5 Nf6 6.Qe2 O-O 7.Ngf3 a5:** White tries to show that ...Be7 was premature; level.

### 8.8 Guimard 3...Nc6, 3...a6, 3...dxe4

- `tar-3nc6` (C04, rare): 1.e4 e6 2.d4 d5 3.Nd2 Nc6 4.Ngf3 Nf6 5.e5 Nd7 6.Nb3 Be7 7.Bb5 a6
  - FEN: `r1bqk2r/1ppnbppp/p1n1p3/1B1pP3/3P4/1N3N2/PPP2PPP/R1BQK2R w KQkq - 0 8`
- `tar-3a6` (C03, rare): 1.e4 e6 2.d4 d5 3.Nd2 a6 4.Ngf3 c5 5.exd5 exd5
  - FEN: `rnbqkbnr/1p3ppp/p7/2pp4/3P4/5N2/PPPN1PPP/R1BQKB1R w KQkq - 0 6`
- `tar-3dxe4` (C10, popular): 1.e4 e6 2.d4 d5 3.Nd2 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6
  - FEN: `r1bqkb1r/pppn1ppp/4pn2/8/3PN3/5N2/PPP2PPP/R1BQKB1R w KQkq - 3 6`

- **3...Nc6 (Guimard Defense)** blocks the c-pawn, so the ...c5 break is gone for now; after 4.Ngf3 Nf6 5.e5 Nd7 6.Nb3 Be7 7.Bb5 a6?! 8.Bxc6 bxc6 9.Na5 White is clearly better; 7...a5 (planning ...Na7 and ...c5) is the engine's choice (rechecked during course writing). Status: rare.
- **3...a6** takes b5 from White's pieces and waits; level.
- **3...dxe4 4.Nxe4** is a Rubinstein (§9).

---

## 9. The Rubinstein and Fort Knox (C10)

### 9.1 3...dxe4: giving up the center

- `rub-3dxe4` (C10, popular): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4
  - FEN: `rnbqkbnr/ppp2ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4`
- `rub-4nf6-gxf6` (C10, rare): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nf6 5.Nxf6+ gxf6 6.Nf3 b6 7.g3 Bb7 8.Bg2
  - FEN: `rn1qkb1r/pbp2p1p/1p2pp2/8/3P4/5NP1/PPP2PBP/R1BQK2R b KQkq - 2 8`

- **The trade-off.** Black gives up the d5-pawn's central post. In return Black gets a compact, solid position with no weaknesses and easy development; White gets more space and freer pieces. Wikipedia: "This solid line has undergone a modest revival, featuring in many grandmaster games as a drawing weapon but theory still gives White a slight edge." Named after Akiba Rubinstein. It can be reached after 3.Nc3 or 3.Nd2.
- **4...Nf6 5.Nxf6+ gxf6** gives Black a Burn-like structure (§10.6) with the half-open g-file; White is a little better (engine). Status: rare.

### 9.2 4...Nd7 and 5...Ngf6

- `rub-4nd7` (C10, popular): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6
  - FEN: `r1bqkb1r/ppp2ppp/4pn2/8/3P4/5N2/PPP2PPP/R1BQKB1R w KQkq - 0 7`
- `rub-6gxf6` (C10, dubious): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Nxf6+ gxf6 7.Bd3 c5 8.d5
  - FEN: `r1bqkb1r/pp1n1p1p/4pp2/2pP4/8/3B1N2/PPP2PPP/R1BQK2R b KQkq - 0 8`

- **Why ...Nd7 first.** Black wants to put a knight on f6 to challenge the e4-knight. If White trades (6.Nxf6+), Black recaptures with the other knight (6...Nxf6), keeping a healthy pawn structure. 6...gxf6?! is a mistake (§4.6).

### 9.3 The ...c5 break

- `rub-7bd3` (C10, popular): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 7.Bd3 c5 8.dxc5 Bxc5 9.Qe2 O-O 10.Bg5 h6 11.Bh4 Qa5+ 12.c3 Nd5
  - FEN: `r1b2rk1/pp3pp1/4p2p/q1bn4/7B/2PB1N2/PP2QPPP/R3K2R w KQ - 1 13`
- `rub-6bd3` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Bd3 Nxe4 7.Bxe4 Nf6 8.Bd3 c5 9.dxc5 Bxc5
  - FEN: `r1bqk2r/pp3ppp/4pn2/2b5/8/3B1N2/PPP2PPP/R1BQK2R w KQkq - 0 10`

- **7.Bd3 c5 8.dxc5 Bxc5 9.Qe2 O-O 10.Bg5 h6 11.Bh4 Qa5+ 12.c3 Nd5:** Black frees the game with ...c5 and the position is level. White's plans are Qe2, Bg5 and long castling with a kingside attack; Black's are ...b6 and ...Bb7 (the long diagonal) and piece activity.
- **6.Bd3 Nxe4 7.Bxe4 Nf6 8.Bd3 c5 9.dxc5 Bxc5:** level.

### 9.4 7.c3, 7.Ne5 and 6.Bg5

- `rub-7c3` (C10, popular): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 7.c3 c5 8.Ne5 a6 9.Be3 Qc7
  - FEN: `r1b1kb1r/1pq2ppp/p3pn2/2p1N3/3P4/2P1B3/PP3PPP/R2QKB1R w KQkq - 2 10`
- `rub-7ne5` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Nxf6+ Nxf6 7.Ne5 Bd6 8.Bg5 h6 9.Bh4 O-O 10.Bd3 c5
  - FEN: `r1bq1rk1/pp3pp1/3bpn1p/2p1N3/3P3B/3B4/PPP2PPP/R2QK2R w KQ - 0 11`
- `rub-6bg5` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Nf3 Ngf6 6.Bg5 h6 7.Nxf6+ Nxf6 8.Bh4 c5 9.Bb5+ Bd7 10.Bxd7+ Qxd7
  - FEN: `r3kb1r/pp1q1pp1/4pn1p/2p5/3P3B/5N2/PPP2PPP/R2QK2R w KQkq - 0 11`

- **7.c3 c5 8.Ne5 a6 9.Be3 Qc7** (lichess names 7.c3 the "Kasparov Attack" in its 3.Nd2 move order): White plays for Ne5 and queenside expansion; small edge for White.
- **7.Ne5 (Capablanca Line) Bd6 8.Bg5 h6 9.Bh4 O-O 10.Bd3 c5:** White keeps a small edge (rechecked at depth 20–24 during course writing: about the same as 7.Bd3, not a clear edge). The beginner-friendly answer for Black is to keep developing and break with ...c5.
- **6.Bg5 h6 7.Nxf6+ Nxf6 8.Bh4 c5 9.Bb5+ Bd7 10.Bxd7+ Qxd7:** level.

### 9.5 Fort Knox: 4...Bd7 and 5...Bc6

- `fk-4bd7` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bd7 5.Nf3 Bc6
  - FEN: `rn1qkbnr/ppp2ppp/2b1p3/8/3PN3/5N2/PPP2PPP/R1BQKB1R w KQkq - 3 6`
- `fk-main` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bd7 5.Nf3 Bc6 6.Bd3 Nd7 7.O-O Ngf6 8.Ng3 Be7 9.Re1 O-O
  - FEN: `r2q1rk1/pppnbppp/2b1pn2/8/3P4/3B1NN1/PPP2PPP/R1BQR1K1 w - - 11 10`
- `fk-bxf3` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bd7 5.Nf3 Bc6 6.Bd3 Nd7 7.O-O Ngf6 8.Ng3 Bxf3 9.Qxf3 c6 10.c3 Be7
  - FEN: `r2qk2r/pp1nbppp/2p1pn2/8/3P4/2PB1QN1/PP3PPP/R1B2RK1 w kq - 1 11`

- **The idea.** Black solves the bishop problem at once: the bishop goes to c6 on the long diagonal and is often traded for a knight (...Bxe4 or ...Bxf3), after which ...c6 and ...Nd7–f6 make a very solid "fortress" (the name refers to Fort Knox, the US gold depository). Wikipedia: "often played by Alexander Rustemov".
- **6.Bd3 Nd7 7.O-O Ngf6 8.Ng3 Be7 9.Re1 O-O:** solid, White slightly better. **8...Bxf3 9.Qxf3 c6 10.c3 Be7:** Black gives up the bishop pair for a rock-solid position; White slightly better. The engine rates 5...Bc6 itself as giving White a clear but not large edge.

### 9.6 Fort Knox danger: Neg5 and Nxe6

- `fk-neg5-h6` (C10, dubious): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bd7 5.Nf3 Bc6 6.Bd3 Nd7 7.O-O Ngf6 8.Neg5 h6 9.Nxe6 fxe6 10.Bg6+ Ke7
  - FEN: `r2q1b1r/pppnk1p1/2b1pnBp/8/3P4/5N2/PPP2PPP/R1BQ1RK1 w - - 2 11`
- `fk-neg5-be7` (C10, dubious): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bd7 5.Nf3 Bc6 6.Bd3 Nd7 7.O-O Ngf6 8.Neg5 Be7 9.Nxf7 Kxf7 10.Ng5+ Kg8 11.Nxe6 Qc8
  - FEN: `r1q3kr/pppnb1pp/2b1Nn2/8/3P4/3B4/PPP2PPP/R1BQ1RK1 w - - 1 12`
- `fk-neg5-bd6` (C10, respectable): 1.e4 e6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bd7 5.Nf3 Bc6 6.Bd3 Nd7 7.O-O Ngf6 8.Neg5 Bd6 9.Qe2 h6 10.Ne4 Bxe4 11.Bxe4 Nxe4 12.Qxe4 c6
  - FEN: `r2qk2r/pp1n1pp1/2pbp2p/8/3PQ3/5N2/PPP2PPP/R1B2RK1 w kq - 0 13`

- **8.Neg5 h6? 9.Nxe6!** fxe6 10.Bg6+ Ke7: White has given a knight for a pawn, but Black's king is stuck in the middle and the engine says White is much better (no forced win). Why it works: after ...h6 only the f7-pawn still guards g6; 9.Nxe6! fxe6 pulls that pawn away, so 10.Bg6+ comes with check down the open g6–e8 diagonal. Status: dubious.
- **Fort Knox reminder:** after 8.Ng3 Bxf3 9.Qxf3 (`fk-bxf3`), Black must play 9...c6 at once; 9...Be7? drops the b7-pawn to 10.Qxb7 (checked during course writing).
- **8.Neg5 Bd6! 9.Qe2 h6 10.Ne4 Bxe4 11.Bxe4 Nxe4 12.Qxe4 c6:** develop first, then ...h6 is safe; level. 8...Be7? is also bad: 9.Nxf7! Kxf7 10.Ng5+ Kg8 11.Nxe6 Qc8 with a strong attack (`fk-neg5-be7`; engine: White is clearly better). Status: dubious.

---

## 10. The Classical Variation: 3.Nc3 Nf6 (C11–C14)

### 10.1 3...Nf6 and the Steinitz 4.e5

- `cla-3nf6` (C11, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6
  - FEN: `rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4`
- `cla-4e5` (C11, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7
  - FEN: `rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5`
- `cla-steinitz` (C11, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3
  - FEN: `r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R b KQkq - 3 7`

- **3...Nf6** develops and attacks e4 again. White can push (4.e5, the Steinitz Variation, named after Wilhelm Steinitz), pin (4.Bg5) or trade (4.exd5).
- **4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3.** f4 supports e5 so that ...f6 is less effective; White often castles long and attacks on the kingside, sometimes with f4–f5 (§12.4). Black attacks d4 (...c5, ...Nc6, ...Qb6, ...cxd4 and ...Bc5) and expands on the queenside. Wikipedia: 4.e5 "is now comparably popular to 4.Bg5".

### 10.2 Steinitz main lines

- `cla-steinitz-bc5` (C11, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3 cxd4 8.Nxd4 Bc5 9.Qd2 O-O 10.O-O-O a6 11.h4 Nxd4 12.Bxd4 b5
  - FEN: `r1bq1rk1/3n1ppp/p3p3/1pbpP3/3B1P1P/2N5/PPPQ2P1/2KR1B1R w - - 0 13`
- `cla-steinitz-a6` (C11, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3 a6 8.Qd2 b5 9.dxc5 Bxc5 10.Bxc5 Nxc5 11.Qf2 Qb6
  - FEN: `r1b1k2r/5ppp/pqn1p3/1pnpP3/5P2/2N2N2/PPP2QPP/R3KB1R w KQkq - 2 12`
- `cla-steinitz-qxb2` (C11, rare): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3 cxd4 8.Nxd4 Qb6 9.Qd2 Qxb2 10.Rb1 Qa3 11.Bb5
  - FEN: `r1b1kb1r/pp1n1ppp/2n1p3/1B1pP3/3N1P2/q1N1B3/P1PQ2PP/1R2K2R b Kkq - 3 11`
- `cla-5nce2` (C11, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.Nce2 c5 6.c3 Nc6 7.f4 Qb6 8.Nf3 f6 9.a3
  - FEN: `r1b1kb1r/pp1n2pp/1qn1pp2/2ppP3/3P1P2/P1P2N2/1P2N1PP/R1BQKB1R b KQkq - 0 9`

- **7...cxd4 8.Nxd4 Bc5 9.Qd2 O-O 10.O-O-O a6 11.h4 Nxd4 12.Bxd4 b5:** opposite-side castling and a race (engine: White slightly better).
- **7...a6 8.Qd2 b5** expands first; level.
- **8...Qb6 9.Qd2 Qxb2 10.Rb1 Qa3 11.Bb5:** Black grabs a pawn and White gets a big lead in development; the engine calls it only slightly better for White at the end of the line, so it is risky, not losing. Status: rare.
- **9.Qd2 Bxd4 10.Bxd4 Nxd4 11.Qxd4 Qb6 12.Qxb6 Nxb6** is the "Vacuum Cleaner Variation" (Wikipedia): Black trades into an ending; see §12.5.
- **5.Nce2 (Shirov–Anand Variation)** c5 6.c3 Nc6 7.f4 Qb6 8.Nf3 f6 9.a3: the knight steps aside so c3 can support d4; level. Gukesh–Ding 2024 (§14) reached a similar set-up via 5.f4 c5 6.Nce2.

### 10.3 4.Bg5 Be7 and the main line 6.Bxe7 Qxe7 7.f4

- `cla-4bg5` (C12, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5
  - FEN: `rnbqkb1r/ppp2ppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq - 3 4`
- `cla-4bg5-be7` (C13, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7
  - FEN: `rnbqk2r/pppnbppp/4p3/3pP1B1/3P4/2N5/PPP2PPP/R2QKBNR w KQkq - 1 6`
- `cla-main` (C14, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 O-O 8.Nf3 c5 9.Qd2 Nc6 10.O-O-O c4
  - FEN: `r1b2rk1/pp1nqppp/2n1p3/3pP3/2pP1P2/2N2N2/PPPQ2PP/2KR1B1R w - - 0 11`
- `cla-main-a6` (C14, popular): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 a6 8.Nf3 c5 9.Qd2 Nc6 10.dxc5 Qxc5 11.O-O-O b5 12.Kb1 b4 13.Na4 Qa5
  - FEN: `r1b1k2r/3n1ppp/p1n1p3/q2pP3/Np3P2/5N2/PPPQ2PP/1K1R1B1R w kq - 2 14`
- `cla-7nb5` (C14, rare): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.Nb5 Nb6 8.c3 a6 9.Na3 c5 10.Nc2 Nc6
  - FEN: `r1b1k2r/1p2qppp/pnn1p3/2ppP3/3P4/2P5/PPN2PPP/R2QKBNR w KQkq - 2 11`

- **4.Bg5** pins the knight; **4...Be7 5.e5 Nfd7** breaks the pin and returns to a chain structure. **6.Bxe7 Qxe7** trades Black's good dark-squared bishop, and **7.f4** supports e5.
- **7...O-O 8.Nf3 c5 9.Qd2 Nc6 10.O-O-O c4** (lichess: Stahlberg Variation): Black closes the queenside and attacks with ...b5–b4; White plays on the kingside. The engine gives White a small edge; 10...a6 is a little more accurate than 10...c4.
- **7...a6 8.Nf3 c5 9.Qd2 Nc6 10.dxc5 Qxc5 11.O-O-O b5 12.Kb1 b4 13.Na4 Qa5:** slightly better for White. (11.Qf2?!, offering the queen trade, is inaccurate here: 11...Qb4! and Black is better, engine at depth 14–18.)
- **7.Nb5 (Alapin Variation)** eyes c7 and d6; 7...Nb6 8.c3 a6 9.Na3 c5 is level. Wikipedia: it "was also played several times by Emanuel Lasker".

### 10.4 The Alekhine–Chatard Attack: 6.h4

- `cla-ac` (C13, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4
  - FEN: `rnbqk2r/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR b KQkq - 0 6`
- `cla-ac-accept` (C13, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4 Bxg5 7.hxg5 Qxg5 8.Nh3 Qe7 9.Nf4 Nc6 10.Qg4
  - FEN: `r1b1k2r/pppnqppp/2n1p3/3pP3/3P1NQ1/2N5/PPP2PP1/R3KB1R b KQkq - 5 10`
- `cla-ac-a6` (C13, dubious): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4 a6 7.Qg4 Bxg5 8.hxg5 c5 9.Nf3 cxd4 10.Nxd4 Nc6
  - FEN: `r1bqk2r/1p1n1ppp/p1n1p3/3pP1P1/3N2Q1/2N5/PPP2PP1/R3KB1R w KQkq - 1 11`
- `cla-ac-c5` (C13, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4 c5 7.Bxe7 Kxe7 8.f4 Qb6 9.Nf3 Nc6
  - FEN: `r1b4r/pp1nkppp/1qn1p3/2ppP3/3P1P1P/2N2N2/PPP3P1/R2QKB1R w KQ - 3 10`
- `cla-ac-c5-qxe7` (C13, dubious): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4 c5 7.Bxe7 Qxe7 8.Nb5 Kd8 9.c3
  - FEN: `rnbk3r/pp1nqppp/4p3/1NppP3/3P3P/2P5/PP3PP1/R2QKBNR b KQ - 0 9`
- `cla-ac-oo` (C13, dubious): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4 O-O 7.Bd3 c5 8.Qh5 g6 9.Qh6
  - FEN: `rnbq1rk1/pp1nbp1p/4p1pQ/2ppP1B1/3P3P/2NB4/PPP2PP1/R3K1NR b KQ - 1 9`

- **The idea.** Instead of trading on e7, White offers the g5-bishop: if Black takes it (6...Bxg5 7.hxg5 Qxg5), the h-file opens for White's rook and White gets a big lead in development. Wikipedia: "devised by Adolf Albin and played by Chatard, but not taken seriously until the game Alekhine–Fahrni, Mannheim 1914" (that game's moves were not checked).
- **Accepting:** 6...Bxg5 7.hxg5 Qxg5 8.Nh3 Qe7 9.Nf4 Nc6 10.Qg4: Black is a pawn up and the engine calls it roughly level (rechecked during course writing; 8...Qh4 is also good), but Black's king has no safe home. Wikipedia: "A wild game with unsafe kings is sure to ensue."
- **Declining:** 6...a6?! 7.Qg4! (threatening Bxe7 and Qxg7) Bxg5 8.hxg5 c5 gives White a clear edge (rechecked at depth 25 during course writing; 9.dxc5 is stronger than 9.Nf3). 6...c5 7.Bxe7 **Kxe7!** is the right recapture, but White still keeps a clear edge (depth 24); 6...c5 is clearly worse than 6...Bxg5. 7...Qxe7?! 8.Nb5! threatens both Nc7+ (forking king and rook) and Nd6+ (...Qxd6 exd6 would give up the queen for a knight), so Black has to play 8...Kd8 and White is clearly better. This matches Wikipedia's warning that "Black's natural French Defence move 6...c5 runs into 7.Bxe7".
- **6...O-O?!** castles into the attack: 7.Bd3 c5 8.Qh5! g6 9.Qh6 with h4–h5 coming (engine: White is clearly better after 6...O-O). The tempting 8.Bxh7+? is a mistake here (§12.1).
- **The engine's verdict on 6.h4:** about as good for White as 6.Bxe7; Black's safest replies are 6...Bxg5 and 6...h6.

### 10.5 The McCutcheon: 4.Bg5 Bb4

- `cla-mcc` (C12, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Bb4 5.e5 h6 6.Bd2 Bxc3 7.bxc3 Ne4 8.Qg4 g6
  - FEN: `rnbqk2r/ppp2p2/4p1pp/3pP3/3Pn1Q1/2P5/P1PB1PPP/R3KBNR w KQkq - 0 9`
- `cla-mcc-main` (C12, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Bb4 5.e5 h6 6.Bd2 Bxc3 7.bxc3 Ne4 8.Qg4 g6 9.Bd3 Nxd2 10.Kxd2 c5 11.Nf3 Nc6
  - FEN: `r1bqk2r/pp3p2/2n1p1pp/2ppP3/3P2Q1/2PB1N2/P1PK1PPP/R6R w kq - 2 12`
- `cla-mcc-exd5` (C12, rare): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Bb4 5.exd5 Qxd5 6.Bxf6 gxf6 7.Qd2 Qa5 8.Nge2 Nc6
  - FEN: `r1b1k2r/ppp2p1p/2n1pp2/q7/1b1P4/2N5/PPPQNPPP/R3KB1R w KQkq - 4 9`

- **The idea.** Black counter-pins the c3-knight. 5.e5 h6 6.Bd2 Bxc3 7.bxc3 Ne4 8.Qg4 g6 9.Bd3 Nxd2 10.Kxd2 c5 11.Nf3 Nc6: White's king stays in the middle (it is fairly safe there because the center is closed); White has kingside space, Black has a sound structure. White slightly better (engine).
- **5.exd5 Qxd5 6.Bxf6 gxf6 7.Qd2 Qa5 8.Nge2 Nc6:** slightly better for White.
- **Name.** Named after John Lindsay McCutcheon of Philadelphia (1857–1905), who used it "to defeat World Champion Steinitz in a simultaneous exhibition in Manhattan in 1885" (Wikipedia, which notes "'McCutcheon' is the correct spelling"; the course should not write "MacCutcheon"). Wikipedia: "It reached the height of its popularity from 1905 until 1925."

### 10.6 The Burn: 4.Bg5 dxe4

- `cla-burn` (C13, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 dxe4 5.Nxe4 Be7 6.Bxf6 Bxf6 7.Nf3 O-O 8.Qd2 Nd7 9.O-O-O b6
  - FEN: `r1bq1rk1/p1pn1ppp/1p2pb2/8/3PN3/5N2/PPPQ1PPP/2KR1B1R w - - 0 10`
- `cla-burn-gxf6` (C13, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 dxe4 5.Nxe4 Be7 6.Bxf6 gxf6 7.Nf3 f5 8.Nc3 c6 9.g3 b5
  - FEN: `rnbqk2r/p3bp1p/2p1p3/1p3p2/3P4/2N2NP1/PPP2P1P/R2QKB1R w KQkq - 0 10`

- **4...dxe4 5.Nxe4 Be7 6.Bxf6** and now **6...Bxf6 7.Nf3 O-O 8.Qd2 Nd7 9.O-O-O b6** (solid; ...b6 and ...Bb7 develop the c8-bishop; White slightly better) or **6...gxf6** (the Morozevich Line: 7.Nf3 f5 8.Nc3 c6 9.g3 b5; Black has the bishop pair and the half-open g-file but a looser structure. Rechecked at depth 20 during course writing: 6...gxf6 scores about the same as 6...Bxf6 (White slightly better); the clear White edge only comes after the line's last move 9...b5?!, because 10.Ne5! gains time against c6 and f7. 9...Nd7 is the engine's choice). Wikipedia: "The Burn Variation is the most common reply at the top level"; named after Amos Burn; Bareev is named as a regular, and Morozevich and Kaidanov as players of 6...gxf6.

### 10.7 4.exd5: the Delayed Exchange and the d5 pin

- `cla-4exd5` (C01, rare): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.exd5 exd5 5.Bg5 Be7 6.Bd3 Nc6 7.Nge2 O-O
  - FEN: `r1bq1rk1/ppp1bppp/2n2n2/3p2B1/3P4/2NB4/PPP1NPPP/R2QK2R w KQ - 6 8`
- `cla-4exd5-trap` (C11, trap): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.exd5 exd5 5.Bd3 Nc6 6.Nge2 Bd6 7.Bg5 O-O 8.Nxd5 Bb4+ 9.Nxb4 Nxb4
  - FEN: `r1bq1rk1/ppp2ppp/5n2/6B1/1n1P4/3B4/PPP1NPPP/R2QK2R w KQ - 0 10`

- **4.exd5 exd5 5.Bg5 Be7** (lichess: Svenonius Variation) 6.Bd3 Nc6 7.Nge2 O-O: the bishop on e7 breaks the pin; level.
- **The trap.** With the bishop on d6 instead (5.Bd3 Nc6 6.Nge2 Bd6 7.Bg5), 7...O-O? allows 8.Nxd5!: the f6-knight is pinned to the queen and can't recapture, so White wins a pawn (8...Bb4+ 9.Nxb4 Nxb4; engine: White is clearly better). 7...Be7 is correct.

---

## 11. The Winawer Variation: 3.Nc3 Bb4 (C15–C19)

### 11.1 3...Bb4: the pin

- `win-3bb4` (C15, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4
  - FEN: `rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4`
- `win-4e5` (C17, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5
  - FEN: `rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 5`
- `win-5a3` (C18, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3
  - FEN: `rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR b KQkq - 0 6`
- `win-6ne7` (C18, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7
  - FEN: `rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 1 7`

- **The idea.** The bishop pins the knight that defends e4. White's main answer is to push: **4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7**. Named after Szymon Winawer; Wikipedia: "pioneered by Aron Nimzowitsch and Mikhail Botvinnik"; once "the most often seen rejoinder to 3.Nc3", it has since been overtaken by 3...Nf6.
- **The trade-off.** White has doubled c-pawns (c2, c3) and a weak a3-pawn, but the bishop pair and kingside space; Black has given up the dark-squared bishop, so the dark squares around Black's king (f6, g7, h6) are weak. The engine gives White a small but clear edge in the main line.
- **6...Ne7** keeps f6 free for ...f6 and heads for f5 or c6; ...Qa5 or ...Qc7 and ...Bd7–a4 put pressure on c3 and c2.

### 11.2 7.Qg4: castle or let g7 go?

- `win-7qg4` (C18, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Qg4
  - FEN: `rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR b KQkq - 2 7`
- `win-7qg4-oo` (C18, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Qg4 O-O 8.Bd3 Nbc6 9.Qh5 Ng6 10.Nf3 Qc7 11.Be3 c4 12.Bxg6 fxg6 13.Qg4 Qf7
  - FEN: `r1b2rk1/pp3qpp/2n1p1p1/3pP3/2pP2Q1/P1P1BN2/2P2PPP/R3K2R w KQ - 2 14`
- `win-6qc7` (C18, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Qc7 7.Qg4 Ne7 8.Qxg7 Rg8 9.Qxh7 cxd4
  - FEN: `rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1B1KBNR w KQq - 0 10`

- **7.Qg4** attacks g7 (Black's dark-squared bishop is gone). **7...O-O 8.Bd3 Nbc6 9.Qh5 Ng6 10.Nf3 Qc7 11.Be3 c4 12.Bxg6 fxg6 13.Qg4 Qf7:** Black castles and defends; White keeps an edge (rechecked at depth 20 during course writing: about +0.6, not a clear advantage). The engine's best defense is 8...f5 rather than 8...Nbc6, and after 8...Nbc6 its first choice is 9.Bg5. Wikipedia also mentions 7...Kf8 as "a more recent alternative".
- **6...Qc7 7.Qg4 Ne7** reaches the Poisoned Pawn by another move order.

### 11.3 The Poisoned Pawn (ideas only)

- `win-pp` (C18, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Qg4 Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4 10.Ne2 Nbc6 11.f4 Bd7 12.Qd3 dxc3
  - FEN: `r3k1r1/ppqbnp2/2n1p3/3pP3/5P2/P1pQ4/2P1N1PP/R1B1KB1R w KQq - 0 13`
- `win-pp-trap` (C18, trap): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Qg4 Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4 10.cxd4 Qc3+ 11.Kd1 Qxa1
  - FEN: `rnb1k1r1/pp2np1Q/4p3/3pP3/3P4/P7/2P2PPP/q1BK1BNR w q - 0 12`

- **7...Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4.** Black gives up the g- and h-pawns; in return Black attacks White's center (d4, then c3), gets the open g-file against g2, and White's king often stays in the middle. White gets a passed h-pawn that can run fast. After 10.Ne2 Nbc6 11.f4 Bd7 12.Qd3 dxc3 the engine gives White a small edge, but the position is extremely sharp. **Teach the ideas and the first moves only.**
- **10.cxd4?? Qc3+!** is the trap: the queen checks the king and attacks the a1-rook at the same time (a fork). After 11.Kd1 Qxa1 Black is winning, a rook up for two pawns (engine); 11...Qxd4+ first, then ...Qxa1, is slightly stronger (checked during course writing). White must play 10.Ne2 (10.Rb1 and 10.Qd3 are also fine).

### 11.4 Positional lines: 7.Nf3, 7.a4, 7.h4

- `win-7nf3` (C19, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Nf3 Nbc6 8.a4 Qa5 9.Qd2 Bd7 10.Be2 f6
  - FEN: `r3k2r/pp1bn1pp/2n1pp2/q1ppP3/P2P4/2P2N2/2PQBPPP/R1B1K2R w KQkq - 0 11`
- `win-7nf3-b6` (C19, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Nf3 b6 8.a4 Ba6 9.Bxa6 Nxa6 10.Qe2 Nb8 11.O-O Nbc6
  - FEN: `r2qk2r/p3nppp/1pn1p3/2ppP3/P2P4/2P2N2/2P1QPPP/R1B2RK1 w kq - 4 12`
- `win-7a4` (C19, popular): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.a4 Nbc6 8.Nf3 Qa5 9.Bd2 c4 10.Ng5 h6
  - FEN: `r1b1k2r/pp2npp1/2n1p2p/q2pP1N1/P1pP4/2P5/2PB1PPP/R2QKB1R w KQkq - 0 11`
- `win-7h4` (C18, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.h4 Qc7 8.h5 h6
  - FEN: `rnb1k2r/ppq1npp1/4p2p/2ppP2P/3P4/P1P5/2P2PP1/R1BQKBNR w KQkq - 0 9`

- **7.Nf3** develops and keeps the structure; **7.a4** prepares Ba3 (the bishop uses the a3–f8 diagonal, where Black has no dark-squared bishop to oppose it) and stops ...Qa5–a4 ideas; **7.h4** grabs kingside space. Wikipedia: with 7.a4, "World Champions Vasily Smyslov and Bobby Fischer both used this line with success"; 7.Nf3 is "not considered the most challenging line for Black".
- **...b6 and ...Ba6.** 7.Nf3 b6 8.a4 Ba6 9.Bxa6 Nxa6 10.Qe2 Nb8 11.O-O Nbc6: Black trades the problem bishop (level).
- **...c4.** In 7.a4 Nbc6 8.Nf3 Qa5 9.Bd2 c4 Black closes the queenside so White's bishops have less scope (White slightly better).

### 11.5 5...Ba5 and Black's other fourth moves

- `win-5ba5` (C17, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Ba5 6.b4 cxd4 7.Qg4 Ne7 8.bxa5 dxc3 9.Qxg7 Rg8 10.Qxh7 Nbc6
  - FEN: `r1bqk1r1/pp2np1Q/2n1p3/P2pP3/8/P1p5/2P2PPP/R1B1KBNR w KQq - 1 11`
- `win-5ba5-cxb4` (C17, dubious): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Ba5 6.b4 cxb4 7.Nb5 bxa3+ 8.c3 Bc7 9.Bxa3
  - FEN: `rnbqk1nr/ppb2ppp/4p3/1N1pP3/3P4/B1P5/5PPP/R2QKBNR b KQkq - 0 9`
- `win-4ne7` (C18, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 Ne7 5.a3 Bxc3+ 6.bxc3 c5
  - FEN: `rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 0 7`
- `win-4qd7` (C16, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 Qd7 5.a3 Bxc3+ 6.bxc3 b6 7.Qg4 f5 8.Qg3 Ba6
  - FEN: `rn2k1nr/p1pq2pp/bp2p3/3pPp2/3P4/P1P3Q1/2P2PPP/R1B1KBNR w KQkq - 2 9`
- `win-4b6` (C16, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 b6 5.a3 Bxc3+ 6.bxc3 Qd7 7.a4 Ba6 8.Bxa6 Nxa6
  - FEN: `r3k1nr/p1pq1ppp/np2p3/3pP3/P2P4/2P5/2P2PPP/R1BQK1NR w KQkq - 0 9`

- **5...Ba5** (lichess: Retreat Variation, Armenian Line; Wikipedia: "sometimes called the Armenian Variation", played "most notably" by Rafael Vaganian) keeps the bishop. 6.b4 cxd4 7.Qg4 Ne7 8.bxa5 dxc3 9.Qxg7 Rg8 10.Qxh7 Nbc6: extremely sharp; the engine gives White a clear edge. Wikipedia adds that after 6.b4 cxb4?! 7.Nb5 bxa3+ 8.c3 Bc7 9.Bxa3 "White has the upper hand"; the engine agrees that White is clearly better (`win-5ba5-cxb4`, status dubious).
- **4...Ne7 5.a3 Bxc3+ 6.bxc3 c5** transposes to the main line.
- **4...Qd7 (Petrosian Variation)** prepares ...b6/...Ba6 and meets Qg4 with ...f5; **4...b6** goes for ...Ba6 at once. Both are playable but the engine gives White a clear edge. Status: rare.

### 11.6 5.Bd2 and Alekhine's gun

- `win-5bd2` (C17, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.Bd2 Ne7 6.Nb5 Bxd2+ 7.Qxd2 O-O 8.c3 b6 9.f4 Ba6
  - FEN: `rn1q1rk1/p3nppp/bp2p3/1NppP3/3P1P2/2P5/PP1Q2PP/R3KBNR w KQ - 1 10`

- **5.Bd2 Ne7 6.Nb5 Bxd2+ 7.Qxd2 O-O 8.c3 b6 9.f4 Ba6:** White trades the dark-squared bishops and uses the b5-knight; Black trades the light-squared bishops with ...b6/...Ba6. Slightly better for White. This is the opening of Alekhine–Nimzowitsch, San Remo 1930 (§14), the game that gave its name to "Alekhine's gun" (a queen behind two rooks on an open file).

### 11.7 White's fourth-move sidelines

- `win-4exd5` (C15, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.exd5 exd5 5.Bd3 Ne7 6.Qh5 Nbc6 7.a3 Bxc3+ 8.bxc3 Be6
  - FEN: `r2qk2r/ppp1nppp/2n1b3/3p3Q/3P4/P1PB4/2P2PPP/R1B1K1NR w KQkq - 1 9`
- `win-4a3` (C15, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.a3 Bxc3+ 5.bxc3 dxe4 6.Qg4 Nf6 7.Qxg7 Rg8 8.Qh6 Nbd7
  - FEN: `r1bqk1r1/pppn1p1p/4pn1Q/8/3Pp3/P1P5/2P2PPP/R1B1KBNR w KQq - 3 9`
- `win-4ne2` (C15, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.Ne2 dxe4 5.a3 Be7 6.Nxe4 Nf6 7.N2g3 O-O 8.Be2 Nc6
  - FEN: `r1bq1rk1/ppp1bppp/2n1pn2/8/3PN3/P5N1/1PP1BPPP/R1BQK2R w KQ - 5 9`
- `win-4bd2` (C15, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.Bd2 dxe4 5.Qg4 Nf6 6.Qxg7 Rg8 7.Qh6 Qxd4 8.O-O-O
  - FEN: `rnb1k1r1/ppp2p1p/4pn1Q/8/1b1qp3/2N5/PPPB1PPP/2KR1BNR b q - 1 8`
- `win-4qg4` (C15, rare): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.Qg4 Nf6 5.Qxg7 Rg8 6.Qh6 c5
  - FEN: `rnbqk1r1/pp3p1p/4pn1Q/2pp4/1b1PP3/2N5/PPP2PPP/R1B1KBNR w KQq - 0 7`

- **4.exd5 exd5** (Winawer Exchange): a symmetrical structure where Black's bishop on b4 is active; 5.Bd3 Ne7 6.Qh5 (Canal Attack) Nbc6 7.a3 Bxc3+ 8.bxc3 Be6: slightly better for White.
- **4.a3 Bxc3+ 5.bxc3 dxe4 6.Qg4 Nf6 7.Qxg7 Rg8 8.Qh6 Nbd7:** White gives a pawn for the bishop pair and Black's weakened kingside; slightly better for White.
- **4.Ne2 (Alekhine Gambit) dxe4 5.a3 Be7 6.Nxe4 Nf6 7.N2g3 O-O 8.Be2 Nc6:** level.
- **4.Bd2 (Fingerslip Variation) dxe4 5.Qg4 Nf6 6.Qxg7 Rg8 7.Qh6 Qxd4 8.O-O-O:** wild; level.
- **4.Qg4 Nf6 5.Qxg7 Rg8 6.Qh6 c5:** the pawn grab costs time and Black strikes in the center; level.

---

## 12. Typical middlegame themes

### 12.1 The Greek Gift: Bxh7+ (when it works and when it doesn't)

- `cla-greek` (C14, dubious): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 O-O 8.Nf3 c5 9.Bd3 cxd4 10.Bxh7+ Kxh7 11.Ng5+ Qxg5 12.fxg5 dxc3 13.Qh5+ Kg8 14.O-O
  - FEN: `rnb2rk1/pp1n1pp1/4p3/3pP1PQ/8/2p5/PPP3PP/R4RK1 b - - 3 14`
- `cla-greek-kh8` (C14, dubious): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 O-O 8.Nf3 c5 9.Bd3 cxd4 10.Bxh7+ Kh8 11.Ng5 g6 12.Qxd4
  - FEN: `rnb2r1k/pp1nqp1B/4p1p1/3pP1N1/3Q1P2/2N5/PPP3PP/R3K2R b KQ - 0 12`
- `cla-greek-f6` (C14, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 O-O 8.Nf3 c5 9.Bd3 f6 10.exf6 Qxf6 11.g3 cxd4 12.Nxd4 Nc6
  - FEN: `r1b2rk1/pp1n2pp/2n1pq2/3p4/3N1P2/2NB2P1/PPP4P/R2QK2R w KQ - 1 13`
- `tar-greek-fail` (C05, trap): 1.e4 e6 2.d4 d5 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ngf3 Be7 8.O-O O-O 9.Bxh7+ Kxh7 10.Ng5+ Bxg5
  - FEN: `r1bq1r2/pp1n1ppk/2n1p3/2ppP1b1/3P4/2P5/PP1N1PPP/R1BQ1RK1 w - - 0 11`
- `cla-ac-greek-fail` (C13, trap): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.h4 O-O 7.Bd3 c5 8.Bxh7+ Kxh7 9.Qh5+ Kg8 10.Bxe7 Qxe7
  - FEN: `rnb2rk1/pp1nqpp1/4p3/2ppP2Q/3P3P/2N5/PPP2PP1/R3K1NR w KQ - 0 11`

- **The pattern.** White sacrifices the d3-bishop on h7 with check (Bxh7+ Kxh7), then plays Ng5+ and brings the queen to h5 (or d3, g4), aiming for mate on h7 or to win material. It is called the "Greek Gift". The French often invites it, because e4–e5 drives Black's knight from f6 to d7, so h7 loses its best defender.
- **Checklist before Bxh7+.** (1) Black has castled and no knight can come back to f6 at once; (2) White's knight can reach g5 with check; (3) the queen can reach h5 (or another attacking square) quickly; (4) Black has no piece that can take on g5 for free (a bishop on e7, or a queen on e7 when no White pawn can recapture on g5); (5) the black king can't run to g6 safely.
- **It works:** `exch-greek` (7...Bg4? 8.Bxh7+! Kxh7 9.Ng5+ uncovers the queen against g4; White wins a pawn, §6.3).
- **It works, but Black can limit the damage:** in the Classical main line, 9.Bd3 cxd4? 10.Bxh7+! is strong because the f4-pawn can recapture on g5. After 10...Kxh7 11.Ng5+ Black's best is to give up the queen: 11...Qxg5! 12.fxg5 dxc3 13.Qh5+ Kg8 14.O-O, and White has a queen against a bishop and two knights (three minor pieces; pawns are level, counted on the board during course writing) and a lasting attack (engine: White is clearly better, but not winning). 10...Kh8 11.Ng5 g6 12.Qxd4 is no better for Black (the h7-bishop is still on the board, guarded by the g5-knight, so White is a pawn up with an attack; counted during course writing). Note that 9.Bd3 already threatens Bxh7+: quiet replies such as 9...Nc6 or 9...a6 are even worse than 9...cxd4. 9...f6! is the engine's choice for Black before all this: 10.exf6 Qxf6 11.g3 cxd4 12.Nxd4 Nc6 is level (`cla-greek-f6`).
- **It fails:** `tar-greek-fail` (Tarrasch with ...Be7: 9.Bxh7+? Kxh7 10.Ng5+ Bxg5 and White has no pawn to recapture on g5; Black is two pieces for a pawn up and winning) and `cla-ac-greek-fail` (Alekhine–Chatard 6...O-O 7.Bd3 c5 8.Bxh7+? Kxh7 9.Qh5+ Kg8 10.Bxe7 Qxe7: White's g1-knight is too far from g5, so the attack runs out; Black is clearly better). In that line Black must take the bishop: 8...Kh8?? 9.Qh5 leads to mate.

### 12.2 The ...f6 break and the e5 strongpoint

- `theme-e5-blockade` (C02, rare): 1.e4 e6 2.d4 d5 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4 fxe5 11.Nxe5 Nxe5 12.Bxe5 Nf6 13.Nd2 O-O 14.Nf3 Bd6
  - FEN: `r4rk1/pp1b2pp/1q1bpn2/3pB3/1P6/2PB1N2/P4PPP/R2Q1RK1 w - - 5 15`

- **Black's ...f6** hits e5 (§4.4, `tar-closed-f6`). After ...fxe5 (or exf6), Black's e6-pawn can become backward: it can't be defended by another pawn, and the e5-square in front of it is a great square for White's pieces.
- **White's answer: hold e5 with pieces.** In `theme-e5-blockade` (6.Bd3 Bd7 7.dxc5 Bxc5 8.O-O f6 9.b4 Be7 10.Bf4 fxe5 11.Nxe5 Nxe5 12.Bxe5 Nf6 13.Nd2 O-O 14.Nf3 Bd6), White's pieces take over e5 and d4 in front of Black's center pawns; the engine says White is clearly better. This is the plan Nimzowitsch made famous (his game against Salwe, Karlsbad 1911, is not confirmed with moves here; see §14.3).

### 12.3 The blockade on d4

- **Nimzowitsch's idea.** A pawn that is blocked by an enemy piece directly in front of it can't advance, and the blockading piece is safe from pawn attacks. In the French, White sometimes gives up the d4-pawn (4.Nf3 cxd4 5.Bd3 in the Advance, `adv-4nf3`; or the dxc5 lines, `theme-e5-blockade`) and uses d4 as a square for pieces instead. In the Tarrasch IQP lines White blockades the isolated d5-pawn with a knight on d4 (10.Nbd4, `tar-iqp-blockade`, §8.3).

### 12.4 White's f4–f5 lever

- `cla-f5-early` (C14, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 O-O 8.Nf3 c5 9.Qd2 Nc6 10.O-O-O c4 11.f5 b5 12.Nxb5 Rb8 13.Nd6 f6
  - FEN: `1rb2rk1/p2nq1pp/2nNpp2/3pPP2/2pP4/5N2/PPPQ2PP/2KR1B1R w - - 0 14`
- `cla-f5-prepared` (C14, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 O-O 8.Nf3 c5 9.Qd2 Nc6 10.O-O-O c4 11.g4 b5 12.Nxb5 Rb8 13.Nd6 Nb6 14.Qe3 Bd7 15.f5 f6
  - FEN: `1r3rk1/p2bq1pp/1nnNpp2/3pPP2/2pP2P1/4QN2/PPP4P/2KR1B1R w - - 0 16`

- **The idea.** In the Steinitz and the Classical main line White has pawns on e5 and f4. f4–f5 attacks e6, the base of Black's chain, and can open the f-file against Black's king.
- **Timing.** In the Stahlberg (10...c4), 11.f5?! is premature: 11...b5! and Black's counterattack comes first (12.Nxb5 Rb8 13.Nd6 f6); the engine calls it level, so White has thrown away the edge. Prepared with 11.g4 b5 12.Nxb5 Rb8 13.Nd6 Nb6 14.Qe3 Bd7 15.f5, it is a real threat, and Black answers 15...f6 (rechecked at depth 24 during course writing: White keeps the same small edge as before the lever).

### 12.5 The bad French bishop in endgames

- `theme-bad-bishop` (C11, respectable): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3 cxd4 8.Nxd4 Bc5 9.Qd2 Bxd4 10.Bxd4 Nxd4 11.Qxd4 Qb6 12.Qxb6 Nxb6 13.O-O-O Bd7 14.b3 h5 15.Bd3
  - FEN: `r3k2r/pp1b1pp1/1n2p3/3pP2p/5P2/1PNB4/P1P3PP/2KR3R b kq - 1 15`

- **The Vacuum Cleaner.** Steinitz 7...cxd4 8.Nxd4 Bc5 9.Qd2 Bxd4 10.Bxd4 Nxd4 11.Qxd4 Qb6 12.Qxb6 Nxb6 13.O-O-O Bd7 14.b3 h5 15.Bd3: the queens are off; Black's light-squared bishop is hemmed in by the pawns on d5 and e6, while White's light-squared bishop is free. The engine gives White a small edge. Wikipedia calls this line the "Vacuum Cleaner Variation".
- **The lesson for Black:** in endgames, the c8-bishop is often the worst piece; trading it early (...b6/...Ba6, ...Bd7–b5) or freeing it with ...f6/...e5 avoids this. **For White:** keep the good light-squared bishop, trade Black's active pieces, and use the light squares.
- Wikipedia's Tarrasch–Teichmann example (not checked here) describes the same problem: "the light-square bishop is hemmed in by pawns on a6, b5, d5, e6, and f7".

---

## 13. Traps and typical tactics index

All traps below were checked with Stockfish at depth 20 (multipv 3). "Wins" means the engine confirms the material win holds up after the opponent's best defense.

| Line | Side that wins | What happens |
|---|---|---|
| `fr-count-d4` | White | 6.Be2 cxd4 7.cxd4 Nxd4? 8.Nxd4 (a piece for a pawn) Qxd4?? 9.Qxd4: d4 was defended twice. |
| `fr-bb5-trap` | Black | 5...Bd7 6.Bb5? Nxe5! 7.Nxe5 Bxb5: the knight wasn't pinned; Black wins a pawn. |
| `adv-6a3-c4-b4` | Black | 6.a3 c4 7.b4?! cxb3 (en passant) 8.Qxb3?? Qxb3: nothing recaptures on b3. |
| `adv-mb-trap` | White | 6.Bd3 cxd4 7.cxd4 Nxd4? 8.Nxd4 Qxd4?? 9.Bb5+ and 11.Qxd4 wins the queen. |
| `adv-mb-nxd4-piece` | White | 7...Nxd4? 8.Nxd4: Black can't take back (Bb5+), so Black is a piece for a pawn down. |
| `adv-lput-trap` | White | Lputian 10.Bd3 Nfxd4? 11.Nxd4 Nxd4 12.Bxd4 Qxd4?? 13.Bb5+ wins the queen (11...Nxe5 limits the loss to a piece for two pawns). |
| `exch-greek` | White | 7...Bg4? 8.Bxh7+ Kxh7 9.Ng5+ Kg8 10.Qxg4: White wins a pawn. |
| `tar-greek-fail` | Black | 9.Bxh7+? Kxh7 10.Ng5+ Bxg5: the Greek Gift fails; Black is two pieces for a pawn up. |
| `cla-ac-greek-fail` | Black | 8.Bxh7+? Kxh7 9.Qh5+ Kg8 10.Bxe7 Qxe7: no knight for g5; Black is a piece for a pawn up (8...Kh8?? 9.Qh5 mates). |
| `cla-4exd5-trap` | White | 7...O-O? 8.Nxd5: the f6-knight is pinned; White wins a pawn. |
| `win-pp-trap` | Black | Poisoned Pawn 9...cxd4 10.cxd4?? Qc3+ 11.Kd1 Qxa1: a queen fork of king and rook. |

Typical tactics that are **not** traps, but are worth teaching:

- **Counting on d4:** `fr-count-d4`, `adv-6be2` (...Nh6–f5 adds a third attacker), `adv-mb-main` (with the bishop on d3, d4 really is loose).
- **Discovered attack by the d3-bishop:** `adv-mb-trap`, `adv-lput-trap` (Bb5+ uncovers the queen on d4), `exch-greek` (Ng5+ uncovers the queen on g4).
- **Pins:** `side-2qe2-pin` (the e6-pawn pinned by Qe2: ...exd5 is illegal), `cla-4exd5-trap` (the f6-knight pinned to the queen), `fr-bb5-trap` (why Bb5 is not a real pin when ...Bd7 guards b5).
- **Forks:** `win-pp-trap` (...Qc3+), `cla-ac-c5-qxe7` (the Nb5–c7 fork threat and Nd6+).
- **Greek Gift branches that are not material traps:** `cla-greek` and `cla-greek-kh8` (the Classical 10.Bxh7+: White gets a strong attack, not a forced material win).
- **Knight sacrifices:** `fk-neg5-h6` (Nxe6 and Bg6+), and the Fort Knox 8...Be7? 9.Nxf7 (§9.6).
- **En passant:** `adv-6a3-c4-b4`.

---

## 14. Model games

All games in §14.1 were **confirmed** against Wikipedia, which prints their full game scores. The move lists below were copied from Wikipedia and replayed with chess.js; the only changes are castling written as O-O instead of 0-0 and the annotation marks (`?`, `!`) removed. chessgames.com, 365chess.com and chesstempo.com refused automated access during this research, so each game has one source for the moves. Lines marked "opening only" stop before the end of the game. Engine checks of the famous moments are noted.

### 14.1 The games

- `model-alekhine-nimzowitsch-1930` (C17, historical): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.Bd2 Ne7 6.Nb5 Bxd2+ 7.Qxd2 O-O 8.c3 b6 9.f4 Ba6 10.Nf3 Qd7 11.a4 Nbc6 12.b4 cxb4 13.cxb4 Bb7 14.Nd6 f5 15.a5 Nc8 16.Nxb7 Qxb7 17.a6 Qf7 18.Bb5 N8e7 19.O-O h6 20.Rfc1 Rfc8 21.Rc2 Qe8 22.Rac1 Rab8 23.Qe3 Rc7 24.Rc3 Qd7 25.R1c2 Kf8 26.Qc1 Rbc8 27.Ba4 b5 28.Bxb5 Ke8 29.Ba4 Kd8 30.h4 h5 31.Kh2 g6 32.g3
  - FEN: `2rk4/p1rqn3/P1n1p1p1/3pPp1p/BP1P1P1P/2R2NP1/2R4K/2Q5 b - - 0 32`
- `model-bronstein-uhlmann-1977` (C18, historical): 1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 Ne7 5.a3 Bxc3+ 6.bxc3 c5 7.Qg4 Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4 10.Ne2 Nbc6 11.f4 Bd7 12.Qd3 dxc3 13.h4 O-O-O 14.h5 Nf5 15.h6 Rg6 16.h7 Rh8 17.Rh3 d4 18.Rb1 Be8 19.Qf3 Qd8 20.g4 Nh4 21.Qh1 Rxg4 22.Ng3 Rxh7 23.Ne4 Nxe5 24.fxe5 Bc6 25.Bd3 Kc7 26.Kf2 Rh5 27.Rf3 Qg8 28.Bf4 Nxf3 29.Qxh5 Rxf4 30.Qh6 Ng5+
  - FEN: `6q1/ppk2p2/2b1p2Q/4P1n1/3pNr2/P1pB4/2P2K2/1R6 w - - 2 31`
- `model-karpov-korchnoi-1978-g16` (C08, historical): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 exd5 5.Bb5+ Bd7 6.Qe2+ Qe7 7.Bxd7+ Nxd7 8.dxc5 Nxc5 9.Nb3 Qxe2+ 10.Nxe2 Nxb3 11.axb3 Bc5 12.Bd2 Ne7 13.Nf4 O-O 14.O-O Rfd8 15.Nd3 Bb6 16.c3 f6
  - FEN: `r2r2k1/pp2n1pp/1b3p2/3p4/8/1PPN4/1P1B1PPP/R4RK1 w - - 0 17`
- `model-nepomniachtchi-ding-2023-g7` (C07, historical): 1.e4 e6 2.d4 d5 3.Nd2 c5 4.Ngf3 cxd4 5.Nxd4 Nf6 6.exd5 Nxd5 7.N2f3 Be7 8.Bc4 Nc6 9.Nxc6 bxc6 10.O-O O-O 11.Qe2 Bb7 12.Bd3 Qc7 13.Qe4 Nf6 14.Qh4 c5 15.Bf4 Qb6 16.Ne5 Rad8 17.Rae1 g6 18.Bg5 Rd4 19.Qh3 Qc7 20.b3 Nh5 21.f4 Bd6 22.c3 Nxf4 23.Bxf4 Rxf4 24.Rxf4 Bxe5 25.Rh4 Rd8 26.Be4 Bxe4 27.Rhxe4 Rd5 28.Rh4 Qd6 29.Qe3 h5 30.g3 Bf6 31.Rc4 h4 32.gxh4 Rd2 33.Re2 Rd3 34.Qxc5 Rd1+ 35.Kg2 Qd3 36.Rf2 Kg7 37.Rcf4 Qxc3
  - FEN: `8/p4pk1/4pbp1/2Q5/5R1P/1Pq5/P4RKP/3r4 w - - 0 38`
- `model-gukesh-ding-2024-g1` (C11, historical): 1.e4 e6 2.d4 d5 3.Nc3 Nf6 4.e5 Nfd7 5.f4 c5 6.Nce2 Nc6 7.c3 a5 8.Nf3 a4 9.Be3 Be7 10.g4 Qa5 11.Bg2 a3 12.b3 cxd4 13.b4 Qc7 14.Nexd4 Nb6 15.O-O Nc4 16.Bf2 Bd7 17.Qe2 Nxd4 18.Nxd4 Nb2 19.Qe3 Rc8 20.Rac1 Qc4 21.f5 Qd3 22.Qe1 Bg5 23.Rc2 Rc4 24.h4 Bf4 25.Qb1 Rxc3 26.Rxc3 Qxc3 27.fxe6 fxe6 28.Ne2 Qxe5 29.Nxf4 Qxf4 30.Qc2 Qc4 31.Qd2 O-O 32.Bd4 Nd3 33.Qe3 Rxf1+ 34.Bxf1 e5 35.Bxe5 Qxg4+ 36.Bg2 Bf5 37.Bg3 Be4 38.Kh2 h6 39.Bh3 Qd1 40.Bd6 Qc2+ 41.Kg3 Qxa2 42.Be6+ Kh8
  - FEN: `7k/1p4p1/3BB2p/3p4/1P2b2P/p2nQ1K1/q7/8 w - - 2 43`

- **Alekhine–Nimzowitsch, San Remo 1930, 1-0 (32 moves).** Winawer with 5.Bd2 Ne7 6.Nb5 (§11.6). White gains queenside space with a4–a5–a6 and b4, puts the knight on d6, and then doubles rooks on the c-file with the queen behind them (25.R1c2 and 26.Qc1): the formation now called "Alekhine's gun" (Wikipedia, "Alekhine's gun"). Black ends up with almost no useful moves. Engine: 14...f5 was a serious mistake (14...Nf5 kept White's edge small); White is already winning well before the gun (after 17.a6 and 19...h6, rechecked during course writing), so 26.Qc1 is the famous finishing picture rather than the moment the game was decided; the final position is lost for Black. 15.a5 was not White's most precise move (15.Qc3 was stronger), so don't call every White move "best".
- **Bronstein–Uhlmann, Tallinn 1977, 0-1 (30 moves).** Winawer Poisoned Pawn reached by 4...Ne7 5.a3 Bxc3+ 6.bxc3 c5 (§11.3). Black castles long, gives up the h-pawn race and uses the center: 17...d4! opens lines (Wikipedia gives the "!"). Engine: after 17...d4 Black is already slightly better (rechecked during course writing: 17.Rh3 had already dropped about a pawn, while 17.Qxc3 was level); 21.Qh1 was White's biggest mistake (21.Qg3 was better), and from then on Black is clearly better and then winning; at the end White is lost (the engine even finds a forced mate after one of White's king moves). Wikipedia lists Uhlmann among the great contributors to the French.
- **Karpov–Korchnoi, World Championship (Baguio) 1978, game 16, ½–½ (42 moves; the line stops after 16...f6).** Wikipedia: "For the first time in the match, Korchnoi played the French Defense." Karpov chose 5.Bb5+ and 6.Qe2+, trading queens on move 9 to play against the isolated d-pawn (§8.4). Engine: level at the end of the opening; the game was drawn.
- **Nepomniachtchi–Ding, World Championship (Astana) 2023, game 7, 1-0 (37 moves).** Tarrasch with 4.Ngf3 cxd4 5.Nxd4 (§8.5). Wikipedia says Ding chose the French after "half-jokingly" suggesting it to his second, Rapport. White's Qe4–h4 and Ne5 put pressure on Black's kingside. Engine: the position was level until 33...Rd3? (33...Rd5 held); after 34.Qxc5 White is winning.
- **Gukesh–Ding, World Championship (Singapore) 2024, game 1, 0-1 (42 moves).** Wikipedia: "French Defence, Steinitz Variation (ECO C11)", Ding's first classical win in the match. 5.f4 c5 6.Nce2 (a Shirov–Anand-style set-up, §10.2); Black's a-pawn runs to a3 and Black's knight goes to c4 and b2. Engine: around move 18 the game was roughly level, and by move 21 Black was slightly better (rechecked at depth 18–22 during course writing; 11...b5 was slightly better than the game's 11...a3); 22.Qe1? (22.g5 was better) and 30.Qc2? (30.Bc5 was better) were White's main mistakes; at the end Black is winning.

### 14.2 Model-games index

| Game | Event / year | Variation | Result | Confirmed | Why it is instructive |
|---|---|---|---|---|---|
| Alekhine–Nimzowitsch | San Remo 1930 | Winawer, 5.Bd2 | 1-0 | yes (Wikipedia "Alekhine's gun"; one source for the moves) | Queen behind two rooks on the open c-file; a whole-board bind |
| Bronstein–Uhlmann | Tallinn 1977 | Winawer, Poisoned Pawn (via 4...Ne7) | 0-1 | yes (Wikipedia "Wolfgang Uhlmann"; one source) | Black's center and the g-file against White's passed h-pawn |
| Karpov–Korchnoi | WCh Baguio 1978, game 16 | Tarrasch, 5.Bb5+ | ½–½ | yes (Wikipedia "World Chess Championship 1978"; one source) | The queen trade against the isolated d-pawn |
| Nepomniachtchi–Ding | WCh Astana 2023, game 7 | Tarrasch, 4.Ngf3 | 1-0 | yes (Wikipedia "World Chess Championship 2023"; one source) | Open lines and a kingside attack in the Tarrasch |
| Gukesh–Ding | WCh Singapore 2024, game 1 | Classical, Steinitz 5.f4 c5 6.Nce2 | 0-1 | yes (Wikipedia "World Chess Championship 2024"; one source) | Black's queenside play (...a5–a4–a3) and counterattack |

### 14.3 Checked but not confirmed (do not cite with moves)

- **Nimzowitsch–Salwe, Karlsbad 1911, round 15, 1-0.** A chessgames.com search snippet confirms the players, event, round, result and opening (C02, Advance with 6.Bd3; the page is titled "Overprotection Racket" and annotated by Nimzowitsch), but no source that could be read gave the moves. The course may say that Nimzowitsch won a famous Advance game against Salwe in 1911 that illustrates his blockade ideas, but must not give moves from it.
- **Fischer–Uhlmann, Buenos Aires 1960.** ChessBase ("The backstory: Fischer's poor performance in Buenos Aires", 2023) says Fischer also lost to Uhlmann in round eight, but gives neither the opening nor the moves. The common claim that it was a Winawer was not confirmed.
- **Fischer–Uhlmann, Stockholm Interzonal 1962**, **Fischer–Tal, Leipzig Olympiad 1960** and **Fischer–Kovacevic, Zagreb 1970**: no readable source gave the moves or confirmed the opening and result. A search snippet lists a Fischer–Uhlmann game from Stockholm 1962 as a Winawer, Positional Variation (C19), drawn, but that was not confirmed.
- **Alekhine–Fahrni, Mannheim 1914.** Wikipedia says it made 6.h4 famous; no moves or result were checked.
- **Botvinnik's Winawer games.** No readable source gave a game score (the Wikipedia article on the 1954 match has no game list).
- **Gukesh–Ding 2024, game 5** was a French Exchange (Wikipedia: "French Defence, Exchange Variation (ECO C01)", drawn), but only its first moves were read verbatim; not turned into a line.
- **The London–Paris correspondence match (1834–36):** no source gave the moves or the result.

---

## Folklore the engine contradicts

Each item was checked with Stockfish 19 at depth 20 (three candidate moves). Writers should repeat the corrected version, not the folklore.

1. **"Bxh7+ works whenever Black has castled and the f6-knight has been kicked away."** No. In the Alekhine–Chatard (6...O-O 7.Bd3 c5) 8.Bxh7+? fails because White's knight is still on g1 (Black ends up a piece for a pawn ahead); the right attack is 8.Qh5. In the closed Tarrasch with ...Be7, 9.Bxh7+? Kxh7 10.Ng5+ Bxg5 simply loses two pieces for a pawn. Check the five conditions in §12.1.
2. **"In the Milner-Barry Gambit, 10...Qxe5 is a blunder."** No: after 11.Re1 Qb8 12.Nxd5 Bd6 the engine calls it level. Grabbing the second pawn hands White strong play, which is why 10...a6 is better, but it is not a blunder.
3. **"The Milner-Barry Gambit is a sound gambit."** The engine prefers Black after 10.Nc3 a6 (by about three quarters of a pawn). It is a dangerous practical weapon, not a sound one.
4. **"The Bb5+ trap starts with 8...Qxd4??."** The first mistake is 7...Nxd4?, which already loses a piece for a pawn because the d4-knight can't be taken back. Wikipedia marks 7...Nxd4 with "??", which is right in spirit: both captures are bad.
5. **"In the Classical, 9.Bd3 cxd4 is fine for Black."** 9...cxd4? allows 10.Bxh7+!, and the engine says White is clearly better; Black's best is 9...f6.
6. **"Declining the Greek Gift with ...Kh8 is safer."** In the Alekhine–Chatard, 8.Bxh7+ Kh8?? 9.Qh5 leads to mate; in the Classical, 10...Kh8 is no better than 10...Kxh7.
7. **"In the Fort Knox, ...h6 is a useful waiting move."** Not before ...Bd6: 8.Neg5 h6? 9.Nxe6! and White is much better (though there is no forced win).
8. **"7...Qxe7 in the Alekhine–Chatard (6...c5 7.Bxe7) loses on the spot."** It doesn't lose material: 8.Nb5 Kd8 holds, but White is clearly better. 7...Kxe7 is the right recapture.
9. **"The Exchange Variation is a dead draw."** The engine calls the main lines level, but they are not drawish if either side unbalances the play (§6.2); Wikipedia: "White cannot force a draw".
10. **"After 6.a3 c4, b4 is White's natural plan."** 7.b4?! cxb3 (en passant) leaves White slightly worse, and 8.Qxb3?? loses the queen.

---

## Naming conflicts and corrections

1. **"Paulsen".** lichess calls 3.Nc3 the "Paulsen Variation" (C10) and 5.Nf3 in the Advance the "Paulsen Attack" (C02); Wikipedia uses "Paulsen" for the rare 3...c6. The course should say "3.Nc3" and "the Advance with 5.Nf3" rather than use the name.
2. **Three "Steinitz" names.** lichess names 3.Nc3 Nf6 4.e5 the Steinitz Variation (C11), 4.Bg5 Be7 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4 the "Classical Variation, Steinitz Variation" (C14), and 3.e5 c5 4.dxc5 the "Advance Variation, Steinitz Variation" (C02). In this doc "Steinitz" means 4.e5 in the Classical unless stated.
3. **Alekhine–Chatard.** Wikipedia: "known today as the Albin–Chatard Attack or the Alekhine–Chatard Attack. Additional names are Chatard–Alekhine Attack, Albin Attack, and Alekhine Attack." lichess: "Alekhine-Chatard Attack" for 6.h4 and "Albin-Chatard Gambit" for 6...Bxg5 7.hxg5 Qxg5.
4. **Winawer vs Nimzowitsch Variation.** Some older sources call 3...Bb4 the "Nimzowitsch Variation"; the course should say "Winawer".
5. **McCutcheon, not MacCutcheon** (Wikipedia footnote).
6. **Armenian Line / Retreat Variation.** lichess: "Winawer Variation, Retreat Variation" for 5...Ba5 and "Armenian Line" for 6.b4 cxd4; Wikipedia: "sometimes called the Armenian Variation".
7. **Kasparov Attack.** lichess's "Rubinstein Variation, Kasparov Attack" uses the move order 3.Nd2 dxe4 ... 7.c3; the same position arises via 3.Nc3.
8. **Chistyakov Defense.** lichess's name for 3.Nd2 c5 4.exd5 Qxd5; most books just say "4...Qxd5".
9. **Vacuum Cleaner Variation.** Wikipedia's nickname for the Steinitz queen-trade line in §12.5; lichess has no separate name for it.
10. **Leningrad Variation** (8...Nb6 in the closed Tarrasch) is lichess's name; ECO C06.
11. **Tarrasch closed ECO.** 3.Nd2 Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 is C05; the code becomes C06 after 7...cxd4 8.cxd4 (lichess).
12. **2.d3 ECO.** Lines that start 1.e4 e6 2.d3 are C00, but once ...c5 and g3 are played lichess files them under A08 (King's Indian Attack, Sicilian Variation); the doc follows lichess.
13. **Svenonius vs Delayed Exchange.** lichess: 4.exd5 is the "Classical Variation, Delayed Exchange Variation" (C11), and 4.exd5 exd5 5.Bg5 the "Exchange Variation, Svenonius Variation" (C01).
14. **Milner-Barry.** Named after Stuart Milner-Barry (Wikipedia lists the gambit among four openings named after him). Spelled with a hyphen.
15. **Fort Knox.** lichess: "Rubinstein Variation, Fort Knox Variation". The name refers to the US gold depository (a fortress); Wikipedia does not give its origin, so don't credit a person with coining it.
16. **Alapin.** Two different "Alapin" lines: the Alapin Gambit 3.Be3 (C00) and the Classical's Alapin Variation 7.Nb5 (C14). Neither is the Sicilian Alapin (2.c3).
17. **Spelling of names.** Nimzowitsch (also Nimzovich); Karlsbad (also Carlsbad); Lputian; Rustemov; Morozevich; Nepomniachtchi.

## Claims not fully confirmed (flagged on purpose)

- **Where the moves come from.** Every line starts from a position named in the lichess `chess-openings` dataset. The moves after the last lichess-named position were written from standard theory or chosen as the engine's top move, and then checked: every position in every non-historical line was scanned at depth 14. Lines that go more than two moves beyond the last lichess name: `fr-count-d4` (+8), `fr-mistake-ne4` (+8), `fr-bb5-trap` (+6), `adv-6a3-c4` (+9), `adv-6a3-c4-b4` (+5), `adv-6a3-c4-f6` (+9), `adv-6a3-nh6` (+6), `adv-lput-trap` (+17), `adv-lput-bd7` (+12), `adv-6a3-bd7` (+9), `adv-6be2` (+13), `adv-6be2-bxh6` (+13), `adv-mb-main` (+8), `adv-mb-qxe5` (+9), `adv-mb-trap` (+10), `adv-mb-nxd4-piece` (+6), `adv-mb-decline-bd7` (+8), `adv-5bd7` (+9), `adv-5bd7-a3-f6` (+6), `adv-4qb6-wade` (+6), `adv-4qb6-a3` (+10), `adv-3b6` (+8), `adv-4nf3` (+5), `adv-4dxc5` (+9), `adv-4qg4` (+5), `exch-4bd3` (+11), `exch-ooo` (+17), `exch-4nf3` (+11), `exch-qe2-check` (+9), `exch-greek` (+12), `exch-c5` (+9), `exch-4c4` (+11), `side-2d3` (+5), `side-2d3-attack` (+9), `side-2qe2` (+7), `side-2qe2-pin` (+7), `side-2nf3` (+11), `side-2nf3-d4` (+7), `side-2c4` (+9), `side-2f4` (+9), `side-2b3` (+5), `side-3bd3` (+7), `side-3bd3-c5` (+7), `side-3be3` (+9), `side-3c4` (+8), `tar-qxd5-plan` (+6), `tar-4ngf3` (+9), `tar-exd5` (+8), `tar-iqp-blockade` (+14), `tar-exd5-bb5` (+13), `tar-closed-f6` (+9), `tar-closed-qb6` (+9), `tar-closed-nb6` (+4), `tar-greek-fail` (+8), `tar-3be7` (+10), `tar-3be7-bd3` (+8), `tar-3nc6` (+6), `tar-3a6` (+4), `rub-4nd7` (+4), `rub-6gxf6` (+7), `rub-7bd3` (+16), `rub-7c3` (+5), `rub-7ne5` (+7), `rub-6bd3` (+10), `rub-6bg5` (+12), `rub-4nf6-gxf6` (+9), `fk-main` (+8), `fk-bxf3` (+10), `fk-neg5-bd6` (+14), `fk-neg5-be7` (+12), `fk-neg5-h6` (+10), `cla-steinitz-bc5` (+11), `cla-steinitz-a6` (+9), `cla-steinitz-qxb2` (+8), `cla-5nce2` (+8), `cla-main-a6` (+13), `cla-greek` (+14), `cla-greek-kh8` (+10), `cla-greek-f6` (+11), `cla-f5-early` (+6), `cla-f5-prepared` (+10), `cla-7nb5` (+7), `cla-ac-accept` (+5), `cla-ac-a6` (+8), `cla-ac-c5` (+6), `cla-ac-c5-qxe7` (+5), `cla-ac-oo` (+5), `cla-ac-greek-fail` (+8), `cla-mcc-main` (+6), `cla-burn` (+4), `cla-burn-gxf6` (+6), `cla-4exd5` (+5), `cla-4exd5-trap` (+11), `win-7qg4-oo` (+12), `win-pp` (+5), `win-pp-trap` (+8), `win-6qc7` (+4), `win-7nf3-b6` (+9), `win-5ba5` (+8), `win-5ba5-cxb4` (+7), `win-5bd2` (+9), `win-4qd7` (+8), `win-4b6` (+9), `win-4exd5` (+5), `win-4a3` (+10), `win-4qg4` (+6), `theme-e5-blockade` (+17), `theme-bad-bishop` (+16).
- **Constructed teaching lines.** The traps and the illustrative lines `fr-mistake-ne4`, `rub-6gxf6`, `exch-ooo`, `fk-neg5-h6`, `fk-neg5-be7`, `fk-neg5-bd6`, `cla-ac-oo`, `cla-ac-c5-qxe7`, `cla-greek`, `cla-greek-kh8`, `cla-f5-early`, `cla-f5-prepared`, `theme-e5-blockade` and `theme-bad-bishop` are constructed: the mistake (or plan) is a plausible move, and the follow-up is the engine's best line at depth 18–20. In `tar-greek-fail` White's 10.Ng5+ is shown to illustrate why the sacrifice fails; it is not White's best try (10.Re1 is, and Black is winning either way).
- **Engine continuations used as theory.** Where a line goes beyond well-known theory, the later moves are the engine's choices: for example `adv-4qg4` (6...h5 7.Qf4 f6), `adv-6be2-bxh6`, `adv-lput-bd7`, `exch-4nf3`, `rub-7bd3` (10...h6 11.Bh4 Qa5+ 12.c3 Nd5), `rub-7ne5`, `cla-main-a6` (11.O-O-O b5 12.Kb1 b4 13.Na4 Qa5), `win-7h4`.
- **Depth-20 coverage.** Every trap, every Greek Gift line, the main dubious lines and every claim in the folklore list have their own depth-20 check; the other lines rest on the depth-14 scan plus depth-18 probes of every flagged position.
- **Status labels** are qualitative (no explorer or game-database counts were possible; see "How to read").
- **History claims with a single or weak source.** The London–Paris match story and Chamouillet's role (Wikipedia only; no result or moves); the Steinitz "dullest of all openings" quote (Wikipedia; original source not checked); Maróczy as the first world-class regular (Wikipedia); "Fort Knox" as a reference to the gold depository (the obvious reading of the name, not sourced).
- **Model games with moves from one source only** (Wikipedia): all five in §14.1. Wikipedia's 1978 article shows only one French game in that match (game 16), while its 2023 article says the French was played twice by Korchnoi in 1978, both drawn; this doc follows the 1978 article.

## Sources

- Wikipedia: [French Defence](https://en.wikipedia.org/wiki/French_Defence), [Alekhine's gun](https://en.wikipedia.org/wiki/Alekhine%27s_Gun), [Wolfgang Uhlmann](https://en.wikipedia.org/wiki/Wolfgang_Uhlmann), [World Chess Championship 1978](https://en.wikipedia.org/wiki/World_Chess_Championship_1978), [World Chess Championship 1981](https://en.wikipedia.org/wiki/World_Chess_Championship_1981), [World Chess Championship 2023](https://en.wikipedia.org/wiki/World_Chess_Championship_2023), [World Chess Championship 2024](https://en.wikipedia.org/wiki/World_Chess_Championship_2024), [World Chess Championship 1954](https://en.wikipedia.org/wiki/World_Chess_Championship_1954), [Stuart Milner-Barry](https://en.wikipedia.org/wiki/Stuart_Milner-Barry), [Szymon Winawer](https://en.wikipedia.org/wiki/Szymon_Winawer), [Aron Nimzowitsch](https://en.wikipedia.org/wiki/Aron_Nimzowitsch)
- lichess opening names dataset (ECO + names, file `c.tsv`, plus `a.tsv`, `b.tsv`, `d.tsv`, `e.tsv` for transpositions): [lichess-org/chess-openings](https://github.com/lichess-org/chess-openings)
- History: [Edward Winter, "The French Defence" (chesshistory.com)](https://chesshistory.com/winter/extra/frenchdefence.html)
- Fischer–Uhlmann 1960 result: [ChessBase, "The backstory: Fischer's poor performance in Buenos Aires"](https://en.chessbase.com/post/backstory-fischer-buenos-aires-1960)
- Nimzowitsch–Salwe 1911 (players, event, result, opening only): [chessgames.com game page (search snippet)](https://www.chessgames.com/perl/chessgame?gid=1000795)
- Engine: Stockfish 19 (npm `stockfish` 19.0.1) through the one-process scanner and probe in `test-results/fr-research/` (`scan.mjs`, `sf.mjs`, `probe.mjs`), equivalent to `scripts/engine.mjs`.

