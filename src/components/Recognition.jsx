import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RECOGNITIONS } from '../config';

export default function Recognition() {
  return (
    <section
      className="relative py-24 md:py-36 bg-brand-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[500px] h-[300px] bg-brand-cyan/5 blur-[120px] top-1/2 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-left flex flex-col gap-4 mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase font-sans">
            // EDITORIAL ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
            Great Arguments<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Deserve Recognition.
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
          <p className="text-white/60 font-sans text-sm sm:text-base max-w-xl leading-relaxed mt-2">
            Conceptual highlights celebrating dialectic brilliance, empirical integrity, and constructive discourse.
          </p>
        </div>

        {/* Magazine-Inspired Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {RECOGNITIONS.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer p-8 rounded-2xl glass-panel-light border border-white/5 hover:border-white/15 hover:bg-white/[0.01] transition-all duration-500 flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-brand-blue/5 blur-xl group-hover:bg-brand-cyan/10 transition-colors duration-500 pointer-events-none" />

              <div className="flex flex-col gap-6">
                {/* Card Top Row: Issue details */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-medium">
                    OPPSR // MAG_ISSUE_01
                  </span>
                  
                  <span className="bg-white/[0.04] border border-white/10 text-[9px] text-white/80 font-bold uppercase px-2.5 py-0.5 rounded-full tracking-wider font-display">
                    {item.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold text-brand-cyan font-sans uppercase tracking-wider">
                    {item.title}
                  </span>
                  <h3 className="text-xl font-display font-extrabold text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                    {item.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50 font-sans leading-relaxed group-hover:text-white/70 transition-colors mt-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Action Indicator */}
              <div className="flex items-center gap-2 text-white/40 group-hover:text-brand-cyan transition-all mt-8 pt-4 border-t border-white/5 font-sans font-bold text-xs uppercase tracking-widest select-none">
                Read Synopsis
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
