import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import logoImg from '../assets/logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Basic scroll spy
      const sections = navItems.map(item => {
        const id = item.href.substring(1);
        return document.getElementById(id);
      });

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(navItems[i].label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, label) => {
    e.preventDefault();
    setActiveItem(label);
    setIsMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of navbar
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'py-4 glass-panel border-b border-white/5 shadow-2xl backdrop-blur-xl'
            : 'py-6 bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'Home')} className="flex items-center gap-3 group">
          
            <span className="text-xl font-bold tracking-widest font-display text-white transition-all group-hover:text-brand-cyan">
              {BRAND_CONFIG.name}
            </span>
          </a>

          {/* Desktop Center Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.02] border border-white/5 rounded-full px-2 py-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 font-sans ${activeItem === item.label ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
              >
                {item.label}
                {activeItem === item.label && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-brand-blue to-brand-cyan hover:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 transition-all shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-brand-bg rounded-full group-hover:bg-opacity-0 font-sans tracking-wider text-xs uppercase flex items-center gap-2">
                Get In Touch
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white p-2 border border-white/5 bg-white/[0.02] rounded-lg"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-32 pb-16 px-8"
          >
            {/* Ambient Background Glow for Drawer */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-3xl font-display font-bold tracking-wide transition-colors ${activeItem === item.label ? 'text-brand-cyan' : 'text-white/60'
                    }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
                className="w-full text-center py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-bg font-bold font-display rounded-xl hover:opacity-90 transition-all uppercase tracking-widest text-sm"
              >
                Get In Touch
              </a>
              <p className="text-center text-xs text-white/40 tracking-wider font-sans mt-4">
                © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
