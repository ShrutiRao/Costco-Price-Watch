export default function Slide14OpenAPI() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', bottom: '10vh', zIndex: 1, display: 'flex', gap: '8vw', alignItems: 'center' }}>
        <div style={{ flex: '1 1 46%' }}>
          <h2 style={{ color: '#111111', fontSize: '4vw', margin: '0 0 3.5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>OpenAPI-First Development</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2vh' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Single source of truth: <span style={{ color: '#111', fontWeight: 600 }}>lib/api-spec/openapi.yaml</span></p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Codegen produces React Query hooks (client) and Zod validators (server)</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Frontend and backend stay in sync automatically — no hand-written types</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Adding an endpoint: edit the spec, run codegen, implement the handler</p>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 44%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <div style={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981', padding: '2.5vw', textAlign: 'center' }}>
              <div style={{ color: '#059669', fontSize: '1.5vw', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1vh' }}>Source of Truth</div>
              <div style={{ color: '#111', fontSize: '2.2vw', fontWeight: 700, fontFamily: 'monospace' }}>openapi.yaml</div>
            </div>
            <div style={{ textAlign: 'center', color: '#10b981', fontSize: '2.5vw' }}>↓</div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '2vw', textAlign: 'center', boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)' }}>
              <div style={{ color: '#999', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8vh' }}>Codegen</div>
              <div style={{ color: '#111', fontSize: '2vw', fontWeight: 700 }}>Orval</div>
            </div>
            <div style={{ textAlign: 'center', color: '#10b981', fontSize: '2.5vw' }}>↓</div>
            <div style={{ display: 'flex', gap: '2vw' }}>
              <div style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '1.8vw', textAlign: 'center', boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)' }}>
                <div style={{ color: '#999', fontSize: '1.5vw', marginBottom: '0.5vh' }}>Client</div>
                <div style={{ color: '#111', fontSize: '1.7vw', fontWeight: 700 }}>React Query Hooks</div>
              </div>
              <div style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '1.8vw', textAlign: 'center', boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)' }}>
                <div style={{ color: '#999', fontSize: '1.5vw', marginBottom: '0.5vh' }}>Server</div>
                <div style={{ color: '#111', fontSize: '1.7vw', fontWeight: 700 }}>Zod Schemas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>14</div>
    </div>
  );
}
