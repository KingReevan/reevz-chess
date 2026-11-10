/** Common move-order prefixes for the French course. All are SAN from the starting position. */

/** 1.e4 e6 2.d4 d5: the French position */
export const FRENCH = 'e4 e6 d4 d5'
/** 3.e5 c5 4.c3 Nc6 5.Nf3: the Advance Variation */
export const ADVANCE = `${FRENCH} e5 c5 c3 Nc6 Nf3`
/** 5...Qb6: the Advance main line */
export const ADVANCE_QB6 = `${ADVANCE} Qb6`
/** 6.Bd3 cxd4 7.cxd4: the Milner-Barry Gambit set-up */
export const MILNER_BARRY = `${ADVANCE_QB6} Bd3 cxd4 cxd4`
/** 3.exd5 exd5: the Exchange Variation */
export const EXCHANGE = `${FRENCH} exd5 exd5`
/** 3.Nd2: the Tarrasch */
export const TARRASCH = `${FRENCH} Nd2`
/** 3...Nf6 4.e5 Nfd7 5.Bd3 c5 6.c3 Nc6 7.Ne2 cxd4 8.cxd4: the closed Tarrasch */
export const TARRASCH_CLOSED = `${TARRASCH} Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4`
/** 3...c5 4.exd5 exd5 5.Ngf3 Nc6 6.Bb5 Bd6: the open Tarrasch with the isolated d-pawn */
export const TARRASCH_IQP = `${TARRASCH} c5 exd5 exd5 Ngf3 Nc6 Bb5 Bd6`
/** 3.Nc3 dxe4 4.Nxe4: the Rubinstein */
export const RUBINSTEIN = `${FRENCH} Nc3 dxe4 Nxe4`
/** 4...Bd7 5.Nf3 Bc6: Fort Knox */
export const FORT_KNOX = `${RUBINSTEIN} Bd7 Nf3 Bc6`
/** 3.Nc3 Nf6: the Classical */
export const CLASSICAL = `${FRENCH} Nc3 Nf6`
/** 4.e5 Nfd7 5.f4 c5 6.Nf3 Nc6 7.Be3: the Steinitz */
export const STEINITZ = `${CLASSICAL} e5 Nfd7 f4 c5 Nf3 Nc6 Be3`
/** 4.Bg5 Be7 5.e5 Nfd7: the Classical with 4.Bg5 */
export const CLASSICAL_BG5 = `${CLASSICAL} Bg5 Be7 e5 Nfd7`
/** 6.Bxe7 Qxe7 7.f4: the Classical main line */
export const CLASSICAL_MAIN = `${CLASSICAL_BG5} Bxe7 Qxe7 f4`
/** 6.h4: the Alekhine–Chatard Attack */
export const ALEKHINE_CHATARD = `${CLASSICAL_BG5} h4`
/** 3.Nc3 Bb4: the Winawer */
export const WINAWER = `${FRENCH} Nc3 Bb4`
/** 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7: the Winawer main line */
export const WINAWER_MAIN = `${WINAWER} e5 c5 a3 Bxc3+ bxc3 Ne7`
