"use client";
import React from 'react';

export default function Peringatan() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', letterSpacing: '1px', margin: '0 0 4px 0' }}>Pusat Peringatan</h1>
        <p style={{ fontSize: '12px', color: 'var(--text-muted, #8B7BA8)', margin: 0 }}>Monitor dan kelola semua peringatan sistem</p>
      </div>

      {/* Top 4 Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {/* Peringatan Aktif */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span style={{ fontSize: '24px', color: '#ef4444', lineHeight: 1 }}>4</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Peringatan Aktif</span>
        </div>

        {/* Kritis */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span style={{ fontSize: '24px', color: '#ef4444', lineHeight: 1 }}>1</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Kritis</span>
        </div>

        {/* Peringatan */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span style={{ fontSize: '24px', color: '#F59E0B', lineHeight: 1 }}>2</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Peringatan</span>
        </div>

        {/* Terselesaikan Hari Ini */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span style={{ fontSize: '24px', color: '#22C55E', lineHeight: 1 }}>3</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Terselesaikan Hari Ini</span>
        </div>
      </div>

      {/* PERINGATAN AKTIF */}
      <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>PERINGATAN AKTIF</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Kritis Item */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', border: '1px solid rgba(239, 68, 68, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <div style={{ color: '#ef4444', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Konsumsi Bahan Bakar Tinggi</div>
                  <div style={{ border: '1px solid #ef4444', color: '#ef4444', padding: '2px 8px', borderRadius: '4px', fontSize: '9px' }}>Kritis</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C084FC', fontSize: '10px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                  MV ATLANTIC PRIDE
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Konsumsi bahan bakar 35% lebih tinggi dari rata-rata pada rute Rotterdam</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>15 menit yang lalu</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: '#A855F7', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Lihat Detail</button>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Tandai Selesai</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Peringatan Item 1 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <div style={{ color: '#F59E0B', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Penurunan Efisiensi</div>
                  <div style={{ border: '1px solid #F59E0B', color: '#F59E0B', padding: '2px 8px', borderRadius: '4px', fontSize: '9px' }}>Peringatan</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C084FC', fontSize: '10px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                  MV CORAL SEA
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Efisiensi menurun dari 88% menjadi 72% dalam 24 jam terakhir</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>1 jam yang lalu</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: '#A855F7', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Lihat Detail</button>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Tandai Selesai</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Peringatan Item 2 */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <div style={{ color: '#F59E0B', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Pemeliharaan Mendekati</div>
                  <div style={{ border: '1px solid #F59E0B', color: '#F59E0B', padding: '2px 8px', borderRadius: '4px', fontSize: '9px' }}>Peringatan</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C084FC', fontSize: '10px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                  MV PACIFIC STAR
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Engine overhaul dijadwalkan dalam 6 hari</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>3 jam yang lalu</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: '#A855F7', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Lihat Detail</button>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Tandai Selesai</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informasi Item */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', border: '1px solid rgba(59, 130, 246, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <div style={{ color: '#3B82F6', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Memasuki Area Berisiko Tinggi</div>
                  <div style={{ border: '1px solid #3B82F6', color: '#3B82F6', padding: '2px 8px', borderRadius: '4px', fontSize: '9px' }}>Informasi</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C084FC', fontSize: '10px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                  MV INDIAN OCEAN
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Kapal memasuki zona dengan kondisi cuaca buruk</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>5 jam yang lalu</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: '#A855F7', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Lihat Detail</button>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>Tandai Selesai</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Bahan Bakar</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '18px', color: '#F59E0B' }}>1</span>
            <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>peringatan aktif</span>
          </div>
        </div>

        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Kinerja</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '18px', color: '#3B82F6' }}>1</span>
            <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>peringatan aktif</span>
          </div>
        </div>

        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Pemeliharaan</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '18px', color: '#C084FC' }}>1</span>
            <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>peringatan aktif</span>
          </div>
        </div>

        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Lokasi</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '18px', color: '#22C55E' }}>1</span>
            <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>peringatan aktif</span>
          </div>
        </div>
      </div>

      {/* PERINGATAN TERSELESAIKAN */}
      <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>PERINGATAN TERSELESAIKAN</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', border: '1px solid rgba(34, 197, 94, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <div style={{ color: '#22C55E', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Hull Inspection Selesai</div>
                  <div style={{ border: '1px solid #22C55E', color: '#22C55E', padding: '2px 8px', borderRadius: '4px', fontSize: '9px' }}>Selesai</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C084FC', fontSize: '10px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                  MV NORTHERN LIGHT
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Inspeksi lambung telah selesai, tidak ada masalah ditemukan</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>2 hari yang lalu</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>Diselesaikan oleh: System</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px', border: '1px solid rgba(34, 197, 94, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
              <div style={{ color: '#22C55E', marginTop: '2px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Coating Selesai</div>
                  <div style={{ border: '1px solid #22C55E', color: '#22C55E', padding: '2px 8px', borderRadius: '4px', fontSize: '9px' }}>Selesai</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C084FC', fontSize: '10px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                  MV CORAL SEA
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Pengecatan dan coating telah diselesaikan</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>4 hari yang lalu</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>Diselesaikan oleh: Maintenance Team</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Action Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer' }}>
          <div style={{ color: '#C084FC' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>Atur Notifikasi</div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Konfigurasi preferensi peringatan</div>
        </div>

        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer' }}>
          <div style={{ color: '#22C55E' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>Riwayat Peringatan</div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Lihat semua peringatan</div>
        </div>

        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer' }}>
          <div style={{ color: '#F59E0B' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white' }}>Aturan Peringatan</div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>Kelola aturan otomatis</div>
        </div>
      </div>

    </div>
  );
}
