import React from 'react';
import { motion } from 'framer-motion';
import { OPPOSR_FEATURES } from '../config';
import logoImg from '../assets/logo.png';

export default function WhyOpposr() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="features"
      className="relative py-24 md:py-36 bg-brand-bg overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] top-1/4 left-1/4 pointer-events-none animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] bottom-1/4 right-1/4 pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20 md:mb-28">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase font-sans">
            // PLATFORM VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
            Why OPPOSR?
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
          <p className="text-white/60 font-sans text-sm sm:text-base max-w-xl leading-relaxed mt-2">
            Re-architecting public discussions through intelligence, confidence, and community structure.
          </p>
        </div>

        {/* Feature Layout with Left Logo Brand Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Brand Logo Card */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl p-8 glass-panel border border-white/10 glow-blue overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl group"
            >
              {/* Background ambient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/15 via-transparent to-brand-cyan/15 pointer-events-none" />
              <div className="absolute w-44 h-44 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              
              {/* Logo Presentation Box */}
              <div className="relative z-10 w-36 h-36 md:w-44 md:h-44 rounded-2xl p-4 bg-brand-secondary/60 border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:border-brand-cyan/30 transition-all duration-500">
                <img 
                  src={logoImg} 
                  alt="OPPOSR Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Brand Name & Tagline */}
              <div className="relative z-10 mt-6 flex flex-col items-center gap-1.5">
                <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-widest text-white uppercase group-hover:text-brand-cyan transition-colors">
                  OPPOSR
                </h3>
                <div className="w-10 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
                <p className="text-xs text-white/50 font-sans tracking-wider uppercase mt-1 font-medium">
                  Dialectic Debate Protocol
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Features List Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2"
          >
            {OPPOSR_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-5 rounded-2xl glass-panel-light border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 text-left relative overflow-hidden group"
              >
                {/* Alternating Indicator dot */}
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-brand-blue to-blue-600' : 'from-brand-cyan to-cyan-500'
                }`} />

                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle line background */}
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-blue to-brand-cyan scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
