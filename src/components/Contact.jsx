import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, AlertTriangle, CheckCircle, X, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!message.trim()) {
      setError('Please provide a message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint = BRAND_CONFIG.googleSheetsUrl;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        // Fallback email link if Google Sheets URL is not configured yet
        const subject = encodeURIComponent(`OPPOSR Inquiry from ${name}`);
        const body = encodeURIComponent(`Hello Sufiyan,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`);
        window.location.href = `mailto:${BRAND_CONFIG.founderEmail}?subject=${subject}&body=${body}`;
      }

      setSuccess(true);
      setShowToast(true);
      setName('');
      setEmail('');
      setMessage('');

      // Auto-hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (err) {
      console.error('Submission failed:', err);
      setError('Failed to submit form. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 bg-brand-bg overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-[600px] h-[300px] bg-brand-cyan/5 blur-[120px] bottom-0 right-1/4 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase font-sans">
            // JOIN THE MOVEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white max-w-2xl leading-[1.1]">
            Let's Build Better Conversations.
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-2" />
          <p className="text-white/60 font-sans text-sm sm:text-base max-w-lg leading-relaxed mt-2">
            Interested in partnership, investing, or joining our beta moderation circle? Reach out directly.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-lg mx-auto p-8 md:p-10 rounded-3xl glass-panel border border-white/5 hover:border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="absolute -left-12 -top-12 w-28 h-28 rounded-full bg-brand-blue/5 blur-xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left relative z-10">
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-display font-bold text-white/50 uppercase tracking-widest">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-brand-secondary/80 text-white rounded-xl border border-white/5 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/40 outline-none text-sm font-sans transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-display font-bold text-white/50 uppercase tracking-widest">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-brand-secondary/80 text-white rounded-xl border border-white/5 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/40 outline-none text-sm font-sans transition-all"
              />
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-display font-bold text-white/50 uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How would you like to collaborate?"
                rows={4}
                className="w-full px-4 py-3 bg-brand-secondary/80 text-white rounded-xl border border-white/5 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/40 outline-none text-sm font-sans transition-all resize-none"
              />
            </div>

            {/* Form Validation Feedback */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-red-400 text-xs font-sans font-medium flex items-center gap-1.5"
                >
                  <AlertTriangle size={12} /> {error}
                </motion.div>
              )}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-brand-cyan text-xs font-sans font-medium flex items-center gap-1.5"
                >
                  <CheckCircle size={12} className="animate-bounce" /> {BRAND_CONFIG.googleSheetsUrl ? 'Message submitted successfully to Google Sheet!' : 'Opening default mail client...'}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit CTA */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-bg font-bold font-display rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={12} />
            </motion.button>
          </form>
        </div>
      </div>

      {/* Floating Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 max-w-sm w-[calc(100vw-3rem)] p-4 rounded-2xl glass-panel border border-brand-cyan/40 shadow-[0_10px_40px_rgba(34,211,238,0.25)] flex items-start gap-3.5 backdrop-blur-xl bg-brand-card/90"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-brand-bg shrink-0 shadow-md shadow-brand-cyan/20">
              <CheckCircle size={18} className="stroke-[2.5]" />
            </div>

            <div className="flex-1 text-left">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-display font-bold text-white tracking-wide">
                  Message Sent!
                </h4>
                <Sparkles size={13} className="text-brand-cyan animate-pulse" />
              </div>
              <p className="text-xs text-white/70 font-sans mt-0.5 leading-relaxed">
                Thank you for reaching out. Your details have been submitted successfully.
              </p>
            </div>

            <button
              onClick={() => setShowToast(false)}
              className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
