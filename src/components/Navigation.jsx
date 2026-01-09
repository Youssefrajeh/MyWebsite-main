import { useState, useEffect } from 'react';
import HackerText from './HackerText';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <style>{`
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          cursor: pointer;
          z-index: 1001;
        }
        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background: var(--text-color);
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease;
          z-index: 1000;
          padding: 80px 30px 30px;
        }
        .mobile-menu.open {
          right: 0;
        }
        .mobile-backdrop {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .mobile-backdrop.open {
          opacity: 1;
        }
        .mobile-nav-link {
          display: block;
          padding: 15px 0;
          color: #1e293b;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          border-bottom: 1px solid #e2e8f0;
          transition: color 0.3s ease, padding-left 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: var(--primary-color);
          padding-left: 10px;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu, .mobile-backdrop {
            display: block;
          }
        }
      `}</style>

      <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`} style={{
        justifyContent: 'center'
      }}>
        <div className="nav-content" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <a href="#home" className="logo" style={{
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--text-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              color: 'var(--primary-color)',
              fontSize: '1.8rem',
              fontWeight: '800'
            }}>{`{`}</span>
            <HackerText text="Youssef Rajeh" />
            <span style={{
              color: 'var(--secondary-color)',
              fontSize: '1.8rem',
              fontWeight: '800'
            }}>{`}`}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links" style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                style={{
                  color: 'var(--nav-text)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                  position: 'relative'
                }}
              >
                {item}
              </a>
            ))}
            <a href="/library.html" className="nav-link" style={{ color: 'var(--nav-text)', textDecoration: 'none', fontWeight: '500' }}>Library</a>
          </div>

          {/* Hamburger Button */}
          <div 
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            {item}
          </a>
        ))}
        <a 
          href="/library.html" 
          className="mobile-nav-link"
          onClick={handleLinkClick}
        >
          Library
        </a>
      </div>
    </>
  );
};

export default Navigation;

