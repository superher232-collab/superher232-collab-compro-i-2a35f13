"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function DashboardContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'semua'; // 'semua', 'berlayar', 'sandar'

  // Dummy ships positions
  const ships = [
    { id: 1, x: 200, y: 150, status: 'berlayar', name: 'KM NUSANTARA' },
    { id: 2, x: 500, y: 100, status: 'sandar', name: 'KM BIMA SAKTI' },
    { id: 3, x: 350, y: 300, status: 'berlayar', name: 'KM KARTINI' },
    { id: 4, x: 700, y: 250, status: 'sandar', name: 'KM DEWARUCI' },
  ];

  const filteredShips = ships.filter(ship => filter === 'semua' || ship.status === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
        {/* Hero Section Map */}
      <div style={{ width: '100%', height: '500px', background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '12px', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 10 }}>
          <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>Peta Pemantauan Global</div>
          <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '2px' }}>{filter === 'semua' ? 'SELURUH ARMADA' : filter === 'berlayar' ? 'SEDANG BERLAYAR' : 'DI PELABUHAN'}</div>
        </div>
        
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, transparent 0%, rgba(20, 10, 36, 0.8) 100%)', zIndex: 1, pointerEvents: 'none' }}></div>
        
        {/* Simple map background visualization */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="1"/>
            <circle cx="60" cy="60" r="1" fill="rgba(168, 85, 247, 0.2)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Compass / Radar aesthetic */}
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="350" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="1" />
          
          {/* Render ships */}
          {filteredShips.map(ship => (
            <g key={ship.id} transform={`translate(${ship.x}, ${ship.y})`} style={{ zIndex: 5 }}>
              <circle cx="0" cy="0" r="6" fill={ship.status === 'berlayar' ? '#22C55E' : '#3B82F6'} />
              <circle cx="0" cy="0" r="14" fill="none" stroke={ship.status === 'berlayar' ? '#22C55E' : '#3B82F6'} strokeWidth="2" opacity="0.4">
                <animate attributeName="r" values="14; 24; 14" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4; 0; 0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              <text x="14" y="4" fill="rgba(255,255,255,0.9)" fontSize="11px" fontWeight="600" letterSpacing="0.5px" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{ship.name}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Top 4 Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted, #8B7BA8)', letterSpacing: '0.5px' }}>Total Kapal</span>
            <div style={{ background: 'rgba(192, 132, 252, 0.1)', padding: '6px', borderRadius: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
            </div>
          </div>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>8</span>
        </div>

        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted, #8B7BA8)', letterSpacing: '0.5px' }}>Dalam Perjalanan</span>
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '6px', borderRadius: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </div>
          </div>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>4</span>
        </div>

        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted, #8B7BA8)', letterSpacing: '0.5px' }}>Di Pelabuhan</span>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '6px', borderRadius: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
          </div>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>2</span>
        </div>

        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted, #8B7BA8)', letterSpacing: '0.5px' }}>Peringatan Aktif</span>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '6px', borderRadius: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
          </div>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>1</span>
        </div>
      </div>

      {/* Modern Minimalist Summary Section instead of Trading Charts/Tables */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '8px' }}>
        
        {/* Narrative Summary */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
            {/* Soft ambient background glow */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(168, 85, 247, 0.1)', filter: 'blur(40px)', borderRadius: '50%' }}></div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: 'linear-gradient(135deg, #A855F7 0%, #C084FC 100%)', borderRadius: '10px', width: '4px', height: '24px' }}></div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: 'white', letterSpacing: '0.5px' }}>Ringkasan Pemantauan Radar</h3>
              </div>
              
              <p style={{ color: 'var(--text-muted, #8B7BA8)', fontSize: '14px', lineHeight: '1.8', margin: '0 0 20px 0', fontWeight: '300' }}>
                Sistem KOMANDO SIWeb mendeteksi pergerakan arus logistik maritim secara stabil. Distribusi armada difokuskan pada pengiriman menuju pelabuhan-pelabuhan strategis utama. 
                <span style={{ color: '#C084FC', fontWeight: '500' }}> Cuaca di sekitar perairan utara terpantau kondusif</span>, memastikan kelancaran navigasi bagi kapal-kapal yang sedang berada dalam perjalanan panjang.
              </p>
              
              <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)', textTransform: 'uppercase', letterSpacing: '1px' }}>Konektivitas Satelit</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 10px #22C55E' }}></div>
                    <span style={{ color: 'white', fontSize: '13px', fontWeight: '500' }}>Lancar Terhubung</span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)', textTransform: 'uppercase', letterSpacing: '1px' }}>Pembaruan Terakhir</span>
                  <span style={{ color: 'white', fontSize: '13px', fontWeight: '500' }}>Sinkronisasi Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Component */}
        <div style={{ flex: '1 1 250px', background: 'linear-gradient(180deg, rgba(20, 10, 36, 0.8) 0%, rgba(20, 10, 36, 0.4) 100%)', border: '1px solid rgba(168, 85, 247, 0.1)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h4 style={{ margin: 0, color: 'white', fontSize: '16px', fontWeight: '600' }}>Tidak Ditemukan Kendala Navigasi</h4>
              <p style={{ margin: 0, color: 'var(--text-muted, #8B7BA8)', fontSize: '12px', lineHeight: '1.6' }}>
                Intelijen Logistik Antigravity secara terus menerus memantau pergerakan ombak, anomali laut, dan jalur lintasan kapal.
              </p>
            </div>
            
            <div style={{ marginTop: '12px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '8px 16px', borderRadius: '20px', fontSize: '11px', color: '#C084FC', fontWeight: '600', letterSpacing: '0.5px' }}>
              SISTEM NORMAL
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function RingkasanDashboard() {
  return (
    <React.Suspense fallback={<div style={{ color: 'white' }}>Loading map data...</div>}>
      <DashboardContent />
    </React.Suspense>
  );
}
