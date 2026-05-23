const Hero = () => {
  return (
    <section id="home" className="hero" style={{ 
      background: `linear-gradient(rgba(13, 21, 21, 0.92), rgba(13, 21, 21, 0.88)), url('/images/hero_bg_v4.png')`,
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
          color: #dce4e4;
          padding: 20px 50px;
          font-size: 1.25rem;
          border-radius: 8px;
          background: rgba(0, 242, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 242, 255, 0.25);
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: inline-block;
          text-decoration: none;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 600;
        }
        .hero-btn:hover {
          transform: translateY(-5px) scale(1.05);
          background: rgba(0, 242, 255, 0.12);
          border-color: #00f2ff;
          box-shadow: 0 0 25px rgba(0, 242, 255, 0.3);
        }
        .hero-logo-wrapper {
          animation: fadeInScale 1s ease forwards;
          margin-bottom: 10px;
        }
        .hero-logo-video {
          width: 500px;
          height: 500px;
          object-fit: cover;
          display: block;
          margin: 0 auto;
          pointer-events: none;
          filter: drop-shadow(0 0 40px rgba(0, 242, 255, 0.15));
          transition: filter 0.4s ease;
          -webkit-mask-image: radial-gradient(circle at center, black 35%, transparent 70%);
          mask-image: radial-gradient(circle at center, black 35%, transparent 70%);
        }
        .hero-logo-wrapper:hover .hero-logo-video {
          filter: drop-shadow(0 0 50px rgba(0, 242, 255, 0.3));
        }
        .hero-title-text {
          font-family: "Space Grotesk", sans-serif !important;
          font-size: 3.5rem !important;
          color: #e1fdff !important;
          -webkit-text-fill-color: #e1fdff !important;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-shadow: 0 0 30px rgba(0, 242, 255, 0.4) !important;
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
            padding-top: 60px !important;
            padding-bottom: 0 !important;
            align-items: flex-start !important;
            justify-content: center !important;
          }
          .hero-logo-video {
            width: 500px;
            height: 500px;
            margin-left: -15px;
          }
          .hero-logo-wrapper {
            margin-bottom: -30px;
            margin-top: -80px;
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
            padding: 0.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .hero-logo-video {
            width: 460px;
            height: 460px;
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
