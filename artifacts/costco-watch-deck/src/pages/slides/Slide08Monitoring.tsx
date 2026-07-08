export default function Slide08Monitoring() {
  const grid = {
    backgroundImage: 'linear-gradient(#EFEFED 1px, transparent 1px), linear-gradient(90deg, #EFEFED 1px, transparent 1px)',
    backgroundSize: '5vw 5vh',
  };
  const dayStyle = (active: boolean, highlight: boolean): React.CSSProperties => ({
    width: '3.2vw', height: '3.2vw', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.6vw', fontWeight: active ? 700 : 400,
    backgroundColor: highlight ? '#10b981' : active ? '#f0fdf4' : 'transparent',
    color: highlight ? '#fff' : active ? '#059669' : '#ccc',
    border: active && !highlight ? '1px solid #10b981' : '1px solid transparent',
  });
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ backgroundColor: '#FAFAF9', ...grid, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'absolute', top: '5vh', left: '5vw', width: '3vw', height: '3vw', backgroundColor: '#10b981', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1, textAlign: 'right' }}>
        <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5vh' }}>CostcoWatch</div>
        <div style={{ color: '#999999', fontSize: '1.5vw', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2026</div>
      </div>
      <div style={{ position: 'absolute', top: '17vh', left: '10vw', right: '10vw', bottom: '10vh', zIndex: 1, display: 'flex', gap: '8vw', alignItems: 'center' }}>
        {/* Left: text */}
        <div style={{ flex: '1 1 42%' }}>
          <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5vh' }}>Step 3</div>
          <h2 style={{ color: '#111111', fontSize: '4vw', margin: '0 0 3.5vh 0', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Price Monitoring</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Each item enters active monitoring for its full 30-day window</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>Price changes checked against Costco's current pricing</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw' }}>
              <div style={{ width: '0.6vw', height: '0.6vw', backgroundColor: '#10b981', marginTop: '1vh', flexShrink: 0 }} />
              <p style={{ color: '#666', fontSize: '2vw', lineHeight: 1.55, margin: 0 }}>The 30-day clock starts from the purchase date on the receipt</p>
            </div>
          </div>
        </div>
        {/* Right: 30-day calendar grid */}
        <div style={{ flex: '1 1 45%' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #E8E8E6', padding: '2.5vw', boxShadow: '0 2vh 4vh rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2vh' }}>
              <div style={{ color: '#111', fontSize: '1.8vw', fontWeight: 600 }}>30-Day Window</div>
              <div style={{ color: '#10b981', fontSize: '1.5vw', fontWeight: 600 }}>Nov 3 – Dec 3</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5vh' }}>
              <div style={dayStyle(true, false)}>1</div>
              <div style={dayStyle(true, false)}>2</div>
              <div style={dayStyle(true, true)}>3</div>
              <div style={dayStyle(true, false)}>4</div>
              <div style={dayStyle(true, false)}>5</div>
              <div style={dayStyle(true, false)}>6</div>
              <div style={dayStyle(true, false)}>7</div>
              <div style={dayStyle(true, false)}>8</div>
              <div style={dayStyle(true, false)}>9</div>
              <div style={dayStyle(true, false)}>10</div>
              <div style={dayStyle(true, false)}>11</div>
              <div style={dayStyle(true, false)}>12</div>
              <div style={dayStyle(true, false)}>13</div>
              <div style={dayStyle(true, false)}>14</div>
              <div style={dayStyle(true, false)}>15</div>
              <div style={dayStyle(true, false)}>16</div>
              <div style={dayStyle(true, false)}>17</div>
              <div style={dayStyle(true, false)}>18</div>
              <div style={dayStyle(true, false)}>19</div>
              <div style={dayStyle(true, false)}>20</div>
              <div style={dayStyle(true, false)}>21</div>
              <div style={dayStyle(true, false)}>22</div>
              <div style={dayStyle(true, false)}>23</div>
              <div style={dayStyle(true, false)}>24</div>
              <div style={dayStyle(true, false)}>25</div>
              <div style={dayStyle(true, false)}>26</div>
              <div style={dayStyle(true, false)}>27</div>
              <div style={dayStyle(true, false)}>28</div>
              <div style={dayStyle(true, false)}>29</div>
              <div style={dayStyle(true, false)}>30</div>
              <div style={dayStyle(false, false)}>31</div>
            </div>
            <div style={{ marginTop: '2vh', display: 'flex', gap: '2vw', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw' }}>
                <div style={{ width: '1.2vw', height: '1.2vw', backgroundColor: '#10b981' }} />
                <span style={{ color: '#666', fontSize: '1.5vw' }}>Purchase date</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw' }}>
                <div style={{ width: '1.2vw', height: '1.2vw', backgroundColor: '#f0fdf4', border: '1px solid #10b981' }} />
                <span style={{ color: '#666', fontSize: '1.5vw' }}>Monitoring active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '5vh', left: '5vw', color: '#999999', fontSize: '1.5vw', fontWeight: 600, zIndex: 1 }}>08</div>
    </div>
  );
}
