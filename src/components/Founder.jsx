import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon } from './BrandIcons';
import { BRAND_CONFIG } from '../config';

// Automatically resolve any image named fd (fd.png, fd.jpg, fd.jpeg, fd.webp, etc.) in assets
const fdImages = import.meta.glob('../assets/fd.*', { eager: true, import: 'default' });
const fdImg = Object.values(fdImages)[0] || '/src/assets/fd.png';

export default function Founder() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="founder"
      className="relative py-24 md:py-36 bg-brand-bg overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] bg-brand-blue/5 blur-[120px] top-1/2 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 glow-cyan shadow-2xl group bg-brand-secondary/40"
            >
              {/* Founder Image fitting full block cleanly */}
              {!imageError ? (
                <img
                  src={fdImg}
                  alt="Sufiyan Shaikh - Founder & Creator"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-brand-secondary via-slate-900 to-black flex flex-col items-center justify-center p-8 select-none text-center relative">
                  <div className="absolute w-40 h-40 rounded-full bg-brand-cyan/20 blur-2xl pointer-events-none" />
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-brand-bg font-display font-extrabold text-3xl shadow-xl border border-white/20 mb-4 z-10">
                    SS
                  </div>
                  <h3 className="text-xl font-display font-bold text-white z-10">Sufiyan</h3>
                  <p className="text-xs text-brand-cyan font-sans uppercase tracking-widest mt-1 z-10">Founder & Creator</p>
                </div>
              )}

              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Founder's Manifesto */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
                // THE CREATIVE GENESIS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                Meet The Founder
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
            </div>

            {/* Quote container */}
            <div className="relative pl-6 border-l-2 border-brand-blue">
              <p className="text-lg sm:text-xl font-display font-medium italic text-white/90 leading-relaxed">
                "OPPOSR was created with a simple belief — disagreement should create better understanding, not division. Through respectful debate and meaningful reasoning, ideas become stronger."
              </p>
            </div>

            <div className="flex flex-col gap-4 text-white/70 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                As an engineer and debate enthusiast, I watched public squares become platforms for noise. I realized that the issue isn't that people disagree; it's that we have built platforms that monetize anger instead of structured logic.
              </p>
              <p>
                <strong>OPPOSR</strong> is our solution. By introducing constraints, speech-timers, active source citations, and jury voting, we're returning dialectics to its core: the shared pursuit of truth.
              </p>
            </div>

            {/* Founder details & Social Links */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-white/5 pt-8 mt-4">
              <div className="text-left">
                <h4 className="font-display font-bold text-white text-lg leading-tight">Sufiyan</h4>
                <p className="text-xs text-brand-cyan mt-1 font-sans uppercase tracking-widest font-medium">Founder & Creator</p>
              </div>

              {/* Social Buttons: Instagram and Facebook */}
              <div className="flex items-center gap-3">
                {[
                  { icon: InstagramIcon, href: 'https://www.instagram.com/its.opposr?utm_source=qr&igsh=MWltMXRzdXUybGR1Yw==', label: 'Instagram' },
                  { icon: FacebookIcon, href: '#', label: 'Facebook' },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/60 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
