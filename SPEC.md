# Santiago Abregu — Portfolio Specification

## 1. Concept & Vision

A technical, modern single-page portfolio that positions Santiago as a QA Automation Engineer and Frontend Developer who bridges testing, development, and process optimization. The site should feel like a professional landing page — not a resume copy-paste — with a slightly futuristic, code-test-inspired aesthetic. Clean, dark, confident, and data-driven.

## 2. Design Language

### Aesthetic Direction
Dark tech terminal aesthetic with subtle glowing accents, inspired by IDE themes and automation dashboards. Professional but distinctive — avoids generic corporate stock-photo style.

### Color Palette
```
--bg-primary: #0F172A      /* Deep navy background */
--bg-surface: #1E293B     /* Card/surface background */
--text-primary: #F8FAFC    /* Main text */
--text-secondary: #94A3B8  /* Muted text */
--accent-primary: #38BDF8  /* Sky blue - primary accent */
--accent-secondary: #A78BFA /* Violet - secondary accent */
--accent-success: #22C55E  /* Green - automation/success */
--border: #334155          /* Subtle borders */
```

### Typography
- Headings: `JetBrains Mono` (monospace, technical feel)
- Body: `Inter` (clean, readable)

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px
- Gap between cards: 24px

### Motion Philosophy
- Subtle fade-in on scroll (opacity 0→1, 300ms ease)
- Hover states with 150ms transitions
- No excessive animations — professional tone

## 3. Layout & Structure

Single-page with sticky navbar. Sections (in order):
1. **Hero** — Full viewport height, headline + subheadline + CTAs
2. **About** — Two-column text block
3. **What I Do** — 3 feature cards
4. **Experience** — Timeline with company cards
5. **Skills** — Grouped skill badges by category
6. **Featured Work** — 4 case study cards
7. **Mini Tools / Lab** — Grid of project placeholders
8. **Education** — Timeline cards
9. **Languages** — Simple display
10. **Contact** — CTA section with links

### Responsive Strategy
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg)
- Cards stack vertically on mobile
- Timeline alternates sides on desktop

## 4. Features & Interactions

### Navigation
- Sticky navbar with blur backdrop
- Smooth scroll to sections
- Mobile hamburger menu with slide-out drawer

### Language Switcher
- Detects browser language on first visit (prefers "es" if browser starts with "es")
- Persists selection in localStorage
- Manual switch always takes priority over browser detection
- Toggle button shows current language, clicking switches to opposite

### Interactions
- Cards: subtle scale(1.02) and border glow on hover
- Buttons: background color shift on hover
- Tags: pill-shaped badges
- Timeline: vertical line connecting items

## 5. Component Inventory

### NavBar
- Logo/name on left
- Nav links center (desktop)
- Language toggle + mobile menu button right
- States: default, scrolled (adds shadow/blur)

### HeroSection
- Large headline
- Subheadline paragraph
- Two CTA buttons: "Contact Me" (primary), "View Experience" (secondary ghost)
- Decorative terminal/code visual element

### SectionTitle
- Section heading with accent underline
- Optional subtitle

### Card
- Surface background with border
- Icon or visual indicator top
- Title, description, optional tags
- Hover: subtle glow/scale

### TimelineItem
- Date badge
- Company name + role
- Description list
- Tech tags
- Connected by vertical line

### SkillBadge
- Pill-shaped
- Category color coding

### CaseStudyCard
- Image placeholder or icon
- Title
- Description
- Tags
- Hover state

### ToolCard
- Project name
- Description
- Stack tags
- Status badge (Coming Soon / Planned / Available)
- Optional action buttons

### ContactSection
- Heading
- Email link
- Location/ timezone info
- Social links (LinkedIn, GitHub)
- CV Download button

## 6. Technical Approach

### Stack
- **Vue 3** with Composition API
- **Vite** for build tooling
- **Vanilla CSS** with CSS variables (no Tailwind)
- Single-page application

### i18n Implementation
- Centralized translations object with `en` and `es` keys
- Reactive language state
- localStorage persistence
- Components receive text via props or composable

### Project Structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── styles/
│   │   └── main.css
│   ├── composables/
│   │   └── useI18n.js
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── WhatIDoSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── FeaturedWorkSection.vue
│   │   ├── MiniToolsSection.vue
│   │   ├── EducationSection.vue
│   │   ├── LanguagesSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   └── translations/
│       └── index.js
```

### Translations Coverage
All text content must be translated:
- Navbar links, logo text
- Hero: headline, subheadline, CTAs
- About: paragraph text
- What I Do: card titles and descriptions
- Experience: company names, roles, responsibilities, dates
- Skills: category titles, skill names
- Featured Work: titles, descriptions, tags
- Mini Tools: project names, descriptions, status labels
- Education: institution names, descriptions
- Languages: language names with levels
- Contact: heading, email, location, social labels
- Button labels throughout
