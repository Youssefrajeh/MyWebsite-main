import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { m, AnimatePresence } from 'motion/react';
import { useMagnetic } from '../hooks/useMagnetic';
import { fadeInDown, slideInRight, staggerContainer, staggerItem } from '../utils/motionVariants';

const TYPEWRITER_WORDS = ['portfolio', 'C#', '.NET Core', 'React', 'SQL Server', 'C++', 'JavaScript', 'REST APIs'];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);
  const [activeItem, setActiveItem] = useState('Home');
  const [typeText, setTypeText] = useState('');
  const typeState = useRef({ wordIndex: 0, charIndex: 0, isDeleting: false });
  const typeTimerRef = useRef(null);
  const { wrapRef: navWrapRef, btnRef: navBtnRef } = useMagnetic(0.25);
  const location = useLocation();
  const navigate = useNavigate();

  // Track mobile breakpoint
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1100;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };
    const mq = window.matchMedia('(max-width: 1100px)');
    const handler = (e) => {
      setIsMobile(e.matches);
      if (!e.matches) {
        setIsMobileMenuOpen(false);
      }
    };
    mq.addEventListener('change', handler);
    window.addEventListener('resize', checkMobile);
    return () => {
      mq.removeEventListener('change', handler);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const tick = () => {
      const { wordIndex, charIndex, isDeleting } = typeState.current;
      const currentWord = TYPEWRITER_WORDS[wordIndex];

      if (!isDeleting) {
        setTypeText(currentWord.substring(0, charIndex + 1));
        typeState.current.charIndex++;
        if (typeState.current.charIndex > currentWord.length) {
          typeState.current.isDeleting = true;
          typeTimerRef.current = setTimeout(tick, 1800);
          return;
        }
        typeTimerRef.current = setTimeout(tick, 350);
        return;
      } else {
        setTypeText(currentWord.substring(0, charIndex - 1));
        typeState.current.charIndex--;
        if (typeState.current.charIndex <= 0) {
          typeState.current.isDeleting = false;
          typeState.current.wordIndex = (wordIndex + 1) % TYPEWRITER_WORDS.length;
          typeTimerRef.current = setTimeout(tick, 2000);
          return;
        }
        typeTimerRef.current = setTimeout(tick, 200);
        return;
      }
    };
    typeTimerRef.current = setTimeout(tick, 500);
    return () => clearTimeout(typeTimerRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveItem(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (item, e) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      if (e) e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <style>{`
        .nav-container {
          position: fixed;
          top: 20px;
          left: 50%;
          z-index: 1060; /* Sits above mobile menu overlays */
          width: 95%;
          max-width: 1100px;
          pointer-events: none;
          background: transparent !important;
        }

        .logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          min-width: 120px; /* Prevents layout jitter during typewriter typing */
          pointer-events: auto;
        }
        
        @media (max-width: 1100px) {
          .logo {
            min-width: 100px;
          }
        }

        @media (max-width: 480px) {
          .logo {
            min-width: 90px;
          }
        }
        
        .nav-pill {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(13, 21, 21, 0.15);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          padding: 8px 12px 8px 24px;
          transition: background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
          pointer-events: auto;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        }

        .nav-container.scrolled .nav-pill {
          background: rgba(13, 21, 21, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 10px 6px 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .nav-links {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .nav-link {
          position: relative;
          color: rgba(220, 228, 228, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 500;
          padding: 8px 16px;
          transition: color 0.3s ease, background 0.3s ease;
          border-radius: 50px;
        }

        .nav-link:hover { color: #dce4e4; }
        .nav-link.active { color: #dce4e4; background: rgba(0, 242, 255, 0.08); }

        .active-indicator {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #00f2ff;
          border-radius: 50%;
          box-shadow: 0 0 10px #00f2ff, 0 0 20px rgba(0, 242, 255, 0.4);
        }

        .logo-text {
          font-family: 'JetBrains Mono', 'Space Mono', monospace;
          color: #dce4e4;
          font-weight: 600;
          letter-spacing: -0.5px;
          text-shadow: 0 0 10px rgba(0, 242, 255, 0.3);
        }

        .logo-prompt {
          color: #00f8aa;
          font-family: 'JetBrains Mono', 'Space Mono', monospace;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .logo-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #00f2ff;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hamburger-btn {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 10px;
          background: none;
          border: none;
          z-index: 1100;
        }

        .hamburger-line {
          display: block;
          width: 24px;
          height: 2px;
          background: #dce4e4;
          border-radius: 2px;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1040;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: min(300px, 80vw);
          height: 100vh;
          background: rgba(13, 21, 21, 0.9);
          backdrop-filter: blur(25px) saturate(180%);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          padding: 80px 30px;
          gap: 15px;
          z-index: 1050;
          box-shadow: -10px 0 30px rgba(0,0,0,0.4);
        }

        .mobile-link {
          display: block;
          width: 100%;
          text-align: left;
          font-size: 0.95rem;
          color: rgba(220, 228, 228, 0.7);
          text-decoration: none;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .mobile-link:hover, .mobile-link.active {
          color: #dce4e4;
          padding-left: 8px;
          border-bottom-color: #00f2ff;
        }

        .feedback-pill-btn {
          background: linear-gradient(135deg, #00f2ff, #00dbe7);
          color: #00363a !important;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 242, 255, 0.25);
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .feedback-pill-btn:hover {
          box-shadow: 0 0 25px rgba(0, 242, 255, 0.4);
        }

        .mobile-feedback-btn {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin-top: 15px;
          background: rgba(0, 242, 255, 0.05);
          border: 1px solid rgba(0, 242, 255, 0.2);
          backdrop-filter: blur(10px);
          color: #dce4e4;
          padding: 12px;
          border-radius: 50px;
          text-align: center;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-feedback-btn:hover {
          background: rgba(0, 242, 255, 0.1);
          border-color: #00f2ff;
        }

        /* ─── Mobile adjustments ─── */
        @media (max-width: 1100px) {
          .nav-container {
            width: 92%;
            top: 12px;
          }
          .nav-pill {
            padding: 10px 12px 10px 20px;
            background: rgba(13, 21, 21, 0.6);
            backdrop-filter: blur(20px) saturate(180%);
          }
          .nav-container.scrolled .nav-pill {
            padding: 8px 10px 8px 18px;
            background: rgba(13, 21, 21, 0.8);
          }
          .logo-text { font-size: 0.9rem; }
          .logo-prompt { font-size: 1rem; }
        }

        @media (max-width: 480px) {
          .nav-container {
            width: 94%;
            top: 8px;
          }
          .nav-pill {
            padding: 8px 10px 8px 16px;
          }
          .logo-text { font-size: 0.8rem; }
          .logo-prompt { font-size: 0.9rem; }
          .mobile-menu {
            width: min(280px, 85vw);
            padding: 70px 24px;
          }
        }
      `}</style>

      {/* Navbar */}
      <m.div
        className={`nav-container ${isScrolled ? 'scrolled' : ''}`}
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        style={{ x: "-50%" }}
      >
        <div className="nav-pill">

          {/* Logo */}
          <a href="#home" className="logo" onClick={(e) => handleLinkClick('Home', e)}>
            <span className="logo-prompt">▸</span>
            <span className="logo-text">{typeText}</span>
            <span className="logo-cursor" />
          </a>

          {/* Desktop nav links — only rendered on desktop */}
          {!isMobile && (
            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${activeItem === item ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(item, e)}
                  style={{ position: 'relative' }}
                >
                  {item}
                  {activeItem === item && (
                    <m.div
                      className="active-indicator"
                      layoutId="nav-active-dot"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ))}
              <div className="magnetic-wrap" ref={navWrapRef}>
                <a
                  ref={navBtnRef}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf_zNZ_TAJhpFpz-Aj-ARUDhseLQ90iGRfVeClJVOScad3uZg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feedback-pill-btn magnetic-button"
                  style={{ marginLeft: '12px' }}
                >
                  Feedback
                </a>
              </div>
            </div>
          )}

          {/* Hamburger — only rendered on mobile */}
          {isMobile && (
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <m.span
                className="hamburger-line"
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <m.span
                className="hamburger-line"
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <m.span
                className="hamburger-line"
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          )}
        </div>
      </m.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <m.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <m.div
              className="mobile-menu"
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <m.div
                variants={staggerContainer(0.06, 0.15)}
                initial="hidden"
                animate="visible"
                style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}
              >
                {navItems.map((item) => (
                  <m.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`mobile-link ${activeItem === item ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(item, e)}
                    variants={staggerItem}
                  >
                    {item}
                  </m.a>
                ))}
                <m.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf_zNZ_TAJhpFpz-Aj-ARUDhseLQ90iGRfVeClJVOScad3uZg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-feedback-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={staggerItem}
                >
                  Anonymous Feedback
                </m.a>
              </m.div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
