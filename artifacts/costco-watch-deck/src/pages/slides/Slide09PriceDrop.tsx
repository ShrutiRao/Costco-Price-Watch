export default function Slide09PriceDrop() {
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
        <div style={{ flex: '1 1 40%' }}>
          <h2 style={{ color: '#111111', fontSize: '4vw', margin: '0 0 3.5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>When a Price Drops</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>An alert card appears on your dashboard and receipt detail view</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Shows what you paid, the current price, and how much you're owed</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Bring the receipt to the Costco membership desk to claim the adjustment</p>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 50%' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #10b981', padding: '3vw', boxShadow: '0 2vh 5vh rgba(16,185,129,0.10)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', marginBottom: '3vh' }}>
              <div style={{ width: '4vw', height: '4vw', backgroundColor: '#10b981', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '1.8vw', height: '1.8vw', backgroundColor: '#fff', borderRadius: '50%' }} />
              </div>
              <div>
                <div style={{ color: '#111', fontSize: '2vw', fontWeight: 700, lineHeight: 1.2 }}>Price Drop Alert</div>
                <div style={{ color: '#999', fontSize: '1.5vw' }}>Vitamix 5200 Blender</div>
              </div>
            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#EFEFED', marginBottom: '3vh' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3vh' }}>
              <div>
                <div style={{ color: '#999', fontSize: '1.5vw', marginBottom: '0.8vh' }}>You paid</div>
                <div style={{ color: '#999', fontSize: '2.8vw', fontWeight: 700, textDecoration: 'line-through' }}>$399.99</div>
              </div>
              <div style={{ fontSize: '2.5vw', color: '#CCCCCC', fontWeight: 300 }}>→</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#10b981', fontSize: '1.5vw', marginBottom: '0.8vh' }}>Current price</div>
                <div style={{ color: '#10b981', fontSize: '2.8vw', fontWeight: 800 }}>$299.99</div>
              </div>
            </div>
            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #10b981', padding: '1.8vw', textAlign: 'center' }}>
              <div style={{ color: '#059669', fontSize: '2.2vw', fontWeight: 800, letterSpacing: '-0.02em' }}>You're owed $100.00</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>09</div>
    </div>
  );
}
