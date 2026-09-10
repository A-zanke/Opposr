import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Flame, Info } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import debate1Vid from '../assets/debate1.mp4';
import debate2Vid from '../assets/debate2.mp4';

export default function LiveExperience() {
  const [video1Error, setVideo1Error] = useState(false);
  const [video2Error, setVideo2Error] = useState(false);

  // Audio Equalizer Waveform Generator
  const renderWaveform = (count = 12, speedMultiplier = 1) => {
    return (
      <div className="flex items-end gap-[3px] h-6 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 backdrop-blur-md">
        {Array.from({ length: count }).map((_, i) => {
          const duration = 0.5 + Math.random() * 0.8;
          const delay = Math.random() * 0.5;
          return (
            <motion.span
              key={i}
              className="w-[2px] rounded-full bg-brand-cyan"
              style={{ height: '3px' }}
              animate={{ height: ['3px', '18px', '3px'] }}
              transition={{
                duration: duration * speedMultiplier,
                repeat: Infinity,
                delay: delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="live"
      className="relative py-24 md:py-36 bg-brand-bg overflow-hidden flex flex-col justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-30" />
      <div className="absolute w-[600px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] top-1/4 right-0 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] rounded-full bg-brand-cyan/5 blur-[120px] bottom-1/4 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
              // REAL-TIME SYNAPSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Don't Just Watch.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Take the Floor.
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
            <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
              Step into the future of live dialectics. Watch verified leaders argue crucial topics in real-time, complete with a structured timing system that keeps arguments concise and productive. 
            </p>
            <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
              As a spectator, you don't just sit back. Cast your vote on key claims, review source citations in real-time, or request the floor to present your counter-thesis directly to the jury.
            </p>

            <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl mt-4">
              <Info className="text-brand-cyan w-5 h-5 shrink-0" />
              <p className="text-xs text-white/50 leading-relaxed font-sans">
                Our timing system automatically silences interruptions, providing each participant with undivided spotlight to state their logic.
              </p>
            </div>
          </div>

          {/* Right Column: Floating Video Showcase */}
          <div className="lg:col-span-7 relative h-[480px] sm:h-[580px] flex items-center justify-center">
            
            {/* Desktop Overlapping Layout Container */}
            <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
              
              {/* VIDEO CARD 1 (Top Left / Background) */}
              <motion.div
                initial={{ x: -20, y: -20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, zIndex: 30, transition: { duration: 0.3 } }}
                className="relative sm:absolute z-10 sm:left-4 sm:top-8 w-full sm:w-[350px] aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 glow-blue shadow-2xl transition-all group"
              >
                {/* Fallback Graphic / Video Tag */}
                {!video1Error ? (
                  <video
                    src={debate1Vid}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={() => setVideo1Error(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-brand-blue/30 via-slate-900 to-black flex flex-col items-center justify-center p-6 text-center select-none relative">
                    {/* Glowing Mesh */}
                    <div className="absolute w-24 h-24 rounded-full bg-brand-blue/20 blur-xl pointer-events-none" />
                    <Radio className="text-brand-blue w-10 h-10 mb-2 animate-pulse" />
                    <p className="text-sm font-display font-bold text-white">AI Safety Regulation</p>
                    <p className="text-[10px] text-white/40 mt-1">Live Feed Pipeline</p>
                  </div>
                )}

                {/* Dark Gradient Overlay for Meta Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

                {/* Card Header overlays */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <span className="bg-red-500 text-white font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> LIVE
                  </span>
                  
                
                </div>

                {/* Card Footer overlays */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                  
                  {/* Waveform graphic */}
                  {renderWaveform(8, 1.2)}
                </div>
              </motion.div>

              {/* VIDEO CARD 2 (Bottom Right / Foreground) */}
              <motion.div
                initial={{ x: 20, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, zIndex: 30, transition: { duration: 0.3 } }}
                className="relative sm:absolute z-20 sm:right-4 sm:bottom-8 w-full sm:w-[350px] aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 glow-cyan shadow-2xl transition-all group"
              >
                {/* Fallback Graphic / Video Tag */}
                {!video2Error ? (
                  <video
                    src={debate2Vid}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={() => setVideo2Error(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-brand-cyan/20 via-slate-900 to-black flex flex-col items-center justify-center p-6 text-center select-none relative">
                    {/* Glowing Mesh */}
                    <div className="absolute w-24 h-24 rounded-full bg-brand-cyan/20 blur-xl pointer-events-none" />
                    <Radio className="text-brand-cyan w-10 h-10 mb-2 animate-pulse" />
                    <p className="text-sm font-display font-bold text-white">Mars Colonization Strategy</p>
                    <p className="text-[10px] text-white/40 mt-1">Live Feed Pipeline</p>
                  </div>
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

                {/* Card Header overlays */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <span className="bg-red-500 text-white font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> LIVE
                  </span>
                  
                  
                </div>

                {/* Card Footer overlays */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                  
                  {/* Waveform graphic */}
                  {renderWaveform(10, 0.8)}
                </div>
              </motion.div>

              {/* Floating Overlay Badge (Middle / Foreground) */}
              <div className="hidden sm:block absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 glass-panel rounded-xl border border-white/10 shadow-lg text-center flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
                <span className="text-[10px] font-display font-bold tracking-wider text-white uppercase">
                  Trending Discussion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
