import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { m } from 'motion/react';
import { projectsData } from '../data/projectsData';
import { fadeInUp, fadeInLeft } from '../utils/motionVariants';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Youssef Rajeh Portfolio`;
    }
    return () => {
      document.title = 'Youssef Rajeh - Portfolio';
    };
  }, [id, project]);

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0d1515',
        color: '#dce4e4',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '2.5rem', marginBottom: '20px' }}>Project Not Found</h2>
        <p style={{ color: '#b9cacb', marginBottom: '30px' }}>The project you are looking for does not exist or has been moved.</p>
        <Link to="/" style={{
          padding: '12px 30px',
          background: '#00f2ff',
          color: '#00363a',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: '700',
          fontFamily: '"Hanken Grotesk", sans-serif'
        }}>
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/');

    let attempts = 0;
    const scrollToProjects = () => {
      const element = document.getElementById('projects');
      if (element) {
        const navOffset = 90;
        const targetTop = element.getBoundingClientRect().top + window.scrollY - navOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: 'smooth',
        });
        return;
      }

      attempts += 1;
      if (attempts < 20) {
        requestAnimationFrame(scrollToProjects);
      }
    };

    requestAnimationFrame(scrollToProjects);
  };

  return (
    <section className="project-detail-page" style={{
      background: 'linear-gradient(180deg, #151d1e 0%, #0d1515 100%)',
      minHeight: '100vh',
      padding: '120px 20px 80px',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <style>{`
        .detail-wrap {
          width: min(900px, 95%);
          background: rgba(25, 33, 34, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          position: relative;
        }

        .back-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #849495;
          text-decoration: none;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 30px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .back-nav-link:hover {
          color: #00f2ff;
          transform: translateX(-4px);
        }

        .detail-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #e1fdff;
          margin-bottom: 25px;
          text-align: left;
          text-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
          line-height: 1.15;
        }

        .detail-hero-frame {
          width: 120px;
          height: 120px;
          border-radius: 24px;
          overflow: hidden;
          border: 2px solid rgba(0, 242, 255, 0.25);
          margin: 0 auto 35px;
          box-shadow: 0 12px 35px rgba(0, 242, 255, 0.15);
        }

        .detail-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .detail-layout {
          display: flex;
          gap: 50px;
          align-items: flex-start;
        }

        .tech-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 80px;
          flex-shrink: 0;
          position: sticky;
          top: 100px;
          padding-top: 10px;
        }

        .tech-sidebar-logo {
          width: 56px;
          height: 56px;
          background: rgba(13, 21, 21, 0.8);
          border: 1px solid rgba(0, 242, 255, 0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .tech-sidebar-logo:hover {
          transform: translateY(-4px) scale(1.08);
          border-color: rgba(0, 242, 255, 0.4);
          box-shadow: 0 0 15px rgba(0, 242, 255, 0.2);
        }

        .tech-sidebar-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .tech-tooltip {
          position: absolute;
          left: 70px;
          background: #192122;
          border: 1px solid rgba(0, 242, 255, 0.3);
          color: #e1fdff;
          padding: 6px 12px;
          border-radius: 6px;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateX(-5px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .tech-sidebar-logo:hover .tech-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .detail-content {
          flex: 1;
          color: #b9cacb;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 1.05rem;
          line-height: 1.65;
          text-align: left;
        }

        .detail-meta-row {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .meta-badge {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(0, 242, 255, 0.08);
          color: #00f2ff;
          border: 1px solid rgba(0, 242, 255, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta-badge.secondary {
          background: rgba(0, 248, 170, 0.08);
          color: #00f8aa;
          border: 1px solid rgba(0, 248, 170, 0.2);
        }

        .meta-badge.tertiary {
          background: rgba(99, 102, 241, 0.08);
          color: #6366f1;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .detail-section-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #e1fdff;
          margin-top: 35px;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(0, 242, 255, 0.15);
          text-align: left;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          padding: 8px 0 8px 24px;
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .features-list li::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #00f2ff;
          font-weight: bold;
        }

        .detail-actions {
          margin-top: 50px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .detail-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 30px;
          text-decoration: none;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .detail-btn.primary {
          background: #00f2ff;
          color: #00363a;
          box-shadow: 0 4px 15px rgba(0, 242, 255, 0.2);
          border: none;
        }

        .detail-btn.primary:hover {
          background: #00dbe7;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 242, 255, 0.4);
        }

        .detail-btn.secondary {
          background: transparent;
          color: #b9cacb;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .detail-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #e1fdff;
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .project-detail-page {
            padding: 80px 10px 40px !important;
          }

          .detail-wrap {
            padding: 24px 16px;
          }

          .back-nav-link {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 16px;
          }

          .detail-title {
            font-size: 2rem;
            margin-bottom: 16px;
            text-align: center;
          }

          .detail-hero-frame {
            width: 60px !important;
            height: 60px !important;
            margin: 0 auto 12px !important;
            border-radius: 12px !important;
            border: 2px solid rgba(0, 242, 255, 0.25) !important;
            box-shadow: 0 4px 16px rgba(0, 242, 255, 0.15) !important;
            overflow: hidden !important;
          }

          .detail-hero-img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }

          .detail-layout {
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }

          .tech-sidebar {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            position: static;
            padding-top: 0;
            gap: 12px;
          }

          .tech-sidebar-logo {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            padding: 8px;
          }

          .tech-tooltip {
            top: -40px;
            left: 50%;
            transform: translateX(-50%) translateY(5px);
          }

          .tech-sidebar-logo:hover .tech-tooltip {
            transform: translateX(-50%) translateY(0);
          }

          .detail-meta-row {
            justify-content: center;
          }

          .detail-content {
            text-align: center;
          }

          .detail-section-title {
            text-align: center;
          }

          .features-list li {
            text-align: center;
            padding-left: 0;
          }

          .features-list li::before {
            position: static;
            margin-right: 8px;
            display: inline-block;
          }

          .detail-actions {
            justify-content: center;
            width: 100%;
          }

          .detail-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="detail-wrap">
        {/* Back navigation */}
        <a href="/" onClick={handleBackClick} className="back-nav-link">
          ← Back to Portfolio
        </a>

        {/* Title */}
        <m.h1
          className="detail-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {project.title}
        </m.h1>

        {/* Hero image */}
        <m.div
          className="detail-hero-frame"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="detail-hero-img"
          />
        </m.div>

        {/* Main layout */}
        <div className="detail-layout">
          {/* Tech sidebar - slides in from left */}
          <m.div
            className="tech-sidebar"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.techStack.map((tech, idx) => (
              <div key={idx} className="tech-sidebar-logo">
                <img src={tech.icon} alt={tech.name} />
                <span className="tech-tooltip">{tech.name}</span>
              </div>
            ))}
          </m.div>

          {/* Details content */}
          <m.div
            className="detail-content"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Metadata badges */}
            <div className="detail-meta-row">
              <span className="meta-badge">{project.category}</span>
              <span className="meta-badge secondary">{project.duration}</span>
              <span className="meta-badge tertiary">{project.role}</span>
            </div>

            {/* Overview */}
            <h2 className="detail-section-title">Project Overview</h2>
            <p>{project.detailedDescription}</p>

            {/* Features */}
            <h2 className="detail-section-title">Key Features</h2>
            <ul className="features-list">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {/* Challenges & Solutions */}
            <h2 className="detail-section-title">Technical Challenges & Solutions</h2>
            <p>{project.challenges}</p>

            {/* Actions */}
            <div className="detail-actions">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-btn primary"
              >
                <i className="fab fa-github"></i> Visit Repository
              </a>
              <a href="/" onClick={handleBackClick} className="detail-btn secondary">
                Back to Projects
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
