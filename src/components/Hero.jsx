const Hero = () => {
  return (
    <section id="home" className="hero" style={{ 
      background: `linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.88)), url('/images/hero_bg_v4.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <style>{`
        #home.hero {
          height: 100vh !important;
          min-height: 100vh !important;
        }
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
        .hero-name-text {
          font-size: 1.1rem !important;
          color: rgba(255, 255, 255, 0.7) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.7) !important;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 12px;
          text-shadow: none !important;
          display: block;
          text-align: center;
        }
        .hero-title-text {
          font-size: 3.5rem !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-shadow: 0 0 20px rgba(99, 102, 241, 0.5) !important;
          margin: 0 0 1rem 0;
          display: block;
          text-align: center;
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
        @media (max-width: 768px) {
          #home.hero {
            height: 100vh !important;
            min-height: 100vh !important;
            padding-top: 10px !important;
            padding-bottom: 20px !important;
          }
          .hero-profile-ring {
            width: 180px;
            height: 180px;
          }
          .hero-profile-wrapper {
            margin-bottom: 16px;
          }
          .hero-name-text {
            font-size: 0.9rem !important;
            margin-bottom: 8px;
          }
          .hero-title-text {
            font-size: 2rem !important;
          }
          .hero-btn {
            padding: 14px 32px;
            font-size: 1rem;
          }
          .hero-buttons {
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-profile-ring {
            width: 160px;
            height: 160px;
          }
          .hero-title-text {
            font-size: 1.6rem !important;
          }
          .hero-btn {
            padding: 12px 28px;
            font-size: 0.9rem;
          }
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
        <span className="hero-name-text">
          Youssef Rajeh
        </span>
        <span className="hero-title-text">
          SOFTWARE DEVELOPER
        </span>
        <div className="hero-buttons" style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
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
