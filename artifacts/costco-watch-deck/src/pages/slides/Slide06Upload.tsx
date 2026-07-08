export default function Slide06Upload() {
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
        <div style={{ flex: '1 1 42%' }}>
          <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5vh' }}>Step 1</div>
          <h2 style={{ color: '#111111', fontSize: '4vw', margin: '0 0 3.5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Upload Your Receipt</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Drag-and-drop interface accepts photos and PDFs</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Works with any Costco receipt format</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Upload multiple receipts to build a complete purchase history</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Extraction runs automatically in the background</p>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 45%' }}>
          <div style={{ backgroundColor: '#ffffff', border: '2px dashed #CCCCCC', borderRadius: '0.5vw', padding: '4vw 3vw', textAlign: 'center', boxShadow: '0 2vh 4vh rgba(0,0,0,0.04)' }}>
            <div style={{ width: '5vw', height: '5vw', backgroundColor: '#f0fdf4', border: '2px solid #10b981', borderRadius: '50%', margin: '0 auto 2.5vh auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '2.5vw' }}>+</div>
            </div>
            <div style={{ color: '#111', fontSize: '2vw', fontWeight: 600, marginBottom: '1vh' }}>Drop receipt here</div>
            <div style={{ color: '#999', fontSize: '1.7vw', marginBottom: '3vh' }}>JPG, PNG, or PDF up to 10 MB</div>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#EFEFED', marginBottom: '3vh' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh', textAlign: 'left' }}>
              <div style={{ backgroundColor: '#FAFAF9', border: '1px solid #E8E8E6', padding: '1.2vw 1.5vw', borderRadius: '0.3vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#666', fontSize: '1.7vw' }}>costco-nov-2024.pdf</span>
                <span style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600 }}>Done</span>
              </div>
              <div style={{ backgroundColor: '#FAFAF9', border: '1px solid #E8E8E6', padding: '1.2vw 1.5vw', borderRadius: '0.3vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#666', fontSize: '1.7vw' }}>receipt-oct-2024.jpg</span>
                <span style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600 }}>Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>06</div>
    </div>
  );
}
