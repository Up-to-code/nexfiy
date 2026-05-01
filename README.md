# Nexora - Premium Landing Page

A beautiful, modern landing page for Nexora, a premium application ecosystem for health, productivity, and focus.

## 🎨 Design Features

- **Premium Light Theme**: Clean white backgrounds with dark text accents
- **Interactive App Showcase**: 5 clickable app cards with detailed modal views
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Professional Sections**: Hero, intro, features, about, trust/security, footer
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: Full semantic HTML and ARIA compliance
- **SEO Optimized**: Metadata, Open Graph, and keywords included

## 📱 Sections

### Landing Page
- **Hero Section** - Bold headline with dual CTA buttons and trust indicators
- **Company Intro** - Mission statement and value proposition
- **Apps Showcase** - 5 interactive app cards (click to view details)
- **Features** - 6 key feature highlights
- **About** - Company story and core values
- **Trust & Security** - Security measures and certifications
- **Footer** - Navigation, legal links, and copyright

### Apps Featured
1. **Vitality** ❤️ - Health tracking and wellness metrics
2. **Focus Hub** 🎯 - Distraction-free productivity
3. **MindFlow** 🧘 - Meditation and mindfulness
4. **Task Master** ✓ - Smart task management
5. **Pulse** ⚡ - Real-time wellness monitoring

### Legal Pages
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/security` - Security & Privacy Information

## 🚀 Quick Start

### Development
```bash
pnpm install
pnpm dev
```
Visit `http://localhost:3000`

### Build & Deploy
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
```bash
vercel deploy
```

## 📁 Project Structure

```
/app                         # Pages and layouts
  /landing                   # Landing page components
  /privacy /terms /security  # Legal pages
  
/components
  /landing                   # Section components
  /ui                        # shadcn/ui components
  
/lib
  apps-data.ts              # App definitions and data
  
/public/images              # Generated app preview images

/styles
  globals.css               # Global styles and theme
```

## 🎯 Key Features

### Interactive App Modal
Click any app card to view:
- Full description
- 6 key features
- Available platforms
- Call-to-action button

### Responsive Grid Layout
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

### Modern Tech Stack
- Next.js 16 (App Router)
- React 19.2 (Server Components)
- Tailwind CSS v4
- shadcn/ui Components
- TypeScript
- Turbopack

## 🎨 Customization

### Change App Information
Edit `lib/apps-data.ts` - Update the `NEXORA_APPS` array

### Update Colors
Edit `styles/globals.css` - Modify CSS variables in `:root` section

### Edit Copy
Update text in component files:
- `components/landing/hero.tsx` - Headlines
- `components/landing/about.tsx` - Company story
- `components/landing/trust.tsx` - Security messaging

### Replace App Images
Generated images are in `public/images/` - Replace with your actual app screenshots

## 🔧 Technical Details

### Color System
```css
--background:  #fdfbff (pure white)
--foreground:  #1a1a1a (dark text)
--accent:      #2d2d2d (dark accents)
--muted:       #d1d1d1 (light gray)
--border:      #e8e8e8 (subtle borders)
```

### Typography
- **Font**: Geist (system font)
- **Headings**: Bold, 3xl-7xl
- **Body**: Regular, 16-18px, relaxed line-height

### Components Used
- Button (shadcn)
- Card (shadcn)
- Dialog (shadcn for modal)
- Icons (Lucide)

## 📖 Documentation

- `STRUCTURE.md` - Detailed folder structure guide
- `NEXORA_SUMMARY.md` - Complete implementation summary

## ✨ What's Included

✅ 8 landing page sections  
✅ 5 app showcase cards with modal  
✅ 3 legal pages (Privacy, Terms, Security)  
✅ Responsive design  
✅ Accessibility compliant  
✅ SEO optimized  
✅ Production-ready code  
✅ Generated app preview images  
✅ TypeScript throughout  

## 🚀 Next Steps

1. **Customize Content**
   - Update app details in `lib/apps-data.ts`
   - Edit company copy in components
   - Replace generated images with real app screenshots

2. **Add Functionality**
   - Newsletter signup form
   - Contact form
   - Analytics integration
   - Email notifications

3. **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Set up custom domain

## 📄 License

Built with [v0](https://v0.app) - Premium landing page template

---

**Ready to launch?** Your Nexora landing page is production-ready! 🎉
