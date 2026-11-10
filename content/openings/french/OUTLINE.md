# French Defense course outline

66 modules in 8 chapters. Each module teaches **one** idea in about 10 minutes, and the course teaches both sides: what Black aims for in each system, and how White should handle it, including White's early alternatives (2.d3, 2.Qe2, 2.Nf3, the Exchange and the gambits beginners meet most).
Titles below are the planned titles; keep them unless a clearer one fits in the same length.
"Research" lists the line ids in `docs/research/french-lines.json` to build the module from.
The research doc `docs/research/french-theory.md` explains each line (section numbers below refer to it).
Every module has at least two research lines, or one line plus a trap or alternative, so it can carry two walkthroughs, a drill and quiz questions.
Only cite model games from §14 of the research doc, and only the moves listed there; all of them are confirmed. Games the doc lists as unconfirmed (for example Nimzowitsch–Salwe 1911) must not be cited with moves.
Before writing about a famous trap, sacrifice or game, read "Folklore the engine contradicts" in the research doc: several well-known claims are wrong (two of the Greek Gift lines below fail), and the doc gives the corrected version.

Shorthand: F = 1.e4 e6 2.d4 d5 (the French position). A = F + 3.e5 c5 4.c3 Nc6 5.Nf3 Qb6 (Advance with ...Qb6). T = F + 3.Nd2 (Tarrasch). C = F + 3.Nc3 Nf6 (Classical). W = F + 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 (Winawer main line).

## Chapter 1 · Foundations (both sides, level 1)
| id | title | focus | research |
|---|---|---|---|
| 1.1 | Meet the French: why 1...e6 and 2...d5? | 1...e6 prepares ...d5 and opens the f8-bishop; 2.d4 takes the center; 2...d5 hits e4, so White must defend, push or trade it. | `fr-1e6`, `fr-2d4`, `fr-2d5` |
| 1.2 | Reading notation through the French | Squares, piece letters, x, +, castling, move numbers and the 5...Qb6 style, walking through two main lines move by move. | `win-5a3`, `adv-5qb6`, `exch-4bd3` |
| 1.3 | The pawn chain: d4–e5 against d5–e6 | After 3.e5 the pawns lock; each chain has a base (d4, e6) and a head (e5, d5). White gets space on the kingside, Black on the queenside. | `adv-3e5`, `adv-3c5`, `cla-4e5` |
| 1.4 | Attack the base: ...c5 against d4 | The main French break; c3 supports d4; ...Nc6 and ...Qb6 add attackers, Nf3 (and later Be3) add defenders. | `adv-4c3`, `adv-5nf3`, `adv-5qb6` |
| 1.5 | Counting attackers and defenders | Two against two means you can't take: 7...Nxd4? drops a piece and 8...Qxd4?? the queen. ...Nh6–f5 adds a third attacker. | `fr-count-d4`, `adv-6be2`, `adv-mb-nxd4-piece` |
| 1.6 | The second break: ...f6 against the head | ...f6 hits e5 and opens the f-file for Black's rook; exf6 Nxf6 frees Black's game. | `tar-closed-f6`, `adv-4dxc5`, `adv-mb-decline-bd7` |
| 1.7 | The problem bishop on c8 | Black's pawns on e6 and d5 block it. Five cures: ...b6/...Ba6, ...Bd7–b5, ...Bd7–c6 (Fort Knox), trading pawns (Exchange), ...f6/...e5 later. | `adv-4qb6-wade`, `win-7nf3-b6`, `fk-4bd7`, `exch-3exd5`, `adv-3b6` |
| 1.8 | Early mistakes for both sides | 6.Bb5? Nxe5! (no pin because of ...Bd7); 7.b4?! cxb3 e.p. and 8.Qxb3?? Qxb3; 4...Ne4?! costs time; 6...gxf6?! in the Rubinstein. | `fr-bb5-trap`, `adv-6a3-c4-b4`, `fr-mistake-ne4`, `rub-6gxf6` |
| 1.9 | Map of White's third moves | 3.Nc3 (Winawer, Classical, Rubinstein), 3.Nd2 (Tarrasch), 3.e5 (Advance), 3.exd5 (Exchange), 3.Bd3 and gambits, and where each is taught. | tree in research doc §1; `fr-3nc3`, `tar-3nd2`, `adv-3e5`, `exch-3exd5`, `side-3bd3`, `win-3bb4`, `cla-3nf6`, `rub-3dxe4` |

## Chapter 2 · The Advance Variation 3.e5 (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 2.1 | 3.e5: White's space and Black's plan | The chain, White's kingside space, Black's ...c5, ...Nc6, ...Qb6 against d4; 4.c3 and 5.Nf3 as White's set-up. | `adv-3e5`, `adv-3c5`, `adv-4c3`, `adv-5nf3` |
| 2.2 | 5...Qb6: pressure on d4 and b2 | Why the queen goes to b6; why White can't just play Bd3 and castle; 6.Be2 cxd4 7.cxd4 and the count on d4. | `adv-5qb6`, `adv-6be2`, `fr-count-d4` |
| 2.3 | 6.a3 and the ...c4 answer | a3 prepares b4; Black closes the queenside with ...c4, then ...Na5 or (the engine's choice) ...f6; after 7.b4?! cxb3 (en passant) 8.Qxb3?? Qxb3 the queen is lost. | `adv-6a3`, `adv-6a3-c4`, `adv-6a3-c4-f6`, `adv-6a3-c4-b4` |
| 2.4 | The Lputian 6...Nh6 and 6...Bd7 | ...Nh6–f5 hits d4 again; after 10.Bd3 Black develops first (10...Bd7); 10...Nfxd4? walks into Bb5+. 6...Bd7 with ...Rc8 and ...Na5–c4. | `adv-6a3-nh6`, `adv-lput-bd7`, `adv-lput-trap`, `adv-6a3-bd7` |
| 2.5 | 6.Be2 and the ...Nh6–f5 maneuver | 7...Nh6 8.Nc3 Nf5 9.Na4 Qa5+; 8.Bxh6 gxh6 gives Black doubled pawns but the bishop pair and an ...f6 break. | `adv-6be2`, `adv-6be2-bxh6` |
| 2.6 | The Milner-Barry Gambit: 6.Bd3 | White gives up d4 for development: 7...Bd7 8.O-O Nxd4 9.Nxd4 Qxd4 10.Nc3. Ideas only: the e-file, Nb5, Qe2/Kh1/f4. 10...Qxe5 11.Re1 opens the e-file. | `adv-6bd3`, `adv-mb-main`, `adv-mb-qxe5` |
| 2.7 | The Bb5+ queen trap | With the bishop on d3 the queen's line to d4 is closed; Bd3–b5+ opens it with check. Never take on d4 twice before ...Bd7. | `adv-mb-trap`, `adv-mb-nxd4-piece`, `adv-lput-trap` |
| 2.8 | Trading the bad bishop: ...Bd7–b5 and ...Ba6 | The Euwe 5...Bd7, the Wade 4...Qb6/...Bd7–b5 and 3...b6/...Ba6; 6.Bb5? Nxe5! shows why ...Bd7 also guards b5. | `adv-5bd7`, `adv-5bd7-a3-f6`, `adv-4qb6-wade`, `adv-4qb6-a3`, `adv-3b6`, `fr-bb5-trap` |
| 2.9 | Nimzowitsch's ideas: 4.Nf3, 4.Qg4 and 4.dxc5 | Giving up d4 to keep e5; 4.Qg4?! is met by ...cxd4, ...Nc6 and ...h5; 4.dxc5 is answered by ...Bxc5 and ...f6. | `adv-4nf3`, `adv-4qg4`, `adv-4dxc5`, `adv-mb-decline-bd7` |

## Chapter 3 · The Exchange Variation and White's early sidelines (both sides, level 1–2)
| id | title | focus | research |
|---|---|---|---|
| 3.1 | 3.exd5 exd5: symmetry and a free bishop | The Exchange frees Black's c8-bishop; both sides develop the same way; the open e-file; ...Bg4 pins. | `exch-3exd5`, `exch-4bd3`, `exch-4nf3` |
| 3.2 | Playing for a win from a symmetric position | Unbalance the pawns: ...c5 (Black) or 4.c4 (White, an isolated d-pawn). Opposite-side castling is sharp: 9...O-O-O?! lets White's b4–b5 arrive first. | `exch-c5`, `exch-4c4`, `exch-ooo` |
| 3.3 | The open e-file and the Bxh7+ trick | 7...Bg4? 8.Bxh7+! Kxh7 9.Ng5+: the knight check uncovers the queen on g4. 7...Bf5 is the safe way to trade bishops; an early Qe2+ achieves nothing. | `exch-greek`, `exch-4nf3`, `exch-qe2-check` |
| 3.4 | 2.d3: the King's Indian Attack | d3, Nd2, Ngf3, g3, Bg2, O-O, Re1, e5; Black's ...c5, ...Nc6, ...b5–b4–a4 race against White's h4 and Nf1–h2–g4. | `side-2d3`, `side-2d3-attack` |
| 3.5 | 2.Qe2 and 2.Nf3: early piece moves | 2.Qe2 stops ...d5 (after 3.exd5, ...exd5 is illegal: the pawn is pinned); 2...c5 is Black's simplest. 2.Nf3 d5 3.Nc3: 3...Nf6 or 3...d4. | `side-2qe2`, `side-2qe2-pin`, `side-2nf3`, `side-2nf3-d4` |
| 3.6 | 2.c4, 2.f4, 2.b3 and 2.Nc3 | Quick answers: ...d5 against all of them; how 2.Nc3 and 2.f4 often turn into normal French or Advance structures. | `side-2c4`, `side-2f4`, `side-2b3`, `side-2nc3` |
| 3.7 | 3.Bd3: defending e4 with the bishop | 3...dxe4 4.Bxe4 Nf6 gains time on the bishop; 3...c5 4.exd5 Qxd5 grabs a pawn for White's development. | `side-3bd3`, `side-3bd3-c5` |
| 3.8 | Early gambits: 3.Be3 and 3.c4 | The Alapin and Diemer–Duhm Gambits: take the pawn, develop with ...Nf6, ...Be7, ...O-O and ...c5; both gambits leave Black better. | `side-3be3`, `side-3c4` |

## Chapter 4 · The Tarrasch 3.Nd2 (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 4.1 | 3.Nd2: why the knight goes to d2 | It avoids the ...Bb4 pin and keeps c3 free for a pawn, but blocks the c1-bishop. Black's answers: 3...c5, 3...Nf6, 3...Be7, 3...dxe4. | `tar-3nd2`, `tar-3c5`, `tar-3nf6`, `tar-3dxe4` |
| 4.2 | 3...c5 4.exd5 Qxd5: the queen recapture | The queen sits in the center; 6.Bc4 gains time; Black keeps an extra center pawn (e6) against White's lead in development. | `tar-qxd5`, `tar-qxd5-plan` |
| 4.3 | 4.exd5 exd5: the isolated d-pawn | Black's d5 pawn has no neighbors: active pieces and the e-file for Black, the d4 blockade square for White. | `tar-exd5`, `tar-iqp-blockade` |
| 4.4 | Trading queens with 5.Bb5+ | 5.Bb5+ Bd7 6.Qe2+ Qe7 7.Bxd7+: White heads for an ending against the isolated pawn; Karpov–Korchnoi 1978. | `tar-exd5-bb5`, `model-karpov-korchnoi-1978-g16` |
| 4.5 | 4.Ngf3 and a World Championship win | 4.Ngf3 cxd4 5.Nxd4: open lines and a lead in development; Nepomniachtchi–Ding 2023, game 7. | `tar-4ngf3`, `model-nepomniachtchi-ding-2023-g7` |
| 4.6 | The closed Tarrasch: 3...Nf6 and ...f6 | 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2; 8...f6 or 8...Qb6 against d4; 8...Nb6?! is too slow. | `tar-3nf6`, `tar-closed-f6`, `tar-closed-qb6`, `tar-closed-nb6` |
| 4.7 | Morozevich's 3...Be7 | A waiting move: after 4.Ngf3 Nf6 5.e5 Nfd7 Black plays ...c5, ...b6 and ...Ba6; 4.Bd3 c5 5.dxc5 tries to punish it. | `tar-3be7`, `tar-3be7-bd3` |
| 4.8 | Guimard 3...Nc6, 3...a6 and 3...dxe4 | The Guimard blocks the c-pawn; 3...a6 waits; 3...dxe4 turns into a Rubinstein (chapter 5). | `tar-3nc6`, `tar-3a6`, `tar-3dxe4` |

## Chapter 5 · The Rubinstein and Fort Knox (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 5.1 | 3...dxe4: giving up the center | Black trades the d-pawn for a solid, compact position; White gets more space and freer pieces. Works against 3.Nc3 and 3.Nd2. | `rub-3dxe4`, `tar-3dxe4`, `rub-4nf6-gxf6` |
| 5.2 | 4...Nd7 and ...Ngf6 | Preparing ...Ngf6 so Black can recapture on f6 with a knight; 6...gxf6?! weakens the king. | `rub-4nd7`, `rub-6gxf6` |
| 5.3 | The ...c5 break against 7.Bd3 | 7...c5 8.dxc5 Bxc5 frees Black's game; White's Qe2, Bg5 and long castling. | `rub-7bd3`, `rub-6bd3` |
| 5.4 | White's other tries: 7.c3, 7.Ne5 and 6.Bg5 | Quiet c3 with Ne5 ideas; the Capablanca 7.Ne5; 6.Bg5 h6 with ...c5 and the Bb5+ trade. | `rub-7c3`, `rub-7ne5`, `rub-6bg5` |
| 5.5 | Fort Knox: the bishop to c6 | 4...Bd7 and 5...Bc6 put the problem bishop on the long diagonal; ...Bxe4 or ...Bxf3 then ...c6 makes a fortress. | `fk-4bd7`, `fk-main`, `fk-bxf3` |
| 5.6 | Fort Knox danger: Neg5 and Nxe6 | 8.Neg5 h6? 9.Nxe6! fxe6 10.Bg6+ traps Black's king; 8...Be7? 9.Nxf7! is just as bad; 8...Bd6 first, then ...h6, is safe. | `fk-neg5-h6`, `fk-neg5-be7`, `fk-neg5-bd6` |
| 5.7 | Rubinstein or Fort Knox? | Comparing the two set-ups and the Burn (4.Bg5 dxe4) as a cousin; what each side aims for in the middlegame. | `rub-4nd7`, `fk-main`, `cla-burn` |

## Chapter 6 · The Classical 3.Nc3 Nf6 (both sides, level 2–3)
| id | title | focus | research |
|---|---|---|---|
| 6.1 | 3...Nf6: the Classical and White's choices | 4.e5 (Steinitz), 4.Bg5 (pin), 4.exd5 (Delayed Exchange); what each does to Black's knight. | `cla-3nf6`, `cla-4e5`, `cla-4bg5`, `cla-4exd5` |
| 6.2 | The Steinitz: 5.f4 c5 6.Nf3 Nc6 7.Be3 | f4 supports e5; Black hits d4; 7...cxd4 8.Nxd4 Bc5 and opposite-side castling, or 7...a6 with ...b5. | `cla-steinitz`, `cla-steinitz-bc5`, `cla-steinitz-a6` |
| 6.3 | Steinitz sidelines and Ding's 2024 win | 8...Qb6 9.Qd2 Qxb2 is playable but risky; 5.Nce2 frees c3; Gukesh–Ding 2024, game 1. | `cla-steinitz-qxb2`, `cla-5nce2`, `model-gukesh-ding-2024-g1` |
| 6.4 | 4.Bg5 Be7: the main Classical | 5.e5 Nfd7 6.Bxe7 Qxe7 7.f4: the Stahlberg 10...c4 and 7...a6 with ...c5; 7.Nb5 hits c7. | `cla-4bg5-be7`, `cla-main`, `cla-main-a6`, `cla-7nb5` |
| 6.5 | The Alekhine–Chatard Attack 6.h4 | White offers g5 to open the h-file; 6...Bxg5 7.hxg5 Qxg5 8.Nh3; declining with 6...a6. | `cla-ac`, `cla-ac-accept`, `cla-ac-a6` |
| 6.6 | Declining 6.h4: ...c5, and why not castle | 6...c5 7.Bxe7 Kxe7! (7...Qxe7?! 8.Nb5); 6...O-O?! castles into the attack (8.Qh5). | `cla-ac-c5`, `cla-ac-c5-qxe7`, `cla-ac-oo` |
| 6.7 | The McCutcheon 4...Bb4 | 5.e5 h6 6.Bd2 Bxc3 7.bxc3 Ne4 8.Qg4 g6; White's king stays in the middle; 5.exd5 Qxd5. | `cla-mcc`, `cla-mcc-main`, `cla-mcc-exd5` |
| 6.8 | The Burn 4...dxe4 | 5.Nxe4 Be7 6.Bxf6: recapture with the bishop (solid) or 6...gxf6 (bishop pair and the g-file). | `cla-burn`, `cla-burn-gxf6` |
| 6.9 | 4.exd5: the Delayed Exchange and the d5 pin | 5.Bg5 Be7 breaks the pin; with the bishop on d6, ...O-O? allows Nxd5 because the f6-knight is pinned. | `cla-4exd5`, `cla-4exd5-trap` |

## Chapter 7 · The Winawer 3.Nc3 Bb4 (both sides, level 3)
| id | title | focus | research |
|---|---|---|---|
| 7.1 | 3...Bb4: pinning the defender of e4 | The pin on c3; 4.e5 c5 5.a3 Bxc3+ 6.bxc3: doubled c-pawns for White against Black's missing dark bishop. | `win-3bb4`, `win-4e5`, `win-5a3` |
| 7.2 | 6...Ne7: plans for both sides | Black: ...Qa5/...Qc7, ...Nbc6, ...c4 or pressure on c3; White: a4, Nf3, Ba3 or Qg4, kingside play. | `win-6ne7`, `win-7nf3`, `win-7a4` |
| 7.3 | 7.Qg4: castle or let g7 go? | 7...O-O 8.Bd3 (the king is safe enough); 6...Qc7 7.Qg4 Ne7 transposes to the Poisoned Pawn. | `win-7qg4`, `win-7qg4-oo`, `win-6qc7` |
| 7.4 | The Poisoned Pawn: ideas only | 7...Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4: White's passed h-pawn against Black's center and c3; 10.cxd4?? Qc3+; Bronstein–Uhlmann 1977. | `win-pp`, `win-pp-trap`, `model-bronstein-uhlmann-1977` |
| 7.5 | Positional lines and the ...Ba6 trade | 7.Nf3, 7.a4 and 7.h4; Black trades the bad bishop with ...b6 and ...Ba6. | `win-7nf3`, `win-7nf3-b6`, `win-7a4`, `win-7h4` |
| 7.6 | 5...Ba5 and Black's other fourth moves | The Armenian 5...Ba5 6.b4 cxd4 (6...cxb4?! 7.Nb5 favors White); 4...Ne7, 4...Qd7 (Petrosian) and 4...b6 with ...Ba6. | `win-5ba5`, `win-5ba5-cxb4`, `win-4ne7`, `win-4qd7`, `win-4b6` |
| 7.7 | 5.Bd2 and Alekhine's gun | 5.Bd2 Ne7 6.Nb5: trading the dark bishops; Alekhine–Nimzowitsch 1930 (queen behind two rooks on the c-file). | `win-5bd2`, `model-alekhine-nimzowitsch-1930` |
| 7.8 | White's fourth-move sidelines | 4.exd5 (Winawer Exchange), 4.a3, 4.Ne2 (Alekhine Gambit), 4.Bd2 (Fingerslip) and 4.Qg4: what each wants and Black's simple answer. | `win-4exd5`, `win-4a3`, `win-4ne2`, `win-4bd2`, `win-4qg4` |

## Chapter 8 · Plans, sacrifices and classics (both sides, level 3)
| id | title | focus | research |
|---|---|---|---|
| 8.1 | The Greek Gift: when Bxh7+ works | The checklist: bishop to h7, knight to g5, queen to h5 or g4, no ...Nf6 and no ...Bxg5. The Exchange 8.Bxh7+ wins a pawn; in the Classical, 9...cxd4? 10.Bxh7+! gives White a strong attack (11...Qxg5! limits the damage); 9...f6! avoids it. | `exch-greek`, `cla-greek`, `cla-greek-kh8`, `cla-greek-f6` |
| 8.2 | When the Greek Gift fails | Tarrasch: the e7-bishop takes on g5; Alekhine–Chatard 8.Bxh7+?: no knight ready for g5. | `tar-greek-fail`, `cla-ac-greek-fail` |
| 8.3 | The ...f6 break and the e5 strongpoint | Black's ...f6 against the head; White answers by holding e5 with pieces (Nimzowitsch's plan). | `tar-closed-f6`, `theme-e5-blockade`, `adv-mb-decline-bd7` |
| 8.4 | The blockade on d4 | Nimzowitsch's idea: give up the d4-pawn, but put a piece on d4 in front of Black's d-pawn; the IQP blockade. | `adv-4nf3`, `tar-iqp-blockade`, `theme-e5-blockade` |
| 8.5 | White's f4–f5 lever | f5 attacks e6, the base of Black's chain; too early it fails to ...b5, prepared by g4 it is a real threat; ...f6 is Black's answer. | `cla-f5-early`, `cla-f5-prepared`, `cla-steinitz` |
| 8.6 | The bad bishop in endgames | Pawns on d5 and e6 hem in the c8-bishop: White's good bishop and knight against it; trading it early (...Ba6) avoids the problem. | `theme-bad-bishop`, `model-karpov-korchnoi-1978-g16`, `win-7nf3-b6` |
| 8.7 | French classics: a look back | One key moment from each confirmed game: Alekhine's gun, Uhlmann's Poisoned Pawn, Korchnoi's French in Baguio, Ding's 2023 and 2024 games. | `model-alekhine-nimzowitsch-1930`, `model-bronstein-uhlmann-1977`, `model-karpov-korchnoi-1978-g16`, `model-nepomniachtchi-ding-2023-g7`, `model-gukesh-ding-2024-g1` |
| 8.8 | Choosing your French (and your answer to it) | For Black: solid (Rubinstein, Fort Knox), classical (3...Nf6) or sharp (Winawer). For White: Advance, Tarrasch, 3.Nc3 or the Exchange. | `adv-5qb6`, `win-6ne7`, `cla-steinitz`, `rub-4nd7`, `tar-3nf6`, `exch-3exd5` |
