import { useState, useEffect } from 'react';
import HackerText from './HackerText';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

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

  const handleLinkClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <style>{`
        .nav-container {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: 95%;
          max-width: 1100px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          background: transparent !important;
        }
        
        .nav-pill {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          padding: 8px 12px 8px 24px;
          transition: all 0.4s ease;
          pointer-events: auto;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .nav-container.scrolled .nav-pill {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 6px 10px 6px 20px;
          transform: scale(0.98);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 8px 16px;
          transition: all 0.3s ease;
          border-radius: 50px;
        }

        .nav-link:hover { color: #fff; }
        .nav-link.active { color: #fff; background: rgba(255, 255, 255, 0.1); }

        .active-indicator {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--primary-color);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .nav-link.active .active-indicator { opacity: 1; }

        .logo-text {
          font-family: 'Space Mono', monospace;
          color: #fff;
          font-weight: 700;
          letter-spacing: -0.5px;
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          padding: 10px;
          z-index: 1100;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -320px;
          width: 320px;
          height: 100vh;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(25px) saturate(180%);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          padding: 100px 40px;
          gap: 20px;
          transition: all 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
          z-index: 1050;
          box-shadow: -10px 0 30px rgba(0,0,0,0.3);
        }

        .mobile-menu.open { right: 0; }

        .mobile-link {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-link:hover, .mobile-link.active {
          color: #fff;
          padding-left: 8px;
          border-bottom-color: var(--primary-color);
        }

        .feedback-pill-btn {
          background: linear-gradient(135deg, var(--primary-color), #818cf8);
          color: #fff !important;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .mobile-feedback-btn {
          margin-top: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          color: #fff;
          padding: 15px;
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-feedback-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
        }

        @media (max-width: 991px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-pill">
          <a href="#home" className="logo" onClick={() => handleLinkClick('Home')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--primary-color)', fontSize: '1.4rem', fontWeight: '800' }}>{`{`}</span>
            <span className="logo-text"><HackerText text="Youssef Rajeh" /></span>
            <span style={{ color: 'var(--secondary-color)', fontSize: '1.4rem', fontWeight: '800' }}>{`}`}</span>
          </a>

          <div className="nav-links" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${activeItem === item ? 'active' : ''}`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
                <div className="active-indicator" />
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_zNZ_TAJhpFpz-Aj-ARUDhseLQ90iGRfVeClJVOScad3uZg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="feedback-pill-btn"
              style={{ marginLeft: '12px' }}
            >
              Feedback
            </a>
          </div>

          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`mobile-link ${activeItem === item ? 'active' : ''}`}
            onClick={() => handleLinkClick(item)}
          >
            {item}
          </a>
        ))}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_zNZ_TAJhpFpz-Aj-ARUDhseLQ90iGRfVeClJVOScad3uZg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-feedback-btn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Anonymous Feedback
        </a>
      </div>
    </>
  );
};

export default Navigation;
