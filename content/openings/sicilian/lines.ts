/** Common move-order prefixes for the Sicilian course. All are SAN from the starting position. */

/** 1.e4 c5 */
export const SICILIAN = 'e4 c5'
/** 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3: the Open Sicilian crossroads after 2...d6 */
export const OPEN = 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3'
/** 5...a6: the Najdorf */
export const NAJDORF = `${OPEN} a6`
/** 6.Be3: the English Attack against the Najdorf */
export const ENGLISH = `${NAJDORF} Be3`
/** 6.Bg5 e6 7.f4: the classical Najdorf attack */
export const NAJDORF_BG5 = `${NAJDORF} Bg5 e6 f4`
/** 5...g6: the Dragon */
export const DRAGON = `${OPEN} g6`
/** 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6: the Yugoslav Attack */
export const YUGOSLAV = `${DRAGON} Be3 Bg7 f3 O-O Qd2 Nc6`
/** 5...Nc6: the Classical Sicilian */
export const CLASSICAL = `${OPEN} Nc6`
/** 6.Bg5: the Richter–Rauzer */
export const RAUZER = `${CLASSICAL} Bg5`
/** 5...e6: the Scheveningen */
export const SCHEVENINGEN = `${OPEN} e6`
/** 2...Nc6 3.d4 cxd4 4.Nxd4: the Open Sicilian after 2...Nc6 */
export const OPEN_NC6 = 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4'
/** 4...g6: the Accelerated Dragon */
export const ACCELERATED = `${OPEN_NC6} g6`
/** 4...Nf6 5.Nc3 e5 6.Ndb5 d6: the Sveshnikov */
export const SVESHNIKOV = `${OPEN_NC6} Nf6 Nc3 e5 Ndb5 d6`
/** 7.Bg5 a6 8.Na3 b5: the Sveshnikov main line */
export const SVESHNIKOV_B5 = `${SVESHNIKOV} Bg5 a6 Na3 b5`
/** 2...e6 3.d4 cxd4 4.Nxd4: the Open Sicilian after 2...e6 */
export const OPEN_E6 = 'e4 c5 Nf3 e6 d4 cxd4 Nxd4'
/** 4...Nc6: the Taimanov */
export const TAIMANOV = `${OPEN_E6} Nc6`
/** 4...a6: the Kan */
export const KAN = `${OPEN_E6} a6`
/** 2.c3: the Alapin */
export const ALAPIN = 'e4 c5 c3'
/** 2.d4 cxd4 3.c3: the Smith–Morra Gambit */
export const MORRA = 'e4 c5 d4 cxd4 c3'
/** 3...dxc3 4.Nxc3 Nc6 5.Nf3: the Morra accepted */
export const MORRA_ACCEPTED = `${MORRA} dxc3 Nxc3 Nc6 Nf3`
/** 2.Nc3 Nc6 3.g3 g6 4.Bg2 Bg7 5.d3 d6: the Closed Sicilian */
export const CLOSED = 'e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6'
/** 2.Nf3 Nc6 3.Bb5: the Rossolimo */
export const ROSSOLIMO = 'e4 c5 Nf3 Nc6 Bb5'
/** 2.Nf3 d6 3.Bb5+: the Moscow */
export const MOSCOW = 'e4 c5 Nf3 d6 Bb5+'
