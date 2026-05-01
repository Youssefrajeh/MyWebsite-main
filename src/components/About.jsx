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
      <h2 className="section-title" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s ease'
      }}>About Me</h2>
      <div className="about-text">
        <p style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s 0.2s ease'
        }}>
          I'm a Computer Programming & Analysis student at Fanshawe College (Co-op) with a background in quality control, laboratory work, and production management across manufacturing environments in Syria and Cameroon.
        </p>
        <p style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s 0.4s ease'
        }}>
          I build full-stack applications using C#, .NET Core, SQL Server, and React. My previous career in applied chemistry and manufacturing gave me strong habits around data accuracy, compliance, process improvement, and meticulous documentation — skills that transfer directly to application support and data integrity roles.
        </p>
        <p style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s 0.6s ease'
        }}>
          I speak English (C2), French (B1), and Arabic (Native), and I volunteer with the MWN Marketing team and my local Food Bank.
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
    </section>
  );
};

export default About;
