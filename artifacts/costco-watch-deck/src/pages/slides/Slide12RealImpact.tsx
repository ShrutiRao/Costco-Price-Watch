export default function Slide12RealImpact() {
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
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', zIndex: 1 }}>
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Real Impact</h2>
        <div style={{ display: 'flex', gap: '0', borderTop: '2px solid #10b981' }}>
          <div style={{ flex: 1, padding: '4vh 3vw 4vh 0', borderRight: '1px solid #EFEFED' }}>
            <div style={{ color: '#10b981', fontSize: '8vw', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>8</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginTop: '2vh', marginBottom: '1vh' }}>receipts uploaded</div>
            <div style={{ color: '#666', fontSize: '1.8vw', lineHeight: 1.5 }}>40 items scanned across all receipts</div>
          </div>
          <div style={{ flex: 1, padding: '4vh 3vw', borderRight: '1px solid #EFEFED' }}>
            <div style={{ color: '#10b981', fontSize: '8vw', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>30</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginTop: '2vh', marginBottom: '1vh' }}>alerts found</div>
            <div style={{ color: '#666', fontSize: '1.8vw', lineHeight: 1.5 }}>All from purchases that would have expired with no action</div>
          </div>
          <div style={{ flex: 1, padding: '4vh 0 4vh 3vw' }}>
            <div style={{ color: '#10b981', fontSize: '6vw', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>$2,417</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginTop: '2vh', marginBottom: '1vh' }}>in savings found</div>
            <div style={{ color: '#666', fontSize: '1.8vw', lineHeight: 1.5 }}>Average saving per alert: ~$80</div>
          </div>
        </div>
        <div style={{ marginTop: '4vh', backgroundColor: '#f0fdf4', border: '1px solid #10b981', padding: '2vh 3vw' }}>
          <p style={{ color: '#059669', fontSize: '2vw', fontWeight: 500, margin: 0, lineHeight: 1.5 }}>
            All from purchases that would have expired with no action taken — money that would have been permanently lost.
          </p>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>12</div>
    </div>
  );
}
