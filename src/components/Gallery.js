import Image from "next/image";

export default function Gallery() {
  const items = [
    { src: "/ship1.png", label: "OPERASIONAL MARITIM" },
    { src: "/ship2.png", label: "MANAJEMEN ARMADA" },
    { src: "/ship3.png", label: "JANGKAUAN GLOBAL" },
  ];

  return (
    <section className="gallery-grid">
      {items.map((item, i) => (
        <div className="gallery-item" key={i}>
          <Image
            src={item.src}
            alt={item.label}
            width={400}
            height={250}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="gallery-overlay">
            <span className="gallery-label">{item.label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
