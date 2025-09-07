import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import "./page.css";

export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
