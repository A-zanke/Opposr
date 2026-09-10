import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Flame, Info, Zap, Users, Clock } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import debate1Vid from '../assets/debate1.mp4';
import debate2Vid from '../assets/debate2.mp4';

// Section fade-up variant
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

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

  const features = [
    { icon: Zap, title: 'Speech Timer', desc: 'Strict speech-turn protocol keeps arguments crisp' },
    { icon: Users, title: 'Live Jury', desc: 'Audience casts votes on logic & credibility in real time' },
    { icon: Clock, title: 'Structured Format', desc: 'Every debate follows a proven dialectic structure' },
  ];

  return (
    <section
      id="live"
      className="relative py-16 sm:py-24 md:py-36 bg-brand-bg overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-30" />
      <div className="absolute w-[500px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] top-1/4 right-0 pointer-events-none" />
      <div className="absolute w-[500px] h-[300px] rounded-full bg-brand-cyan/5 blur-[120px] bottom-1/4 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10 w-full">

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col lg:hidden gap-6">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-3"
          >
            <motion.span variants={itemUp} className="text-[10px] font-semibold tracking-widest text-brand-cyan uppercase font-sans">
              // REAL-TIME SYNAPSE
            </motion.span>
            <motion.h2 variants={itemUp} className="text-3xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Don't Just Watch.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Take the Floor.
              </span>
            </motion.h2>
            <motion.div variants={itemUp} className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
            <motion.p variants={itemUp} className="text-sm text-white/65 font-sans leading-relaxed">
              Step into live dialectics. Watch verified leaders debate crucial topics with a structured timing system — or request the floor yourself.
            </motion.p>
          </motion.div>

          {/* Feature Cards - mobile: compact horizontal pills */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-2.5"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={itemUp}
                className="flex items-start gap-3 p-3.5 rounded-2xl glass-panel border border-white/5 hover:border-brand-cyan/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
                  <f.icon size={15} />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white">{f.title}</h4>
                  <p className="text-[11px] text-white/55 font-sans mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-2xl"
          >
            <Info className="text-brand-cyan w-4 h-4 shrink-0" />
            <p className="text-[11px] text-white/50 leading-relaxed font-sans">
              Our timing system automatically silences interruptions — each participant gets undivided spotlight.
            </p>
          </motion.div>

        </div>


        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="col-span-5 flex flex-col gap-6 text-left"
          >
            <motion.span variants={itemUp} className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
              // REAL-TIME SYNAPSE
            </motion.span>
            <motion.h2 variants={itemUp} className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Don't Just Watch.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Take the Floor.
              </span>
            </motion.h2>
            <motion.div variants={itemUp} className="w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
            <motion.p variants={itemUp} className="text-lg text-white/70 font-sans leading-relaxed">
              Step into the future of live dialectics. Watch verified leaders argue crucial topics in real-time with a structured timing system that keeps arguments concise and productive.
            </motion.p>
            <motion.p variants={itemUp} className="text-base text-white/60 font-sans leading-relaxed">
              As a spectator, cast your vote on key claims, review source citations, or request the floor to present your counter-thesis directly to the jury.
            </motion.p>

            <motion.div variants={itemUp} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
              <Info className="text-brand-cyan w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-xs text-white/50 leading-relaxed font-sans">
                Our timing system automatically silences interruptions, providing each participant with undivided spotlight to state their logic.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Video Showcase */}
          <div className="col-span-7 relative h-[580px] flex items-center justify-center">
            <div className="relative w-full h-full">
              
              {/* VIDEO CARD 1 (Top Left) */}
              <motion.div
                initial={{ x: -40, y: -20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, zIndex: 30, transition: { duration: 0.3 } }}
                className="absolute z-10 left-4 top-8 w-[350px] aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 glow-blue shadow-2xl group"
              >
                {!video1Error ? (
                  <video src={debate1Vid} className="w-full h-full object-cover" autoPlay muted loop playsInline onError={() => setVideo1Error(true)} />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-brand-blue/30 via-slate-900 to-black flex flex-col items-center justify-center p-6 text-center">
                    <Radio className="text-brand-blue w-10 h-10 mb-2 animate-pulse" />
                    <p className="text-sm font-display font-bold text-white">AI Safety Regulation</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <span className="bg-red-500 text-white font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> LIVE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                  {renderWaveform(8, 1.2)}
                </div>
              </motion.div>

              {/* VIDEO CARD 2 (Bottom Right) */}
              <motion.div
                initial={{ x: 40, y: 20, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, zIndex: 30, transition: { duration: 0.3 } }}
                className="absolute z-20 right-4 bottom-8 w-[350px] aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 glow-cyan shadow-2xl group"
              >
                {!video2Error ? (
                  <video src={debate2Vid} className="w-full h-full object-cover" autoPlay muted loop playsInline onError={() => setVideo2Error(true)} />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-brand-cyan/20 via-slate-900 to-black flex flex-col items-center justify-center p-6 text-center">
                    <Radio className="text-brand-cyan w-10 h-10 mb-2 animate-pulse" />
                    <p className="text-sm font-display font-bold text-white">Mars Colonization Strategy</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <span className="bg-red-500 text-white font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" /> LIVE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                  {renderWaveform(10, 0.8)}
                </div>
              </motion.div>

              {/* Center floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 glass-panel rounded-xl border border-white/10 shadow-lg flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
                <span className="text-[10px] font-display font-bold tracking-wider text-white uppercase">
                  Trending Discussion
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
