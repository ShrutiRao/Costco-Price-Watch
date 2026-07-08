export default function Slide16Roadmap() {
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
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 4vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>What's Next</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3vw', padding: '2.2vh 0', borderBottom: '1px solid #EFEFED' }}>
            <div style={{ fontSize: '3vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', width: '5vw', flexShrink: 0 }}>01</div>
            <div>
              <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '0.5vh' }}>PostgreSQL persistence</div>
              <div style={{ color: '#666', fontSize: '1.8vw' }}>Replace the in-memory store with a real database</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3vw', padding: '2.2vh 0', borderBottom: '1px solid #EFEFED' }}>
            <div style={{ fontSize: '3vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', width: '5vw', flexShrink: 0 }}>02</div>
            <div>
              <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '0.5vh' }}>Real price-lookup integration</div>
              <div style={{ color: '#666', fontSize: '1.8vw' }}>Live pricing data from Costco's catalogue</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3vw', padding: '2.2vh 0', borderBottom: '1px solid #EFEFED' }}>
            <div style={{ fontSize: '3vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', width: '5vw', flexShrink: 0 }}>03</div>
            <div>
              <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '0.5vh' }}>Push and email notifications</div>
              <div style={{ color: '#666', fontSize: '1.8vw' }}>Alerts delivered the moment a price drop fires</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3vw', padding: '2.2vh 0', borderBottom: '1px solid #EFEFED' }}>
            <div style={{ fontSize: '3vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', width: '5vw', flexShrink: 0 }}>04</div>
            <div>
              <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '0.5vh' }}>Mobile app</div>
              <div style={{ color: '#666', fontSize: '1.8vw' }}>React Native / Expo — track price drops on the go</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3vw', padding: '2.2vh 0' }}>
            <div style={{ fontSize: '3vw', fontWeight: 800, color: '#10b981', letterSpacing: '-0.03em', width: '5vw', flexShrink: 0 }}>05</div>
            <div>
              <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '0.5vh' }}>Multi-user accounts</div>
              <div style={{ color: '#666', fontSize: '1.8vw' }}>Shared receipts and household-level savings tracking</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>16</div>
    </div>
  );
}
