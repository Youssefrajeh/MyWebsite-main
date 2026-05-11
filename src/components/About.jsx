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
    </section>
  );
};

export default About;
