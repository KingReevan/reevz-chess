# King's Indian Defence: theory map

Research source of truth for the Reevz Chess King's Indian course. The opening is 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6, ECO E60–E99. The course teaches both sides: what Black is aiming for, and how White should handle each system.

## How to read this document

- **Lines.** Every move sequence shown in a `- \`id\`` bullet is copied from `kings-indian-lines.json`. All 143 lines were replayed move by move with chess.js 1.4.0: every move is legal and every SAN token is exactly chess.js's own spelling (including `+`). Each line shows the FEN after its last move. The doc bullets and the JSON are generated from one source file (`test-results/kid-research/lines.mjs`, built by `build.mjs`), so they can't drift apart.
- **Engine checks.** Every line was also scanned with Stockfish 19 (the repo's `stockfish` package): every position in every line at depth 15, and again at depth 20, flagging any move that throws away more than about three quarters of a pawn. Every tactical claim (trap, "wins a piece", "fork", "only move") was checked separately with `node scripts/engine.mjs "<moves>" --depth 20 --multipv 3`. Outcomes are written in words ("Black wins a pawn", "White is much better"), never as engine numbers. Where a well-known claim turned out to be folklore, the text says what really happens.
- **Move numbers in prose.** Moves are counted from 1.d4. "9...Nh5" means Black's 9th move.
- **`side`** in the JSON says whose choice defines the line: `white`, `black`, or `both` (a tabiya both sides steer into). For a `trap`, `side` is the side that springs the trap.
- **Status.** This is the status in top-level play, 2020–2026. Values:
  - `popular`: a mainstream elite choice.
  - `respectable`: sound and played, but not the first choice.
  - `rare`: playable, but seldom seen at the top.
  - `dubious`: objectively suspect.
  - `trap`: a teaching line that contains a mistake (there are 10).
  - `historical`: the opening of a famous old game.

  The lichess opening explorer (both the masters and the lichess databases) returned HTTP 401 (it now needs authentication), so these labels are a qualitative synthesis of the sources listed at the end. They were cross-checked against move counts from about 196,000 over-the-board games in The Week in Chess (TWIC issues 1645–1668, May–October 2026, FIDE ratings, both players in the band), counted by a research script:
  - White's 5th move after 4...d6, players 2400+ (338 games): 5.Be2 45%, 5.Nf3 28%, 5.h3 20%, 5.Bd3 2%, 5.f3 2%, 5.f4 1%. Under 2000 (small sample, 201 games): 5.Be2 26%, 5.Nf3 25%, 5.h3 20%, 5.f3 14%, 5.f4 6.5%. 5.Be2 often transposes to the Classical (6.Nf3) or goes 6.Be3 (Semi-Averbakh, the most common 6th move at 2000–2399) or 6.Bg5 (Averbakh, 9% at 2400+).
  - White's 7th move after 6...e5, 2400+ (153 games): 7.O-O 60%, 7.d5 21%, 7.dxe5 10%, 7.Be3 9%.
  - By system, all King's Indian games at 2400+: Classical E90–E99 36%, Fianchetto 21%, Sämisch 1.3%, Four Pawns 0.5%. Under 2000: Fianchetto 23%, Classical 21.5%, Sämisch 7%, Four Pawns 3%.
  - Online beginners are different: in lichess games rated 1000–1400, about half of White's 7th moves after 6...e5 are 7.d5 and about a fifth are 7.dxe5, with 7.O-O only about a fifth (Chessiverse, citing the lichess explorer). So beginners meet the Petrosian and the Exchange far more often than masters do.
- **Names and ECO codes.** These follow the lichess `chess-openings` dataset (which mirrors ECO naming) and Wikipedia. lichess classifies by position, so King's Indian lines that transpose into a Benoni position get a Benoni code (A65, A68, A69, A76); those lines keep the lichess code here, and the transposition is explained in place. Where sources disagree, that is noted in place and again in [Naming conflicts and corrections](#naming-conflicts-and-corrections).
- **Spelling.** British spelling in prose ("Defence", "centre", "manoeuvre"); lichess names are quoted with their own American spelling.

---

## 1. Variation tree

```
1.d4 Nf6 2.c4 g6
├─ 3.Nc3 d5           Grünfeld Defence (D80–D99), a different opening
├─ 3.g3 / 3.Nf3 + g3  Fianchetto Variation (E60–E69)            §11
│   ├─ 6...Nc6 7.Nc3 a6   Panno (8.d5 Na5; 8.h3 Rb8)
│   ├─ 6...c5             Yugoslav (8.d5 Na5; 8.dxc5)
│   ├─ 6...Nbd7 + ...e5   Classical Fianchetto (8.e4 c6 9.h3; 8...Re8 9.h3 exd4 Long Variation)
│   └─ 6...c6             7...Qa5 Kavalek, 7...Bf5 Larsen
└─ 3.Nc3 Bg7 4.e4 d6  King's Indian, Normal Variation (E70)      §4
    ├─ 5.Nf3 O-O
    │   ├─ 6.Be2 e5   Classical / Orthodox (E91–E99)
    │   │   ├─ 7.O-O Nc6 8.d5 Ne7   Main line (E97–E99)            §6
    │   │   │   ├─ 9.Ne1 Nd7         Mar del Plata (E98–E99)       §7
    │   │   │   │   ├─ 10.f3 f5 11.Be3 f4 12.Bf2 g5   (13.Rc1, 13.a4, 13.Nd3)
    │   │   │   │   ├─ 10.Be3 f5 11.f3 f4 12.Bf2 g5   same position
    │   │   │   │   ├─ 10.Nd3 f5 11.Bd2   the old c4–c5 race
    │   │   │   │   └─ 10.f3 f5 11.g4     Benko Attack
    │   │   │   ├─ 9.b4              Bayonet Attack (9...Nh5, 9...a5) §8
    │   │   │   └─ 9.Nd2 / 9.Bd2 / 9.a4                             §8
    │   │   ├─ 7.O-O: 7...exd4, 7...Na6 (Glek), 7...Nbd7, 7...c6     §6
    │   │   ├─ 7.O-O Nc6 8.Be3 / 8.dxe5                             §6
    │   │   ├─ 7.dxe5   Exchange Variation                         §5.1
    │   │   ├─ 7.Be3    Gligorić System                            §5.2
    │   │   └─ 7.d5     Petrosian System                           §5.3
    │   ├─ 6.Be2 c5   Maróczy or Benoni structures                 §9
    │   └─ 6.h3, 6.Bg5 (Zinnowitz / Smyslov idea), 6.Be3 (Larsen)  §9
    ├─ 5.f3       Sämisch (E80–E89)                                §10
    │   └─ 5...O-O 6.Be3: 6...e5 (7.d5, 7.Nge2, 7.dxe5), 6...c5 gambit,
    │                     6...Nc6 Panno, 6...c6, 6...a6, 6...b6; also 6.Bg5, 6.Nge2
    ├─ 5.f4       Four Pawns Attack (E76–E79)                       §12
    │   └─ 5...O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 (9...Re8, 9...Bg4, 9...b5), 9.e5 Florentine;
    │      7.Be2 cxd4; 6...Na6; 6.e5?!
    ├─ 5.Be2 O-O 6.Bg5   Averbakh (E73–E75): 6...c5, 6...h6, 6...Na6, 6...Nbd7, 6...e5?  §13
    ├─ 5.h3   Makogonov (E71) · 5.Bd3 · 5.Nge2 Kramer · 5.Bg5 · 5.g3 (E70–E72)       §14
    └─ 5.e5?! (E70)                                                  §4
Quiet set-ups beginners meet: 4.Nf3 O-O 5.e3 (E61); the London 2.Nf3 g6 3.Bf4 (A48)  §4
```

---

## 2. Suggested learning order

The course outline (`content/openings/kings-indian/OUTLINE.md`) is the authoritative order. In short:

| # | Block | Main lines | Difficulty |
|---|-------|-----------|-----------|
| 1 | The set-up, the long diagonal, the two breaks | `kid-main`, `kid-5nf3-oo`, `classical-6e5` | 1 |
| 2 | Why ...e5 doesn't lose a pawn; the Exchange Variation and its tricks | `classical-8nxe5`, `exchange-9nxe5`, `exchange-9nxe5-10f4-trap`, `exchange-9nc6-trap` | 1–2 |
| 3 | 8.d5 and the pawn chains; "attack where your pawns point" | `classical-8d5-ne7`, `mdp-9ne1-nd7` | 2 |
| 4 | Mar del Plata for Black: ...f5, ...f4, ...g5, ...Ng6, ...Rf7 | `mdp-10f3-f5`, `mdp-12-g5`, `mdp-13rc1` | 3 |
| 5 | White's queenside play: Ne1–d3, c4–c5, Nb5, the Bayonet | `mdp-10nd3`, `mdp-nb5-c7-trap`, `bayonet-9b4-nh5`, `classical-9nd2` | 3–4 |
| 6 | Petrosian, Gligorić and Black's 7th-move alternatives | `petrosian-7d5-a5`, `gligoric-7be3-ng4`, `classical-7oo-na6` | 3 |
| 7 | Sämisch | `samisch-6e5`, `samisch-gambit`, `samisch-panno` | 3 |
| 8 | Four Pawns and Averbakh | `four-pawns-9cxd5`, `averbakh-6c5`, `averbakh-6e5-trap` | 3 |
| 9 | Fianchetto and the rest | `fianchetto-panno`, `fianchetto-yugoslav`, `makogonov-5h3` | 2–3 |

Difficulty is 1–5 for a beginner-to-club player: 1 = a few moves and one idea, 5 = long forcing theory.

---

## 3. About the King's Indian

- **Where "Indian" comes from.** The Indian defences are named after the Bengali player Moheschunder Bannerjee, who played fianchetto set-ups (...d6, ...g6) against John Cochrane in Calcutta between 1848 and 1860. In 1884 the *Chess Player's Chronicle* called 1.e4 d6 2.d4 g6 the "Indian Defence", "so called on account of its introduction by the celebrated Indian Chess Player, the Brahmin Moheschunder Bonnerjee, in his games against Cochrane" (Edward Winter, chesshistory.com). P. W. Sergeant (1934) wrote that these fianchetto defences "were largely taught to European players by the example of Moheschunder and other Indians". One Cochrane–Moheschunder game even transposes into today's Four Pawns Attack (Wikipedia, "Indian Defence").
- **Where "King's Indian" comes from.** The specific name belongs to the 1920s hypermodern era. Tartakower popularised "Indian Defence" in the early 1920s, and Réti (1930) attributed the names "King's Indian" and "Queen's Indian" to Hans Kmoch, whom he criticised for them (Wikipedia, "Indian Defence"). Bologan credits Tartakower. Sources disagree; see [Naming conflicts](#naming-conflicts-and-corrections).
- **Early reputation.** "Until the mid-1930s, the King's Indian Defence was generally regarded as highly suspect" (Wikipedia). Euwe and Bogoljubow used it in the 1920s; Najdorf, Lilienthal and Smyslov took it up later (Bologan).
- **The post-war revival.** Soviet players showed in the late 1940s that the set-up is sound. Wikipedia credits Konstantinopolsky, Boleslavsky and Bronstein; Bologan dates "the real flowering" to the 1940s and 1950s with Boleslavsky, Bronstein and Geller. Minev names a "magnificent five" (Najdorf, Bronstein, Geller, Gligorić, Boleslavsky) who "in the decade from 1945 to 1955 practically created the theoretical base". The Yugoslav grandmaster Svetozar Gligorić's 1953 games at Mar del Plata (§7) revolutionised the main line (Pavlovic, *The Modernized KID: Mar del Plata*, 2022).
- **Famous players.** Wikipedia calls it a favourite of Kasparov, Fischer and Tal, and also names Korchnoi, Najdorf, Geller, Nunn, Gligorić, Uhlmann and Smirin. Bologan gives Fischer's King's Indian score as "66–40 in his favour" and Kasparov's as "91–53, including a few rapid games". Petrosian is quoted as saying he fed his family for years on the King's Indian, from the White side (Bologan).
- **Kasparov gives it up.** In his own words: "I dropped the King's Indian in 1997 after one too many bad experiences against Kramnik" (Kasparov in *Chess Informant 114*, quoted by Lubomir Kavalek, ChessBase). His classical losses to Kramnik in it were Linares 1994 (Petrosian System) and Novgorod 1997 (Bayonet Attack); from 1998 he met Kramnik with the Grünfeld (Wikipedia, list of Kasparov–Kramnik games). Wikipedia's King's Indian article places this "in the early 2000s"; the primary quote says 1997.
- **Since then.** Radjabov, Nakamura, Grischuk and Ding Liren have been its leading elite practitioners (Bologan 2017; Collins, *King's Indian Defence: Move by Move*, 2017). A 2019 ChessBase column wondered "whether the King's Indian is still playable at the elite level", while Pavlovic (2022) says the Mar del Plata's popularity "is greater than ever". Collins notes that engines tend to rate the Classical lines as good for White because Black's attack lies beyond their horizon. Carlsen used it to beat Warmerdam in the German Bundesliga in January 2025 (chess.com).
- **Today, in numbers (TWIC, 2026).** At the very top it is an occasional weapon: no King's Indians at the 2026 Candidates (0 of 56 games), 5 of 91 games at Tata Steel Masters 2026 (mostly van Foreest or Sindarov as Black). Across all over-the-board games and in rapid and blitz it holds a steady 3–4% share (World Rapid 2025 3.3%, World Blitz 2025 3.5%).

---

## 4. The set-up and the move orders

- `indian-2g6` (E60, popular): 1.d4 Nf6 2.c4 g6
  - FEN: `rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3`
- `kid-3nc3-bg7` (E61, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7
  - FEN: `rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4`
- `kid-main` (E70, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6
  - FEN: `rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5`
- `kid-5nf3-oo` (E90, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 2 6`

**The idea in one sentence.** Black lets White build the big centre (pawns on c4, d4 and e4), tucks the king away behind a fianchettoed bishop, and only then hits back at the centre with a pawn break: ...e5 or ...c5.

- **Why each move.**
  - 1...Nf6 stops 2.e4 and develops.
  - 2...g6 and 3...Bg7: the fianchetto. The bishop on g7 looks down the long diagonal a1–h8 at d4, c3 and b2 and guards the king.
  - 4...d6 keeps White's e-pawn out of e5 (an early e4–e5 would hit the f6-knight) and prepares ...e5.
  - 5...O-O: the king is safe before the fight starts.
- **What White gets.** Space and a free hand in the centre. White develops naturally (Nf3, Be2, O-O) or chooses a sharper plan (f3, f4, Bg5, g3); each is a "system" in the tree above.
- **The two breaks.** ...e5 (the main road; it leads to closed centres and kingside attacks) and ...c5 (a Benoni-style break; it leads to open queenside play). A third break, ...f5, comes later in the ...e5 structures.
- **A hypermodern opening.** "Hypermodern" means controlling the centre from a distance with pieces first and challenging it with pawns later, instead of occupying it with pawns at once.

### 4.1 Move orders that reach the same position

- `kid-3nf3-order` (E90, popular): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.Nc3 O-O 5.e4 d6
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 0 6`
- `kid-2nf3-order` (E90, popular): 1.d4 Nf6 2.Nf3 g6 3.c4 Bg7 4.Nc3 O-O 5.e4 d6
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 0 6`
- `kid-5be2-order` (E92, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Nf3 e5
  - FEN: `rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ - 0 7`
- `kid-3g3-order` (E62, popular): 1.d4 Nf6 2.c4 g6 3.g3 Bg7 4.Bg2 O-O 5.Nc3 d6 6.Nf3
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R b KQ - 1 6`

The King's Indian set-up can be reached by many move orders. 3.Nf3 and 2.Nf3 lead to exactly the same position as 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O, as long as White eventually plays Nc3 and e4. 5.Be2 (the most played 5th move in 2026 over-the-board games) followed by 6.Nf3 is the Classical again; with 6.Bg5 or 6.Be3 it becomes the Averbakh or Semi-Averbakh (§13). If White plays g3 and Bg2 instead of e4, it is the Fianchetto Variation (§11). For a beginner the lesson is simple: Black's first moves are the same (…Nf6, …g6, …Bg7, …O-O, …d6) against almost anything.

### 4.2 Castling before ...d6, and 3...d5 (a different opening)

- `kid-4-oo` (E70, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 O-O
  - FEN: `rnbq1rk1/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQ - 1 5`
- `kid-4-oo-5e5` (E70, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 O-O 5.e5 Ne8 6.f4 d6 7.Nf3
  - FEN: `rnbqnrk1/ppp1ppbp/3p2p1/4P3/2PP1P2/2N2N2/PP4PP/R1BQKB1R b KQ - 1 7`
- `grunfeld-3d5` (D80, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 d5
  - FEN: `rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4`

- 4...O-O is a legal and playable move order, but it allows 5.e5, which kicks the knight: 5...Ne8 6.f4 d6 7.Nf3. The engine thinks Black is fine, but the knight on e8 is passive and beginners should simply play 4...d6 first, which stops e4–e5. Status: rare.
- 3...d5 is the **Grünfeld Defence**, a separate opening in which Black attacks the centre at once with ...d5. It is mentioned only so that the course map is complete.

### 4.3 5.e5?! and its trap

- `kid-5e5` (E70, dubious): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.e5 dxe5 6.dxe5 Qxd1+ 7.Nxd1 Nfd7 8.f4 f6 9.exf6 Nxf6
  - FEN: `rnb1k2r/ppp1p1bp/5np1/8/2P2P2/8/PP4PP/R1BNKBNR w KQkq - 0 10`
- `kid-5e5-f4-trap` (E70, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.e5 dxe5 6.dxe5 Qxd1+ 7.Kxd1 Ng4 8.f4 Nf2+ 9.Ke1 Nxh1
  - FEN: `rnb1k2r/ppp1ppbp/6p1/4P3/2P2P2/2N5/PP4PP/R1B1KBNn w kq - 0 10`

- **What happens.** 5.e5?! dxe5 6.dxe5 Qxd1+ trades queens. White's best recapture is 7.Nxd1; then 7...Nfd7 attacks the lonely e5-pawn. After 8.f4 f6 9.exf6 Nxf6 White's centre has gone and Black is more comfortable.
- **The trap.** 7.Kxd1? is a mistake: 7...Ng4 hits e5 and eyes f2. If White defends e5 with 8.f4??, the knight jumps to f2 with check, forking the king on d1 and the rook on h1: 8...Nf2+ 9.Ke1 Nxh1. Black wins a whole rook for nothing (the engine confirms the knight on h1 is not trapped for good: Black stays winning).
- **Lesson for White.** Pushing e4–e5 before you've developed only creates a target.

### 4.4 Quiet set-ups beginners meet

- `kid-vs-e3` (E61, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.Nf3 O-O 5.e3 d6 6.Be2 Nbd7 7.O-O e5
  - FEN: `r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/2N1PN2/PP2BPPP/R1BQ1RK1 w - - 0 8`
- `kid-vs-london` (A48, popular): 1.d4 Nf6 2.Nf3 g6 3.Bf4 Bg7 4.e3 O-O 5.Be2 d6 6.h3 c5 7.c3
  - FEN: `rnbq1rk1/pp2ppbp/3p1np1/2p5/3P1B2/2P1PN1P/PP2BPP1/RN1QK2R b KQ - 0 7`

- **4.Nf3 O-O 5.e3 (Semi-Classical).** White plays a calm e3 instead of e4. Black's plan doesn't change: ...d6, ...Nbd7 and ...e5 (or ...c5). Black is comfortable because White's centre is smaller.
- **The London System (1.d4 Nf6 2.Nf3 g6 3.Bf4).** No c4 at all. The King's Indian set-up still works well: ...Bg7, ...O-O, ...d6 and then a central break with ...c5 (as here) or ...Nbd7 and ...e5. White's h3 gives the f4-bishop a retreat on h2; without it, ...Nh5 can chase the bishop (after Bg5 h6 Bh4 g5 White has to give up the bishop pair or retreat awkwardly). The engine rates both versions as equal.

---

## 5. Classical Variation: 5.Nf3 O-O 6.Be2 e5 (E91–E92)

- `classical-6be2` (E91, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ - 3 6`
- `classical-6e5` (E92, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5
  - FEN: `rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ - 0 7`

**Status: popular.** The Classical (lichess: "Orthodox") is the main battleground at every level. White develops naturally, Black strikes with ...e5.

- **Why ...e5 doesn't just lose a pawn.** After 6...e5 the pawn on e5 is attacked twice (d4-pawn, f3-knight) and defended once (d6-pawn). But 7.dxe5 dxe5 opens the d-file and the e4-pawn becomes loose: if the knight takes on e5, Black's knight takes on e4 and the g7-bishop recaptures on e5 (see the lines below). This is the first and most important tactical idea of the opening.
- **White's 7th moves.** 7.O-O (main line, §6), 7.dxe5 (Exchange, §5.1), 7.Be3 (Gligorić, §5.2), 7.d5 (Petrosian, §5.3).

### 5.1 7.dxe5: the Exchange Variation and why Nxe5 wins nothing

- `classical-8nxe5` (E92, dubious): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5 8.Nxe5 Qxd1+ 9.Bxd1 Nxe4 10.Nxe4 Bxe5
  - FEN: `rnb2rk1/ppp2p1p/6p1/4b3/2P1N3/8/PP3PPP/R1BBK2R w KQ - 0 11`
- `exchange-7dxe5` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5 8.Qxd8 Rxd8
  - FEN: `rnbr2k1/ppp2pbp/5np1/4p3/2P1P3/2N2N2/PP2BPPP/R1B1K2R w KQ - 0 9`
- `exchange-9bg5` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Bg5 Re8 10.Nd5 Nxd5 11.cxd5 c6 12.Bc4 cxd5 13.Bxd5 Nd7
  - FEN: `r1b1r1k1/pp1n1pbp/6p1/3Bp1B1/4P3/5N2/PP3PPP/R3K2R w KQ - 1 14`
- `exchange-9nxe5` (E92, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nxe5 Nxe4 10.Nxe4 Bxe5
  - FEN: `rnbr2k1/ppp2p1p/6p1/4b3/2P1N3/8/PP2BPPP/R1B1K2R w KQ - 0 11`
- `exchange-9nxe5-10f4-trap` (E92, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nxe5 Nxe4 10.f4 Nxc3 11.bxc3 Nd7 12.Be3 Nxe5 13.fxe5 Bxe5
  - FEN: `r1br2k1/ppp2p1p/6p1/4b3/2P5/2P1B3/P3B1PP/R3K2R w KQ - 0 14`
- `exchange-9nc6-trap` (E92, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Bg5 Nc6 10.Nd5 Rd6 11.Bxf6 Bxf6 12.c5 Rxd5 13.exd5
  - FEN: `r1b3k1/ppp2p1p/2n2bp1/2PPp3/8/5N2/PP2BPPP/R3K2R b KQ - 0 13`

- **With queens on, 8.Nxe5?!** 7.dxe5 dxe5 8.Nxe5?! Qxd1+ 9.Bxd1 Nxe4! 10.Nxe4 Bxe5. Material is level again and Black's pieces are active; the engine prefers Black slightly. (8...Nxe4 first also works, but 8...Qxd1+ is the most accurate.)
- **The Exchange proper: 8.Qxd8 Rxd8.** White trades queens hoping for a small endgame edge. The position is level and quiet; club players use it to avoid theory.
  - **9.Bg5** pins the f6-knight to the d8-rook. Black's best answer is to unpin with **9...Re8**. After 10.Nd5 Nxd5 11.cxd5 c6 12.Bc4 cxd5 13.Bxd5 Nd7 the game is equal.
  - **9.Nxe5 Nxe4!** is often presented as a trap, but it isn't one. After 10.Nxe4 Bxe5 material is level and the position is equal. 9.Nxe5 only loses if White keeps going wrong.
  - **The real trap: 10.f4?** Defending the e5-knight with a pawn looks natural, but 10...Nxc3! 11.bxc3 Nd7 12.Be3 Nxe5 13.fxe5 Bxe5 wins a pawn, and White's queenside pawns are broken (c3 and c4 are doubled and isolated, and ...Bxc3+ is coming). The engine judges Black much better. (10.Bf4? Nxc3! is just as bad for White.)
  - **White's trap: 9.Bg5 Nc6?** Black develops but leaves the pinned f6-knight and the c7-pawn without help. 10.Nd5! threatens Bxf6 and Nxc7. After 10...Rd6 11.Bxf6 Bxf6 12.c5! the rook is attacked; Black has to give it up with 12...Rxd5 13.exd5. White has won the exchange (a rook for a knight). The other defences also lose material (10...Nxd5 11.cxd5 drops a pawn at least).
- **Difficulty 1–2.** The ideas (loose pieces on the e-file, pins on the d-file) are perfect for beginners.

### 5.2 7.Be3: the Gligorić System

- `gligoric-7be3` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3
  - FEN: `rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BN2/PP2BPPP/R2QK2R b KQ - 1 7`
- `gligoric-7be3-ng4` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3 Ng4 8.Bg5 f6 9.Bh4 Nc6 10.d5 Ne7 11.Nd2
  - FEN: `r1bq1rk1/ppp1n1bp/3p1pp1/3Pp3/2P1P1nB/2N5/PP1NBPPP/R2QK2R b KQ - 2 11`
- `gligoric-7be3-ng4-g5` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3 Ng4 8.Bg5 f6 9.Bh4 g5 10.Bg3 Nh6
  - FEN: `rnbq1rk1/ppp3bp/3p1p1n/4p1p1/2PPP3/2N2NB1/PP2BPPP/R2QK2R w KQ - 2 11`
- `gligoric-7be3-ng4-9bc1` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3 Ng4 8.Bg5 f6 9.Bc1
  - FEN: `rnbq1rk1/ppp3bp/3p1pp1/4p3/2PPP1n1/2N2N2/PP2BPPP/R1BQK2R b KQ - 1 9`
- `gligoric-7be3-exd4` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3 exd4 8.Nxd4 Re8 9.f3 c6 10.Qd2 d5 11.exd5 cxd5 12.O-O Nc6
  - FEN: `r1bqr1k1/pp3pbp/2n2np1/3p4/2PN4/2N1BP2/PP1QB1PP/R4RK1 w - - 2 13`
- `gligoric-7be3-na6` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3 Na6 8.O-O Ng4 9.Bg5 Qe8 10.dxe5 dxe5 11.h3 h6 12.Bd2 Nf6
  - FEN: `r1b1qrk1/ppp2pb1/n4npp/4p3/2P1P3/2N2N1P/PP1BBPP1/R2Q1RK1 w - - 2 13`
- `gligoric-7be3-c6` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3 c6 8.d5 Ng4 9.Bg5 f6 10.Bh4 c5
  - FEN: `rnbq1rk1/pp4bp/3p1pp1/2pPp3/2P1P1nB/2N2N2/PP2BPPP/R2QK2R w KQ - 0 11`
- `gligoric-7be3-h6` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.Be3 h6 8.O-O Ng4 9.Bc1 Nc6 10.d5 Ne7
  - FEN: `r1bq1rk1/ppp1npb1/3p2pp/3Pp3/2P1P1n1/2N2N2/PP2BPPP/R1BQ1RK1 w - - 1 11`

**Status: respectable** (about one game in ten after 6...e5 at master level; it was Karpov's weapon against Kasparov in 1990). White develops the bishop before castling and keeps the option of dxe5 or d5. Because White's king hasn't castled yet, Black's usual ...f5–f4 and ...g4 storm has no fixed target (Semkov & Krykun). lichess calls it the "Gligoric-Taimanov System".

- **7...Ng4!?** The point of the Gligorić: the knight hits the e3-bishop. 8.Bg5 f6 and the bishop must decide:
  - 9.Bh4 keeps the bishop on the h4–d8 diagonal; Black continues 9...Nc6 10.d5 Ne7 11.Nd2, or kicks the bishop with 9...g5 10.Bg3 Nh6 (the knight reroutes towards f7).
  - 9.Bc1 retreats the bishop to safety and keeps it for later. The engine rates 9.Bc1 as equal.
- **7...exd4 8.Nxd4 Re8** puts pressure on e4. 9.f3 defends solidly; after 9...c6 10.Qd2 d5! Black frees the game: 11.exd5 cxd5 12.O-O Nc6. The engine calls this equal.
- **7...Na6** (a popular modern answer, also used against 7.O-O): 8.O-O Ng4 9.Bg5 Qe8! unpins and keeps the e5-pawn defended. After 10.dxe5 dxe5 11.h3 h6 12.Bd2 Nf6 the knight returns, and the position is roughly level.
- **7...c6** and **7...h6** are solid alternatives; 7...h6 prepares ...Ng4 without being hit by Bg5.
- **Typical mistake.** After 7...Ng4 8.Bg5, Black must not leave the f6/d8 pin and the e5-pawn hanging; ...f6 or (with ...Na6) ...Qe8 are the standard answers.
- **Difficulty 3.**

### 5.3 7.d5: the Petrosian System

- `petrosian-7d5` (E92, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5
  - FEN: `rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ - 0 7`
- `petrosian-7d5-a5` (E92, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5 a5 8.Bg5 h6 9.Bh4 Na6 10.Nd2 Qe8 11.O-O Nh7
  - FEN: `r1b1qrk1/1pp2pbn/n2p2pp/p2Pp3/2P1P2B/2N5/PP1NBPPP/R2Q1RK1 w - - 6 12`
- `petrosian-7d5-nbd7` (E93, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.d5 Nbd7 8.Bg5 h6 9.Bh4 g5 10.Bg3 Nh5 11.h4 g4
  - FEN: `r1bq1rk1/pppn1pb1/3p3p/3Pp2n/2P1P1pP/2N2NB1/PP2BPP1/R2QK2R w KQ - 0 12`

**Status: popular** (about a fifth of master games after 6...e5, and the most common reply of all among online beginners). Named after Tigran Petrosian; Kramnik played it extensively in the 1990s (Wikipedia). White closes the centre at once and plans Bg5 to pin the f6-knight, which slows down ...f5.

- **7...a5** (lichess: "Stein Defense"): ...a5 stops b2–b4 and gives the knight the c5-square via a6. After 8.Bg5 h6 9.Bh4 Na6 10.Nd2 Qe8 11.O-O Nh7 Black has unpinned (Qe8, Nh7) and is ready for ...f5.
- **7...Nbd7 8.Bg5 h6 9.Bh4 g5 10.Bg3 Nh5** (lichess: "Keres Defense"): Black kicks the bishop and jumps ...Nh5 to hunt it (...Nxg3 wins the bishop pair, or ...Nf4 lands on a great square). 11.h4 hits back at g5, and 11...g4 keeps the files closed. The engine rates it as equal.
- **Plans.** White: Nd2, b4/c5 or a3/b4 on the queenside. Black: ...Na6–c5, ...Nh7 or ...Ne8, ...f5.
- **Difficulty 3.**

---

## 6. The main line: 7.O-O (E94–E97)

- `classical-7oo` (E94, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O
  - FEN: `rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b - - 1 7`
- `classical-7oo-nc6` (E97, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6
  - FEN: `r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 2 8`
- `classical-8d5-ne7` (E97, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7
  - FEN: `r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 1 9`

**Status: popular.** 7.O-O Nc6 8.d5 Ne7 is the classical tabiya (lichess: "Aronin–Taimanov Defense" for 7...Nc6). Black's knight goes to e7 so that the f-pawn can advance and the knight can later swing to g6.

### 6.1 Pawn chains and "attack where your pawns point"

After 8.d5 the centre is locked. White's pawn chain runs c4–d5–e4; Black's runs d6–e5 (and later f5/f4).

- **The rule.** A pawn chain points towards one side of the board. Attack on that side, because that is where you have more space. White's chain points to the **queenside**, so White attacks there with c4–c5, b2–b4 and a2–a4. Black's chain (d6–e5) points to the **kingside**, so Black attacks there with ...f5, ...f4, ...g5 and ...g4.
- **The base of the chain.** Each side aims at the other's base: White's c4–c5 hits Black's d6-pawn; Black's ...f5 (and later ...f4–f3 or ...g4) hits White's e4/f3 base.
- **Why it's a race.** Both sides attack where they are stronger, so the game becomes a race: White breaks through on the queenside (the c-file, the c7-square), Black builds a mating attack against the king. Kotronias puts it this way: "Black is playing for higher stakes as his own pawn chain points directly at the white king." Black's attack can win even after White has won material on the queenside (Piket–Kasparov, §16).

### 6.2 Black's 7th-move alternatives and 8th-move sidelines

- `classical-7oo-exd4` (E94, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O exd4 8.Nxd4 Re8 9.f3 c6
  - FEN: `rnbqr1k1/pp3pbp/2pp1np1/8/2PNP3/2N2P2/PP2B1PP/R1BQ1RK1 w - - 0 10`
- `classical-7oo-exd4-qc2-trap` (E94, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O exd4 8.Nxd4 Re8 9.Qc2 Nxe4 10.Nxe4 Bxd4
  - FEN: `rnbqr1k1/ppp2p1p/3p2p1/8/2PbN3/8/PPQ1BPPP/R1B2RK1 w - - 0 11`
- `classical-7oo-na6` (E94, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Na6 8.Be3 Ng4 9.Bg5 Qe8 10.dxe5 dxe5 11.h3 h6 12.Bd2 Nf6
  - FEN: `r1b1qrk1/ppp2pb1/n4npp/4p3/2P1P3/2N2N1P/PP1BBPP1/R2Q1RK1 w - - 2 13`
- `classical-7oo-nbd7` (E96, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nbd7 8.Re1 c6 9.Bf1 a5
  - FEN: `r1bq1rk1/1p1n1pbp/2pp1np1/p3p3/2PPP3/2N2N2/PP3PPP/R1BQRBK1 w - - 0 10`
- `classical-7oo-c6` (E94, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O c6
  - FEN: `rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 8`
- `classical-8d5-nd4` (E97, dubious): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Nd4 9.Nxd4 exd4 10.Qxd4 Nd7
  - FEN: `r1bq1rk1/pppn1pbp/3p2p1/3P4/2PQP3/2N5/PP2BPPP/R1B2RK1 w - - 1 11`
- `classical-8be3` (E97, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.Be3 Ng4 9.Bg5 f6 10.Bh4 g5 11.Bg3 Nh6
  - FEN: `r1bq1rk1/ppp3bp/2np1p1n/4p1p1/2PPP3/2N2NB1/PP2BPPP/R2Q1RK1 w - - 2 12`
- `classical-8dxe5` (E97, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.dxe5 dxe5 9.Qxd8 Rxd8 10.Bg5
  - FEN: `r1br2k1/ppp2pbp/2n2np1/4p1B1/2P1P3/2N2N2/PP2BPPP/R4RK1 b - - 1 10`

- **7...exd4 8.Nxd4 Re8 9.f3 c6** opens the long diagonal for the g7-bishop and puts pressure on e4. White holds e4 with f3 and keeps a space edge.
- **Trap: 9.Qc2?** The queen defends e4, but it has left the d4-knight. 9...Nxe4! 10.Nxe4 Bxd4 and Black has won a pawn. The e4-knight is also in an uncomfortable pin on the e-file (rook e8, knight e4, bishop e2). The engine confirms Black is clearly better.
- **7...Na6** (lichess: "Glek Defense"): the knight heads for c5 and keeps the c-pawn free. After 8.Be3 Ng4 9.Bg5 Qe8 10.dxe5 dxe5 11.h3 h6 12.Bd2 Nf6 the position is level. It is a popular modern alternative to 7...Nc6.
- **7...Nbd7 8.Re1 c6 9.Bf1 a5** (lichess: "Positional Defense, Main Line") is a solid, slower set-up.
- **7...c6** (lichess: "Donner Defense") is a flexible waiting move that keeps ...exd4 and ...d5 in reserve.
- **8.d5 Nd4?!** looks active, but 9.Nxd4 exd4 10.Qxd4 just wins a pawn. Black can only win it back by giving up the g7-bishop (...Nd7–c5, ...Bxc3), which is a bad trade. Status: dubious.
- **8.Be3** keeps the centre flexible: 8...Ng4 9.Bg5 f6 10.Bh4 g5 11.Bg3 Nh6 (the same ...Ng4/...f6/...g5 ideas as in the Gligorić).
- **8.dxe5** trades queens; it is harmless.

---

## 7. The Mar del Plata: 9.Ne1 Nd7 (E98–E99)

- `mdp-9ne1` (E98, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1
  - FEN: `r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 b - - 2 9`
- `mdp-9ne1-nd7` (E98, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7
  - FEN: `r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 w - - 3 10`
- `mdp-10f3-f5` (E99, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5
  - FEN: `r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N2P2/PP2B1PP/R1BQNRK1 w - - 0 11`
- `mdp-12-g5` (E99, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5 11.Be3 f4 12.Bf2 g5
  - FEN: `r1bq1rk1/pppnn1bp/3p4/3Pp1p1/2P1Pp2/2N2P2/PP2BBPP/R2QNRK1 w - - 0 13`

**Status: popular.** This is the most famous King's Indian battlefield. The name comes from the game Najdorf–Gligorić at the 16th Mar del Plata tournament in 1953, which Gligorić won (Wikipedia, "Mar del Plata chess tournament"; Kavalek in ChessBase). Gligorić used the plan twice there, against Najdorf and against Eliskases, and won both (Wikipedia, "Svetozar Gligorić"; *The Spectator*). Bronstein recalled that the line had been thought refuted after Taimanov's two White wins against it in the 1952 USSR Championship (quoted by Minev). lichess calls 7...Nc6 the "Aronin–Taimanov Defense" and 9.Ne1 the "Classical System"; Wikipedia uses "Mar del Plata Variation" for the whole 7...Nc6 8.d5 Ne7 main line.

- **Why 9.Ne1?** The knight goes to d3, where it supports c4–c5 and watches f4. It also frees the f-pawn for f2–f3, which blocks Black's kingside attack.
- **Why 9...Nd7?** The knight on f6 blocks Black's f-pawn. From d7 it lets ...f7–f5 happen at once, and it watches c5 (against White's c4–c5).
- **The standard sequence.** 10.f3 f5 11.Be3 f4 12.Bf2 g5. Black has gained space on the kingside: ...f4 gains space with tempo on the e3-bishop, and ...g5–g4 is the next lever. White's bishop on f2 eyes c5 and a7.
- **Black's piece manoeuvres.**
  - **...Ng6** (the e7-knight to g6): it supports ...g4 and the jump ...Nh4.
  - **...Rf7**: defends c7 along the seventh rank (the square White's knight wants), and can go to g7 to support ...g4.
  - **...Bf8**: the "bad" g7-bishop drops back to defend d6 when White opens the c-file.
  - **...Nf6** (the d7-knight returns) and **...h5**, preparing ...g4.
  - Black's typical sacrifices come later: ...g4 to open the g-file, and piece sacrifices on h3 or g2 to rip open White's king (see the model games in §16).
- **White's plans.** c4–c5 and cxd6 to open the c-file, Rc1, Nb5 aiming at c7 (and a7), Nd3, a2–a4–a5, b2–b4. White's king is defended by the f3-pawn, the f2-bishop and often Kh1 (in some lines g2–g4 blocks the kingside).
- **Difficulty 3–4.**

### 7.1 13th-move choices for White

- `mdp-13rc1` (E98, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5 11.Be3 f4 12.Bf2 g5 13.Rc1 Ng6 14.c5 Nxc5 15.b4 Na6 16.Nd3
  - FEN: `r1bq1rk1/ppp3bp/n2p2n1/3Pp1p1/1P2Pp2/2NN1P2/P3BBPP/2RQ1RK1 b - - 2 16`
- `mdp-13a4` (E99, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5 11.Be3 f4 12.Bf2 g5 13.a4 Ng6 14.a5 Rf7
  - FEN: `r1bq2k1/pppn1rbp/3p2n1/P2Pp1p1/2P1Pp2/2N2P2/1P2BBPP/R2QNRK1 w - - 1 15`
- `mdp-13nd3` (E99, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5 11.Be3 f4 12.Bf2 g5 13.Nd3 Nf6 14.c5 Ng6 15.Rc1 Rf7
  - FEN: `r1bq2k1/ppp2rbp/3p1nn1/2PPp1p1/4Pp2/2NN1P2/PP2BBPP/2RQ1RK1 w - - 3 16`
- `mdp-10be3` (E98, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Be3 f5 11.f3 f4 12.Bf2 g5
  - FEN: `r1bq1rk1/pppnn1bp/3p4/3Pp1p1/2P1Pp2/2N2P2/PP2BBPP/R2QNRK1 w - - 0 13`

- **13.Rc1 Ng6 14.c5** is the sharpest: after 14...Nxc5 15.b4 Na6 16.Nd3 White has given a pawn to open the queenside quickly (lichess files this under "Kozul Gambit"). The engine calls it equal.
- **13.a4 Ng6 14.a5 Rf7** gains queenside space first. The engine's most accurate answer to 13.a4 is 13...a5, stopping the a-pawn; after 13...Ng6 14.a5 Rf7 White is better. *(Added during course writing.)*
- **13.Nd3 Nf6 14.c5 Ng6 15.Rc1 Rf7**: the classic structure, close to the Taimanov–Najdorf game (§16).
- **10.Be3 f5 11.f3 f4 12.Bf2 g5** (lichess: "Neo-Classical Line") reaches the same position by a different move order.

### 7.2 10.Nd3: the old c4–c5 race and the c7 square

- `mdp-10nd3` (E98, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Nd3 f5 11.Bd2 Nf6 12.f3 f4 13.c5 g5 14.Rc1 Ng6 15.cxd6 cxd6 16.Nb5 Rf7 17.Qc2 Ne8 18.a4 h5 19.Nf2 Bf8 20.h3
  - FEN: `r1bqnbk1/pp3r2/3p2n1/1N1Pp1pp/P3Pp2/5P1P/1PQBBNP1/2R2RK1 b - - 0 20`
- `mdp-nb5-c7-trap` (E98, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Nd3 f5 11.Bd2 Nf6 12.f3 f4 13.c5 g5 14.Rc1 Ng6 15.cxd6 cxd6 16.Nb5 a6 17.Nc7
  - FEN: `r1bq1rk1/1pN3bp/p2p1nn1/3Pp1p1/4Pp2/3N1P2/PP1BB1PP/2RQ1RK1 b - - 1 17`

- **The race in pure form.** 10.Nd3 f5 11.Bd2 Nf6 12.f3 f4 13.c5 g5 14.Rc1 Ng6 15.cxd6 cxd6 16.Nb5 Rf7! 17.Qc2 Ne8 18.a4 h5 19.Nf2 Bf8 20.h3. White has opened the c-file and planted a knight on b5; Black has defended c7 twice (...Rf7, ...Ne8) and prepared ...g4 with ...h5 and ...Bf8. The engine rates the final position as equal.
- **The c7 trap.** If Black forgets the c7-square with 16...a6?, then 17.Nc7! The knight attacks the a8-rook and cannot be taken (the c1-rook guards it, so 17...Qxc7 18.Rxc7 just loses the queen for a knight). After 17...Rb8 White continues 18.Qb3, invading on the queenside and soon picking up the a6-pawn; the engine judges White much better. (If Black instead plays 17...Bd7?, 18.Nxa8 simply wins the exchange.)
- **Lesson for Black.** In the c-file race, ...Rf7 (and often ...Ne8) is not passive: it guards c7, the entry square.

### 7.3 11.g4: the Benko Attack

- `mdp-11g4` (E99, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.f3 f5 11.g4
  - FEN: `r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P1P1/2N2P2/PP2B2P/R1BQNRK1 b - - 0 11`

White plays g2–g4 to keep the kingside closed and to make the ...g5–g4 break hard to achieve (it does not stop ...f4, which is Black's best reply). It weakens White's own king, so it is rare.

---

## 8. The Bayonet Attack 9.b4 and other 9th moves (E97)

- `bayonet-9b4` (E97, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.b4
  - FEN: `r1bq1rk1/ppp1npbp/3p1np1/3Pp3/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1 b - - 0 9`
- `bayonet-9b4-nh5` (E97, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.b4 Nh5 10.Re1 f5 11.Ng5 Nf6 12.Bf3 c6
  - FEN: `r1bq1rk1/pp2n1bp/2pp1np1/3PppN1/1PP1P3/2N2B2/P4PPP/R1BQR1K1 w - - 0 13`
- `bayonet-9b4-nh5-nf4` (E97, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.b4 Nh5 10.Re1 Nf4 11.Bf1
  - FEN: `r1bq1rk1/ppp1npbp/3p2p1/3Pp3/1PP1Pn2/2N2N2/P4PPP/R1BQRBK1 b - - 4 11`
- `bayonet-10nxe5-trap` (E97, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.b4 Nh5 10.Nxe5 Bxe5
  - FEN: `r1bq1rk1/ppp1np1p/3p2p1/3Pb2n/1PP1P3/2N5/P3BPPP/R1BQ1RK1 w - - 0 11`
- `bayonet-9b4-a5` (E97, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.b4 a5 10.Ba3 axb4 11.Bxb4 Nd7 12.a4
  - FEN: `r1bq1rk1/1ppnnpbp/3p2p1/3Pp3/PBP1P3/2N2N2/4BPPP/R2Q1RK1 b - - 0 12`

**Status: popular.** In the Bayonet, White skips Ne1 and starts the queenside attack at once with b2–b4 and c4–c5. It became popular in the 1990s, with Kramnik as its most outstanding proponent (Matthias Wahls; Kavalek: "Kramnik's own weapon against the King's Indian has been the Bayonet Attack"). Kramnik–Kasparov, Novgorod 1997 (§16) was Kasparov's last classical King's Indian in the chessgames database. Wikipedia says Korchnoi introduced 9.b4 in the 1970s; that claim is uncited and could not be corroborated.

- **9...Nh5** is Black's main answer: the knight frees the f-pawn and eyes f4. 10.Re1 (lichess: "Sokolov's Line") f5 11.Ng5 Nf6 12.Bf3 c6. White's knight on g5 eyes e6; Black's ...c6 challenges d5.
- **10...Nf4 11.Bf1** is the "knight jump": the knight lands on f4 and hits e2 and d3. It looks great, but here White just retreats the bishop and the engine prefers White clearly. Status of 10...Nf4: respectable in older games, but the engine considers it inferior to 10...f5; use it to show the idea, not as a recommendation.
- **Trap: 10.Nxe5?? Bxe5!** White grabs the e5-pawn, perhaps counting on the e2-bishop's discovered attack on the h5-knight. That attack is no threat, because the g6-pawn protects h5: after 11.Bxh5 gxh5 Black simply takes back. So Black just recaptures the knight. 10...Bxe5 is strongest, and 10...dxe5 also wins a piece. White has given a knight for a pawn (11.Bxh5 gxh5 12.Qxh5 is only two pawns for the piece). The engine confirms Black is winning. *(Corrected during course writing: an earlier version said 10...dxe5 11.Bxh5 wins the knight back, which is false.)*
- **9...a5** fights b4 directly: 10.Ba3 axb4 11.Bxb4 Nd7 12.a4. White keeps queenside pressure; Black prepares ...f5.
- **Difficulty 4.**

### 8.1 9.Nd2, 9.Bd2 and 9.a4

- `classical-9nd2` (E97, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Nd2 a5 10.a3 Nd7 11.Rb1 f5 12.b4 Kh8 13.f3 Ng8
  - FEN: `r1bq1rnk/1ppn2bp/3p2p1/p2Ppp2/1PP1P3/P1N2P2/3NB1PP/1RBQ1RK1 w - - 1 14`
- `classical-9bd2` (E97, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Bd2 Nh5 10.g3 f5
  - FEN: `r1bq1rk1/ppp1n1bp/3p2p1/3Ppp1n/2P1P3/2N2NP1/PP1BBP1P/R2Q1RK1 w - - 0 11`
- `classical-9a4` (E97, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.a4 a5 10.Ne1 Nd7 11.Be3 f5 12.f3 f4 13.Bf2 g5
  - FEN: `r1bq1rk1/1ppnn1bp/3p4/p2Pp1p1/P1P1Pp2/2N2P2/1P2BBPP/R2QNRK1 w - - 0 14`

- **9.Nd2** (lichess: "Modern System"): the knight goes to c4 or b3 to support c4–c5. 9...a5 10.a3 Nd7 11.Rb1 f5 12.b4 Kh8 13.f3 Ng8: Black tucks the king into the corner and the e7-knight drops back to g8, where it defends and can return via f6.
- **9.Bd2** (lichess: "Korchnoi Attack"): 9...Nh5 10.g3 f5. White's g3 keeps the knight out of f4.
- **9.a4 a5** fixes the queenside before the usual plans (10.Ne1 Nd7 11.Be3 f5 12.f3 f4 13.Bf2 g5).

---

## 9. Other White 6th moves after 5.Nf3 O-O (E90–E91)

- `kid-6h3` (E90, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.h3 e5 7.d5 a5 8.Bg5 Na6
  - FEN: `r1bq1rk1/1pp2pbp/n2p1np1/p2Pp1B1/2P1P3/2N2N1P/PP3PP1/R2QKB1R w KQ - 2 9`
- `kid-6bg5` (E90, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Bg5 c5 7.d5 h6 8.Bf4 e6
  - FEN: `rnbq1rk1/pp3pb1/3ppnpp/2pP4/2P1PB2/2N2N2/PP3PPP/R2QKB1R w KQ - 0 9`
- `kid-6bg5-h6` (E90, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Bg5 h6 7.Bh4 g5 8.Bg3 Nh5
  - FEN: `rnbq1rk1/ppp1ppb1/3p3p/6pn/2PPP3/2N2NB1/PP3PPP/R2QKB1R w KQ - 2 9`
- `kid-6be3` (E90, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be3 Ng4 7.Bg5 h6 8.Bh4 c5
  - FEN: `rnbq1rk1/pp2ppb1/3p2pp/2p5/2PPP1nB/2N2N2/PP3PPP/R2QKB1R w KQ - 0 9`
- `classical-6c5-7oo` (E91, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 c5 7.O-O cxd4 8.Nxd4 Nc6 9.Be3 Bd7
  - FEN: `r2q1rk1/pp1bppbp/2np1np1/8/2PNP3/2N1B3/PP2BPPP/R2Q1RK1 w - - 3 10`
- `classical-6c5-7d5` (A76, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 c5 7.d5 e6 8.O-O exd5 9.cxd5 Re8
  - FEN: `rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 1 10`

- **6.h3** stops ...Ng4 and ...Bg4 and prepares Be3. Black plays 6...e5 7.d5 a5 8.Bg5 Na6, the same ideas as against the Petrosian.
- **6.Bg5** (lichess: "Zinnowitz Variation"; also called a Smyslov System when White plays Bg5 before e4, see [Naming conflicts](#naming-conflicts-and-corrections)). Black can hit back with 6...c5 7.d5 h6 8.Bf4 e6, or hunt the bishop with 6...h6 7.Bh4 g5 8.Bg3 Nh5 (the knight jump: ...Nxg3 next wins the bishop pair). The engine rates both as level.
- **6.Be3** (lichess: "Larsen Variation") allows 6...Ng4!, hitting the bishop at once: 7.Bg5 h6 8.Bh4 c5 gives Black active play, though the engine still gives White a small edge.
- **6.Be2 c5** is the ...c5 break instead of ...e5:
  - 7.O-O cxd4 8.Nxd4 Nc6 9.Be3 Bd7 is a Maróczy-type structure (White's c4/e4 pawns clamp d5), similar to the Sicilian Accelerated Dragon.
  - 7.d5 e6 8.O-O exd5 9.cxd5 Re8 transposes into the Modern Benoni (lichess: A76, "Classical Variation, Czerniak Defense").

---

## 10. The Sämisch Variation: 5.f3 (E80–E89)

- `samisch-5f3` (E80, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3
  - FEN: `rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq - 0 5`
- `samisch-6be3` (E81, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR b KQ - 2 6`

**Status: respectable** (rare at the top today, about 1% of master King's Indians in 2026, but 7% of games under 2000 and a long-time main line in theory). Named after Friedrich Sämisch, who developed it in the 1920s. 5.f3 defends e4 with a pawn, so Black's ...Nxe4 and ...Ng4 tricks disappear, and it prepares Be3, Qd2 and often O-O-O with a kingside pawn storm (g4, h4–h5).

- **The cost.** The knight can't go to f3 (it goes to e2), the kingside develops slowly, and the dark squares around White's king (g3, e3, the a7–g1 diagonal) are weakened.
- **White's attacking plan.** Be3, Qd2, Bh6 to trade Black's g7-bishop, O-O-O, h4–h5 and hxg6 to open the h-file. Without the g7-bishop Black's king is much weaker.
- **Black's counterplay.** ...c5 (a gambit on the dark squares), ...Nc6/...a6/...Rb8/...b5 (Panno, queenside counterattack), or ...e5 with ...Nh5 and ...f5.

### 10.1 6...e5: the Orthodox Sämisch

- `samisch-6e5` (E85, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5
  - FEN: `rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ - 0 7`
- `samisch-7d5-nh5` (E87, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.d5 Nh5 8.Qd2 Qh4+ 9.Bf2 Qe7 10.O-O-O f5
  - FEN: `rnb2rk1/ppp1q1bp/3p2p1/3Ppp1n/2P1P3/2N2P2/PP1Q1BPP/2KR1BNR w - - 0 11`
- `samisch-bronstein-sac` (E87, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.d5 Nh5 8.Qd2 Qh4+ 9.g3 Nxg3 10.Qf2 Nxf1 11.Qxh4 Nxe3 12.Ke2 Nxc4
  - FEN: `rnb2rk1/ppp2pbp/3p2p1/3Pp3/2n1P2Q/2N2P2/PP2K2P/R5NR w - - 0 13`
- `samisch-7d5-c6` (E88, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.d5 c6 8.Bd3 cxd5 9.cxd5 Nh5 10.Nge2 f5
  - FEN: `rnbq1rk1/pp4bp/3p2p1/3Ppp1n/4P3/2NBBP2/PP2N1PP/R2QK2R w KQ - 0 11`
- `samisch-7nge2-c6` (E86, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.Nge2 c6 8.Qd2 Nbd7 9.O-O-O a6 10.Kb1 b5
  - FEN: `r1bq1rk1/3n1pbp/p1pp1np1/1p2p3/2PPP3/2N1BP2/PP1QN1PP/1K1R1B1R w - - 0 11`
- `samisch-7nge2-exd4` (E85, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.Nge2 exd4 8.Nxd4 Nc6 9.Qd2 Nxd4 10.Bxd4 Be6
  - FEN: `r2q1rk1/ppp2pbp/3pbnp1/8/2PBP3/2N2P2/PP1Q2PP/R3KB1R w KQ - 1 11`
- `samisch-7dxe5` (E85, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 Nxd5 10.cxd5 c6
  - FEN: `rnbr2k1/pp3pbp/2p3p1/3Pp3/4P3/4BP2/PP4PP/R3KBNR w KQ - 0 11`

- **7.d5** closes the centre. 7...Nh5 prepares ...f5 and eyes f4; 8.Qd2 Qh4+ 9.Bf2 Qe7 10.O-O-O f5 is a typical position with castling on opposite sides. The engine prefers White here (the Sämisch is a dangerous weapon).
- **The Bronstein queen sacrifice.** 8...Qh4+ 9.g3 Nxg3!? 10.Qf2 Nxf1 11.Qxh4 Nxe3 12.Ke2 Nxc4 (12.Qf2 is stronger than 12.Ke2): Black has given the queen for two bishops and two pawns. It is spectacular, but the engine does **not** consider it a refutation of 9.g3: White stays somewhat better. It is a fun line to show, not a trap.
- **7...c6** challenges d5: 8.Bd3 cxd5 9.cxd5 Nh5 10.Nge2 f5.
- **7.Nge2** keeps the tension: 7...c6 8.Qd2 Nbd7 9.O-O-O a6 10.Kb1 b5 (both sides attack the other king), or 7...exd4 8.Nxd4 Nc6 9.Qd2 Nxd4 10.Bxd4 Be6.
- **7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5** is harmless: 9...Nxd5 10.cxd5 c6 and Black equalises.

### 10.2 6...c5: the Sämisch Gambit

- `samisch-gambit` (E81, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 c5
  - FEN: `rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ - 0 7`
- `samisch-gambit-accepted` (E81, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 c5 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6
  - FEN: `r1br2k1/pp2ppbp/2n2np1/2B5/2P1P3/2N2P2/PP4PP/R3KBNR w KQ - 1 10`
- `samisch-gambit-7nge2` (E81, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 c5 7.Nge2 Nc6 8.d5 Ne5 9.Ng3 e6
  - FEN: `r1bq1rk1/pp3pbp/3ppnp1/2pPn3/2P1P3/2N1BPN1/PP4PP/R2QKB1R w KQ - 0 10`
- `samisch-gambit-7d5` (A65, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 c5 7.d5 e6 8.Qd2 exd5 9.cxd5 a6
  - FEN: `rnbq1rk1/1p3pbp/p2p1np1/2pP4/4P3/2N1BP2/PP1Q2PP/R3KBNR w KQ - 0 10`

- **The idea.** ...c5 hits d4 when White's kingside is undeveloped. If White takes, the dark squares and the long diagonal open for the g7-bishop.
- **Accepted:** 7.dxc5 dxc5 8.Qxd8 Rxd8 9.Bxc5 Nc6. Black has given a pawn for quick development and pressure (…Nd7, …Bxc3+/…Bxb2 ideas). The engine rates it as equal; one strong try for White is 10.Nd5, after which 10...Nd7! hits the c5-bishop and keeps the balance (engine line).
- **Declined:** 7.Nge2 Nc6 8.d5 Ne5 9.Ng3 e6, or 7.d5 e6 8.Qd2 exd5 9.cxd5 a6 (a Benoni structure; lichess A65 "Benoni Defense: King's Pawn Line").

### 10.3 6...Nc6: the Panno Sämisch

- `samisch-panno` (E84, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 Nc6 7.Nge2 a6 8.Qd2 Rb8
  - FEN: `1rbq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP1QN1PP/R3KB1R w KQ - 2 9`
- `samisch-panno-9h4` (E84, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 Nc6 7.Nge2 a6 8.Qd2 Rb8 9.h4 h5
  - FEN: `1rbq1rk1/1pp1ppb1/p1np1np1/7p/2PPP2P/2N1BP2/PP1QN1P1/R3KB1R w KQ - 0 10`
- `samisch-panno-9nc1` (E84, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 Nc6 7.Nge2 a6 8.Qd2 Rb8 9.Nc1 e5 10.d5 Nd4
  - FEN: `1rbq1rk1/1pp2pbp/p2p1np1/3Pp3/2PnP3/2N1BP2/PP1Q2PP/R1N1KB1R w KQ - 1 11`

- **The idea.** ...Nc6, ...a6 and ...Rb8 prepare ...b5 to open lines against White's king if it castles queenside.
- 9.h4 h5 stops White's pawn storm at once. 9.Nc1 e5 10.d5 Nd4 puts the knight on a fine central square; White's Nc1 is heading for b3 or e2 to challenge it.

### 10.4 Other 6th moves, and White's Bh6 plan

- `samisch-6c6` (E81, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 c6 7.Bd3 a6
  - FEN: `rnbq1rk1/1p2ppbp/p1pp1np1/8/2PPP3/2NBBP2/PP4PP/R2QK1NR w KQ - 0 8`
- `samisch-6a6` (E81, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 a6 7.Qd2 c6 8.h4 h5
  - FEN: `rnbq1rk1/1p2ppb1/p1pp1np1/7p/2PPP2P/2N1BP2/PP1Q2P1/R3KBNR w KQ - 0 9`
- `samisch-bh6` (E81, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 a6 7.Qd2 c6 8.Bh6 e5 9.Bxg7 Kxg7
  - FEN: `rnbq1r2/1p3pkp/p1pp1np1/4p3/2PPP3/2N2P2/PP1Q2PP/R3KBNR w KQ - 0 10`
- `samisch-6b6` (E82, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 b6
  - FEN: `rnbq1rk1/p1p1ppbp/1p1p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ - 0 7`
- `samisch-6bg5` (E81, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Bg5 c5 7.d5 e6 8.Qd2 exd5 9.Nxd5
  - FEN: `rnbq1rk1/pp3pbp/3p1np1/2pN2B1/2P1P3/5P2/PP1Q2PP/R3KBNR b KQ - 0 9`
- `samisch-6nge2` (E81, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Nge2
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP2N1PP/R1BQKB1R b KQ - 2 6`

- **6...c6 7.Bd3 a6** (lichess: "Byrne Defense") and **6...a6 7.Qd2 c6** prepare ...b5. Against 8.h4, 8...h5 stops h4–h5 (8...c5 is about equally good).
- **The Bh6 plan.** 8.Bh6 e5 9.Bxg7 Kxg7: White trades Black's best defender. That is White's dream in the Sämisch; here Black has kept a solid centre, so the engine calls it equal. The lesson: Bh6 is not winning by itself. It becomes dangerous when White can also open the h-file with h4–h5, as in Bagirov–Gufeld (§16), so Black needs counterplay in time.
- **6...b6** (Double Fianchetto) is rare.
- **6.Bg5** (lichess: "Steiner Attack") and **6.Nge2** are White's sideline set-ups.

---

## 11. The Fianchetto Variation (E60–E69)

- `fianchetto` (E60, popular): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b - - 1 6`
- `fianchetto-panno` (E63, respectable): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O Nc6 7.Nc3 a6 8.d5 Na5 9.Nd2 c5 10.Qc2 Rb8 11.b3 b5 12.Bb2 bxc4 13.bxc4 Bh6
  - FEN: `1rbq1rk1/4pp1p/p2p1npb/n1pP4/2P5/2N3P1/PBQNPPBP/R4RK1 w - - 1 14`
- `fianchetto-panno-8h3` (E63, respectable): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O Nc6 7.Nc3 a6 8.h3 Rb8 9.Be3 b5 10.Nd2
  - FEN: `1rbq1rk1/2p1ppbp/p1np1np1/1p6/2PP4/2N1B1PP/PP1NPPB1/R2Q1RK1 b - - 1 10`
- `fianchetto-panno-9b4-trap` (E63, trap): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O Nc6 7.Nc3 a6 8.d5 Na5 9.b4 Nxc4 10.Qd3 Nb6
  - FEN: `r1bq1rk1/1pp1ppbp/pn1p1np1/3P4/1P6/2NQ1NP1/P3PPBP/R1B2RK1 w - - 2 11`
- `fianchetto-nbd7-e5` (E69, respectable): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O Nbd7 7.Nc3 e5 8.e4 c6 9.h3
  - FEN: `r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NPP/PP3PB1/R1BQ1RK1 b - - 0 9`
- `fianchetto-long` (E68, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.Nf3 d6 5.g3 O-O 6.Bg2 Nbd7 7.O-O e5 8.e4 Re8 9.h3 exd4 10.Nxd4 Nc5 11.Re1 a5
  - FEN: `r1bqr1k1/1pp2pbp/3p1np1/p1n5/2PNP3/2N3PP/PP3PB1/R1BQR1K1 w - - 0 12`
- `fianchetto-yugoslav` (E66, respectable): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O c5 7.Nc3 Nc6 8.d5 Na5 9.Nd2 a6 10.Qc2 Rb8 11.b3 b5 12.Bb2
  - FEN: `1rbq1rk1/4ppbp/p2p1np1/nppP4/2P5/1PN3P1/PBQNPPBP/R4RK1 b - - 1 12`
- `fianchetto-yugoslav-8dxc5` (E65, rare): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O c5 7.Nc3 Nc6 8.dxc5 dxc5
  - FEN: `r1bq1rk1/pp2ppbp/2n2np1/2p5/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 9`
- `fianchetto-c6-qa5` (E62, rare): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O c6 7.Nc3 Qa5
  - FEN: `rnb2rk1/pp2ppbp/2pp1np1/q7/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8`
- `fianchetto-c6-bf5` (E62, rare): 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O c6 7.Nc3 Bf5
  - FEN: `rn1q1rk1/pp2ppbp/2pp1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8`

**Status: popular** (about a fifth of all King's Indian games in 2026 TWIC data, at master and at club level; Wikipedia calls it "one of the most popular lines at the grandmaster level", and Korchnoi was once its main practitioner). White fianchettoes the king's bishop. The g2-bishop makes Black's usual kingside attack much harder, so Black chooses queenside or central play.

- **Panno (6...Nc6 7.Nc3 a6):** ...Rb8 and ...b5. After 8.d5 Na5 the knight looks odd on the rim, but it hits c4. 9.Nd2 c5 10.Qc2 Rb8 11.b3 b5 12.Bb2 bxc4 13.bxc4 Bh6 (lichess: "Donner Line") shows Black's play on the b-file and the h6–c1 diagonal. 8.h3 Rb8 9.Be3 b5 10.Nd2 (lichess: "Korchnoi Line") is the other main road.
- **Trap: 9.b4? Nxc4.** After 8.d5 Na5, kicking the knight with 9.b4? forgets that the c4-pawn is undefended. 9...Nxc4 wins a pawn; after 10.Qd3 Nb6 Black is simply a pawn up (the engine confirms all White tries leave Black clearly better).
- **Classical Fianchetto (6...Nbd7 7.Nc3 e5 8.e4):** a closed-centre fight. 8...c6 9.h3 (lichess: "Classical Main Line") or 8...Re8 9.h3 exd4 10.Nxd4 Nc5 11.Re1 a5 (lichess: "Long Variation"), where Black's knight on c5 and pressure on e4 balance White's space.
- **Yugoslav (6...c5):** Benoni-like. 7.Nc3 Nc6 8.d5 Na5 9.Nd2 a6 10.Qc2 Rb8 11.b3 b5 12.Bb2; or the drawish 8.dxc5 dxc5 (lichess: "Exchange Line").
- **6...c6** with 7...Qa5 (Kavalek) or 7...Bf5 (Larsen) aims for ...d5 or ...e5 later.

---

## 12. The Four Pawns Attack: 5.f4 (E76–E79)

- `four-pawns-5f4` (E76, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4
  - FEN: `rnbqk2r/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR b KQkq - 0 5`
- `four-pawns-6c5` (E76, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5
  - FEN: `rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPPP2/2N2N2/PP4PP/R1BQKB1R w KQ - 0 7`
- `four-pawns-9cxd5` (A68, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5
  - FEN: `rnbq1rk1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R b KQ - 0 9`

**Status: rare at the top** (0.5% of master King's Indians in 2026) but met more often at club level (about 3% under 2000). White builds the biggest possible centre (c4, d4, e4, f4) and hopes to crush Black with e4–e5. The cost: development and king safety lag behind.

- **Black's answer: strike at once with ...c5.** 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 reaches a Modern Benoni structure. lichess files 8.Be2 under E77 ("Four Pawns Attack, Normal Attack"), but the position after 9.cxd5 is identical to the Benoni Four Pawns Attack, so lichess gives it A68 ("Benoni Defense: Four Pawns Attack") and later positions A69.
- **The Benoni structure.** White has a central majority (e4/f4 against d6) and wants e4–e5. Black has a queenside majority (a/b/c against a/b), the e-file for the rook, and the long diagonal. Black's plans: ...Re8 (hits e4), ...b5, ...Bg4xf3 (to remove a defender of e5), ...Nbd7.

### 12.1 9th moves for Black and the tactics around e4

- `four-pawns-9re8-10e5` (A69, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 Re8 10.e5 dxe5 11.fxe5 Ng4 12.e6
  - FEN: `rnbqr1k1/pp3pbp/4P1p1/2pP4/6n1/2N2N2/PP2B1PP/R1BQK2R b KQ - 0 12`
- `four-pawns-9re8-10nd2` (A69, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 Re8 10.Nd2 Na6 11.O-O Nc7 12.a4 b6
  - FEN: `r1bqr1k1/p1n2pbp/1p1p1np1/2pP4/P3PP2/2N5/1P1NB1PP/R1BQ1RK1 w - - 0 13`
- `four-pawns-10oo-trap` (A69, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 Re8 10.O-O Nxe4 11.Nxe4 Rxe4 12.Bd3 Re8
  - FEN: `rnbqr1k1/pp3pbp/3p2p1/2pP4/5P2/3B1N2/PP4PP/R1BQ1RK1 w - - 2 13`
- `four-pawns-9nxe4-trap` (A68, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 Nxe4 10.Nxe4 Re8 11.Ng3
  - FEN: `rnbqr1k1/pp3pbp/3p2p1/2pP4/5P2/5NN1/PP2B1PP/R1BQK2R b KQ - 2 11`
- `four-pawns-9bg4` (A68, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 Bg4 10.O-O Nbd7 11.h3 Bxf3 12.Bxf3 Re8
  - FEN: `r2qr1k1/pp1n1pbp/3p1np1/2pP4/4PP2/2N2B1P/PP4P1/R1BQ1RK1 w - - 1 13`
- `four-pawns-9b5` (A68, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 b5 10.e5 dxe5 11.fxe5 Ng4 12.Bg5 Qb6 13.O-O c4+ 14.Kh1
  - FEN: `rnb2rk1/p4pbp/1q4p1/1p1PP1B1/2p3n1/2N2N2/PP2B1PP/R2Q1R1K b - - 1 14`
- `four-pawns-9b5-10bxb5` (A68, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5 b5 10.Bxb5 Nxe4 11.Nxe4 Qa5+ 12.Kf2 Qxb5 13.Nxd6 Qb6
  - FEN: `rnb2rk1/p4pbp/1q1N2p1/2pP4/5P2/5N2/PP3KPP/R1BQ3R w - - 1 14`

- **9...Re8** attacks e4 twice (rook and f6-knight) when it's defended only by the c3-knight. White must react:
  - 10.e5 dxe5 11.fxe5 Ng4 12.e6!: White sacrifices the e-pawn to open lines and make d5–d6 possible. Very sharp; the engine calls it balanced.
  - 10.Nd2 defends e4 calmly and heads for c4. 10...Na6 11.O-O Nc7 12.a4 b6: the knight goes to c7 to support ...b5, and ...b6 keeps the c5-pawn protected.
- **Trap for White: 10.O-O?** It forgets e4. 10...Nxe4! 11.Nxe4 Rxe4 12.Bd3 Re8 and Black is a clean pawn up (the engine judges Black clearly better).
- **Trap for Black: 9...Nxe4?** Here the pin is not real yet: 10.Nxe4 Re8 11.Ng3 and White is a piece up. The e4-knight could simply step away because the e2-bishop is defended. Lesson: count attackers and defenders, and check that a pin is real before relying on it.
- **9...Bg4** plans ...Bxf3 to weaken White's control of e5: 10.O-O Nbd7 11.h3 Bxf3 12.Bxf3 Re8.
- **9...b5** is a pawn sacrifice. 10.e5 dxe5 11.fxe5 Ng4 12.Bg5 Qb6 13.O-O c4+ 14.Kh1 is wild but balanced. 10.Bxb5 runs into the typical trick 10...Nxe4! 11.Nxe4 Qa5+, a fork of king and bishop: 12.Kf2 Qxb5 13.Nxd6 Qb6. Black has won the piece back, and White ends a pawn up, but Black's active pieces make it roughly equal.

### 12.2 Other Four Pawns lines

- `four-pawns-florentine` (E77, dubious): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.e5 Ne4 10.Nxd5
  - FEN: `rnbq1rk1/pp3pbp/3p2p1/2pNP3/2P1nP2/5N2/PP2B1PP/R1BQK2R b KQ - 0 10`
- `four-pawns-7be2` (E79, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.Be2 cxd4 8.Nxd4 Nc6 9.Be3
  - FEN: `r1bq1rk1/pp2ppbp/2np1np1/8/2PNPP2/2N1B3/PP2B1PP/R2QK2R b KQ - 2 9`
- `four-pawns-6na6` (E76, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 Na6 7.Be2 e5 8.fxe5 dxe5 9.d5 Nc5
  - FEN: `r1bq1rk1/ppp2pbp/5np1/2nPp3/2P1P3/2N2N2/PP2B1PP/R1BQK2R w KQ - 1 10`
- `four-pawns-6na6-qc2` (E76, dubious): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 Na6 7.Be2 e5 8.fxe5 dxe5 9.d5 Nc5 10.Qc2 Nfxe4 11.Nxe4 Bf5 12.Bd3 Bxe4 13.Bxe4 f5
  - FEN: `r2q1rk1/ppp3bp/6p1/2nPpp2/2P1B3/5N2/PPQ3PP/R1B1K2R w KQ - 0 14`
- `four-pawns-6e5` (E76, dubious): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.e5 dxe5 7.fxe5 Nfd7
  - FEN: `rnbq1rk1/pppnppbp/6p1/4P3/2PP4/2N5/PP4PP/R1BQKBNR w KQ - 1 8`

- **9.e5 (Florentine Gambit)** instead of 9.cxd5: 9...Ne4! 10.Nxd5 and Black is at least equal (the engine prefers Black). Status: dubious.
- **7.Be2 cxd4 8.Nxd4 Nc6 9.Be3** (lichess: "Exchange Variation") avoids the Benoni and gives a Maróczy-like position.
- **6...Na6** is a modern alternative: 7.Be2 e5 8.fxe5 dxe5 9.d5 Nc5 and the knight hits e4. If White carelessly plays 10.Qc2?!, 10...Nfxe4! 11.Nxe4 Bf5! (pinning the knight to the queen) 12.Bd3 Bxe4 13.Bxe4 f5 wins the piece back: material is level, and the engine prefers Black.
- **6.e5?!** dxe5 7.fxe5 Nfd7: the e5-pawn is overextended and Black hits it with ...c5 and ...Nc6. The engine prefers Black.

---

## 13. The Averbakh Variation: 5.Be2 O-O 6.Bg5 (E73–E75)

- `averbakh` (E73, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Bg5
  - FEN: `rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR b KQ - 3 6`
- `averbakh-6c5` (E75, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Bg5 c5 7.d5 e6 8.Qd2 exd5 9.exd5 Re8 10.Nf3 Bg4 11.O-O Nbd7
  - FEN: `r2qr1k1/pp1n1pbp/3p1np1/2pP2B1/2P3b1/2N2N2/PP1QBPPP/R4RK1 w - - 5 12`
- `averbakh-6h6` (E73, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Bg5 h6 7.Be3 e5 8.d5 c6
  - FEN: `rnbq1rk1/pp3pb1/2pp1npp/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QK1NR w KQ - 0 9`
- `averbakh-6na6` (E73, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Bg5 Na6 7.Qd2 e5 8.d5 c6 9.f3 cxd5 10.cxd5
  - FEN: `r1bq1rk1/pp3pbp/n2p1np1/3Pp1B1/4P3/2N2P2/PP1QB1PP/R3K1NR b KQ - 0 10`
- `averbakh-6nbd7` (E73, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Bg5 Nbd7 7.Qd2 e5 8.d5 Nc5 9.f3 a5
  - FEN: `r1bq1rk1/1pp2pbp/3p1np1/p1nPp1B1/2P1P3/2N2P2/PP1QB1PP/R3K1NR w KQ - 0 10`
- `averbakh-6e5-trap` (E73, trap): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Bg5 e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 Nxd5 10.Bxd8
  - FEN: `rnbB2k1/ppp2pbp/6p1/3np3/2P1P3/8/PP2BPPP/R3K1NR b KQ - 0 10`
- `semi-averbakh-6be3` (E73, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Be3 c5 7.d5 e6
  - FEN: `rnbq1rk1/pp3pbp/3ppnp1/2pP4/2P1P3/2N1B3/PP2BPPP/R2QK1NR w KQ - 0 8`

**Status: respectable.** Named after Yuri Averbakh. The bishop on g5 stops ...e5 for the moment: if the e-pawn advances and the queens come off on d8, the bishop pins the f6-knight against the d8-rook (see the trap below). Black usually needs ...h6 (and sometimes ...g5) to shake the bishop off. White keeps the g1-knight flexible (Nf3, or f3 and Nge2).

- **The trap: 6...e5?** 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! The knight attacks the pinned f6-knight and the c7-pawn. Black loses material in every line: 9...Nxd5 10.Bxd8 (White has won the exchange, a rook for a knight; this is Black's best try), 9...Nbd7 10.Nxc7 (White wins the c7-pawn and the knight hits a8), 9...Rxd5 10.exd5 (the exchange again). The engine confirms White is clearly better in all of them. This is why Black prepares ...e5 with ...h6 (kicking the bishop first) or plays ...c5.
- **6...c5** (main line): 7.d5 e6 8.Qd2 exd5 9.exd5 Re8 10.Nf3 Bg4 11.O-O Nbd7. A Benoni-type structure where Black's pieces are active.
- **6...h6** (lichess: "Flexible Defense"): 7.Be3 e5 8.d5 c6. Kicking the bishop first means ...e5 is safe.
- **6...Na6** (lichess: "Modern Defense"): 7.Qd2 e5 8.d5 c6 9.f3 cxd5 10.cxd5. The knight goes to c5.
- **6...Nbd7** (lichess: "Geller Defense"): 7.Qd2 e5 8.d5 Nc5 9.f3 a5.
- **6.Be3 (Semi-Averbakh, lichess E73).** The bishop goes to e3 instead of g5. It is the most common 6th move after 5.Be2 O-O among 2000–2399 players in 2026 TWIC games. A sound answer is 6...c5 7.d5 e6, a Benoni structure (6...Na6 and 6...a5 are equally good, per the engine). Semkov & Krykun call the Be2/Be3 kingside-assault set-up with h4 "the trendy Riasantsev line".
- **Difficulty 2–3.**

---

## 14. Other White 5th moves (E70–E72)

- `makogonov-5h3` (E71, popular): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.h3 O-O 6.Be3 e5 7.d5 a5 8.g4 Na6
  - FEN: `r1bq1rk1/1pp2pbp/n2p1np1/p2Pp3/2P1P1P1/2N1B2P/PP3P2/R2QKBNR w KQ - 1 9`
- `makogonov-6bg5` (E71, respectable): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.h3 O-O 6.Bg5 c5 7.d5 e6 8.Bd3 exd5 9.cxd5
  - FEN: `rnbq1rk1/pp3pbp/3p1np1/2pP2B1/4P3/2NB3P/PP3PP1/R2QK1NR b KQ - 0 9`
- `kid-5bd3` (E70, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Bd3 O-O 6.Nge2 e5 7.d5 c6
  - FEN: `rnbq1rk1/pp3pbp/2pp1np1/3Pp3/2P1P3/2NB4/PP2NPPP/R1BQK2R w KQ - 0 8`
- `kid-5nge2` (E70, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nge2 O-O 6.Ng3 e5 7.d5 c6 8.Be2 cxd5 9.cxd5 a6
  - FEN: `rnbq1rk1/1p3pbp/p2p1np1/3Pp3/4P3/2N3N1/PP2BPPP/R1BQK2R w KQ - 0 10`
- `kid-5bg5` (E70, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Bg5 h6 6.Bh4 c5 7.d5 Qa5 8.Bd3
  - FEN: `rnb1k2r/pp2ppb1/3p1npp/q1pP4/2P1P2B/2NB4/PP3PPP/R2QK1NR b KQkq - 2 8`
- `kid-5g3` (E72, rare): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.g3 O-O 6.Bg2 e5 7.Nge2
  - FEN: `rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N3P1/PP2NPBP/R1BQK2R b KQ - 1 7`

- **5.h3 (Makogonov Variation).** h3 stops ...Ng4 and ...Bg4 and prepares Be3 and g4. lichess calls 5.h3 O-O 6.Be3 the "Karpov System". Lines: 6.Be3 e5 7.d5 a5 8.g4 Na6 (White grabs kingside space), or 6.Bg5 c5 7.d5 e6 8.Bd3 exd5 9.cxd5 (a Benoni-type structure). Status: popular (20% of White's 5th moves at 2400+ in 2026 TWIC games; after 5.h3 O-O, 6.Be3 is played almost always). Igor Stohl (ChessBase, 2020) says Kotronias named 6.Be3 after Karpov and that it was "attracting quite a lot of attention… from the 2700+ club", Caruana included.
- **5.Bd3** with 6.Nge2 keeps f2–f4 possible; 6...e5 7.d5 c6 is a normal answer.
- **5.Nge2 (Kramer)** with 6.Ng3 supports e4 and prepares f4 or h4. 6...e5 7.d5 c6 8.Be2 cxd5 9.cxd5 a6.
- **5.Bg5 (Accelerated Averbakh):** 5...h6 6.Bh4 c5 7.d5 Qa5 (pinning the c3-knight, the only defender of e4 at that moment) 8.Bd3, which protects e4 a second time. The engine rates the position as level.
- **5.g3 (Pomar System):** 5...O-O 6.Bg2 e5 7.Nge2, a fianchetto with e4.

---

## 15. Traps and typical tactics index

All traps below were checked with Stockfish at depth 20 (multipv 3). "Wins" means the engine confirms the material win holds up after the opponent's best defence.

| Line | Side that wins | What happens |
|---|---|---|
| `kid-5e5-f4-trap` | Black | 5.e5?! dxe5 6.dxe5 Qxd1+ 7.Kxd1? Ng4 8.f4?? Nf2+ forks king and rook; Black wins a rook. |
| `exchange-9nxe5-10f4-trap` | Black | 9.Nxe5 Nxe4 10.f4? Nxc3! wins a pawn and wrecks White's queenside. |
| `exchange-9nc6-trap` | White | 9.Bg5 Nc6? 10.Nd5! uses the pin on f6 and the c7 target; White wins the exchange. |
| `classical-7oo-exd4-qc2-trap` | Black | 9.Qc2? leaves the d4-knight; 9...Nxe4! 10.Nxe4 Bxd4 wins a pawn. |
| `mdp-nb5-c7-trap` | White | 16...a6? 17.Nc7! hits the a8-rook; White is much better and soon wins material. |
| `bayonet-10nxe5-trap` | Black | 10.Nxe5?? Bxe5! (or 10...dxe5): the g6-pawn guards h5, so the discovered attack on h5 is no threat; White has given a knight for a pawn. |
| `four-pawns-10oo-trap` | Black | 10.O-O? Nxe4! wins the e4-pawn. |
| `four-pawns-9nxe4-trap` | White | 9...Nxe4? 10.Nxe4 Re8 11.Ng3: the "pin" doesn't hold; White is a piece up. |
| `averbakh-6e5-trap` | White | 6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! wins material (the pin on f6). |
| `fianchetto-panno-9b4-trap` | Black | 8.d5 Na5 9.b4? Nxc4 wins a pawn. |

Typical tactics that are **not** traps (material stays level), but are worth teaching:

- **Winning back e5:** ...Nxe4 and ...Bxe5 regain the pawn (`exchange-9nxe5`, `classical-8nxe5`). Folklore calls 9.Nxe5 a blunder; it isn't, but it gains nothing.
- **Check-fork to regain a piece:** ...Nxe4 and ...Qa5+ fork king and bishop (`four-pawns-9b5-10bxb5`).
- **Pin against the queen:** ...Nxe4 and ...Bf5 pin the e4-knight to the c2-queen on the b1–h7 diagonal (`four-pawns-6na6-qc2`).
- **A sacrifice that isn't sound:** the ...Nxg3 queen sacrifice is spectacular but objectively not good enough (`samisch-bronstein-sac`).
- **Bishop hunt:** ...h6, ...g5 and ...Nh5 chase a bishop from g5 to h4 to g3 and win the bishop pair (`petrosian-7d5-nbd7`, `kid-6bg5-h6`).
- **A knight jump that drops a pawn:** 8...Nd4?! (`classical-8d5-nd4`).

---

## 16. Model games

All games below were **confirmed** against at least one reliable source (players, event, year, result and moves). The opening moves in each `model-*` line were copied from the chessgames.com PGN and replayed with chess.js. Where a second source was checked, it is named. Engine checks of the famous moments are noted.

### 16.1 Mar del Plata (Black's kingside attack)

- `model-najdorf-gligoric-1953` (E98, historical): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Nd3 f5 11.f3 f4 12.Bd2 Nf6 13.b4 g5 14.c5 h5 15.Nf2 Ng6 16.Rc1 Rf7 17.cxd6 cxd6 18.a4 Bf8 19.a5 Rg7 20.h3 Nh8
  - FEN: `r1bq1bkn/pp4r1/3p1n2/P2Pp1pp/1P2Pp2/2N2P1P/3BBNP1/2RQ1RK1 w - - 1 21`
- `model-taimanov-najdorf-1953` (E99, historical): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Be3 f5 11.f3 f4 12.Bf2 g5 13.Nd3 Nf6 14.c5 Ng6 15.Rc1 Rf7 16.Rc2 Bf8 17.cxd6 cxd6 18.Qd2 g4 19.Rfc1 g3 20.hxg3 fxg3
  - FEN: `r1bq1bk1/pp3r1p/3p1nn1/3Pp3/4P3/2NN1Pp1/PPRQBBP1/2R3K1 w - - 0 21`
- `model-piket-kasparov-1989` (E99, historical): 1.d4 Nf6 2.Nf3 g6 3.c4 Bg7 4.Nc3 O-O 5.e4 d6 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Be3 f5 11.f3 f4 12.Bf2 g5 13.b4 Nf6 14.c5 Ng6 15.cxd6 cxd6 16.Rc1 Rf7 17.a4 Bf8 18.a5 Bd7 19.Nb5 g4 20.Nc7 g3 21.Nxa8 Nh5 22.Kh1 gxf2 23.Rxf2 Ng3+ 24.Kg1 Qxa8 25.Bc4 a6 26.Qd3 Qa7 27.b5 axb5 28.Bxb5 Nh1
  - FEN: `5bk1/qp1b1r1p/3p2n1/PB1Pp3/4Pp2/3Q1P2/5RPP/2R1N1Kn w - - 1 29`

- **Najdorf–Gligorić, Mar del Plata 1953, 0-1 (48 moves).** Source of the variation's name (Wikipedia, "Mar del Plata chess tournament"; Kavalek in ChessBase). White chose 10.Nd3 and 13.b4/14.c5; Black answered with ...f5–f4, ...g5, ...h5, ...Ng6, ...Rf7, ...Bf8 and the regrouping ...Rg7 and ...Nh8. It shows most of the Black manoeuvres of §7 in one game.
- **Taimanov–Najdorf, Zurich Candidates 1953, round 4, 0-1 (43 moves).** It won the tournament's brilliancy prize (chess.com, ChessBase). After 18.Qd2 g4 19.Rfc1 g3 20.hxg3 fxg3 the f-file is half-open for the f7-rook (a White pawn still stands on f3) and the g3-pawn hits the f2-bishop, right next to White's king. The engine sees these as practical sacrifices rather than sound ones: it prefers preparing the break with ...Bd7 or ...h5, and after 19...g3 White can hold with 21.Bxg3. The model for "the ...g4 break".
- **Piket–Kasparov, Tilburg 1989, round 8, 0-1 (28 moves, complete line).** Game 56 in *Kasparov's Greatest Chess Games* vol. 1 (per chessgames). White carries out the queenside plan to perfection (19.Nb5, 20.Nc7, 21.Nxa8 wins the exchange), but Black's attack (...g4–g3, ...Nh5, ...gxf2, 23...Ng3+) comes first. Engine check: 24.hxg3? fxg3 leads to a forced mate, so 24.Kg1 was forced; the final 28...Nh1! attacks the f2-rook, and 29.Kxh1 Qxf2 wins it, so Black is winning.

### 16.2 Main line: 9.Nd2 and the Bayonet

- `model-gelfand-nakamura-2010` (E97, historical): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Nd2 Ne8 10.b4 f5 11.c5 Nf6 12.f3 f4 13.Nc4 g5 14.a4 Ng6 15.Ba3 Rf7 16.b5 dxc5 17.Bxc5 h5 18.a5 g4 19.b6 g3 20.Kh1 Bf8 21.d6 axb6 22.Bg1 Nh4 23.Re1 Nxg2 24.dxc7 Nxe1 25.Qxe1 g2+ 26.Kxg2 Rg7+ 27.Kh1 Bh3 28.Bf1 Qd3
  - FEN: `r4bk1/1pP3r1/1p3n2/P3p2p/2N1Pp2/2Nq1P1b/7P/R3QBBK w - - 5 29`
- `model-shirov-radjabov-2007` (E97, historical): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Be2 O-O 6.Nf3 e5 7.O-O Nc6 8.d5 Ne7 9.b4 Nh5 10.Re1 f5 11.Ng5 Nf6 12.f3 Kh8 13.Ne6 Bxe6 14.dxe6 Nh5 15.g3 Bf6 16.c5 f4 17.Kg2 Nc6 18.cxd6 cxd6 19.Nd5 Nd4 20.Bb2 Nxe6
  - FEN: `r2q1r1k/pp5p/3pnbp1/3Np2n/1P2Pp2/5PP1/PB2B1KP/R2QR3 w - - 0 21`
- `model-kramnik-kasparov-1997` (E97, historical): 1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.d4 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.b4 Nh5 10.Re1 Nf4 11.Bf1 a5 12.bxa5 Rxa5 13.Nd2 c5 14.a4 Ra6 15.Ra3 g5 16.g3 Nh3+ 17.Bxh3 Bxh3 18.Qh5 Qd7 19.Qxg5 h6 20.Qe3 f5
  - FEN: `5rk1/1p1qn1b1/r2p3p/2pPpp2/P1P1P3/R1N1Q1Pb/3N1P1P/2B1R1K1 w - - 0 21`
- `model-petrosian-gligoric-1970` (E97, historical): 1.c4 g6 2.Nf3 Bg7 3.d4 Nf6 4.Nc3 O-O 5.e4 d6 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.b4 Nh5 10.Nd2 Nf4 11.a4 f5 12.Bf3 g5 13.exf5 Nxf5 14.g3 Nd4 15.gxf4 Nxf3+ 16.Qxf3 g4 17.Qh1 exf4 18.Bb2 Bf5 19.Rfe1 f3 20.Nde4 Qh4
  - FEN: `r4rk1/ppp3bp/3p4/3P1b2/PPP1N1pq/2N2p2/1B3P1P/R3R1KQ w - - 2 21`

- **Gelfand–Nakamura, World Team Championship, Bursa 2010, round 5, 0-1 (33 moves).** TWIC called it "a spectacular brilliancy". 9.Nd2 Ne8 10.b4: a pure race. Black's ...g4–g3, ...Nh4xg2 and ...Bh3 end with 28...Qd3!, putting the queen en prise: engine check, 29.Bxd3?? Bg2 is mate. Wikipedia: Nakamura left his queen en prise for several moves because of the mate threat on g2.
- **Shirov–Radjabov, Corus Wijk aan Zee 2007, round 3, 0-1 (47 moves).** Bayonet with 9...Nh5 10.Re1 f5 11.Ng5 Nf6. One of the Radjabov wins that revived the King's Indian at the top (ChessBase, chess.com). Moves from chessgames only.
- **Kramnik–Kasparov, Novgorod 1997, round 5, 1-0 (32 moves).** Bayonet with 10...Nf4 11.Bf1 (reached via 1.Nf3). Kasparov's last classical King's Indian in the chessgames database; he gave up the opening after critical losses to Kramnik (Wikipedia). Date given as 15 June (chessgames) or 16 June 1997 (BusinessWorld); moves through 18...Qd7 cross-checked.
- **Petrosian–Gligorić, Zagreb 1970, 0-1 (33 moves).** Bayonet with 9...Nh5 10.Nd2 Nf4 (via 1.c4). Wikipedia calls it one of Gligorić's most famous games and says it "displays Gligorić's virtuosity on the Black side of the King's Indian". Cross-checked with Kavalek (ChessBase).

### 16.3 Sämisch

- `model-bagirov-gufeld-1973` (E84, historical): 1.d4 g6 2.c4 Bg7 3.Nc3 d6 4.e4 Nf6 5.f3 O-O 6.Be3 Nc6 7.Nge2 Rb8 8.Qd2 a6 9.Bh6 b5 10.h4 e5 11.Bxg7 Kxg7 12.h5 Kh8 13.Nd5 bxc4 14.hxg6 fxg6 15.Qh6 Nh5 16.g4 Rxb2 17.gxh5 g5 18.Rg1 g4 19.O-O-O Rxa2 20.Nef4 exf4 21.Nxf4 Rxf4 22.Qxf4 c3 23.Bc4 Ra3 24.fxg4 Nb4 25.Kb1 Be6 26.Bxe6 Nd3 27.Qf7 Qb8+ 28.Bb3 Rxb3+ 29.Kc2 Nb4+ 30.Kxb3 Nd5+ 31.Kc2 Qb2+ 32.Kd3 Qb5+
  - FEN: `7k/2p2Q1p/p2p4/1q1n3P/3PP1P1/2pK4/8/3R2R1 w - - 5 33`
- `model-karpov-kasparov-1990-g23` (E87, historical): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 O-O 6.Be3 e5 7.d5 Nh5 8.Qd2 Qh4+ 9.g3 Qe7 10.O-O-O f5 11.exf5 gxf5 12.Nh3 Na6 13.Rg1 Nf6 14.Nf2 Kh8 15.Be2 Bd7 16.Bg5 Nc5 17.g4 e4 18.fxe4 fxe4 19.Be3 Na4 20.g5 Nxc3 21.bxc3 Ng8 22.Ng4 c5 23.dxc6 Bxc6 24.h4 d5 25.cxd5 Bxd5 26.Qxd5 Rac8 27.Qd6 Rxc3+ 28.Kb1 Qf7 29.Bd4
  - FEN: `5rnk/pp3qbp/3Q4/6P1/3Bp1NP/2r5/P3B3/1K1R2R1 b - - 3 29`

- **Bagirov–Gufeld, USSR Championship semi-final, Kirovabad 1973, 0-1 (32 moves, complete line).** Gufeld's "Mona Lisa": he "sacrifices most of his pieces for a stunning checkmate" (Wikipedia). White plays the Sämisch attacking plan (9.Bh6, 10.h4, 11.Bxg7, 12.h5, 15.Qh6), Black counterattacks on the b-file. Moves confirmed by chessgames and Olimpbase; ChessBase notes the game is not in its Mega database, and Wikipedia calls the event the "USSR championship".
- **Karpov–Kasparov, World Championship 1990, game 23, 1-0 (29 moves, complete line).** 7.d5 Nh5 8.Qd2 Qh4+ 9.g3 Qe7 10.O-O-O f5: the opposite-castling Sämisch, won by White. Kasparov played the King's Indian in 8 of Karpov's 12 White games in that match (Wikipedia; chessgames).

### 16.4 Four Pawns, early e5/f4, and the Fianchetto

- `model-letelier-fischer-1960` (E70, historical): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 O-O 5.e5 Ne8 6.f4 d6 7.Be3 c5 8.dxc5 Nc6 9.cxd6 exd6 10.Ne4 Bf5 11.Ng3 Be6 12.Nf3 Qc7 13.Qb1 dxe5 14.f5 e4 15.fxe6 exf3 16.gxf3 f5 17.f4 Nf6 18.Be2 Rfe8 19.Kf2 Rxe6 20.Re1 Rae8 21.Bf3 Rxe3 22.Rxe3 Rxe3 23.Kxe3 Qxf4+
  - FEN: `6k1/pp4bp/2n2np1/5p2/2P2q2/4KBN1/PP5P/RQ6 w - - 0 24`
- `model-christiansen-kasparov-1982` (E76, historical): 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.dxe6 fxe6 9.Bd3 Nc6 10.O-O Nd4 11.Ng5 e5 12.f5 h6 13.Nh3 gxf5 14.exf5 b5 15.Be3 bxc4 16.Bxc4+ Kh8 17.Bxd4 cxd4 18.Nd5 Ba6 19.Nxf6 Bxc4 20.Nh5 Bxf1
  - FEN: `r2q1r1k/p5b1/3p3p/4pP1N/3p4/7N/PP4PP/R2Q1bK1 w - - 0 21`
- `model-zita-bronstein-1946` (E64, historical): 1.c4 e5 2.Nc3 Nf6 3.Nf3 d6 4.d4 Nbd7 5.g3 g6 6.Bg2 Bg7 7.O-O O-O 8.b3 Re8 9.Bb2 c6 10.e4 exd4 11.Nxd4 Qb6 12.Qd2 Nc5 13.Rfe1 a5 14.Rab1 a4 15.Ba1 axb3 16.axb3 Ng4 17.h3 Rxa1 18.Rxa1 Nxf2 19.Re3 Nxh3+ 20.Kh2 Nf2 21.Rf3 Ncxe4 22.Qf4 Ng4+ 23.Kh1 f5 24.Nxe4 Rxe4 25.Qxd6 Rxd4 26.Qb8 Rd8 27.Ra8 Be5 28.Qa7 Qb4 29.Qg1 Qf8 30.Bh3 Qh6
  - FEN: `R1br2k1/1p5p/2p3pq/4bp2/2P3n1/1P3RPB/8/6QK w - - 10 31`
- `model-ivanchuk-yusupov-1991` (E67, historical): 1.c4 e5 2.g3 d6 3.Bg2 g6 4.d4 Nd7 5.Nc3 Bg7 6.Nf3 Ngf6 7.O-O O-O 8.Qc2 Re8 9.Rd1 c6 10.b3 Qe7 11.Ba3 e4 12.Ng5 e3 13.f4 Nf8 14.b4 Bf5 15.Qb3 h6 16.Nf3 Ng4 17.b5 g5 18.bxc6 bxc6 19.Ne5 gxf4 20.Nxc6 Qg5
  - FEN: `r3rnk1/p4pb1/2Np3p/5bq1/2PP1pn1/BQN1p1P1/P3P1BP/R2R2K1 w - - 1 21`

- **Letelier–Fischer, Leipzig Olympiad 1960, round 8, 0-1 (23 moves, complete line).** Not a 4...d6 game: Fischer played 4...O-O and White pushed 5.e5 Ne8 6.f4. It ended with a queen sacrifice (ChessBase); Fischer included it in *My 60 Memorable Games* as "A Queen for the King" (mark-weeks.com). Engine check: after 23...Qxf4+, 24.Kxf4 Bh6 is mate, and other king moves lose heavily.
- **Christiansen–Kasparov, Moscow Interzonal 1982, round 7, 0-1 (40 moves).** Four Pawns with 8.dxe6 fxe6 (instead of 8.Be2). Confirmed (chessgames, 365chess), but only lightly sourced as "famous"; use it as an example, not as a celebrated classic.
- **Zita–Bronstein, Prague–Moscow match 1946, round 6, 0-1 (30 moves, complete line).** A Fianchetto structure reached by 1.c4 e5, with White's b3/Bb2 and e4. chess.com: it "inspired many and helped form the legend of the 'DSB'" (Black's dark-squared bishop). Moves from chessgames only. ECO E64 (chessgames); another source gives E68.
- **Ivanchuk–Yusupov, Candidates quarter-final, Brussels 1991, 0-1 (39 moves).** Fianchetto structure via 1.c4 e5 2.g3. Wikipedia: "Yusupov sacrifices most of his pieces, including a rook with check, to checkmate White on the kingside." Played as a rapid tie-break game (round 9, 24 August 1991). Moves from chessgames only.

### 16.5 Model-games index

| Game | Event / year | Variation | Result | Confirmed | Why it is instructive |
|---|---|---|---|---|---|
| Najdorf–Gligorić | Mar del Plata 1953 | Mar del Plata 10.Nd3 | 0-1 | yes (chessgames, ChessBase/Kavalek) | Origin of the name; every Black manoeuvre |
| Taimanov–Najdorf | Zurich Candidates 1953 | Mar del Plata 10.Be3 | 0-1 | yes (chessgames, lichess, gameknot, chess.com) | The ...g4–g3 break; brilliancy prize |
| Piket–Kasparov | Tilburg 1989 | Mar del Plata 13.b4 | 0-1 | yes (chessgames, lichess) | White wins the exchange, Black mates first |
| Gelfand–Nakamura | World Team Ch., Bursa 2010 | 9.Nd2 Ne8 10.b4 | 0-1 | yes (chessgames, TWIC) | Queen en prise because of Bg2# |
| Shirov–Radjabov | Corus 2007 | Bayonet 10.Re1 f5 11.Ng5 | 0-1 | yes (chessgames) | Modern Bayonet defence by Black |
| Kramnik–Kasparov | Novgorod 1997 | Bayonet 10...Nf4 | 1-0 | yes (chessgames, BusinessWorld) | White's queenside attack wins; Kasparov's last classical KID |
| Petrosian–Gligorić | Zagreb 1970 | Bayonet 10.Nd2 Nf4 | 0-1 | yes (Wikipedia, ChessBase/Kavalek) | Gligorić's Black virtuosity |
| Bagirov–Gufeld | Kirovabad 1973 | Sämisch, ...Nc6/...Rb8 | 0-1 | yes (chessgames, Olimpbase) | Bh6/h4–h5 attack met by a sacrificial counterattack |
| Karpov–Kasparov | WCh 1990, game 23 | Sämisch 7.d5 Nh5 | 1-0 | yes (chessgames, Wikipedia) | Opposite castling, White wins |
| Letelier–Fischer | Leipzig Olympiad 1960 | 4...O-O 5.e5 Ne8 6.f4 | 0-1 | yes (chessgames, ChessBase, mark-weeks) | Punishing an over-extended centre; queen sacrifice |
| Christiansen–Kasparov | Moscow Interzonal 1982 | Four Pawns 8.dxe6 | 0-1 | yes (chessgames, 365chess) | Four Pawns middlegame (lightly sourced as famous) |
| Zita–Bronstein | Prague–Moscow 1946 | Fianchetto structure | 0-1 | yes (chessgames) | The dark-squared bishop legend |
| Ivanchuk–Yusupov | Brussels 1991 (Candidates) | Fianchetto structure | 0-1 | yes (chessgames, Wikipedia) | Kingside mating attack against g3 |

**Checked but not to be used as King's Indian examples:**
- **R. Byrne–Fischer, US Championship 1963/64.** Wikipedia lists it among famous King's Indian games and chessgames codes it E60, but Black played 3...c6 and 4...d5, a Grünfeld-type structure. Don't teach it as a KID.
- **Kazhgaleyev–Radjabov, World Cup 2005 (rapid tie-break), 0-1.** Confirmed ("Teimour Radjabov's Immortal", ChessBase), but it is an offbeat 5.h4 line, not suitable for beginners.
- **Karpov–Kasparov 1990, games 1, 3, 5, 7, 11, 19, 21.** All King's Indians (Sämisch in 1 and 21; 7.Be3 in 3 and 7). Results: Karpov won game 7 (7.Be3 Na6); the others were drawn. Available as further examples; not turned into lines here.

---

## Naming conflicts and corrections

1. **Classical vs Orthodox.** Wikipedia's prose, 365chess and Bologan call 5.Nf3 O-O 6.Be2 e5 the **Classical Variation**. lichess calls 6.Be2, 6...e5 and 7.O-O all "Orthodox Variation" and keeps "Classical System" for 9.Ne1 only. Wikipedia's ECO list uses E92 "Classical" and E94 "Orthodox". This doc says "Classical" for the 6...e5 complex and quotes lichess names in place.
2. **Main line / Mar del Plata / Aronin–Taimanov.** Wikipedia: "the main line or Mar del Plata Variation" for 7.O-O Nc6 8.d5 Ne7; ECO E97 "Aronin–Taimanov (Yugoslav Attack / Mar del Plata)". lichess and 365chess: 7...Nc6 = "Aronin–Taimanov Defense". In this doc "Mar del Plata" means 9.Ne1 Nd7 and its branches. A blog says Taimanov's two 1952 wins were against Aronin and Bronstein, which may explain "Aronin–Taimanov", but no reputable source states the reason.
3. **Origin of "Mar del Plata".** It comes from **Najdorf–Gligorić, Mar del Plata 1953** (0-1), not from Taimanov–Najdorf (Zurich, later in 1953). One search snippet claimed Najdorf–Gligorić was drawn by perpetual check; chessgames and Kavalek both give 0-1. Sources also disagree on who first used the ...Rf7/...Bf8/...Rg7 manoeuvre: Wikipedia ("Pawn structure") credits Taimanov–Najdorf, Zurich 1953; Bronstein says it was "the system employed by Gligoric and Trifunovic at Mar del Plata".
4. **Who named it "King's Indian".** Réti (1930) attributed "King's Indian" and "Queen's Indian" to Hans Kmoch; Bologan credits Tartakower in the 1920s; Wikipedia's King's Indian article says the modern names "arose in the mid-twentieth century". Tartakower's 1924 book grouped today's King's Indian and Grünfeld under "Old Indian". No source was found for the common claim that Tartakower called the opening dubious; don't assert it.
5. **The first King's Indian game.** Bologan calls Schwarz–Paulsen, Leipzig 1879 "the very first King's Indian game which has come down to us", but the Cochrane–Moheschunder games of the 1850s are earlier (one transposes to a Four Pawns Attack).
6. **When Kasparov gave it up.** Wikipedia's King's Indian article says "the early 2000s"; Kasparov's own words say 1997; the chessgames database has no classical King's Indian by him as Black after Novgorod 1997. Some web pages say Kramnik played 9.b4 against Kasparov at Linares 1994; the PGN shows that game was the Petrosian line 7.d5 Nbd7 8.Bg5.
7. **Smyslov vs Zinnowitz.** lichess "Smyslov Variation" is 3.Nc3 Bg7 4.Nf3 d6 5.Bg5 (no e4, E61). With 4.e4 d6 5.Nf3 O-O 6.Bg5 it is the "Zinnowitz Variation" (E90; lichess, 365chess, Wikipedia). The original checklist's "6.Bg5 (Smyslov)" is therefore the Zinnowitz.
8. **7.Be3.** Wikipedia: "often known as the Gligorić System"; lichess and 365chess: "Gligoric-Taimanov System" (E92).
9. **7.dxe5.** Wikipedia and lichess: Exchange Variation; 365chess (E92): "Andersson variation".
10. **Glek.** lichess's "Glek Defense" is 7.O-O Na6. Wikipedia credits Glek with popularising 7...exd4 in the mid-1990s.
11. **Bayonet origin.** Wikipedia (uncited): Korchnoi introduced it in the 1970s. Wahls and Kavalek: popular from the 1990s with Kramnik as its leading exponent.
12. **Kozul Gambit.** lichess gives the name to the position after 13.Rc1 Ng6 14.c5 (reached from 10.Be3 or 10.f3). It is **White's** c-pawn sacrifice, named after the Croatian GM Zdenko Kožul (a chess.com user blog; moderate reliability).
13. **Panno (Sämisch).** lichess: 6...Nc6 alone = "Yates Defense"; 7.Nge2 a6 = "Panno Formation" (E83); 8.Qd2 Rb8 = "Panno Main Line" (E84); 7...Rb8 = "Ruban Variation". Wikipedia defines the Panno as the full line to 8...Rb8. Sämisch 6...e5: ECO and lichess "Orthodox Variation"; Wikipedia's prose "the Classical Defence to the Sämisch".
14. **"Modern" Four Pawns.** Wikipedia means 6...Na6; lichess "Modern Defense" means 5...Na6.
15. **Four Pawns ECO.** The ECO book (and lichess at move 8) files 8.Be2 under E77, but the position after 9.cxd5 is identical to the Benoni Four Pawns Attack, so lichess gives A68/A69 from there. The Florentine Gambit 9.e5 is E77 (lichess); 365chess gives a transposing order.
16. **Makogonov / Karpov System.** 5.h3 = Makogonov (E71; 365chess spells it "Makagonov"). lichess: 5.h3 O-O 6.Be3 = "Karpov System" (named by Kotronias, per Stohl).
17. **5.Nge2.** lichess and 365chess: "Kramer Variation". Wikipedia calls 5.Nge2 with 6.Ng3 the "Hungarian Attack". 5.Bd3 and 6.h3 have no ECO or lichess name.
18. **Fianchetto ECO.** lichess puts 3.Nf3 Bg7 4.g3 at E60; Wikipedia's list starts the Fianchetto Variation at E62 (with Nc3). The "Gallagher Variation" (...8.e4 exd4 9.Nxd4 Re8 10.h3 a6) appears only in Wikipedia's prose.
19. **Folklore corrected by the engine.**
    - "7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nxe5? Nxe4! wins for Black": **not true.** After 10.Nxe4 Bxe5 the position is equal. Only 10.f4? or 10.Bf4? lose material (`exchange-9nxe5-10f4-trap`).
    - "The Bronstein queen sacrifice (Sämisch 8...Qh4+ 9.g3 Nxg3) punishes 9.g3": **not true.** 9.g3 is White's best move and White stays better after the sacrifice.
    - "9...b5 10.Bxb5? is a blunder in the Four Pawns": **not quite.** 10...Nxe4 11.Nxe4 Qa5+ wins the piece back; White ends a pawn up, but the position is roughly equal.
    - "6...b6? in the Sämisch": the engine finds no refutation; it is just rare.
    - "Ne6 forks the queen and rook after Nb5–c7": not the point in `mdp-nb5-c7-trap`; the knight wins material by pressure on a8/a6 and the queenside, not by an immediate fork.
20. **Model games that are not what memory says.**
    - Zita–Bronstein 1946 is a Fianchetto structure reached by 1.c4 e5 (with b3/Bb2 and e4), not a 4.e4 main line.
    - Letelier–Fischer 1960 is 4...O-O 5.e5 Ne8 6.f4, not a 4...d6 game.
    - R. Byrne–Fischer, US Championship 1963/64 is listed as a famous King's Indian by Wikipedia, but Black played ...c6 and ...d5 (a Grünfeld-type structure). Don't teach it as a King's Indian.
21. **Spelling of names.** Bannerjee / Bonnerjee / Banerjee (Moheschunder, also Mahesh Chandra); Gligorić / Gligoric; Sämisch / Saemisch; Makogonov / Makagonov; Kožul / Kozul.

## Claims not fully confirmed (flagged on purpose)

- **Where the moves come from.** Every line starts from a position named in the lichess `chess-openings` dataset. The moves after the last lichess-named position were written from the author's knowledge of standard theory or chosen as the engine's top move, and then checked: every position was scanned with Stockfish 19 at depth 15 and at depth 20, and no move in a non-trap, non-dubious, non-historical line throws away more than about three quarters of a pawn, with one deliberate exception: 7.dxe5 in `samisch-7dxe5`, which gives away White's edge and is described as harmless. They were **not** all printed move by move in a fetched source. Lines that go more than two plies beyond the last lichess-named position (plies beyond in brackets): `kid-3nf3-order` (+5), `kid-2nf3-order` (+5), `kid-3g3-order` (+6), `semi-averbakh-6be3` (+3), `kid-4-oo-5e5` (+6), `kid-5e5` (+10), `kid-5e5-f4-trap` (+10), `kid-vs-e3` (+3), `kid-vs-london` (+3), `classical-8nxe5` (+7), `exchange-7dxe5` (+3), `exchange-9bg5` (+13), `exchange-9nxe5` (+7), `exchange-9nxe5-10f4-trap` (+13), `exchange-9nc6-trap` (+12), `gligoric-7be3-ng4` (+8), `gligoric-7be3-ng4-g5` (+7), `gligoric-7be3-ng4-9bc1` (+4), `gligoric-7be3-exd4` (+11), `gligoric-7be3-na6` (+11), `gligoric-7be3-c6` (+7), `gligoric-7be3-h6` (+7), `petrosian-7d5-a5` (+8), `classical-8d5-nd4` (+6), `classical-8be3` (+8), `classical-8dxe5` (+5), `classical-7oo-exd4` (+5), `classical-7oo-exd4-qc2-trap` (+7), `classical-7oo-na6` (+10), `mdp-12-g5` (+4), `mdp-13rc1` (+4), `mdp-13a4` (+8), `mdp-13nd3` (+10), `mdp-10be3` (+5), `mdp-10nd3` (+22), `mdp-nb5-c7-trap` (+16), `bayonet-9b4-nh5` (+5), `bayonet-9b4-a5` (+6), `bayonet-10nxe5-trap` (+3), `classical-9nd2` (+9), `classical-9bd2` (+3), `classical-9a4` (+12), `kid-6h3` (+7), `kid-6bg5` (+5), `kid-6bg5-h6` (+5), `kid-6be3` (+5), `classical-6c5-7oo` (+7), `samisch-7d5-nh5` (+7), `samisch-7d5-c6` (+6), `samisch-7nge2-c6` (+6), `samisch-7nge2-exd4` (+8), `samisch-7dxe5` (+8), `samisch-gambit-7nge2` (+6), `samisch-panno-9nc1` (+4), `samisch-6a6` (+6), `samisch-bh6` (+8), `four-pawns-6c5` (+3), `four-pawns-9re8-10e5` (+5), `four-pawns-9re8-10nd2` (+6), `four-pawns-9bg4` (+7), `four-pawns-9b5` (+10), `four-pawns-9b5-10bxb5` (+9), `four-pawns-10oo-trap` (+6), `four-pawns-9nxe4-trap` (+4), `four-pawns-6na6` (+9), `four-pawns-6na6-qc2` (+17), `four-pawns-6e5` (+5), `averbakh-6c5` (+8), `averbakh-6h6` (+4), `averbakh-6na6` (+7), `averbakh-6nbd7` (+6), `averbakh-6e5-trap` (+8), `fianchetto` (+4), `fianchetto-panno-9b4-trap` (+6), `fianchetto-yugoslav` (+8), `makogonov-5h3` (+5), `makogonov-6bg5` (+8), `kid-5bd3` (+6), `kid-5nge2` (+9), `kid-5bg5` (+6).
- **Constructed teaching lines.** The trap lines (`kid-5e5-f4-trap`, `exchange-9nxe5-10f4-trap`, `exchange-9nc6-trap`, `classical-7oo-exd4-qc2-trap`, `mdp-nb5-c7-trap`, `bayonet-10nxe5-trap`, `four-pawns-10oo-trap`, `four-pawns-9nxe4-trap`, `averbakh-6e5-trap`, `fianchetto-panno-9b4-trap`) and the illustrative lines `samisch-bh6`, `classical-8d5-nd4`, `four-pawns-6na6-qc2`, `kid-5e5` are constructed: the mistake is a plausible move, and the follow-up is the engine's best line (depth 20, multipv 3). They are not quotes from games.
- **Engine continuations used as theory.** `exchange-9bg5` (12...cxd5 13.Bxd5 Nd7 is one of two equal engine choices; 12...b5 is the other), `four-pawns-9re8-10e5` (12.e6 is the engine's choice), `four-pawns-9b5` (12...Qb6 13.O-O c4+ 14.Kh1), `four-pawns-9b5-10bxb5`, `four-pawns-florentine` (9...Ne4 10.Nxd5), `four-pawns-9re8-10nd2` (10...Na6 11.O-O Nc7 12.a4 b6, from memory and engine-checked), `samisch-6a6` (8.h4 h5), `samisch-gambit-accepted` (the 10.Nd5 Nd7 comment), `semi-averbakh-6be3`, `kid-5e5` (7.Nxd1 Nfd7 8.f4 f6), `gligoric-7be3-ng4-g5`.
- **Status labels** are qualitative. The lichess explorer returned 401; the percentages quoted come from a one-off count of TWIC games (May–October 2026) and from Chessiverse's secondary summary of the lichess explorer. The sub-2000 TWIC sample is small (about 200 games for White's 5th move).
- **History claims with a single or weak source.**
  - Kožul as the namesake of the Kozul Gambit (a chess.com user blog).
  - "Aronin–Taimanov" being named after Taimanov's 1952 wins (a blog; no reputable source).
  - Gligorić saying the variation should have been named after him (seen only in a search snippet; not used).
  - Korchnoi introducing the Bayonet in the 1970s (uncited on Wikipedia).
  - The Bologan, Collins, Kotronias, Semkov & Krykun and Pavlovic quotes come from publishers' sample PDFs, not the full books.
- **Model games with moves from one source only** (chessgames.com): Zita–Bronstein, Shirov–Radjabov, Christiansen–Kasparov, Ivanchuk–Yusupov. Bagirov–Gufeld is confirmed by two sources, but ChessBase notes it is missing from its Mega database and Wikipedia calls the event the "USSR championship" (chessgames: USSR Championship semi-final, Kirovabad). Kramnik–Kasparov 1997 is dated 15 June (chessgames) or 16 June (BusinessWorld).
- **Not found.** A famous White-win Sämisch game by Spassky or Petrosian; a famous Gligorić game as White with 7.Be3; a widely acclaimed Four Pawns classic (Christiansen–Kasparov is confirmed but only lightly sourced as famous); amateur statistics for White's 5th move (Chessiverse has no page for that position).

## Notes added during course writing

The course writers engine-checked every claim they used (Stockfish 19, depth 20 or more). These findings refine the lines above.

- **Bayonet trap (§8).** The explanation of 10.Nxe5?? was corrected: the g6-pawn guards h5, so the e2-bishop's discovered attack on h5 is no threat. 10...Bxe5 is strongest, and 10...dxe5 also wins a piece.
- **13.a4 in the Mar del Plata (§7.1).** Black's most accurate answer is 13...a5. After 13...Ng6 14.a5 Rf7, White is better.
- **Bayonet 9...a5.** The engine slightly prefers 10.bxa5 to 10.Ba3.
- **Moves that are good but not the engine's first choice.** These are shown in the course but never drilled or called best:
  - the old 10.Nd3 race (13.c5, 14.Rc1, 15.cxd6);
  - 11.Ng5 and 12.Bf3 in the Bayonet;
  - 16.g3 and 18.Qh5 in Kramnik–Kasparov.
- **Petrosian–Gligorić 1970.** 14.g3 was dubious, and 14...Nh3+ was stronger than 14...Nd4. The engine only prefers Black from about move 20.
- **`fianchetto-panno`.** 12...bxc4 is not the engine's first choice (12...e5 is), and the line ends with White better.
- **`kid-5nge2`.** The Kramer line ends with White clearly better after 9...a6.
- **`kid-5bg5`.** After 7...Qa5, 8.Bd3 is only the engine's fourth choice (8.f3 and 8.Qd2 are better). After 8.Bd3 the engine slightly prefers Black, and its top reply is still 8...Nxe4, so Bd3 does not rule out ...Nxe4 tactics. The course drills 8.f3.
- **Zita–Bronstein 1946.** White's a1-bishop never defended d4: White's own c3-knight blocks the diagonal. 17.h3? was the decisive mistake (17.Red1 holds), and 17...Rxa1 and 18...Nxf2 were Black's only good moves.
- **Mar del Plata details.** 9...Ne8 is a touch more accurate than 9...Nd7, but both are fine. In the old 10.Nd3 line (`mdp-10nd3`), 19...Bf8 and 20.h3 are not best play: 20.Nxa7 was stronger. The final position is still roughly equal.
- **Taimanov–Najdorf 1953.** The research's "!" marks on 18...g4 and 19...g3 were removed (see §16.1).
- **Mar del Plata model games.**
  - Gelfand–Nakamura: 23...Nxg2 is the engine's top move, and White's decisive mistake was 24.dxc7.
  - Piket–Kasparov: the mistake was 21.Nxa8, and 21.hxg3 would have kept the balance.
- **Sämisch.**
  - In `samisch-7nge2-c6`, 10.Kb1 gives away most of White's edge; 10.g4 is about 0.8 of a pawn better. This is a second exception to the "no move worse than about three quarters of a pawn" rule.
  - In `samisch-6c6`, 7.Qd2 is slightly more accurate than 7.Bd3.
  - 6...b6 rates about the same as 6...e5.
  - In the Bronstein sacrifice, 9...Nxg3 is only a little worse than 9...Qe7. 10.Qf2 and 11.Qxh4 are White's only good moves, and after 10.hxg3? only 10...Qxh1 works.
- **Bagirov–Gufeld 1973.** 16.g4? was a mistake (16.O-O-O first). The game was roughly level until 21.Nxf4?, and 21.Bxc4 would have held.
- **Karpov–Kasparov 1990, game 23.** 22...c5 and 24...d5 were mistakes; 24...d5 simply loses a piece.
- **Classical and Gligorić evaluations (§5.2, §6.2).**
  - The 7...Na6 lines end with White slightly better, not "roughly level".
  - The 7...c6 and 7...h6 lines end with White somewhat better.
- **The 9.Qc2? trap (§6.2).** The e2-bishop is defended by the c2-queen, so the pin there hardly matters. 9...Nxe4! 10.Nxe4 Bxd4 wins one clean pawn, and Black is clearly better. 10...Rxe4?? loses the rook to 11.Qxe4. The same trick fails against 7.Be3, because 11.Bxd4 leaves White a piece up.
- **Two more traps, both engine-confirmed:**
  - 5.Nf3 O-O 6.Bg5 e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! wins material: the Averbakh trick again.
  - Gligorić 7...h6 8.O-O Ng4 9.Bg5?? hxg5 loses the bishop. 9.Bd2? loses a pawn, and only 9.Bc1 is good.
- **Gligorić 7...Ng4.** 8.Bg5 is clearly White's best. 8...Qe8? loses to 9.Nd5, and 8...Bf6? drops the e5-pawn.
- **Four Pawns.**
  - After 9...b5 10.Bxb5 Nxe4 11.Nxe4 Qa5+ 12.Kf2 Qxb5 13.Nxd6 Qb6, White is a pawn up, but the position is roughly equal (corrected from "material is level").
  - After 9...Nxe4? 10.Nxe4 Re8, the reply 11.Bd3? f5! leaves Black much better; 11.Ng3 is the move.
  - In the 10.O-O? trap, 12.f5 and 12.Bd3 both leave Black clearly better.
  - After 10.Nd2, 10...Na6 and 11...Nc7 are good but not the engine's first choices.
- **Christiansen–Kasparov 1982.** 14...Qe8 is slightly more accurate than 14...b5. The turning point was 15.Be3?; 15.Nxb5 was White's only good move and keeps it roughly equal.
- **Letelier–Fischer 1960.**
  - The game was level until 10.Ne4? (10.Nf3 keeps the balance).
  - The decisive mistakes were 13.Qb1? (13.f5 was better) and 15.fxe6? (15.Qxe4 was better).
  - 19.O-O was better than 19.Kf2, and 14...gxf5 was better than 14...e4.
- **Averbakh.**
  - After 6...h6 7.Be3, the engine prefers 7...c5 to 7...e5.
  - In the 6...Na6 line, ...e5 is safe because 10.Nd5 is met by 10...Rd6!.
  - In the 6...c5 line, 8...h6? 9.Bxh6 wins a pawn.
  - In `averbakh-6nbd7`, 9...a5 is inaccurate, so the course stops that line at 9.f3.
- **Ivanchuk–Yusupov 1991.** 12...e3 was Black's only good move. 13.f4 was inaccurate; 13.f3 was better.

## Sources

- Wikipedia: [King's Indian Defence](https://en.wikipedia.org/wiki/King%27s_Indian_Defence), [Indian Defence](https://en.wikipedia.org/wiki/Indian_Defence), [Moheschunder Bannerjee](https://en.wikipedia.org/wiki/Moheschunder_Bannerjee), [Mar del Plata chess tournament](https://en.wikipedia.org/wiki/Mar_del_Plata_chess_tournament), [Svetozar Gligorić](https://en.wikipedia.org/wiki/Svetozar_Gligori%C4%87), [Pawn structure](https://en.wikipedia.org/wiki/Pawn_structure), [List of chess games between Kasparov and Kramnik](https://en.wikipedia.org/wiki/List_of_chess_games_between_Kasparov_and_Kramnik), [World Chess Championship 1990](https://en.wikipedia.org/wiki/World_Chess_Championship_1990)
- lichess opening names dataset (ECO + names, files `a.tsv`, `b.tsv`, `d.tsv`, `e.tsv`): [lichess-org/chess-openings](https://github.com/lichess-org/chess-openings)
- 365chess ECO pages: [E92 Classical](https://www.365chess.com/eco/E92_King's_Indian_classical_variation), [E92 Andersson](https://www.365chess.com/eco/E92_King's_Indian_Andersson_variation)
- Wikibooks: [4...d6 page](https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._d4/1...Nf6/2._c4/2...g6/3._Nc3/3...Bg7/4._e4/4...d6), [King's Indian Defence](https://en.wikibooks.org/wiki/Chess/King%27s_Indian_Defence)
- History: [Edward Winter, earliest occurrences](http://www.chesshistory.com/winter/extra/earliest.html); [Kavalek, "Winners win slowly" (ChessBase)](https://en.chessbase.com/post/kavalek-in-huffington-che-winners-win-slowly); [ChessBase Game of the Week 2019-27](https://en.chessbase.com/newsroom/post/the-game-of-the-week-2019-27?page=0); [Carlsen in the Bundesliga 2025 (chess.com)](https://www.chess.com/news/view/magnus-carlsen-st-pauli-chess-bundesliga); [The Spectator, "Mar del Plata"](https://spectator.com/article/mar-del-plata/); [chess.com, "Mar Del Plata"](https://www.chess.com/article/view/mar-del-plata)
- Book samples (publishers' PDFs): [Bologan, *King's Indian* (2017)](https://www.scacco.it/data/attachments/7336/bologan-kings-indian-chess-scacchi.pdf); [Minev on Najdorf](https://www.nwchess.com/minev/books/NajdorfPreview1-25.pdf); [Pavlovic, *The Modernized KID: Mar del Plata* (2022)](https://shop.chess-tigers.de/cdn/shop/files/MARDELPLATA.pdf); [Collins, *KID Move by Move* (2017)](https://www.newinchess.com/media/wysiwyg/product_pdf/7736.pdf); [Kotronias vol. 2 (2014)](https://www.newinchess.com/media/wysiwyg/product_pdf/7496.pdf); [Kotronias vol. 5 (2017)](https://www.newinchess.com/media/wysiwyg/product_pdf/7707.pdf); [Semkov & Krykun (2020)](https://www.newinchess.com/media/wysiwyg/product_pdf/8325.pdf)
- Theory and naming cross-checks: [Stohl, "A trendy system against the King's Indian" (ChessBase)](https://en.chessbase.com/post/a-trendy-system-against-the-king-s-indian); [Wahls on the Bayonet](https://matthias-wahls.com/?p=7350); [Kozul Gambit blog (chess.com)](https://www.chess.com/blog/colorfulcake/the-mar-del-plata-attack-the-kozul-gambit); [Grooten, "68 ideas in the King's Indian" (ChessBase)](https://en.chessbase.com/post/understanding-before-moving-68-ideas-in-the-king-s-indian); [Baumegger, Modern Chess](https://www.modern-chess.com/opening/kings-indian-defense/); [ChessBase, "The King's Indian reloaded"](https://en.chessbase.com/post/the-king-s-indian-reloaded)
- Popularity: [TWIC game files](https://theweekinchess.com/a-year-of-pgn-game-files) (issues 1645–1668, counted for this research); [Chessiverse, 6...e5 position](https://chessiverse.com/resources/openings/kings-indian-defence-1-d4-nf6-2-c4-g6-3-nc3-bg7-4-e4-d6-5-nf3-0-0-6-be2-e5)
- Model-game confirmation (chessgames.com game pages; PGNs from `nph-chesspgn?text=1&gid=<id>`):
  - Najdorf–Gligorić 1953: [chessgames 1101261](https://www.chessgames.com/perl/chessgame?gid=1101261), [Kavalek (ChessBase)](https://en.chessbase.com/news/2011/games/kavalek35g0.htm)
  - Taimanov–Najdorf 1953: [chessgames 1101288](https://www.chessgames.com/perl/chessgame?gid=1101288), [gameknot](https://gameknot.com/annotation.pl/taimanov-najdorf-zurich-1953?gm=11178), [chess.com](https://www.chess.com/article/view/there-is-nothing-new-under-the-sun)
  - Piket–Kasparov 1989: [chessgames 1070485](https://www.chessgames.com/perl/chessgame?gid=1070485)
  - Gelfand–Nakamura 2010: [chessgames 1567841](https://www.chessgames.com/perl/chessgame?gid=1567841), [TWIC](https://theweekinchess.com/chessnews/events/world-team-championship-2010/nakamura-brilliancy-beats-gelfand)
  - Shirov–Radjabov 2007: [chessgames 1444597](https://www.chessgames.com/perl/chessgame?gid=1444597), [chess.com](https://www.chess.com/news/view/the-kid-strikes-with-the-kid)
  - Kramnik–Kasparov 1997: [chessgames 1070932](https://www.chessgames.com/perl/chessgame?gid=1070932), [BusinessWorld](https://www.bworldonline.com/?p=258783)
  - Petrosian–Gligorić 1970: [Wikipedia, Gligorić](https://en.wikipedia.org/wiki/Svetozar_Gligori%C4%87), [Kavalek (ChessBase)](https://en.chessbase.com/news/2011/games/kavalek35g0.htm)
  - Letelier–Fischer 1960: [chessgames 1008397](https://www.chessgames.com/perl/chessgame?gid=1008397), [ChessBase](https://en.chessbase.com/post/a-short-tribute-to-ren-letelier-21-february-1915-2-july-2006), [mark-weeks](https://mark-weeks.com/aboutcom/aa07e12.htm)
  - Bagirov–Gufeld 1973: [chessgames 1023029](https://www.chessgames.com/perl/chessgame?gid=1023029), [Olimpbase](https://www.olimpbase.org/data/Chess_Sector/egufeld.htm), [ChessBase](https://en.chessbase.com/post/eduard-gufeld-and-his-mona-lisa-in-che)
  - Karpov–Kasparov 1990: [Wikipedia](https://en.wikipedia.org/wiki/World_Chess_Championship_1990), [chess.com](https://www.chess.com/article/view/karpov-versus-kasparov-and-the-kings-indian-defense)
  - Zita–Bronstein 1946: [chessgames 1033635](https://www.chessgames.com/perl/chessgame?gid=1033635), [chess.com blog](https://www.chess.com/blog/SamCopeland/bronstein-invents-modern-chess-best-of-the-40s-zita-vs-bronstein-1946)
  - Christiansen–Kasparov 1982: [chessgames 1070015](https://www.chessgames.com/perl/chessgame?gid=1070015), [365chess](https://www.365chess.com/tournaments/Moscow_Interzonal_1982/22368)
  - Ivanchuk–Yusupov 1991: [chessgames 1060180](https://www.chessgames.com/perl/chessgame?gid=1060180)
  - Byrne–Fischer 1963/64 (checked, not a King's Indian): [chessgames 1008419](https://www.chessgames.com/perl/chessgame?gid=1008419)
- Engine: Stockfish 19 (npm `stockfish` 19.0.1) through `scripts/engine.mjs` and the batch scanner in `test-results/kid-research/` (`scan.mjs`, `sf.mjs`).
