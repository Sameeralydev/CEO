import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import About from './components/About';
import Contact from './components/Contact';
import CSR from './components/CSR';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import Hero from './components/Hero';
import Media from './components/Media';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Ventures from './components/Ventures';

function App() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 30, mass: 0.25 });
  const isGalleryPage =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('view') === 'gallery';

  return (
    <div className="bg-lux-gradient">
      <Navbar isGalleryPage={isGalleryPage} />
      <motion.div
        aria-hidden
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gold"
        style={{ scaleX: reducedMotion ? 0 : scaleX }}
      />
      {isGalleryPage ? (
        <main>
          <GalleryPage />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Ventures />
          <CSR />
          <Stats />
          <Media />
          <Testimonials />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
