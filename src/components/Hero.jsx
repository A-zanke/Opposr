import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Flame, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG, MARQUEE_TOPICS } from '../config';

// Import local assets specifically for Vite bundling
import debate1Vid from '../assets/debate1.mp4';
import debate2Vid from '../assets/debate2.mp4';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Mouse move tracker for cursor glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll parallax effects for floating elements
  const { scrollY } = useScroll();
  const yParallaxFast = useTransform(scrollY, [0, 800], [0, -150]);
  const yParallaxSlow = useTransform(scrollY, [0, 800], [0, -80]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full bg-brand-bg flex flex-col justify-between overflow-hidden pt-28 pb-12"
    >
      {/* Background Aurora Mesh */}
      <div className="absolute inset-0 aurora-mesh pointer-events-none z-0 opacity-70" />

      {/* Ambient Animated Particles (CSS/SVG) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full">
          <circle cx="10%" cy="20%" r="2" fill="#3B82F6" className="animate-pulse" />
          <circle cx="85%" cy="30%" r="3" fill="#22D3EE" className="animate-pulse" />
          <circle cx="50%" cy="75%" r="2" fill="#3B82F6" className="animate-pulse" />
          <circle cx="20%" cy="60%" r="1.5" fill="#22D3EE" className="animate-pulse" />
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0" />

      {/* Mouse Responsive Radial Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none z-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x - 300}px, ${mousePosition.y - 300}px, 0)`,
        }}
      />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 w-full flex-grow my-auto">

        {/* Left Column: Heading & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col gap-6 text-left"
        >
          {/* Coming Soon Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center self-start">
            <span className="glass-panel px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-brand-cyan uppercase border border-brand-cyan/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] flex items-center gap-2">
              <Flame size={14} className="text-orange-400" />
              Launching Soon
            </span>
          </motion.div>

          {/* Headline (Line by Line Animation) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.05] text-white">
            <span className="block overflow-hidden pb-1">
              <motion.span variants={lineVariants} className="block">
                Your Opinion
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span variants={lineVariants} className="block">
                Deserves a
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              <motion.span variants={lineVariants} className="block">
                Debate.
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/70 max-w-xl font-sans leading-relaxed mt-2"
          >
            {BRAND_CONFIG.name} is a debate-first platform where different perspectives meet through structured live discussions, recorded debates, and intelligent arguments. Challenge the status quo, build credibility.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-bg font-bold font-display rounded-full shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] transition-all flex items-center justify-center gap-3 uppercase tracking-wider text-xs"
            >
              Join the Waitlist
              <ArrowRight size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('vision')}
              className="px-8 py-4 glass-panel text-white font-semibold font-sans rounded-full border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3 text-sm"
            >
              Explore the Vision
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating Video Elements */}
        <motion.div
          className="lg:col-span-6 relative w-full h-[500px] sm:h-[650px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[620px] h-full">

            {/* Ambient Back Glow for Videos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Video 1: Main Top Overlay */}
            <motion.div
              style={{ y: yParallaxSlow }}
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute top-[8%] right-[-25%] z-30 w-[400px] sm:w-[680px] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl shadow-brand-blue/20"
            >
              {/* Fake UI Header */}
              <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-center">
                <span className="flex items-center gap-2 bg-red-500/20 text-red-500 border border-red-500/30 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" /> Live Debate
                </span>
                
              </div>
              <video
                src={debate1Vid}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto opacity-90 block"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-10 text-left">

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">


                  </div>
                  <div className="w-[1px] h-6 bg-white/10" />
                  <div className="flex items-center gap-2 text-right">
                    <div className="text-[10px]">

                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video 2: Secondary Bottom Overlay */}
            <motion.div
              style={{ y: yParallaxFast }}
              initial={{ opacity: 0, x: -30, y: 50, rotate: -3 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
              className="absolute bottom-[4%] left-[1%] z-30 w-[280px] sm:w-[440px] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl shadow-brand-cyan/20 backdrop-blur-xl"
            >
              <video
                src={debate2Vid}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto opacity-80 block"
              />
              {/* UI Overlay */}
              <div className="absolute inset-0 border-[4px] border-transparent rounded-2xl pointer-events-none" />

            </motion.div>

            {/* Decorative Connector Curve */}
            <svg className="absolute top-1/2 left-[10%] w-[80%] h-[60%] pointer-events-none z-10 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M10,90 Q50,10 90,50" fill="none" stroke="#22D3EE" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[dash_20s_linear_infinite]" />
            </svg>

          </div>
        </motion.div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="w-full border-y border-white/[0.06] bg-brand-secondary py-5 overflow-hidden z-10 mt-12 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none" />

        <div className="flex whitespace-nowrap">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-12 text-sm font-display font-bold tracking-widest text-white/50 uppercase select-none">
            {MARQUEE_TOPICS.concat(MARQUEE_TOPICS).map((topic, index) => (
              <span key={index} className="flex items-center gap-3 hover:text-brand-cyan transition-colors duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </section>
  );
}
