import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, Eye, Calendar, Volume2, Maximize, Pause, ThumbsUp } from 'lucide-react';
import { RECORDED_DEBATES } from '../config';

export default function RecordedDebates() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mockScoreA, setMockScoreA] = useState(0);
  const [mockScoreB, setMockScoreB] = useState(0);
  const [userVoted, setUserVoted] = useState(null); // 'A' or 'B'

  const openPlayer = (debate) => {
    setActiveVideo(debate);
    setIsPlaying(true);
    setMockScoreA(debate.speakerA.score);
    setMockScoreB(debate.speakerB.score);
    setUserVoted(null);
  };

  const closePlayer = () => {
    setActiveVideo(null);
  };

  const handleVote = (side) => {
    if (userVoted) return; // Allow voting once per modal open
    setUserVoted(side);
    if (side === 'A') {
      setMockScoreA(prev => prev + 1);
    } else {
      setMockScoreB(prev => prev + 1);
    }
  };

  return (
    <section
      id="recorded"
      className="relative py-24 md:py-36 bg-brand-secondary/20 overflow-hidden"
    >
      {/* Grid Pattern and Blur Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] top-1/3 left-0 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] rounded-full bg-brand-cyan/5 blur-[120px] bottom-1/3 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
            // VOICE ARCHIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
            Watch Recorded Debates
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
          <p className="text-white/60 font-sans text-sm sm:text-base max-w-xl leading-relaxed mt-2">
            Revisit legendary dialectical battles. Analyze arguments, track reputation shifts, and learn from structured reasoning.
          </p>
        </div>

        {/* Debates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECORDED_DEBATES.map((debate) => (
            <motion.div
              key={debate.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col h-full rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-white/15 transition-all duration-300 shadow-xl"
            >

              {/* Card Media Preview (Abstract Gradient with text) */}
              <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center select-none">
                <div className={`absolute inset-0 bg-gradient-to-tr ${debate.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <div className="absolute w-20 h-20 rounded-full bg-white/5 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Visual Play Button Overlay */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 group-hover:bg-brand-cyan group-hover:text-brand-bg border border-white/20 group-hover:border-transparent flex items-center justify-center text-white transition-all duration-300 shadow-lg">
                  <Play size={18} fill="currentColor" className="ml-0.5" />
                </div>

                {/* Category tag */}
                <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-[10px] text-white/90 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-white/10 font-display">
                  {debate.category}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-grow gap-4 text-left">
                <h3 className="text-base sm:text-lg font-display font-bold leading-snug text-white/90 group-hover:text-brand-cyan transition-colors line-clamp-2">
                  {debate.title}
                </h3>

                {/* Status Stats Icons */}
                <div className="flex items-center gap-4 text-[11px] text-white/40 font-sans mt-auto">
                  <span className="flex items-center gap-1"><Clock size={12} /> {debate.duration}</span>
                  <span className="flex items-center gap-1"><Eye size={12} /> {debate.views}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {debate.date}</span>
                </div>
              </div>

              {/* Watch CTA Button */}
              <div className="px-6 pb-6 pt-0 text-left">
                <button
                  onClick={() => openPlayer(debate)}
                  className="w-full py-3 bg-white/[0.03] hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-cyan hover:text-brand-bg border border-white/5 hover:border-transparent rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Watch Replay
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Custom Video Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={closePlayer}
                className="absolute top-4 right-4 z-40 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white p-2 rounded-full border border-white/10 backdrop-blur-md transition-all"
                aria-label="Close Player"
              >
                <X size={18} />
              </button>

              {/* Main Player Frame */}
              <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                {isPlaying ? (
                  <video
                    src={activeVideo.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="absolute inset-0 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `linear-gradient(to tr, ${activeVideo.gradient}44, #000)` }}>
                    <Play size={48} className="text-white/60" />
                  </div>
                )}

                {/* Simulated Custom Overlay Player Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-3">
                  {/* Progress Line */}
                  <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden relative cursor-pointer group/progress">
                    <div className="bg-brand-cyan h-full w-[45%]" />
                    <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white scale-0 group-hover/progress:scale-100 transition-transform" />
                  </div>

                  {/* Controls */}
                  <div className="flex justify-between items-center text-white/80 text-xs">
                    <div className="flex items-center gap-4">
                      <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <span className="font-sans">12:35 / 31:40</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 hover:text-white">
                        <Volume2 size={16} />
                        <span className="w-12 h-1 bg-white/40 rounded-full inline-block relative"><span className="bg-white h-full w-3/4 absolute left-0" /></span>
                      </div>
                      <button className="hover:text-white">
                        <Maximize size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Player Metadata Panel & Dialectics Live Voting */}
              <div className="p-6 md:p-8 bg-brand-secondary/95 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Topic Info */}
                <div className="md:col-span-2 flex flex-col gap-2">
                  <span className="text-[10px] text-brand-cyan font-bold tracking-widest uppercase font-sans">
                    // NOW STREAMING REPLAY
                  </span>
                  <h4 className="text-lg font-display font-bold text-white leading-snug">
                    {activeVideo.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-white/50 mt-1 font-sans">
                    <span className="bg-white/5 border border-white/5 px-2 py-0.5 rounded text-[10px] uppercase font-bold text-white/80">{activeVideo.category}</span>
                    <span>{activeVideo.views}</span>
                  </div>
                </div>

                {/* Dialectic Voting UI Card */}
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col justify-between gap-3">
                  <p className="text-[10px] font-display font-bold uppercase tracking-wider text-white/60">
                    Judge the Dialectics
                  </p>

                  {/* Speakers and Scores buttons */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleVote('A')}
                      className={`flex justify-between items-center px-3 py-2 rounded-lg border text-xs font-medium transition-all ${userVoted === 'A'
                        ? 'bg-brand-blue/20 border-brand-blue text-white font-bold'
                        : userVoted
                          ? 'bg-transparent border-white/5 text-white/30 cursor-not-allowed'
                          : 'bg-white/[0.02] border-white/5 hover:border-brand-blue text-white/70'
                        }`}
                    >
                      <span className="truncate max-w-[100px]">{activeVideo.speakerA.name}</span>
                      <span className="flex items-center gap-1.5 font-bold font-display">
                        {mockScoreA} <ThumbsUp size={10} />
                      </span>
                    </button>

                    <button
                      onClick={() => handleVote('B')}
                      className={`flex justify-between items-center px-3 py-2 rounded-lg border text-xs font-medium transition-all ${userVoted === 'B'
                        ? 'bg-brand-cyan/20 border-brand-cyan text-white font-bold'
                        : userVoted
                          ? 'bg-transparent border-white/5 text-white/30 cursor-not-allowed'
                          : 'bg-white/[0.02] border-white/5 hover:border-brand-cyan text-white/70'
                        }`}
                    >
                      <span className="truncate max-w-[100px]">{activeVideo.speakerB.name}</span>
                      <span className="flex items-center gap-1.5 font-bold font-display">
                        {mockScoreB} <ThumbsUp size={10} />
                      </span>
                    </button>
                  </div>

                  {userVoted && (
                    <p className="text-[9px] text-brand-cyan font-semibold text-center animate-pulse">
                      Vote submitted. Credibility updated.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
