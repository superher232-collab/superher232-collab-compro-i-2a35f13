"use client";
import React from 'react';

export default function RingkasanDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Secondary Nav */}
      <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid var(--border-purple, rgba(168, 85, 247, 0.2))', paddingBottom: '16px' }}>
        <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>Pelacakan geografis kapal</div>
        <div style={{ color: 'var(--text-muted, #8B7BA8)', fontSize: '12px', letterSpacing: '1px' }}>Tampilan Global</div>
        <div style={{ color: 'var(--text-muted, #8B7BA8)', fontSize: '12px', letterSpacing: '1px' }}>Tampilan Regional</div>
        <div style={{ color: 'var(--text-muted, #8B7BA8)', fontSize: '12px', letterSpacing: '1px' }}>Perencanaan Rute</div>
      </div>

      {/* Top 4 Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {/* Total Kapal */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h20M2 18h20M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
            </svg>
            <span style={{ fontSize: '24px', color: '#C084FC', lineHeight: 1 }}>8</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Total Kapal</span>
        </div>

        {/* Dalam Perjalanan */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <span style={{ fontSize: '24px', color: '#22C55E', lineHeight: 1 }}>4</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Dalam Perjalanan</span>
        </div>

        {/* Di Pelabuhan */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span style={{ fontSize: '24px', color: '#3B82F6', lineHeight: 1 }}>2</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Di Pelabuhan</span>
        </div>

        {/* Peringatan Aktif */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span style={{ fontSize: '24px', color: '#F59E0B', lineHeight: 1 }}>1</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Peringatan Aktif</span>
        </div>
      </div>

      {/* Grid 2 Columns for Middle Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
        
        {/* Metrik Kinerja */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>METRIK KINERJA</div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px' }}>
              <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', marginBottom: '8px' }}>Efisiensi Bahan Bakar</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '20px', color: '#C084FC' }}>86%</span>
                <span style={{ fontSize: '10px', color: '#22C55E' }}>↗ +2.3%</span>
              </div>
            </div>
            
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px' }}>
              <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', marginBottom: '8px' }}>Pengiriman Tepat Waktu</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '20px', color: '#3B82F6' }}>91%</span>
                <span style={{ fontSize: '10px', color: '#EF4444' }}>↘ -1.2%</span>
              </div>
            </div>
            
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px' }}>
              <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', marginBottom: '8px' }}>Pemanfaatan Armada</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '20px', color: '#22C55E' }}>87.5%</span>
                <span style={{ fontSize: '10px', color: '#22C55E' }}>↗ +3%</span>
              </div>
            </div>
            
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '4px' }}>
              <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)', marginBottom: '8px' }}>Waktu Pelayaran Avg</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '20px', color: '#F59E0B' }}>12.4 Hari</span>
                <span style={{ fontSize: '10px', color: '#22C55E' }}>↗ -8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Sistem */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>STATUS SISTEM</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Pelacakan GPS</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}></div>
                <span style={{ fontSize: '10px', color: '#22C55E' }}>Aktif</span>
              </div>
            </div>
            
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Komunikasi Kapal</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}></div>
                <span style={{ fontSize: '10px', color: '#22C55E' }}>Aktif</span>
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Sensor Bahan Bakar</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }}></div>
                <span style={{ fontSize: '10px', color: '#22C55E' }}>Aktif</span>
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>Sistem Cuaca</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 6px #F59E0B' }}></div>
                <span style={{ fontSize: '10px', color: '#F59E0B' }}>Peringatan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid 2 Columns for Bottom Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
        
        {/* Tren Pendapatan Chart */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px' }}>TREN PENDAPATAN</div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>6 Bulan Terakhir</div>
          </div>
          
          <div style={{ flex: 1, position: 'relative', marginTop: '20px' }}>
            {/* Y Axis Labels */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: '20px', width: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', textAlign: 'right', paddingRight: '8px' }}>
              <span>160</span>
              <span>120</span>
              <span>80</span>
              <span>40</span>
              <span>0</span>
            </div>
            
            {/* Chart Area */}
            <div style={{ position: 'absolute', left: '30px', top: 0, right: 0, bottom: '20px', borderLeft: '1px solid rgba(139, 123, 168, 0.3)', borderBottom: '1px solid rgba(139, 123, 168, 0.3)' }}>
              
              {/* Horizontal Grid lines */}
              <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ borderBottom: '1px dashed rgba(139, 123, 168, 0.1)', height: '25%' }}></div>
                <div style={{ borderBottom: '1px dashed rgba(139, 123, 168, 0.1)', height: '25%' }}></div>
                <div style={{ borderBottom: '1px dashed rgba(139, 123, 168, 0.1)', height: '25%' }}></div>
                <div style={{ height: '25%' }}></div>
              </div>

              {/* Custom SVG Line Chart */}
              <svg width="100%" height="100%" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                <polyline 
                  points="0,60 150,55 300,50 450,52 600,40 750,38" 
                  fill="none" 
                  stroke="#C084FC" 
                  strokeWidth="3" 
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="0" cy="60" r="4" fill="#C084FC" />
                <circle cx="150" cy="55" r="4" fill="#C084FC" />
                <circle cx="300" cy="50" r="4" fill="#C084FC" />
                <circle cx="450" cy="52" r="4" fill="#C084FC" />
                <circle cx="600" cy="40" r="4" fill="#C084FC" />
                <circle cx="750" cy="38" r="4" fill="#C084FC" />
              </svg>
            </div>

            {/* X Axis Labels */}
            <div style={{ position: 'absolute', left: '30px', right: 0, bottom: '-5px', height: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted, #8B7BA8)', transform: 'translateY(100%)' }}>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>Mei</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Aktivitas Kapal Terbaru */}
        <div style={{ background: 'rgba(20, 10, 36, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '4px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '1px', marginBottom: '4px' }}>AKTIVITAS KAPAL TERBARU</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>KM NUSANTARA</span>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }}></div>
              </div>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>Laut Jawa</span>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>ETA: 2 jam</span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>KM BIMA SAKTI</span>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6' }}></div>
              </div>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>Pelabuhan Tanjung Priok</span>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>ETA: Tiba</span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>KM SRIWIJAYA</span>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }}></div>
              </div>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>Selat Sunda</span>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>ETA: 4 jam</span>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', color: 'white', fontWeight: 'bold' }}>KM KARTINI</span>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }}></div>
              </div>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>Laut Sulawesi</span>
              <span style={{ fontSize: '9px', color: 'var(--text-muted, #8B7BA8)' }}>ETA: 6 jam</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
