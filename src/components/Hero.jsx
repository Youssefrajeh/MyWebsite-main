import { useEffect } from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ background: 'var(--dark-color)' }}>
      <div className="hero-content" style={{
        padding: '4rem',
        maxWidth: '1000px',
        textAlign: 'center'
      }}>
        <h1 style={{
          marginBottom: '1.5rem',
          fontSize: '4.5rem',
          color: '#ffffff',
          letterSpacing: '-0.03em',
          fontWeight: 700
        }}>
          Welcome to my portfolio
        </h1>
        <div className="subtitle-container" style={{ marginBottom: '2.5rem' }}>
          <p className="hero-subtitle" style={{
            fontSize: '3rem',
            color: 'var(--primary-color)',
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
            display: 'inline-block',
            color: '#ffffff',
            textDecoration: 'none'
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
            display: 'inline-block',
            textDecoration: 'none'
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
