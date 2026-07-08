export default function Slide04Solution() {
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
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', bottom: '10vh', zIndex: 1, display: 'flex', gap: '8vw', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 45%' }}>
          <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 3vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>The Solution</h2>
          <p style={{ color: '#666666', fontSize: '2vw', lineHeight: 1.6, margin: '0 0 4vh 0', textWrap: 'pretty' } as React.CSSProperties}>
            CostcoWatch is a web app that automates the entire price-protection workflow.
          </p>
          <p style={{ color: '#666666', fontSize: '2vw', lineHeight: 1.6, margin: 0, textWrap: 'pretty' } as React.CSSProperties}>
            Upload a receipt once — we handle monitoring, comparison, and alerting for every item, for the full 30-day window.
          </p>
        </div>
        <div style={{ flex: '1 1 45%', paddingTop: '1vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2vw', backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '2vw', boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>1</div>
              </div>
              <div>
                <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600, marginBottom: '0.8vh' }}>Upload a receipt</div>
                <div style={{ color: '#666', fontSize: '1.7vw', lineHeight: 1.5 }}>Photo or PDF, any Costco receipt format</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2vw', backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '2vw', boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>2</div>
              </div>
              <div>
                <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600, marginBottom: '0.8vh' }}>We extract every item</div>
                <div style={{ color: '#666', fontSize: '1.7vw', lineHeight: 1.5 }}>Name, price, quantity, date — automatically</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2vw', backgroundColor: '#f0fdf4', border: '1px solid #10b981', padding: '2vw', boxShadow: '0 1vh 2vh rgba(16,185,129,0.06)' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>3</div>
              </div>
              <div>
                <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600, marginBottom: '0.8vh' }}>We alert you when to claim</div>
                <div style={{ color: '#666', fontSize: '1.7vw', lineHeight: 1.5 }}>Monitor prices and surface refund alerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>04</div>
    </div>
  );
}
