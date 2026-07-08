export default function Slide01Title() {
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
      <div style={{ position: 'absolute', bottom: '11vh', left: '10vw', zIndex: 1, maxWidth: '70vw' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, letterSpacing: '0.02em', marginBottom: '2.5vh', textTransform: 'uppercase' }}>
          costcowatch.replit.app
        </div>
        <h1 style={{ color: '#111111', fontSize: '7.5vw', margin: '0 0 3vh 0', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em' }}>
          CostcoWatch
        </h1>
        <p style={{ color: '#666666', fontSize: '2.2vw', margin: 0, fontWeight: 400, lineHeight: 1.4 }}>
          Never miss a Costco price drop again.
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>01</div>
    </div>
  );
}
