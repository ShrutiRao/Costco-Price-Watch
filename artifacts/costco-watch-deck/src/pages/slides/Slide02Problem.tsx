export default function Slide02Problem() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  const card: React.CSSProperties = {
    backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '2.5vw 2vw',
    boxShadow: '0 1vh 2vh rgba(0,0,0,0.03)', flex: '1 1 44%',
  };
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', zIndex: 1 }}>
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 4vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>The Problem</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2vh 2vw' }}>
          <div style={card}>
            <div style={{ width: '2vw', height: '2vw', backgroundColor: '#10b981', marginBottom: '2vh' }} />
            <p style={{ color: '#111111', fontSize: '1.8vw', fontWeight: 600, margin: '0 0 1.2vh 0', lineHeight: 1.3 }}>30-day price protection exists</p>
            <p style={{ color: '#666666', fontSize: '1.7vw', lineHeight: 1.5, margin: 0 }}>Costco offers a price-adjustment policy on most items purchased in the last 30 days.</p>
          </div>
          <div style={card}>
            <div style={{ width: '2vw', height: '2vw', backgroundColor: '#10b981', marginBottom: '2vh', opacity: 0.6 }} />
            <p style={{ color: '#111111', fontSize: '1.8vw', fontWeight: 600, margin: '0 0 1.2vh 0', lineHeight: 1.3 }}>Prices drop frequently</p>
            <p style={{ color: '#666666', fontSize: '1.7vw', lineHeight: 1.5, margin: 0 }}>Prices change after purchase — sometimes by hundreds of dollars within days.</p>
          </div>
          <div style={card}>
            <div style={{ width: '2vw', height: '2vw', backgroundColor: '#10b981', marginBottom: '2vh', opacity: 0.4 }} />
            <p style={{ color: '#111111', fontSize: '1.8vw', fontWeight: 600, margin: '0 0 1.2vh 0', lineHeight: 1.3 }}>Manual tracking is tedious</p>
            <p style={{ color: '#666666', fontSize: '1.7vw', lineHeight: 1.5, margin: 0 }}>Checking every receipt line-by-line against current store prices takes hours.</p>
          </div>
          <div style={card}>
            <div style={{ width: '2vw', height: '2vw', backgroundColor: '#10b981', marginBottom: '2vh', opacity: 0.2 }} />
            <p style={{ color: '#111111', fontSize: '1.8vw', fontWeight: 600, margin: '0 0 1.2vh 0', lineHeight: 1.3 }}>Money goes unclaimed</p>
            <p style={{ color: '#666666', fontSize: '1.7vw', lineHeight: 1.5, margin: 0 }}>Almost nobody does it, so almost everybody leaves money on the table.</p>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>02</div>
    </div>
  );
}
