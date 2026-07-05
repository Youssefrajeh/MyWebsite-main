import { m } from 'motion/react';
import { fadeInUp, viewportConfig } from '../utils/motionVariants';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.86c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.91v2.75c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M6.94 8.99H3.75v10.2h3.19V8.99ZM5.35 4.1a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.9 9.25c0-3.06-1.63-4.49-3.82-4.49a3.3 3.3 0 0 0-2.99 1.64h-.04V8.99H9.35v10.2h3.18v-5.05c0-1.33.25-2.62 1.9-2.62 1.63 0 1.65 1.52 1.65 2.7v4.97h3.18v-5.84Z"
    />
  </svg>
);

const Footer = () => {
  return (
    <m.footer
      className="footer"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="social-links">
        <m.a
          href="https://github.com/Youssefrajeh"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="sr-only">GitHub</span>
          <GitHubIcon />
        </m.a>
        <m.a
          href="https://www.linkedin.com/in/youssefrajeh"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedInIcon />
        </m.a>
      </div>
      <p style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
        &copy; {new Date().getFullYear()} Youssef Rajeh. Built with React.
      </p>
    </m.footer>
  );
};

export default Footer;
