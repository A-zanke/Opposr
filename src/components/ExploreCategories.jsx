import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES_DATA = [
  { id: 'tech', name: 'Technology' },
  { id: 'business', name: 'Business & Economy' },
  { id: 'science', name: 'Science & DeepTech' },
  { id: 'gaming', name: 'Gaming & Esports' },
  { id: 'edu', name: 'Education' },
  { id: 'food', name: 'Food & BioTech' },
  { id: 'sports', name: 'Sports Analytics' },
  { id: 'movies', name: 'Cinema & Media' },
  { id: 'fashion', name: 'Fashion & Style' },
  { id: 'travel', name: 'Travel & Mobility' },
  { id: 'lifestyle', name: 'Lifestyle Philosophy' },
  { id: 'entertainment', name: 'Culture & Arts' }
];

// Dynamic multi-direction entrance animation per index:
// 0: Left side slide (x: -90)
// 1: Top drop down (y: -70)
// 2: Bottom rise up (y: 70)
// 3: Right side slide (x: 90)
const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -35 : 35,
    scale: 0.92
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: (index % 2) * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function ExploreCategories() {
  return (
    <section
      id="features"
      className="relative py-10 sm:py-24 md:py-36 bg-brand-bg overflow-hidden"
    >
      {/* Background Aurora overlay */}
      <div className="absolute w-[800px] h-[400px] rounded-full bg-brand-cyan/5 blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-blue uppercase font-sans">
            // INTERACT WITH DIVERSITY
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
            Explore Discussion Categories
          </h2>
          <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mt-1 sm:mt-2" />
          <p className="text-white/70 font-sans text-xs sm:text-base max-w-xl leading-relaxed mt-1 sm:mt-2">
            Discover structured discussions customized to your specific interests across key categories.
          </p>
        </div>

        {/* Dynamic Multi-Direction Animated Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {CATEGORIES_DATA.map((category, index) => (
            <motion.div
              key={category.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative cursor-pointer rounded-xl sm:rounded-2xl p-3.5 sm:p-8 flex items-center justify-center text-center overflow-hidden transition-all duration-300 group border bg-[#0B0C10]/90 border-white/10 hover:border-brand-cyan/40 hover:bg-[#10121A] min-h-[85px] sm:min-h-[135px] shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
            >
              {/* Subtle Gradient Accent Line on Top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Category Name Text Only */}
              <h3 className="text-xs sm:text-lg md:text-xl font-display font-extrabold text-white group-hover:text-brand-cyan transition-colors duration-300 relative z-10">
                {category.name}
              </h3>

            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
