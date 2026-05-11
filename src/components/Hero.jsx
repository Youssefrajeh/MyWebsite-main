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
        .hero-profile-wrapper {
          animation: fadeInScale 1s ease forwards;
          margin-bottom: 24px;
        }
        .hero-profile-ring {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa, #6366f1);
          background-size: 300% 300%;
          animation: gradientSpin 4s ease infinite;
          display: inline-block;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(139, 92, 246, 0.15);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
        }
        .hero-profile-ring:hover {
          transform: scale(1.08);
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.6), 0 0 80px rgba(139, 92, 246, 0.25);
        }
        .hero-profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 3px solid rgba(15, 23, 42, 0.9);
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientSpin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="hero-content" style={{
        padding: '2rem',
        maxWidth: '1200px',
        textAlign: 'center',
        zIndex: 2
      }}>
        <div className="hero-profile-wrapper">
          <div className="hero-profile-ring">
            <img
              src="/images/images/youssef.jpeg"
              alt="Youssef Rajeh"
              className="hero-profile-img"
            />
          </div>
        </div>
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
