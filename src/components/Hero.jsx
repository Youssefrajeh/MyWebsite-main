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
        .hero-logo-wrapper {
          animation: fadeInScale 1s ease forwards;
          margin-bottom: 28px;
        }
        .hero-logo-video {
          width: 500px;
          height: 500px;
          object-fit: cover;
          display: block;
          margin: 0 auto;
          pointer-events: none;
          filter: drop-shadow(0 0 40px rgba(99, 102, 241, 0.2));
          transition: filter 0.4s ease;
          -webkit-mask-image: radial-gradient(circle at center, black 25%, transparent 55%);
          mask-image: radial-gradient(circle at center, black 25%, transparent 55%);
        }
        .hero-logo-wrapper:hover .hero-logo-video {
          filter: drop-shadow(0 0 50px rgba(99, 102, 241, 0.35));
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
        @media (max-width: 768px) {
          #home.hero {
            height: 100vh !important;
            min-height: 100vh !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .hero-logo-video {
            width: 380px;
            height: 380px;
          }
          .hero-logo-wrapper {
            margin-bottom: 0;
            margin-top: -20px;
          }
          .hero-title-text {
            font-size: 1.8rem !important;
            margin-bottom: 0.5rem !important;
          }
          .hero-btn {
            padding: 10px 20px;
            font-size: 0.85rem;
          }
          .hero-buttons {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 10px !important;
          }
          .hero-content {
            padding: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .hero-logo-video {
            width: 340px;
            height: 340px;
          }
          .hero-title-text {
            font-size: 1.5rem !important;
          }
          .hero-btn {
            padding: 10px 24px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="hero-content" style={{
        padding: '2rem',
        maxWidth: '1200px',
        textAlign: 'center',
        zIndex: 2
      }}>
        <div className="hero-logo-wrapper">
          <video
            src="/YR.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hero-logo-video"
          />
        </div>
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
