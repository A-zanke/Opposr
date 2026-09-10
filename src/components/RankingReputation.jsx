import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Award, Star, CheckCircle, Scale } from 'lucide-react';
import { LEADERBOARD } from '../config';

// Hook for count-up animation
const AnimatedCounter = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [targetValue, duration]);

  return <>{count}</>;
};

export default function RankingReputation() {
  const sortedLeaderboard = [
    LEADERBOARD[1], // Rank 2 (Left)
    LEADERBOARD[0], // Rank 1 (Middle)
    LEADERBOARD[2], // Rank 3 (Right)
  ];

  return (
    <section
      id="ranking"
      className="relative py-24 md:py-36 bg-brand-secondary/30 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] bg-brand-blue/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-20">
          <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
            // DIALECTIC PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
            Don't Chase Followers.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Build Credibility.
            </span>
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
          <p className="text-white/60 font-sans text-sm sm:text-base max-w-xl leading-relaxed mt-2">
            Our algorithmic reputation metrics measure logical consistency, source citation accuracy, and debate decorum.
          </p>
        </div>

        {/* Podium Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto mt-12 md:mt-20">
          {sortedLeaderboard.map((user, index) => {
            const isRank1 = user.rank === '01';
            const isRank2 = user.rank === '02';
            
            // Adjust card height/order for stunning look
            const cardHeight = isRank1 
              ? 'h-[440px] md:h-[460px] border-brand-cyan/25 glow-cyan z-20 md:-translate-y-4' 
              : isRank2
              ? 'h-[380px] md:h-[400px] border-white/5 z-10'
              : 'h-[360px] md:h-[380px] border-white/5 z-10';

            return (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: isRank1 ? -16 : 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: isRank1 ? -24 : -8, transition: { duration: 0.3 } }}
                className={`relative flex flex-col justify-between p-8 rounded-2xl glass-panel border ${cardHeight} transition-all duration-300 text-left`}
              >
                {/* Background gradient shading */}
                <div className={`absolute inset-0 bg-gradient-to-t ${isRank1 ? 'from-brand-cyan/5 via-transparent to-brand-blue/5' : 'from-white/[0.01] to-transparent'} pointer-events-none rounded-2xl`} />

                {/* Rank indicator top pill */}
                <div className="flex justify-between items-center relative z-10">
                  <span className={`text-[10px] font-display font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                    isRank1 
                      ? 'bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan' 
                      : 'bg-white/5 border-white/10 text-white/50'
                  }`}>
                    Rank #{user.rank}
                  </span>
                  
                  {isRank1 ? (
                    <Award className="text-brand-cyan w-5 h-5 animate-pulse" />
                  ) : isRank2 ? (
                    <Star className="text-brand-blue w-5 h-5" />
                  ) : (
                    <Scale className="text-white/40 w-5 h-5" />
                  )}
                </div>

                {/* User Credentials Node */}
                <div className="flex flex-col gap-4 mt-6 relative z-10 flex-grow">
                  {/* Styled Avatar Circle */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${user.color} flex items-center justify-center font-display font-extrabold text-brand-bg text-lg shadow-lg relative`}>
                      {user.name.split(' ').map(n => n[0]).join('')}
                      {/* Flashing online marker */}
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-brand-bg" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{user.name}</h3>
                      <p className="text-[10px] text-white/40 font-sans tracking-wide mt-1 uppercase font-medium">{user.role}</p>
                    </div>
                  </div>

                  {/* Reputation badges */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.badges.map((badge, idx) => (
                      <span key={idx} className="bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md text-[9px] text-white/60 font-sans tracking-wide">
                        🛡️ {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Score Counter Footer */}
                <div className="border-t border-white/5 pt-6 mt-auto relative z-10">
                  <p className="text-[10px] text-white/40 font-sans uppercase tracking-widest font-medium">Debate Score</p>
                  <p className="text-3xl font-display font-extrabold text-white mt-1 flex items-baseline gap-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                      <AnimatedCounter targetValue={user.score} />
                    </span>
                    <span className="text-xs text-white/30 font-sans font-medium">pts</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conceptual Legal Disclaimer */}
        <div className="max-w-xl mx-auto mt-16 bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-center gap-3">
          <ShieldAlert className="text-brand-cyan w-5 h-5 shrink-0" />
          <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed font-sans text-left">
            <strong>Concept Note:</strong> Credibility Score is a simulated feature for the upcoming app release. All users, scores, and statistics depicted above represent architectural design drafts.
          </p>
        </div>
      </div>
    </section>
  );
}
