/** Tiny synthesised sound effects, so the app ships no audio files. */
let ctx: AudioContext | null = null
let enabled = true
export const setSoundEnabled = (on: boolean) => { enabled = on }

function tone(freq: number, dur: number, type: OscillatorType, gain: number, delay = 0) {
  if (!enabled) return
  try {
    ctx ??= new AudioContext()
    const t = ctx.currentTime + delay
    const o = ctx.createOscillator(), g = ctx.createGain()
    o.type = type
    o.frequency.setValueAtTime(freq, t)
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(g).connect(ctx.destination)
    o.start(t)
    o.stop(t + dur)
  } catch { /* audio unavailable */ }
}

export const sound = {
  move: () => tone(420, 0.07, 'triangle', 0.18),
  capture: () => { tone(300, 0.09, 'triangle', 0.22); tone(180, 0.08, 'square', 0.05, 0.02) },
  good: () => { tone(660, 0.12, 'sine', 0.16); tone(990, 0.18, 'sine', 0.14, 0.09) },
  bad: () => tone(170, 0.22, 'sawtooth', 0.06),
  win: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.22, 'sine', 0.13, i * 0.09))
}

export const playMoveSound = (san?: string) => (san?.includes('x') ? sound.capture() : sound.move())
