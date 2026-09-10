import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { TIMELINE_STEPS } from '../config';

// Dynamic Icon Loader Helper
const TimelineIcon = ({ name, className }) => {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } }
};

const headerUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.94 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-14 sm:py-24 md:py-36 bg-brand-secondary/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Animated accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-16 md:mb-20"
        >
          <motion.span variants={headerUp} className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
            // THE DIALECTIC JOURNEY
          </motion.span>
          <motion.h2 variants={headerUp} className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
            How Structured Debating Works
          </motion.h2>
          <motion.div variants={headerUp} className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
        </motion.div>

        {/* Timeline Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative"
        >
          {/* Connecting line for Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 pointer-events-none z-0">
            <svg className="w-full h-4 overflow-visible" fill="none">
              <motion.path
                d="M 0,2 H 800"
                stroke="url(#timeline-line-grad)"
                strokeWidth="2.5"
                strokeDasharray="12,12"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="timeline-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Timeline Cards */}
          {TIMELINE_STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                rotateY: idx % 2 === 0 ? 3 : -3,
                rotateX: 2,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative z-10 group cursor-pointer flex flex-col"
            >
              <div className="flex-grow p-3.5 sm:p-7 rounded-xl sm:rounded-2xl glass-panel border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col gap-2 sm:gap-5 text-left relative overflow-hidden shadow-lg">

                {/* Hover aura */}
                <div className={`absolute -right-12 -top-12 w-28 h-28 rounded-full bg-gradient-to-br ${step.glowColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`} />

                {/* Top bar accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                {/* Header Row */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl sm:text-5xl font-display font-extrabold text-white/10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-cyan transition-colors duration-300">
                    {step.id}
                  </span>
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300">
                    <TimelineIcon name={step.iconName} className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-[11px] sm:text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[9px] sm:text-sm text-white/55 font-sans leading-snug sm:leading-relaxed group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
