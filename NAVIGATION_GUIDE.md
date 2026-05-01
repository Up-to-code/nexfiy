# Nexfiy Application - Navigation Guide

## Complete URL Map

### 🏠 Home & Company Pages
```
/ ................................. Home (Landing Page)
/privacy .............................. Company Privacy Policy
/terms ............................... Company Terms of Service
/security ............................. Company Security Information
```

### 📱 Apps Section
```
/apps ................................ Apps Directory (All 5 Apps)
  ├── /apps/vitality ................. Vitality App Detail Page
  │   ├── /apps/vitality/privacy .... Privacy Policy
  │   ├── /apps/vitality/security ... Security Details
  │   └── /apps/vitality/team ....... Team Behind App
  │
  ├── /apps/focus-hub ............... Focus Hub App Detail Page
  │   ├── /apps/focus-hub/privacy ... Privacy Policy
  │   ├── /apps/focus-hub/security .. Security Details
  │   └── /apps/focus-hub/team ...... Team Behind App
  │
  ├── /apps/mindflow ................ MindFlow App Detail Page
  │   ├── /apps/mindflow/privacy .... Privacy Policy
  │   ├── /apps/mindflow/security ... Security Details
  │   └── /apps/mindflow/team ....... Team Behind App
  │
  ├── /apps/task-master ............. Task Master App Detail Page
  │   ├── /apps/task-master/privacy . Privacy Policy
  │   ├── /apps/task-master/security  Security Details
  │   └── /apps/task-master/team ... Team Behind App
  │
  └── /apps/pulse ................... Pulse App Detail Page
      ├── /apps/pulse/privacy ....... Privacy Policy
      ├── /apps/pulse/security ...... Security Details
      └── /apps/pulse/team .......... Team Behind App
```

### 🔧 Services Section
```
/services ............................ Services Overview
  ├── /services/custom-design ........ Custom Design Service
  ├── /services/app-development ...... App Development Service
  ├── /services/technical-support .... Technical Support Service
  ├── /services/security-audit ....... Security Audit Service
  ├── /services/performance-optimization Performance Optimization
  └── /services/maintenance-support .. Maintenance & Updates
```

### 👥 Teams Section
```
/teams .............................. Teams Overview
  ├── /teams/design-team ............ Design Team
  ├── /teams/development-team ....... Development Team
  ├── /teams/product-team ........... Product Team
  └── /teams/support-team ........... Support Team
```

## Navigation Patterns

### Main Navbar Links
```
Nexfiy (Logo) → /
├── Home → /
├── Apps → /apps
├── Services → /services
├── Teams → /teams
└── Get Started → /#contact
```

### Breadcrumb Navigation
Appears on all detail pages:
```
Home > Section > [Subsection] > Current Page
```

Examples:
- Home > Apps > Vitality
- Home > Services > Custom Design
- Home > Teams > Design Team
- Home > Apps > Vitality > Privacy

## App Navigation Map

### Each App Page (`/apps/[appId]`)
```
App Header (Rating, Downloads, CTAs)
    ↓
About Section
    ↓
Features Grid
    ↓
Available Platforms
    ↓
Pricing Information
    ↓
Quick Links
├── Privacy Policy
├── Security Details
└── Team Information
    ↓
Related Apps (3 recommendations)
```

### App Privacy Page (`/apps/[appId]/privacy`)
```
← Back to [App Name]
    ↓
Privacy Policy Title
    ↓
Data Collection
    ↓
Data Storage
    ↓
User Rights
    ↓
Privacy Contact
    ↓
← Back to [App Name]
```

### App Security Page (`/apps/[appId]/security`)
```
← Back to [App Name]
    ↓
Security Details Title
    ↓
Encryption Information
    ↓
Compliance & Standards
    ↓
Security Audits
    ↓
Best Practices
    ↓
Security Contact
    ↓
← Back to [App Name]
```

### App Team Page (`/apps/[appId]/team`)
```
← Back to [App Name]
    ↓
Team Members Grid
    ↓
Team Roles Explanation
    ↓
Team Values
    ↓
Contact Section
    ↓
← Back to [App Name]
```

## Service Navigation Map

### Services Overview (`/services`)
```
Services Header
    ↓
Services Grid (6 cards)
├── Custom Design
├── App Development
├── Technical Support
├── Security Audit
├── Performance Optimization
└── Maintenance & Updates
    ↓
Contact CTA
```

### Individual Service Page (`/services/[serviceId]`)
```
Service Header & Icon
    ↓
Service Description
    ↓
What's Included (Features)
    ↓
Pricing Information
    ↓
Related Services (3 recommendations)
    ↓
CTA Section
```

## Teams Navigation Map

### Teams Overview (`/teams`)
```
Teams Header
    ↓
Teams Grid (4 teams)
├── Design Team
├── Development Team
├── Product Team
└── Support Team
    ↓
Shared Values Section
    ↓
Join Our Team CTA
```

### Individual Team Page (`/teams/[teamId]`)
```
Team Header & Role
    ↓
Team Description
    ↓
Team Mission
    ↓
Focus Areas
    ↓
Team Members Grid
    ├── Member 1
    ├── Member 2
    ├── Member 3
    └── Member 4
    ↓
Team Values
    ↓
Other Teams (3 recommendations)
    ↓
Contact Section
```

## Cross-Linking Strategy

### Apps Page
```
Each app card links to:
- /apps/[appId] (detail page)

App detail page links to:
- /apps/[appId]/privacy
- /apps/[appId]/security
- /apps/[appId]/team
- Other /apps/[otherId] (3 related apps)
```

### Services Page
```
Each service card links to:
- /services/[serviceId] (detail page)

Service detail page links to:
- Other /services/[otherId] (3 related services)
```

### Teams Page
```
Each team card links to:
- /teams/[teamId] (detail page)

Team detail page links to:
- Other /teams/[otherId] (3 other teams)
```

## Search/Discovery Paths

### To find a specific app:
1. Click "Apps" in navbar → /apps
2. Browse app grid or search
3. Click app card → /apps/[appId]
4. Explore:
   - Privacy policy → /apps/[appId]/privacy
   - Security info → /apps/[appId]/security
   - Team behind it → /apps/[appId]/team

### To find a service:
1. Click "Services" in navbar → /services
2. Browse or search services
3. Click service card → /services/[serviceId]
4. View details and related services

### To learn about teams:
1. Click "Teams" in navbar → /teams
2. Browse team grid
3. Click team card → /teams/[teamId]
4. View members and mission

## URL Structure Best Practices

✅ **Implemented**
- Semantic URLs that describe content
- Hierarchical structure (section/item)
- Lowercase and hyphenated IDs
- Consistent naming conventions
- Clear breadcrumb support
- SEO-friendly structure

**Examples:**
- `/apps/focus-hub` (not `/app/1` or `/apps?id=2`)
- `/services/custom-design` (descriptive and memorable)
- `/teams/development-team` (clear purpose)

## Total Routes: 24

### Static: 7
- /
- /privacy
- /terms
- /security
- /apps
- /services
- /teams

### Dynamic SSG: 15
- /apps/vitality, focus-hub, mindflow, task-master, pulse (5)
- /services/custom-design, app-development, technical-support, security-audit, performance-optimization, maintenance-support (6)
- /teams/design-team, development-team, product-team, support-team (4)

### Dynamic On-Demand: 2
- /apps/[appId]/privacy (5 instances)
- /apps/[appId]/security (5 instances)
- /apps/[appId]/team (5 instances)

**Total unique routes with parameters: 24+**

## Navigation Accessibility

✅ **Features Implemented**
- Semantic navigation structure
- Breadcrumb trails on all detail pages
- Clear back links on sub-pages
- Skip to main content support ready
- Keyboard navigation friendly
- Mobile-responsive menu
- ARIA labels on interactive elements

---

**Last Updated**: May 1, 2026
**Framework**: Next.js 16 with App Router
**Total Pages**: 24+ rendered routes
