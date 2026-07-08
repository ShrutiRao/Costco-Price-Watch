export default function Slide07Extraction() {
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
        {/* Left: receipt mockup */}
        <div style={{ flex: '1 1 45%' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '2.5vw', boxShadow: '0 2vh 4vh rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#999', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2vh' }}>Extracted Items</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#EFEFED', marginBottom: '2vh' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8vh' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600 }}>Vitamix 5200 Blender</div>
                  <div style={{ color: '#999', fontSize: '1.5vw' }}>Nov 3, 2024 · Item #34567</div>
                </div>
                <div style={{ color: '#10b981', fontSize: '2vw', fontWeight: 700 }}>$399.99</div>
              </div>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#F5F5F3' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600 }}>Kirkland Olive Oil 2 pk</div>
                  <div style={{ color: '#999', fontSize: '1.5vw' }}>Nov 3, 2024 · Item #78901</div>
                </div>
                <div style={{ color: '#10b981', fontSize: '2vw', fontWeight: 700 }}>$24.99</div>
              </div>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#F5F5F3' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600 }}>Dyson V15 Detect</div>
                  <div style={{ color: '#999', fontSize: '1.5vw' }}>Nov 3, 2024 · Item #23456</div>
                </div>
                <div style={{ color: '#10b981', fontSize: '2vw', fontWeight: 700 }}>$749.99</div>
              </div>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#F5F5F3' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600 }}>Apple AirPods Pro</div>
                  <div style={{ color: '#999', fontSize: '1.5vw' }}>Nov 3, 2024 · Item #56789</div>
                </div>
                <div style={{ color: '#10b981', fontSize: '2vw', fontWeight: 700 }}>$179.99</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: text */}
        <div style={{ flex: '1 1 42%' }}>
          <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5vh' }}>Step 2</div>
          <h2 style={{ color: '#111111', fontSize: '4vw', margin: '0 0 3.5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Automatic Item Extraction</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Every line item parsed: name, unit price, quantity, and date</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Items normalized and matched to Costco's product catalogue</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>No manual entry — the entire receipt is structured in seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>07</div>
    </div>
  );
}
