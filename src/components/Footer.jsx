import { m } from 'motion/react';
import { fadeInUp, viewportConfig } from '../utils/motionVariants';

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
          <i className="fab fa-github"></i>
        </m.a>
        <m.a
          href="https://www.linkedin.com/in/youssefrajeh"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <i className="fab fa-linkedin"></i>
        </m.a>
      </div>
      <p style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>
        &copy; 2025 DevPortfolio. Built with Digital Craftsmanship.
      </p>
    </m.footer>
  );
};

export default Footer;
