// src/app/dashboard/map/page.tsx
import React from 'react';

export default function MapPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'monospace' }}>
      
      {/* Sub Navigation */}
      <div style={{ display: 'flex', gap: '40px', padding: '0 0 24px 0', borderBottom: '1px solid rgba(168, 85, 247, 0.2)', marginBottom: '24px' }}>
        <div style={{ color: '#A855F7', fontWeight: 'bold', cursor: 'pointer' }}>Kinerja dan wawasan</div>
        <div style={{ color: 'var(--text-muted, #8B7BA8)', cursor: 'pointer' }}>Konsumsi Bahan Bakar</div>
        <div style={{ color: 'var(--text-muted, #8B7BA8)', cursor: 'pointer' }}>Efisiensi</div>
        <div style={{ color: 'var(--text-muted, #8B7BA8)', cursor: 'pointer' }}>Laporan</div>
        <div style={{ color: 'var(--text-muted, #8B7BA8)', cursor: 'pointer' }}>Tren</div>
      </div>

      {/* Main Map Container */}
      <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>PELACAKAN ARMADA GLOBAL</div>
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ background: '#A855F7', color: 'white', padding: '6px 16px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>TAMPILAN GLOBAL</div>
            <div style={{ color: 'var(--text-muted, #8B7BA8)', padding: '6px 16px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>REGIONAL</div>
          </div>
        </div>

        {/* Map Area */}
        <div style={{ background: '#0a0510', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', height: '500px', position: 'relative', overflow: 'hidden' }}>
          
          {/* Live Tracking Button */}
          <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(20, 10, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
            <div style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 8px #22C55E' }}></div>
            <span style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', fontWeight: 'bold', letterSpacing: '0.5px' }}>PELACAKAN LANGSUNG</span>
          </div>

          {/* Legend */}
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(20, 10, 36, 0.8)', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '16px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 10 }}>
            <div style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--text-muted, #8B7BA8)', letterSpacing: '1px' }}>LEGENDA</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 8px #22C55E' }}></div>
              <span style={{ fontSize: '11px', color: 'white' }}>Dalam Perjalanan</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', background: '#3B82F6', borderRadius: '50%', boxShadow: '0 0 8px #3B82F6' }}></div>
              <span style={{ fontSize: '11px', color: 'white' }}>Di Pelabuhan</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', background: '#F59E0B', borderRadius: '50%', boxShadow: '0 0 8px #F59E0B' }}></div>
              <span style={{ fontSize: '11px', color: 'white' }}>Terlambat</span>
            </div>
          </div>

          {/* Map Dots & Trails (SVG) */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {/* Trail 1 */}
            <line x1="30%" y1="65%" x2="55%" y2="58%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Trail 2 */}
            <line x1="25%" y1="75%" x2="65%" y2="60%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Dots */}
            {/* Blue dot */}
            <circle cx="50%" cy="50%" r="5" fill="none" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="50%" cy="50%" r="15" fill="rgba(59, 130, 246, 0.2)" />
            
            {/* Green dot 1 */}
            <circle cx="54%" cy="48%" r="4" fill="#22C55E" />
            <circle cx="54%" cy="48%" r="12" fill="rgba(34, 197, 94, 0.2)" />
            
            {/* Orange dot */}
            <circle cx="65%" cy="60%" r="4" fill="#F59E0B" />
            <circle cx="65%" cy="60%" r="6" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
            <circle cx="65%" cy="60%" r="15" fill="rgba(245, 158, 11, 0.15)" />

            {/* Green dot 2 */}
            <circle cx="77%" cy="58%" r="4" fill="#22C55E" />
            <circle cx="77%" cy="58%" r="12" fill="rgba(34, 197, 94, 0.2)" />

            {/* Green dot 3 */}
            <circle cx="80%" cy="61%" r="4" fill="#22C55E" />
            <circle cx="80%" cy="61%" r="12" fill="rgba(34, 197, 94, 0.2)" />

            {/* Green dot 4 */}
            <circle cx="86%" cy="75%" r="4" fill="#22C55E" />
            <circle cx="86%" cy="75%" r="12" fill="rgba(34, 197, 94, 0.2)" />
          </svg>

        </div>
      </div>
    </div>
  );
}
