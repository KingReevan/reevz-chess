/** Common move-order prefixes for writing lines. All are SAN from the starting position. */
export const RUY = 'e4 e5 Nf3 Nc6 Bb5'
/** 3...a6 4.Ba4 Nf6 5.O-O */
export const MORPHY = `${RUY} a6 Ba4 Nf6 O-O`
/** 5...Be7 6.Re1 b5 7.Bb3 */
export const CLOSED7 = `${MORPHY} Be7 Re1 b5 Bb3`
/** 7...d6 8.c3 O-O 9.h3: the Closed tabiya */
export const CLOSED = `${CLOSED7} d6 c3 O-O h3`
/** 7...O-O: the Marshall / Anti-Marshall branch point */
export const CLOSED_OO = `${CLOSED7} O-O`
/** 5...Nxe4 6.d4 b5 7.Bb3 d5 8.dxe5 Be6: the Open tabiya */
export const OPEN = `${MORPHY} Nxe4 d4 b5 Bb3 d5 dxe5 Be6`
/** 3...Nf6 */
export const BERLIN = `${RUY} Nf6`
/** Exchange Variation 4.Bxc6 dxc6 */
export const EXCHANGE = `${RUY} a6 Bxc6 dxc6`
