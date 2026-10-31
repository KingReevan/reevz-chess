# Ruy Lopez course outline

68 modules in 8 chapters. Each module teaches **one** idea in about 10 minutes.
Titles below are the planned titles; keep them unless a clearer one fits in the same length.
"Research" lists the line ids in `docs/research/ruy-lopez-lines.json` to build the module from.
The research doc `docs/research/ruy-lopez-theory.md` explains each line.

Shorthand: R = 1.e4 e5 2.Nf3 Nc6 3.Bb5. M = R + 3...a6 4.Ba4 Nf6 5.O-O. C = M + 5...Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3.

## Chapter 1 · Foundations (both sides, level 1)
| id | title | focus | research |
|---|---|---|---|
| 1.1 | Three opening goals: center, pieces, king | Why 1.e4 e5 fights for the center; develop, then castle. Show a good and a bad example (early queen moves). | — (simple legal lines) |
| 1.2 | Reading chess notation | Squares, piece letters, x, +, O-O, move numbers, 3...a6 style. Walk through R move by move. | `ruy-lopez` |
| 1.3 | Meet the Ruy Lopez | The five moves, the name (Ruy López de Segura, 1561 book), why it is still played. | `ruy-lopez` |
| 1.4 | The Spanish bishop: attack the defender | c6 guards e5; Bb5 attacks the guard. "Pressure, not a threat yet." | `ruy-lopez` |
| 1.5 | Why b5 and not c4? | Compare 3.Bc4 (Italian, aims at f7) with 3.Bb5 (aims at the e5 defender). | legal line with 3.Bc4 |
| 1.6 | Map of Black's defenses | 3...a6, 3...Nf6, 3...f5, 3...Bc5, 3...Nd4, 3...d6, 3...g6/Nge7, and where each is taught. | tree in research doc §1 |

## Chapter 2 · The Morphy Defense: 3...a6 (both sides)
| id | title | focus | research |
|---|---|---|---|
| 2.1 | 3...a6: asking the bishop a question | Kick the bishop now; White must take or retreat. | `morphy` lines |
| 2.2 | Does 4.Bxc6 win the e5-pawn? | **Already written. Use it as the quality reference.** | `exchange-5nxe5-trap`, `exchange-5bc5-trap` |
| 2.3 | 4.Ba4: keeping the pin alive | Why a4, what ...b5 gains and costs (bishop to b3, weakened queenside). | morphy / `norwegian` idea |
| 2.4 | 4...Nf6: counterattack on e4 | Develop with tempo; why White needn't defend e4 yet. | morphy lines |
| 2.5 | 5.O-O: castling into the fight | 5...Nxe4 is met by 6.d4 / Re1; e4 comes back. | `open`, research §"5.O-O" |
| 2.6 | 5...Be7 and 6.Re1: the Closed setup | Re1 defends e4, so Bxc6 + Nxe5 becomes a real threat; ...b5 answers it. | doc line 649 logic |
| 2.7 | 6...b5 7.Bb3: the bishop's new home | Bb3 aims at f7; danger of ...Na5/...c5–c4 traps (Noah's Ark idea). | `noahs-ark-closed-8d4` |
| 2.8 | White's master plan: c3, h3 and d4 | 7...d6 8.c3 O-O 9.h3: each move's job. | `chigorin` prefix |
| 2.9 | White's other 5th moves | 5.d3 Anderssen, 5.Qe2 Wormald, 5.Nc3 Tarrasch, 5.d4 Mackenzie, 5.Bxc6 Bayreuth: one idea each. | research 5th-move section |

## Chapter 3 · The Exchange Variation: 4.Bxc6 (White)
| id | title | focus | research |
|---|---|---|---|
| 3.1 | Giving up the bishop on purpose | Structure after 4...dxc6: White's 4v3 kingside majority, Black's doubled c-pawns, bishop pair. | `exchange` |
| 3.2 | 5.O-O: now e5 really is attacked | Why castling makes Nxe5 work; the 5...Bc5? trap; 5...Ne7 nuance. | `exchange-5bc5-trap`, `exchange-ne7` |
| 3.3 | 5...f6: the Gligorić main line | 6.d4 exd4 7.Nxd4 c5 8.Nb3 Qxd1 9.Rxd1; also 6...Bg4. | `exchange-gligoric`, `exchange-gligoric-6bg4`, `exchange-gligoric-7qxd4` |
| 3.4 | 5...Bg4 and the ...h5 trick | Why 7.hxg4?? opens the h-file; how White should play (d3, Nbd2). | `exchange-bg4-h5`, `exchange-bg4-h5-trap` |
| 3.5 | 5...Qd6 and 5...Bd6: other defenses | Bronstein and King's bishop; the 9.e5! punishment. | `exchange-bronstein`, `exchange-bd6`, `exchange-bd6-mistake` |
| 3.6 | The 4-against-3 endgame | Why king-and-pawn endings favour White; Lasker–Capablanca 1914 idea. | `exchange-5d4-lasker-capablanca` |

## Chapter 4 · The Closed Ruy Lopez (both sides)
| id | title | focus | research |
|---|---|---|---|
| 4.1 | The Closed tabiya after 9.h3 | Where every piece wants to go; the two plans. | `chigorin` prefix to 9.h3 |
| 4.2 | The Spanish knight tour: Nbd2–f1–g3 | Why the knight goes the long way; what it does on g3/e3. | `breyer`, `closed-6d3-nf1-g3-illustrative` |
| 4.3 | Chigorin: 9...Na5 | Knight on the rim to free c-pawn; ...c5, ...Qc7. | `chigorin` |
| 4.4 | Chigorin structures: d5 or cxd4? | 13.d5 closed center vs 12...cxd4 open c-file; Keres 11...Nd7. | `chigorin-12cxd4`, `chigorin-12nc6-13d5`, `chigorin-keres-11nd7`, `chigorin-yugoslav` |
| 4.5 | Breyer: 9...Nb8 | Retreat to regroup; ...Nbd7, ...Bb7, ...Re8, ...Bf8, ...g6. | `breyer` |
| 4.6 | Zaitsev: 9...Bb7 | Pressure on e4; 11.Ng5 Rf8 12.Nf3 Re8 repetition; 12.a4. | `zaitsev`, `zaitsev-11ng5-repetition`, `zaitsev-17f5` |
| 4.7 | Smyslov 9...h6 and Karpov 9...Nd7 | ...h6 stops Ng5; ...Nd7 supports e5. | `smyslov-9h6`, Karpov line in research |
| 4.8 | Kholmov 9...Be6 and 9...a5 | Trading the Spanish bishop; the open a-file. | `kholmov-9be6`, 9...a5 line in research |
| 4.9 | Skipping h3: 9.d4 Bg4 and 9.d3 | Why ...Bg4 is annoying without h3; Pilnik 9.d3. | `bogoljubow-9d4-bg4`, `bogoljubow-10be3`, Pilnik line |
| 4.10 | The modern 6.d3 Ruy | Slow build-up, avoids the Marshall; c3, Bc2, Nbd2, later d4. | `closed-6d3-c3-d4`, `closed-6d3-a3`, `closed-6d3-a4` |
| 4.11 | Other 6th moves: 6.Qe2, 6.d4 and 6.Bxc6 | Worrall, Centre Attack, Delayed Exchange: one idea each. | `worrall-6qe2`, `worrall-8d6`, Centre Attack lines, `derld-6bxc6` |
| 4.12 | Move-order traps in the Closed | 8.d4?! Nxd4 and the Noah's Ark motif; Anti-Classical 8.a4. | `noahs-ark-closed-8d4`, `anti-classical-8a4` |

## Chapter 5 · The Marshall Attack (Black)
| id | title | focus | research |
|---|---|---|---|
| 5.1 | 8...d5: the pawn sacrifice | What Black gets: time and attack. 8...d6 declines. | `marshall` prefix, `marshall-declined-8c3-d6` |
| 5.2 | The main line: 9.exd5 to 11...c6 | The forced sequence; why 11...c6 beats grabbing material. | `marshall` |
| 5.3 | 12.d4 Bd6 13.Re1 Qh4: the attack begins | Queen to h3, weak light squares, why g3 is forced. | `marshall` |
| 5.4 | Attacking patterns: ...Bg4, ...Rae8, ...Re6 | Bringing every piece; 15.Be3 Bg4 16.Qd3 Rae8 17.Nd2 Re6. | `marshall-spassky-15be3` |
| 5.5 | White's tries: 15.Re4 and 12.d3 | Other ways White defends. | `marshall-15re4`, `marshall-12d3` |
| 5.6 | Anti-Marshall: 8.a4 | How White dodges the gambit; 8...b4 and 8...Bb7. | `anti-marshall-8a4`, `anti-marshall-8a4-bb7` |
| 5.7 | Anti-Marshall: 8.h3, 8.d4 and 8.d3 | Comparing the other dodges. | `anti-marshall-8h3`, `anti-marshall-8d4`, `anti-marshall-8d3` |

## Chapter 6 · The Open Defense: 5...Nxe4 (Black)
| id | title | focus | research |
|---|---|---|---|
| 6.1 | 5...Nxe4: taking the center pawn | Why take now; White's fastest reply 6.d4. | `open` |
| 6.2 | 6.d4 b5 7.Bb3 d5: holding on | ...d5 supports the knight; returning the pawn is fine. | `open` |
| 6.3 | 8.dxe5 Be6: the Open tabiya | Active pieces vs the e5 wedge; key squares d4 and c5. | `open` |
| 6.4 | 9.c3 Be7 and the Tarrasch trap | 11...Qd7?? 12.Nxe6 fxe6 13.Rxe4!; the Breslau 11...Nxe5. | `open-9c3-be7`, `open-tarrasch-trap` |
| 6.5 | 9.c3 Bc5: the active bishop | 10.Nbd2 O-O 11.Bc2 with 11...f5 or 11...Bf5. | `open-9c3-bc5`, `open-11f5`, `open-11bf5` |
| 6.6 | The Dilworth: 11...Nxf2!? | Knight sacrifice for an unbalanced endgame. | `open-dilworth` |
| 6.7 | 9.Nbd2 and 9.Qe2 | Karpov's 9.Nbd2 (11.Ng5 gambit) and the Howell 9.Qe2. | `open-bernstein-11ng5`, `open-howell` |
| 6.8 | The Riga: 6...exd4 | Sharp tactics on the e-file and h2. | `open-riga` |

## Chapter 7 · The Berlin Defense: 3...Nf6 (Black)
| id | title | focus | research |
|---|---|---|---|
| 7.1 | 3...Nf6: hit e4 at once | Develop with a threat; why White castles. | berlin lines |
| 7.2 | 4.O-O Nxe4: taking the pawn | The pawn comes back; 5.d4 and 5.Re1. | berlin lines |
| 7.3 | 5.d4 Nd6: the road to the endgame | Each forced move to 8...Kxd8; l'Hermet 6.dxe5 note. | `berlin-endgame` |
| 7.4 | The Berlin Wall: queens come off | Lost castling vs bishop pair; Kramnik–Kasparov 2000. | `berlin-endgame` |
| 7.5 | Plans in the Berlin endgame | White's kingside majority vs Black's bishops; 9.h3 Ke8 10.Nc3. | `berlin-endgame-h3-ke8`, `berlin-endgame-nc3-bd7` |
| 7.6 | 5.Re1 and Rio de Janeiro 5...Be7 | Keeping queens on; the knight trip ...Nd6–b7–c5. | `berlin-rio-de-janeiro`, 5.Re1 lines |
| 7.7 | 4...Bc5 and 4...d6 | Beverwijk and Improved Steinitz. | `berlin-improved-steinitz`, Beverwijk line |
| 7.8 | Anti-Berlin: 4.d3 | The modern slow answer; Anand–Carlsen 2013 game 6. | `anti-berlin-4d3`, `anti-berlin-4d3-d5`, `anti-berlin-anand-carlsen-2013`, `anti-berlin-5bxc6` |
| 7.9 | Berlin traps: Fishing Pole and Mortimer | Both traps plus 5.Bxc6 dxc6 6.Nxe5? Qd4!. | `berlin-fishing-pole-trap`, `berlin-fishing-pole-7ne1`, `mortimer-trap`, `anti-berlin-5bxc6-nxe5-trap` |

## Chapter 8 · Other Black defenses (Black)
| id | title | focus | research |
|---|---|---|---|
| 8.1 | Schliemann: 3...f5 and 4.Nc3 | Gambit-style counterattack; 4.Nc3 main line. | `schliemann`, `schliemann-4nc3-d5`, `schliemann-4nc3-nf6` |
| 8.2 | Schliemann: 4.d3, the calm answer | White's safest reply; also 4.exf5. | `schliemann-4d3`, `schliemann-4exf5` |
| 8.3 | Classical: 3...Bc5 | 4.c3 main line, 4.O-O Nd4, Cordel Gambit. | `classical`, `classical-4oo-nd4`, `cordel-gambit` |
| 8.4 | Bird's Defense: 3...Nd4 | Trading knights; the d4 wedge. | `bird` |
| 8.5 | Old Steinitz 3...d6 and the Tarrasch trap | Passive defence of e5; Tarrasch–Marco 1892. | `old-steinitz`, `tarrasch-trap-steinitz` |
| 8.6 | Fianchetto 3...g6 and Cozio 3...Nge7 | Supporting e5 with the g7-bishop; 4.c3 and 4.d4. | `fianchetto-4c3`, `fianchetto-4d4-bg5`, Cozio line |
| 8.7 | Modern Steinitz: 4...d6 | Solid hold on e5; 5.c3 Bd7, 5.Bxc6+, 5.c4, 5.O-O. | `modern-steinitz*` |
| 8.8 | Siesta: 5.c3 f5 | Early ...f5 strike; 7.O-O and 7.d4. | `siesta`, `siesta-7d4` |
| 8.9 | Noah's Ark trap | 5.d4? b5 6.Bb3 Nxd4 7.Nxd4 exd4 8.Qxd4?? c5. | `noahs-ark-trap` |
| 8.10 | Norwegian: 4...b5 5.Bb3 Na5 | Hunting the bishop; the Nightingale Gambit 6.Bxf7+. | `norwegian`, `norwegian-nightingale` |
| 8.11 | Arkhangelsk and Møller | ...b5 with ...Bb7 or ...Bc5; Russian 5...d6. | `arkhangelsk`, `modern-arkhangelsk`, Møller line, `russian-5d6` |
