import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIdea from './components/TrustIdea';
import HowItWorks from './components/HowItWorks';
import LiveExperience from './components/LiveExperience';
import ExploreCategories from './components/ExploreCategories';
import WhyOpposr from './components/WhyOpposr';
import AppPreview from './components/AppPreview';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Desktop Custom Cursor
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setCursorHovered(true);
    const handleHoverEnd = () => setCursorHovered(false);

    window.addEventListener('mousemove', updateCursor);

    // Add hover listeners to clickable elements
    const clickables = document.querySelectorAll('a, button, [role="button"], input, textarea');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    // Scroll listener for Top Button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('scroll', handleScroll);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-white selection:bg-brand-blue selection:text-white font-sans noise-overlay">

          {/* Custom Cursor Circle (Desktop Only) */}
          <div className="hidden lg:block">
            <motion.div
              className={`fixed w-6 h-6 rounded-full border pointer-events-none z-50 mix-blend-screen -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${cursorHovered
                  ? 'bg-brand-cyan/20 border-brand-cyan scale-150 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                  : 'bg-transparent border-white/30'
                }`}
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
              }}
            />
          </div>

          {/* Sticky Navigation */}
          <Navbar />

          {/* Page Sections */}
          <main>
            {/* 2. HERO */}
            <Hero />

            {/* 3. TRUST / IDEA */}
            <TrustIdea />

            {/* 4. HOW IT WORKS */}
            <HowItWorks />

            {/* 5. LIVE EXPERIENCE */}
            <LiveExperience />

            {/* 6. EXPLORE CATEGORIES */}
            <ExploreCategories />

            {/* 8. WHY OPPOSR */}
            <WhyOpposr />

            {/* 11. APP PREVIEW */}
            <AppPreview />

            {/* 12. FOUNDER */}
            <Founder />



            {/* 14. CONTACT */}
            <Contact />
          </main>

          {/* 15. FOOTER */}
          <Footer />

          {/* Floating Scroll to Top button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleScrollTop}
                className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-xl glass-panel border border-white/10 hover:border-brand-cyan/30 text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xl"
                aria-label="Scroll to Top"
              >
                <ArrowUp size={16} />
              </motion.button>
            )}
          </AnimatePresence>
    </div>
  );
}
