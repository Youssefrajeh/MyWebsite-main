import { useEffect } from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ 
      background: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/images/hero_bg_v4.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div className="hero-content" style={{
        padding: '2rem',
        maxWidth: '1200px',
        textAlign: 'center',
        zIndex: 2
      }}>
        <div className="subtitle-container" style={{ marginBottom: '2rem' }}>
          <p className="hero-subtitle" style={{
            fontSize: '3.5rem',
            color: '#ffffff',
            fontWeight: '800',
            letterSpacing: '0.05em',
            textShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            margin: 0
          }}>
            SOFTWARE DEVELOPER
          </p>
        </div>
        <div className="hero-buttons" style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="#projects" className="btn primary-btn" style={{
            borderColor: '#ffffff',
            color: '#ffffff',
            padding: '20px 50px',
            fontSize: '1.25rem',
            borderRadius: '50px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            display: 'inline-block',
            textDecoration: 'none',
            fontWeight: '600'
          }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.borderColor = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}>
            View My Work
          </a>
          <a href="#contact" className="btn secondary-btn" style={{
            borderColor: '#ffffff',
            color: '#ffffff',
            padding: '20px 50px',
            fontSize: '1.25rem',
            borderRadius: '50px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            display: 'inline-block',
            textDecoration: 'none',
            fontWeight: '600'
          }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.borderColor = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
