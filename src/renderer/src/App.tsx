import photo from './assets/photo.png'

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
        padding: '2rem',
        boxSizing: 'border-box'
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}
      >
        When is the house party?
      </h1>
      <img
        src={photo}
        alt="Neighbor"
        style={{
          maxHeight: '420px',
          maxWidth: '85vw',
          objectFit: 'contain',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
          marginBottom: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      />
      <p
        style={{
          fontSize: '1.5rem',
          color: '#94a3b8',
          fontWeight: 500
        }}
      >
        it's time to let go of your Neighbor
      </p>
    </div>
  )
}
