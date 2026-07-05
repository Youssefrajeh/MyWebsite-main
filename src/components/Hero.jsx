import { m } from "motion/react";
import { useMagnetic } from "../hooks/useMagnetic";
import { fadeInUp, staggerContainer, staggerItem } from "../utils/motionVariants";

const Hero = () => {
  const { wrapRef: workWrapRef, btnRef: workBtnRef } = useMagnetic(0.3);
  const { wrapRef: contactWrapRef, btnRef: contactBtnRef } = useMagnetic(0.3);

  const handleSectionClick = (sectionId) => (event) => {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (!element) return;

    const navOffset = 90;
    const targetTop = element.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero" style={{ 
      background: '#f7f4ef',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <style>{`
        #home.hero {
          min-height: 100vh !important;
        }
        #neural-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.6;
        }
        .hero-greeting {
          font-family: "JetBrains Mono", "Space Mono", monospace;
          font-size: 1rem;
          color: #00f8aa;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0 0 6px 0;
          display: block;
          text-align: center;
          opacity: 0.85;
        }
        .hero-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #e1fdff;
          text-align: center;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
          text-shadow: 0 0 30px rgba(0, 242, 255, 0.25);
        }
        .hero-tagline {
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 0.95rem;
          color: #849495;
          text-align: center;
          margin: 0 0 1.2rem 0;
          letter-spacing: 0.02em;
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
        .hero-btn-primary {
          background: linear-gradient(135deg, #00f2ff 0%, #00dbe7 100%) !important;
          color: #00363a !important;
          border: none !important;
          font-weight: 700 !important;
          box-shadow: 0 4px 20px rgba(0, 242, 255, 0.3);
        }
        .hero-btn-primary:hover {
          box-shadow: 0 6px 30px rgba(0, 242, 255, 0.5) !important;
          transform: translateY(-3px) scale(1.04) !important;
        }
        .hero-logo-video {
          width: 420px;
          height: 420px;
          object-fit: cover;
          display: block;
          margin: 0 auto;
          pointer-events: none;
          filter: drop-shadow(0 0 40px rgba(0, 242, 255, 0.15));
          transition: filter 0.4s ease;
          -webkit-mask-image: radial-gradient(circle at center, black 35%, transparent 70%);
          mask-image: radial-gradient(circle at center, black 35%, transparent 70%);
        }
        .hero-profile-photo {
          width: 220px;
          height: 220px;
          object-fit: cover;
          display: block;
          margin: 0 auto 26px;
          border-radius: 50%;
          border: 6px solid #ffffff;
          box-shadow: 0 18px 35px rgba(31, 41, 55, 0.16);
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
        .hero-student-line {
          max-width: 620px;
          margin: -0.35rem auto 1.5rem auto;
          color: #4b5563;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .hero-scroll-indicator {
          display: none;
        }
        @media (max-width: 768px) {
          #home.hero {
            min-height: auto !important;
            padding-top: 120px !important;
            padding-bottom: 28px !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: visible;
          }
          .hero-logo-video {
            width: 85vw;
            max-width: 380px;
            height: auto;
            aspect-ratio: 1;
            margin: 0 auto;
            -webkit-mask-image: radial-gradient(circle at center, black 45%, transparent 72%);
            mask-image: radial-gradient(circle at center, black 45%, transparent 72%);
          }
          .hero-logo-wrapper {
            margin-bottom: -45px;
            margin-top: -30px;
            display: flex;
            justify-content: center;
          }
          .hero-title-text {
            font-size: 2.2rem !important;
            margin-bottom: 0.8rem !important;
            letter-spacing: 0 !important;
          }
          .hero-student-line {
            font-size: 0.95rem;
            margin-bottom: 1rem;
            padding: 0 8px;
          }
          .hero-profile-photo {
            width: 150px;
            height: 150px;
            margin-bottom: 18px;
          }
          .hero-btn {
            padding: 12px 24px;
            font-size: 0.85rem;
            border-radius: 50px;
          }
          .hero-btn-primary {
            padding: 12px 28px !important;
          }
          .hero-buttons {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 12px !important;
            margin-bottom: 10px;
          }
          .hero-content {
            padding: 0.5rem !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 0 !important;
          }
          .hero-scroll-indicator {
            display: flex;
            justify-content: center;
            margin-top: 15px;
            animation: heroScrollBounce 2s ease-in-out infinite;
          }
        }
        @media (max-width: 480px) {
          #home.hero {
            padding-top: 110px !important;
            padding-bottom: 24px !important;
          }
          .hero-content {
            margin-top: 0 !important;
          }
          .hero-logo-video {
            width: 80vw;
            max-width: 330px;
          }
          .hero-logo-wrapper {
            margin-bottom: -35px;
            margin-top: -20px;
          }
          .hero-title-text {
            font-size: 1.9rem !important;
          }
          .hero-profile-photo {
            width: 130px;
            height: 130px;
          }
          .hero-btn {
            padding: 10px 20px;
            font-size: 0.8rem;
          }
          .hero-btn-primary {
            padding: 10px 24px !important;
          }
        }
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 1; }
        }
      `}</style>

      <div className="hero-content" style={{
        padding: '2rem',
        maxWidth: '1200px',
        textAlign: 'center',
        zIndex: 2
      }}>
        <m.p
          className="hero-student-line"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          Computer Programming & Analysis student building practical web, database, and software projects.
        </m.p>

        {/* Buttons with stagger */}
        <m.div
          className="hero-buttons"
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10
          }}
          variants={staggerContainer(0.15, 0.8)}
          initial="hidden"
          animate="visible"
        >
          <m.div className="magnetic-wrap" ref={workWrapRef} variants={staggerItem}>
            <a ref={workBtnRef} href="#projects" onClick={handleSectionClick("projects")} className="hero-btn hero-btn-primary magnetic-button">
              View My Work
            </a>
          </m.div>
          <m.div className="magnetic-wrap" ref={contactWrapRef} variants={staggerItem}>
            <a ref={contactBtnRef} href="#contact" onClick={handleSectionClick("contact")} className="hero-btn magnetic-button">
              Contact Me
            </a>
          </m.div>
        </m.div>

        {/* Scroll down indicator — mobile only */}
        <div className="hero-scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#849495" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

