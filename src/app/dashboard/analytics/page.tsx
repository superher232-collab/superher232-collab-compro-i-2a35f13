// src/app/dashboard/analytics/page.tsx
import React from 'react';

export default function AnalyticsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'monospace' }}>
      
      {/* Top Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        
        {/* Card 1 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Total Pendapatan</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22C55E' }}>$560K</div>
          <div style={{ fontSize: '10px', color: '#22C55E' }}>↗ +12.5%</div>
        </div>

        {/* Card 2 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Efisiensi Bahan Bakar</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#C7B8EA' }}>86%</div>
          <div style={{ fontSize: '10px', color: '#22C55E' }}>↗ +2.3%</div>
        </div>

        {/* Card 3 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Pengiriman Tepat Waktu</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3B82F6' }}>91%</div>
          <div style={{ fontSize: '10px', color: '#EF4444' }}>↘ -1.2%</div>
        </div>

        {/* Card 4 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Biaya Bahan Bakar Rata-Rata</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#EAB308' }}>$360K</div>
          <div style={{ fontSize: '10px', color: '#22C55E' }}>↘ -5.8%</div>
        </div>
      </div>

      {/* Middle Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* Tren Konsumsi Bahan Bakar Chart */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', height: '300px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '16px' }}>TREN KONSUMSI BAHAN BAKAR</div>
          <div style={{ flex: 1, position: 'relative' }}>
            {/* Y Axis labels */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', textAlign: 'right', width: '30px' }}>
              <span>6000</span>
              <span>4500</span>
              <span>3000</span>
              <span>1500</span>
              <span>0</span>
            </div>
            {/* SVG Chart area */}
            <div style={{ position: 'absolute', left: '40px', right: 0, top: '4px', bottom: '24px', borderLeft: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {/* Grid lines */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', borderTop: '1px dashed rgba(255,255,255,0.05)' }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px dashed rgba(255,255,255,0.05)' }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', borderTop: '1px dashed rgba(255,255,255,0.05)' }}></div>
              
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                  </linearGradient>
                </defs>
                <path d="M 0 33.3 C 10 36.6, 10 36.6, 20 36.6 C 30 36.6, 30 30, 40 30 C 50 30, 50 33.3, 60 33.3 C 70 33.3, 70 26.6, 80 26.6 C 90 26.6, 90 31.6, 100 31.6" fill="none" stroke="#A855F7" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <path d="M 0 33.3 C 10 36.6, 10 36.6, 20 36.6 C 30 36.6, 30 30, 40 30 C 50 30, 50 33.3, 60 33.3 C 70 33.3, 70 26.6, 80 26.6 C 90 26.6, 90 31.6, 100 31.6 L 100 100 L 0 100 Z" fill="url(#purpleGradient)" />
              </svg>
            </div>
            {/* X Axis labels */}
            <div style={{ position: 'absolute', left: '40px', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', paddingTop: '8px' }}>
              <span style={{ transform: 'translateX(-50%)' }}>Jan</span>
              <span style={{ transform: 'translateX(-50%)' }}>Feb</span>
              <span style={{ transform: 'translateX(-50%)' }}>Mar</span>
              <span style={{ transform: 'translateX(-50%)' }}>Apr</span>
              <span style={{ transform: 'translateX(-50%)' }}>Mei</span>
              <span style={{ transform: 'translateX(-50%)' }}>Jun</span>
            </div>
          </div>
        </div>

        {/* Kinerja Pengiriman Chart */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', height: '300px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '16px' }}>KINERJA PENGIRIMAN</div>
          <div style={{ flex: 1, position: 'relative' }}>
            {/* Y Axis labels */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', textAlign: 'right', width: '25px' }}>
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            {/* SVG Chart area */}
            <div style={{ position: 'absolute', left: '35px', right: 0, top: '4px', bottom: '24px', borderLeft: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 10px' }}>
              {/* Grid lines */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', borderTop: '1px dashed rgba(255,255,255,0.05)', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px dashed rgba(255,255,255,0.05)', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', borderTop: '1px dashed rgba(255,255,255,0.05)', zIndex: 0 }}></div>
              
              {/* Bars */}
              {[
                { g: 95, r: 8 },
                { g: 90, r: 12 },
                { g: 96, r: 5 },
                { g: 92, r: 10 },
                { g: 95, r: 7 },
                { g: 91, r: 11 },
                { g: 94, r: 9 }
              ].map((data, i) => (
                <div key={i} style={{ display: 'flex', gap: '2px', height: '100%', alignItems: 'flex-end', zIndex: 1, width: '8%' }}>
                  <div style={{ background: '#22C55E', height: `${data.g}%`, width: '100%', borderTopLeftRadius: '1px', borderTopRightRadius: '1px' }}></div>
                  <div style={{ background: '#EF4444', height: `${data.r}%`, width: '100%', borderTopLeftRadius: '1px', borderTopRightRadius: '1px' }}></div>
                </div>
              ))}
            </div>
            {/* X Axis labels */}
            <div style={{ position: 'absolute', left: '35px', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-around', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', paddingTop: '8px', padding: '0 10px' }}>
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
          </div>
          {/* Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#22C55E' }}>
              <div style={{ width: '8px', height: '8px', background: '#22C55E' }}></div> Tepat Waktu
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#EF4444' }}>
              <div style={{ width: '8px', height: '8px', background: '#EF4444' }}></div> Terlambat
            </div>
          </div>
        </div>
      </div>

      {/* Large Bottom Chart */}
      <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', height: '350px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '16px', textTransform: 'uppercase' }}>Pendapatan vs Biaya Operasional</div>
        <div style={{ flex: 1, position: 'relative' }}>
          {/* Y Axis */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', textAlign: 'right', width: '45px' }}>
            <span>160000</span>
            <span>120000</span>
            <span>80000</span>
            <span>40000</span>
            <span>0</span>
          </div>
          {/* SVG Chart */}
          <div style={{ position: 'absolute', left: '55px', right: '10px', top: '4px', bottom: '24px', borderLeft: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', borderTop: '1px dashed rgba(255,255,255,0.05)' }}></div>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px dashed rgba(255,255,255,0.05)' }}></div>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', borderTop: '1px dashed rgba(255,255,255,0.05)' }}></div>
            
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <path d="M 0 21.875 L 33.3 15.625 L 66.6 12.5 L 100 3.125" fill="none" stroke="#A855F7" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="0" cy="21.875" r="4" fill="#A855F7" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <circle cx="33.3" cy="15.625" r="4" fill="#A855F7" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <circle cx="66.6" cy="12.5" r="4" fill="#A855F7" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <circle cx="100" cy="3.125" r="4" fill="#A855F7" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />

              <path d="M 0 46.875 L 33.3 43.75 L 66.6 45 L 100 40.625" fill="none" stroke="#F59E0B" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="0" cy="46.875" r="4" fill="#F59E0B" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <circle cx="33.3" cy="43.75" r="4" fill="#F59E0B" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <circle cx="66.6" cy="45" r="4" fill="#F59E0B" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <circle cx="100" cy="40.625" r="4" fill="#F59E0B" stroke="var(--bg-card, #130a24)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          {/* X Axis */}
          <div style={{ position: 'absolute', left: '55px', right: '10px', bottom: 0, display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', paddingTop: '8px' }}>
            <span style={{ transform: 'translateX(-50%)' }}>Q1</span>
            <span style={{ transform: 'translateX(-50%)' }}>Q2</span>
            <span style={{ transform: 'translateX(-50%)' }}>Q3</span>
            <span style={{ transform: 'translateX(50%)' }}>Q4</span>
          </div>
        </div>
        {/* Legend */}
        <div style={{ display: 'flex', justifySelf: 'flex-end', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#A855F7' }}>
            <div style={{ width: '8px', height: '2px', background: '#A855F7', position: 'relative' }}><div style={{ position:'absolute', top:'-2px', left:'2px', width:'4px', height:'4px', background:'#A855F7', borderRadius:'50%' }}></div></div> Pendapatan
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#F59E0B' }}>
            <div style={{ width: '8px', height: '2px', background: '#F59E0B', position: 'relative' }}><div style={{ position:'absolute', top:'-2px', left:'2px', width:'4px', height:'4px', background:'#F59E0B', borderRadius:'50%' }}></div></div> Biaya
          </div>
        </div>
      </div>

      {/* Bottom Mini Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', textTransform: 'uppercase', letterSpacing: '1px' }}>Rute Terbaik</span>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Tanjung Priok → Belawan</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '94%', height: '100%', background: '#22C55E' }}></div>
            </div>
            <span style={{ fontSize: '10px', color: '#22C55E' }}>94%</span>
          </div>
        </div>

        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', textTransform: 'uppercase', letterSpacing: '1px' }}>Waktu Pelayaran Rata-Rata</span>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>12.4 Hari</div>
          <div style={{ fontSize: '10px', color: '#22C55E' }}>↘ -8% dari bulan lalu</div>
        </div>

        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', textTransform: 'uppercase', letterSpacing: '1px' }}>Pemanfaatan Armada</span>
          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>87.5%</div>
          <div style={{ fontSize: '10px', color: '#22C55E' }}>↗ +3% dari bulan lalu</div>
        </div>
      </div>

    </div>
  );
}