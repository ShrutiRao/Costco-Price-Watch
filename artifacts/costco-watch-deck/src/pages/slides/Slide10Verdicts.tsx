export default function Slide10Verdicts() {
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
        <h2 style={{ color: '#111111', fontSize: '4.5vw', margin: '0 0 2vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>The Verdict System</h2>
        <p style={{ color: '#666', fontSize: '2vw', margin: '0 0 5vh 0' }}>Every item gets one of three verdicts.</p>
        <div style={{ display: 'flex', gap: '3vw' }}>
          <div style={{ flex: 1, backgroundColor: '#f0fdf4', border: '2px solid #10b981', padding: '3vw 2.5vw', boxShadow: '0 1vh 3vh rgba(16,185,129,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', marginBottom: '2.5vh' }}>
              <div style={{ width: '2vw', height: '2vw', backgroundColor: '#10b981' }} />
              <div style={{ color: '#059669', fontSize: '2.2vw', fontWeight: 800, letterSpacing: '-0.01em' }}>Alert</div>
            </div>
            <p style={{ color: '#111', fontSize: '1.8vw', lineHeight: 1.6, margin: 0 }}>
              Price drop at least $2.00 or at least 3% within the 30-day window.
            </p>
            <div style={{ marginTop: '2.5vh', paddingTop: '2vh', borderTop: '1px solid #10b981' }}>
              <div style={{ color: '#059669', fontSize: '1.8vw', fontWeight: 700 }}>You're owed a refund</div>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#fffbeb', border: '2px solid #f59e0b', padding: '3vw 2.5vw', boxShadow: '0 1vh 3vh rgba(245,158,11,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', marginBottom: '2.5vh' }}>
              <div style={{ width: '2vw', height: '2vw', backgroundColor: '#f59e0b' }} />
              <div style={{ color: '#d97706', fontSize: '2.2vw', fontWeight: 800, letterSpacing: '-0.01em' }}>Review</div>
            </div>
            <p style={{ color: '#111', fontSize: '1.8vw', lineHeight: 1.6, margin: 0 }}>
              Small drop below threshold, or outside the 30-day window but worth checking.
            </p>
            <div style={{ marginTop: '2.5vh', paddingTop: '2vh', borderTop: '1px solid #f59e0b' }}>
              <div style={{ color: '#d97706', fontSize: '1.8vw', fontWeight: 700 }}>Manual follow-up suggested</div>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: '#ffffff', border: '2px solid #E8E8E6', padding: '3vw 2.5vw', boxShadow: '0 1vh 3vh rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', marginBottom: '2.5vh' }}>
              <div style={{ width: '2vw', height: '2vw', backgroundColor: '#999999' }} />
              <div style={{ color: '#666666', fontSize: '2.2vw', fontWeight: 800, letterSpacing: '-0.01em' }}>No Action</div>
            </div>
            <p style={{ color: '#111', fontSize: '1.8vw', lineHeight: 1.6, margin: 0 }}>
              Price held or increased since purchase. No refund available at this time.
            </p>
            <div style={{ marginTop: '2.5vh', paddingTop: '2vh', borderTop: '1px solid #E8E8E6' }}>
              <div style={{ color: '#999', fontSize: '1.8vw', fontWeight: 700 }}>Continue monitoring</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>10</div>
    </div>
  );
}
