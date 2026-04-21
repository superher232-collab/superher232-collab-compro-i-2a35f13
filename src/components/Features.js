export default function Features() {
  const features = [
    {
      color: "#22C55E",
      title: "Pelacakan Real-Time",
      desc: "Monitor posisi dan rute kapal secara langsung dengan akurasi tinggi",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="5.33" y="2.67" width="21.33" height="26.67" rx="2" stroke="#22C55E" strokeWidth="2.67" fill="none" />
          <circle cx="16" cy="13.33" r="4" stroke="#22C55E" strokeWidth="2.67" fill="none" />
        </svg>
      ),
    },
    {
      color: "#F59E0B",
      title: "Monitoring Bahan Bakar",
      // Deskripsi dibuat lugas tanpa menyebutkan rata-rata atau angka kenaikan
      desc: "Pantau konsumsi armada untuk mengoptimalkan efisiensi penggunaan bahan bakar",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="5.33" y="2.67" width="13.33" height="26.67" rx="2" stroke="#F59E0B" strokeWidth="2.67" fill="none" />
          <rect x="18.67" y="6.67" width="10.67" height="18.67" rx="2" stroke="#F59E0B" strokeWidth="2.67" fill="none" />
        </svg>
      ),
    },
    {
      color: "#3B82F6",
      title: "Performa Kapal", // Revisi dari "Kinerja Pengiriman" menjadi "Performa Kapal"
      desc: "Pantau metrik kesehatan mesin dan performa teknis setiap armada kapal",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2.67" y="2.67" width="26.67" height="26.67" rx="3" stroke="#3B82F6" strokeWidth="2.67" fill="none" />
          <path d="M10 16h12M16 10v12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      color: "#A855F7",
      title: "Grafik Efisiensi Kapal", // Revisi dari "Analitik & Laporan" atau "Pendapatan"
      desc: "Visualisasi data efisiensi operasional untuk mendukung keputusan strategis",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2.67" y="16" width="26.67" height="13.33" rx="2" stroke="#A855F7" strokeWidth="2.67" fill="none" />
          <circle cx="25.33" cy="13.33" r="4" stroke="#A855F7" strokeWidth="2.67" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      className="features-grid" 
      id="fitur" 
      style={{ 
        width: '100%', 
        padding: '80px 5%', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '24px',
        boxSizing: 'border-box'
      }}
    >
      {features.map((f, i) => (
        <div 
          className="card feature-card" 
          key={i} 
          style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            padding: '30px', 
            borderRadius: '16px', 
            border: `1px solid ${f.color}33`,
            transition: 'transform 0.3s ease'
          }}
        >
          <div className="feature-icon" style={{ marginBottom: '20px' }}>{f.icon}</div>
          <h3 className="feature-title" style={{ color: 'white', marginBottom: '12px', fontSize: '1.25rem' }}>{f.title}</h3>
          <p className="feature-desc" style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}