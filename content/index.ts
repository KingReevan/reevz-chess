import type { Opening } from './types'
import { french } from './openings/french'
import { kingsIndian } from './openings/kings-indian'
import { ruyLopez } from './openings/ruy-lopez'
import { sicilian } from './openings/sicilian'

/** Every course in the app. Add a new opening here and it appears as a card on the home grid. */
export const openings: Opening[] = [ruyLopez, kingsIndian, sicilian, french]

export * from './types'
