import { useEffect } from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ background: 'var(--section-bg)' }}>
      <div className="hero-content glass-panel" style={{
        padding: '4rem',
        borderRadius: '30px',
        maxWidth: '1000px',
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
      }}>
        <h1 className="section-title" style={{
          marginBottom: '1.5rem',
          fontSize: '4.5rem',
          background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.03em'
        }}>
          Welcome to my portfolio
        </h1>
        <div className="subtitle-container" style={{ marginBottom: '2.5rem' }}>
          <p className="hero-subtitle" style={{
            fontSize: '3rem',
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            margin: 0
          }}>
            Software Developer
          </p>
        </div>
        <div className="hero-buttons" style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="#projects" className="btn primary-btn" style={{
            background: 'var(--primary-color)',
            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
            border: 'none',
            padding: '18px 45px',
            fontSize: '1.2rem',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
            display: 'inline-block'
          }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 35px -5px rgba(99, 102, 241, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px -5px rgba(99, 102, 241, 0.4)';
            }}>
            View My Work
          </a>
          <a href="#contact" className="btn secondary-btn" style={{
            borderColor: 'var(--primary-color)',
            color: 'var(--primary-color)',
            padding: '18px 45px',
            fontSize: '1.2rem',
            borderRadius: '50px',
            background: 'transparent',
            border: '2px solid var(--primary-color)',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
            display: 'inline-block'
          }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.background = 'var(--primary-color)';
              e.target.style.color = 'white';
              e.target.style.boxShadow = '0 15px 35px -5px rgba(99, 102, 241, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--primary-color)';
              e.target.style.boxShadow = 'none';
            }}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
