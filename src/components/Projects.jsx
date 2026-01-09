import { useState } from 'react';
import { projectsData, projectFilters } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" style={{ padding: '100px 20px' }}>
      <h2 className="section-title">My Projects</h2>

      <div className="project-filters" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
        {projectFilters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            style={{
              padding: '10px 25px',
              borderRadius: '30px',
              border: activeFilter === filter.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
              background: activeFilter === filter.id ? 'var(--gradient-primary)' : 'var(--glass-bg)',
              color: activeFilter === filter.id ? 'white' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="project-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '400px',
              position: 'relative',
              transition: 'all 0.4s ease',
              transform: hoveredProject === project.id ? 'translateY(-10px)' : 'translateY(0)'
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
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.4))',
                opacity: hoveredProject === project.id ? 1 : 0.8,
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '30px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  color: 'white',
                  transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'var(--text-light)',
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
                    display: 'inline-block',
                    padding: '10px 25px',
                    background: 'var(--primary-color)',
                    color: 'white',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    opacity: hoveredProject === project.id ? 1 : 0,
                    transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.3s ease 0.2s',
                    alignSelf: 'flex-start'
                  }}
                >
                  View Project
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

