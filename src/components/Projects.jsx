import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { projectsData, projectFilters } from '../data/projectsData';
import { fadeInUp, scaleStaggerItem, staggerContainer, viewportConfig } from '../utils/motionVariants';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" style={{ padding: '100px 20px' }}>
      <style>{`
        .project-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(13, 21, 21, 0.97), rgba(13, 21, 21, 0.3));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
          transition: opacity 0.3s ease;
        }
        .project-card-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #e1fdff;
        }
        .project-card-desc {
          font-family: "Hanken Grotesk", sans-serif;
          color: #b9cacb;
          margin-bottom: 20px;
          font-size: 0.95rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .view-project-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 25px;
          background: #00f2ff;
          color: #00363a;
          border-radius: 8px;
          text-decoration: none;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          align-self: flex-start;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .view-project-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 242, 255, 0.3);
        }
        @media (max-width: 768px) {
          .project-card-overlay { padding: 20px; }
          .project-card-title { font-size: 1.2rem; margin-bottom: 6px; }
          .project-card-desc { font-size: 0.85rem; -webkit-line-clamp: 2; margin-bottom: 12px; }
        }
        @media (max-width: 480px) {
          .project-card-overlay { padding: 15px; }
          .project-card-title { font-size: 1rem; }
          .project-card-desc { display: none; }
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
        Innovation Gallery
      </m.h2>

      {/* Filter Buttons */}
      <div className="project-filters" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
        {projectFilters.map((filter) => (
          <m.button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 25px',
              borderRadius: '8px',
              border: activeFilter === filter.id ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeFilter === filter.id ? '#00f2ff' : 'rgba(25, 33, 34, 0.7)',
              color: activeFilter === filter.id ? '#00363a' : '#b9cacb',
              cursor: 'pointer',
              transition: 'background 0.3s ease, color 0.3s ease, border 0.3s ease',
              fontSize: '0.95rem',
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontWeight: activeFilter === filter.id ? '700' : '500'
            }}
          >
            {filter.name}
          </m.button>
        ))}
      </div>

      {/* Project Grid with AnimatePresence */}
      <div className="project-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 10px',
        boxSizing: 'border-box'
      }}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <m.div
              key={project.id}
              className="glass-card shimmer"
              variants={scaleStaggerItem}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: 'clamp(280px, 50vw, 400px)',
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: 'rgba(0, 242, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 242, 255, 0.15)',
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              <div className="project-image" style={{ height: '100%', width: '100%', position: 'relative' }}>
                <m.img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Overlay with hover reveal via CSS group */}
                <div className="project-card-overlay">
                  <h3 className="project-card-title">
                    {project.title}
                  </h3>
                  <p className="project-card-desc">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-btn"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
