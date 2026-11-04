# 🚀 Veda Technology — Business & Services Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-blue?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-Optimized-green?style=for-the-badge)

> A professional, multi-section responsive business website for **Veda Technology** — a global IT services, digital solutions, and staffing company. Built with semantic HTML5, advanced CSS3, and Vanilla JavaScript.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [SEO Compliance](#-seo-compliance)
- [Accessibility (A11y)](#-accessibility-a11y)
- [JavaScript Interactions](#-javascript-interactions)
- [Responsive Design](#-responsive-design)
- [Color Palette & Design System](#-color-palette--design-system)
- [Deployment Workflow](#-deployment-workflow)
- [Deployment Configuration](#-deployment-configuration)
- [Rollback Evidence](#-rollback-evidence)
- [Git Workflow & Conventional Commits](#-git-workflow--conventional-commits)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Project Overview

This project is a **production-ready, single-page business website** for Veda Technology — a real IT Services and IT Consulting company with offices in Lemoyne, PA (USA) and Hyderabad, India. The website showcases:

- Company information and mission
- Technology programs and solutions
- IT & digital services portfolio
- Training and internship offerings
- Frequently asked questions
- Contact information with a functional form

The project was built from scratch using **only HTML5, CSS3, and Vanilla JavaScript** — no external frameworks or libraries for interactivity.

---

## 🌐 Live Demo

🔗 **[View Live Site](https://vishal-maddheshiya.github.io/Veda-Technology-Business-Services-Website/)**

---

## ✨ Features

### UI/UX
- ✅ **Pixel-perfect, modern design** with high-tech color palette
- ✅ **Fully responsive** — desktop, tablet, and mobile breakpoints
- ✅ **Smooth scroll animations** with IntersectionObserver
- ✅ **Elegant hover effects** and CSS transitions on cards
- ✅ **CSS Custom Properties** (design tokens) for maintainable theming
- ✅ **Professional typography** — Space Grotesk + Inter font pairing
- ✅ **Gradient accents** and glassmorphism effects

### JavaScript Interactions
- ✅ **FAQ Accordion** — smooth height transitions, dynamic chevron rotation, single-open behavior
- ✅ **Dynamic Category Filters** — filter Technology Programs and Digital Services cards without page reload
- ✅ **Mobile Navigation Controller** — hamburger toggle, focus trapping, outside-click/ESC close, scroll lock
- ✅ **Scroll-to-Top** button with visibility toggle
- ✅ **Active nav highlighting** based on scroll position
- ✅ **Contact form validation** with user-friendly feedback messages

### SEO & Semantics
- ✅ **Semantic HTML5** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ✅ **Complete meta tags** — title, description, keywords, robots
- ✅ **Open Graph (OG) tags** for social media sharing
- ✅ **Twitter Card** meta tags
- ✅ **Canonical URL** tag
- ✅ **ARIA attributes** for accessibility
- ✅ **SVG favicon**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure & content |
| **CSS3** | Styling, animations, responsive design |
| **Vanilla JavaScript** | Interactions, DOM manipulation |
| **Tailwind CSS (CDN)** | Utility reference (design system) |
| **Google Fonts** | Typography (Space Grotesk + Inter) |
| **Pexels** | Stock photography |
| **Git & GitHub** | Version control & deployment |

---

## 📁 Folder Structure

```
veda-technology-website/
│
├── index.html              # Main single-page application
├── README.md               # Project documentation (this file)
├── CHANGELOG.md            # Version history with conventional commits
├── .gitignore              # Git ignore rules
│
├── docs/                   # Documentation assets
│   ├── deployment.md       # Deployment configuration guide
│   └── rollback-evidence/  # Screenshots/logs of rollback procedures
│       ├── rollback-v1.0-screenshot.png
│       └── rollback-log.md
│
└── assets/                 # (Optional) Local assets
    ├── images/             # Optimized images (if self-hosted)
    └── favicon/            # Favicon files
```

> **Note:** This project uses a single `index.html` file with inline CSS and JavaScript for simplicity and portability. For production scaling, styles and scripts can be extracted into separate files.

---

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)
- A code editor (VS Code recommended)

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/VISHAL-MADDHESHIYA/veda-technology-website.git

# 2. Navigate to the project directory
cd veda-technology-website

# 3. Open in your browser
open index.html
# Or use a live server:
# VS Code: Right-click index.html → "Open with Live Server"
# Or: npx serve .
```

### Using Live Server (Recommended)
```bash
# Install live-server globally
npm install -g live-server

# Run from project root
live-server --port=3000
```

---

## 🔍 SEO Compliance

| SEO Element | Implementation |
|---|---|
| **Title Tag** | Descriptive, keyword-rich title under 60 characters |
| **Meta Description** | Compelling description under 160 characters |
| **Meta Keywords** | Relevant industry keywords |
| **Canonical URL** | Self-referencing canonical tag |
| **Open Graph Tags** | og:title, og:description, og:type, og:url, og:image |
| **Twitter Cards** | summary_large_image card type |
| **Semantic HTML** | Proper heading hierarchy (H1 → H2 → H3) |
| **Alt Text** | Descriptive alt attributes on all images |
| **ARIA Labels** | Landmark roles and labels for screen readers |
| **Robots Meta** | `index, follow` directive |
| **Favicon** | SVG favicon with fallback |

---

## ♿ Accessibility (A11y)

- **ARIA roles** on navigation (`role="menubar"`, `role="menuitem"`)
- **ARIA expanded/hidden** states on FAQ accordion and mobile nav
- **Focus trapping** in mobile navigation menu
- **Keyboard navigation** — full Tab/Shift+Tab/Escape support
- **Semantic landmarks** — header, nav, main, section, article, footer
- **Color contrast** — meets WCAG 2.1 AA standards
- **Focus indicators** — visible focus styles on interactive elements

---

## ⚡ JavaScript Interactions

### 1. FAQ Accordion
- Single-open behavior (only one item open at a time)
- Smooth `max-height` CSS transitions
- Dynamic chevron icon rotation (180°)
- ARIA `aria-expanded` and `aria-hidden` attribute management

### 2. Dynamic Category Filter
- Two independent filter systems (Technology Programs & Digital Services)
- Seamless card show/hide with `fadeInUp` animation
- No page reload — pure DOM manipulation
- Active button state management with ARIA `aria-selected`

### 3. Mobile Navigation Controller
- Hamburger → X animation with CSS transforms
- Slide-in navigation panel
- Focus trap (Tab/Shift+Tab cycling, Escape to close)
- Click-outside-to-close via overlay
- Auto-close on window resize to desktop breakpoint
- Body scroll lock when menu is open

---

## 📱 Responsive Design

| Breakpoint | Target | Layout Changes |
|---|---|---|
| `> 1024px` | Desktop | Full grid layouts, side-by-side sections |
| `768px – 1024px` | Tablet | 2-column grids, hidden hero image |
| `< 768px` | Mobile | Single column, hamburger nav, stacked cards |
| `< 480px` | Small Mobile | Reduced padding, smaller fonts |

---

## 🎨 Color Palette & Design System

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `--primary-900` | `#0c1a3a` | Hero background |
| `--primary-600` | `#1a3a8a` | Dark accents |
| `--primary-500` | `#2563eb` | Primary CTA buttons |
| `--primary-400` | `#3b82f6` | Links, highlights |
| `--primary-50` | `#eff6ff` | Light backgrounds |

### Accent Palette
| Token | Hex | Usage |
|---|---|---|
| `--accent-500` | `#06b6d4` | Gradient endpoints, tech accents |
| `--accent-400` | `#22d3ee` | Stat numbers, glows |

### Font Pairing
| Font | Weight | Usage |
|---|---|---|
| **Space Grotesk** | 400–700 | Headings, display text |
| **Inter** | 300–900 | Body copy, UI elements |

---

## 🔄 Rollback Evidence

### Version Control Strategy
This project uses **Conventional Commits** and **git tags** to maintain a clean, auditable history. Rollback can be performed at any time using:

```bash
# View all tagged versions
git tag -l

# Rollback to a specific version
git checkout v1.0.0

# Create a rollback branch if needed
git checkout -b rollback/v1.0.0 v1.0.0

# Hard reset main to a previous state (use with caution)
git reset --hard v1.0.0
git push --force-with-lease origin main
```

### Rollback Log
| Date | From Version | To Version | Reason | Evidence |
|---|---|---|---|---|
| (Example) | v1.2.0 | v1.1.0 | Hero section layout regression | `docs/rollback-evidence/` |

> Document all rollback actions in `docs/rollback-evidence/rollback-log.md`

---

## 📸 Screenshots

### Desktop View
> Homepage hero section with gradient background and floating cards

### Mobile View
> Responsive hamburger navigation and stacked card layout

### FAQ Accordion
> Interactive accordion with smooth expand/collapse animations

> _Add actual screenshots to `docs/` folder and reference them here_

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push to branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**VISHAL MADDHESHIYA**

- GitHub: [@vishal](https://github.com/VISHAL-MADDHESHIYA/)

---

<p align="center">
  Built with ❤️ for Veda Technology<br>
  <strong>⭐ Star this repo if you found it helpful!</strong>
</p>
