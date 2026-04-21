"use client";
import React, { useState } from 'react';
import { useDashboard } from '@/context/DashboardContext';

export default function FleetPage() {
  const { role, armada, tambahKapal, hapusKapal } = useDashboard();
  const ships = armada && armada.length > 0 ? armada : [];

  // Stats dari data nyata
  const total      = ships.length;
  const berlayar   = ships.filter(s => s.status?.toLowerCase().includes('perjalanan')).length;
  const pelabuhan  = ships.filter(s => s.status?.toLowerCase().includes('pelabuhan')).length;
  const terlambat  = ships.filter(s => s.status?.toLowerCase().includes('terlambat')).length;
  const perawatan  = ships.filter(s => s.status?.toLowerCase().includes('pemeliharaan')).length;

  // State modal tambah kapal
  const [showModal, setShowModal] = useState(false);
  const [loadingTambah, setLoadingTambah] = useState(false);
  const [loadingHapus, setLoadingHapus]   = useState(null);
  const [form, setForm] = useState({
    name: '', type: '', status: 'DALAM PERJALANAN',
    location: '', destination: '', eta: ''
  });

  const handleTambah = async () => {
    if (!form.name || !form.type || !form.status) {
      alert('Nama, jenis, dan status wajib diisi.');
      return;
    }

    setLoadingTambah(true);
    const result = await tambahKapal(form);
    setLoadingTambah(false);

    if (result.success) {
      setShowModal(false);
      setForm({ name: '', type: '', status: 'DALAM PERJALANAN', location: '', destination: '', eta: '' });
    } else {
      alert('Gagal menambah kapal. Cek console untuk detail.');
    }
  };

  const handleHapus = async (id) => {
    if (!confirm('Yakin hapus kapal ini?')) return;

    setLoadingHapus(id);
    const result = await hapusKapal(id);
    setLoadingHapus(null);

    if (!result.success) {
      alert('Gagal menghapus kapal. Cek console untuk detail.');
    }
  };

  const inputStyle = {
    width: '100%', background: '#0d0618',
    border: '1px solid rgba(168, 85, 247, 0.3)',
    borderRadius: '4px', padding: '8px 12px',
    color: 'white', fontSize: '12px', outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'monospace' }}>

      {/* Modal Tambah Kapal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#130a24', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', padding: '32px', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>TAMBAH KAPAL BARU</div>

            {[
              { label: 'Nama Kapal *', key: 'name',        placeholder: 'KM NUSANTARA' },
              { label: 'Jenis Kapal *', key: 'type',       placeholder: 'Kapal Petikemas' },
              { label: 'Lokasi',        key: 'location',   placeholder: 'Laut Jawa' },
              { label: 'Tujuan',        key: 'destination',placeholder: 'Tanjung Perak' },
              { label: 'ETA',           key: 'eta',        placeholder: '2026-05-01 10:00' },
            ].map(({ label, key, placeholder }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '11px', color: '#8B7BA8' }}>{label}</span>
                <input
                  type="text"
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={e => setForm(prev => ({ ...prev, [key]: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '11px', color: '#8B7BA8' }}>Status *</span>
              <select
                value={form.status}
                onChange={e => setForm(prev => ({ ...prev, status: e.target.value }))}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                <option value="DALAM PERJALANAN">DALAM PERJALANAN</option>
                <option value="DI PELABUHAN">DI PELABUHAN</option>
                <option value="TERLAMBAT">TERLAMBAT</option>
                <option value="PEMELIHARAAN">PEMELIHARAAN</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{ flex: 1, background: 'transparent', border: '1px solid rgba(168,85,247,0.3)', color: '#8B7BA8', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
              >
                Batal
              </button>
              <button
                onClick={handleTambah}
                disabled={loadingTambah}
                style={{ flex: 1, background: '#A855F7', border: 'none', color: 'white', padding: '10px', borderRadius: '4px', cursor: loadingTambah ? 'not-allowed' : 'pointer', fontSize: '12px', fontWeight: 'bold', opacity: loadingTambah ? 0.7 : 1 }}
              >
                {loadingTambah ? 'Menyimpan...' : 'Simpan'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
        {[
          { label: 'Total Kapal',      value: total,     color: '#A855F7' },
          { label: 'Dalam Perjalanan', value: berlayar,  color: '#22C55E' },
          { label: 'Di Pelabuhan',     value: pelabuhan, color: '#3B82F6' },
          { label: 'Terlambat',        value: terlambat, color: '#F59E0B' },
          { label: 'Pemeliharaan',     value: perawatan, color: '#EF4444' },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted, #8B7BA8)' }}>{label}</span>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted, #8B7BA8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Cari kapal..." style={{ width: '100%', background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '10px 10px 10px 36px', color: 'white', fontSize: '12px', outline: 'none' }} />
        </div>
        {role === 'Admin' && (
          <button
            onClick={() => setShowModal(true)}
            style={{ background: '#A855F7', color: 'white', padding: '10px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 'bold' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Tambah Armada
          </button>
        )}
      </div>

      {/* Fleet Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {ships.map((ship) => {
          const statusColor = ship.statusColor ||
            (ship.status?.includes('PERJALANAN') ? '#22C55E' :
             ship.status?.includes('PELABUHAN')  ? '#3B82F6' :
             ship.status?.includes('TERLAMBAT')  ? '#F59E0B' : '#EF4444');

          return (
            <div key={ship.id} style={{ background: 'var(--bg-card, #130a24)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>

              {ship.status?.includes('PERJALANAN') && (
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '2px', background: statusColor, boxShadow: '0 0 20px 5px ' + statusColor }}></div>
              )}

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

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ border: '1px solid ' + statusColor, borderRadius: '4px', padding: '4px 8px', fontSize: '9px', fontWeight: 'bold', color: statusColor }}>
                    {ship.status}
                  </div>
                  {role === 'Admin' && (
                    <button
                      aria-label="Hapus Kapal"
                      onClick={() => handleHapus(ship.id)}
                      disabled={loadingHapus === ship.id}
                      style={{ background: 'transparent', border: 'none', cursor: loadingHapus === ship.id ? 'not-allowed' : 'pointer', padding: '4px', opacity: loadingHapus === ship.id ? 0.5 : 1 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', rowGap: '12px', fontSize: '11px', marginBottom: '24px' }}>
                <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Lokasi</span>
                <span style={{ textAlign: 'right' }}>{ship.location || '-'}</span>
                <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Tujuan</span>
                <span style={{ textAlign: 'right' }}>{ship.destination || '-'}</span>
                <span style={{ color: 'var(--text-muted, #8B7BA8)' }}>Perkiraan Tiba</span>
                <span style={{ textAlign: 'right' }}>{ship.eta || '-'}</span>
              </div>

              <div style={{ fontSize: '10px', color: 'var(--text-muted, #8B7BA8)' }}>
                Pembaruan terakhir: {ship.update || 'Baru saja'}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}