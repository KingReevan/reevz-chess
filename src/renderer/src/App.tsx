export function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: "'Bricolage Grotesque Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        textAlign: 'center',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        padding: '2rem'
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          marginBottom: '1.25rem',
          letterSpacing: '-0.02em'
        }}
      >
        When is the house party?
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          color: '#94a3b8',
          fontWeight: 500
        }}
      >
        ites time to let go of your neighbour
      </p>
    </div>
  )
}
