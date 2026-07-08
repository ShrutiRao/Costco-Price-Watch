export default function Slide05HowItWorks() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  const col: React.CSSProperties = {
    flex: 1, backgroundColor: '#ffffff', border: '1px solid #E8E8E6',
    padding: '3vw 2.5vw', boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)',
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', zIndex: 1 }}>
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>How It Works</h2>
        <div style={{ display: 'flex', gap: '3vw' }}>
          <div style={col}>
            <div style={{ fontSize: '3.5vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', marginBottom: '2vh' }}>01</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 700, marginBottom: '2vh', lineHeight: 1.2 }}>Snap your receipt</div>
            <div style={{ width: '3vw', height: '0.3vh', backgroundColor: '#10b981', marginBottom: '2vh' }} />
            <p style={{ color: '#666', fontSize: '1.8vw', lineHeight: 1.6, margin: 0 }}>Upload a photo or PDF. Works with any Costco receipt — single item or a full cart.</p>
          </div>
          <div style={col}>
            <div style={{ fontSize: '3.5vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', marginBottom: '2vh' }}>02</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 700, marginBottom: '2vh', lineHeight: 1.2 }}>Items extracted automatically</div>
            <div style={{ width: '3vw', height: '0.3vh', backgroundColor: '#10b981', marginBottom: '2vh' }} />
            <p style={{ color: '#666', fontSize: '1.8vw', lineHeight: 1.6, margin: 0 }}>Every item, price, and date is parsed. No manual entry — structured in seconds.</p>
          </div>
          <div style={col}>
            <div style={{ fontSize: '3.5vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', marginBottom: '2vh' }}>03</div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 700, marginBottom: '2vh', lineHeight: 1.2 }}>Alerts when you're owed money</div>
            <div style={{ width: '3vw', height: '0.3vh', backgroundColor: '#10b981', marginBottom: '2vh' }} />
            <p style={{ color: '#666', fontSize: '1.8vw', lineHeight: 1.6, margin: 0 }}>We watch prices for 30 days and surface alerts the moment a drop triggers a refund.</p>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>05</div>
    </div>
  );
}
