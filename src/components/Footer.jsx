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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M12.04 2a9.84 9.84 0 0 0-8.53 14.74L2 22l5.39-1.42A9.94 9.94 0 0 0 12.04 22 9.99 9.99 0 0 0 12.04 2Zm0 18.31a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.2.84.85-3.12-.2-.32a8.14 8.14 0 0 1-1.25-4.35 8.28 8.28 0 1 1 8.28 8.27Zm4.54-6.2c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.76 6.76 0 0 1-2-1.24 7.55 7.55 0 0 1-1.38-1.72c-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.55c.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.48-.07 1.47-.6 1.68-1.18.2-.59.2-1.09.14-1.19-.06-.1-.22-.16-.47-.28Z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const Footer = ({ alwaysVisible = false }) => {
  return (
    <m.footer
      className="footer"
      variants={fadeInUp}
      initial={alwaysVisible ? false : "hidden"}
      whileInView={alwaysVisible ? undefined : "visible"}
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
        <m.a
          href="https://wa.me/15483884360"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Youssef on WhatsApp"
          title="WhatsApp"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="sr-only">WhatsApp</span>
          <WhatsAppIcon />
        </m.a>
        <m.a
          href="tel:+15483884360"
          aria-label="Call Youssef at +1 548 388 4360"
          title="Call"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="sr-only">Call</span>
          <PhoneIcon />
        </m.a>
      </div>
      <p style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
        &copy; {new Date().getFullYear()} Youssef Rajeh. Built with React.
      </p>
    </m.footer>
  );
};

export default Footer;
