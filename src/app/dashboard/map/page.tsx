"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useDashboard } from '@/context/DashboardContext';

export default function MapPage() {
  const { armada } = useDashboard();
  
  // State untuk menyimpan posisi dinamis kapal yang dirender ke layar
  const [positions, setPositions] = useState([]);
  // Ref untuk menyimpan data gerak tanpa memicu re-render berlebihan (biar nggak ngelag)
  const shipsRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    if (!armada || armada.length === 0) return;

    // 1. Inisialisasi posisi awal dan "mesin" (kecepatan)
    shipsRef.current = armada.map((s, index) => {
      const isMoving = s.status?.toLowerCase().includes('perjalanan');
      return {
        ...s,
        // Kita pakai persentase (0-100) biar responsif di berbagai layar
        x: s.cx || (15 + (index * 20) % 70), 
        y: s.cy || (20 + (index * 25) % 60), 
        // Kasih kecepatan random kecil (vx, vy) KHUSUS buat yang lagi berlayar
        vx: isMoving ? (Math.random() * 0.04 - 0.02) : 0, 
        vy: isMoving ? (Math.random() * 0.04 - 0.02) : 0,
        statusText: s.status,
        statusColor: isMoving ? '#22C55E' : 
                     (s.status?.toLowerCase().includes('pelabuhan') ? '#3B82F6' : '#EF4444')
      };
    });

    setPositions(shipsRef.current);

    // 2. Bikin fungsi loop animasi gerak
    const tick = () => {
      shipsRef.current = shipsRef.current.map(ship => {
        // Kalo lagi sandar atau rusak, diem di tempat
        if (ship.vx === 0 && ship.vy === 0) return ship;

        let nx = ship.x + ship.vx;
        let ny = ship.y + ship.vy;
        let nvx = ship.vx;
        let nvy = ship.vy;

        // Bouncing effect: Biar kapal nggak tembus keluar batas SVG (0% - 100%)
        if (nx < 5 || nx > 95) nvx = -nvx;
        if (ny < 5 || ny > 95) nvy = -nvy;

        return { ...ship, x: nx, y: ny, vx: nvx, vy: nvy };
      });

      // Update state buat geser posisi UI
      setPositions([...shipsRef.current]);
      
      // Panggil diri sendiri buat frame berikutnya
      animRef.current = requestAnimationFrame(tick);
    };

    // Jalankan mesin animasi
    animRef.current = requestAnimationFrame(tick);

    // Bersihkan memori (cleanup) kalau user pindah tab
    return () => cancelAnimationFrame(animRef.current);
  }, [armada]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'monospace' }}>
      
      {/* Main Map Container */}
      <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>PELACAKAN ARMADA GLOBAL</div>
        </div>

        {/* Map Area */}
        <div style={{ background: '#0a0510', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', height: '500px', position: 'relative', overflow: 'hidden' }}>
          
          {/* Live Tracking Label (Animasi kedip) */}
          <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(20, 10, 36, 0.8)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
            <div style={{ width: '6px', height: '6px', background: '#22C55E', borderRadius: '50%', boxShadow: '0 0 8px #22C55E', animation: 'pulse 1.5s infinite' }}></div>
            <span style={{ fontSize: '10px', color: '#22C55E', fontWeight: 'bold', letterSpacing: '0.5px' }}>LIVE TRACKING</span>
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
              <div style={{ width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', boxShadow: '0 0 8px #EF4444' }}></div>
              <span style={{ fontSize: '11px', color: 'white' }}>Pemeliharaan Fisik</span>
            </div>
          </div>

          {/* Map Dots & Trails (SVG) */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Visual Rute Palsu Biar Rame */}
            <line x1="20%" y1="70%" x2="60%" y2="40%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="40%" y1="20%" x2="70%" y2="60%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Render Dynamic Ships */}
            {positions.map((ship, index) => (
              <g 
                key={ship.id || index} 
                className="ship-node"
                // Jangan pakai CSS transition di sini karena kita udah pakai requestAnimationFrame
              >
                {/* Efek Ping / Radar untuk kapal yang berlayar */}
                {ship.vx !== 0 && (
                  <circle cx={`${ship.x}%`} cy={`${ship.y}%`} r="12" fill="none" stroke={ship.statusColor} strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" values="6; 25; 6" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6; 0; 0.6" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Titik Kapal */}
                <circle cx={`${ship.x}%`} cy={`${ship.y}%`} r="5" fill={ship.statusColor} />
                
                {/* Halo Pendaran Warna */}
                <circle cx={`${ship.x}%`} cy={`${ship.y}%`} r="10" fill={ship.statusColor} opacity="0.15" />
                
                {/* Teks Nama Kapal */}
                <text x={`${ship.x + 1.5}%`} y={`${ship.y - 1.5}%`} fill="rgba(255,255,255,0.9)" fontSize="10px" fontWeight="bold" style={{ pointerEvents: 'none', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                  {ship.name}
                </text>
                
                {/* Teks Status (hanya muncul di bawah kapal biar informatif) */}
                <text x={`${ship.x + 1.5}%`} y={`${ship.y + 2.5}%`} fill={ship.statusColor} fontSize="8px" style={{ pointerEvents: 'none' }}>
                  {ship.vx !== 0 ? '▶ Bergerak' : '⚓ Berlabuh'}
                </text>
              </g>
            ))}
          </svg>

        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}