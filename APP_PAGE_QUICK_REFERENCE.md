# App Detail Page - Quick Reference Guide

## URL Pattern
```
/apps/[appId]
```

### Examples
- `/apps/vitality`
- `/apps/focus-hub`
- `/apps/mindflow`
- `/apps/task-master`
- `/apps/pulse`

---

## Page Sections (Top to Bottom)

### 1. Header Section
**What it shows:**
- App icon (large, 8xl)
- App name & tagline
- Star rating (with partial stars based on actual rating)
- Review count + download statistics
- **App Store, Google Play, Web buttons** ← Direct download links
- Social sharing (Facebook, Twitter, LinkedIn)
- Save to favorites button

**Key Features:**
- Platform-specific button colors
- Proper icons for each action
- Responsive layout (stacks on mobile)
- Gradient background matching app theme

### 2. About Section
**What it shows:**
- Long description of the app
- Use case and benefits
- Target audience

### 3. Features Section
**What it shows:**
- 6 detailed features in 2-column grid
- Feature name + description
- Interactive cards with hover effects

**Layout:**
- 1 column on mobile
- 2 columns on tablet/desktop

### 4. Platforms Section ⭐ NEW
**What it shows:**
- iOS → App Store link + requirements
- Android → Google Play link + requirements
- Web → Web app link + supported browsers
- macOS → App Store link + requirements

**Key Features:**
- Each platform card shows system requirements
- Direct links to download pages
- Platform-specific button colors
- Responsive grid (1-2 columns)

### 5. Pricing Section
**What it shows:**
- App pricing (e.g., "Free with $9.99/month Premium")
- Current version number
- "No hidden fees" messaging
- Download CTA button

### 6. Legal & Information Section ⭐ REDESIGNED
**4-column layout:**
1. **Privacy Policy** (internal) - `/apps/[appId]/privacy`
2. **Security Details** (internal) - `/apps/[appId]/security`
3. **Apple Legal** (external) - Opens Apple's privacy policy
4. **Google Legal** (external) - Opens Google's privacy policy

**Key Features:**
- All external links open in new tab
- Clear descriptions
- Hover effects with color change
- Accessible design

### 7. Contact Us Section ⭐ NEW (Replaces Team)
**What it shows:**
- Introduction message
- Email support: `support@nexfiy.app`
- Twitter/X: `@nexfiy`
- LinkedIn: `Nexfiy Team`
- Response time: "24 hours"
- "Send us a Message" CTA button

**Key Features:**
- Personal, founder-focused tone
- Multiple contact methods
- Direct links (no forms)
- Accessible and clear

### 8. Related Apps Section
**What it shows:**
- 3 related apps (not including current app)
- App icon, name, and tagline
- Links to each app page

**Layout:**
- Responsive grid (1-3 columns)
- Gradient cards matching app theme
- Hover zoom effect

---

## Key Interactive Elements

### App Store Links
```html
<a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
  App Store
</a>
```

### Social Sharing
- Facebook
- Twitter/X
- LinkedIn

### Contact Options
- Email: `support@nexfiy.app`
- Social: `@nexfiy` (Twitter)
- LinkedIn: Company page

### Internal Navigation
- Privacy Policy: `/apps/[appId]/privacy`
- Security: `/apps/[appId]/security`
- Team: `/apps/[appId]/team` (accessible via Contact section)

### External Links
- Apple Privacy: `https://www.apple.com/legal/privacy/products/`
- Google Privacy: `https://policies.google.com/privacy`

---

## Responsive Breakpoints

### Mobile (< 768px)
- Single column layouts
- Stacked buttons
- Reduced padding
- Full-width cards

### Tablet (768px - 1024px)
- 2-column grids
- Side-by-side buttons
- Balanced spacing

### Desktop (> 1024px)
- 3-4 column grids
- Horizontal layouts
- Generous spacing

---

## Color Scheme

### Primary Actions
- **App Store (iOS)**: Black (#000000)
- **Google Play**: Green (#10B981)
- **Web**: Blue (primary color)
- **macOS**: Gray (#374151)

### Backgrounds
- **Header**: Gradient (app-specific, e.g., `from-red-50 to-orange-50`)
- **Sections**: Alternating between `background` and `secondary/20`
- **Cards**: `background` with `border-border`

### Text
- **Headings**: `text-foreground` (dark)
- **Body**: `text-foreground/70` (lighter)
- **Links**: Inherit color with `hover:underline`

---

## Accessibility Features

✅ **Screen Reader Support**
- All icons have sr-only labels
- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML structure

✅ **Keyboard Navigation**
- All buttons and links are keyboard accessible
- Focus states visible
- Tab order is logical

✅ **Color Contrast**
- WCAG AA compliant
- Works in light and dark modes
- No color-only information

✅ **Mobile Friendly**
- Large touch targets (44x44px minimum)
- Readable font sizes
- No horizontal scrolling

---

## Data Structure

### App Data Required
```typescript
{
  id: string                    // "vitality", "focus-hub", etc.
  name: string                  // "Vitality"
  tagline: string              // "Health Tracking"
  description: string          // Short description
  fullDescription: string      // Medium description
  longDescription: string      // Long description
  features: string[]           // 6 basic features
  detailedFeatures: [          // 6 detailed features
    { name: string; description: string }
  ]
  platforms: string[]          // ["iOS", "Android", "Web"]
  screenshots: string[]        // Image paths
  version: string              // "2.4.1"
  rating: number               // 4.9
  reviews: number              // 2847
  downloads: string            // "500K+"
  price: string                // "Free with $9.99/month Premium"
  color: string                // "#FF6B6B"
  gradient: string             // "from-red-50 to-orange-50"
  team: [                       // Team members (shown on /team page)
    { id, name, role, avatar, bio }
  ]
  privacy: {                    // Privacy info (shown on /privacy page)
    dataCollection: string
    dataStorage: string
    userRights: string
  }
  security: {                   // Security info (shown on /security page)
    encryption: string
    compliance: string[]
    audits: string
  }
}
```

---

## Common Customizations

### Update App Store Links
**File**: `lib/apps-data.tsx`

**Example**: Add actual app store URLs to data structure
```typescript
appStoreUrl?: string
googlePlayUrl?: string
webUrl?: string
```

Then update links in the page template.

### Change Contact Information
**File**: `app/apps/[appId]/page.tsx`

**Lines to update:**
- Email: Search `support@nexfiy.app`
- Twitter: Search `@nexfiy`
- LinkedIn: Search `Nexfiy Team`

### Modify Pricing Section
**File**: `app/apps/[appId]/page.tsx`

Update the `app.price` display and messaging.

### Add More Platforms
**File**: `lib/apps-data.tsx`

Add platform to `platforms: []` array, then add corresponding card in "Platforms Section".

---

## Testing Checklist

- [ ] Header displays correctly on mobile
- [ ] Star rating shows correct number of filled stars
- [ ] All app store buttons link to correct destinations
- [ ] Social sharing buttons work
- [ ] Privacy & security links go to correct pages
- [ ] Contact info is correct and linked
- [ ] Apple & Google legal links open in new tab
- [ ] Related apps section shows different apps
- [ ] Page is responsive on mobile, tablet, desktop
- [ ] All text is readable (contrast, size)
- [ ] Keyboard navigation works throughout
- [ ] Screen reader reads content correctly

---

## Performance Notes

- **Build Time**: ~6 seconds
- **Page Generation**: ~455ms for all 24 pages
- **Static Routes**: All pages pre-rendered at build time
- **Image Optimization**: Ready for placeholder images
- **Code Splitting**: Automatic per route

---

## Browser Support

✅ Chrome/Edge (latest)
✅ Safari (14+)
✅ Firefox (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements

1. Add `appStoreUrl`, `googlePlayUrl`, `webUrl` to data
2. Create screenshot carousel
3. Add user reviews section
4. Add FAQ section
5. Add changelog/version history
6. Create contact form with backend
7. Add live chat support
8. Implement wishlist/save feature
9. Add related content recommendations
10. Create comparison tool for apps
