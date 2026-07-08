export default function Slide17Video() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  const scene = (n: string, title: string, desc: string): React.CSSProperties => ({});
  void scene;
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', bottom: '10vh', zIndex: 1, display: 'flex', gap: '8vw', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 42%' }}>
          <h2 style={{ color: '#111111', fontSize: '4vw', margin: '0 0 2.5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Explainer Video</h2>
          <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.6, margin: '0 0 3.5vh 0', textWrap: 'pretty' } as React.CSSProperties}>
            A 42-second animated motion-graphics video built alongside the app using React and Framer Motion.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>6 scenes covering the full product narrative</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Scene-jump controls and loop lock in the preview bar</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Exports to .mp4 via Replit's recording pipeline</p>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 46%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '1.5vw', boxShadow: '0 0.5vh 1.5vh rgba(0,0,0,0.03)' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>1</div>
              </div>
              <div style={{ color: '#111', fontSize: '1.7vw', fontWeight: 600 }}>You shop. Prices drop. You miss the refund.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '1.5vw', boxShadow: '0 0.5vh 1.5vh rgba(0,0,0,0.03)' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>2</div>
              </div>
              <div style={{ color: '#111', fontSize: '1.7vw', fontWeight: 600 }}>CostcoWatch logo reveal</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '1.5vw', boxShadow: '0 0.5vh 1.5vh rgba(0,0,0,0.03)' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>3</div>
              </div>
              <div style={{ color: '#111', fontSize: '1.7vw', fontWeight: 600 }}>Receipt upload flow with scanner line</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '1.5vw', boxShadow: '0 0.5vh 1.5vh rgba(0,0,0,0.03)' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>4</div>
              </div>
              <div style={{ color: '#111', fontSize: '1.7vw', fontWeight: 600 }}>Price tracking list with shimmer scan</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', backgroundColor: '#f0fdf4', border: '1px solid #10b981', padding: '1.5vw' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>5</div>
              </div>
              <div style={{ color: '#059669', fontSize: '1.7vw', fontWeight: 600 }}>Price drop alert — $100 refund card</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', backgroundColor: '#f0fdf4', border: '1px solid #10b981', padding: '1.5vw' }}>
              <div style={{ width: '2.5vw', height: '2.5vw', backgroundColor: '#10b981', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#fff', fontSize: '1.5vw', fontWeight: 700 }}>6</div>
              </div>
              <div style={{ color: '#059669', fontSize: '1.7vw', fontWeight: 600 }}>Dashboard stats + $2,482.50 savings lockup</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>17</div>
    </div>
  );
}
