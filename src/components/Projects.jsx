import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { m, AnimatePresence } from 'motion/react';
import { projectsData, projectFilters } from '../data/projectsData';
import { fadeInUp, scaleStaggerItem, staggerContainer, viewportConfig } from '../utils/motionVariants';

const stackCardVariants = {
  exit: (customX) => ({
    x: customX,
    opacity: 0,
    scale: 0.8,
    rotate: customX > 0 ? 18 : -18,
  })
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitX, setExitX] = useState(0);

  // Track mobile responsive width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset top card index whenever filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

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
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 10px 25px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;
          font-size: 0.95rem;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 500;
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 10px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .project-filters {
            gap: 8px !important;
            margin-bottom: 30px !important;
          }
          .filter-btn {
            padding: 6px 14px !important;
            font-size: 0.8rem !important;
            border-radius: 6px !important;
          }
          .project-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 16px !important;
            padding: 20px 24px !important;
            scroll-behavior: smooth !important;
            scrollbar-width: none !important;
            margin: 0 -10px !important; /* Bleed slightly past side bounds for full edge-to-edge swiping */
          }
          .project-grid::-webkit-scrollbar {
            display: none !important;
          }
          .glass-card {
            scroll-snap-align: center !important;
            flex: 0 0 78vw !important;
            max-width: 320px !important;
            height: 380px !important; /* Stable card height for horizontal flow */
            transform: rotate(1.2deg);
            transition: transform 0.3s ease, border-color 0.3s ease;
          }
          .glass-card:nth-child(even) {
            transform: rotate(-1.2deg);
          }
          .glass-card:active {
            transform: scale(0.97) rotate(0deg) !important;
          }
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
      <div className="project-filters">
        {projectFilters.map((filter) => (
          <m.button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
            whileTap={{ scale: 0.95 }}
            style={{
              border: activeFilter === filter.id ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              background: activeFilter === filter.id ? '#00f2ff' : 'rgba(25, 33, 34, 0.7)',
              color: activeFilter === filter.id ? '#00363a' : '#b9cacb',
              fontWeight: activeFilter === filter.id ? '700' : '500'
            }}
          >
            {filter.name}
          </m.button>
        ))}
      </div>

      {/* Project Grid / Stack with AnimatePresence */}
      {isMobile ? (
        <div className="project-stack-container" style={{
          position: 'relative',
          height: '420px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          marginTop: '20px'
        }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence mode="popLayout" custom={exitX}>
              {filteredProjects.length > 0 && (() => {
                const stackCards = [];
                const maxVisible = Math.min(filteredProjects.length, 3);
                for (let i = maxVisible - 1; i >= 0; i--) {
                  const projectIndex = (currentIndex + i) % filteredProjects.length;
                  const project = filteredProjects[projectIndex];
                  const isTop = i === 0;
                  
                  stackCards.push(
                    <m.div
                      key={project.id}
                      className="glass-card shimmer"
                      custom={exitX}
                      variants={stackCardVariants}
                      style={{
                        position: 'absolute',
                        width: '88vw',
                        maxWidth: '320px',
                        height: '380px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        boxShadow: isTop ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
                        pointerEvents: isTop ? 'auto' : 'none',
                        zIndex: 3 - i,
                        transformOrigin: 'bottom center',
                        touchAction: isTop ? 'pan-y' : 'auto',
                      }}
                      initial={isTop ? { scale: 0.95, y: 15, opacity: 0 } : false}
                      animate={{
                        scale: i === 0 ? 1 : i === 1 ? 0.94 : 0.88,
                        y: i === 0 ? 0 : i === 1 ? 12 : 24,
                        rotate: i === 0 ? 0 : i === 1 ? -4 : 4,
                        opacity: i === 0 ? 1 : i === 1 ? 0.85 : 0.5,
                      }}
                      exit="exit"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                      }}
                      drag={isTop ? 'x' : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.6}
                      onDragEnd={isTop ? (event, info) => {
                        const threshold = 100;
                        if (info.offset.x > threshold) {
                          setExitX(400);
                          setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
                        } else if (info.offset.x < -threshold) {
                          setExitX(-400);
                          setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
                        }
                      } : undefined}
                    >
                      <div className="project-image" style={{ height: '100%', width: '100%', position: 'relative' }}>
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <div className="project-card-overlay">
                          <h3 className="project-card-title">{project.title}</h3>
                          <p className="project-card-desc" style={{ display: 'none' }}>{project.description}</p>
                          <Link
                            to={`/project/${project.id}`}
                            className="view-project-btn"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </m.div>
                  );
                }
                return stackCards;
              })()}
            </AnimatePresence>
          </div>
          {filteredProjects.length > 1 && (
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#849495', fontSize: '0.85rem', fontFamily: '"Hanken Grotesk", sans-serif' }}>
              <span>← Swipe left or right →</span>
            </div>
          )}
        </div>
      ) : (
        <div className="project-grid">
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
                    <Link
                      to={`/project/${project.id}`}
                      className="view-project-btn"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default Projects;
