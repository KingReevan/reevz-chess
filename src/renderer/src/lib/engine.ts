/**
 * Stockfish running offline in a Web Worker (the single-threaded "lite" WebAssembly build).
 * Searches are queued so only one runs at a time.
 */
type Listener = (line: string) => void

class Engine {
  private worker: Worker | null = null
  private boot: Promise<boolean> | null = null
  private listeners = new Set<Listener>()
  private queue: Promise<unknown> = Promise.resolve()

  /** Starts the engine once. Resolves false if it can't load, so callers can fall back. */
  start(): Promise<boolean> {
    this.boot ??= (async () => {
      try {
        const { script } = await fetch('stockfish/manifest.json').then((r) => r.json())
        this.worker = new Worker(`stockfish/${script}`)
        this.worker.onmessage = (e) => {
          const line = String(e.data)
          this.listeners.forEach((l) => l(line))
        }
        this.send('uci')
        await this.waitFor((l) => l === 'uciok', 20000)
        this.send('isready')
        await this.waitFor((l) => l === 'readyok', 20000)
        return true
      } catch {
        this.worker?.terminate()
        this.worker = null
        return false
      }
    })()
    return this.boot
  }

  private send(cmd: string) {
    this.worker?.postMessage(cmd)
  }

  private waitFor(pred: (line: string) => boolean, timeout: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => {
        this.listeners.delete(l)
        reject(new Error('engine timeout'))
      }, timeout)
      const l: Listener = (line) => {
        if (!pred(line)) return
        clearTimeout(t)
        this.listeners.delete(l)
        resolve(line)
      }
      this.listeners.add(l)
    })
  }

  /** Best move in UCI form (e.g. "e2e4"), or null if the engine isn't available. */
  bestMove(fen: string, o: { skill: number; depth?: number; movetime?: number }): Promise<string | null> {
    const run = async () => {
      if (!(await this.start())) return null
      try {
        this.send(`setoption name Skill Level value ${o.skill}`)
        this.send(`position fen ${fen}`)
        this.send(o.movetime ? `go movetime ${o.movetime}` : `go depth ${o.depth ?? 8}`)
        const line = await this.waitFor((l) => l.startsWith('bestmove'), 30000)
        const mv = line.split(' ')[1]
        return mv && mv !== '(none)' ? mv : null
      } catch {
        return null
      }
    }
    const p = this.queue.then(run, run)
    this.queue = p
    return p
  }
}

export const engine = new Engine()
