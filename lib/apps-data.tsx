import React from 'react';

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
  icon?: React.ReactNode;
}

// Icon component removed in favor of image asset

export const NEXFIY_APPS: NexfiyApp[] = [
  {
    id: 'push-counter',
    name: 'Push Counter',
    icon: <img src="/brand/push-up-counter-icon.png" alt="Push Counter Icon" className="w-full h-full object-contain" />,
    tagline: 'Count reps, build push-up plans',
    description: 'Build a stronger push-up habit with guided plans, live rep counting, workout reminders, and clear progress tracking.',
    fullDescription: 'Push Counter helps you build a stronger push-up habit with guided plans, live rep counting, workout reminders, and clear progress tracking. Choose your current level, training days, goal, and preferred workout time, and Push Counter creates a four-week plan designed around your schedule.',
    longDescription: 'Push Counter is designed to help you build a consistent push-up routine with simple planning, live workout tracking, and progress feedback. Create a plan around your current level, training days, and goals. During workouts, use camera-assisted rep counting on supported devices or continue manually when camera access is unavailable. The session screen keeps your reps, sets, rest time, and workout state visible so you can focus on clean movement.',
    features: [
      'Four-week Push-up Plans',
      'Camera-Assisted Rep Counting',
      'Practice Modes (Sets, Open Goal, RPM)',
      'Workout History & Streaks',
      'Global & Country Leaderboards',
      'Achievement Badges & Challenges'
    ],
    detailedFeatures: [
      { name: 'Four-week Plans', description: 'Personalized training plans based on your level (Beginner, Intermediate, Advanced) and goals (First 25, Road to 50, Road to 100).' },
      { name: 'Live Rep Tracking', description: 'Use the camera during workouts for movement-based movement estimation and rep counting with real-time feedback.' },
      { name: 'Practice Modes', description: 'Train your way with Sets Workout, Open Goal, Reps Per Minute, and Daily Session modes.' },
      { name: 'Progress Tracking', description: 'Monitor reps, duration, calories, streaks, and best sessions with detailed charts and history.' },
      { name: 'Social & Competition', description: 'Join challenges, earn achievement badges, and compare progress on global, country, and friends leaderboards.' },
      { name: 'Privacy-First', description: 'Workout video is not saved by default. Guest mode allows training without an account, with local-first data storage.' }
    ],
    platforms: ['iOS'],
    screenshots: [
      '/images/push-counter/onboarding_camera.png',
      '/images/push-counter/onboarding_compete.png',
      '/images/push-counter/home_bg.png'
    ],
    version: '1.0.0',
    rating: 0,
    reviews: 0,
    downloads: '',
    price: 'Free with Pro options',
    color: '#000000',
    gradient: 'from-zinc-50 to-white',
    team: [
      { id: 't1', name: 'Ahmed Mansour', role: 'Founder & Developer', avatar: '/me.jpg', bio: 'Independent developer focused on creating calm, intentional, and meaningful digital experiences.' },
    ],
    privacy: {
      dataCollection: 'Push Counter collects account info, workout stats, training settings, and subscription status. Camera measurements are used live for rep counting and not saved as video.',
      dataStorage: 'Core data is stored locally. Synced accounts use secure backend storage for leaderboards, challenges, and cross-device continuity.',
      userRights: 'You can edit your profile, deny permissions, use guest mode, or delete your account and synced data from Settings.',
    },
    security: {
      encryption: 'AES-256 encryption at rest, TLS 1.3 in transit.',
      compliance: ['GDPR Compliant', 'CCPA Ready'],
      audits: 'Regular internal security assessments and reviews.',
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
    description: 'Use Nexfiy apps on iOS and Web seamlessly.',
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

// PushUpCounterIcon removed
