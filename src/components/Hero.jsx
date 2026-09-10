import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Flame, ShieldCheck, Zap } from 'lucide-react';
import { BRAND_CONFIG, MARQUEE_TOPICS } from '../config';

// Import local assets specifically for Vite bundling
import debate1Vid from '../assets/debate1.mp4';
import debate2Vid from '../assets/debate2.mp4';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeStream, setActiveStream] = useState(0);
  const containerRef = useRef(null);

  // Auto-switch stream preview every 5 seconds
  useEffect(() => {
    const streamTimer = setInterval(() => {
      setActiveStream((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(streamTimer);
  }, []);

  // Mouse move tracker for cursor glow (desktop only)
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

  // Scroll parallax effects
  const { scrollY } = useScroll();
  const yParallaxSlow = useTransform(scrollY, [0, 600], [0, -60]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
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
      className="relative min-h-screen w-full bg-brand-bg flex flex-col overflow-hidden pt-20 sm:pt-24"
    >
      {/* Background Aurora Mesh */}
      <motion.div 
        style={{ opacity: opacityFade }}
        className="absolute inset-0 aurora-mesh pointer-events-none z-0" 
      />

      {/* Ambient Animated Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <svg className="w-full h-full">
          <circle cx="10%" cy="20%" r="2" fill="#3B82F6" className="animate-pulse" />
          <circle cx="85%" cy="30%" r="3" fill="#22D3EE" className="animate-pulse" style={{animationDelay:'0.5s'}} />
          <circle cx="50%" cy="75%" r="2" fill="#3B82F6" className="animate-pulse" style={{animationDelay:'1s'}} />
          <circle cx="20%" cy="60%" r="1.5" fill="#22D3EE" className="animate-pulse" style={{animationDelay:'1.5s'}} />
          <circle cx="75%" cy="80%" r="2" fill="#8B5CF6" className="animate-pulse" style={{animationDelay:'0.7s'}} />
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0" />

      {/* Mouse Responsive Radial Glow - desktop only */}
      <div
        className="hidden md:block absolute w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none z-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x - 250}px, ${mousePosition.y - 250}px, 0)`,
        }}
      />

      {/* ── MOBILE LAYOUT (flex column, stacked) ── */}
      <div className="flex flex-col lg:hidden flex-1 px-5 pt-4 pb-0 z-10 relative">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center self-start">
            <span className="glass-panel px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-brand-cyan uppercase border border-brand-cyan/20 shadow-[0_0_15px_rgba(34,211,238,0.15)] flex items-center gap-1.5">
              <Flame size={11} className="text-orange-400" />
              Launching Soon
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[2.4rem] font-display font-extrabold tracking-tight leading-[1.08] text-white">
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">Your Opinion</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineVariants} className="block">Deserves a</motion.span>
            </span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              <motion.span variants={lineVariants} className="block">Debate.</motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-white/65 font-sans leading-relaxed"
          >
            {BRAND_CONFIG.name} is a debate-first platform where perspectives meet through structured live discussions, recorded debates, and intelligent arguments.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-row gap-3">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => handleScrollTo('contact')}
              className="flex-1 px-5 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-bg font-bold font-display rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 uppercase tracking-wider text-[11px]"
            >
              Join Waitlist
              <ArrowRight size={13} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => handleScrollTo('vision')}
              className="flex-1 px-5 py-3 glass-panel text-white font-semibold font-sans rounded-full border border-white/10 flex items-center justify-center gap-2 text-[11px]"
            >
              Explore Vision
            </motion.button>
          </motion.div>

          {/* Stats Row - mobile */}
          
        </motion.div>

        {/* Video Showcase - Mobile: fits within visible area */}
        <motion.div
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full mt-5 mb-0"
        >
          {/* Switcher pills */}
          <div className="flex items-center justify-center gap-2 mb-2.5 z-30 relative">
            <button
              onClick={() => setActiveStream(0)}
              className={`px-3 py-1 rounded-full text-[9px] font-display font-bold transition-all flex items-center gap-1.5 ${
                activeStream === 0
                  ? 'bg-brand-blue text-white shadow-[0_0_12px_rgba(59,130,246,0.5)] border border-white/20'
                  : 'glass-panel text-white/50 border border-white/5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              Live Arena #1
            </button>
            <button
              onClick={() => setActiveStream(1)}
              className={`px-3 py-1 rounded-full text-[9px] font-display font-bold transition-all flex items-center gap-1.5 ${
                activeStream === 1
                  ? 'bg-brand-cyan text-brand-bg shadow-[0_0_12px_rgba(34,211,238,0.5)] border border-white/20'
                  : 'glass-panel text-white/50 border border-white/5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Live Arena #2
            </button>
          </div>

          {/* Video Card - compact for mobile */}
          <div className="relative w-full rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-cyan/20 rounded-full blur-[80px] pointer-events-none animate-pulse" />
            
            {/* Header Overlay */}
            <div className="absolute top-0 left-0 right-0 p-2.5 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-20 flex justify-between items-center">
              <span className="bg-red-500/20 text-red-400 border border-red-500/40 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full animate-ping" /> LIVE ARENA
              </span>
              <span className="text-[8px] font-mono text-white/70 bg-black/50 px-1.5 py-0.5 rounded border border-white/5">
                {activeStream === 0 ? 'AI Safety' : 'Mars Colony'}
              </span>
            </div>

            {/* Video */}
            <div className="relative w-full aspect-[16/9] bg-black">
              <AnimatePresence mode="wait">
                {activeStream === 0 ? (
                  <motion.video
                    key="stream1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    src={debate1Vid}
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-90 block"
                  />
                ) : (
                  <motion.video
                    key="stream2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    src={debate2Vid}
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-90 block"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Bar */}
            <div className="p-2.5 bg-brand-card/90 border-t border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span className="text-[9px] font-display font-bold text-white">
                  {activeStream === 0 ? 'PROP vs OPP' : 'PHILOSOPHY'}
                </span>
              </div>
              <span className="text-[8px] font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-1.5 py-0.5 rounded">
                98% Logic
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-12 grid grid-cols-12 gap-8 items-center z-10 w-full flex-1 py-8">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-6 flex flex-col gap-6 text-left"
          style={{ y: yParallaxSlow }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center self-start">
            <span className="glass-panel px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-brand-cyan uppercase border border-brand-cyan/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] flex items-center gap-2">
              <Flame size={14} className="text-orange-400" />
              Launching Soon
            </span>
          </motion.div>

          <h1 className="text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
            <span className="block overflow-hidden pb-0.5">
              <motion.span variants={lineVariants} className="block">Your Opinion</motion.span>
            </span>
            <span className="block overflow-hidden pb-0.5">
              <motion.span variants={lineVariants} className="block">Deserves a</motion.span>
            </span>
            <span className="block overflow-hidden pb-0.5 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              <motion.span variants={lineVariants} className="block">Debate.</motion.span>
            </span>
          </h1>

          <motion.p variants={itemVariants} className="text-lg text-white/70 max-w-xl font-sans leading-relaxed">
            {BRAND_CONFIG.name} is a debate-first platform where different perspectives meet through structured live discussions, recorded debates, and intelligent arguments.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-bg font-bold font-display rounded-full shadow-[0_0_25px_rgba(59,130,246,0.3)] flex items-center gap-2 uppercase tracking-wider text-xs"
            >
              Join Waitlist <ArrowRight size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('vision')}
              className="px-8 py-4 glass-panel text-white font-semibold font-sans rounded-full border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-sm"
            >
              Explore Vision
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Video Showcase */}
        <motion.div
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          className="col-span-6 relative w-full flex flex-col items-center justify-center"
        >
          <div className="relative w-full max-w-[560px]">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

            {/* Switcher Pills */}
            <div className="flex items-center justify-center gap-2 mb-3 z-30 relative">
              <button
                onClick={() => setActiveStream(0)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-bold transition-all flex items-center gap-1.5 ${
                  activeStream === 0
                    ? 'bg-brand-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-white/20'
                    : 'glass-panel text-white/50 hover:text-white border border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                Live Arena #1
              </button>
              <button
                onClick={() => setActiveStream(1)}
                className={`px-3 py-1.5 rounded-full text-xs font-display font-bold transition-all flex items-center gap-1.5 ${
                  activeStream === 1
                    ? 'bg-brand-cyan text-brand-bg shadow-[0_0_15px_rgba(34,211,238,0.5)] border border-white/20'
                    : 'glass-panel text-white/50 hover:text-white border border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                Live Arena #2
              </button>
            </div>

            {/* Floating Video Card */}
            <motion.div
              animate={{ translateY: [-4, 4, -4], rotateZ: [-0.5, 0.5, -0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full rounded-3xl overflow-hidden glass-panel border border-white/10 glow-cyan shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20 flex justify-between items-center">
                <span className="bg-red-500/20 text-red-400 border border-red-500/40 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" /> LIVE ARENA
                </span>
                <span className="text-[10px] font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded-md border border-white/5">
                  {activeStream === 0 ? 'AI Safety Regulation' : 'Mars Colonization'}
                </span>
              </div>

              <div className="relative w-full aspect-[16/10] bg-black">
                <AnimatePresence mode="wait">
                  {activeStream === 0 ? (
                    <motion.video key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} src={debate1Vid} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 block" />
                  ) : (
                    <motion.video key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} src={debate2Vid} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 block" />
                  )}
                </AnimatePresence>
              </div>

              <div className="p-4 bg-brand-card/90 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                  <span className="text-xs font-display font-bold text-white">
                    {activeStream === 0 ? 'PROPOSITION vs OPPOSITION' : 'PHILOSOPHY DEBATE'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded">
                  98% Logic Score
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="w-full border-y border-white/[0.06] bg-brand-secondary py-4 overflow-hidden z-10 mt-4 sm:mt-6 relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-brand-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-brand-bg to-transparent z-20 pointer-events-none" />
        <div className="flex whitespace-nowrap">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-8 sm:gap-12 text-[10px] sm:text-sm font-display font-bold tracking-widest text-white/50 uppercase select-none">
            {MARQUEE_TOPICS.concat(MARQUEE_TOPICS).map((topic, index) => (
              <span key={index} className="flex items-center gap-2 sm:gap-3 hover:text-brand-cyan transition-colors duration-300">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan" />
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
      `}</style>
    </section>
  );
}
