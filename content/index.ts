import type { Opening } from './types'
import { ruyLopez } from './openings/ruy-lopez'

/** Every course in the app. Add a new opening here and it appears in the sidebar. */
export const openings: Opening[] = [ruyLopez]

export * from './types'
