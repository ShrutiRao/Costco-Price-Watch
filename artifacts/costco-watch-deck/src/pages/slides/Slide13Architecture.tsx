export default function Slide13Architecture() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  const box: React.CSSProperties = {
    flex: 1, backgroundColor: '#ffffff', border: '1px solid #E8E8E6',
    padding: '2.5vw', boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)',
  };
  const pill: React.CSSProperties = {
    display: 'inline-block', backgroundColor: '#FAFAF9', border: '1px solid #E8E8E6',
    padding: '0.6vh 1vw', fontSize: '1.6vw', color: '#666', marginRight: '0.8vw', marginBottom: '0.8vh',
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', zIndex: 1 }}>
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Technical Architecture</h2>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '0' }}>
          <div style={{ ...box, borderLeft: '4px solid #10b981' }}>
            <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2vh' }}>Frontend</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '2vh' }}>React + Vite</div>
            <div>
              <span style={pill}>React</span>
              <span style={pill}>Vite</span>
              <span style={pill}>Tailwind CSS</span>
              <span style={pill}>TanStack Query</span>
              <span style={pill}>wouter</span>
            </div>
            <div style={{ marginTop: '2.5vh', color: '#666', fontSize: '1.7vw', lineHeight: 1.5 }}>Static artifact served at <span style={{ color: '#10b981', fontWeight: 600 }}>/costco-watch/</span></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 1.5vw', color: '#CCCCCC', fontSize: '3vw' }}>→</div>
          <div style={{ ...box, borderLeft: '4px solid #10b981' }}>
            <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2vh' }}>API Server</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '2vh' }}>Express 5</div>
            <div>
              <span style={pill}>Node.js 24</span>
              <span style={pill}>Express 5</span>
              <span style={pill}>TypeScript 5.9</span>
              <span style={pill}>Zod</span>
            </div>
            <div style={{ marginTop: '2.5vh', color: '#666', fontSize: '1.7vw', lineHeight: 1.5 }}>REST API proxied at <span style={{ color: '#10b981', fontWeight: 600 }}>/api/</span></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 1.5vw', color: '#CCCCCC', fontSize: '3vw' }}>→</div>
          <div style={{ ...box, borderLeft: '4px solid #10b981' }}>
            <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2vh' }}>Shared Libraries</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '2vh' }}>pnpm Workspaces</div>
            <div>
              <span style={pill}>api-spec</span>
              <span style={pill}>api-client-react</span>
              <span style={pill}>api-zod</span>
            </div>
            <div style={{ marginTop: '2.5vh', color: '#666', fontSize: '1.7vw', lineHeight: 1.5 }}>OpenAPI spec → Orval codegen → typed hooks + Zod schemas</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>13</div>
    </div>
  );
}
