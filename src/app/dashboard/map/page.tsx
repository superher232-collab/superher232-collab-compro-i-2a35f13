"use client";
import React, { useState, useEffect } from 'react';
import { useDashboard } from '@/context/DashboardContext';

export default function MapPage() {
  const { armada } = useDashboard();
  
  // Karena struktur database kadang memakai lat/lng dan UI SVG memakai cx/cy,
  // kita petakan armada untuk punya nilai cx dan cy yang valid sebagai fallback layar.
  const shipsMap = armada.map((s, index) => ({
    ...s,
    cx: s.cx || (20 + (index * 15) % 70), // fallback visual
    cy: s.cy || (30 + (index * 20) % 60), 
    statusText: s.status,
    statusColor: s.status === 'Dalam Perjalanan' || s.status === 'DALAM PERJALANAN' ? '#22C55E' : 
                 (s.status === 'Di Pelabuhan' || s.status === 'DI PELABUHAN' ? '#3B82F6' : '#EF4444')
  }));

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
              <div style={{ width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', boxShadow: '0 0 8px #EF4444' }}></div>
              <span style={{ fontSize: '11px', color: 'white' }}>Pemeliharaan Fisik</span>
            </div>
          </div>

          {/* Map Dots & Trails (SVG) */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {/* Trail 1 */}
            <line x1="30%" y1="65%" x2="55%" y2="58%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Trail 2 */}
            <line x1="25%" y1="75%" x2="65%" y2="60%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Render Dynamic Ships */}
            {shipsMap.map((ship, index) => (
              <g 
                key={ship.id || index} 
                className="ship-node"
                style={{ transition: 'all 0.5s ease-in-out' }} 
              >
                <circle cx={`${ship.cx}%`} cy={`${ship.cy}%`} r="6" fill="transparent" /> {/* Hitbox */}
                <circle cx={`${ship.cx}%`} cy={`${ship.cy}%`} r="4" fill={ship.statusColor} />
                <circle cx={`${ship.cx}%`} cy={`${ship.cy}%`} r={ship.statusText?.includes('Perjalanan') ? '12' : '15'} fill={ship.statusColor} opacity={ship.statusText?.includes('Perjalanan') ? '0.2' : '0.1'} stroke={ship.statusText?.includes('Perjalanan') ? 'none' : ship.statusColor} strokeWidth="1" />
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
