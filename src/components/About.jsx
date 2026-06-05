import { m } from 'motion/react';
import { fadeInUp, fadeInLeft, scaleIn, staggerContainer, staggerItem, viewportConfig } from '../utils/motionVariants';

const About = () => {
  return (
    <section id="about" className="about">
      <style>{`
        .about-layout {
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-photo-frame {
          width: 260px;
          height: 260px;
          border-radius: 16px;
          padding: 4px;
          background: linear-gradient(135deg, #00f2ff, #00f8aa, #6366f1, #00f2ff);
          background-size: 300% 300%;
          animation: aboutGradientSpin 6s ease infinite;
          box-shadow: 0 0 30px rgba(0, 242, 255, 0.25), 0 0 60px rgba(0, 248, 170, 0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .about-photo-frame:hover {
          transform: scale(1.04) rotate(1deg);
          box-shadow: 0 0 40px rgba(0, 242, 255, 0.45), 0 0 80px rgba(0, 248, 170, 0.15);
        }

        .about-photo-img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          object-fit: cover;
          display: block;
          border: 3px solid #0d1515;
        }

        @keyframes aboutGradientSpin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .about-text-col {
          flex: 1;
        }

        .about-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(0, 248, 170, 0.08);
          border: 1px solid rgba(0, 248, 170, 0.2);
          border-radius: 9999px;
          margin-bottom: 20px;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.75rem;
          color: #00f8aa;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .about-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00f8aa;
          box-shadow: 0 0 8px #00f8aa;
          animation: statusPulse 2s ease-in-out infinite;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .language-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
          margin-bottom: 16px;
        }

        .language-badge {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(0, 242, 255, 0.08);
          color: #00f2ff;
          border: 1px solid rgba(0, 242, 255, 0.2);
          letter-spacing: 0.05em;
        }

        .about-highlights {
          margin-top: 25px;
          margin-bottom: 25px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          width: 100%;
        }

        .about-highlight-card {
          background: rgba(25, 33, 34, 0.6);
          border: 1px solid rgba(0, 242, 255, 0.12);
          border-radius: 12px;
          padding: 16px;
          text-align: left;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .about-highlight-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 242, 255, 0.35);
          box-shadow: 0 10px 25px rgba(0, 242, 255, 0.1);
        }

        .highlight-value {
          margin: 0 0 6px 0;
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #00f2ff;
          text-shadow: 0 0 10px rgba(0, 242, 255, 0.2);
          text-align: left;
        }

        .highlight-label {
          margin: 0;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 0.85rem;
          color: #b9cacb;
          text-align: left;
          line-height: 1.4;
        }

        .about-text p {
          font-family: "Hanken Grotesk", sans-serif;
          color: #b9cacb;
          line-height: 1.75;
          font-size: 1rem;
        }

        .about-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: linear-gradient(135deg, #00f2ff 0%, #00dbe7 100%);
          color: #00363a;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 4px 20px rgba(0, 242, 255, 0.25);
          transition: all 0.3s ease;
        }

        .about-cv-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0, 242, 255, 0.4);
        }

        @media (max-width: 768px) {
          .about-layout {
            flex-direction: column;
            gap: 28px;
            text-align: center;
            padding: 0 10px;
          }
          .about-photo-frame {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            box-shadow: 0 0 40px rgba(0, 242, 255, 0.35), 0 0 80px rgba(0, 248, 170, 0.12);
          }
          .about-photo-img {
            border-radius: 50%;
          }
          .about-status-badge {
            margin-bottom: 16px;
          }
          .about-text p {
            font-size: 0.92rem;
            line-height: 1.7;
            color: #a3b5b6;
          }
          .about-highlight-card {
            text-align: center;
            padding: 14px 12px;
          }
          .highlight-value {
            text-align: center;
            font-size: 1rem;
          }
          .highlight-label {
            text-align: center;
            font-size: 0.82rem;
          }
          .about-highlights {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
          .language-badges {
            gap: 8px;
          }
          .language-badge {
            font-size: 0.7rem;
            padding: 5px 12px;
          }
          .about-cv-btn {
            width: 100%;
            justify-content: center;
            padding: 16px 24px;
            border-radius: 12px;
          }
          #about.about {
            padding-top: 70px !important;
            padding-bottom: 30px !important;
            margin-top: 0px !important;
          }
          #about .section-title {
            margin-top: 0px !important;
            margin-bottom: 20px !important;
            font-size: 1.8rem !important;
          }
          .about-photo-col {
            margin-top: 0px !important;
          }
        }
        @media (max-width: 480px) {
          #about.about {
            padding-top: 65px !important;
            padding-bottom: 20px !important;
            margin-top: 0px !important;
          }
          #about .section-title {
            margin-top: 0px !important;
            margin-bottom: 16px !important;
            font-size: 1.6rem !important;
          }
          .about-photo-col {
            margin-top: 0px !important;
          }
          .about-photo-frame {
            width: 140px;
            height: 140px;
          }
          .about-highlights {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .about-text p {
            font-size: 0.88rem;
          }
        }
      `}</style>

      {/* Section Title */}
      <m.h2
        className="section-title"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        About Me
      </m.h2>

      <div className="about-layout">
        {/* Photo — slides in from left */}
        <m.div
          className="about-photo-col"
          style={{ flexShrink: 0 }}
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="about-photo-frame shimmer">
            <img
              src="images/youssef.jpeg"
              alt="Youssef Rajeh"
              className="about-photo-img"
              loading="lazy"
            />
          </div>
        </m.div>

        {/* Text Content — staggered fade-in-up */}
        <m.div
          className="about-text-col"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="about-text">
            <m.div className="about-status-badge" variants={staggerItem}>
              <span className="about-status-dot"></span>
              Available for Work
            </m.div>

            <m.p variants={staggerItem}>
              I'm a Computer Programming & Analysis co-op student at Fanshawe College with hands-on experience developing full-stack web applications using C#, .NET Core, React, SQL Server, and modern development tools.
            </m.p>
            <m.p variants={staggerItem}>
              I have a strong understanding of software development principles, databases, debugging, and structured workflows gained through academic projects and prior experience in quality-driven technical environments. I'm a detail-oriented problem solver with strong analytical, documentation, and process improvement skills.
            </m.p>

            {/* Highlights Section */}
            <m.div
              className="about-highlights"
              variants={staggerContainer(0.1, 0.15)}
            >
              <m.article className="about-highlight-card shimmer" variants={scaleIn}>
                <p className="highlight-value">Full-Stack Dev</p>
                <p className="highlight-label">C#, .NET Core & React applications</p>
              </m.article>
              <m.article className="about-highlight-card shimmer" variants={scaleIn}>
                <p className="highlight-value">Systems Specialist</p>
                <p className="highlight-label">Database query tuning & OS configs</p>
              </m.article>
              <m.article className="about-highlight-card shimmer" variants={scaleIn}>
                <p className="highlight-value">Co-op Experience</p>
                <p className="highlight-label">Hands-on corporate & technical support</p>
              </m.article>
            </m.div>

            {/* Language badges with scale-in stagger */}
            <m.div
              className="language-badges"
              variants={staggerContainer(0.1, 0)}
            >
              <m.span className="language-badge shimmer" variants={scaleIn}>English (C2)</m.span>
              <m.span className="language-badge shimmer" variants={scaleIn}>French (B1)</m.span>
              <m.span className="language-badge shimmer" variants={scaleIn}>Arabic (Native)</m.span>
            </m.div>

            {/* CV button */}
            <m.div className="cv-button" variants={staggerItem}>
              <a href="Youssef Rajeh.pdf" className="about-cv-btn" download>
                <i className="fas fa-download"></i> Download CV
              </a>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default About;
