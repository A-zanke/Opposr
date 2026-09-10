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

export default function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-36 bg-brand-secondary/30 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
            // THE DIALECTIC JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
            How Structured Debating Works
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
        </div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting SVG Path for Desktop (Horizontal) */}
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
              {/* Glass background block */}
              <div className="flex-grow p-8 rounded-2xl glass-panel border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col gap-6 text-left relative overflow-hidden group shadow-lg">

                {/* Background Hover Aura */}
                <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-gradient-to-br ${step.glowColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`} />

                {/* Header Row: ID and Icon */}
                <div className="flex justify-between items-center">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-white/10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-cyan transition-colors duration-300">
                    {step.id}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/70 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/5 transition-all duration-300 shadow-inner">
                    <TimelineIcon name={step.iconName} className="w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 font-sans leading-relaxed group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom border line animation */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
