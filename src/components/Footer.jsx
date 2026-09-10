import React from 'react';
import { Globe, Mail } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon } from './BrandIcons';
import { BRAND_CONFIG } from '../config';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-brand-bg border-t border-white/5 py-12 md:py-16 overflow-hidden">
      {/* Background ambient radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start text-left">

          {/* Column 1: Brand & Tagline & Direct Email */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="flex items-center gap-3 self-start group">
              <span className="text-xl font-bold tracking-widest font-display text-white transition-all group-hover:text-brand-cyan">
                {BRAND_CONFIG.name}
              </span>
            </a>
            <p className="text-sm text-white/50 font-sans max-w-sm leading-relaxed mt-1">
              {BRAND_CONFIG.tagline}
            </p>

            {/* Direct Connect Email */}
            <div className="mt-2">
              <a
                href="mailto:shaikhsufiyan8261@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 text-xs text-white/80 hover:text-brand-cyan transition-all font-sans font-medium group"
              >
                <Mail size={14} className="text-brand-cyan group-hover:scale-110 transition-transform" />
                <span>shaikhsufiyan8261@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-display font-bold text-white/40 uppercase tracking-widest">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Home', target: 'home' },
                { label: 'Vision', target: 'vision' },
                { label: 'How It Works', target: 'how-it-works' },
                { label: 'Features', target: 'features' },
                { label: 'Founder', target: 'founder' },
                { label: 'Contact', target: 'contact' },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.target}`}
                  onClick={(e) => handleScrollTo(e, link.target)}
                  className="text-xs text-white/60 hover:text-brand-cyan font-sans transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Legal & Community */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-display font-bold text-white/40 uppercase tracking-widest">
              Legal & Info
            </h4>
            <div className="flex flex-col gap-2.5">
              {['Privacy Policy', 'Terms of Service', 'Community Guidelines', 'Beta Agreement'].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs text-white/60 hover:text-brand-cyan font-sans transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10 mt-12">
          <p className="text-xs text-white/30 font-sans tracking-wide">
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: TwitterIcon, href: 'https://x.com', label: 'Twitter' },
              { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
              { icon: Globe, href: '#', label: 'Website' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-brand-cyan transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
