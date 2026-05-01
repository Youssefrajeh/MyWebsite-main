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
      <style>{`
        .hero-btn {
          color: #ffffff;
          padding: 20px 50px;
          font-size: 1.25rem;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-block;
          text-decoration: none;
          font-weight: 600;
        }
        .hero-btn:hover {
          transform: translateY(-5px) scale(1.05);
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
        }
      `}</style>

      <div className="hero-content" style={{
        padding: '2rem',
        maxWidth: '1200px',
        textAlign: 'center',
        zIndex: 2
      }}>
        <p className="hero-name" style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.7)',
          fontWeight: '500',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '12px',
          animation: 'fadeInDown 0.8s ease forwards'
        }}>
          Youssef Rajeh
        </p>
        <div className="subtitle-container" style={{ marginBottom: '1rem' }}>
          <p className="hero-subtitle" style={{
            fontSize: '3.5rem',
            color: '#ffffff',
            fontWeight: '800',
            letterSpacing: '0.05em',
            textShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            margin: 0,
            animation: 'fadeInUp 0.8s 0.2s ease both'
          }}>
            SOFTWARE DEVELOPER
          </p>
        </div>
        <div className="hero-buttons" style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          animation: 'fadeInUp 0.8s 0.6s ease both'
        }}>
          <a href="#projects" className="hero-btn">
            View My Work
          </a>
          <a href="#contact" className="hero-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
