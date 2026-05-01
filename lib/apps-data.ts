export interface NexoraApp {
  id: string;
  name: string;
  category: 'health' | 'productivity' | 'focus' | 'wellness';
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  platforms: string[];
  backgroundColor: string;
  image: string;
}

export const NEXORA_APPS: NexoraApp[] = [
  {
    id: 'vitality',
    name: 'Vitality',
    category: 'health',
    icon: '❤️',
    shortDescription: 'Track your health metrics and wellness goals',
    fullDescription: 'Vitality is a comprehensive health tracking application that monitors your daily health metrics including heart rate, sleep quality, exercise, nutrition, and overall wellness trends. Get personalized insights and recommendations based on your health data.',
    features: [
      'Real-time heart rate monitoring',
      'Sleep tracking and analysis',
      'Nutrition logging with database',
      'Exercise tracking and statistics',
      'Health insights and recommendations',
      'Trend analysis and goal setting',
    ],
    platforms: ['iOS', 'Android', 'Web'],
    backgroundColor: 'from-red-50 to-pink-50',
    image: '/images/app-vitality.jpg',
  },
  {
    id: 'focus-hub',
    name: 'Focus Hub',
    category: 'focus',
    icon: '🎯',
    shortDescription: 'Eliminate distractions and boost productivity',
    fullDescription: 'Focus Hub is your personal productivity assistant that helps you maintain deep focus through intelligent distraction blocking, pomodoro timers, and ambient soundscapes. Track your focus sessions and build better work habits.',
    features: [
      'Distraction-free environment',
      'Pomodoro technique timers',
      'Website and app blocking',
      'Ambient soundscapes',
      'Focus session analytics',
      'Daily focus streaks',
    ],
    platforms: ['Web', 'macOS', 'Windows'],
    backgroundColor: 'from-blue-50 to-cyan-50',
    image: '/images/app-focus-hub.jpg',
  },
  {
    id: 'mindflow',
    name: 'MindFlow',
    category: 'wellness',
    icon: '🧘',
    shortDescription: 'Meditation, mindfulness, and mental wellness',
    fullDescription: 'MindFlow brings guided meditation, breathing exercises, and mindfulness practices to help you reduce stress and improve mental clarity. Access hundreds of sessions from expert instructors.',
    features: [
      'Guided meditation sessions',
      'Breathing exercises',
      'Sleep stories and soundscapes',
      'Mindfulness reminders',
      'Progress tracking',
      'Expert instructors library',
    ],
    platforms: ['iOS', 'Android', 'Web'],
    backgroundColor: 'from-purple-50 to-indigo-50',
    image: '/images/app-mindflow.jpg',
  },
  {
    id: 'task-master',
    name: 'Task Master',
    category: 'productivity',
    icon: '✓',
    shortDescription: 'Smart task management for your goals',
    fullDescription: 'Task Master is an intelligent task management platform that helps you organize, prioritize, and complete your goals. With smart scheduling, collaboration features, and powerful automation.',
    features: [
      'Smart task organization',
      'AI-powered priority suggestions',
      'Collaborative teams',
      'Recurring task automation',
      'Integration with calendars',
      'Progress analytics',
    ],
    platforms: ['iOS', 'Android', 'Web', 'macOS'],
    backgroundColor: 'from-green-50 to-emerald-50',
    image: '/images/app-task-master.jpg',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    category: 'health',
    icon: '⚡',
    shortDescription: 'Real-time wellness and energy tracking',
    fullDescription: 'Pulse is your personal wellness dashboard that provides real-time insights into your energy levels, stress, and overall vitality. Stay aware of your body and optimize your daily routine.',
    features: [
      'Real-time energy tracking',
      'Stress level monitoring',
      'Hydration reminders',
      'Activity suggestions',
      'Wellness reports',
      'Habit recommendations',
    ],
    platforms: ['iOS', 'Android', 'Web'],
    backgroundColor: 'from-yellow-50 to-orange-50',
    image: '/images/app-pulse.jpg',
  },
];

export const FEATURES = [
  {
    title: 'Cloud-Synchronized',
    description: 'All your data syncs seamlessly across all devices in real-time.',
    icon: '☁️',
  },
  {
    title: 'Bank-Level Security',
    description: 'Enterprise-grade encryption protects your sensitive health and personal data.',
    icon: '🔒',
  },
  {
    title: 'AI-Powered Insights',
    description: 'Machine learning algorithms provide personalized recommendations just for you.',
    icon: '🤖',
  },
  {
    title: 'Multi-Platform',
    description: 'Use Nexora apps on iOS, Android, Mac, Windows, and Web browsers.',
    icon: '💻',
  },
  {
    title: 'Privacy First',
    description: 'Your data is yours. We never sell or share your information with third parties.',
    icon: '🛡️',
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated support team is always ready to help you succeed.',
    icon: '🎧',
  },
];
