import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import FranchiseParallax from './components/FranchiseParallax';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import StickyProjectShowcase from './components/StickyProjectShowcase';
import Testimonials from './components/Testimonials';
import Tools from './components/Tools';
import useRevealOnScroll from './hooks/useRevealOnScroll';

const App = () => {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-mesh text-white">
      <NavBar />
      <main>
        <Hero />
        <StickyProjectShowcase />
        <Tools />
        <About />
        <Skills />
        <FranchiseParallax />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
