import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon } from './BrandIcons';
import { Quote, Star } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

// Automatically resolve any image named fd (fd.png, fd.jpg, fd.jpeg, fd.webp, etc.) in assets
const fdImages = import.meta.glob('../assets/fd.*', { eager: true, import: 'default' });
const fdImg = Object.values(fdImages)[0] || '/src/assets/fd.png';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

const photoVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function Founder() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="founder"
      className="relative py-14 sm:py-24 md:py-36 bg-brand-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] bg-brand-blue/5 blur-[120px] top-1/2 left-0 pointer-events-none" />

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10 w-full">

        {/* ── MOBILE LAYOUT (content first, then image) ── */}
        <div className="flex flex-col lg:hidden gap-6">
          
          {/* 1. Text Content — FIRST on mobile */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-4"
          >
            <motion.span variants={itemUp} className="text-[10px] font-semibold tracking-widest text-brand-cyan uppercase font-sans">
              // THE CREATIVE GENESIS
            </motion.span>
            <motion.h2 variants={itemUp} className="text-3xl font-display font-extrabold tracking-tight text-white leading-tight">
              Meet The Founder
            </motion.h2>
            <motion.div variants={itemUp} className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />

            {/* Quote */}
            <motion.div variants={itemUp} className="relative pl-4 border-l-2 border-brand-blue">
              <Quote className="w-4 h-4 text-brand-blue/50 mb-1" />
              <p className="text-sm font-display font-medium italic text-white/90 leading-relaxed">
                "OPPOSR was created with a simple belief — disagreement should create better understanding, not division."
              </p>
            </motion.div>

            <motion.div variants={itemUp} className="flex flex-col gap-2.5 text-white/65 font-sans text-sm leading-relaxed">
              <p>
                As an engineer and debate enthusiast, I watched public squares become platforms for noise. The issue isn't disagreement — it's platforms that monetize anger instead of structured logic.
              </p>
              <p>
                <strong className="text-white">OPPOSR</strong> introduces constraints, speech-timers, active source citations, and jury voting — returning dialectics to its core: the shared pursuit of truth.
              </p>
            </motion.div>

            {/* Founder Name & Socials */}
            <motion.div variants={itemUp} className="flex flex-row justify-between items-center gap-4 border-t border-white/5 pt-4">
              <div>
                <h4 className="font-display font-bold text-white text-lg">Sufiyan</h4>
                <p className="text-[10px] text-brand-cyan mt-0.5 font-sans uppercase tracking-widest">Founder & Creator</p>
              </div>
              <div className="flex items-center gap-2.5">
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
                      className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/60 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* 2. Photo — SECOND on mobile */}
          <motion.div
            variants={photoVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[280px]">
              {/* Decorative glow ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-blue/20 via-transparent to-brand-cyan/20 blur-xl pointer-events-none" />
              
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl group bg-brand-secondary/40">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2"
                >
                  <div>
                    <p className="text-[10px] font-display font-bold text-white">Sufiyan Shaikh</p>
                    <p className="text-[8px] text-brand-cyan font-sans tracking-widest">FOUNDER & CREATOR</p>
                  </div>
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center">

          {/* Portrait Showcase — LEFT on desktop */}
          <div className="col-span-5 flex justify-center">
            <motion.div
              variants={photoVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 glow-cyan shadow-2xl group bg-brand-secondary/40"
            >
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Founder Manifesto — RIGHT on desktop */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="col-span-7 flex flex-col gap-6 text-left"
          >
            <div className="flex flex-col gap-2.5">
              <motion.span variants={itemUp} className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
                // THE CREATIVE GENESIS
              </motion.span>
              <motion.h2 variants={itemUp} className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                Meet The Founder
              </motion.h2>
              <motion.div variants={itemUp} className="w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" />
            </div>

            <motion.div variants={itemUp} className="relative pl-6 border-l-2 border-brand-blue">
              <p className="text-xl font-display font-medium italic text-white/90 leading-relaxed">
                "OPPOSR was created with a simple belief — disagreement should create better understanding, not division. Through respectful debate and meaningful reasoning, ideas become stronger."
              </p>
            </motion.div>

            <motion.div variants={itemUp} className="flex flex-col gap-3 text-white/70 font-sans text-base leading-relaxed">
              <p>
                As an engineer and debate enthusiast, I watched public squares become platforms for noise. I realized that the issue isn't that people disagree; it's that we have built platforms that monetize anger instead of structured logic.
              </p>
              <p>
                <strong className="text-white">OPPOSR</strong> is our solution. By introducing constraints, speech-timers, active source citations, and jury voting, we're returning dialectics to its core: the shared pursuit of truth.
              </p>
            </motion.div>

            <motion.div variants={itemUp} className="flex flex-row justify-between items-center gap-4 border-t border-white/5 pt-5">
              <div>
                <h4 className="font-display font-bold text-white text-lg">Sufiyan</h4>
                <p className="text-xs text-brand-cyan mt-0.5 font-sans uppercase tracking-widest">Founder & Creator</p>
              </div>
              <div className="flex items-center gap-2.5">
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
