"use client";
import React, { Suspense } from 'react';
import { useDashboard } from '@/context/DashboardContext';
import { useSearchParams } from 'next/navigation';

function DashboardContent() {
  const { role, cuaca, updateCuaca } = useDashboard();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'semua';

  // Data Dummy Kapal untuk Visualisasi Peta
  const ships = [
    { id: 1, x: 200, y: 150, status: 'berlayar', name: 'KM NUSANTARA' },
    { id: 2, x: 500, y: 100, status: 'sandar', name: 'KM BIMA SAKTI' },
    { id: 3, x: 350, y: 300, status: 'berlayar', name: 'KM KARTINI' },
    { id: 4, x: 700, y: 250, status: 'sandar', name: 'KM DEWARUCI' },
  ];

  const filteredShips = ships.filter(ship => filter === 'semua' || ship.status === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* 1. Hero Section: Peta Interaktif Gede (Requirement Dashboard Minimalis) */}
      <div style={{ width: '100%', height: '500px', background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '12px', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 10 }}>
          <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>Peta Pemantauan Global</div>
          <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: '500', textTransform: 'uppercase' }}>
            {filter === 'semua' ? 'SELURUH ARMADA' : filter === 'berlayar' ? 'SEDANG BERLAYAR' : 'DI PELABUHAN'}
          </div>
        </div>
        
        {/* Visual Radar Background */}
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Mapping Kapal dari Database/Dummy */}
          {filteredShips.map(ship => (
            <g key={ship.id} transform={`translate(${ship.x}, ${ship.y})`}>
              <circle cx="0" cy="0" r="6" fill={ship.status === 'berlayar' ? '#22C55E' : '#3B82F6'} />
              <circle cx="0" cy="0" r="14" fill="none" stroke={ship.status === 'berlayar' ? '#22C55E' : '#3B82F6'} strokeWidth="2" opacity="0.4">
                <animate attributeName="r" values="14; 24; 14" dur="3s" repeatCount="indefinite" />
              </circle>
              <text x="14" y="4" fill="white" fontSize="11px" fontWeight="600">{ship.name}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* 2. Top Stats: 3 Angka Utama (Sesuai Request: Total, Berlayar, Sandar) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={{ background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px' }}>
          <span style={{ fontSize: '12px', color: '#8B7BA8' }}>Total Kapal</span>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>8</div>
        </div>
        <div style={{ background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px' }}>
          <span style={{ fontSize: '12px', color: '#8B7BA8' }}>Sedang Berlayar</span>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#22C55E' }}>4</div>
        </div>
        <div style={{ background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px' }}>
          <span style={{ fontSize: '12px', color: '#8B7BA8' }}>Di Pelabuhan</span>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3B82F6' }}>2</div>
        </div>
      </div>

      {/* 3. Summary Section Wrapper */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        
        {/* Narrative Summary (Left) */}
        <div style={{ flex: '1 1 400px', background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '16px', padding: '32px' }}>
          <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '16px' }}>Ringkasan Pemantauan Radar</h3>
          <p style={{ color: '#8B7BA8', fontSize: '14px', lineHeight: '1.8' }}>
            Sistem KOMANDO SIWeb mendeteksi pergerakan arus logistik maritim secara stabil. Distribusi armada difokuskan pada pengiriman menuju pelabuhan-pelabuhan strategis utama. 
            <span style={{ color: '#C084FC' }}> Cuaca terpantau kondusif</span>, memastikan kelancaran navigasi. [cite: 1374]
          </p>
        </div>

        {/* Kendali Navigasi Pusat (Right - POV Logic) */}
        <div style={{ flex: '1 1 250px', background: 'rgba(20, 10, 36, 0.8)', border: '1px solid rgba(168, 85, 247, 0.1)', borderRadius: '16px', padding: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            {role === 'Admin' ? (
              <>
                <h4 style={{ color: 'white', marginBottom: '8px' }}>KENDALI NAVIGASI PUSAT</h4>
                <p style={{ color: '#8B7BA8', fontSize: '12px', marginBottom: '16px' }}>Khusus Admin: Update status cuaca global.</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  <button onClick={() => updateCuaca('Badai')} style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #EF4444', color: 'white', padding: '8px', cursor: 'pointer' }}>Badai</button>
                  <button onClick={() => updateCuaca('Terik')} style={{ background: 'rgba(245, 158, 11, 0.2)', border: '1px solid #F59E0B', color: 'white', padding: '8px', cursor: 'pointer' }}>Terik</button>
                  <button onClick={() => updateCuaca('Normal')} style={{ background: 'rgba(34, 197, 94, 0.2)', border: '1px solid #22C55E', color: 'white', padding: '8px', cursor: 'pointer' }}>Normal</button>
                </div>
              </>
            ) : (
              <>
                <h4 style={{ color: 'white', marginBottom: '8px' }}>STATUS LINGKUNGAN</h4>
                <p style={{ color: '#8B7BA8' }}>Status Saat Ini: <strong style={{ color: '#C084FC' }}>[{cuaca}]</strong></p>
              </>
            )}
          </div>
        </div>

      </div> {/* End Summary Wrapper */}
    </div> 
  );
}

export default function RingkasanDashboard() {
  return (
    <Suspense fallback={<div style={{ color: 'white' }}>Memuat data radar...</div>}>
      <DashboardContent />
    </Suspense>
  );
}