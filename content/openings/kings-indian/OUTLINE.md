# King's Indian Defense course outline

69 modules in 8 chapters. Each module teaches **one** idea in about 10 minutes, and the course teaches both sides: what Black aims for, and how White should handle each system.
Titles below are the planned titles; keep them unless a clearer one fits in the same length.
"Research" lists the line ids in `docs/research/kings-indian-lines.json` to build the module from.
The research doc `docs/research/kings-indian-theory.md` explains each line (section numbers below refer to it).
Every module has at least two research lines, or one line plus a trap or alternative, so it can carry two walkthroughs, a drill and quiz questions.
Only cite model games from §16 of the research doc; all of them are confirmed there.

Shorthand: K = 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6. C = K + 5.Nf3 O-O 6.Be2 e5. M = C + 7.O-O Nc6 8.d5 Ne7.

## Chapter 1 · Foundations (both sides, level 1)
| id | title | focus | research |
|---|---|---|---|
| 1.1 | Meet the King's Indian | The hypermodern idea: let White build the big centre, then hit it. The four moves of K and the name. Contrast with 3...d5 (the Grünfeld, a different opening that this course does not teach). | `kid-main`, `indian-2g6`, `grunfeld-3d5` |
| 1.2 | Reading chess notation | Squares, piece letters, x, +, O-O, move numbers, the 6...e5 style. Walk through C move by move. | `kid-main`, `kid-5nf3-oo`, `classical-6e5` |
| 1.3 | The fianchetto bishop and the long diagonal | Bg7 guards the king and eyes d4, c3, b2 along a1–h8. Why Black rarely trades it. Zita–Bronstein as the "dark-squared bishop" legend. | `kid-3nc3-bg7`, `fianchetto`, `model-zita-bronstein-1946` |
| 1.4 | Castle first, fight later | ...O-O before the centre opens. Why 4...d6 comes before castling (4...O-O 5.e5 kicks the knight). | `kid-5nf3-oo`, `kid-4-oo`, `kid-4-oo-5e5` |
| 1.5 | White's big centre: space and targets | What c4/d4/e4 give White, and how pawns that advance too early become targets. The 5.e5?! push and the 7.Kxd1? Ng4 8.f4?? Nf2+ fork. | `kid-main`, `four-pawns-5f4`, `kid-5e5`, `kid-5e5-f4-trap` |
| 1.6 | Break one: ...e5 | Hitting d4 from the side; why ...e5 doesn't drop a pawn (the ...Nxe4 / ...Bxe5 answer to Nxe5). | `classical-6e5`, `classical-8nxe5`, `samisch-6e5` |
| 1.7 | Break two: ...c5 | Hitting d4 from the other side; d5 and the Benoni structure. | `classical-6c5-7d5`, `four-pawns-6c5`, `averbakh-6c5`, `samisch-gambit` |
| 1.8 | Same position, different move orders | 3.Nf3, 2.Nf3 and 5.Be2 with 6.Nf3 reach the same positions, 3.g3 leads to the Fianchetto; the KID set-up also works against the London. | `kid-3nf3-order`, `kid-2nf3-order`, `kid-5be2-order`, `kid-3g3-order`, `kid-vs-london` |
| 1.9 | Map of White's systems | 5.Nf3 (Classical), 5.f3 (Sämisch), 5.f4 (Four Pawns), 5.Be2 + 6.Bg5 (Averbakh), g3 (Fianchetto), 5.h3 and others, and where each is taught. | tree in research doc §1; `classical-6be2`, `samisch-5f3`, `four-pawns-5f4`, `averbakh`, `fianchetto`, `makogonov-5h3` |

## Chapter 2 · The Classical set-up to 8...Ne7 (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 2.1 | 5.Nf3 and 6.Be2: White develops calmly | The most common set-up at every level; what each White move does. | `kid-5nf3-oo`, `classical-6be2`, `classical-6e5` |
| 2.2 | Is the e5-pawn hanging? | 7.dxe5 dxe5 8.Nxe5?! Qxd1+ 9.Bxd1 Nxe4: count attackers and defenders on e4/e5. | `classical-8nxe5`, `classical-6e5` |
| 2.3 | The Exchange Variation 7.dxe5 | Queens off; a level, quiet endgame. 9.Bg5 Re8! unpins. | `exchange-7dxe5`, `exchange-9bg5` |
| 2.4 | The "trap" that isn't: 9.Nxe5 Nxe4! | Folklore vs truth: 10.Nxe4 Bxe5 is equal, but 10.f4? Nxc3! wins a pawn and wrecks White's pawns. | `exchange-9nxe5`, `exchange-9nxe5-10f4-trap` |
| 2.5 | The pin on f6: 9.Bg5 Nc6? 10.Nd5! | The f6-knight pinned to the d8-rook, the c7 target, and White winning the exchange. | `exchange-9nc6-trap`, `exchange-9bg5` |
| 2.6 | 7.O-O Nc6: asking d4 a question | The main line; 8.dxe5 and 8.Be3 as alternatives. | `classical-7oo`, `classical-7oo-nc6`, `classical-8dxe5`, `classical-8be3` |
| 2.7 | 8.d5 Ne7: the centre locks | Pawn chains c4–d5–e4 and d6–e5; why the knight goes to e7 (f-pawn free, ...Ng6 later). 8...Nd4?! as the typical mistake. | `classical-8d5-ne7`, `classical-8d5-nd4` |
| 2.8 | Attack where your pawns point | White's chain points to the queenside, Black's to the kingside: the race in one picture. | `classical-8d5-ne7`, `mdp-12-g5`, `bayonet-9b4` |

## Chapter 3 · The Mar del Plata: Black's kingside attack (Black, level 2)
| id | title | focus | research |
|---|---|---|---|
| 3.1 | 9.Ne1 Nd7: freeing the f-pawn | Why White's knight goes to e1 (d3, f3), why Black's knight goes to d7. | `mdp-9ne1`, `mdp-9ne1-nd7` |
| 3.2 | 10.f3 f5: the first lever | ...f5 hits e4; f3 holds it. Why Black doesn't take on e4. | `mdp-10f3-f5`, `mdp-11g4` |
| 3.3 | 11.Be3 f4 12.Bf2 g5: grabbing space | ...f4 gains space with tempo, ...g5 prepares ...g4. 10.Be3 reaches the same position. | `mdp-12-g5`, `mdp-10be3` |
| 3.4 | Black's piece tour: ...Ng6, ...Rf7, ...Bf8, ...h5 | Each manoeuvre's job; ...Rf7 guards c7. | `mdp-13nd3`, `mdp-10nd3` |
| 3.5 | The ...g4 break | Opening the g-file against White's king; Taimanov–Najdorf's ...g4–g3. | `model-taimanov-najdorf-1953`, `mdp-13nd3` |
| 3.6 | Sacrifices on g2, g3 and h3 | ...Nh4xg2, ...Bh3 and the queen left en prise (29.Bxd3?? Bg2#) in Gelfand–Nakamura; ...Ng3+ in Piket–Kasparov (24.hxg3? fxg3 mates). | `model-gelfand-nakamura-2010`, `model-piket-kasparov-1989` |
| 3.7 | Model games: the name and the masterpiece | Najdorf–Gligorić 1953 (the source of the name) and Piket–Kasparov 1989 (Black lets White win the exchange and mates). | `model-najdorf-gligoric-1953`, `model-piket-kasparov-1989` |
| 3.8 | When White blocks the kingside: 11.g4 | The Benko Attack and how Black reacts; what changes when the g-file stays shut. | `mdp-11g4`, `mdp-10f3-f5` |

## Chapter 4 · White's queenside attack in the main line (White, level 3)
| id | title | focus | research |
|---|---|---|---|
| 4.1 | Why White attacks on the queenside | The chain points that way; targets d6 and c7; the c-file. | `classical-8d5-ne7`, `mdp-13rc1` |
| 4.2 | Ne1–d3, c4–c5 and cxd6 | The knight supports c5; opening the c-file with Rc1. | `mdp-10nd3`, `mdp-13nd3` |
| 4.3 | The c7 square: Nb5–c7 | Why ...Rf7 and ...Ne8 matter; the 16...a6? 17.Nc7! trap. | `mdp-nb5-c7-trap`, `mdp-10nd3` |
| 4.4 | 13.Rc1 Ng6 14.c5 and 13.a4 | Gambiting the c-pawn to open lines fast, or gaining space first. | `mdp-13rc1`, `mdp-13a4` |
| 4.5 | The Bayonet 9.b4 | Start the queenside attack before Black's ...f5; 9...Nh5 10.Re1 f5 11.Ng5. | `bayonet-9b4`, `bayonet-9b4-nh5`, `model-shirov-radjabov-2007` |
| 4.6 | Bayonet: the ...Nf4 jump | 10...Nf4 11.Bf1: a great-looking knight that White can handle; Kramnik–Kasparov 1997 and Petrosian–Gligorić 1970. | `bayonet-9b4-nh5-nf4`, `model-kramnik-kasparov-1997`, `model-petrosian-gligoric-1970` |
| 4.7 | Bayonet: 9...a5 and the 10.Nxe5?? trap | Fighting b4 directly; why 10.Nxe5?? Bxe5! loses a knight. | `bayonet-9b4-a5`, `bayonet-10nxe5-trap` |
| 4.8 | 9.Nd2, 9.Bd2 and 9.a4 | The knight heads for c4; Korchnoi's 9.Bd2; fixing the queenside with a4. | `classical-9nd2`, `classical-9bd2`, `classical-9a4` |

## Chapter 5 · Petrosian, Gligorić and Black's 7th-move choices (both sides, level 3)
| id | title | focus | research |
|---|---|---|---|
| 5.1 | 7.d5: the Petrosian System | Closing the centre at once; Bg5 pins f6 and slows ...f5. 7...a5 and ...Na6. | `petrosian-7d5`, `petrosian-7d5-a5` |
| 5.2 | Breaking a pin: ...h6, ...g5, ...Nh5 | Hunting the bishop and winning the bishop pair. | `petrosian-7d5-nbd7`, `kid-6bg5-h6` |
| 5.3 | 7.Be3: the Gligorić System and 7...Ng4 | 8.Bg5 f6 9.Bh4 or 9.Bc1; ...g5 and ...Nh6. | `gligoric-7be3`, `gligoric-7be3-ng4`, `gligoric-7be3-ng4-g5`, `gligoric-7be3-ng4-9bc1` |
| 5.4 | Gligorić: 7...exd4 and 7...Na6 | Freeing with ...d5; unpinning with ...Qe8. | `gligoric-7be3-exd4`, `gligoric-7be3-na6` |
| 5.5 | Gligorić: 7...c6 and 7...h6 | Two solid set-ups. | `gligoric-7be3-c6`, `gligoric-7be3-h6` |
| 5.6 | 7.O-O exd4: opening the long diagonal | ...Re8 hits e4; White's f3. The 9.Qc2? Nxe4! trap. | `classical-7oo-exd4`, `classical-7oo-exd4-qc2-trap` |
| 5.7 | 7...Na6, 7...Nbd7 and 7...c6 | Black's other 7th moves and what each knight route is for. | `classical-7oo-na6`, `classical-7oo-nbd7`, `classical-7oo-c6` |
| 5.8 | White's other 6th moves: 6.h3, 6.Bg5, 6.Be3 | Stopping ...Ng4 and ...Bg4; the Larsen 6.Be3 Ng4!. | `kid-6h3`, `kid-6bg5`, `kid-6be3` |
| 5.9 | 6...c5: Maróczy and Benoni structures | 7.O-O cxd4 (a Sicilian-like clamp) and 7.d5 e6 (into the Benoni). | `classical-6c5-7oo`, `classical-6c5-7d5` |

## Chapter 6 · The Sämisch 5.f3 (both sides, level 3)
| id | title | focus | research |
|---|---|---|---|
| 6.1 | 5.f3: White's plan | f3 protects e4; Be3, Qd2, O-O-O and a pawn storm. The cost: no Nf3, weak dark squares. | `samisch-5f3`, `samisch-6be3` |
| 6.2 | The Bh6 idea and the h-file | Trading Black's best defender; h4–h5. Gufeld's "Mona Lisa" shows Black's counterattack. | `samisch-bh6`, `samisch-6a6`, `model-bagirov-gufeld-1973` |
| 6.3 | 6...e5 7.d5: opposite-side castling | ...Nh5 and ...f5 against White's queenside king; Karpov–Kasparov 1990, game 23. | `samisch-6e5`, `samisch-7d5-nh5`, `samisch-7d5-c6`, `model-karpov-kasparov-1990-g23` |
| 6.4 | The Bronstein queen sacrifice | 8...Qh4+ 9.g3 Nxg3: spectacular, but the engine says White stays better. Counting material. | `samisch-bronstein-sac`, `samisch-7d5-nh5` |
| 6.5 | 7.Nge2: keeping the tension | 7...c6 with a race; 7...exd4 simplifying; 7.dxe5 is harmless. | `samisch-7nge2-c6`, `samisch-7nge2-exd4`, `samisch-7dxe5` |
| 6.6 | The Sämisch Gambit 6...c5 | Why Black gives a pawn: dark squares and the long diagonal. | `samisch-gambit`, `samisch-gambit-accepted` |
| 6.7 | Gambit declined: 7.Nge2 and 7.d5 | Keeping the pawn chain; the Benoni structure. | `samisch-gambit-7nge2`, `samisch-gambit-7d5` |
| 6.8 | The Panno: ...Nc6, ...a6, ...Rb8, ...b5 | Counterattack on the side where White's king lives; 9.h4 h5 and 9.Nc1 e5. | `samisch-panno`, `samisch-panno-9h4`, `samisch-panno-9nc1` |
| 6.9 | Other Sämisch tries | 6...c6 (Byrne), 6...b6, 6.Bg5 (Steiner), 6.Nge2. | `samisch-6c6`, `samisch-6b6`, `samisch-6bg5`, `samisch-6nge2` |

## Chapter 7 · Four Pawns Attack and Averbakh (both sides, level 3)
| id | title | focus | research |
|---|---|---|---|
| 7.1 | 5.f4: the biggest centre | Space vs development; Black strikes at once with ...c5. | `four-pawns-5f4`, `four-pawns-6c5` |
| 7.2 | Into the Benoni: 9.cxd5 | The structure: White's e4/f4 majority vs Black's queenside majority and e-file. | `four-pawns-9cxd5`, `four-pawns-9re8-10e5` |
| 7.3 | 9...Re8 and the e4-pawn | 10.Nd2 holds e4; 10.O-O? Nxe4! wins it. | `four-pawns-9re8-10nd2`, `four-pawns-10oo-trap` |
| 7.4 | When a pin isn't a pin: 9...Nxe4? | 10.Nxe4 Re8 11.Ng3 and White is a piece up. | `four-pawns-9nxe4-trap`, `four-pawns-9cxd5` |
| 7.5 | 9...Bg4 and 9...b5 | Removing a defender of e5; the ...Nxe4 / ...Qa5+ fork that wins the piece back. | `four-pawns-9bg4`, `four-pawns-9b5`, `four-pawns-9b5-10bxb5` |
| 7.6 | Other tries for both sides | 8.dxe6 (Christiansen–Kasparov), 9.e5?! Florentine, 7.Be2 cxd4, 6...Na6 and its ...Nfxe4 trick, 6.e5?!. | `model-christiansen-kasparov-1982`, `four-pawns-florentine`, `four-pawns-7be2`, `four-pawns-6na6`, `four-pawns-6na6-qc2`, `four-pawns-6e5` |
| 7.7 | Punishing the early pawn storm: Letelier–Fischer | 4...O-O 5.e5 Ne8 6.f4: Fischer's queen sacrifice against an over-extended centre. | `model-letelier-fischer-1960`, `kid-4-oo-5e5` |
| 7.8 | The Averbakh 6.Bg5: why ...e5 must wait | 6...e5? 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5! and the pin on f6. | `averbakh`, `averbakh-6e5-trap` |
| 7.9 | Averbakh: 6...c5, 6...h6 and friends | The ...c5 main line; kicking the bishop first with ...h6; ...Na6 and ...Nbd7; the Semi-Averbakh 6.Be3 met by 6...c5. | `averbakh-6c5`, `averbakh-6h6`, `averbakh-6na6`, `averbakh-6nbd7`, `semi-averbakh-6be3` |

## Chapter 8 · The Fianchetto and other White systems (both sides, level 2)
| id | title | focus | research |
|---|---|---|---|
| 8.1 | The Fianchetto Variation: a calmer game | The g2-bishop blunts ...f5 attacks; Black plays in the centre or on the queenside. | `fianchetto`, `kid-3g3-order` |
| 8.2 | Panno: ...Nc6, ...a6, ...Rb8 and a trap | 8.d5 Na5 and the queenside play; 9.b4? Nxc4 wins a pawn. | `fianchetto-panno`, `fianchetto-panno-8h3`, `fianchetto-panno-9b4-trap` |
| 8.3 | Classical Fianchetto: ...Nbd7 and ...e5 | 8.e4 c6 9.h3, and 8...Re8 9.h3 exd4 10.Nxd4 Nc5. | `fianchetto-nbd7-e5`, `fianchetto-long` |
| 8.4 | Yugoslav 6...c5 and the ...c6 systems | Benoni-like play; Kavalek's ...Qa5 and Larsen's ...Bf5. | `fianchetto-yugoslav`, `fianchetto-yugoslav-8dxc5`, `fianchetto-c6-qa5`, `fianchetto-c6-bf5` |
| 8.5 | Fianchetto model games | Zita–Bronstein 1946 and Ivanchuk–Yusupov 1991: Black's dark-squared bishop and kingside attack even against g3. | `model-zita-bronstein-1946`, `model-ivanchuk-yusupov-1991` |
| 8.6 | The Makogonov 5.h3 | h3 stops ...Ng4/...Bg4 and prepares g4; 6.Be3 e5 7.d5 and 6.Bg5 c5. | `makogonov-5h3`, `makogonov-6bg5` |
| 8.7 | 5.Bd3, 5.Nge2 and 5.g3 | Flexible set-ups with e4; the same ...e5 / ...c6 answers. | `kid-5bd3`, `kid-5nge2`, `kid-5g3` |
| 8.8 | 5.Bg5: the Accelerated Averbakh | ...h6 and ...c5 with ...Qa5 pinning the c3-knight. | `kid-5bg5`, `averbakh` |
| 8.9 | Quiet set-ups: 5.e3 and the London | Beginners' favourites; the KID set-up and a central break still work. | `kid-vs-e3`, `kid-vs-london` |
