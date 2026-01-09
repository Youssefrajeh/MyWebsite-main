# Youssef Rajeh - Portfolio (React Version)

A modern, responsive portfolio website built with React and Vite, featuring a dark-themed letter glitch effect on the landing page.

## 🚀 Features

- **React 18** with modern hooks and best practices
- **Vite** for lightning-fast development and optimized builds
- **Dark Letter Glitch Effect** on the hero section
- **Responsive Design** that works on all devices
- **Component-Based Architecture** for easy maintenance
- **Smooth Animations** and transitions
- **SEO Optimized** with proper meta tags
- **Fast Loading** with code splitting and lazy loading

## 📦 Installation

1. **Install dependencies:**
```bash
cd MyPortfolio_light-main
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## 👀 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
MyPortfolio_light-main/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LetterGlitch.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── experienceData.js
│   │   ├── projectsData.js
│   │   └── skillsData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/
├── index.html
├── vite.config.js
├── package.json
└── styles.css
```

## 🎨 Customization

### Changing Letter Glitch Colors

Edit the `glitchColors` prop in `src/components/Hero.jsx`:

```jsx
<LetterGlitch
  glitchColors={['#1a1a2e', '#16213e', '#0f3460', '#533483', '#94618e']}
  // ... other props
/>
```

### Adding New Projects

Edit `src/data/projectsData.js` and add your project to the array:

```javascript
{
  id: 12,
  title: 'Your Project',
  category: 'web',
  image: '/images/your-image.png',
  description: 'Your description',
  link: 'https://github.com/yourusername/project'
}
```

### Adding New Skills

Edit `src/data/skillsData.js` and add your skill to the array.

### Modifying Experience

Edit `src/data/experienceData.js` to update your work experience.

## 🌐 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite configuration

### Manual Deployment

```bash
npm run build
```

Upload the contents of the `dist` folder to your hosting provider.

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📝 License

© 2025 Youssef Rajeh. All rights reserved.

## 📧 Contact

- Email: youssefrrajeh@gmail.com
- Phone: +1 (548) 388-4360
- GitHub: [Youssefrajeh](https://github.com/Youssefrajeh)
- LinkedIn: [youssefrajeh](https://www.linkedin.com/in/youssefrajeh)

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle Size: Optimized with code splitting

## 🔄 Migration from Vanilla JS

This project was migrated from vanilla JavaScript to React for:
- Better component reusability
- Easier state management
- Improved maintainability
- Better developer experience
- Faster development with hot module replacement

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

