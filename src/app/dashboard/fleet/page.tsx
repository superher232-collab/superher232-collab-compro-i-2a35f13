"use client";
import React from 'react';
import { useDashboard } from '@/context/DashboardContext';

export default function FleetPage() {
  const { role, armada } = useDashboard();
  // Gunakan data armada dari API (via Context), fallback ke empty array jika null
  const ships = armada && armada.length > 0 ? armada : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'monospace' }}>
      
      {/* Top Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Total Kapal</span>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#A855F7' }}>8</div>
        </div>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Dalam Perjalanan</span>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22C55E' }}>4</div>
        </div>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Di Pelabuhan</span>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3B82F6' }}>2</div>
        </div>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Terlambat</span>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#F59E0B' }}>1</div>
        </div>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Pemeliharaan</span>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#EF4444' }}>1</div>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted, #8B7BA8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Cari kapal..." 
            style={{ width: '100%', background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '10px 10px 10px 36px', color: 'white', fontSize: '12px', outline: 'none' }} 
          />
        </div>
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted, #8B7BA8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </div>
        {role === 'Admin' && (
          <button onClick={() => alert('Simulasi: Fitur Tambah Armada backend belum terhubung.')} style={{ background: '#A855F7', color: 'white', padding: '10px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 'bold', transition: '0.2s' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Tambah Armada
          </button>
        )}
      </div>

      {/* Fleet Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {ships.map((ship, index) => (
          <div key={index} style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            
            {/* Top Glow (Optional, based on status) */}
            {ship.status === 'DALAM PERJALANAN' && (
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '2px', background: ship.statusColor, boxShadow: '0 0 20px 5px ' + ship.statusColor }}></div>
            )}

            {/* Header: Icon, Name, Type, Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{ship.name}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>{ship.type}</span>
                </div>
              </div>
              <div style={{ border: '1px solid ' + ship.statusColor, borderRadius: '4px', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(' + (ship.status === 'DALAM PERJALANAN' ? '34, 197, 94' : ship.status === 'DI PELABUHAN' ? '59, 130, 246' : ship.status === 'TERLAMBAT' ? '245, 158, 11' : '239, 68, 68') + ', 0.1)' }}>
                {ship.status === 'DALAM PERJALANAN' && <div style={{ width: '6px', height: '6px', background: ship.statusColor, borderRadius: '50%' }}></div>}
                {ship.status === 'DI PELABUHAN' && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={ship.statusColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>}
                {ship.status === 'TERLAMBAT' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={ship.statusColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                {ship.status === 'PEMELIHARAAN' && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={ship.statusColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>}
                <span style={{ fontSize: '9px', fontWeight: 'bold', color: ship.statusColor }}>{ship.status}</span>
              </div>
              
              {role === 'Admin' && (
                <button aria-label="Hapus Kapal" style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              )}
            </div>

            {/* Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', rowGap: '12px', fontSize: '11px', marginBottom: '24px' }}>
              <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Lokasi</span>
              <span style={{ textAlign: 'right' }}>{ship.location}</span>
              
              <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Tujuan</span>
              <span style={{ textAlign: 'right' }}>{ship.destination}</span>
              
              <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Perkiraan Tiba</span>
              <span style={{ textAlign: 'right' }}>{ship.eta}</span>
              
              <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Muatan</span>
              <span style={{ textAlign: 'right' }}>{ship.cargo}</span>
            </div>

            {/* Footer */}
            <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              Pembaruan terakhir: {ship.update}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}