# Nexora Landing Page - Project Structure

## 📁 Folder & File Organization

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Main landing page (entry point)
│   ├── privacy/
│   │   └── page.tsx              # Privacy Policy
│   ├── terms/
│   │   └── page.tsx              # Terms of Service
│   ├── security/
│   │   └── page.tsx              # Security & Privacy Info
│   └── globals.css               # Global theme styles
│
├── components/
│   ├── landing/                   # Landing page sections
│   │   ├── hero.tsx              # Hero section with CTA
│   │   ├── intro.tsx             # Company introduction
│   │   ├── apps-showcase.tsx     # Apps grid display
│   │   ├── app-modal.tsx         # App details modal
│   │   ├── features.tsx          # Features overview
│   │   ├── about.tsx             # Company story & values
│   │   ├── trust.tsx             # Security & trust section
│   │   └── footer.tsx            # Footer with links
│   │
│   └── ui/                        # shadcn/ui components (pre-installed)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (other shadcn components)
│
├── lib/
│   └── apps-data.ts              # App data & features config
│
├── public/
│   └── images/
│       ├── app-vitality.jpg      # Health tracking app image
│       ├── app-focus-hub.jpg     # Focus timer app image
│       ├── app-mindflow.jpg      # Meditation app image
│       ├── app-task-master.jpg   # Task management app image
│       └── app-pulse.jpg         # Wellness tracking app image
│
├── styles/
│   └── globals.css               # Theme colors & global styles
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── STRUCTURE.md                  # This file
```

## 🎨 Design System

### Color Palette (Premium Light Theme)
- **Background**: Pure white/off-white (`oklch(0.995 0 0)`)
- **Foreground**: Dark/black (`oklch(0.1 0 0)`)
- **Accent**: Dark accents (`oklch(0.3 0 0)`)
- **Muted**: Light grays (`oklch(0.82 0 0)`)
- **Border**: Subtle borders (`oklch(0.93 0 0)`)

### Typography
- **Font Family**: Geist (default Next.js font)
- **Headings**: Bold, large sizes (4xl-7xl)
- **Body Text**: Regular weight, 16-18px

### Components Used
- **shadcn/ui Button** - CTA buttons, navigation
- **shadcn/ui Card** - App cards, feature cards
- **shadcn/ui Dialog** - App details modal
- **Lucide Icons** - Trust/security icons

## 🚀 Pages & Sections

### Home Page (`app/page.tsx`)
Composed of multiple sections:
1. **Hero** - Headline, subheading, CTA buttons
2. **Intro** - Company overview
3. **Apps Showcase** - 5 app cards in a grid (clickable)
4. **Features** - 6 feature highlights with icons
5. **About** - Company story and values
6. **Trust & Security** - Security measures & certifications
7. **Footer** - Navigation, legal links, copyright

### Legal Pages
- **Privacy Policy** (`app/privacy/page.tsx`) - Data handling & privacy
- **Terms of Service** (`app/terms/page.tsx`) - Terms & conditions
- **Security** (`app/security/page.tsx`) - Security practices & certifications

## 📱 App Data Structure

Each app has:
- **id** - Unique identifier
- **name** - App name
- **category** - health/productivity/focus/wellness
- **icon** - Emoji icon
- **shortDescription** - One-liner for grid
- **fullDescription** - Detailed description for modal
- **features** - Array of 6 key features
- **platforms** - iOS, Android, Web, macOS, Windows
- **backgroundColor** - Gradient for card background
- **image** - Path to app screenshot

### Apps in Ecosystem
1. **Vitality** - Health tracking and wellness metrics
2. **Focus Hub** - Distraction-free productivity
3. **MindFlow** - Meditation and mindfulness
4. **Task Master** - Smart task management
5. **Pulse** - Real-time wellness monitoring

## 💡 Key Features

### Interactive Modal
- Click any app card to view detailed information
- Shows full description, 6 features, platforms, CTA button
- Smooth open/close animations with shadcn Dialog

### Responsive Design
- Mobile-first approach
- Grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
- Touch-friendly buttons and spacing
- Optimized for all screen sizes

### Premium Styling
- Spacious layouts with generous padding
- Subtle hover effects on cards
- Gradient text in hero section
- Smooth transitions and animations
- Dark theme support (via shadcn theme-provider)

### Accessibility
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliant

## 🔧 Development

### Install Dependencies
```bash
pnpm install
```

### Run Dev Server
```bash
pnpm dev
```
Server runs on `http://localhost:3000`

### Build for Production
```bash
pnpm build
pnpm start
```

### Key Technologies
- **Next.js 16** with App Router
- **React 19.2** with server components
- **Tailwind CSS v4** for styling
- **shadcn/ui** for components
- **TypeScript** for type safety
- **Turbopack** (default bundler)

## 📝 Customization

### Adding New Apps
Edit `lib/apps-data.ts`:
```typescript
{
  id: 'app-id',
  name: 'App Name',
  category: 'category',
  icon: '🎯',
  shortDescription: '...',
  fullDescription: '...',
  features: ['...', '...'],
  platforms: ['iOS', 'Android'],
  backgroundColor: 'from-color-50 to-color-50',
  image: '/images/app-name.jpg',
}
```

### Changing Colors
Edit `styles/globals.css` - Update CSS variables in `:root` section

### Modifying Sections
Each section is a separate component in `components/landing/` for easy editing

## 🎯 Next Steps

1. **Deploy** - Push to GitHub and deploy via Vercel
2. **Analytics** - Add tracking (e.g., Vercel Analytics)
3. **SEO** - Update metadata, add sitemap.xml
4. **Forms** - Integrate newsletter signup or contact form
5. **Images** - Replace placeholder images with real app screenshots
6. **Content** - Update copy for your specific apps and messaging
