"use client";
import React from 'react';

export default function Pemeliharaan() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', letterSpacing: '1px', margin: '0 0 4px 0' }}>Manajemen Pemeliharaan</h1>
        <p style={{ fontSize: '12px', color: 'var(--text-muted, #8B7BA8)', margin: 0 }}>Jadwal dan status pemeliharaan armada</p>
      </div>

      {/* Top 4 Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {/* Jadwal Bulan Ini */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span style={{ fontSize: '24px', color: '#C084FC', lineHeight: 1 }}>8</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Jadwal Bulan Ini</span>
        </div>

        {/* Sedang Berlangsung */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            <span style={{ fontSize: '24px', color: '#F59E0B', lineHeight: 1 }}>1</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Sedang Berlangsung</span>
        </div>

        {/* Selesai Bulan Ini */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span style={{ fontSize: '24px', color: '#22C55E', lineHeight: 1 }}>3</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Selesai Bulan Ini</span>
        </div>

        {/* Menunggu Jadwal */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span style={{ fontSize: '24px', color: '#3B82F6', lineHeight: 1 }}>4</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Menunggu Jadwal</span>
        </div>
      </div>

      {/* JADWAL PEMELIHARAAN */}
      <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>JADWAL PEMELIHARAAN</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Item 1 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', borderLeft: '2px solid #3B82F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: '#C084FC', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV PACIFIC STAR</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Engine Overhaul</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>2026-04-20 <span style={{ marginLeft: '12px' }}>6 hari lagi</span></div>
              </div>
            </div>
            <div style={{ border: '1px solid #3B82F6', color: '#3B82F6', padding: '4px 12px', borderRadius: '4px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Akan Datang
            </div>
          </div>

          {/* Item 2 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', borderLeft: '2px solid #F59E0B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <div style={{ color: '#C084FC', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV NORTHERN LIGHT</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Hull Inspection</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px' }}>
                  <span>2026-04-14</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', minWidth: '150px' }}>
              <div style={{ border: '1px solid #F59E0B', color: '#F59E0B', padding: '4px 12px', borderRadius: '4px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Berlangsung
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '65%', height: '100%', background: '#F59E0B' }}></div>
                </div>
                <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>65%</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', borderLeft: '2px solid #3B82F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: '#C084FC', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV BALTIC VOYAGER</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Propeller Cleaning</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>2026-04-18 <span style={{ marginLeft: '12px' }}>4 hari lagi</span></div>
              </div>
            </div>
            <div style={{ border: '1px solid #3B82F6', color: '#3B82F6', padding: '4px 12px', borderRadius: '4px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Akan Datang
            </div>
          </div>

          {/* Item 4 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', borderLeft: '2px solid #22C55E', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: '#C084FC', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV CORAL SEA</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Paint & Coating</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>2026-04-10</div>
              </div>
            </div>
            <div style={{ border: '1px solid #22C55E', color: '#22C55E', padding: '4px 12px', borderRadius: '4px', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Selesai
            </div>
          </div>
        </div>
      </div>

      {/* KONDISI KAPAL */}
      <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>KONDISI KAPAL</div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          
          {/* Card 1 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV PACIFIC STAR</span>
              </div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Terakhir</span>
              <span>45 hari lalu</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Berikutnya</span>
              <span>6 hari</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Kondisi</span>
                <span style={{ color: '#22C55E' }}>95%</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '95%', height: '100%', background: '#22C55E' }}></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV ATLANTIC PRIDE</span>
              </div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Terakhir</span>
              <span>20 hari lalu</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Berikutnya</span>
              <span>40 hari</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Kondisi</span>
                <span style={{ color: '#F59E0B' }}>88%</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '88%', height: '100%', background: '#F59E0B' }}></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV INDIAN OCEAN</span>
              </div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Terakhir</span>
              <span>30 hari lalu</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Berikutnya</span>
              <span>30 hari</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Kondisi</span>
                <span style={{ color: '#22C55E' }}>92%</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '92%', height: '100%', background: '#22C55E' }}></div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>MV NORTHERN LIGHT</span>
              </div>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 6px #F59E0B' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Terakhir</span>
              <span>Sedang berlangsung</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
              <span>Pemeliharaan Berikutnya</span>
              <span>-</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Kondisi</span>
                <span style={{ color: '#F59E0B' }}>75%</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '75%', height: '100%', background: '#F59E0B' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PERINGATAN */}
      <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>PERINGATAN</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.05)', padding: '16px', borderRadius: '4px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ color: '#F59E0B' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '11px', color: 'white' }}>MV PACIFIC STAR - Pemeliharaan Mendekati</div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Engine overhaul dijadwalkan dalam 6 hari. Pastikan kapal siap untuk masuk dok.</div>
            </div>
          </div>

          <div style={{ border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.05)', padding: '16px', borderRadius: '4px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ color: '#F59E0B' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '11px', color: 'white' }}>MV BALTIC VOYAGER - Propeller Cleaning</div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Propeller cleaning dalam 4 hari. Koordinasikan dengan tim diving.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
