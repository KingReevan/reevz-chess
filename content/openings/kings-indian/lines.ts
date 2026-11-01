/** Common move-order prefixes for the King's Indian course. All are SAN from the starting position. */

/** 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6: the King's Indian set-up */
export const KID = 'd4 Nf6 c4 g6 Nc3 Bg7 e4 d6'
/** 5.Nf3 O-O 6.Be2 e5: the Classical (Orthodox) Variation */
export const CLASSICAL = `${KID} Nf3 O-O Be2 e5`
/** 7.O-O Nc6 8.d5 Ne7: the main line with the center locked */
export const MAIN = `${CLASSICAL} O-O Nc6 d5 Ne7`
/** 9.Ne1 Nd7 10.f3 f5: the Mar del Plata */
export const MDP = `${MAIN} Ne1 Nd7 f3 f5`
/** 11.Be3 f4 12.Bf2 g5: the Mar del Plata race begins */
export const MDP_G5 = `${MDP} Be3 f4 Bf2 g5`
/** 9.b4: the Bayonet Attack */
export const BAYONET = `${MAIN} b4`
/** 5.f3 O-O 6.Be3: the Sämisch */
export const SAMISCH = `${KID} f3 O-O Be3`
/** 5.f4 O-O 6.Nf3 c5 7.d5 e6 8.Be2 exd5 9.cxd5: the Four Pawns Attack main line */
export const FOUR_PAWNS = `${KID} f4 O-O Nf3 c5 d5 e6 Be2 exd5 cxd5`
/** 5.Be2 O-O 6.Bg5: the Averbakh */
export const AVERBAKH = `${KID} Be2 O-O Bg5`
/** 1.d4 Nf6 2.c4 g6 3.Nf3 Bg7 4.g3 O-O 5.Bg2 d6 6.O-O: the Fianchetto Variation */
export const FIANCHETTO = 'd4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O'
