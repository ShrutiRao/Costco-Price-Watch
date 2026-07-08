export default function Slide03BigStat() {
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
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -52%)', zIndex: 1, textAlign: 'center', width: '80vw' }}>
        <div style={{ color: '#10b981', fontSize: '11vw', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
          $2,400+
        </div>
        <div style={{ width: '8vw', height: '0.4vh', backgroundColor: '#10b981', margin: '3vh auto 3.5vh auto' }} />
        <p style={{ color: '#666666', fontSize: '2.2vw', fontWeight: 400, lineHeight: 1.5, maxWidth: '55vw', margin: '0 auto', textWrap: 'pretty' } as React.CSSProperties}>
          In estimated refunds found across receipts uploaded during development — money that would have gone unclaimed without automated tracking.
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>03</div>
    </div>
  );
}
