"use client";
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useDashboard } from '@/context/DashboardContext';
import { useSearchParams } from 'next/navigation';

function DashboardContent() {
  const { role, cuaca, updateCuaca, armada } = useDashboard();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'semua';

  // State posisi kapal — diinisialisasi dari armada
  const [positions, setPositions] = useState([]);
  const animRef = useRef(null);

  // Inisialisasi posisi awal + arah gerak tiap kapal
  const shipsRef = useRef([]);

  useEffect(() => {
    if (armada.length === 0) return;

    // Set posisi awal acak tapi rapi
    shipsRef.current = armada.map((ship, i) => ({
      id:     ship.id,
      name:   ship.name,
      status: ship.status?.toLowerCase().includes('perjalanan') ? 'berlayar' : 'sandar',
      x:      120 + (i % 5) * 170,
      y:      80  + Math.floor(i / 5) * 180,
      // Kecepatan dan arah gerak (hanya kapal berlayar yang gerak)
      vx: ship.status?.toLowerCase().includes('perjalanan') ? (Math.random() * 0.6 - 0.3) : 0,
      vy: ship.status?.toLowerCase().includes('perjalanan') ? (Math.random() * 0.4 - 0.2) : 0,
    }));

    setPositions(shipsRef.current.map(s => ({ id: s.id, x: s.x, y: s.y, name: s.name, status: s.status })));

    // Animasi loop
    const MAP_W = 900;
    const MAP_H = 460;

    const tick = () => {
      shipsRef.current = shipsRef.current.map(ship => {
        if (ship.status !== 'berlayar') return ship;

        let nx = ship.x + ship.vx;
        let ny = ship.y + ship.vy;
        let nvx = ship.vx;
        let nvy = ship.vy;

        // Bouncing di tepi peta
        if (nx < 30 || nx > MAP_W - 30) nvx = -nvx;
        if (ny < 30 || ny > MAP_H - 30) nvy = -nvy;

        return { ...ship, x: nx, y: ny, vx: nvx, vy: nvy };
      });

      setPositions(shipsRef.current.map(s => ({ id: s.id, x: s.x, y: s.y, name: s.name, status: s.status })));
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [armada]);

  const filteredPositions = positions.filter(s => filter === 'semua' || s.status === filter);

  // Stats
  const total     = armada.length;
  const berlayar  = armada.filter(s => s.status?.toLowerCase().includes('perjalanan')).length;
  const pelabuhan = armada.filter(s => s.status?.toLowerCase().includes('pelabuhan')).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Hero: Peta Live */}
      <div style={{ width: '100%', height: '500px', background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '12px', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
        <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 10 }}>
          <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>Peta Pemantauan Global</div>
          <div style={{ color: '#A855F7', fontSize: '12px', textTransform: 'uppercase' }}>
            {filter === 'semua' ? 'SELURUH ARMADA' : filter === 'berlayar' ? 'SEDANG BERLAYAR' : 'DI PELABUHAN'}
          </div>
        </div>

        {/* Live indicator */}
        <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 'bold', letterSpacing: '1px' }}>LIVE</span>
        </div>

        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="350" fill="none" stroke="rgba(168, 85, 247, 0.04)" strokeWidth="1" />

          {filteredPositions.map(ship => (
            <g key={ship.id} transform={`translate(${ship.x}, ${ship.y})`}>
              {/* Trail effect untuk kapal berlayar */}
              {ship.status === 'berlayar' && (
                <circle cx="0" cy="0" r="20" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.15" />
              )}

              {/* Titik kapal */}
              <circle
                cx="0" cy="0" r="6"
                fill={ship.status === 'berlayar' ? '#22C55E' : '#3B82F6'}
              />

              {/* Ping animasi */}
              <circle cx="0" cy="0" r="6" fill="none"
                stroke={ship.status === 'berlayar' ? '#22C55E' : '#3B82F6'}
                strokeWidth="2" opacity="0.6"
              >
                <animate attributeName="r" values="6; 20; 6" dur={ship.status === 'berlayar' ? '2s' : '4s'} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6; 0; 0.6" dur={ship.status === 'berlayar' ? '2s' : '4s'} repeatCount="indefinite" />
              </circle>

              {/* Label nama */}
              <text x="12" y="-8" fill="rgba(255,255,255,0.85)" fontSize="10px" fontWeight="600">{ship.name}</text>

              {/* Status dot */}
              <text x="12" y="4" fill={ship.status === 'berlayar' ? '#22C55E' : '#3B82F6'} fontSize="8px">
                {ship.status === 'berlayar' ? '▶ berlayar' : '⚓ sandar'}
              </text>
            </g>
          ))}
        </svg>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
        `}</style>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {[
          { label: 'Total Kapal',     value: total,     color: '#fff'    },
          { label: 'Sedang Berlayar', value: berlayar,  color: '#22C55E' },
          { label: 'Di Pelabuhan',    value: pelabuhan, color: '#3B82F6' },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '12px', padding: '20px' }}>
            <span style={{ fontSize: '12px', color: '#8B7BA8' }}>{label}</span>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Summary + Kendali */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ flex: '1 1 400px', background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.15)', borderRadius: '16px', padding: '32px' }}>
          <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '16px' }}>Ringkasan Pemantauan Radar</h3>
          <p style={{ color: '#8B7BA8', fontSize: '14px', lineHeight: '1.8' }}>
            Sistem KOMANDO SIWeb mendeteksi pergerakan arus logistik maritim secara stabil. Distribusi armada difokuskan pada pengiriman menuju pelabuhan-pelabuhan strategis utama.
            <span style={{ color: '#C084FC' }}> Cuaca saat ini: {cuaca}.</span>
          </p>
        </div>

        <div style={{ flex: '1 1 250px', background: 'rgba(20, 10, 36, 0.8)', border: '1px solid rgba(168, 85, 247, 0.1)', borderRadius: '16px', padding: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            {role === 'Admin' ? (
              <>
                <h4 style={{ color: 'white', marginBottom: '8px' }}>KENDALI NAVIGASI PUSAT</h4>
                <p style={{ color: '#8B7BA8', fontSize: '12px', marginBottom: '16px' }}>Khusus Admin: Update status cuaca global.</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {(['Badai Ekstrem', 'Terik Gersang', 'Normal'] as const).map(c => (
                    <button key={c} onClick={() => updateCuaca(c)} style={{
                      background: cuaca === c
                        ? c === 'Badai Ekstrem' ? '#EF4444' : c === 'Terik Gersang' ? '#F59E0B' : '#22C55E'
                        : c === 'Badai Ekstrem' ? 'rgba(239,68,68,0.2)' : c === 'Terik Gersang' ? 'rgba(245,158,11,0.2)' : 'rgba(34,197,94,0.2)',
                      border: `1px solid ${c === 'Badai Ekstrem' ? '#EF4444' : c === 'Terik Gersang' ? '#F59E0B' : '#22C55E'}`,
                      color: 'white', padding: '8px 12px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer'
                    }}>{c}</button>
                  ))}
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
      </div>

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