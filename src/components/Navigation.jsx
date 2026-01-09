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

  return (
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
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
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
          <a
            href="/Rajeh_Youssef_1196323_2025_08_07.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 20px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--primary-color)',
              borderRadius: '20px',
              color: 'var(--primary-color)',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--primary-color)';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--glass-bg)';
              e.target.style.color = 'var(--primary-color)';
            }}
          >
            Transcript
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
