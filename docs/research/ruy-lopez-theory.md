# Ruy Lopez (Spanish Game): theory map

Research source of truth for the Reevz Chess Ruy Lopez course. The opening is 1.e4 e5 2.Nf3 Nc6 3.Bb5, ECO C60–C99.

## How to read this document

- **Lines.** Every move sequence shown in a `- \`id\`` bullet is copied from `ruy-lopez-lines.json`. All 144 lines were replayed move by move with chess.js 1.4.0. The check covers four things: legality, exact SAN spelling (including `+`/`#`), checkmate or check where a trap claims it, and attacked squares where a fork is claimed (Mortimer, Tarrasch). Each line shows the FEN after its last move. The doc and the JSON are generated from one source, so they can't drift apart.
- **Move numbers in prose.** Moves are written in standard notation counted from 1.e4. "9...Na5" means Black's 9th move.
- **`side`** in the JSON says whose choice defines the line: `white`, `black`, or `both` (a tabiya both sides steer into).
- **Status.** This is the status in top-level play, 2020–2026. Values:
  - `popular`: a mainstream elite choice.
  - `respectable`: sound and played, but not the first choice.
  - `rare`: playable, but seldom seen at the top.
  - `dubious`: objectively suspect.
  - `trap`: a teaching line that contains a mistake.
  - `historical`: a famous old game line.

  The lichess masters explorer returned HTTP 401 (it needs authentication), so these labels are a qualitative synthesis of the sources listed at the end. They are not database percentages.
- **Difficulty.** 1–5 for a club player (≈1200–1800): 1 = a few moves and one idea, 5 = long forcing theory.
- **Names and ECO codes.** These follow the lichess `chess-openings` dataset (which mirrors ECO naming) and Wikipedia. Where sources disagree, that is noted in place and again in [Naming conflicts and corrections](#naming-conflicts-and-corrections-to-the-original-checklist).

---

## 1. Variation tree

```
1.e4 e5 2.Nf3 Nc6 3.Bb5  Ruy Lopez (C60)
├─ 3...Nf6      Berlin Defence (C65–C67)
│   ├─ 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8   Berlin endgame
│   ├─ 4.O-O Nxe4 5.d4 Nd6 6.dxe5   l'Hermet ("Berlin draw")
│   ├─ 4.O-O Nxe4 5.Re1
│   ├─ 4.O-O Nxe4 5.d4 Be7          Rio de Janeiro
│   ├─ 4.O-O Bc5                    Beverwijk
│   ├─ 4.O-O d6                     Improved Steinitz
│   ├─ 4.O-O Ng4                    Fishing Pole (trap)
│   ├─ 4.d3                         Anti-Berlin (incl. 4...Ne7 Mortimer trap)
│   └─ 4.Qe2 / 4.d4 (Nyholm) / 4.Nc3 (→ Four Knights)
├─ 3...f5       Schliemann / Jaenisch Gambit (C63): 4.d3, 4.Nc3, 4.exf5
├─ 3...Bc5      Classical / Cordel (C64): 4.c3, 4.O-O Nd4, Cordel Gambit 4.c3 f5
├─ 3...Nd4      Bird (C61)
├─ 3...d6       Old Steinitz (C62) + Tarrasch (Dresden) trap
├─ 3...g6       Fianchetto / Smyslov (C60, C76)
├─ 3...Nge7     Cozio (C60)
├─ 3...Bb4      Alapin (C60)
├─ rare: 3...f6 Nürnberg, 3...Qf6, 3...Na5 Pollock, 3...Qe7 Vinogradov, 3...g5 Brentano,
│        3...d5 Spanish Countergambit, 3...Be7 Lucena, 3...a5 Bulgarian
└─ 3...a6       Morphy Defence (C68–C99)
    ├─ 4.Bxc6   Exchange (C68–C69)
    │   ├─ 5.O-O: 5...f6 Gligorić, 5...Bg4 (6.h3 h5), 5...Qd6 Bronstein, 5...Bd6, 5...Ne7
    │   ├─ 5.Nc3 Keres, 5.d4 (Lasker–Capablanca)
    │   └─ 4...bxc6 Lutikov
    └─ 4.Ba4
        ├─ 4...d6   Modern Steinitz (C71–C76): 5.c3 f5 Siesta, 5.c3 Bd7, 5.Bxc6+, 5.c4 Duras,
        │           5.O-O, 5.d4? → Noah's Ark trap
        ├─ 4...b5 5.Bb3 Na5   Norwegian;  5...Bc5 Graz
        ├─ 4...Nge7 / 4...g6 / 4...f5 / 4...Bc5 / 4...Nd4   (deferred sidelines)
        └─ 4...Nf6
            ├─ 5.d3 Anderssen (5...d6 6.c4 Duras), 5.d4 Mackenzie, 5.Qe2 Wormald,
            │  5.Nc3 Tarrasch, 5.Bxc6 Bayreuth
            └─ 5.O-O
                ├─ 5...Nxe4  Open (C80–C83): 9.c3 (Bc5 → Dilworth/11...f5/11...Bf5; Be7 → Tarrasch trap),
                │            9.Nbd2 Bernstein (11.Ng5), 9.Qe2 Howell;  6...exd4 Riga
                ├─ 5...b5 6.Bb3 Bb7   Arkhangelsk;  6...Bc5 Modern/Neo-Arkhangelsk;  5...Bc5 Møller
                ├─ 5...d6    Russian / Steinitz Deferred (C79)
                └─ 5...Be7   Closed (C84–C99)
                    ├─ 6.d3 Martinez (modern d3 Spanish), 6.Qe2 Worrall, 6.Bxc6 Delayed Exchange,
                    │  6.d4 Centre Attack (8.c3 Basque Gambit), 6.Nc3 Morphy Attack
                    └─ 6.Re1
                        ├─ 6...d6 Averbakh
                        └─ 6...b5 7.Bb3
                            ├─ 7...Bb7 Trajković
                            ├─ 7...O-O
                            │   ├─ 8.c3 d5   Marshall Attack (C89)
                            │   ├─ 8.c3 d6   → Closed main line
                            │   └─ 8.a4 / 8.h3 / 8.d4 / 8.d3   Anti-Marshall
                            └─ 7...d6
                                ├─ 8.a4 Anti-Classical;  8.d4?! (Noah's Ark motif)
                                └─ 8.c3 O-O
                                    ├─ 9.h3: Na5 Chigorin, Nb8 Breyer, Bb7 Zaitsev, h6 Smyslov,
                                    │        Nd7 Karpov, Be6 Kholmov, a5 ("Keres" in some DBs)
                                    ├─ 9.d4 Bg4  Bogoljubow (9.d4 = Yates)
                                    └─ 9.d3      Pilnik / Teichmann
```

---

## 2. Suggested learning order (one concept per ~10-min module)

| # | Module | Lines | Difficulty |
|---|--------|-------|-----------|
| 1 | Why 3.Bb5? The pressure on e5 and why it isn't an immediate threat (4.Bxc6 dxc6 5.Nxe5? Qd4!) | `ruy-lopez`, `exchange-5nxe5-trap` | 1 |
| 2 | 3...a6 4.Ba4 Nf6 5.O-O: the Morphy main road | `morphy`, `morphy-4ba4`, `morphy-4nf6-5oo` | 1 |
| 3 | Traps that teach the pin on c6: Noah's Ark and the Tarrasch (Dresden) trap | `noahs-ark-trap`, `tarrasch-trap-steinitz` | 2 |
| 4 | Quick-win traps: Fishing Pole, Mortimer, Exchange ...Bg4/...h5 | `berlin-fishing-pole-trap`, `mortimer-trap`, `exchange-bg4-h5-trap` | 1 |
| 5 | The Closed main line to 9.h3: c3, h3, d4, Bc2, Nbd2-f1-g3 | `closed`, `closed-main-9h3`, `closed-6d3-nf1-g3-illustrative` | 2 |
| 6 | Exchange Variation: bishop pair vs the 4-v-3 kingside majority | `exchange`, `exchange-gligoric`, `exchange-5d4-lasker-capablanca` | 2 |
| 7 | Exchange Variation, Black's active tries (5...Bg4, 5...Qd6, 5...Bd6) | `exchange-bg4-h5`, `exchange-bronstein`, `exchange-bd6` | 3 |
| 8 | Modern d3 Closed (6.d3) | `closed-6d3-a3`, `closed-6d3-a4`, `closed-6d3-c3-d4` | 2 |
| 9 | Berlin: 4.O-O Nxe4 5.d4 Nd6 and the endgame's structure | `berlin`, `berlin-endgame`, `berlin-endgame-h3-ke8` | 3 |
| 10 | Anti-Berlin 4.d3 | `anti-berlin-4d3`, `anti-berlin-5bxc6`, `anti-berlin-5bxc6-nxe5-trap` | 2 |
| 11 | Modern Steinitz and the Siesta | `modern-steinitz-5c3-bd7`, `siesta`, `modern-steinitz-5bxc6` | 2 |
| 12 | Open Ruy main line + Tarrasch trap | `open`, `open-9c3-be7`, `open-tarrasch-trap` | 3 |
| 13 | Chigorin structures (closed centre after d5) | `chigorin`, `chigorin-12nc6-13d5`, `chigorin-12cxd4` | 3 |
| 14 | Anti-Marshall systems (8.a4, 8.h3) | `anti-marshall-8a4`, `anti-marshall-8h3` | 3 |
| 15 | Marshall Attack: the gambit and its attacking patterns | `marshall`, `marshall-spassky-15be3`, `marshall-capablanca-1918` | 4 |
| 16 | Breyer: the knight reroute ...Nb8-d7 | `breyer` | 4 |
| 17 | Zaitsev: pressure on e4, the 11.Ng5 repetition, 12.a4 | `zaitsev`, `zaitsev-11ng5-repetition` | 5 |
| 18 | Arkhangelsk and Modern Arkhangelsk | `arkhangelsk`, `modern-arkhangelsk` | 3 |
| 19 | Schliemann for both sides | `schliemann-4d3`, `schliemann-4nc3-nf6` | 3 |
| 20 | Open Ruy deep lines: Dilworth, 11.Ng5, Howell, Riga | `open-dilworth`, `open-bernstein-11ng5`, `open-howell`, `open-riga` | 5 |
| 21 | Other 9th moves: Smyslov, Karpov, Kholmov, 9...a5, Bogoljubow, Pilnik | see §17 | 4 |
| 22 | Sideline sweep (3rd/4th/5th/6th move rarities) | §§4–9, 12, 15 | 1–2 |

---

## 3. Core ideas of 3.Bb5 (applies everywhere)

- `ruy-lopez` (C60, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5
  - FEN: `r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3`

Status: popular. The Ruy Lopez is White's most respected answer to 1...e5 2.Nf3 Nc6 at every level. Difficulty 1 for the ideas.

- **The target is e5.** The bishop attacks the only defender of e5. But 4.Bxc6 dxc6 5.Nxe5 usually doesn't win a pawn, because ...Qd4 forks the knight and e4 (see `exchange-5nxe5-trap`). That changes once White has castled and can answer with Re1, which is why many lines hinge on whether e4 is defended.
- **White's standard plan.** c3 + d4 builds a big centre and gives the bishop the retreat a4-b3-c2. h3 stops ...Bg4 from pinning the f3-knight, which defends d4. The queen's knight goes Nb1-d2-f1-g3 (or -e3) towards the kingside. a2-a4 hits Black's ...b5 pawn. Re1 defends e4.
- **Black's main approaches:**
  - hold e5 as a strongpoint (...d6, Closed systems, Breyer, Zaitsev);
  - give up e5 for free piece play (...exd4: Steinitz, Riga);
  - counterattack e4 (Open, Berlin, Schliemann, Arkhangelsk);
  - gambit d5 for the initiative (Marshall).
- **...a6 and ...b5.** They chase the bishop and gain queenside space, but they also create the target for White's a4 lever. If Black plays ...b5 while the a4-bishop still has to retreat, ...Nxd4 / ...c5 / ...c4 can trap it (Noah's Ark).

---

## 4. 3...Nf6 Berlin Defence (C65–C67)

- `berlin` (C65, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6
  - FEN: `r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4`

**Status: popular.** It is the second most common reply to 3.Bb5, after 3...a6 (Wikipedia, Berlin Defence). It became an elite drawing weapon after Kramnik used it against Kasparov in 2000. White now avoids the endgame with 4.d3 as often as it enters it.

### 4.1 Berlin endgame ("Berlin Wall"), 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 (C67)

- `berlin-endgame` (C67, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8
  - FEN: `r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w - - 0 9`
- `berlin-endgame-h3-ke8` (C67, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 9.h3 Ke8 10.Nc3 h5 11.Bf4 Be7
  - FEN: `r1b1k2r/ppp1bpp1/2p5/4Pn1p/5B2/2N2N1P/PPP2PP1/R4RK1 w - - 2 12`
- `berlin-endgame-nc3-bd7` (C67, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 9.Nc3 Bd7
  - FEN: `r2k1b1r/pppb1ppp/2p5/4Pn2/8/2N2N2/PPP2PPP/R1B2RK1 w - - 2 10`

- **Structure.** Black has the bishop pair, doubled c-pawns, and a king that has lost castling rights. White has a healthy 4-v-3 kingside majority with the pawn already on e5. Black's queenside majority is crippled by the doubled c-pawn.
- **White's plans.** Nc3, h3, Bf4/Bg5, Rad1/Rd1. Expand with g4 to kick the f5-knight, then f4-f5, using e5 to cramp Black. Look for e6 breaks and for the e4 square for a knight.
- **Black's plans.**
  - Tuck the king on e8 (with ...h5 to stop g4, ...Be7/...Be6) or on c8 (...Bd7, ...Kc8, ...b6, ...c5).
  - Blockade the light squares.
  - Use the bishops; ...c5-c4 or ...g5 breaks.
- **Ninth moves.** White's common 9th moves are 9.Nc3, 9.h3 and 9.Rd1+. Black's common replies are 9...Ke8, 9...h6, 9...Bd7, 9...Ne7, 9...Be7 and 9...Be6 (Wikipedia). 9.h3 Ke8 10.Nc3 h5 and 9.Nc3 Ke8 10.h3 h5 transpose. ...h5 is the fashionable antidote to g2-g4.
- **Tendency.** The endgame is equal or slightly better for White. The modern consensus is that accurate Black play holds it.
- **Difficulty 3.** Few forcing lines, but deep endgame understanding.

### 4.2 6.dxe5: l'Hermet Variation / "Berlin draw"

- `berlin-lhermet-draw` (C67, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.d4 Nd6 6.dxe5 Nxb5 7.a4 Nbd4 8.Nxd4 Nxd4 9.Qxd4 d5 10.exd6 Qxd6 11.Qe4+ Qe6 12.Qd4 Qd6
  - FEN: `r1b1kb1r/ppp2ppp/3q4/8/P2Q4/8/1PP2PPP/RNB2RK1 w kq - 4 13`

After 7.a4 the b5-knight has no good square except d4, and the line can end in a threefold repetition (Qe4+/Qd4 against ...Qe6/...Qd6). It is not forced: either side can deviate. Examples (Wikipedia): Nepomniachtchi–Nakamura, Candidates 2022 round 12 (quick draw by repetition), and Erigaisi–Gukesh, Wijk aan Zee 2023. Difficulty 2.

### 4.3 5.Re1

- `berlin-5re1` (C67, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.Re1 Nd6 6.Nxe5 Be7 7.Bf1 Nxe5 8.Rxe5 O-O 9.d4 Bf6 10.Re1 Re8
  - FEN: `r1bqr1k1/pppp1ppp/3n1b2/8/3P4/8/PPP2PPP/RNBQRBK1 w - - 3 11`

White wins back the pawn at once with Nxe5 and Bf1. Black equalises with ...Bf6 and ...Re8, and symmetrical simplification follows. Shirov advocated it and Carlsen has played it. It appeared in game 4 of the 1886 Steinitz–Zukertort match (Wikipedia). Status: respectable, drawish. Difficulty 2.

### 4.4 5...Be7 Rio de Janeiro Variation

- `berlin-rio-de-janeiro` (C67, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.d4 Be7 6.Qe2 Nd6 7.Bxc6 bxc6 8.dxe5 Nb7
  - FEN: `r1bqk2r/pnppbppp/2p5/4P3/8/5N2/PPP1QPPP/RNB2RK1 w kq - 1 9`

Black keeps the queens on, but the knight ends up passive on b7 and White has space with the pawn on e5. Lasker used it three times at the 1908 World Championship. It fell out of favour once Black's compensation was shown to be insufficient (Wikipedia). lichess calls 4...Nxe4 itself the "Rio Gambit Accepted". Status: rare. Difficulty 3.

### 4.5 4.O-O Bc5 Beverwijk Variation

- `berlin-beverwijk` (C65, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Bc5 5.c3 O-O 6.d4 Bb6
  - FEN: `r1bq1rk1/pppp1ppp/1bn2n2/1B2p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 w - - 1 7`
- `berlin-beverwijk-5nxe5` (C65, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Bc5 5.Nxe5 Nxe4 6.Qe2 Nxe5 7.Qxe4 Qe7
  - FEN: `r1b1k2r/ppppqppp/8/1Bb1n3/4Q3/8/PPPP1PPP/RNB2RK1 w kq - 1 8`

- 5.c3 (lichess: "Zukertort Gambit") O-O 6.d4 Bb6 is the main line. lichess calls it the "Benelux Variation". The same position arises from 3...Bc5 (see §6).
- With the fork trick 5.Nxe5 Nxe4 6.Qe2 Nxe5 7.Qxe4 Qe7, White regains the piece but Black is fine.
- Status: respectable. Difficulty 3.

### 4.6 4.O-O d6 "Improved Steinitz" (C66)

- `berlin-improved-steinitz` (C66, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O d6 5.d4 Bd7 6.Nc3 Be7
  - FEN: `r2qk2r/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 3 7`

This is a solid but passive set-up, like the Old Steinitz with ...Nf6 already played. Status: rare. Difficulty 2.

### 4.7 4.O-O Ng4?! Fishing Pole (trap)

- `berlin-fishing-pole-trap` (C65, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Ng4 5.h3 h5 6.hxg4 hxg4 7.Nh2 Qh4 8.f3 g3 9.Rf2 Nd4 10.Kf1 gxh2 11.Ke1 h1=Q+ 12.Bf1 Qxf1+ 13.Kxf1 Qh1#
  - FEN: `r1b1kb1r/pppp1pp1/8/4p3/3nP3/5P2/PPPP1RP1/RNBQ1K1q w kq - 1 14`
- `berlin-fishing-pole-7ne1` (C65, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Ng4 5.h3 h5 6.hxg4 hxg4 7.Ne1 Qh4 8.f3 g3 9.Rf2 Qh1#
  - FEN: `r1b1kb1r/pppp1pp1/2n5/1B2p3/4P3/5Pp1/PPPP1RP1/RNBQN1Kq w kq - 2 10`

- **Idea.** The g4-knight is bait; the h-pawn is the "hook".
- **How White falls in.** If White takes with 6.hxg4?, the h-file opens. After 7.Nh2?? Qh4 Black mates by force (Wikipedia gives 8.f3, 8.f4 and 8.Re1, all losing). 7.Ne1 Qh4 8.f3 g3 is also crushing; one lichess game ended 9.Rf2?? Qh1#.
- **Correct play.** 4...Ng4 is objectively a mistake. After 5.h3 the knight usually has to go back (5...Nf6 6.Bxc6 dxc6 7.Nxe5 wins e5). After 5...h5, just don't take the knight.
- Difficulty 1.

### 4.8 4.d3 Anti-Berlin

- `anti-berlin-4d3` (C65, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d3 Bc5 5.c3 O-O 6.O-O d6
  - FEN: `r1bq1rk1/ppp2ppp/2np1n2/1Bb1p3/4P3/2PP1N2/PP3PPP/RNBQ1RK1 w - - 0 7`
- `anti-berlin-4d3-d5` (C65, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d3 Bc5 5.c3 O-O 6.O-O d5 7.Nbd2
  - FEN: `r1bq1rk1/ppp2ppp/2n2n2/1Bbpp3/4P3/2PP1N2/PP1N1PPP/R1BQ1RK1 b - - 1 7`
- `anti-berlin-anand-carlsen-2013` (C65, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d3 Bc5 5.c3 O-O 6.O-O Re8 7.Re1 a6 8.Ba4 b5 9.Bb3 d6 10.Bg5 Be6
  - FEN: `r2qr1k1/2p2ppp/p1npbn2/1pb1p1B1/4P3/1BPP1N2/PP3PPP/RN1QR1K1 w - - 2 11`
- `anti-berlin-5bxc6` (C65, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d3 Bc5 5.Bxc6 dxc6 6.Nbd2
  - FEN: `r1bqk2r/ppp2ppp/2p2n2/2b1p3/4P3/3P1N2/PPPN1PPP/R1BQK2R b KQkq - 1 6`
- `anti-berlin-5bxc6-nxe5-trap` (C65, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d3 Bc5 5.Bxc6 dxc6 6.Nxe5 Qd4 7.Nf3 Qxf2#
  - FEN: `r1b1k2r/ppp2ppp/2p2n2/2b5/4P3/3P1N2/PPP2qPP/RNBQK2R w KQkq - 0 8`

- **Idea.** 4.d3 protects e4, so ...Nxe4 is impossible and there's no forced endgame. The play is slow and Italian-like: c3, O-O, Re1, h3, Nbd2-f1-g3, and often a2-a4 or Ba4-c2 to keep the bishop. Alternatively Bxc6 + Nbd2-c4 against Black's doubled pawns.
- **Black's set-ups.** ...Bc5 with ...O-O, then ...d6, ...Re8 or ...d5, plus ...a6/...b5 to question the bishop.
- **Trap.** After 5.Bxc6 dxc6, 6.Nxe5? Qd4! hits e5 and f2. 7.Nf3?? Qxf2# (mate verified).
- **Status: popular.** Wikipedia says it is the most common 4th-move alternative and has grown in popularity as the way to avoid the drawish Open Berlin. Difficulty 2.

### 4.9 4.d3 Ne7?! Mortimer Trap

- `mortimer-trap` (C65, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d3 Ne7 5.Nxe5 c6 6.Ba4 Qa5+
  - FEN: `r1b1kb1r/pp1pnppp/2p2n2/q3N3/B3P3/3P4/PPP2PPP/RNBQK2R w KQkq - 2 7`

- **Trap.** After 5.Nxe5? c6!, the b5-bishop is attacked. 6.Ba4 (or 6.Bc4) runs into 6...Qa5+, which forks the king and the e5-knight; chess.js confirms the check and the attack on e5.
- **History.** Mortimer played 4...Ne7 at London 1883 and lost all three games (Wikipedia).
- **Correct play.** 5.O-O is good for White, so 4...Ne7 is inferior if White doesn't grab. Difficulty 1.

### 4.10 Other 4th moves

- `berlin-4qe2` (C65, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.Qe2
  - FEN: `r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPPQPPP/RNB1K2R b KQkq - 5 4`
- `berlin-nyholm-4d4` (C65, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.d4 exd4 5.O-O
  - FEN: `r1bqkb1r/pppp1ppp/2n2n2/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 1 5`
- `berlin-4nc3` (C48, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.Nc3
  - FEN: `r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4`

- 4.Qe2 defends e4 and the bishop.
- 4.d4 exd4 5.O-O is the Nyholm Attack.
- 4.Nc3 transposes to the Four Knights, Spanish Variation (ECO C48). Wikipedia judges 4.Bxc6 inferior to 4.d3.

### 4.11 Model games (Berlin)

- **Kasparov–Kramnik, Classical World Championship, London 2000.** Kramnik used the Berlin as Black in games 1, 3, 9 and 13, and all four were drawn (Wikipedia). It is instructive as the match that turned the Berlin endgame into an elite drawing fortress.
- **Carlsen–Anand, World Championship, Sochi 2014, game 11.** Carlsen won in 45 moves against Anand's Berlin and kept his title. Anand's over-ambitious exchange sacrifice 27...Rb4 backfired (TWIC, Washington Times). It is instructive for how quickly the "drawish" Berlin can turn when Black over-presses.
- **Anand–Carlsen, World Championship, Chennai 2013, game 6.** In a 4.d3 Anti-Berlin (moves as in `anti-berlin-anand-carlsen-2013`), Carlsen won a long rook endgame of 67 moves (some sources say 68). It is instructive for the slow-maneuvering character of 4.d3 and for rook-endgame technique.
- **Carlsen–Karjakin, World Championship, New York 2016, game 10.** Anti-Berlin 4.d3; Carlsen won in 75 moves to level the match (TWIC, ChessBase). It is instructive for grinding small advantages in d3 structures.

---

## 5. 3...f5 Schliemann / Jaenisch Gambit (C63)

- `schliemann` (C63, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 f5
  - FEN: `r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4`
- `schliemann-4d3` (C63, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 f5 4.d3 fxe4 5.dxe4 Nf6 6.O-O Bc5 7.Bxc6 bxc6 8.Nxe5 O-O
  - FEN: `r1bq1rk1/p1pp2pp/2p2n2/2b1N3/4P3/8/PPP2PPP/RNBQ1RK1 w - - 1 9`
- `schliemann-4nc3-nf6` (C63, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 f5 4.Nc3 fxe4 5.Nxe4 Nf6 6.Nxf6+ Qxf6 7.Qe2 Be7 8.Bxc6 bxc6 9.Nxe5
  - FEN: `r1b1k2r/p1ppb1pp/2p2q2/4N3/8/8/PPPPQPPP/R1B1K2R b KQkq - 0 9`
- `schliemann-4nc3-d5` (C63, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 f5 4.Nc3 fxe4 5.Nxe4 d5 6.Nxe5 dxe4 7.Nxc6 Qg5 8.Qe2 Nf6 9.f4 Qxf4 10.Ne5+ c6 11.d4 Qh4+ 12.g3 Qh3
  - FEN: `r1b1kb1r/pp4pp/2p2n2/1B2N3/3Pp3/6Pq/PPP1Q2P/R1B1K2R w KQkq - 1 13`
- `schliemann-4exf5` (C63, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 f5 4.exf5 e4 5.Qe2 Qe7 6.Bxc6 dxc6 7.Nd4 Nh6
  - FEN: `r1b1kb1r/ppp1q1pp/2p4n/5P2/3Np3/8/PPPPQPPP/RNB1K2R w KQkq - 2 8`

- **Black's idea.** Hit e4 at once and open the f-file for fast, aggressive development, often at the cost of a pawn or two.
- **White's answers:**
  - **4.d3.** Calm and positional; it has overtaken 4.Nc3 in recent years. After 4...fxe4 5.dxe4 White has the healthier structure. Bxc6 + Nxe5 can win a pawn, as in `schliemann-4d3`, where Black gets activity for it. 6...d6 is an alternative (7.Bc4; 7...Be7?? is a blunder per Wikipedia).
  - **4.Nc3.** The most aggressive try, and it needs much theory. Wikipedia now often treats 5...Nf6 as the main line. The 5...d5 6.Nxe5 dxe4 7.Nxc6 Qg5 main line comes from Timman–Speelman, Candidates London 1989 (result not confirmed). 7...Qd5 is the Möhring Variation.
  - **4.exf5?!** e4 gives Black the better game (Wikipedia).
- **Status: dubious/rare at the top.** Wikipedia calls it a "good practical weapon" but "positionally risky", and says Radjabov is the only top player who uses it regularly. Difficulty 3, or 4 for the 4.Nc3 lines.

---

## 6. 3...Bc5 Classical (Cordel) Defence (C64)

- `classical` (C64, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Bc5 4.c3 Nf6 5.O-O O-O 6.d4 Bb6 7.Bg5
  - FEN: `r1bq1rk1/pppp1ppp/1bn2n2/1B2p1B1/3PP3/2P2N2/PP3PPP/RN1Q1RK1 b - - 2 7`
- `classical-4oo-nd4` (C64, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Bc5 4.O-O Nd4 5.Nxd4 Bxd4 6.c3 Bb6 7.d4 c6
  - FEN: `r1bqk1nr/pp1p1ppp/1bp5/1B2p3/3PP3/2P5/PP3PPP/RNBQ1RK1 w kq - 0 8`
- `cordel-gambit` (C64, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Bc5 4.c3 f5 5.d4 fxe4
  - FEN: `r1bqk1nr/pppp2pp/2n5/1Bb1p3/3Pp3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6`

- **Idea.** The bishop goes to the active a7-g1 diagonal before ...Nf6. It doesn't defend e5, though, and White's c3 + d4 gains time against the bishop.
- **4.c3 Nf6 5.O-O O-O 6.d4 Bb6 7.Bg5** is lichess's "Classical Variation, Modern Main Line". It is the same position as the Berlin/Beverwijk 3...Nf6 4.O-O Bc5 5.c3 O-O 6.d4 Bb6 7.Bg5.
- **4.O-O Nd4 5.Nxd4 Bxd4 6.c3 Bb6 7.d4 c6** is a slight edge for White (Wikibooks).
- **The Cordel Gambit 4.c3 f5** is a Schliemann-style lunge, considered risky.
- **Status.** Respectable as a 4th-move Berlin branch; the 3...Bc5 move order itself is rare at the top. Difficulty 3.

---

## 7. 3...Nd4 Bird's Defence (C61)

- `bird` (C61, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nd4 4.Nxd4 exd4 5.O-O Bc5 6.d3 c6 7.Bc4 Nf6 8.Re1 d6
  - FEN: `r1bqk2r/pp3ppp/2pp1n2/2b5/2BpP3/3P4/PPP2PPP/RNBQR1K1 w kq - 0 9`

- **Idea.** Black trades knights so that a pawn lands on d4. That pawn cramps White (no c3/Nc3 comfort), at the cost of a doubled pawn and slower development.
- **White's plan.** O-O, d3, c3 or f4, with the bishop on c4 or b3.
- The line shown is from the Wikibooks table and is marked "slightly better for White".
- Status: rare. Difficulty 2.

---

## 8. 3...d6 Old Steinitz Defence (C62)

- `old-steinitz` (C62, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 d6 4.d4 Bd7 5.Nc3 Nf6 6.O-O Be7 7.Re1 exd4 8.Nxd4 O-O
  - FEN: `r2q1rk1/pppbbppp/2np1n2/1B6/3NP3/2N5/PPP2PPP/R1BQR1K1 w - - 1 9`
- `tarrasch-trap-steinitz` (C62, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 d6 4.d4 Bd7 5.Nc3 Nf6 6.O-O Be7 7.Re1 O-O 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 Raxd8 11.Nxe5 Bxe4 12.Nxe4 Nxe4 13.Nd3 f5 14.f3 Bc5+ 15.Nxc5 Nxc5 16.Bg5 Rd5 17.Be7 Re8 18.c4
  - FEN: `4r1k1/ppp1B1pp/8/2nr1p2/2P5/5P2/PP4PP/R3R1K1 b - - 0 18`

- **Idea.** Black supports e5 directly. But after d4 the pin on c6 means Black can't keep e5, and has to give up the centre with ...exd4 into a cramped but solid position.
- **Tarrasch (Dresden) trap.** 7...O-O?? loses material. After 8.Bxc6 Bxc6 9.dxe5 dxe5 10.Qxd8 Raxd8 11.Nxe5 Bxe4 12.Nxe4 Nxe4 13.Nd3! f5 14.f3 Bc5+ 15.Nxc5 Nxc5 16.Bg5, Black loses the exchange. The game is Tarrasch–Marco, Dresden 1892, which ended 18.c4 1-0 (Wikipedia). The right move is 7...exd4.
- Status: rare. Difficulty 2.

---

## 9. 3...g6 Fianchetto / Smyslov Defence (C60, C76)

- `fianchetto-4c3` (C76, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 g6 4.c3 a6 5.Ba4 d6 6.d4 Bd7
  - FEN: `r2qkbnr/1ppb1p1p/p1np2p1/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 7`
- `fianchetto-4d4-bg5` (C60, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 g6 4.d4 exd4 5.Bg5 Be7 6.Bxe7 Qxe7 7.Bxc6 dxc6 8.Qxd4 Nf6 9.Nc3
  - FEN: `r1b1k2r/ppp1qp1p/2p2np1/8/3QP3/2N2N2/PPP2PPP/R3K2R b KQkq - 2 9`

- **Idea.** The bishop on g7 supports e5 from the long diagonal.
- **4.d4 exd4 5.Bg5!** goes after the weakened dark squares (f6/e7) and is often called critical. A Chess.com overview says it gives White the advantage, while other course material argues Black is fine, so treat it as **disputed**.
- **4.c3 a6 5.Ba4 d6 6.d4 Bd7** transposes to the Modern Steinitz, Fianchetto Variation (C76).
- Status: rare. Difficulty 2.

---

## 10. 3...Nge7 Cozio Defence (C60)

- `cozio` (C60, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nge7 4.O-O g6
  - FEN: `r1bqkb1r/ppppnp1p/2n3p1/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5`
- `cozio-zukertort-anderssen-1865` (C60, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Nge7 4.c3 d6 5.d4 Bd7 6.O-O Ng6 7.Ng5 h6 8.Nxf7 Kxf7 9.Bc4+ Ke7 10.Qh5 Qe8 11.Qg5+ hxg5 12.Bxg5#
  - FEN: `r3qb1r/pppbk1p1/2np2n1/4p1B1/2BPP3/2P5/PP3PPP/RN3RK1 b - - 0 12`

- **Idea.** The knight on e7 can recapture on c6 (Bxc6 Nxc6), so Black avoids doubled pawns. After that come ...g6 and ...Bg7 (or ...Ng6 to support e5).
- **Main move.** Wikibooks gives 4.O-O as the modern main move and 4...g6 as Black's best reply.
- **Zukertort–Anderssen, 1865.** A 4.c3 game that shows what happens to an under-developed king: 7.Ng5 h6 8.Nxf7! Kxf7 9.Bc4+ Ke7?? 10.Qh5 Qe8?? 11.Qg5+! hxg5 12.Bxg5# (mate verified).
- Status: rare. Difficulty 2.

## 11. 3...Bb4 Alapin and other rare 3rd moves (C60)

- `alapin` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Bb4 4.c3 Ba5
  - FEN: `r1bqk1nr/pppp1ppp/2n5/bB2p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5`
- `nurnberg-3f6` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 f6
  - FEN: `r1bqkbnr/pppp2pp/2n2p2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4`
- `rare-3qf6` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Qf6
  - FEN: `r1b1kbnr/pppp1ppp/2n2q2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4`
- `pollock-3na5` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Na5
  - FEN: `r1bqkbnr/pppp1ppp/8/nB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4`
- `vinogradov-3qe7` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Qe7
  - FEN: `r1b1kbnr/ppppqppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4`
- `brentano-3g5` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 g5
  - FEN: `r1bqkbnr/pppp1p1p/2n5/1B2p1p1/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4`
- `spanish-countergambit-3d5` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 d5
  - FEN: `r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4`
- `lucena-3be7` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 Be7
  - FEN: `r1bqk1nr/ppppbppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4`
- `bulgarian-3a5` (C60, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a5
  - FEN: `r1bqkbnr/1ppp1ppp/2n5/pB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4`

- 3...Bb4 4.c3 Ba5 has "no clear idea" and is "very dubious" (Wikibooks).
- The other moves are one-line curiosities. 3...f6 weakens the king's diagonal and takes f6 from the knight. 3...Qf6 has no standard name in the lichess dataset. None of these are seen at master level. Difficulty 1.

---

## 12. 3...a6 4.Bxc6 Exchange Variation (C68–C69)

- `morphy` (C70, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6
  - FEN: `r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4`
- `exchange` (C68, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6
  - FEN: `r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5`
- `exchange-5nxe5-trap` (C68, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.Nxe5 Qd4 6.Nf3 Qxe4+
  - FEN: `r1b1kbnr/1pp2ppp/p1p5/8/4q3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 7`

**Why White gives up the bishop pair.** Suppose the d-pawns are later exchanged (d4 ...exd4). Then White has a 4-v-3 kingside majority (e, f, g, h against f, g, h). Black's 4-v-3 queenside majority can't create a passed pawn on its own, because of the doubled c-pawns. So pure pawn endings tend to be winning for White; Wikipedia cites Euwe's assessment. White aims for simplification. Black has to use the bishop pair, keep pieces on, and play actively. **The immediate 5.Nxe5? fails to 5...Qd4!**

### 12.1 5.O-O (main move)

After castling, Re1 makes Nxe5 a real threat, so Black must deal with e5 at once.

- `exchange-5bc5-trap` (C69, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O Bc5 6.Nxe5 Qd4 7.Nf3 Qxe4 8.Re1
  - FEN: `r1b1k1nr/1pp2ppp/p1p5/2b5/4q3/5N2/PPPP1PPP/RNBQR1K1 b kq - 1 8`

- **Why 5.O-O sets up Nxe5.** After castling, Re1 is ready to pin a queen that grabs on e4. A careless reply like 5...Bc5? loses: 6.Nxe5 Qd4 7.Nf3 Qxe4?? 8.Re1 and the queen is pinned to the king (Chess.com). So Black must deal with e5 at once.

- `exchange-gligoric` (C69, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O f6 6.d4 exd4 7.Nxd4 c5 8.Nb3 Qxd1 9.Rxd1 Bg4 10.f3 Be6
  - FEN: `r3kbnr/1pp3pp/p3bp2/2p5/4P3/1N3P2/PPP3PP/RNBR2K1 w kq - 1 11`
- `exchange-gligoric-7qxd4` (C69, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O f6 6.d4 exd4 7.Qxd4 Qxd4 8.Nxd4 c5 9.Nb3
  - FEN: `r1b1kbnr/1pp3pp/p4p2/2p5/4P3/1N6/PPP2PPP/RNB2RK1 b kq - 1 9`
- `exchange-gligoric-6bg4` (C69, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O f6 6.d4 Bg4 7.dxe5 Qxd1 8.Rxd1 fxe5
  - FEN: `r3kbnr/1pp3pp/p1p5/4p3/4P1b1/5N2/PPP2PPP/RNBR2K1 w kq - 0 9`

- **5...f6 (Gligorić).** The most common and most solid reply.
  - After 6.d4 exd4, 7.Nxd4 is the best recapture according to Chess.com (7.Qxd4 is "also playable"). Fischer used 7.Nxd4 in two games of his 1992 match with Spassky (Wikipedia). 7...c5 8.Nb3 Qxd1 9.Rxd1 leads to the typical ending: Black has the bishop pair, White the healthy kingside majority.
  - Wikipedia names 7.Qxd4 Qxd4 8.Nxd4 c5 9.Nb3 as a main line.
  - 6...Bg4 7.dxe5 Qxd1 8.Rxd1 fxe5 (or 7.c3) is the alternative to 6...exd4.

- `exchange-bg4-h5` (C69, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O Bg4 6.h3 h5 7.d3 Qf6 8.Nbd2 Ne7 9.Re1 Ng6
  - FEN: `r3kb1r/1pp2pp1/p1p2qn1/4p2p/4P1b1/3P1N1P/PPPN1PP1/R1BQR1K1 w kq - 5 10`
- `exchange-bg4-h5-trap` (C69, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O Bg4 6.h3 h5 7.hxg4 hxg4 8.Nxe5 Qh4 9.f4 g3 10.Qh5 Rxh5 11.Rf3 Qh1#
  - FEN: `r3kbn1/1pp2pp1/p1p5/4N2r/4PP2/5Rp1/PPPP2P1/RNB3Kq w q - 2 12`

- **5...Bg4 6.h3 h5!** The bishop is "poisoned". Taking it opens the h-file, as in the trap line: 7.hxg4?? hxg4 8.Nxe5?? Qh4 9.f4 g3 10.Qh5 Rxh5 11.Rf3 Qh1# (mate verified). 8.Nh2?? Qh4 also loses material (Wikipedia). The normal line is 7.d3 Qf6 8.Nbd2 Ne7 9.Re1 Ng6, where Wikipedia flags 10.hxg4 as dubious.

- `exchange-bronstein` (C69, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O Qd6 6.d4 exd4 7.Nxd4 Bd7
  - FEN: `r3kbnr/1ppb1ppp/p1pq4/8/3NP3/8/PPP2PPP/RNBQ1RK1 w kq - 1 8`

- **5...Qd6 (Bronstein).** The queen defends e5, and Black can castle queenside quickly. 6.d3 and 6.Na3 (Na3-c4, hitting the queen) are popular; after 6.d4 exd4 7.Nxd4 Black plays ...Bd7 and ...O-O-O. Romanishin used it often (Wikipedia).

- `exchange-bd6` (C69, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O Bd6 6.d4 Bg4 7.dxe5 Bxf3 8.Qxf3 Bxe5
  - FEN: `r2qk1nr/1pp2ppp/p1p5/4b3/4P3/5Q2/PPP2PPP/RNB2RK1 w kq - 0 9`
- `exchange-bd6-mistake` (C69, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O Bd6 6.d4 exd4 7.Qxd4 f6 8.Nc3 Bg4 9.e5
  - FEN: `r2qk1nr/1pp3pp/p1pb1p2/4P3/3Q2b1/2N2N2/PPP2PPP/R1B2RK1 b kq - 0 9`

- **5...Bd6.** 6.d4 Bg4! 7.dxe5 Bxf3 8.Qxf3 Bxe5 leaves White only slightly better. 6...exd4 7.Qxd4 f6 8.Nc3 Bg4? 9.e5! gives White a strong attack (Wikipedia).

- `exchange-ne7` (C69, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O Ne7 6.Nxe5 Qd4 7.Nf3 Qxe4
  - FEN: `r1b1kb1r/1pp1nppp/p1p5/8/4q3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 8`

- **5...Ne7.** After 6.Nxe5 Qd4 7.Nf3 Qxe4, the knight on e7 blocks the e-file, so Re1 is no pin. The knight later goes to g6.

### 12.2 Other 5th moves and 4...bxc6

- `exchange-keres-5nc3` (C68, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.Nc3 f6 6.d3
  - FEN: `r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 6`
- `exchange-5d4-lasker-capablanca` (C68, historical): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.d4 exd4 6.Qxd4 Qxd4 7.Nxd4 Bd6 8.Nc3 Ne7 9.O-O O-O 10.f4 Re8 11.Nb3 f6 12.f5 b6 13.Bf4 Bb7
  - FEN: `r3r1k1/1bp1n1pp/pppb1p2/5P2/4PB2/1NN5/PPP3PP/R4RK1 w - - 2 14`
- `exchange-lutikov` (C68, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 bxc6
  - FEN: `r1bqkbnr/2pp1ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5`

- **5.Nc3 (Keres).** A flexible move that keeps both d3 and d4 available.
- **5.d4 exd4 6.Qxd4 Qxd4 7.Nxd4.** This reaches the endgame at once. 7...Bd7 and ...O-O-O is roughly equal (Wikipedia). In Lasker–Capablanca, Black's 7...Bd6 was criticised, and White's f4-f5 clamp then fixed the e6 outpost.
- **4...bxc6 (Lutikov).** Black gets the half-open b-file but an awkward centre.

**Status.** Respectable. It is a practical weapon at all levels and a psychological one (Wikipedia). Many elites prefer the Closed or 6.d3 lines. Difficulty 2 for the ideas, 3 for Black's sharp tries.

**Model games.**

- **Lasker–Capablanca, St Petersburg 1914 (final), 1-0.** Lasker's 5.d4 queen trade followed by 10.f4 and 12.f5 put a bind on e6. It is instructive because Capablanca, playing for a draw, was too passive, and it is the classic demonstration of the Exchange majority plus outpost plan (Wikipedia, Exeter CC, Chess.com).
- **Fischer–Gligorić, Havana Olympiad 1966, 1-0.** This was 5.O-O f6 (C69, Gligorić Variation) in a lichess study, and it appears in Fischer's *My 60 Memorable Games*. It is the model of Fischer's 5.O-O revival of the Exchange.

---

## 13. 4.Ba4 sidelines (Black's 4th move)

- `morphy-4ba4` (C70, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4
  - FEN: `r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4`

### 13.1 4...d6 Modern (Deferred) Steinitz (C71–C76)

- `modern-steinitz` (C71, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6
  - FEN: `r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5`

Black keeps the e5 strongpoint and can always break the pin with ...b5, which is the difference from the Old Steinitz. Difficulty 2.

- `siesta` (C74, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.c3 f5 6.exf5 Bxf5 7.O-O Bd3 8.Re1 Be7 9.Bc2 Bxc2 10.Qxc2 Nf6 11.d4
  - FEN: `r2qk2r/1pp1b1pp/p1np1n2/4p3/3P4/2P2N2/PPQ2PPP/RNB1R1K1 b kq - 0 11`
- `siesta-7d4` (C74, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.c3 f5 6.exf5 Bxf5 7.d4 e4
  - FEN: `r2qkbnr/1pp3pp/p1np4/5b2/B2Pp3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 8`

- **5.c3 f5 Siesta (C74).** A sharp counterattack on e4, credited to Capablanca. After 6.exf5 Bxf5:
  - 7.O-O Bd3 8.Re1 Be7 9.Bc2 Bxc2 10.Qxc2 Nf6 11.d4 (single reference): Black's d3-bishop gets in the way of White's development until it is traded.
  - 7.d4 e4 grabs space. Capablanca–Marshall is cited in the sources for this line.
  - Status: rare.

- `modern-steinitz-5c3-bd7` (C75, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.c3 Bd7 6.d4 Nge7
  - FEN: `r2qkb1r/1ppbnppp/p1np4/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 7`
- `modern-steinitz-5bxc6` (C73, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.Bxc6+ bxc6 6.d4 f6
  - FEN: `r1bqkbnr/2p3pp/p1pp1p2/4p3/3PP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 7`
- `modern-steinitz-duras-5c4` (C71, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.c4
  - FEN: `r1bqkbnr/1pp2ppp/p1np4/4p3/B1P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq - 0 5`
- `modern-steinitz-5oo-kecskemet` (C72, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.O-O Bd7 6.c3 Nf6 7.d4 Be7 8.Nbd2 O-O 9.Re1 Be8
  - FEN: `r2qbrk1/1pp1bppp/p1np1n2/4p3/B2PP3/2P2N2/PP1N1PPP/R1BQR1K1 w - - 5 10`

- **5.c3 Bd7 6.d4 Nge7 (Rubinstein).** Black holds e5 with ...Ng6 (or plays ...g6 in other lines). This is the main positional line; status respectable.
- **5.Bxc6+ bxc6 6.d4 f6.** Black is solid with the bishop pair.
- **5.c4 (Duras).** White clamps d5, Maróczy-style.
- **5.O-O Bd7 ... 9...Be8 (Kecskemét).** A slow Closed-type structure.

- `noahs-ark-trap` (C71, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.d4 b5 6.Bb3 Nxd4 7.Nxd4 exd4 8.Qxd4 c5 9.Qd5 Be6 10.Qc6+ Bd7 11.Qd5 c4
  - FEN: `r2qkbnr/3b1ppp/p2p4/1p1Q4/2p1P3/1B6/PPP2PPP/RNB1K2R w KQkq - 0 12`

- **Noah's Ark trap.** 5.d4?! b5 6.Bb3 Nxd4 7.Nxd4 exd4 8.Qxd4?? c5 9.Qd5 Be6 10.Qc6+ Bd7 11.Qd5 c4 traps the bishop. Better are 5.c3, 5.Bxc6+ or 5.O-O, and 8.Bd5 or 8.c3 instead of 8.Qxd4 (Wikipedia). Steiner–Capablanca, Budapest 1929 followed the trap through 11...c4, and White resigned after 32 moves.
- The lichess dataset reaches the same position by the order 4...b5 5.Bb3 d6 6.d4.
- Difficulty 1.

### 13.2 4...b5 5.Bb3 Na5 Norwegian (Taimanov) Variation; 5...Bc5 Graz

- `norwegian` (C70, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 b5 5.Bb3 Na5 6.O-O d6 7.d4 Nxb3 8.axb3
  - FEN: `r1bqkbnr/2p2ppp/p2p4/1p2p3/3PP3/1P3N2/1PP2PPP/RNBQ1RK1 b kq - 0 8`
- `norwegian-nightingale` (C70, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 b5 5.Bb3 Na5 6.Bxf7+ Kxf7 7.Nxe5+ Ke7
  - FEN: `r1bq1bnr/2ppk1pp/p7/np2N3/4P3/8/PPPP1PPP/RNBQK2R w KQ - 1 8`
- `graz-4b5-bc5` (C70, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 b5 5.Bb3 Bc5
  - FEN: `r1bqk1nr/2pp1ppp/p1n5/1pb1p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 2 6`

- **Norwegian idea.** Black wins the bishop pair at once (...Na5x b3), but spends many tempi on it. The usual reply is 6.O-O d6 7.d4 Nxb3 8.axb3, after which White has a lead and the open a-file.
- **6.Bxf7+ (Nightingale Gambit).** A speculative piece sacrifice, mostly seen in blitz. ChessBase says it is objectively insufficient for White.
- Status: dubious ("too time-consuming"). Difficulty 2.

### 13.3 Deferred sidelines

- `cozio-deferred` (C70, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nge7
  - FEN: `r1bqkb1r/1pppnppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5`
- `fianchetto-deferred` (C70, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 g6
  - FEN: `r1bqkbnr/1ppp1p1p/p1n3p1/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5`
- `schliemann-deferred` (C70, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 f5
  - FEN: `r1bqkbnr/1ppp2pp/p1n5/4pp2/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5`
- `classical-deferred` (C70, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Bc5
  - FEN: `r1bqk1nr/1ppp1ppp/p1n5/2b1p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5`
- `bird-deferred` (C70, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nd4
  - FEN: `r1bqkbnr/1ppp1ppp/p7/4p3/B2nP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5`

These are the 3rd-move sidelines with ...a6 and Ba4 thrown in. The bishop on a4 can always come back to b3, and Black has ...b5 available to break pins, so the ideas follow §§5–10. All are rare. Difficulty 1–2.

---

## 14. 4...Nf6: White's 5th-move alternatives (C77)

- `morphy-4nf6-5oo` (C78, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O
  - FEN: `r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5`
- `anderssen-5d3` (C77, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.d3
  - FEN: `r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5`
- `duras-5d3-d6-c4` (C77, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.d3 d6 6.c4
  - FEN: `r1bqkb1r/1pp2ppp/p1np1n2/4p3/B1P1P3/3P1N2/PP3PPP/RNBQK2R b KQkq - 0 6`
- `mackenzie-5d4` (C77, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.d4 exd4 6.O-O
  - FEN: `r1bqkb1r/1ppp1ppp/p1n2n2/8/B2pP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 1 6`
- `wormald-5qe2` (C77, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.Qe2 b5 6.Bb3 Be7 7.d4 d6 8.c3 Bg4
  - FEN: `r2qk2r/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP2QPPP/RNB1K2R w KQkq - 1 9`
- `tarrasch-5nc3` (C77, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.Nc3
  - FEN: `r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 3 5`
- `bayreuth-5bxc6` (C77, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.Bxc6 dxc6 6.d3
  - FEN: `r1bqkb1r/1pp2ppp/p1p2n2/4p3/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 6`

- **5.d3 (Anderssen).** Protects e4 and keeps d3/c3 structures. It often transposes to 6.d3 lines after O-O and ...Be7. Respectable.
- **5.d3 d6 6.c4 (Duras).** Clamps d5. Rare.
- **5.d4 (Mackenzie).** 5...exd4 6.O-O opens the centre early. It is *not* the "Centre Attack", which is 5.O-O Be7 6.d4 (C84). Rare.
- **5.Qe2 (Wormald).** The queen guards e4 and Rd1 becomes possible; e.g. 5...b5 6.Bb3 Be7 7.d4 d6 8.c3 Bg4 (lichess "Grünfeld Variation"). Rare.
- **5.Nc3 (Tarrasch).** Four Knights style. Rare.
- **5.Bxc6 (Bayreuth).** The Exchange with ...Nf6 already played. 6.Nxe5?! would allow ...Nxe4 or ...Qd4, regaining the pawn, so White plays 6.d3. Rare.

---

## 15. 5.O-O: Open Defence 5...Nxe4 (C80–C83)

- `open` (C80, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6
  - FEN: `r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq - 1 9`

- **Idea.** Black grabs e4, gives it back structurally with ...b5 and ...d5, and gets free, active piece play. The knight on e4, ...Bc5/...Be7 and ...Be6 are the usual set-up.
- **The cost.** The d5-pawn can become a target (c4 levers, Rd1, Nd4). White's e5-pawn cramps Black's kingside.
- **White's plans:** c3 + Nbd2 + Bc2 to challenge the e4-knight; Qe2/Rd1 and c4 against d5; Nd4 to trade or hit e6/c6; f4-f5 kingside expansion.
- **Black's plans:** ...Nc5 or ...Nxf2 tactics, ...f6/...f5 breaks, ...d4 to free the position, ...Bg6/...Bf5 activity.

### 15.1 9.c3 Bc5: Dilworth, 11...f5, 11...Bf5 (C82)

- `open-9c3-bc5` (C82, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.c3 Bc5 10.Nbd2 O-O 11.Bc2
  - FEN: `r2q1rk1/2p2ppp/p1n1b3/1pbpP3/4n3/2P2N2/PPBN1PPP/R1BQ1RK1 b - - 4 11`
- `open-dilworth` (C82, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.c3 Bc5 10.Nbd2 O-O 11.Bc2 Nxf2 12.Rxf2 f6 13.exf6 Bxf2+ 14.Kxf2 Qxf6
  - FEN: `r4rk1/2p3pp/p1n1bq2/1p1p4/8/2P2N2/PPBN1KPP/R1BQ4 w - - 0 15`
- `open-11f5` (C82, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.c3 Bc5 10.Nbd2 O-O 11.Bc2 f5 12.Nb3 Bb6 13.Nfd4 Nxd4 14.Nxd4 Bxd4 15.cxd4
  - FEN: `r2q1rk1/2p3pp/p3b3/1p1pPp2/3Pn3/8/PPB2PPP/R1BQ1RK1 b - - 0 15`
- `open-11bf5` (C82, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.c3 Bc5 10.Nbd2 O-O 11.Bc2 Bf5 12.Nb3 Bg6 13.Nfd4 Bxd4 14.cxd4 a5 15.Be3 a4
  - FEN: `r2q1rk1/2p2ppp/2n3b1/1p1pP3/p2Pn3/1N2B3/PPB2PPP/R2Q1RK1 w - - 0 16`

- **Dilworth (11...Nxf2).** Black gives two minor pieces for a rook and a pawn and gets f-file play against the exposed white king. Yusupov used it repeatedly. Another branch is 13.Nf1 Bxf2+ 14.Kxf2 fxe5 15.Kg1 (Wikipedia).
- **11...f5 (older).** Supports e4. The famous game is Smyslov–Reshevsky, USSR–USA radio match 1945 (result not confirmed). Wikipedia mentions recaptures 15.Qxd4 (Bogoljubow) and 15.cxd4 (La Grande Variation).
- **11...Bf5.**

### 15.2 9.c3 Be7 and the Tarrasch trap (C83)

- `open-9c3-be7` (C83, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.c3 Be7 10.Re1 O-O 11.Nd4 Nxe5
  - FEN: `r2q1rk1/2p1bppp/p3b3/1p1pn3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w - - 0 12`
- `open-tarrasch-trap` (C83, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.c3 Be7 10.Re1 O-O 11.Nd4 Qd7 12.Nxe6 fxe6 13.Rxe4 dxe4 14.Qxd7
  - FEN: `r4rk1/2pqb1pp/p1n1B3/1p2P3/4p3/2P5/PP3PPP/RNBQ2K1 b - - 0 14`

- **Trap.** After 10.Re1 O-O 11.Nd4, the natural 11...Qd7?? loses to 12.Nxe6 fxe6 13.Rxe4!, because 13...dxe4 opens the d-file and 14.Qxd7 wins the queen. (An earlier version of this doc gave 14.Bxe6+, which is refuted by 14...Qxe6; corrected after review.) 11...Nxe5! is best (lichess "Breslau").
- **Games.** Zukertort–Tarrasch, Frankfurt 1887 and Gunsberg–Tarrasch, Manchester 1890 (Wikipedia).
- Difficulty 3.

### 15.3 9.Nbd2 Bernstein; the 11.Ng5 sacrifice (C80)

- `open-bernstein-11ng5` (C80, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.Nbd2 Nc5 10.c3 d4 11.Ng5 dxc3 12.Nxe6 fxe6 13.bxc3 Qd3 14.Bc2 Qxc3 15.Nb3
  - FEN: `r3kb1r/2p3pp/p1n1p3/1pn1P3/8/1Nq5/P1B2PPP/R1BQ1RK1 b kq - 1 15`

- **The line.** 9.Nbd2 Nc5 10.c3 d4 11.Ng5!? (Igor Zaitsev's idea, introduced in Karpov–Korchnoi, World Championship 1978). The point is that 11...Qxg5 12.Qf3 regains material.
- **Kasparov–Anand 1995.** Kasparov's prepared 14.Bc2! decided game 10 of the PCA match, 1-0.
- Status: respectable. Difficulty 5.

### 15.4 9.Qe2 Howell Attack (C81)

- `open-howell` (C81, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6 9.Qe2 Be7 10.Rd1 O-O 11.c4 bxc4 12.Bxc4 Qd7
  - FEN: `r4rk1/2pqbppp/p1n1b3/3pP3/2B1n3/5N2/PP2QPPP/RNBR2K1 w - - 1 13`

The queen and Rd1 line up against d5, with c4 to open lines. Keres played it against Euwe and Reshevsky in 1948, and Caruana has used it (Wikipedia). Status: respectable. Difficulty 4.

### 15.5 6...exd4 Riga Variation (C80)

- `open-riga` (C80, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Nxe4 6.d4 exd4 7.Re1 d5 8.Nxd4 Bd6 9.Nxc6 Bxh2+ 10.Kh1 Qh4 11.Rxe4+ dxe4 12.Qd8+ Qxd8 13.Nxd8+ Kxd8 14.Kxh2
  - FEN: `r1bk3r/1pp2ppp/p7/8/B3p3/8/PPP2PPK/RNB5 b - - 0 14`

- **Idea.** Black skips ...b5 and opens the centre.
- **Forcing main line.** 11.Rxe4+! is a deliberate exchange sacrifice and leads to an ending that Wikibooks calls winning for White, though precarious.
- **Pitfalls for White.** 9.f3?? Qh4. 10.Kxh2?? Qh4+ 11.Kg1 gives a perpetual. 7.Nxd4?! lets Black off.
- Status: dubious. Difficulty 4.

**Open Defence model games**

- **Kasparov–Anand, PCA World Championship, New York 1995, game 10, 1-0.** The 11.Ng5 line with Kasparov's prepared 14.Bc2!: a pawn sacrifice, then a rook sacrifice. Kasparov used about six minutes on his first 21 moves (Mark Weeks). It is the textbook example of home preparation in a forcing line.
- **Karpov–Korchnoi, World Championship, Baguio 1978.** 11.Ng5!? was introduced in this match. The game number and result were not confirmed.

---

## 16. 5.O-O: Arkhangelsk, Modern Arkhangelsk, Møller, Russian (C78–C79)

- `arkhangelsk` (C78, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O b5 6.Bb3 Bb7 7.Re1 Bc5 8.c3 d6 9.d4 Bb6
  - FEN: `r2qk2r/1bp2ppp/pbnp1n2/1p2p3/3PP3/1BP2N2/PP3PPP/RNBQR1K1 w kq - 1 10`
- `modern-arkhangelsk` (C78, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O b5 6.Bb3 Bc5 7.a4 Rb8 8.c3 d6 9.d4 Bb6 10.axb5 axb5 11.Na3 O-O 12.Nxb5 Bg4
  - FEN: `1r1q1rk1/2p2ppp/1bnp1n2/1N2p3/3PP1b1/1BP2N2/1P3PPP/R1BQ1RK1 w - - 1 13`
- `moller` (C78, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Bc5 6.c3 b5 7.Bb3 d6
  - FEN: `r1bqk2r/2p2ppp/p1np1n2/1pb1p3/4P3/1BP2N2/PP1P1PPP/RNBQ1RK1 w kq - 0 8`
- `russian-5d6` (C79, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O d6 6.Bxc6+ bxc6 7.d4 Nxe4 8.Re1 f5 9.dxe5 d5 10.Nc3
  - FEN: `r1bqkb1r/2p3pp/p1p5/3pPp2/4n3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 1 10`

- **Arkhangelsk (6...Bb7).** Black develops actively, with ...Bc5 or ...Be7 and the bishop on b7 aimed at e4. That pressure becomes real once the c6-knight moves; ...Na5 also hits the b3-bishop. After 7.Re1 Bc5 8.c3 d6 9.d4 Bb6 the most covered continuation is 10.Be3; 10.Bg5, 10.a4 and 10.h3 are also played. White's standard levers are a4 against b5 and d4 against e5/Bc5.
- **Modern (Neo-) Arkhangelsk (6...Bc5).** The bishop goes in front of the pawn chain before ...d6. In the main line White wins the b5-pawn (10.axb5 axb5 11.Na3 O-O 12.Nxb5), and Black gets ...Bg4 pressure on e4 and d4 for it (ChessBase).
  - The order 7.c3 d6 8.a4 Rb8 transposes.
  - 5...Bc5 (Møller) usually transposes after 6.c3 b5 7.Bb3 d6.
- **Russian / Steinitz Deferred (5...d6).** 6.Bxc6+ bxc6 7.d4 Nxe4 8.Re1 f5 9.dxe5 d5 10.Nc3 (Boleslavsky line, lichess) is sharp.
- **Status.** Arkhangelsk and Modern Arkhangelsk are respectable, with active elite use as an alternative to 5...Be7. Møller and Russian are rare. Difficulty 3–4.

---

## 17. 5...Be7 Closed Ruy Lopez (C84–C99)

- `closed` (C84, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7
  - FEN: `r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6`
- `closed-main-9h3` (C92, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3
  - FEN: `r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 b - - 0 9`

**The logic of the main line.** 6.Re1 defends e4, so Bxc6 followed by Nxe5 becomes a real threat. 6...b5 7.Bb3 removes it. 7...d6 shores up e5. 8.c3 prepares d4 and gives the bishop c2. 8...O-O. 9.h3 stops ...Bg4 so that d4 can be maintained.

Black then picks a 9th-move system:

| 9th move | System | Plan |
|---|---|---|
| ...Na5 | Chigorin | ...c5 and ...Qc7 queenside space |
| ...Nb8 | Breyer | reroute to d7 |
| ...Bb7 | Zaitsev | pressure on e4 |
| ...h6 | Smyslov | stop Ng5 |
| ...Nd7 | Karpov | ...Bf6 pressure on d4 |
| ...Be6 | Kholmov | trade the Bb3 |
| ...a5 | (Keres label in some DBs) | chase the bishop with ...a4 |

**Typical White plans in all of them:**

- d4, then Nbd2-f1-g3 (or -e3);
- Bc2;
- a4 against b5;
- d5 to close the centre, then a kingside attack (Nh2, f4) or a queenside clamp (b4/a4);
- dxc5/dxe5 to open the d-file.

**Status.** The 9.h3 complex is respectable. It is still seen, but since about 2015 elite White players more often choose 6.d3 or Anti-Marshall systems (8.h3/8.a4) to avoid both the Marshall and deep 9.h3 theory.

### 17.1 9...Na5 Chigorin Defence (C96–C99)

- `chigorin` (C97, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Na5 10.Bc2 c5 11.d4 Qc7
  - FEN: `r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12`
- `chigorin-12cxd4` (C99, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Na5 10.Bc2 c5 11.d4 Qc7 12.Nbd2 cxd4 13.cxd4 Nc6 14.Nb3
  - FEN: `r1b2rk1/2q1bppp/p1np1n2/1p2p3/3PP3/1N3N1P/PPB2PP1/R1BQR1K1 b - - 2 14`
- `chigorin-12nc6-13d5` (C98, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Na5 10.Bc2 c5 11.d4 Qc7 12.Nbd2 Nc6 13.d5
  - FEN: `r1b2rk1/2q1bppp/p1np1n2/1ppPp3/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 b - - 0 13`
- `chigorin-yugoslav` (C97, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Na5 10.Bc2 c5 11.d4 Qc7 12.Nbd2 Bd7 13.Nf1 Rfe8 14.Ne3 g6
  - FEN: `r3r1k1/2qbbp1p/p2p1np1/npp1p3/3PP3/2P1NN1P/PPB2PP1/R1BQR1K1 w - - 0 15`
- `chigorin-keres-11nd7` (C96, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Na5 10.Bc2 c5 11.d4 Nd7
  - FEN: `r1bq1rk1/3nbppp/p2p4/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12`

- **Black.** Gains queenside space with ...c5 and ...Qc7. The knight returns with ...Nc6 or goes to c4. ...cxd4 opens the c-file. In the 12...cxd4 13.cxd4 Nc6 14.Nb3 structure, ...a5-a4 kicks the b3-knight.
- **White.** d5 closes the centre and leaves the a5/b7 knight offside (Karpov–Unzicker). Nbd2-f1-e3/g3, then kingside play. a4 opens the a-file.
- **ECO split (Wikipedia):** C96 = deviations after 10.Bc2; C97 = 11...Qc7 with 12th-move alternatives; C98 = 12.Nbd2 Nc6; C99 = 12.Nbd2 cxd4 13.cxd4.
- **Keres Variation (11...Nd7).** Keres used it in the 1960s.
- Status: rare to respectable (older main line). Difficulty 3.

**Model game: Karpov–Unzicker, Nice Olympiad 1974 (C98).** After 12...Nc6 13.d5!, Karpov squeezed the queenside and stranded Black's pieces; Unzicker reportedly complained afterwards about his trapped knight. ChessBase calls it "Karpov at his best". The result (Karpov win) is implied by these sources but wasn't stated in a fetched score.

### 17.2 9...Nb8 Breyer Defence (C94–C95)

- `breyer` (C95, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Nb8 10.d4 Nbd7 11.Nbd2 Bb7 12.Bc2 Re8 13.Nf1 Bf8 14.Ng3 g6 15.a4 c5 16.d5 c4 17.Bg5
  - FEN: `r2qrbk1/1b1n1p1p/p2p1np1/1p1Pp1B1/P1p1P3/2P2NNP/1PB2PP1/R2QR1K1 b - - 1 17`

- **Black.** The knight reroutes b8-d7. That frees the c-pawn and the b7-square for the bishop and over-protects e5. Then ...Re8, ...Bf8, ...g6 and ...Bg7 give a flexible, solid set-up.
- **White.** Nbd2-f1-g3, Bc2, a4 against b5, Bg5. 15.a4 is the main move (15.b3 is second). After 15.a4 c5 16.d5 c4, 17.Bg5 is the "absolute main line" (ChessBase/Eljanov). 10.d3 (C94, "Quiet Variation") avoids theory.
- Status: respectable. It is one of the most trusted Closed systems, though White's freedom to choose plans has reduced its use. Difficulty 4.

**Model games (Breyer).**

- **Fischer–Spassky, World Championship, Reykjavik 1972, game 10, 1-0 (C95).** Fischer beat Spassky's favourite Breyer by winning a pawn, denying counterplay and converting the endgame (Chess.com highlights and blog). It is a model of patient conversion.
- **Spassky–Tal, Candidates final, Tbilisi 1965.** Wikipedia notes Spassky won two games in a row in this match. Which games used the Breyer was not confirmed.

### 17.3 9...Bb7 Zaitsev (Flohr–Zaitsev) Variation (C92)

- `zaitsev` (C92, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Bb7 10.d4 Re8 11.Nbd2 Bf8 12.a4 h6 13.Bc2 exd4 14.cxd4 Nb4 15.Bb1 c5 16.d5 Nd7 17.Ra3 c4
  - FEN: `r2qrbk1/1b1n1pp1/p2p3p/1p1P4/Pnp1P3/R4N1P/1P1N1PP1/1BBQR1K1 w - - 0 18`
- `zaitsev-17f5` (C92, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Bb7 10.d4 Re8 11.Nbd2 Bf8 12.a4 h6 13.Bc2 exd4 14.cxd4 Nb4 15.Bb1 c5 16.d5 Nd7 17.Ra3 f5
  - FEN: `r2qrbk1/1b1n2p1/p2p3p/1ppP1p2/Pn2P3/R4N1P/1P1N1PP1/1BBQR1K1 w - - 0 18`
- `zaitsev-11ng5-repetition` (C92, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Bb7 10.d4 Re8 11.Ng5 Rf8 12.Nf3 Re8
  - FEN: `r2qr1k1/1bp1bppp/p1np1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 5 13`

- **Black.** Bb7, Re8 and Nf6 pile up on e4. The f8-bishop backs up e5, and ...exd4 and ...Nb4 hit c2 and d3.
- **The weakness is g5.** 11.Ng5 Rf8 12.Nf3 Re8 repeats, so a White player who wants to win must play 11.Nbd2. Main 12th moves are 12.a4, 12.a3, 12.d5 and 12.Bc2. 12.Nf1? exd4 13.cxd4 Na5 14.Bc2 Nxe4 is dubious (Wikipedia).
- **Main line.** 12.a4 h6 13.Bc2 exd4 14.cxd4 Nb4 15.Bb1 c5 16.d5 Nd7 17.Ra3!. The rook lift heads to e3, f3 or g3 for a kingside attack. The structure is Benoni-like. 17...c4 is the principal reply; 17...f5 is sharper and riskier.
- **Status.** Respectable; it remains one of the main battlegrounds of the Closed Ruy. 9...Re8 can transpose (lichess labels 9...Re8 "Zaitsev System" and 9...Bb7 "Flohr System"). Difficulty 5.

**Model game: Kasparov–Karpov, World Championship, Lyon 1990, game 20, 1-0 (C92).** Kasparov's kingside attack against the Zaitsev in the decisive phase of their fifth match (365chess lists it as 1-0; ChessWorld calls it a brilliancy). It shows how the a3-rook lift and the attack on the Black king work.

### 17.4 Other 9th moves for Black after 9.h3

- `smyslov-9h6` (C93, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 h6 10.d4 Re8 11.Nbd2 Bf8
  - FEN: `r1bqrbk1/2p2pp1/p1np1n1p/1p2p3/3PP3/1BP2N1P/PP1N1PP1/R1BQR1K1 w - - 3 12`
- `karpov-9nd7` (C92, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Nd7 10.d4 Bf6 11.a4 Bb7 12.Na3 exd4 13.cxd4 Re8 14.axb5 axb5 15.Bf4
  - FEN: `r2qr1k1/1bpn1ppp/2np1b2/1p6/3PPB2/NB3N1P/1P3PP1/R2QR1K1 b - - 1 15`
- `kholmov-9be6` (C92, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Be6 10.d4 Bxb3 11.axb3 exd4 12.cxd4 d5 13.e5 Ne4 14.Nc3 f5 15.exf6 Bxf6 16.Nxe4 dxe4 17.Rxe4 Qd5 18.Rg4
  - FEN: `r4rk1/2p3pp/p1n2b2/1p1q4/3P2R1/1P3N1P/1P3PP1/R1BQ2K1 b - - 2 18`
- `keres-9a5` (C92, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 a5 10.d4 a4 11.Bc2
  - FEN: `r1bq1rk1/2p1bppp/2np1n2/1p2p3/p2PP3/2P2N1P/PPB2PP1/RNBQR1K1 b - - 1 11`

- **9...h6 (Smyslov, C93).** Stops Ng5, so the Zaitsev-type set-up (...Re8, ...Bf8) is safe, at the cost of a tempo. Model: Deep Blue–Kasparov, 1997 match, game 2. Kasparov played the Smyslov and lost (Wikipedia).
- **9...Nd7 (Karpov, C92).** Prepares ...Bf6 against d4 and ...Nb6. Karpov played it several times in the 1990 match. Wikipedia says Kasparov "achieved a significant advantage" in game 18 but doesn't state the result. Wikipedia also notes 9...Nd7 is confusingly called "Chigorin" in some sources.
- **9...Be6 (Kholmov, C92).** Trades off the Spanish bishop and leads to simplified, slightly better positions for White. It was popular in the 1980s and is played less now (Wikipedia).
- **9...a5.** ...a4 chases the bishop to c2. Some databases label it "Keres (9...a5)", but Wikipedia and lichess use "Keres" for 11...Nd7 in the Chigorin.
- All rare. Difficulty 4.

### 17.5 White's 9th-move alternatives: 9.d4 (Yates) Bg4 Bogoljubow; 9.d3 Pilnik

- `bogoljubow-9d4-bg4` (C91, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.d4 Bg4 10.d5 Na5 11.Bc2 c6 12.h3 Bc8 13.dxc6 Qc7 14.Nbd2 Qxc6 15.Nf1
  - FEN: `r1b2rk1/4bppp/p1qp1n2/np2p3/4P3/2P2N1P/PPB2PP1/R1BQRNK1 b - - 1 15`
- `bogoljubow-10be3` (C91, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.d4 Bg4 10.Be3 exd4 11.cxd4 Na5 12.Bc2 c5 13.h3 Bh5
  - FEN: `r2q1rk1/4bppp/p2p1n2/npp4b/3PP3/4BN1P/PPB2PP1/RN1QR1K1 w - - 1 14`
- `pilnik-9d3` (C90, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.d3 Na5 10.Bc2 c5 11.Nbd2
  - FEN: `r1bq1rk1/4bppp/p2p1n2/npp1p3/4P3/2PP1N2/PPBN1PPP/R1BQR1K1 b - - 1 11`

- **9.d4 Bg4.** Without h3, ...Bg4 pins the f3-knight against d4. White reinforces with 10.Be3 or closes with 10.d5 (10...Na5 is most common). The variation is named after Capablanca–Bogoljubow, London 1922 (Wikipedia).
- **9.d3 (Pilnik/Teichmann).** Quiet and flexible: Nbd2-f1-g3 first, and d4 later if at all. Teichmann–Schlechter, Karlsbad 1911 is the source game (Wikipedia).
- **Other names (lichess).** 9.a3 is the Suetin and 9.Bc2 is the Lutikov.
- Rare/respectable. Difficulty 3.

### 17.6 7...d6 sidelines: 8.a4, 8.d4?!; 7...Bb7 Trajković; 6...d6 Averbakh

- `anti-classical-8a4` (C88, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.a4
  - FEN: `r1bqk2r/2p1bppp/p1np1n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQR1K1 b kq - 0 8`
- `noahs-ark-closed-8d4` (C88, trap): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.d4 Nxd4 9.Nxd4 exd4 10.Qxd4 c5
  - FEN: `r1bqk2r/4bppp/p2p1n2/1pp5/3QP3/1B6/PPP2PPP/RNB1R1K1 w kq - 0 11`
- `trajkovic-7bb7` (C88, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 Bb7 8.c3 d5 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 Nf4
  - FEN: `r2qk2r/1bp1bppp/p7/1p2R3/5n2/1BP5/PP1P1PPP/RNBQ2K1 w kq - 1 12`
- `averbakh-6d6` (C87, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 d6 7.Bxc6+ bxc6 8.d4
  - FEN: `r1bqk2r/2p1bppp/p1pp1n2/4p3/3PP3/5N2/PPP2PPP/RNBQR1K1 b kq - 0 8`

- **8.a4 (Anti-Classical).** Puts immediate pressure on b5 before committing to c3.
- **8.d4?!** Lets Black use the Noah's Ark motif: after 10.Qxd4?? c5 the queen must move, and ...c4 traps the b3-bishop (lichess names this C88 "Noah's Ark Trap"). Note that 11.Qd5?? simply loses to ...Nxd5.
- **7...Bb7 (Trajković).** Aims for a Marshall-style ...d5 before castling.
- **6...d6 (Averbakh).** Defends e5 directly and doesn't commit to ...b5.
- All rare. Difficulty 2–3.

### 17.7 The d3 structure: Nb1-d2-f1-g3

- `closed-6d3-nf1-g3-illustrative` (C90, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.d3 Na5 10.Bc2 c5 11.Nbd2 Nc6 12.Nf1 Re8 13.Ng3
  - FEN: `r1bqr1k1/4bppp/p1np1n2/1pp1p3/4P3/2PP1NN1/PPB2PPP/R1BQR1K1 b - - 5 13`

This is an illustrative, legal sequence (not a cited game) of White's standard regrouping: Re1, c3, d3, then Nbd2-f1-g3. The knight heads for the kingside (f5/h5), and d3-d4 can come later in one go. It is the core plan of 9.d3 and of the modern 6.d3 systems.

---

## 18. Marshall Attack and Anti-Marshalls (C88–C89)

### 18.1 Marshall Attack 7...O-O 8.c3 d5

- `marshall` (C89, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 c6 12.d4 Bd6 13.Re1 Qh4 14.g3 Qh3
  - FEN: `r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1 w - - 1 15`
- `marshall-spassky-15be3` (C89, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 c6 12.d4 Bd6 13.Re1 Qh4 14.g3 Qh3 15.Be3 Bg4 16.Qd3 Rae8 17.Nd2 Re6 18.a4 Qh5
  - FEN: `5rk1/5ppp/p1pbr3/1p1n3q/P2P2b1/1BPQB1P1/1P1N1P1P/R3R1K1 w - - 1 19`
- `marshall-15re4` (C89, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 c6 12.d4 Bd6 13.Re1 Qh4 14.g3 Qh3 15.Re4 g5 16.Qf1 Qh5 17.Nd2 Bf5 18.f3
  - FEN: `r4rk1/5p1p/p1pb4/1p1n1bpq/3PR3/1BP2PP1/PP1N3P/R1B2QK1 b - - 0 18`
- `marshall-12d3` (C89, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 c6 12.d3 Bd6 13.Re1 Bf5 14.Qf3 Qh4 15.g3 Qh3
  - FEN: `r4rk1/5ppp/p1pb4/1p1n1b2/8/1BPP1QPq/PP3P1P/RNB1R1K1 w - - 1 16`
- `marshall-steiner` (C89, dubious): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5 9.exd5 e4
  - FEN: `r1bq1rk1/2p1bppp/p1n2n2/1p1P4/4p3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 10`

- **Black's idea.** Gambit the e-pawn for a lasting initiative against White's king, with pieces swarming over before White develops the queenside.
- **Attacking patterns for Black:**
  - ...Qh4 and ...Qh3 after White's forced g3, leaving light-square holes around g2;
  - ...Bd6 hitting g3 and h2;
  - ...Bg4 hitting d1/f3;
  - ...Rae8 with ...Re6 or a ...Rf6/...Rh6 lift;
  - ...f5-f4 to break open g3 and the e3-bishop;
  - ...Bxg3 sacrifices when the f2/g3 shield is thin.
- **White's resources:**
  - Be3, Qd3/Qf1, Nd2 and a4: develop and hit b5 to open the a-file;
  - 15.Re4!? g5 16.Qf1 Qh5 17.Nd2 Bf5 18.f3, the sharper rook lift;
  - Bxd5 to remove the d5-knight;
  - returning the pawn at the right moment.
- **12.d3.** Keeps d4 free and blunts ...Bg4 ideas. After 13...Bf5 14.Qf3 Qh4 15.g3 Qh3 it is considered a critical test.
- **9...e4 (Steiner).** Inferior.
- **Status.** Respectable. Top players such as Aronian and Ding Liren still use it, with a very high draw rate at the top. Against unprepared amateurs it is dangerous (Wikipedia).
- Difficulty 4 (5 for the deep 15.Be3 lines).

- `marshall-capablanca-1918` (C89, historical): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d5 9.exd5 Nxd5 10.Nxe5 Nxe5 11.Rxe5 Nf6 12.Re1 Bd6 13.h3 Ng4 14.Qf3 Qh4 15.d4 Nxf2 16.Re2 Bg4 17.hxg4 Bh2+ 18.Kf1 Bg3 19.Rxf2 Qh1+ 20.Ke2 Bxf2 21.Bd2 Bh4 22.Qh3 Rae8+ 23.Kd3 Qf1+ 24.Kc2 Bf2 25.Qf3 Qg1 26.Bd5 c5 27.dxc5 Bxc5 28.b4 Bd6 29.a4 a5 30.axb5 axb4 31.Ra6 bxc3 32.Nxc3 Bb4 33.b6 Bxc3 34.Bxc3 h6 35.b7 Re3 36.Bxf7+
  - FEN: `5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36`

- **Model game: Capablanca–Marshall, New York (Manhattan CC) 1918, 1-0.** This is the debut of the gambit, with Marshall's original 11...Nf6 (11...c6 later replaced it). Capablanca took the pawn, defended precisely (16.Re2, 21.Bd2!, a king walk to c2), returned material and won. It is the classic lesson in defending the Marshall.
- **Move-order note.** Wikipedia's 11...Nf6 analysis gives 12.d4 Bd6 13.Re1 Ng4 14.h3 Qh4 15.Qf3. The commonly published game order is 12.Re1 Bd6 13.h3 Ng4 14.Qf3 Qh4 15.d4. Both reach the identical position before 15...Nxf2, and the moves from 15...Nxf2 to 36.Bxf7+ match Wikipedia exactly.

### 18.2 Anti-Marshall systems

- `anti-marshall-8a4` (C88, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.a4 b4 9.d3 d6 10.a5 Be6
  - FEN: `r2q1rk1/2p1bppp/p1npbn2/P3p3/1p2P3/1B1P1N2/1PP2PPP/RNBQR1K1 w - - 1 11`
- `anti-marshall-8a4-bb7` (C88, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.a4 Bb7 9.d3
  - FEN: `r2q1rk1/1bppbppp/p1n2n2/1p2p3/P3P3/1B1P1N2/1PP2PPP/RNBQR1K1 b - - 0 9`
- `anti-marshall-8h3` (C88, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.h3 Bb7 9.d3
  - FEN: `r2q1rk1/1bppbppp/p1n2n2/1p2p3/4P3/1B1P1N1P/PPP2PP1/RNBQR1K1 b - - 0 9`
- `anti-marshall-8d4` (C88, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.d4 Nxd4 9.Nxd4 exd4 10.e5 Ne8
  - FEN: `r1bqnrk1/2ppbppp/p7/1p2P3/3p4/1B6/PPP2PPP/RNBQR1K1 w - - 1 11`
- `anti-marshall-8d3` (C90, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.d3 d6 9.c3
  - FEN: `r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BPP1N2/PP3PPP/RNBQR1K1 b - - 0 9`
- `marshall-declined-8c3-d6` (C92, respectable): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 O-O 8.c3 d6 9.h3
  - FEN: `r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 b - - 0 9`

- **8.a4.** The traditional Anti-Marshall. It hits b5 before ...d5 is possible; 8...b4 9.d3 d6 10.a5 Be6 and 8...Bb7 9.d3 are the main replies.
- **8.h3.** The more popular choice in recent decades. It prepares d3/d4 without allowing ...Bg4: 8...Bb7 9.d3.
- **8.d4.** 8...Nxd4 9.Nxd4 exd4 10.e5 Ne8.
- **8.d3.** Quiet; 8...d6 9.c3 reaches Pilnik-type positions.
- **8.c3 d6.** Black can always decline the Marshall and transpose to the 9.h3 main line.
- **Status.** Popular. These are the main reasons 7...O-O is so common, since Black then has to know both worlds. Difficulty 3.

---

## 19. 5...Be7: White's 6th-move alternatives

### 19.1 6.d3 Martinez Variation, the modern d3 Spanish (C84)

- `closed-6d3-a3` (C84, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.d3 b5 7.Bb3 d6 8.a3 O-O 9.Nc3
  - FEN: `r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/PBNP1N2/1PP2PPP/R1BQ1RK1 b - - 2 9`
- `closed-6d3-a4` (C84, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.d3 b5 7.Bb3 d6 8.a4 b4 9.a5 O-O 10.Nbd2 Be6 11.Nc4
  - FEN: `r2q1rk1/2p1bppp/p1npbn2/P3p3/1pN1P3/1B1P1N2/1PP2PPP/R1BQ1RK1 b - - 4 11`
- `closed-6d3-c3-d4` (C84, popular): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.d3 d6 7.c3 O-O 8.Re1 b5 9.Bc2 Bb7 10.Nbd2 Re8 11.h3 Bf8 12.d4
  - FEN: `r2qrbk1/1bp2ppp/p1np1n2/1p2p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 b - - 0 12`

- **White.** Keeps e4 rock-solid and avoids the Marshall and ...Nxe4 tactics, saving d4 for later. Typical plans:
  - c3 + Re1 + Nbd2-f1-g3 + h3 (Bc2 or Ba2 retreat);
  - a3 + Nc3 (the 8.a3 O-O 9.Nc3 tabiya, first reached in Anand–Adams, Grenke 2013);
  - a4 to fix and pressure b5 (8.a4 b4 9.a5 O-O 10.Nbd2 Be6 11.Nc4!).
- **Black.** ...b5, ...d6, ...O-O, then Zaitsev-like ...Bb7, ...Re8, ...Bf8 or ...Na5/...c5. The ...d5 break is available when White is slow. 8...Na5 9.Ba2 c5 10.Nc3 Be6 is an alternative (Wikipedia).
- **Status.** Popular. Since roughly 2010–2015 it has been the elite way of playing the Closed Ruy, maneuvering rather than forcing theory. Difficulty 2.

### 19.2 6.Qe2 Worrall Attack (C86)

- `worrall-6qe2` (C86, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Qe2 b5 7.Bb3 O-O 8.c3 d5 9.d3
  - FEN: `r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BPP1N2/PP2QPPP/RNB2RK1 b - - 0 9`
- `worrall-8d6` (C86, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Qe2 b5 7.Bb3 O-O 8.c3 d6
  - FEN: `r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1PQPPP/RNB2RK1 w - - 0 9`

The queen supports e4 and frees d1 for a rook. Against 8...d5, 9.d3 keeps things closed and sidesteps the classical Marshall. Played by Keres, Tiviakov and Short. **Short won both of his games with it against Karpov in their 1992 Candidates match (Wikipedia).** Status: rare. Difficulty 2.

### 19.3 6.Bxc6 Delayed Exchange (DERLD / Steenwijk, C85)

- `derld-6bxc6` (C85, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Bxc6 dxc6 7.d3 Nd7 8.Nbd2 O-O 9.Nc4 f6 10.Nh4 Nc5
  - FEN: `r1bq1rk1/1pp1b1pp/p1p2p2/2n1p3/2N1P2N/3P4/PPP2PPP/R1BQ1RK1 w - - 2 11`

An Exchange Variation in which Black has already committed ...Be7 and ...Nf6, pieces White hopes are less useful. Plans:

- **White:** Nbd2-c4, Nh4-f5.
- **Black:** ...Nd7-c5 with ...f6.

Wikipedia also gives 7...Qd6 8.Nbd2 (idea 9.Nc4), and warns that 7...Bg4 8.h3 Bh5 9.g4 gives up a pawn. Status: rare. Difficulty 2.

### 19.4 6.d4 Centre Attack and 8.c3 Basque Gambit (C84)

- `centre-attack-6d4` (C84, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.d4 exd4 7.e5 Ne4 8.Nxd4
  - FEN: `r1bqk2r/1pppbppp/p1n5/4P3/B2Nn3/8/PPP2PPP/RNBQ1RK1 b kq - 0 8`
- `basque-gambit` (C84, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.d4 exd4 7.e5 Ne4 8.c3
  - FEN: `r1bqk2r/1pppbppp/p1n5/4P3/B2pn3/2P2N2/PP3PPP/RNBQ1RK1 b kq - 0 8`

White opens the centre at once. Black's knight sits on e4, and play often goes ...O-O with ...Nc5/...Nxd4 ideas (9.Re1 is a common follow-up after 8...O-O). With 8.c3 (the Basque Gambit), White offers a pawn. Status: rare. Difficulty 3.

### 19.5 6.Nc3 Morphy Attack (C84)

- `morphy-attack-6nc3` (C84, rare): 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Nc3 b5 7.Bb3 d6 8.Nd5 Na5 9.Nxe7 Qxe7 10.d3 O-O
  - FEN: `r1b2rk1/2p1qppp/p2p1n2/np2p3/4P3/1B1P1N2/PPP2PPP/R1BQ1RK1 w - - 1 11`

Introduced by Morphy in an 1859 blindfold simul. The trap is 8...Nxd5? 9.Bxd5! (Wikipedia). Status: rare. Difficulty 2.

---

## 20. Model games index (all confirmed to exist; result shown only when confirmed)

| Game | Event / year | Variation | Result | Why it is instructive |
|---|---|---|---|---|
| Tarrasch–Marco | Dresden 1892 | Old Steinitz, Tarrasch trap | 1-0 | The 7...O-O?? trap played out in full |
| Zukertort–Anderssen | 1865 | Cozio 4.c3 | 1-0 | Sacrificial mate (12.Bxg5#) against an under-developed king |
| Lasker–Capablanca | St Petersburg 1914 | Exchange 5.d4 | 1-0 | Majority + f4-f5 clamp + e6 outpost |
| Capablanca–Marshall | New York 1918 | Marshall Attack (11...Nf6) | 1-0 | How to defend the Marshall |
| Capablanca–Bogoljubow | London 1922 | Closed 9.d4 Bg4 | – | Source game of the Bogoljubow Variation |
| Steiner–Capablanca | Budapest 1929 | Modern Steinitz, Noah's Ark | 0-1 | The trap in a master game |
| Smyslov–Reshevsky | USSR–USA radio match 1945 | Open, 11...f5 | – | Classical Open Ruy |
| Fischer–Gligorić | Havana Olympiad 1966 | Exchange 5.O-O f6 | 1-0 | Fischer's 5.O-O Exchange |
| Fischer–Spassky | WCh Reykjavik 1972, game 10 | Breyer | 1-0 | Winning a pawn and converting |
| Karpov–Unzicker | Nice Olympiad 1974 | Chigorin 12...Nc6 13.d5 | (Karpov win, implied) | Queenside clamp, stranded knight |
| Kasparov–Karpov | WCh Lyon 1990, game 20 | Zaitsev | 1-0 | Rook lift and kingside attack |
| Short–Karpov | Candidates match 1992 | Worrall 6.Qe2 | Short won both Worrall games | A sideline used as a match weapon |
| Kasparov–Anand | PCA WCh New York 1995, game 10 | Open, 11.Ng5 / 14.Bc2 | 1-0 | Home preparation in a forcing line |
| Deep Blue–Kasparov | 1997 match, game 2 | Smyslov 9...h6 | 1-0 | Positional squeeze in the Closed Ruy |
| Kasparov–Kramnik | Classical WCh London 2000, games 1, 3, 9, 13 | Berlin | all ½-½ | The Berlin as a drawing weapon |
| Anand–Carlsen | WCh Chennai 2013, game 6 | Anti-Berlin 4.d3 | 0-1 | Rook-endgame grind from a quiet d3 line |
| Carlsen–Anand | WCh Sochi 2014, game 11 | Berlin | 1-0 | Black over-presses (27...Rb4) and loses |
| Carlsen–Karjakin | WCh New York 2016, game 10 | Anti-Berlin 4.d3 | 1-0 | Grinding in d3 structures |
| Nepomniachtchi–Nakamura | Candidates 2022, round 12 | Berlin l'Hermet 6.dxe5 | ½-½ | The repetition draw |

---

## Naming conflicts and corrections to the original checklist

1. **"5.d4 Center".** After 4...Nf6, 5.d4 is the **Mackenzie Variation** (C77). The **Centre Attack** is 5.O-O Be7 6.d4 (C84); with 8.c3 it becomes the Basque Gambit.
2. **"Keres (9...a5)".** Ambiguous.
   - Wikipedia and lichess use "Keres Variation/Defence" for **9...Na5 10.Bc2 c5 11.d4 Nd7** in the Chigorin (C96).
   - Some game databases label 9...a5 "closed, Keres (9...a5) variation" (C92).
   - lichess also has an unrelated "Exchange Variation, Keres Variation" = 4.Bxc6 dxc6 5.Nc3.
3. **Flohr vs Zaitsev.** lichess calls 9...Bb7 the "Flohr System" and 9...Re8 the "Zaitsev System". Wikipedia calls 9...Bb7 the Zaitsev (also "Flohr–Zaitsev"). They usually transpose (9...Bb7 10.d4 Re8).
4. **"Flohr/others" as a separate 9th move.** It is not a separate system (see 3).
5. **"9.a4".** Not a standard named line. The standard a-pawn ideas are:
   - 8.a4 against 7...d6 (Anti-Classical);
   - 8.a4 against 7...O-O (Anti-Marshall);
   - 9.a3 (Suetin);
   - 9.Bc2 (Lutikov).
6. **3...Bc5 names.** Wikipedia: "Cordel Defence". lichess: "Classical Variation", keeping "Cordel" for the 4.c3 f5 gambit only. Wikibooks: "Classical defence".
7. **Berlin endgame / Berlin Wall.**
   - Wikipedia treats them as synonyms (8...Kxd8).
   - lichess names 8...Kxd8 "l'Hermet Variation, Berlin Wall Defense" and 9.Nc3 Bd7 "Berlin Wall".
   - "l'Hermet" in Wikipedia refers to **6.dxe5** (the "Berlin draw").
8. **Rio de Janeiro.** Wikipedia and lichess agree on 5...Be7. lichess calls 4...Nxe4 itself the "Rio Gambit Accepted".
9. **6.d3** = **Martinez Variation**. **6.Bxc6** = Delayed Exchange, also called the **Steenwijk Variation** (Wikipedia).
10. **5...d6** = **Russian Defence** (Wikipedia) = "Steinitz Deferred" (lichess).
11. **5...b5 6.Bb3 Bc5.** Wikipedia: "Modern Arkhangelsk". lichess: "Neo-Arkhangelsk". 5...Bc5 = Møller, which often transposes.
12. **Noah's Ark trap order.** Wikipedia gives 4...d6 5.d4 b5. lichess gives 4...b5 5.Bb3 d6 6.d4. These are the same position, and the motif recurs in the Closed 7...d6 8.d4 line.
13. **Fishing Pole.** It needs two White errors: 6.hxg4? and then 7.Nh2?? (Wikipedia) or a later slip such as 9.Rf2?? after 7.Ne1. 4...Ng4 itself is a mistake.
14. **Additions not on the checklist:**
    - Berlin: 4.O-O d6 (Improved Steinitz), Nyholm 4.d4, 4.Nc3 (→ Four Knights).
    - Classical: Beverwijk 5.Nxe5 fork trick.
    - Schliemann 4.exf5.
    - Morphy: 4...b5 5.Bb3 Bc5 (Graz), 4...Nd4 (Bird Deferred), Norwegian 6.Bxf7+ (Nightingale).
    - Closed: Averbakh 6...d6, Trajković 7...Bb7, Morphy Attack 6.Nc3, Basque Gambit, 9.d3 Pilnik, 12.d3 / 15.Re4 Marshall branches.
    - Exchange: 5...Bd6, 5...Ne7, 5.d4, 4...bxc6.
    - Rare 3rd moves: 3...Qe7, 3...g5, 3...d5, 3...Be7, 3...a5.

## Claims not fully confirmed (flagged on purpose)

- **Results not confirmed:**
  - Karpov–Unzicker 1974 (a Karpov win is strongly implied);
  - Timman–Speelman 1989, Smyslov–Reshevsky 1945, Karpov–Korchnoi 1978 (11.Ng5 game number/result);
  - Kasparov–Karpov 1990 game 18 (9...Nd7);
  - which Spassky–Tal 1965 games were Breyers.
- **Capablanca–Marshall 1918, moves 12–15.** Their order differs between Wikipedia's analysis and the commonly published score. The position is identical either way (see §18.1).
- **Lines taken from a single secondary source:**
  - Siesta 7.O-O Bd3 … 11.d4;
  - Bird 5.O-O Bc5 6.d3 c6 7.Bc4 Nf6 8.Re1 d6 (from a Wikibooks table);
  - Fianchetto 4.d4 exd4 5.Bg5 … 9.Nc3 (Kurims);
  - Karpov 9...Nd7 to 15.Bf4, Kholmov to 18.Rg4, Bogoljubow 10.Be3 to 13...Bh5 (Wikipedia, read through a summarising fetch);
  - Morphy Attack and DERLD lines (Wikipedia).
- **Lines from my own knowledge that are legal and consistent with the named sources, but that no fetched source printed move by move:**
  - Old Steinitz 7...exd4 8.Nxd4 O-O;
  - Exchange 9...Bg4 10.f3 Be6 (after 7.Nxd4 c5 8.Nb3 Qxd1 9.Rxd1);
  - Norwegian 8.axb3 (the source gives 7...Nxb3);
  - Anti-Berlin 4.d3 Bc5 5.Bxc6 dxc6 6.Nbd2;
  - Rare 3rd moves shown as single moves.
- **`closed-6d3-nf1-g3-illustrative`** is a constructed teaching sequence, not a cited game.
- **Status labels (2020–2026)** are qualitative (the lichess masters explorer returned 401).
- **3...g6 4.d4 exd4 5.Bg5.** The assessment is disputed between sources.

## Sources

- Wikipedia: [Ruy Lopez](https://en.wikipedia.org/wiki/Ruy_Lopez), [Berlin Defence](https://en.wikipedia.org/wiki/Berlin_Defence), [Marshall Attack](https://en.wikipedia.org/wiki/Marshall_Attack), [Ruy Lopez, Exchange Variation](https://en.wikipedia.org/wiki/Ruy_Lopez,_Exchange_Variation), [Jaenisch Gambit](https://en.wikipedia.org/wiki/Jaenisch_Gambit), [Noah's Ark Trap](https://en.wikipedia.org/wiki/Noah%27s_Ark_Trap), [Tarrasch Trap](https://en.wikipedia.org/wiki/Tarrasch_Trap), [Mortimer Trap](https://en.wikipedia.org/wiki/Mortimer_Trap), [Fishing Pole (chess)](https://en.wikipedia.org/wiki/Fishing_Pole_(chess))
- lichess opening names dataset (ECO + names): [lichess-org/chess-openings c.tsv](https://github.com/lichess-org/chess-openings)
- Wikibooks Chess Opening Theory pages for [3...Nd4](https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...e5/2._Nf3/2...Nc6/3._Bb5/3...Nd4), [3...Bc5](https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...e5/2._Nf3/2...Nc6/3._Bb5/3...Bc5), [3...Nge7](https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...e5/2._Nf3/2...Nc6/3._Bb5/3...Nge7), [3...Bb4](https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...e5/2._Nf3/2...Nc6/3._Bb5/3...Bb4), [Riga](https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...e5/2._Nf3/2...Nc6/3._Bb5/3...a6/4._Ba4/4...Nf6/5._O-O/5...Nxe4/6._d4/6...exd4), [9.h3](https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._e4/1...e5/2._Nf3/2...Nc6/3._Bb5/3...a6/4._Ba4/4...Nf6/5._O-O/5...Be7/6._Re1/6...b5/7._Bb3/7...d6/8._c3/8...O-O/9._h3)
- Model-game confirmation:
  - Chennai 2013 game 6: [FIDE Chennai 2013](https://chennai2013.fide.com/fide-world-championship-game-6-carlsen-with-second-consecutive-victory), [Chessdom](https://www.chessdom.com/magnus-carlsen-extends-lead-in-game-6-of-fide-world-championship/)
  - Sochi 2014 game 11: [TWIC](https://theweekinchess.com/chessnews/events/world-chess-championship-2014/carlsen-retains-world-chess-championship-title-after-beating-anand-in-game-11)
  - New York 2016 game 10: [ChessBase](https://en.chessbase.com/post/newsblog-wcc-carlsen-karjakin-2016-11-24), [TWIC](https://theweekinchess.com/chessnews/events/world-chess-championship-2016)
  - New York 1995 game 10: [Spectator](https://archive.spectator.co.uk/article/30th-september-1995/60/chess), [Mark Weeks](https://mark-weeks.com/chess/95ka$$.htm)
  - Lyon 1990 game 20: [365chess](https://www.365chess.com/tournaments/World_Championship_35th-KK5_1990)
  - Reykjavik 1972 game 10: [Chess.com highlights](https://www.chess.com/article/fischer-spassky-1972-highlights), [Chess.com blog](https://www.chess.com/blog/NimzoRoy/fischer---spassky-1972-wch-game-10-c95)
  - Karpov–Unzicker 1974: [ChessBase Modern Classics](https://books.chessbase.com/de/modern-classics/karpov-unzicker-1974)
  - Fischer–Gligorić 1966: [lichess study](https://lichess.org/study/embed/aUGM899G/IcdXgLAI)
  - Lasker–Capablanca 1914: [Exeter CC](https://exeterchessclub.org.uk/node/817), [Chess.com](https://www.chess.com/blog/SamCopeland/laskers-strategic-masterpiece-vs-capablanca-best-of-the-1910s-lasker-vs-capablanca-1914)
  - Fishing Pole 7.Ne1 game: [lichess](https://lichess.org/odFP08Ks)
- Theory cross-checks:
  - Breyer: [ChessBase India, Eljanov Breyer](https://www.chessbase.in/news/eljanov-breyer)
  - Zaitsev: [Wikipedia, Zaitsev Variation](https://en.wikipedia.org/wiki/Ruy_Lopez,_Zaitsev_Variation)
  - Modern Arkhangelsk: [ChessBase Openings](https://books.chessbase.com/es/openings-1-the-open-games/spanish-game-moller-arkhangelsk-variation)
  - Berlin 9.h3/9.Nc3 Ke8: [Modern Chess](https://www.modern-chess.com/course/berlin-variation-expert-repertoire-for-black/82020/)
