import React from 'react';

export default function TrustIdea() {
  return (
    <section
      id="vision"
      className="relative py-24 md:py-36 bg-brand-bg overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Typography */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase font-sans">
              // THE ANTITHESIS TO CHAOS
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1] text-white">
              Everyone Has an Opinion.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Few Places Have Better Conversations.
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
          </div>

          {/* Right Column: Deep Argument Statement */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
              Social platforms have turned public discourse into a shouting match. Algorithms reward rage, nuance is lost, and echo chambers isolate our thoughts. 
            </p>
            <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
              <strong>OPPOSR</strong> is designed differently. We believe that intelligence emerges from conflict. By grouping opposing views into structured, timed live interactions, we elevate disagreements into refined logic and mutual recognition. Here, ideas are challenged, not people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
