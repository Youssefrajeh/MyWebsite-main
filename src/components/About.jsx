import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <style>{`
        .about-layout {
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-photo-col {
          flex-shrink: 0;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-40px)'};
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-photo-frame {
          width: 260px;
          height: 260px;
          border-radius: 24px;
          padding: 4px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa, #6366f1);
          background-size: 300% 300%;
          animation: aboutGradientSpin 6s ease infinite;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.3), 0 0 60px rgba(139, 92, 246, 0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .about-photo-frame:hover {
          transform: scale(1.04) rotate(1deg);
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.5), 0 0 80px rgba(139, 92, 246, 0.2);
        }

        .about-photo-img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;
          display: block;
          border: 3px solid rgba(15, 23, 42, 0.9);
        }

        @keyframes aboutGradientSpin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .about-text-col {
          flex: 1;
        }

        @media (max-width: 768px) {
          .about-layout {
            flex-direction: column;
            gap: 32px;
            text-align: center;
          }
          .about-photo-frame {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>

      <h2 className="section-title" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease'
      }}>About Me</h2>

      <div className="about-layout">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img
              src="/images/youssef.jpeg"
              alt="Youssef Rajeh"
              className="about-photo-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-text-col">
          <div className="about-text">
            <p style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s 0.2s ease'
            }}>
              I'm a Computer Programming & Analysis co-op student at Fanshawe College with hands-on experience developing full-stack web applications using C#, .NET Core, React, SQL Server, and modern development tools.
            </p>
            <p style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s 0.4s ease'
            }}>
              I have a strong understanding of software development principles, databases, debugging, and structured workflows gained through academic projects and prior experience in quality-driven technical environments. I'm a detail-oriented problem solver with strong analytical, documentation, and process improvement skills.
            </p>
            <p style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s 0.6s ease'
            }}>
              I speak English (C2), French (B1), and Arabic (Native), and I currently volunteer with the MWN Marketing team.
            </p>
            <div className="cv-button" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s 0.8s ease'
            }}>
              <a href="/Youssef Rajeh.pdf" className="btn primary-btn" download>
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
