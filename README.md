<div align="center">

# ✦ Youssef Rajeh — Portfolio ✦

### **Modern, responsive developer portfolio built with React & Vite**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-youssefrajeh.com-6366f1?style=for-the-badge&labelColor=0f172a)](https://youssefrajeh.com)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0f172a)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=0f172a)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge&labelColor=0f172a)](LICENSE)

<br/>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%"/>

</div>

<br/>

## ⚡ Overview

A sleek, performance-optimized single-page portfolio featuring smooth scroll animations, glassmorphism UI, animated skill bars, project filtering, and a working contact form — all wrapped in a dark-themed, mobile-first design.

<br/>

## 🎨 Features

| Feature | Description |
|:---|:---|
| 🏠 **Animated Hero** | Full-screen landing with gradient ring profile photo, animated text, and background parallax |
| 👤 **About Section** | Intersection Observer-powered fade-in biography with downloadable CV |
| 💼 **Experience Timeline** | Chronological work history with animated card reveals |
| 🛠️ **Skills Dashboard** | Filterable skill cards with animated progress bars and category tabs |
| 📂 **Project Gallery** | 14 showcased projects with category filtering (Web, C++, Java, C#, Android, Full Stack) |
| 📬 **Contact Form** | Working form via Formspree with success/error modals and contact info cards |
| 🧭 **Floating Navbar** | Glassmorphism pill navigation with scroll-aware active states and mobile drawer |
| ⌨️ **Hacker Text Effect** | Matrix-style text scramble animation on the logo |
| 📱 **Fully Responsive** | Optimized layouts for desktop, tablet, and mobile viewports |
| 🔍 **SEO Optimized** | Full Open Graph, Twitter Cards, JSON-LD schema, sitemap, and robots.txt |

<br/>

## 🏗️ Tech Stack

<div align="center">

| Layer | Technology |
|:---:|:---|
| ⚛️ **Framework** | React 18 with Hooks (useState, useEffect, useRef) |
| ⚡ **Build Tool** | Vite 5 with Terser minification & manual chunk splitting |
| 🎨 **Styling** | Vanilla CSS with CSS Variables, Glassmorphism, and Gradient systems |
| 🔤 **Typography** | Google Fonts — Poppins, Playfair Display |
| 🎭 **Icons** | Font Awesome 6 + Devicon SVGs |
| 📬 **Forms** | Formspree (serverless form handling) |
| 🌐 **Deployment** | GitHub Actions CI/CD → GitHub Pages with custom domain |
| 📊 **SEO** | JSON-LD structured data, OpenGraph, Twitter Cards |

</div>

<br/>

## 📁 Project Structure

```
├── index.html                 # Entry point with full SEO meta tags
├── manifest.json              # PWA manifest
├── robots.txt                 # Search engine directives
├── sitemap.xml                # XML sitemap for crawlers
├── vite.config.js             # Vite configuration (port, chunks, minify)
│
├── public/
│   ├── Youssef Rajeh.pdf      # Downloadable CV
│   └── images/
│       ├── favicon.svg        # Site favicon
│       ├── hero_bg_v4.png     # Hero background image
│       ├── youssef.jpeg       # Profile photo
│       ├── portfolio-preview.jpg  # OG/Twitter preview image
│       └── v2/               # 14 AI-generated project thumbnails
│
└── src/
    ├── main.jsx               # React DOM entry
    ├── App.jsx                # Root component with scroll-to-top
    ├── index.css              # Global styles & imports
    │
    ├── components/
    │   ├── Navigation.jsx     # Floating glassmorphism navbar
    │   ├── Hero.jsx           # Full-screen animated hero
    │   ├── About.jsx          # Bio section with CV download
    │   ├── Experience.jsx     # Work experience timeline
    │   ├── Skills.jsx         # Filterable skills with progress bars
    │   ├── Projects.jsx       # Project gallery with category filter
    │   ├── Contact.jsx        # Contact form + info cards
    │   ├── Footer.jsx         # Site footer
    │   ├── HackerText.jsx     # Matrix text scramble effect
    │   ├── LetterGlitch.jsx   # Letter glitch animation
    │   └── DotGrid.jsx/.css   # Animated dot grid background
    │
    └── data/
        ├── projectsData.js    # 14 project entries with metadata
        ├── skillsData.js      # 11 skills with categories & levels
        └── experienceData.js  # 4 work experience entries
```

<br/>

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Youssefrajeh/MyWebsite.git
cd MyWebsite

# Install dependencies
npm install

# Start the development server (opens at http://localhost:3000)
npm run dev
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

<br/>

## 📂 Featured Projects

<div align="center">

| # | Project | Stack | Description |
|:---:|:---|:---:|:---|
| 1 | **Breast Cancer Decision Tree** | C++ | ML decision tree for breast cancer data analysis |
| 2 | **FileUsage Analyzer** | C++ | CLI tool for file system usage statistics |
| 3 | **Newcomb-Benford Stats** | C++ | Benford's Law fraud detection tool |
| 4 | **Expression Evaluator** | C++ | Mathematical expression parser & evaluator |
| 5 | **XO Game** | Web | Interactive Tic-Tac-Toe with responsive design |
| 6 | **Prayer Times** | Web | Location-based prayer times with real-time updates |
| 7 | **Microwave Simulator** | Java | GUI microwave simulation with timer controls |
| 8 | **Android Assignment** | Kotlin | Native Android app with modern UI components |
| 9 | **Grades Tracking System** | C# | JSON-based grade tracker with schema validation |
| 10 | **Full Stack Application** | Full Stack | Complete frontend + backend with auth & DB |
| 11 | **Student Loan Calculator** | Java | Loan calculator with custom exception handling |
| 12 | **Rajehtube Downloader** | C# | YouTube downloader desktop app (yt-dlp wrapper) |
| 13 | **WordleGame** | C# | Distributed Wordle clone with gRPC microservices |
| 14 | **Stoichiometry** | C# | Chemical formula analyzer & molecular mass calculator |

</div>

<br/>

## 🛠️ Skills

<div align="center">

```
  C# & .NET Core  ████████████████████░░░  85%
  SQL Server       ████████████████████░░░  80%
  JavaScript       ████████████████████░░░  85%
  HTML5 & CSS3     ██████████████████████░  90%
  React            ████████████████████░░░  80%
  Java             █████████████████░░░░░░  70%
  Python           ████████████████░░░░░░░  65%
  Git & CI/CD      ████████████████████░░░  85%
  PowerShell       ████████████████░░░░░░░  65%
```

</div>

<br/>

## 🌍 Languages

| Language | Level |
|:---|:---|
| 🇺🇸 English | C2 (Proficient) |
| 🇫🇷 French | B1 (Intermediate) |
| 🇸🇦 Arabic | Native |

<br/>

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-youssefrrajeh@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0f172a)](mailto:youssefrrajeh@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-youssefrajeh-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0f172a)](https://www.linkedin.com/in/youssefrajeh)
[![GitHub](https://img.shields.io/badge/GitHub-Youssefrajeh-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=0f172a)](https://github.com/Youssefrajeh)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0f172a)](https://wa.me/15483884360)

📍 London, Ontario, Canada

</div>

<br/>

---

<div align="center">

**Built with ❤️ by Youssef Rajeh**

*© 2025 — All rights reserved*

</div>
