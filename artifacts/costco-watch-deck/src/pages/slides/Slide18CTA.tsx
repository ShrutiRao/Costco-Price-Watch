export default function Slide18CTA() {
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
      <div style={{ position: 'absolute', bottom: '12vh', left: '10vw', zIndex: 1, maxWidth: '65vw' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, letterSpacing: '0.02em', marginBottom: '2.5vh', textTransform: 'uppercase' }}>
          Open Source
        </div>
        <h2 style={{ color: '#111111', fontSize: '5.5vw', margin: '0 0 3vh 0', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          Stop leaving money on the table.
        </h2>
        <p style={{ color: '#666666', fontSize: '2.2vw', margin: '0 0 5vh 0', fontWeight: 400, lineHeight: 1.4, maxWidth: '52vw', textWrap: 'pretty' } as React.CSSProperties}>
          Built on Replit — React, Express, TypeScript
        </p>
        <div style={{ display: 'flex', gap: '2vw', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '1.8vh 3vw', fontSize: '1.8vw', fontWeight: 700, letterSpacing: '0.02em' }}>
            github.com/ShrutiRao/Costco-Price-Watch
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#111111', fontSize: '1.8vw', fontWeight: 600 }}>costcowatch.replit.app</div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>18</div>
    </div>
  );
}
