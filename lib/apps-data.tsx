export interface NexfiyApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  longDescription: string;
  features: string[];
  detailedFeatures: Array<{ name: string; description: string }>;
  platforms: string[];
  screenshots: string[];
  version: string;
  rating: number;
  reviews: number;
  downloads: string;
  price: string;
  color: string;
  gradient: string;
  team: Array<{ id: string; name: string; role: string; avatar: string; bio: string }>;
  privacy: { dataCollection: string; dataStorage: string; userRights: string };
  security: { encryption: string; compliance: string[]; audits: string };
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
    longDescription: 'Vitality empowers you to take control of your health with detailed tracking and personalized insights. Monitor your heart rate, sleep patterns, activity levels, and nutrition all in one beautiful interface. Our advanced algorithms analyze your data to provide actionable health recommendations tailored to your lifestyle.',
    features: [
      'Real-time heart rate monitoring',
      'Sleep quality analysis',
      'Activity logging and trends',
      'Personalized health insights',
      'Data export and privacy',
      'Offline-first design'
    ],
    detailedFeatures: [
      { name: 'Heart Rate Tracking', description: 'Monitor heart rate in real-time with continuous tracking and historical analysis' },
      { name: 'Sleep Analysis', description: 'Deep insights into sleep patterns, quality, and recommendations for better rest' },
      { name: 'Activity Monitoring', description: 'Automatic activity tracking with step counting and exercise recognition' },
      { name: 'Health Reports', description: 'Weekly and monthly health reports with trends and actionable insights' },
      { name: 'Data Export', description: 'Export all your health data in standard formats for third-party analysis' },
      { name: 'Privacy First', description: 'All data stored locally first with optional cloud backup under your control' }
    ],
    platforms: ['iOS', 'Android', 'Web'],
    screenshots: ['/images/vitality-1.jpg', '/images/vitality-2.jpg', '/images/vitality-3.jpg'],
    version: '2.4.1',
    rating: 4.9,
    reviews: 2847,
    downloads: '500K+',
    price: 'Free with $9.99/month Premium',
    color: '#FF6B6B',
    gradient: 'from-red-50 to-orange-50',
    team: [
      { id: 'v1', name: 'Dr. Emily Chen', role: 'Health Data Specialist', avatar: '/avatars/emily.jpg', bio: 'Medical professional with 8 years of health app experience.' },
      { id: 'v2', name: 'Marcus Tech', role: 'Senior Developer', avatar: '/avatars/marcus.jpg', bio: 'Full-stack developer specialized in health and fitness apps.' },
    ],
    privacy: {
      dataCollection: 'Vitality collects heart rate, sleep, and activity data with your explicit consent. We do not collect location data.',
      dataStorage: 'All health data is encrypted end-to-end and stored on secure servers. You control when data is shared.',
      userRights: 'You can export all your health data, request deletion, or stop sharing with third parties anytime.',
    },
    security: {
      encryption: 'AES-256 encryption at rest, TLS 1.3 in transit. Health data is treated with highest security standards.',
      compliance: ['HIPAA Ready', 'GDPR Compliant', 'ISO 27001', 'SOC 2 Type II'],
      audits: 'Annual security audits by third-party firms. Regular penetration testing and vulnerability assessments.',
    }
  },
  {
    id: 'focus-hub',
    name: 'Focus Hub',
    tagline: 'Deep Work',
    description: 'Eliminate distractions and maximize your focus.',
    fullDescription: 'Focus Hub creates an optimal environment for deep, concentrated work. Block distractions intelligently, track focus sessions, and build an unbreakable focus habit with carefully crafted features.',
    longDescription: 'In a world full of distractions, Focus Hub helps you reclaim your attention and accomplish meaningful work. With intelligent app blocking, ambient soundscapes, and detailed focus analytics, you\'ll build a powerful focus practice that drives real results.',
    features: [
      'Smart distraction blocking',
      'Pomodoro timer with sessions',
      'Focus statistics and streaks',
      'App and website blocking',
      'Ambient focus sounds',
      'Daily focus goals'
    ],
    detailedFeatures: [
      { name: 'Smart Blocking', description: 'Intelligently block distracting apps and websites during focus sessions' },
      { name: 'Pomodoro Timer', description: 'Classic Pomodoro technique with customizable work and break intervals' },
      { name: 'Focus Streaks', description: 'Build motivation with daily focus streaks and achievement badges' },
      { name: 'Ambient Sounds', description: 'Forest, rain, coffee shop, and ocean sounds to enhance concentration' },
      { name: 'Focus Reports', description: 'Detailed analytics showing your focus patterns and productivity trends' },
      { name: 'Calendar Integration', description: 'Sync with your calendar to protect focus time automatically' }
    ],
    platforms: ['iOS', 'macOS', 'Web'],
    screenshots: ['/images/focus-hub-1.jpg', '/images/focus-hub-2.jpg', '/images/focus-hub-3.jpg'],
    version: '1.8.2',
    rating: 4.8,
    reviews: 1923,
    downloads: '250K+',
    price: 'Free with $4.99/month Premium',
    color: '#4F46E5',
    gradient: 'from-indigo-50 to-blue-50',
    team: [
      { id: 'f1', name: 'Alex Productivity', role: 'Focus Coach', avatar: '/avatars/alex.jpg', bio: 'Productivity expert and behavioral psychologist.' },
      { id: 'f2', name: 'Jamie Code', role: 'Lead Developer', avatar: '/avatars/jamie.jpg', bio: 'Developer focused on creating minimal, distraction-free experiences.' },
    ],
    privacy: {
      dataCollection: 'Focus Hub tracks your focus sessions and app usage patterns. No personal data is collected.',
      dataStorage: 'Session data is stored locally on your device first. Cloud sync is optional and encrypted.',
      userRights: 'Your focus data belongs to you. Export anytime or delete all data with one click.',
    },
    security: {
      encryption: 'Local-first encryption with optional encrypted cloud backup.',
      compliance: ['GDPR Compliant', 'CCPA Compliant', 'No Third-party Tracking'],
      audits: 'Regular security reviews. Open source components regularly audited.',
    }
  },
  {
    id: 'mindflow',
    name: 'MindFlow',
    tagline: 'Meditation & Wellness',
    description: 'Guided meditations for inner peace and clarity.',
    fullDescription: 'MindFlow brings curated meditation sessions, breathing exercises, and mindfulness practices. Created with intention and care, it helps you find calm and clarity in everyday moments.',
    longDescription: 'Transform your mental wellbeing with MindFlow\'s comprehensive meditation and mindfulness platform. Choose from hundreds of guided sessions, sleep stories, and breathing exercises designed by mindfulness experts. Track your progress, discover your calm, and build a consistent meditation practice.',
    features: [
      'Guided meditation library',
      'Breathing techniques',
      'Sleep meditation stories',
      'Mood and stress tracking',
      'Customized practices',
      'Offline meditation access'
    ],
    detailedFeatures: [
      { name: 'Guided Meditations', description: '500+ guided meditations from beginner to advanced levels' },
      { name: 'Sleep Stories', description: 'Bedtime stories and sleep meditations to help you rest better' },
      { name: 'Breathing Exercises', description: 'Techniques to calm anxiety, improve focus, and manage stress' },
      { name: 'Mood Tracking', description: 'Track your emotional state and see how meditation impacts your mood' },
      { name: 'Personalized Paths', description: 'Custom meditation programs tailored to your goals and experience' },
      { name: 'Offline Access', description: 'Download sessions and practice meditation anywhere, anytime' }
    ],
    platforms: ['iOS', 'Android', 'Web'],
    screenshots: ['/images/mindflow-1.jpg', '/images/mindflow-2.jpg', '/images/mindflow-3.jpg'],
    version: '3.1.0',
    rating: 4.7,
    reviews: 3421,
    downloads: '800K+',
    price: 'Free with $11.99/month Premium',
    color: '#9333EA',
    gradient: 'from-purple-50 to-pink-50',
    team: [
      { id: 'm1', name: 'Sophia Wellness', role: 'Meditation Teacher', avatar: '/avatars/sophia.jpg', bio: 'Certified meditation instructor with 15 years of teaching experience.' },
      { id: 'm2', name: 'Kai Engineer', role: 'Audio/Backend', avatar: '/avatars/kai.jpg', bio: 'Specialist in audio processing and meditation technology.' },
    ],
    privacy: {
      dataCollection: 'MindFlow only collects meditation duration and mood data. No biometric data collected.',
      dataStorage: 'All meditation history is encrypted and stored on your device. Optional cloud backup with end-to-end encryption.',
      userRights: 'Your meditation data is private. You can export, share, or completely delete your data anytime.',
    },
    security: {
      encryption: 'End-to-end encryption for all sensitive data. Regular security audits.',
      compliance: ['GDPR Compliant', 'SOC 2 Type II', 'Privacy Shield Compliant'],
      audits: 'Quarterly security assessments. Dedicated security team.',
    }
  },
  {
    id: 'task-master',
    name: 'Task Master',
    tagline: 'Task Management',
    description: 'Smart task organization for meaningful work.',
    fullDescription: 'Task Master intelligently organizes your tasks and priorities. Designed for creators and professionals who care about doing meaningful work effectively and sustainably.',
    longDescription: 'Manage your work with intelligence and grace. Task Master helps you organize projects, prioritize effectively, and track progress toward your most important goals. With smart scheduling, collaboration tools, and powerful automation, you\'ll stay on top of what matters.',
    features: [
      'Smart task organization',
      'Intelligent prioritization',
      'Recurring task automation',
      'Time tracking per task',
      'Project organization',
      'Progress insights'
    ],
    detailedFeatures: [
      { name: 'Smart Projects', description: 'Organize tasks into projects with hierarchies and dependencies' },
      { name: 'Intelligent Sorting', description: 'AI-powered prioritization based on deadlines and importance' },
      { name: 'Time Tracking', description: 'Track time spent on tasks and projects for better planning' },
      { name: 'Recurring Tasks', description: 'Automate recurring tasks and templates for consistent workflows' },
      { name: 'Collaboration', description: 'Share projects and tasks with team members and assign work' },
      { name: 'Progress Tracking', description: 'Visualize progress with charts and completion metrics' }
    ],
    platforms: ['iOS', 'Android', 'Web', 'macOS'],
    screenshots: ['/images/task-master-1.jpg', '/images/task-master-2.jpg', '/images/task-master-3.jpg'],
    version: '1.5.3',
    rating: 4.6,
    reviews: 1654,
    downloads: '350K+',
    price: 'Free with $7.99/month Premium',
    color: '#10B981',
    gradient: 'from-emerald-50 to-green-50',
    team: [
      { id: 't1', name: 'Lisa Tasks', role: 'Product Manager', avatar: '/avatars/lisa.jpg', bio: 'Product strategist focused on productivity and workflow optimization.' },
      { id: 't2', name: 'David Build', role: 'Full Stack Dev', avatar: '/avatars/david.jpg', bio: 'Full-stack developer specializing in task management systems.' },
    ],
    privacy: {
      dataCollection: 'Task Master collects task titles, descriptions, and timing data only. No machine learning on content.',
      dataStorage: 'Your tasks are stored locally by default. Optional encrypted cloud sync available.',
      userRights: 'Complete control over your task data. Export in standard formats or delete immediately.',
    },
    security: {
      encryption: 'AES-256 encryption for cloud storage. Local encryption for sensitive data.',
      compliance: ['GDPR Compliant', 'CCPA Ready', 'ISO 27001'],
      audits: 'Semi-annual security audits. Code reviewed for security vulnerabilities.',
    }
  },
  {
    id: 'pulse',
    name: 'Pulse',
    tagline: 'Wellness Insights',
    description: 'Real-time wellness metrics and energy tracking.',
    fullDescription: 'Pulse provides real-time wellness monitoring with intelligent insights. Track energy levels, recovery, and overall vitality to optimize your daily performance and well-being.',
    longDescription: 'Understand your body and optimize your energy. Pulse monitors your vitality in real-time, providing insights into your energy levels, stress, recovery, and readiness. Make informed decisions about your day based on scientifically-backed wellness metrics.',
    features: [
      'Energy level tracking',
      'Recovery metrics',
      'Activity suggestions',
      'Wellness trends',
      'Performance analytics',
      'Habit recommendations'
    ],
    detailedFeatures: [
      { name: 'Energy Tracking', description: 'Monitor your energy levels throughout the day with AI insights' },
      { name: 'Recovery Metrics', description: 'Understand your physical recovery and readiness for activity' },
      { name: 'Stress Monitoring', description: 'Track stress levels and get recommendations for stress relief' },
      { name: 'Activity Integration', description: 'Sync with fitness trackers and smartwatches for complete data' },
      { name: 'Wellness Reports', description: 'Weekly reports showing your wellness trends and patterns' },
      { name: 'Smart Recommendations', description: 'Get personalized suggestions based on your wellness data' }
    ],
    platforms: ['iOS', 'Android', 'Web'],
    screenshots: ['/images/pulse-1.jpg', '/images/pulse-2.jpg', '/images/pulse-3.jpg'],
    version: '1.2.0',
    rating: 4.5,
    reviews: 1205,
    downloads: '180K+',
    price: 'Free with $6.99/month Premium',
    color: '#F59E0B',
    gradient: 'from-amber-50 to-orange-50',
    team: [
      { id: 'p1', name: 'Dr. Health', role: 'Wellness Expert', avatar: '/avatars/health.jpg', bio: 'Sports scientist and wellness coach with 10 years of experience.' },
      { id: 'p2', name: 'Ray Monitor', role: 'IoT Developer', avatar: '/avatars/ray.jpg', bio: 'Specialist in wearable integration and health data analytics.' },
    ],
    privacy: {
      dataCollection: 'Pulse collects energy levels, stress, and recovery metrics from your wearable devices with permission.',
      dataStorage: 'Health data is encrypted both in transit and at rest. Stored securely on HIPAA-compliant servers.',
      userRights: 'You own your health data. Control sharing with healthcare providers and other apps.',
    },
    security: {
      encryption: 'Healthcare-grade AES-256 encryption. TLS 1.3 for all connections.',
      compliance: ['HIPAA Compliant', 'GDPR Compliant', 'SOC 2 Type II', 'FDA Validated'],
      audits: 'Quarterly security and compliance audits. Bug bounty program active.',
    }
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
