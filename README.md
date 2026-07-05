# Youssef Rajeh Portfolio

A student-friendly React and Vite portfolio for Youssef Rajeh.

## What It Includes

- Responsive single-page portfolio
- About section with profile photo and CV download
- Professional Journey section
- Filterable skills section
- Project gallery with detail pages
- Contact form through Formspree
- Footer social links
- SEO, Open Graph, JSON-LD, sitemap, robots.txt, and `llms.txt`

## Tech Stack

- React 18
- Vite 5
- React Router
- Motion
- Vanilla CSS
- Formspree

## Project Structure

```text
index.html
styles.css
vite.config.js
public/
  Youssef Rajeh.pdf
  llms.txt
  manifest.json
  robots.txt
  sitemap.xml
  images/
    favicon.svg
    youssef.jpeg
    v2/
src/
  App.jsx
  main.jsx
  index.css
  components/
    About.jsx
    Contact.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navigation.jsx
    ProjectDetail.jsx
    Projects.jsx
    Skills.jsx
  data/
    experienceData.js
    projectsData.js
    skillsData.js
  hooks/
    useMagnetic.js
  utils/
    motionVariants.js
```

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Notes

The project uses `HashRouter`, so project detail pages are routed as hash URLs. Navigation and back-to-projects behavior are handled in React to scroll to the correct page sections.
