import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {}
      <div className="ambient-orbs" aria-hidden="true">
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
      </div>

      {}
      <div className="hero-bg" style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <img src="/hero-bg.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {}
      <Navbar />

      {}
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Hero />
        {}
        <div style={{ width: '100%', display: "flex", flexDirection: "column", gap: "32px" }}>
          <About />
          <Features />
          <Advantages />
          <Gallery />
        </div>
        <CTA />
        <Footer />
      </main>
    </div>
  );
}