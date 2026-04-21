"use client";
import React, { useState, useEffect } from 'react';

export default function MapPage() {
  const [ships, setShips] = useState([
    { id: 1, name: 'KM NUSANTARA', cx: 50, cy: 50, status: 'Di Pelabuhan', color: '#3B82F6' },
    { id: 2, name: 'KM BIMA SAKTI', cx: 54, cy: 48, status: 'Dalam Perjalanan', color: '#22C55E' },
    { id: 3, name: 'KM SRIWIJAYA', cx: 65, cy: 60, status: 'Terlambat', color: '#F59E0B' },
    { id: 4, name: 'KM KARTINI', cx: 77, cy: 58, status: 'Dalam Perjalanan', color: '#22C55E' },
    { id: 5, name: 'KM MAJAPAHIT', cx: 80, cy: 61, status: 'Dalam Perjalanan', color: '#22C55E' },
    { id: 6, name: 'KM DEWARUCI', cx: 86, cy: 75, status: 'Dalam Perjalanan', color: '#22C55E' }
  ]);

  // Polling per 60 seconds to move ships
  useEffect(() => {
    const interval = setInterval(() => {
      setShips(prevShips => prevShips.map(ship => {
        if (ship.status !== 'Dalam Perjalanan') return ship;
        // Randomly adjust cx and cy slightly
        const moveX = (Math.random() - 0.5) * 2;
        const moveY = (Math.random() - 0.5) * 2;
        return {
          ...ship,
          cx: Math.max(10, Math.min(90, ship.cx + moveX)),
          cy: Math.max(10, Math.min(90, ship.cy + moveY))
        };
      }));
    }, 60000); // 60 seconds polling as requested
    
    return () => clearInterval(interval);
  }, []);

  const handleShipClick = (shipId) => {
    // Manual status update
    setShips(prevShips => prevShips.map(ship => {
      if (ship.id === shipId) {
        // Toggle status as an example of manual override
        const nextStatus = ship.status === 'Dalam Perjalanan' ? 'Di Pelabuhan' : 'Dalam Perjalanan';
        const nextColor = nextStatus === 'Dalam Perjalanan' ? '#22C55E' : '#3B82F6';
        console.log(`Manual Status Update: ${ship.name} is now [${nextStatus}]. Antigravity AI notification triggered.`);
        return { ...ship, status: nextStatus, color: nextColor };
      }
      return ship;
    }));
  };

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
          
          {/* Live Tracking Label */}
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
            
            {/* Render Dynamic Ships */}
            {ships.map(ship => (
              <g 
                key={ship.id} 
                className="ship-node"
                style={{ cursor: 'pointer', transition: 'all 0.5s ease-in-out' }} 
                onClick={() => handleShipClick(ship.id)}
              >
                <circle cx={`${ship.cx}%`} cy={`${ship.cy}%`} r="6" fill="transparent" /> {/* Hitbox */}
                <circle cx={`${ship.cx}%`} cy={`${ship.cy}%`} r="4" fill={ship.color} />
                <circle cx={`${ship.cx}%`} cy={`${ship.cy}%`} r={ship.status === 'Dalam Perjalanan' ? '12' : '15'} fill={ship.color} opacity={ship.status === 'Dalam Perjalanan' ? '0.2' : '0.1'} stroke={ship.status !== 'Dalam Perjalanan' ? ship.color : 'none'} strokeWidth="1" />
                <text x={`${ship.cx + 2}%`} y={`${ship.cy - 1}%`} fill="white" fontSize="10px" fontWeight="bold" style={{ pointerEvents: 'none' }}>
                  {ship.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
