function CheckIcon() {
  return (
    <svg className="advantage-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.67" y="1.67" width="16.67" height="16.67" rx="8.33" stroke="#22C55E" strokeWidth="1.67" fill="none" />
      <path d="M7.5 10L9.5 12L13 7" stroke="#22C55E" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function Advantages() {
  const items = [
    "Monitoring 24/7 untuk seluruh armada",
    "Dashboard interaktif dengan data real-time",
    "Sistem peringatan otomatis untuk anomali",
    "Laporan komprehensif dan analitik mendalam",
    "Integrasi dengan sistem navigasi kapal",
    "Keamanan data tingkat enterprise",
  ];

  return (
    <section className="card advantages-card" id="keunggulan">
      <h2 className="advantages-title">Keunggulan Utama</h2>
      <div className="advantages-grid">
        {items.map((item, i) => (
          <div className="advantage-item" key={i}>
            <CheckIcon />
            <span className="advantage-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
