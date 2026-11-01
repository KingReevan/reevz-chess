# Sicilian Defense course outline

75 modules in 9 chapters. Each module teaches **one** idea in about 10 minutes, and the course teaches both sides: what Black aims for in each system, and how White should handle it, including White's popular alternatives to the Open Sicilian (the "anti-Sicilians").
Titles below are the planned titles; keep them unless a clearer one fits in the same length.
"Research" lists the line ids in `docs/research/sicilian-lines.json` to build the module from.
The research doc `docs/research/sicilian-theory.md` explains each line (section numbers below refer to it).
Every module has at least two research lines, or one line plus a trap or alternative, so it can carry two walkthroughs, a drill and quiz questions.
Only cite model games from §17 of the research doc, and only the moves listed there; all of them are confirmed.
Before writing about a famous trap, sacrifice or game, read "Folklore the engine contradicts" in the research doc: several well-known claims are wrong, and the doc gives the corrected version.

Shorthand: O = 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 (the Open Sicilian crossroads after 2...d6). N = O + 5...a6 (Najdorf). D = O + 5...g6 (Dragon). Y = D + 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 (Yugoslav Attack). S = 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 (Sveshnikov).

## Chapter 1 · Foundations (both sides, level 1)
| id | title | focus | research |
|---|---|---|---|
| 1.1 | Meet the Sicilian: why 1...c5? | Black fights for d4 from the side instead of copying 1...e5; an unbalanced game from move one. 2.Nf3 and 3.d4 as White's main plan. | `sic-1c5`, `sic-2nf3`, `open-2d6-3d4` |
| 1.2 | Reading notation through the Open Sicilian | Squares, piece letters, x, +, move numbers, the 5...a6 style. Walk through O move by move. | `open-2d6-5nc3`, `open-2d6-4nxd4`, `najdorf` |
| 1.3 | The big trade: 3.d4 cxd4 4.Nxd4 | Black's two center pawns against one, the half-open c-file for Black and d-file for White; White's lead in development and space. | `open-2d6-4nxd4`, `open-2d6-5nc3`, `open-2nc6-4nxd4` |
| 1.4 | Why 4...Nf6 and 5.Nc3? | 4...Nf6 hits e4; 5.Nc3 defends it but blocks White's c-pawn (no c4 clamp). 5.f3 (Prins) defends with a pawn instead. | `open-2d6-5nc3`, `prins-5f3` |
| 1.5 | Take back with the knight, not the queen | A queen on d4 gets hit by ...Nc6; 2.d4 cxd4 3.Qxd4 Nc6 costs White a tempo (still level); the Chekhover 4.Qxd4 Nc6 5.Bb5 makes it work; the 4.Qxd4?? Nxd4 queen loss. | `chekhover-4qxd4`, `sic-2d4-3qxd4`, `trap-4qxd4-nxd4` |
| 1.6 | The d5 square and an early ...e5 | ...e5 leaves a hole on d5 and a backward d6-pawn; without ...a6, 6.Bb5+ (Venice) gives White a clear edge. 2...e5? 3.Nxe5 just drops a pawn. Compare the Najdorf 6.Be2 e5. | `mistake-venice-5e5`, `mistake-2e5`, `najdorf-6be2` |
| 1.7 | Black's three main second moves | 2...d6, 2...Nc6 and 2...e6: which systems each leads to. | `open-2d6-5nc3`, `open-2nc6-5nc3`, `open-2e6-4nxd4` |
| 1.8 | Rare second moves: 2...g6 and 2...a6 | Hyperaccelerated Dragon (3.c3 is White's best try); O'Kelly (3.c3; the 5.Nc3 e5 point; the 5.e5? Qa5+ trap). | `hyper-2g6`, `hyper-2g6-3c3`, `okelly-3c3`, `okelly-5nc3-e5`, `okelly-5e5-trap` |
| 1.9 | Map of the Sicilian | The Open systems (Najdorf, Dragon, Classical, Scheveningen, Sveshnikov, Taimanov, Kan) and the anti-Sicilians, and where each is taught. | tree in research doc §1; `najdorf`, `dragon`, `classical`, `scheveningen`, `svesh-5e5`, `taimanov`, `kan`, `alapin`, `morra`, `closed`, `rossolimo`, `moscow` |

## Chapter 2 · The Najdorf (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 2.1 | 5...a6: a small move with three jobs | Takes b5 from White's knight and bishop, prepares ...e5 and ...b5. | `najdorf`, `najdorf-6be2`, `mistake-venice-5e5` |
| 2.2 | Two structures: ...e5 or ...e6 | ...e5: the d5 hole and the d6-pawn, but space and a free game. ...e6: the "small center" (a Scheveningen). | `najdorf-6be2`, `najdorf-be3-e6`, `scheveningen-from-najdorf` |
| 2.3 | The English Attack plan: Be3, f3, Qd2, O-O-O | What each White move does; f3 stops ...Ng4 and supports g4. 6.f3 reaches the same thing. | `najdorf-6be3`, `najdorf-be3-e5`, `najdorf-6f3` |
| 2.4 | The race: g4–g5 against ...b5–b4 | Opposite-side castling: both sides storm with pawns; tempo counts. Both the ...e5 and ...e6 versions. | `najdorf-be3-e5-race`, `najdorf-be3-e6` |
| 2.5 | 6...Ng4: chasing the e3-bishop | ...Ng4, ...h6, ...g5 win space and the bishop pair; 7.Bc1 Nf6 8.Be3 repeats. Why ...a6 makes ...Ng4 possible (in the Dragon, 6.Be3 Ng4? loses to 7.Bb5+). | `najdorf-be3-ng4`, `najdorf-be3-ng4-bc1`, `dragon-6be3-ng4-trap` |
| 2.6 | 6.Bg5 e6 7.f4: the classical attack | Pin on f6, f4–e5 or f4–f5 ideas; Black's ...Be7/...Qc7/...Nbd7/...b5 set-up. | `najdorf-6bg5`, `najdorf-bg5-be7`, `najdorf-bg5-nbd7` |
| 2.7 | The Poisoned Pawn and Göteborg: ideas only | 7...Qb6 hits b2 and d4; 8.Qd2 Qxb2 9.Rb1 Qa3 (a pawn for development); 8.Nb3 declines. The Göteborg 11.Nxe6 sacrifice. | `najdorf-poisoned-pawn`, `najdorf-qb6-nb3`, `najdorf-goteborg`, `model-geller-panno-1955`, `model-spassky-fischer-1972-g11` |
| 2.8 | Quiet sixth moves: 6.Be2 and 6.Bc4 | Opočenský 6...e5 7.Nb3 (7.Nf5?! is met by 7...d5!); the Fischer–Sozin Bc4–b3 aiming at e6 and f7, and the ...b4/...Nxe4?! pawn grab that opens the e-file. | `najdorf-6be2`, `najdorf-be2-nf5`, `najdorf-6bc4`, `najdorf-sozin-nxe4` |
| 2.9 | Other sixth moves and a Fischer classic | 6.h3 (Adams), 6.Nb3, 6.f4, 6.g3; Fischer–Najdorf 1962 (6.h3 and 14.Rxe4). | `najdorf-6h3`, `najdorf-6nb3`, `najdorf-6f4`, `najdorf-6g3`, `model-fischer-najdorf-1962` |

## Chapter 3 · The Dragon and the Accelerated Dragon (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 3.1 | The Dragon bishop and the long diagonal | ...g6/...Bg7 aims at d4, c3, b2 and a1; why Black rarely trades it. | `dragon`, `dragon-yugoslav` |
| 3.2 | Why 7.f3? The ...Ng4 question | 6.Be3 Ng4? 7.Bb5+! wins material (no ...a6); after ...Bg7, 7.Qd2 Ng4 chases the bishop. f3 takes g4 away and supports g4. | `dragon-6be3-ng4-trap`, `dragon-7qd2-ng4`, `dragon-yugoslav` |
| 3.3 | The Yugoslav race: 9.Bc4 | Opposite castling; Black's ...Bd7, ...Rc8, ...Ne5–c4 against White's Bb3, Kb1 and g4. | `dragon-yug-9bc4`, `dragon-yug-soltis`, `model-karpov-korchnoi-1974-g2` |
| 3.4 | White's attack: h4–h5, Bh6 and the h-file | "Open the h-file, trade the Dragon bishop, mate"; Black's ...h5 (Soltis) as the brake. | `dragon-yug-soltis`, `model-fischer-larsen-1958`, `model-karpov-korchnoi-1974-g2`, `model-anand-kasparov-1995-g11` |
| 3.5 | Black's counterplay: the c-file and ...Rxc3 | The rook on c4/c5; the exchange sacrifice on c3 that wrecks White's king cover. | `dragon-soltis-rxc3`, `dragon-yug-9bc4`, `dragon-yug-soltis` |
| 3.6 | 9.O-O-O d5! and 9.g4 | Black frees the game with ...d5 when White castles before Bc4; 9.g4 and the ...Nxd4/...Qa5 race. | `dragon-yug-9ooo`, `dragon-yug-9g4` |
| 3.7 | Quieter tries: 6.Be2, 6.Bc4 and 6.f4 | The Classical Dragon; 6.Bc4 and the ...Nxe4/...d5 fork trick; the Levenfish and its trap (7.e5, 9.Bb5+, 10.Ne6+). | `dragon-6be2`, `dragon-6bc4`, `dragon-levenfish`, `dragon-levenfish-trap` |
| 3.8 | The Accelerated Dragon: ...g6 before ...d6 | ...d5 in one move; transposing to the Yugoslav; the Fischer–Reshevsky trap (8...Na5? 9.e5! Ne8? 10.Bxf7+). | `accel-dragon`, `accel-d5`, `accel-dragon-main`, `accel-reshevsky-trap`, `model-fischer-reshevsky-1958` |
| 3.9 | The Maróczy Bind 5.c4 (and 5.Nxc6) | c4+e4 clamp d5; Black's ...Nxd4 (Gurgenidze) and ...Ng4 (Breyer) freeing ideas; 5.Nxc6 bxc6. | `accel-maroczy`, `accel-gurgenidze`, `accel-breyer-ng4`, `accel-5nxc6` |

## Chapter 4 · Classical, Richter–Rauzer and Scheveningen (both sides, level 2–3)
| id | title | focus | research |
|---|---|---|---|
| 4.1 | 5...Nc6: the Classical | Developing toward d4; the 2...Nc6 move order; 6.Be3?! Ng4!. | `classical`, `classical-2nc6-order`, `classical-6be3-ng4` |
| 4.2 | The Richter–Rauzer: Bg5 and doubled pawns | Bxf6 gxf6 breaks Black's pawns but gives the bishop pair; 6...g6?! and 6...e5? as typical mistakes. | `rauzer`, `rauzer-a6`, `rauzer-6g6`, `rauzer-6e5` |
| 4.3 | Rauzer: castling on opposite sides | O-O-O and f4 for White; ...Nxd4 and ...Qa5, or ...a6/...b5, for Black. | `rauzer-be7`, `rauzer-a6` |
| 4.4 | The Sozin 6.Bc4 and the Velimirović | The bishop aims at e6/f7; 6...Qb6 hits d4 and b2; Qe2, O-O-O and g4 (Velimirović) and the 14.Nf5!? sacrifice (sound, not winning). | `sozin`, `sozin-qb6`, `velimirovic`, `velimirovic-nf5` |
| 4.5 | The Magnus Smith Trap: e5 and Bxf7+ | 6...g6 7.Nxc6 bxc6 8.e5: 8...dxe5?? 9.Bxf7+ wins the queen; 8...Ng4 holds. | `magnus-smith-trap`, `sozin` |
| 4.6 | The Boleslavsky: ...e5 against 6.Be2 | The same d5 hole as the Najdorf, now with ...Nc6; 7.Nb3 and 7.Nf3. | `boleslavsky`, `boleslavsky-7nf3`, `najdorf-6be2` |
| 4.7 | The Scheveningen small center and the Keres Attack | ...e6 + ...d6: compact but flexible; 6.g4! h6 7.h4 Nc6 8.Rg1 d5! (answer a wing attack in the center); why 6...Nxg4?? fails. | `scheveningen`, `keres-6g4`, `keres-nxg4-trap` |
| 4.8 | Classical Scheveningen and its move orders | Reached from the Najdorf, Taimanov and English Attack; f4, Kh1, a4 for White; ...Qc7, ...Nc6, ...Re8 for Black. Tal–Larsen and Anand–Kasparov. | `scheveningen-6be2`, `scheveningen-from-najdorf`, `scheveningen-from-taimanov`, `scheveningen-english`, `model-tal-larsen-1965`, `model-anand-kasparov-1995-g9` |

## Chapter 5 · The Sveshnikov and the Kalashnikov (both sides, level 3)
| id | title | focus | research |
|---|---|---|---|
| 5.1 | 5...e5: kicking the knight at once | The hole on d5 and the backward d6-pawn are the price; time and space are the reward. 6.Ndb5 d6; 6...a6? 7.Nd6+. | `svesh-5e5`, `svesh-6ndb5`, `svesh-6a6` |
| 5.2 | 7.Bg5 a6 8.Na3 b5: the knight on the rim | Why ...b5 matters (the a3-knight is stuck); the ...Qa5+ repetition offer and 11.c4. | `svesh-main`, `svesh-9nd5-qa5` |
| 5.3 | 9.Bxf6 gxf6 10.Nd5 f5: broken pawns, two bishops | Black's ...f5 break and the bishop pair; White's d5-knight. 11.Bd3 and 11.c3; Peresypkin's 11.Bxb5 (level). | `svesh-9bxf6`, `svesh-11bd3`, `svesh-11c3`, `svesh-peresypkin` |
| 5.4 | 9.Nd5: the quieter main line | Trading on f6 without ...gxf6; c3, Nc2–e3 rerouting; ...Bg5 trading the bad bishop. | `svesh-9nd5`, `svesh-9nd5-qa5` |
| 5.5 | 7.Nd5: White's modern choice | Closing the center with exd5; Black's ...Ne7–g6 or ...Nb8–d7 and ...f5. Caruana–Carlsen 2018. | `svesh-7nd5`, `model-caruana-carlsen-2018-g8` |
| 5.6 | White's sixth-move sidelines | 6.Nf5 d5!, 6.Nb3, 6.Nf3 and 6.Nxc6 all give Black an easy game. | `svesh-6nf5`, `svesh-6nb3`, `svesh-6nf3`, `svesh-6nxc6` |
| 5.7 | Kalashnikov and Löwenthal: 4...e5 | 5.Nb5 d6 (Kalashnikov) vs 5...a6 6.Nd6+ (Löwenthal gives up the bishop). | `kalashnikov`, `kalashnikov-6n1c3`, `lowenthal` |
| 5.8 | How White avoids it: 3.Nc3 and 3.Bb5 | The Anti-Sveshnikov 3.Nc3 e5 4.Bc4 and the Rossolimo (chapter 9). | `anti-svesh-3nc3`, `rossolimo` |

## Chapter 6 · The ...e6 Sicilians: Taimanov, Kan and Four Knights (both sides, level 2–3)
| id | title | focus | research |
|---|---|---|---|
| 6.1 | 4...Nc6: the Taimanov idea | Flexible pawns (d7 stays home), ...Qc7, ...a6 (no Nb5), ...Nf6 and ...Bb4 or ...Ne5. | `taimanov`, `taimanov-qc7`, `taimanov-be3-bd3` |
| 6.2 | Taimanov against the English Attack | Be3, Qd2, O-O-O against ...Bb4 and ...Ne5; the quieter Bd3/O-O set-up; the Scheveningen route with 6.Be2. | `taimanov-qc7`, `taimanov-be3-bd3`, `scheveningen-from-taimanov` |
| 6.3 | 5.Nb5 d6 6.c4: White's clamp | Maróczy-style space; Black's Hedgehog-like answer; 5.Nc3 a6 6.Nxc6. | `taimanov-nb5`, `taimanov-nxc6` |
| 6.4 | The Kasparov Gambit and the knight on d3 | 8...d5!? and Kasparov's famous knight; the engine gives White a small edge, and Karpov's 17.Nab1? was the real mistake. | `taimanov-kasparov-gambit`, `model-karpov-kasparov-1985-g16` |
| 6.5 | 4...a6: the Kan | The most flexible ...e6 system: ...Qc7, ...Nf6, ...b5; 5.Bd3 and 5.Nc3. | `kan`, `kan-bd3`, `kan-nc3` |
| 6.6 | Kan against 5.c4: the Hedgehog | Pawns on a6, b6, d6, e6; waiting, then ...b5 or ...d5. | `kan-c4`, `accel-maroczy` |
| 6.7 | The Four Knights: 4...Nf6 5.Nc3 Nc6 | 6.Ndb5 Bb4; 6.Nxc6 bxc6 7.e5; the transfer to the Sveshnikov. | `four-knights`, `four-knights-ndb5`, `four-knights-nxc6`, `four-knights-svesh` |
| 6.8 | The Pin Variation and other early tries | 5...Bb4 6.e5!; the 6...Ne4? 7.Qg4 trap; the ...Qb6 double attack; 3...d5 (an isolated pawn). | `pin-variation`, `pin-ne4-trap`, `godiva-4qb6`, `e6-3d4-d5` |

## Chapter 7 · The Alapin and the Smith–Morra Gambit (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 7.1 | 2.c3: building the big center | c3 prepares d4 so that ...cxd4 is met by cxd4. Black's two best answers. | `alapin`, `alapin-d5`, `alapin-nf6` |
| 7.2 | 2...d5: the queen comes out safely | Why ...Qxd5 is fine here (c3 takes the Nc3 square away); ...Bg4 and ...e6. | `alapin-d5`, `alapin-d5-iqp` |
| 7.3 | The isolated d-pawn | White's IQP after cxd4: active pieces vs a weak pawn; blockade on d5. | `alapin-d5-iqp`, `morra-declined-d5` |
| 7.4 | 2...Nf6: hitting e4 | 3.e5 Nd5; ...d6 or ...d5 to break up e5; the Ivanchuk ...g5 idea. | `alapin-nf6`, `alapin-nf6-cxd4`, `alapin-ivanchuk` |
| 7.5 | The Smith–Morra Gambit: a pawn for time | Fast development, open c- and d-files, Rd1 and Qe2; sound enough, not better for White. | `morra`, `morra-accepted` |
| 7.6 | Morra traps for White: e5 and Bxf7+ | 6...Nf6 7.e5: 7...Nxe5?? 9.Bxf7+; 7...dxe5 8.Qxd8+ Nxd8? 9.Nb5!; the right answer 7...Ng4!. | `morra-nf6-e5-trap`, `morra-nf6-e5-dxe5`, `morra-nf6-ng4` |
| 7.7 | Avoiding the Morra tricks, and the Siberian Trap | ...e6/...a6/...Nge7–g6 sidesteps White's tricks (solid but passive: the engine prefers White); the ...Qc7, ...Ng4, ...Nd4 trap against 9.h3??. | `morra-e6-setup`, `morra-siberian-trap`, `morra-accepted` |
| 7.8 | Declining the Morra | 3...Nf6 and 3...d5 turn it into an Alapin; 3...d3. | `morra-declined-nf6`, `morra-declined-d5`, `morra-declined-d3` |

## Chapter 8 · Closed Sicilian, Grand Prix and beginner sidelines (both sides, level 1–2)
| id | title | focus | research |
|---|---|---|---|
| 8.1 | 2.Nc3: closed or open? | 2.Nc3 often becomes an Open Sicilian after Nf3 and d4; the Closed set-up with g3/Bg2. | `closed`, `closed-to-open` |
| 8.2 | The Closed Sicilian: White's kingside plan | Be3, Qd2, f4–f5, sometimes Bh6. | `closed-6be3`, `closed-6f4` |
| 8.3 | Black's answers: ...Rb8–b5, ...Nd4 and the Botvinnik | Queenside expansion; the d4 outpost; ...e5 set-ups. | `closed-6be3`, `closed-botvinnik` |
| 8.4 | The Grand Prix Attack: 2.Nc3 and f4 | Bc4 or Bb5, O-O, f4–f5; Black's ...e6/...d5 and ...Nd4 answers. | `gpa-bc4`, `gpa-bb5`, `gpa-e6-d5` |
| 8.5 | 2.f4 at once | 2...d5! (Tal Gambit); 2...Nc6 and Bb5xc6. | `gpa-2f4-d5`, `gpa-2f4-nc6` |
| 8.6 | 2.Bc4: the Bowdler Attack | ...e6 blunts the bishop; ...d5 gains time. | `bowdler`, `bowdler-qh5-e6` |
| 8.7 | 2.Qh5 and the Scholar's Mate trick | f7 and c5 are the targets; 2...e6 or 2...Nf6 with tempo (2...Nc6 drops c5); 3...Nf6?? 4.Qxf7#. | `qh5-2qh5`, `qh5-nf6`, `bowdler-scholars-trap`, `bowdler-qh5-e6` |
| 8.8 | The Wing Gambit 2.b4 | Taking and striking back with ...d5 and ...e5. | `wing-2b4`, `morra` |

## Chapter 9 · Rossolimo, Moscow and the King's Indian Attack (both sides, level 2–3)
| id | title | focus | research |
|---|---|---|---|
| 9.1 | 3.Bb5: the Rossolimo idea | Pin and pressure on c6; castle fast; 3...g6 with ...Bg7 and ...e5. | `rossolimo`, `rossolimo-g6` |
| 9.2 | Bxc6: doubled pawns for the bishop pair | 4.Bxc6 dxc6 with h3, Nc3, Be3, Qd2; which way Black recaptures: ...dxc6 with ...g6, ...bxc6 with ...e6. Caruana–Carlsen 2018. | `rossolimo-bxc6`, `rossolimo-e6-bxc6`, `model-caruana-carlsen-2018-g1` |
| 9.3 | Rossolimo 3...e6: ...Nge7 and ...d5 | Re1, Bf1 against ...a6, ...d5. | `rossolimo-e6`, `rossolimo-e6-bxc6` |
| 9.4 | 3.Bb5+: the Moscow | 3...Bd7 trades bishops; 5.c4 (a Maróczy clamp) or 5.O-O with c3/d4. | `moscow`, `moscow-bd7-c4`, `moscow-bd7-oo` |
| 9.5 | Moscow: 3...Nc6 and 3...Nd7 | Keeping more pieces; the sharp 3...Nd7 4.d4. | `moscow-nc6`, `moscow-nd7` |
| 9.6 | The King's Indian Attack set-up | d3, g3, Bg2, Nbd2, Re1, e5; Black's ...b5 and ...d5. 2.d3 as a Closed set-up. | `kia-e6`, `kia-2d3` |
| 9.7 | Sicilian classics: a look back | One key moment from each: Fischer's 14.Rxe4, Tal's 16.Nd5, Karpov's h-file, Kasparov's knight on d3, Nezhmetdinov's queen sacrifice. | `model-fischer-najdorf-1962`, `model-tal-larsen-1965`, `model-karpov-korchnoi-1974-g2`, `model-karpov-kasparov-1985-g16`, `model-nezhmetdinov-chernikov-1962` |
| 9.8 | Choosing your Sicilian (and your answer to it) | For Black: a simple repertoire by style. For White: Open Sicilian, Alapin, or Rossolimo/Moscow. | `najdorf`, `dragon`, `taimanov`, `alapin`, `rossolimo`, `moscow` |
