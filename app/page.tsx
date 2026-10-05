import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Creative from "@/components/Creative";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Expertise />
        <Creative />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
