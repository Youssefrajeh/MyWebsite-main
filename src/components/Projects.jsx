import { useState, useEffect, useRef } from 'react';
import { projectsData, projectFilters } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.glass-card');
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" style={{ padding: '100px 20px' }}>
      <h2 className="section-title">Innovation Gallery</h2>

      <div className="project-filters" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
        {projectFilters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            style={{
              padding: '10px 25px',
              borderRadius: '8px',
              border: activeFilter === filter.id ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeFilter === filter.id ? '#00f2ff' : 'rgba(25, 33, 34, 0.7)',
              color: activeFilter === filter.id ? '#00363a' : '#b9cacb',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              fontSize: '0.95rem',
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontWeight: activeFilter === filter.id ? '700' : '500'
            }}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="project-grid" ref={containerRef} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="glass-card reveal shimmer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              height: '400px',
              position: 'relative',
              transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.8s ease, transform 0.8s ease',
              transform: hoveredProject === project.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
              border: hoveredProject === project.id ? '1px solid rgba(0, 242, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: hoveredProject === project.id ? '0 0 30px rgba(0, 242, 255, 0.15)' : 'none',
              transitionDelay: hoveredProject === project.id ? '0ms' : `${index * 80}ms`
            }}
          >
            <div className="project-image" style={{ height: '100%', width: '100%', position: 'relative' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <div className="project-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(13, 21, 21, 0.97), rgba(13, 21, 21, 0.3))',
                opacity: hoveredProject === project.id ? 1 : 0.8,
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '30px'
              }}>
                <h3 style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  color: '#e1fdff',
                  transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontFamily: '"Hanken Grotesk", sans-serif',
                  color: '#b9cacb',
                  marginBottom: '20px',
                  fontSize: '0.95rem',
                  opacity: hoveredProject === project.id ? 1 : 0,
                  transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.3s ease 0.1s',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 25px',
                    background: '#00f2ff',
                    color: '#00363a',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontFamily: '"Hanken Grotesk", sans-serif',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    opacity: hoveredProject === project.id ? 1 : 0,
                    transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.3s ease 0.2s',
                    alignSelf: 'flex-start'
                  }}
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
