// OPPOSR Web App Configuration & Mock Data

export const BRAND_CONFIG = {
  name: 'OPPOSR',
  tagline: 'Different Opinions. Better Conversations.',
  founderEmail: 'shaikhsufiyan8261@gmail.com',
  // Google Sheets Webhook URL (Paste your Google Apps Script Web App URL here or in .env VITE_GOOGLE_SCRIPT_URL)
  googleSheetsUrl: import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxde1jBuxNI-lEFPxInWX-uDH-rzKPNxDh7t8OHuS2o8clcHCRViP2-BzTJNBaILE2r/exec',
  
  // Asset Paths (User editable)
  assets: {
    logo: '/src/assets/logo.png',
    founder: '/src/assets/fd.jpeg',
    video1: '/src/assets/debate1.mp4',
    video2: '/src/assets/debate2.mp4',
    heroBg: '/src/assets/hero.png',
  },
  
  // High-End Color Palette References (Implemented in Tailwind/CSS variables)
  colors: {
    primaryBg: '#050505',
    secondarySurface: '#0B0B0F',
    cardSurface: '#111217',
    electricBlue: '#3B82F6', // Viewpoint A
    cyan: '#22D3EE',         // Viewpoint B
    textPrimary: '#FFFFFF',
    textSecondary: '#D1D5DB',
    textMuted: '#9CA3AF',
    border: 'rgba(255, 255, 255, 0.08)'
  }
};

// 1. Marquee Topics
export const MARQUEE_TOPICS = [
  'Technology', 'Food', 'Sports', 'Education', 'Movies', 
  'Science', 'Business', 'Fashion', 'Gaming', 'Travel', 'Lifestyle', 'Culture', 'Entertainment'
];

// 2. Timeline Steps (How It Works)
export const TIMELINE_STEPS = [
  {
    id: '01',
    title: 'Choose Interests',
    description: 'Select your favorite categories and personalize your debating feed with topics that matter to you.',
    iconName: 'Sparkles',
    glowColor: 'from-[#3B82F6] to-transparent'
  },
  {
    id: '02',
    title: 'Discover Debates',
    description: 'Explore live discussions, hot trending topics, and archived high-fidelity recorded debates.',
    iconName: 'Compass',
    glowColor: 'from-[#22D3EE] to-transparent'
  },
  {
    id: '03',
    title: 'Join or Create',
    description: 'Jump directly onto the stage to argue your perspective, or launch a debate with your own custom rules.',
    iconName: 'Mic',
    glowColor: 'from-[#3B82F6] to-transparent'
  },
  {
    id: '04',
    title: 'Earn Recognition',
    description: 'Build credibility through structured arguments. Get rewarded for evidence-based and logical reasoning.',
    iconName: 'Award',
    glowColor: 'from-[#22D3EE] to-transparent'
  }
];

// 3. Bento Grid Categories
export const BENTO_CATEGORIES = [
  { id: 'tech', name: 'Technology', icon: 'Cpu', size: 'col-span-2 md:col-span-1 row-span-1', gradient: 'from-[#3B82F6]/20 to-[#22D3EE]/5' },
  { id: 'food', name: 'Food', icon: 'Utensils', size: 'col-span-1 row-span-1', gradient: 'from-[#22D3EE]/20 to-[#3B82F6]/5' },
  { id: 'edu', name: 'Education', icon: 'GraduationCap', size: 'col-span-1 row-span-1', gradient: 'from-[#3B82F6]/10 to-[#22D3EE]/10' },
  { id: 'sports', name: 'Sports', icon: 'Trophy', size: 'col-span-2 row-span-1', gradient: 'from-[#3B82F6]/20 to-transparent' },
  { id: 'movies', name: 'Movies', icon: 'Film', size: 'col-span-1 row-span-1', gradient: 'from-[#22D3EE]/10 to-transparent' },
  { id: 'business', name: 'Business', icon: 'Briefcase', size: 'col-span-1 row-span-1', gradient: 'from-[#3B82F6]/10 to-transparent' },
  { id: 'science', name: 'Science', icon: 'Atom', size: 'col-span-2 row-span-1', gradient: 'from-[#22D3EE]/20 to-[#3B82F6]/10' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', size: 'col-span-1 row-span-1', gradient: 'from-[#3B82F6]/10 to-[#22D3EE]/5' },
  { id: 'gaming', name: 'Gaming', icon: 'Gamepad2', size: 'col-span-1 row-span-1', gradient: 'from-[#22D3EE]/20 to-transparent' },
  { id: 'travel', name: 'Travel', icon: 'Globe', size: 'col-span-1 row-span-1', gradient: 'from-[#3B82F6]/10 to-transparent' },
  { id: 'lifestyle', name: 'Lifestyle', icon: 'Heart', size: 'col-span-2 row-span-1', gradient: 'from-[#3B82F6]/10 to-[#22D3EE]/15' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Clapperboard', size: 'col-span-1 row-span-1', gradient: 'from-[#22D3EE]/10 to-[#3B82F6]/5' }
];

// 4. Recorded Debates (6 sample cards)
export const RECORDED_DEBATES = [
  {
    id: 'rec-1',
    title: 'AI vs. Creative Writers: Will Machines Replace the Novelist?',
    category: 'Technology',
    duration: '42 mins',
    views: '18.4K views',
    date: '3 days ago',
    gradient: 'from-[#3B82F6] to-[#1D4ED8]',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-34282-large.mp4',
    speakerA: { name: 'Sarah Chen', role: 'AI Researcher', score: 982 },
    speakerB: { name: 'Marcus Sterling', role: 'Novelist', score: 915 }
  },
  {
    id: 'rec-2',
    title: 'Is Remote Work Killing Corporate Culture and Collaboration?',
    category: 'Business',
    duration: '31 mins',
    views: '12.8K views',
    date: '1 week ago',
    gradient: 'from-[#22D3EE] to-[#0891B2]',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-in-a-cafe-40175-large.mp4',
    speakerA: { name: 'Elena Rostova', role: 'HR Director', score: 870 },
    speakerB: { name: 'David Vance', role: 'Remote Advocate', score: 940 }
  },
  {
    id: 'rec-3',
    title: 'The Future of Gaming: VR Worlds vs. Traditional Screens',
    category: 'Gaming',
    duration: '28 mins',
    views: '24.1K views',
    date: '5 days ago',
    gradient: 'from-[#3B82F6] to-[#22D3EE]',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-playing-a-virtual-reality-video-game-40176-large.mp4',
    speakerA: { name: 'Zack Peterson', role: 'VR Developer', score: 912 },
    speakerB: { name: 'Mia Wong', role: 'Esports Analyst', score: 928 }
  },
  {
    id: 'rec-4',
    title: 'Is Modern Education Preparing Students for the 21st Century?',
    category: 'Education',
    duration: '55 mins',
    views: '9.2K views',
    date: '2 weeks ago',
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-students-studying-in-a-library-40178-large.mp4',
    speakerA: { name: 'Dr. Julia Hayes', role: 'Professor', score: 960 },
    speakerB: { name: 'Sam Taylor', role: 'EdTech Founder', score: 890 }
  },
  {
    id: 'rec-5',
    title: 'Mars Colonization: A Multi-Planetary Future or Earth First?',
    category: 'Science',
    duration: '48 mins',
    views: '32.5K views',
    date: '1 month ago',
    gradient: 'from-[#F59E0B] to-[#EF4444]',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-space-telescope-floating-in-deep-space-40179-large.mp4',
    speakerA: { name: 'Dr. Alan Vance', role: 'Astrophysicist', score: 975 },
    speakerB: { name: 'Claire Dubois', role: 'Ecologist', score: 962 }
  },
  {
    id: 'rec-6',
    title: 'Streaming Platforms: Has Cinema Lost Its Traditional Magic?',
    category: 'Movies',
    duration: '36 mins',
    views: '15.6K views',
    date: '3 weeks ago',
    gradient: 'from-[#10B981] to-[#3B82F6]',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinema-projector-lens-in-action-close-up-40180-large.mp4',
    speakerA: { name: 'Oliver Stone', role: 'Film Critic', score: 920 },
    speakerB: { name: 'Sophia Loren', role: 'Media Executive', score: 895 }
  }
];

// 5. Why OPPOSR Features
export const OPPOSR_FEATURES = [
  {
    title: 'Live Debates',
    description: 'Experience real-time structured verbal battles between verified creators. Zero interruptions, absolute clarity.',
    side: 'left'
  },
  {
    title: 'Recorded Discussions',
    description: 'Missed a live session? Access crystal-clear, high-definition replays with key argument timestamps and statistics.',
    side: 'right'
  },
  {
    title: 'Interest-Based Discovery',
    description: 'No politics spam. Follow clean categories that map to your hobbies, from high-tech research to travel lifestyles.',
    side: 'left'
  },
  {
    title: 'Create Your Debate',
    description: 'Launch your debate arena in minutes. Choose your opponent, define limits, and invite your custom jury.',
    side: 'right'
  },
  {
    title: 'Trending Topics',
    description: 'See which discussions are shaking up the community. Monitor arguments and vote on the strongest viewpoints.',
    side: 'left'
  },
  {
    title: 'Structured Conversations',
    description: 'An anti-trolling system where logical arguments are separated, analyzed, and rated by standard guidelines.',
    side: 'right'
  }
];

// 6. Ranking & Reputation Scoreboard
export const LEADERBOARD = [
  {
    rank: '01',
    name: 'Alex Morgan',
    role: 'Tech Ethics Analyst',
    score: 985,
    badges: ['Flawless Logic', 'Evidence Pioneer'],
    color: 'from-[#22D3EE] to-[#3B82F6]'
  },
  {
    rank: '02',
    name: 'Sarah Jenkins',
    role: 'Scientific Communicator',
    score: 968,
    badges: ['Data-Driven', 'Respectful Dissenter'],
    color: 'from-[#3B82F6] to-[#60A5FA]'
  },
  {
    rank: '03',
    name: 'Marcus Vance',
    role: 'Socio-Economic Critic',
    score: 954,
    badges: ['Structured Rhetoric', 'Jury Favorite'],
    color: 'from-[#22D3EE] to-[#06B6D4]'
  }
];

// 7. Recognition Magazine Highlights
export const RECOGNITIONS = [
  {
    title: 'Featured Debater',
    subtitle: 'Sarah Jenkins on Renewable Energies',
    description: 'How a masterfully presented, empirical defense of solid-state hydrogen tech scored a record-breaking 99% in logical soundness from the OPPOSR community.',
    badge: 'Spotlight'
  },
  {
    title: 'Editor\'s Choice',
    subtitle: 'The Ethics of Genetic Engineering',
    description: 'An outstanding 40-minute duel detailing CRISPR advancements, maintaining absolute respect, strict citation standards, and impeccable dialectic precision.',
    badge: 'Curated'
  },
  {
    title: 'Community Highlight',
    subtitle: 'Open Source AI Models vs Proprietary Giants',
    description: 'A public forum debate that gathered over 25,000 active live viewers, proving that Gen-Z wants intelligent, technical deep dives instead of soundbites.',
    badge: 'Trending'
  }
];
