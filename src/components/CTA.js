export default function CTA() {
  return (
    <section className="cta-section" id="masuk">
      <a href="/login" className="btn-cta">
        MASUK KE SISTEM
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4.17L15.83 10L10 15.83"
            stroke="white"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <p className="cta-note">Akses aman diperlukan untuk menggunakan sistem</p>
    </section>
  );
}
