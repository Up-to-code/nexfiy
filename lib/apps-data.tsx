export interface NexfiyApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  platforms: string[];
  color: string;
  gradient: string;
}

// SVG Icons for apps
const VitalityIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#FF6B6B" fillOpacity="0.1" />
    <path d="M24 12C17.37 12 12 17.37 12 24s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 22c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" fill="#FF6B6B" />
    <path d="M24 18c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z" fill="#FF6B6B" />
  </svg>
);

const FocusHubIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#4F46E5" fillOpacity="0.1" />
    <circle cx="24" cy="24" r="12" stroke="#4F46E5" strokeWidth="2" />
    <circle cx="24" cy="24" r="8" stroke="#4F46E5" strokeWidth="2" />
    <circle cx="24" cy="24" r="4" fill="#4F46E5" />
    <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MindFlowIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#9333EA" fillOpacity="0.1" />
    <path d="M24 14C18.48 14 14 18.48 14 24c0 3.28 1.6 6.2 4.08 8.08" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 14C29.52 14 34 18.48 34 24c0 3.28-1.6 6.2-4.08 8.08" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="3" fill="#9333EA" />
  </svg>
);

const TaskMasterIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#10B981" fillOpacity="0.1" />
    <rect x="12" y="12" width="24" height="24" rx="2" stroke="#10B981" strokeWidth="2" />
    <path d="M16 24h16M16 28h16M16 20h16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    <circle cx="19" cy="20" r="1.5" fill="#10B981" />
    <circle cx="19" cy="24" r="1.5" fill="#10B981" />
    <circle cx="19" cy="28" r="1.5" fill="#10B981" />
  </svg>
);

const PulseIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect width="48" height="48" rx="12" fill="#F59E0B" fillOpacity="0.1" />
    <path d="M12 24h4l3-6 4 12 3-6h6l4 8h4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="24" r="1.5" fill="#F59E0B" />
    <circle cx="34" cy="24" r="1.5" fill="#F59E0B" />
  </svg>
);

export const NEXFIY_APPS: NexfiyApp[] = [
  {
    id: 'vitality',
    name: 'Vitality',
    tagline: 'Health Tracking',
    description: 'Track your health metrics with precision and care.',
    fullDescription: 'Vitality is a comprehensive health tracking app designed to monitor vital signs, activity, and wellness metrics. Built with meticulous attention to detail, it transforms health monitoring into a simple, insightful daily habit.',
    features: [
      'Real-time heart rate monitoring',
      'Sleep quality analysis',
      'Activity logging and trends',
      'Personalized health insights',
      'Data export and privacy',
      'Offline-first design'
    ],
    platforms: ['iOS', 'Android', 'Web'],
    color: '#FF6B6B',
    gradient: 'from-red-50 to-orange-50'
  },
  {
    id: 'focus-hub',
    name: 'Focus Hub',
    tagline: 'Deep Work',
    description: 'Eliminate distractions and maximize your focus.',
    fullDescription: 'Focus Hub creates an optimal environment for deep, concentrated work. Block distractions intelligently, track focus sessions, and build an unbreakable focus habit with carefully crafted features.',
    features: [
      'Smart distraction blocking',
      'Pomodoro timer with sessions',
      'Focus statistics and streaks',
      'App and website blocking',
      'Ambient focus sounds',
      'Daily focus goals'
    ],
    platforms: ['iOS', 'macOS', 'Web'],
    color: '#4F46E5',
    gradient: 'from-indigo-50 to-blue-50'
  },
  {
    id: 'mindflow',
    name: 'MindFlow',
    tagline: 'Meditation & Wellness',
    description: 'Guided meditations for inner peace and clarity.',
    fullDescription: 'MindFlow brings curated meditation sessions, breathing exercises, and mindfulness practices. Created with intention and care, it helps you find calm and clarity in everyday moments.',
    features: [
      'Guided meditation library',
      'Breathing techniques',
      'Sleep meditation stories',
      'Mood and stress tracking',
      'Customized practices',
      'Offline meditation access'
    ],
    platforms: ['iOS', 'Android', 'Web'],
    color: '#9333EA',
    gradient: 'from-purple-50 to-pink-50'
  },
  {
    id: 'task-master',
    name: 'Task Master',
    tagline: 'Task Management',
    description: 'Smart task organization for meaningful work.',
    fullDescription: 'Task Master intelligently organizes your tasks and priorities. Designed for creators and professionals who care about doing meaningful work effectively and sustainably.',
    features: [
      'Smart task organization',
      'Intelligent prioritization',
      'Recurring task automation',
      'Time tracking per task',
      'Project organization',
      'Progress insights'
    ],
    platforms: ['iOS', 'Android', 'Web', 'macOS'],
    color: '#10B981',
    gradient: 'from-emerald-50 to-green-50'
  },
  {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'Wellness Insights',
    description: 'Real-time wellness metrics and energy tracking.',
    fullDescription: 'Pulse provides real-time wellness monitoring with intelligent insights. Track energy levels, recovery, and overall vitality to optimize your daily performance and well-being.',
    features: [
      'Energy level tracking',
      'Recovery metrics',
      'Activity suggestions',
      'Wellness trends',
      'Performance analytics',
      'Habit recommendations'
    ],
    platforms: ['iOS', 'Android', 'Web'],
    color: '#F59E0B',
    gradient: 'from-amber-50 to-orange-50'
  }
];

export const NEXFIY_FEATURES = [
  {
    title: 'Crafted with Care',
    description: 'Every feature is carefully designed with attention to detail and user experience.',
  },
  {
    title: 'Privacy First',
    description: 'Your data belongs to you. No ads, no tracking, no data sales.',
  },
  {
    title: 'Cross-Platform',
    description: 'Use Nexfiy apps on iOS, Android, Mac, and Web seamlessly.',
  },
  {
    title: 'Offline Ready',
    description: 'Apps work offline with automatic sync when you reconnect.',
  },
  {
    title: 'Quality Over Growth',
    description: 'Built by one developer focused on excellence, not scale.',
  },
  {
    title: 'Community First',
    description: 'Direct feedback loop with users shapes every update.',
  },
];

export { VitalityIcon, FocusHubIcon, MindFlowIcon, TaskMasterIcon, PulseIcon };
