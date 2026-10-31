/// <reference types="vite/client" />
import type { ReevzApi } from '../../preload'

declare global {
  interface Window {
    /** Present inside the desktop app; undefined in a plain browser. */
    reevz?: ReevzApi
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      /** chessground's piece element, reused for piece icons */
      piece: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

export {}
