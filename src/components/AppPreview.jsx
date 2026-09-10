import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Radio, Search, Trophy, User, Zap, Shield, ThumbsUp, Flame, Award } from 'lucide-react';
import video1 from '../assets/debate1.mp4';
import video2 from '../assets/debate2.mp4';

export default function AppPreview() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [votesA, setVotesA] = useState(64);
  const [votesB, setVotesB] = useState(58);
  const screens = ['live', 'feed', 'ranking', 'profile'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="app-preview"
      className="relative py-24 md:py-36 bg-brand-bg overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] bg-brand-blue/5 blur-[130px] bottom-0 left-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Heading Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
              // DESIGN INTEGRITY
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              Engineered For<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Frictionless Dialectics.
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />

            <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
              We did away with the clutter of traditional social timelines. The <strong>OPPOSR</strong> mobile application is built from the ground up for focused, real-time structured debates.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {[
                { title: 'Zero Interruptions', desc: 'A strict speech-turn protocol ensures speakers state arguments fully without interruptions.' },
                { title: 'Peer Jury Panels', desc: 'Unbiased audience juries vote on logic and credibility, rather than emotional triggers.' },
                { title: 'Verified Profiles', desc: 'No bots or anonymous trolls. Real people standing by real claims.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start text-left p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-cyan shrink-0">
                    <Zap size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white/90">{item.title}</h4>
                    <p className="text-xs text-white/50 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Smartphone Device Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">

            {/* 3D Viewport container */}
            <div className="relative [perspective:1200px] py-6">

              {/* Radial Glow underneath the device */}
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-48 h-12 bg-brand-cyan/20 blur-2xl rounded-full scale-125 z-0" />

              {/* Phone Container */}
              <motion.div
                animate={{
                  rotateY: [-3, 3, -3],
                  rotateX: [4, 8, 4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-[300px] h-[610px] bg-[#0E0F14] border-[10px] border-[#1C1D24] rounded-[48px] shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Dynamic Island Screen Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-40 border border-white/10 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 absolute right-3" />
                </div>

                {/* Inner Screen viewport */}
                <div className="relative w-full h-full bg-brand-bg rounded-[36px] overflow-hidden flex flex-col justify-between pt-9 pb-3 px-3.5 border border-white/5 select-none">

                  {/* Screen Header */}
                  <div className="flex justify-between items-center pb-2 border-b border-white/5 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                      <span className="text-[10px] font-display font-extrabold tracking-widest text-white">OPPOSR</span>
                    </div>
                    <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-400 animate-ping" /> LIVE ARENA
                    </span>
                  </div>

                  {/* Screen Content Switcher */}
                  <div className="flex-grow flex flex-col overflow-hidden relative justify-center py-2">
                    <AnimatePresence mode="wait">
                      {currentScreen === 0 && (
                        <motion.div
                          key="live-arena"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-2.5 h-full justify-between"
                        >
                          {/* Video 1: Speaker A */}
                          <div className="relative w-full h-[148px] rounded-2xl overflow-hidden border border-brand-blue/30 bg-black/60 shadow-lg group">
                            <video
                              src={video1}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                            {/* Top info */}
                            <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
                              <span className="bg-brand-blue/80 backdrop-blur-md text-[8px] font-display font-bold text-white px-2 py-0.5 rounded-md uppercase tracking-wider">
                                Proposition
                              </span>
                              <span className="text-[8px] font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">
                                02:45
                              </span>
                            </div>

                            {/* Bottom info */}
                            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end z-10">
                              <div>
                                <h4 className="text-[10px] font-display font-bold text-white leading-none">Sarah Chen</h4>
                                <p className="text-[7px] text-brand-cyan font-sans mt-0.5">AI Architecture Lead</p>
                              </div>
                              <button
                                onClick={() => setVotesA(v => v + 1)}
                                className="flex items-center gap-1 bg-brand-blue/60 hover:bg-brand-blue border border-white/20 text-white text-[8px] font-bold px-2 py-0.5 rounded-full transition-all"
                              >
                                <ThumbsUp size={8} /> {votesA}
                              </button>
                            </div>
                          </div>

                          {/* VS Divider Bar */}
                          <div className="flex items-center justify-between px-2 py-1 bg-white/[0.03] border border-white/5 rounded-xl">
                            <span className="text-[8px] font-bold font-mono text-brand-blue">{votesA} pts</span>
                            <span className="text-[9px] font-extrabold font-display tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                              VS
                            </span>
                            <span className="text-[8px] font-bold font-mono text-brand-cyan">{votesB} pts</span>
                          </div>

                          {/* Video 2: Speaker B */}
                          <div className="relative w-full h-[148px] rounded-2xl overflow-hidden border border-brand-cyan/30 bg-black/60 shadow-lg group">
                            <video
                              src={video2}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                            {/* Top info */}
                            <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
                              <span className="bg-brand-cyan/80 backdrop-blur-md text-[8px] font-display font-bold text-brand-bg px-2 py-0.5 rounded-md uppercase tracking-wider">
                                Opposition
                              </span>
                              <span className="text-[8px] font-mono text-white/80 bg-black/50 px-1.5 py-0.5 rounded">
                                01:12
                              </span>
                            </div>

                            {/* Bottom info */}
                            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end z-10">
                              <div>
                                <h4 className="text-[10px] font-display font-bold text-white leading-none">Marcus Sterling</h4>
                                <p className="text-[7px] text-brand-cyan font-sans mt-0.5">Author & Theorist</p>
                              </div>
                              <button
                                onClick={() => setVotesB(v => v + 1)}
                                className="flex items-center gap-1 bg-brand-cyan/60 hover:bg-brand-cyan text-brand-bg text-[8px] font-bold px-2 py-0.5 rounded-full transition-all"
                              >
                                <ThumbsUp size={8} /> {votesB}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentScreen === 1 && (
                        <motion.div
                          key="feed-screen"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-2.5 h-full justify-between"
                        >
                          {/* Live Debate Card with Video 1 */}
                          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-2">
                            <div className="relative w-full h-24 rounded-lg overflow-hidden border border-white/5">
                              <video
                                src={video1}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                              />
                              <span className="absolute top-1.5 left-1.5 bg-black/60 text-[7px] font-bold text-brand-cyan px-1.5 py-0.5 rounded">
                                TECH ARENA
                              </span>
                            </div>
                            <h4 className="text-[9px] font-display font-bold text-white leading-tight">
                              AI vs. Creative Writers
                            </h4>
                            <div className="flex justify-between text-[7px] text-white/50">
                              <span>3.2k watching</span>
                              <span className="text-brand-cyan font-semibold">98% Soundness</span>
                            </div>
                          </div>

                          {/* Live Debate Card with Video 2 */}
                          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-2">
                            <div className="relative w-full h-24 rounded-lg overflow-hidden border border-white/5">
                              <video
                                src={video2}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                              />
                              <span className="absolute top-1.5 left-1.5 bg-black/60 text-[7px] font-bold text-brand-cyan px-1.5 py-0.5 rounded">
                                PHILOSOPHY
                              </span>
                            </div>
                            <h4 className="text-[9px] font-display font-bold text-white leading-tight">
                              Ethics of Digital Identity
                            </h4>
                            <div className="flex justify-between text-[7px] text-white/50">
                              <span>1.8k watching</span>
                              <span className="text-brand-cyan font-semibold">94% Soundness</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentScreen === 2 && (
                        <motion.div
                          key="ranking-screen"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3 h-full justify-start mt-2"
                        >
                          <span className="text-[10px] font-display font-bold text-white/70">Credibility Leaderboard</span>

                          <div className="flex flex-col gap-2">
                            {[
                              { r: '01', n: 'Sufiyan', s: '985', badge: 'Top Debater' },
                              { r: '02', n: 'Ashish', s: '968', badge: 'Logic Master' },
                              { r: '03', n: 'Akshay', s: '954', badge: 'Top Jury' },
                            ].map((user, idx) => (
                              <div key={idx} className="flex justify-between items-center p-2.5 rounded-xl border border-white/5 bg-white/[0.02]">
                                <div className="flex items-center gap-2">
                                  <span className="text-[9px] font-bold text-white/40">#{user.r}</span>
                                  <div>
                                    <p className="text-[9px] font-display font-semibold text-white leading-tight">{user.n}</p>
                                    <span className="text-[7px] text-brand-cyan">{user.badge}</span>
                                  </div>
                                </div>
                                <span className="text-[9px] font-mono text-brand-cyan font-bold">{user.s} pts</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {currentScreen === 3 && (
                        <motion.div
                          key="profile-screen"
                          initial={{ opacity: 0, y: -15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3.5 h-full justify-start mt-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center font-display font-bold text-xs text-brand-bg shadow-md">
                              SS
                            </div>
                            <div>
                              <h4 className="text-xs font-display font-bold text-white">Sufiyan</h4>
                              <p className="text-[7px] text-brand-cyan uppercase tracking-widest font-mono">Verified Creator</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xl">
                              <span className="text-[7px] text-white/40">Debates Won</span>
                              <p className="text-sm font-display font-bold text-brand-cyan">42</p>
                            </div>
                            <div className="p-2 bg-white/[0.02] border border-white/5 rounded-xl">
                              <span className="text-[7px] text-white/40">Reputation</span>
                              <p className="text-sm font-display font-bold text-brand-blue">99%</p>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
                            <p className="text-[7px] text-brand-cyan font-semibold flex items-center gap-1">
                              <Shield size={9} /> Verified Dialectic Protocol
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* App Bottom Navigation Bar */}
                  <div className="flex justify-between items-center border-t border-white/5 pt-2.5 mt-auto relative z-30 bg-brand-bg px-2 shrink-0">
                    {[
                      { icon: Radio, index: 0 },
                      { icon: Home, index: 1 },
                      { icon: Trophy, index: 2 },
                      { icon: User, index: 3 }
                    ].map((btn, index) => {
                      const Icon = btn.icon;
                      const active = currentScreen === btn.index;
                      return (
                        <button
                          key={index}
                          onClick={() => setCurrentScreen(btn.index)}
                          className={`p-1.5 rounded-lg transition-colors duration-300 ${active ? 'text-brand-cyan bg-white/5' : 'text-white/40 hover:text-white/80'
                            }`}
                          aria-label={`App Screen ${btn.index}`}
                        >
                          <Icon size={14} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
