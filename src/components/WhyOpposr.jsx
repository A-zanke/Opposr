import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Zap, Brain, Award, Users } from 'lucide-react';
import { OPPOSR_FEATURES } from '../config';
import logoImg from '../assets/logo.png';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Slide from right (lock comes in from right, goes back when scroll up)
const lockSlideRight = {
  hidden: { x: 80, opacity: 0, rotateY: 15 },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

// Alternating left/right for feature cards
const featureVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
    y: 10,
    scale: 0.95
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: (index % 3) * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const headerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function WhyOpposr() {
  return (
    <section
      id="features"
      className="relative py-14 sm:py-24 md:py-36 bg-brand-bg overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] top-1/4 left-1/4 pointer-events-none animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] bottom-1/4 right-1/4 pointer-events-none animate-pulse" />

      {/* Animated horizontal accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-16 md:mb-24"
        >
          <motion.span variants={headerVariant} className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-blue uppercase font-sans">
            // PLATFORM VALUE
          </motion.span>
          <motion.h2 variants={headerVariant} className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
            Why OPPOSR?
          </motion.h2>
          <motion.div variants={headerVariant} className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
          <motion.p variants={headerVariant} className="text-white/60 font-sans text-xs sm:text-base max-w-xl leading-relaxed">
            Re-architecting public discussions through intelligence, confidence, and community structure.
          </motion.p>
        </motion.div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col lg:hidden gap-4">
          
          {/* Mobile Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel border border-brand-cyan/20 shadow-lg self-start"
          >
            <img src={logoImg} alt="OPPOSR Logo" className="w-7 h-7 object-contain filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <span className="text-sm font-display font-extrabold tracking-widest text-white uppercase">OPPOSR PROTOCOL</span>
          </motion.div>

          {/* Lock animation - slides in from right on mobile */}
          <motion.div
            variants={lockSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 border border-brand-cyan/20 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center shrink-0"
            >
              <Lock className="w-5 h-5 text-brand-cyan" />
            </motion.div>
            <div>
              <p className="text-sm font-display font-bold text-white">Dialectic Protocol</p>
              <p className="text-[11px] text-white/55 font-sans mt-0.5">Structured • Verified • Unbiased</p>
            </div>
          </motion.div>

          {/* Feature cards - 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-2.5">
            {OPPOSR_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={featureVariants}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col gap-2 p-3 rounded-2xl glass-panel-light border border-white/5 hover:border-white/10 transition-all duration-300 text-left relative overflow-hidden group"
              >
                {/* Color accent top line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-brand-blue to-blue-600' : 'from-brand-cyan to-cyan-500'
                } scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`} />

                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-brand-blue to-blue-600' : 'from-brand-cyan to-cyan-500'
                }`} />
                <h4 className="text-[11px] font-display font-bold text-white group-hover:text-brand-cyan transition-colors leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[10px] text-white/55 font-sans leading-snug">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Brand Logo Card */}
          <div className="col-span-5 flex justify-center">
            <motion.div
              variants={lockSlideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-full max-w-[420px] aspect-square py-12 px-8 rounded-3xl glass-panel border border-white/10 glow-blue overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/15 via-transparent to-brand-cyan/15 pointer-events-none" />
              <div className="absolute w-44 h-44 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              
              {/* Logo */}
              <div className="relative z-10 w-44 h-44 rounded-2xl p-4 bg-brand-secondary/60 border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:border-brand-cyan/30 transition-all duration-500">
                <img src={logoImg} alt="OPPOSR Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Lock icon - slides from right with animation */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 mt-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20"
              >
                <motion.div
                  animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Lock className="w-4 h-4 text-brand-cyan" />
                </motion.div>
                <span className="text-xs font-display font-bold text-brand-cyan tracking-wider">DIALECTIC SECURED</span>
              </motion.div>

              <div className="relative z-10 mt-4 flex flex-col items-center gap-1.5">
                <h3 className="text-3xl font-display font-extrabold tracking-widest text-white uppercase group-hover:text-brand-cyan transition-colors">
                  OPPOSR
                </h3>
                <div className="w-10 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                <p className="text-xs text-white/50 font-sans tracking-wider uppercase mt-1">Dialectic Debate Protocol</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Features */}
          <div className="col-span-7 flex flex-col gap-4">
            {OPPOSR_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={featureVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-start gap-4 p-5 rounded-2xl glass-panel-light border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 text-left relative overflow-hidden group shadow-lg"
              >
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-brand-blue to-blue-600' : 'from-brand-cyan to-cyan-500'
                }`} />
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-lg font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/60 font-sans leading-relaxed group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-blue to-brand-cyan scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
