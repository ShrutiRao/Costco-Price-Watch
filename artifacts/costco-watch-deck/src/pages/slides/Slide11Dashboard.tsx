export default function Slide11Dashboard() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  const statCard = (label: string, value: string, accent: boolean): React.CSSProperties => ({
    flex: '1 1 44%', backgroundColor: accent ? '#f0fdf4' : '#ffffff',
    border: accent ? '1px solid #10b981' : '1px solid #E8E8E6',
    padding: '2.5vw 2.5vw 2vw 2.5vw',
    boxShadow: accent ? '0 1vh 3vh rgba(16,185,129,0.07)' : '0 1vh 2vh rgba(0,0,0,0.03)',
  });
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', zIndex: 1 }}>
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 2vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>The Dashboard</h2>
        <p style={{ color: '#666', fontSize: '2vw', margin: '0 0 4vh 0' }}>Everything at a glance — live stats updated on every check.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2vh 2vw' }}>
          <div style={statCard('', '', false)}>
            <div style={{ color: '#999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5vh' }}>Receipts</div>
            <div style={{ color: '#111', fontSize: '4.5vw', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>8</div>
            <div style={{ color: '#666', fontSize: '1.7vw', marginTop: '1.5vh' }}>Total receipts uploaded</div>
          </div>
          <div style={statCard('', '', false)}>
            <div style={{ color: '#999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5vh' }}>Items Tracked</div>
            <div style={{ color: '#111', fontSize: '4.5vw', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>40</div>
            <div style={{ color: '#666', fontSize: '1.7vw', marginTop: '1.5vh' }}>Items currently in monitoring</div>
          </div>
          <div style={statCard('', '', true)}>
            <div style={{ color: '#059669', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5vh' }}>Open Alerts</div>
            <div style={{ color: '#10b981', fontSize: '4.5vw', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>30</div>
            <div style={{ color: '#059669', fontSize: '1.7vw', marginTop: '1.5vh' }}>Items with confirmed price drops</div>
          </div>
          <div style={statCard('', '', true)}>
            <div style={{ color: '#059669', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5vh' }}>Est. Savings</div>
            <div style={{ color: '#10b981', fontSize: '4.5vw', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>$2,417</div>
            <div style={{ color: '#059669', fontSize: '1.7vw', marginTop: '1.5vh' }}>Sum of all refund amounts found</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>11</div>
    </div>
  );
}
