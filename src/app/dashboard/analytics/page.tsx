"use client";
import React from 'react';
import { useDashboard } from '@/context/DashboardContext';

export default function AnalyticsPage() {
  const { armada } = useDashboard();
  
  // Perhitungan Akurat
  const total = armada.length;
  const berlayar = armada.filter(s => s.status.toLowerCase().includes('perjalanan') || s.status.toLowerCase().includes('berlayar')).length;
  const sandar = armada.filter(s => s.status.toLowerCase().includes('pelabuhan') || s.status.toLowerCase().includes('sandar')).length;
  const maintenance = total - berlayar - sandar; // Sisanya (Keterlambatan/Pemeliharaan)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'monospace' }}>
      
      {/* Top Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        
        {/* Card 1 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Total Armada Aktif</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22C55E' }}>{total} Kapal</div>
        </div>

        {/* Card 2 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Sedang Berlayar</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#C7B8EA' }}>{berlayar} Kapal</div>
        </div>

        {/* Card 3 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Di Pelabuhan</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3B82F6' }}>{sandar} Kapal</div>
        </div>

        {/* Card 4 */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Pemeliharaan Fisik</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#EAB308' }}>{maintenance} Kapal</div>
        </div>
      </div>

      {/* Middle Map/Graph */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        
        {/* Distribusi Rute Chart */}
        <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', height: '300px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '16px' }}>DISTRIBUSI ARMADA PER PELABUHAN UTAMA</div>
          <div style={{ flex: 1, position: 'relative' }}>
            {/* Y Axis labels */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', textAlign: 'right', width: '25px' }}>
              <span>20</span>
              <span>15</span>
              <span>10</span>
              <span>5</span>
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
                { h: 70, color: '#A855F7' },
                { h: 40, color: '#A855F7' },
                { h: 60, color: '#A855F7' },
                { h: 30, color: '#A855F7' },
                { h: 80, color: '#A855F7' },
              ].map((data, i) => (
                <div key={i} style={{ display: 'flex', gap: '2px', height: '100%', alignItems: 'flex-end', zIndex: 1, width: '12%' }}>
                  <div style={{ background: data.color, height: `${data.h}%`, width: '100%', borderTopLeftRadius: '2px', borderTopRightRadius: '2px' }}></div>
                </div>
              ))}
            </div>
            {/* X Axis labels */}
            <div style={{ position: 'absolute', left: '35px', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-around', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', paddingTop: '8px', padding: '0 10px' }}>
              <span>Tj Priok</span><span>Belawan</span><span>Makassar</span><span>Sorong</span><span>Tj Perak</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insight & Logs */}
      <div style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '16px', textTransform: 'uppercase' }}>LOGBOOK PERGERAKAN TERAKHIR</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {armada.slice(0, 5).map((l, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i !== 4 ? '1px dashed rgba(255,255,255,0.1)' : 'none', paddingBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: '#A855F7', flex: 1 }}>{l.name}</span>
              <span style={{ fontSize: '12px', color: l.status.toLowerCase().includes('perjalanan') ? '#22C55E' : '#3B82F6', flex: 1, textAlign: 'center' }}>{l.status}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)', flex: 2, textAlign: 'right' }}>Update Pelacakan Otomatis Diterima.</span>
            </div>
          ))}
          {armada.length === 0 && (
            <div style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)', textAlign: 'center', padding: '16px' }}>Menunggu sinkronisasi data logbook...</div>
          )}
        </div>
      </div>

    </div>
  );
}