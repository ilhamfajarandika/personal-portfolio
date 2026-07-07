import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AsciiField from "@/components/AsciiField";

export default function Home() {
  return (
    <>
      {/* <div className="blueprint-grid" /> */}
      {/* <div className="type-field" aria-hidden="true">
        <span className="type-glyph type-glyph-1">Aa</span>
        <span className="type-glyph type-glyph-2">§</span>
        <span className="type-glyph type-glyph-3">—/—</span>
      </div> */}

      <AsciiField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
