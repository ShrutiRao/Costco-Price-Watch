export default function Slide15TechStack() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  const pill: React.CSSProperties = {
    display: 'inline-block', backgroundColor: '#ffffff', border: '1px solid #E8E8E6',
    padding: '0.8vh 1.2vw', fontSize: '1.7vw', color: '#111', fontWeight: 500,
    marginRight: '1vw', marginBottom: '0', boxShadow: '0 0.5vh 1vh rgba(0,0,0,0.03)',
  };
  const row: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '0', padding: '2.2vh 0', borderBottom: '1px solid #EFEFED',
  };
  const label: React.CSSProperties = {
    width: '14vw', color: '#999', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0,
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', zIndex: 1 }}>
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 4vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Tech Stack</h2>
        <div style={{ borderTop: '2px solid #10b981' }}>
          <div style={row}>
            <div style={label}>Frontend</div>
            <div>
              <span style={pill}>React</span>
              <span style={pill}>Vite</span>
              <span style={pill}>Tailwind CSS</span>
              <span style={pill}>TanStack Query</span>
              <span style={pill}>wouter</span>
            </div>
          </div>
          <div style={row}>
            <div style={label}>Backend</div>
            <div>
              <span style={pill}>Node.js 24</span>
              <span style={pill}>Express 5</span>
              <span style={pill}>TypeScript 5.9</span>
            </div>
          </div>
          <div style={row}>
            <div style={label}>Contract</div>
            <div>
              <span style={pill}>OpenAPI 3.1</span>
              <span style={pill}>Orval codegen</span>
              <span style={pill}>Zod</span>
            </div>
          </div>
          <div style={row}>
            <div style={label}>Testing</div>
            <div>
              <span style={pill}>Playwright</span>
              <span style={{ ...pill, color: '#999' }}>e2e</span>
            </div>
          </div>
          <div style={{ ...row, borderBottom: 'none' }}>
            <div style={label}>Monorepo</div>
            <div>
              <span style={pill}>pnpm workspaces</span>
              <span style={pill}>TypeScript project refs</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>15</div>
    </div>
  );
}
