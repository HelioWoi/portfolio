import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import FranchiseParallax from './components/FranchiseParallax';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import PhotoAiBanner from './components/PhotoAiBanner';
import SelectedWebsites from './components/SelectedWebsites';
import Skills from './components/Skills';
import SpotlightBanners from './components/SpotlightBanners';
import StickyProjectShowcase from './components/StickyProjectShowcase';
import Testimonials from './components/Testimonials';
import Tools from './components/Tools';
import WorkGallery from './components/WorkGallery';
import { galleryCollections } from './data/content';
import useRevealOnScroll from './hooks/useRevealOnScroll';

const getGalleryFromUrl = () => new URLSearchParams(window.location.search).get('gallery') || '';

const App = () => {
  useRevealOnScroll();
  const [activeGallery, setActiveGallery] = useState(getGalleryFromUrl);

  useEffect(() => {
    const onPopState = () => setActiveGallery(getGalleryFromUrl());

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const openGallery = (gallerySlug) => {
    const params = new URLSearchParams(window.location.search);
    params.set('gallery', gallerySlug);
    const query = params.toString();

    window.history.pushState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
    setActiveGallery(gallerySlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeGallery = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('gallery');
    const query = params.toString();

    window.history.pushState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
    setActiveGallery('');
  };

  if (activeGallery && galleryCollections[activeGallery]) {
    return <WorkGallery images={galleryCollections[activeGallery]} onClose={closeGallery} />;
  }

  return (
    <div className="min-h-screen bg-mesh text-white">
      <NavBar />
      <main>
        <Hero />
        <StickyProjectShowcase onOpenGallery={openGallery} />
        <Tools />
        <SelectedWebsites />
        <About />
        <Skills />
        <PhotoAiBanner />
        <FranchiseParallax />
        <SpotlightBanners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
