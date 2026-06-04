import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { skillsData, skillCategories } from '../data/skillsData';
import { fadeInUp, scaleStaggerItem, staggerContainer, progressBar, viewportConfig } from '../utils/motionVariants';

const stackCardVariants = {
  exit: (customX) => ({
    x: customX,
    opacity: 0,
    scale: 0.8,
    rotate: customX > 0 ? 18 : -18,
  })
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitX, setExitX] = useState(0);

  // Track mobile responsive width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset top card index when active category filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <style>{`
        .skills-section-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #dce4e4;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: -0.5px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        .skill-card-modern {
          background: rgba(25, 33, 34, 0.7);
          border: 1px solid rgba(0, 242, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          gap: 16px;
          cursor: pointer;
        }
        .skill-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .skill-icon-box {
          width: 44px;
          height: 44px;
          background: rgba(13, 21, 21, 0.8);
          border: 1px solid rgba(0, 242, 255, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .skill-card-modern:hover .skill-icon-box {
          border-color: rgba(0, 242, 255, 0.4);
          box-shadow: 0 0 12px rgba(0, 242, 255, 0.2);
        }
        .skill-icon-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .skill-card-info {
          flex: 1;
          min-width: 0;
        }
        .skill-card-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #dce4e4;
          margin: 0 0 2px 0;
          text-align: left;
        }
        .skill-card-level {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.7rem;
          color: #00f2ff;
          font-weight: 500;
          text-align: left;
          margin: 0;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .skill-card-pct {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.8rem;
          color: #849495;
          font-weight: 600;
          flex-shrink: 0;
        }
        .skill-card-desc {
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 0.85rem;
          color: #b9cacb;
          line-height: 1.5;
          margin: 0;
          text-align: left;
        }
        .skill-progress-track {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 2px;
          overflow: hidden;
        }
        .skill-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #00f2ff, #00f8aa);
          border-radius: 2px;
        }
        @media (max-width: 768px) {
          .skills-section-title {
            font-size: 1.5rem;
            margin-bottom: 25px;
          }
          .skills-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 16px !important;
            padding: 20px 24px !important;
            scroll-behavior: smooth !important;
            scrollbar-width: none !important;
            margin: 0 -20px !important; /* Bleed slightly past padding for perfect full-bleed swipe */
          }
          .skills-grid::-webkit-scrollbar {
            display: none !important;
          }
          .skill-card-modern {
            scroll-snap-align: center !important;
            flex: 0 0 78vw !important;
            max-width: 290px !important;
            padding: 20px !important;
            gap: 12px !important;
            transform: rotate(-1.5deg);
            transition: transform 0.3s ease, border-color 0.3s ease;
          }
          .skill-card-modern:nth-child(even) {
            transform: rotate(1.5deg);
          }
          .skill-card-modern:active {
            transform: scale(0.97) rotate(0deg) !important;
          }
        }
        @media (max-width: 480px) {
          .skills-section-title {
            font-size: 1.3rem;
          }
        }
      `}</style>

      {/* Section Title */}
      <m.h2
        className="skills-section-title"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        Technical Arsenal
      </m.h2>

      {/* Skills Categories Filter */}
      <div className="skills-categories">
        {skillCategories.map((category) => (
          <m.button
            key={category.id}
            className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
            whileTap={{ scale: 0.95 }}
            style={{
              background: activeCategory === category.id ? '#00f2ff' : 'rgba(25, 33, 34, 0.7)',
              border: activeCategory === category.id ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              color: activeCategory === category.id ? '#00363a' : '#b9cacb',
              fontFamily: '"Hanken Grotesk", sans-serif',
              fontWeight: activeCategory === category.id ? '700' : '500'
            }}
          >
            {category.name}
          </m.button>
        ))}
      </div>

      {/* Skills Grid / Stack with AnimatePresence */}
      {isMobile ? (
        <div className="skills-stack-container" style={{
          position: 'relative',
          height: '280px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible',
          marginTop: '20px'
        }}>
          <div style={{ position: 'relative', width: '100%', height: '240px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence mode="popLayout" custom={exitX}>
              {filteredSkills.length > 0 && (() => {
                const stackCards = [];
                const maxVisible = Math.min(filteredSkills.length, 3);
                for (let i = maxVisible - 1; i >= 0; i--) {
                  const skillIndex = (currentIndex + i) % filteredSkills.length;
                  const skill = filteredSkills[skillIndex];
                  const isTop = i === 0;
                  
                  stackCards.push(
                    <m.div
                      key={skill.id}
                      className="skill-card-modern"
                      custom={exitX}
                      variants={stackCardVariants}
                      style={{
                        position: 'absolute',
                        width: '88vw',
                        maxWidth: '290px',
                        height: '240px',
                        background: 'rgba(25, 33, 34, 0.95)',
                        border: '1px solid rgba(0, 242, 255, 0.15)',
                        borderRadius: '16px',
                        padding: '20px',
                        backdropFilter: 'blur(20px)',
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
                          setCurrentIndex((prev) => (prev + 1) % filteredSkills.length);
                        } else if (info.offset.x < -threshold) {
                          setExitX(-400);
                          setCurrentIndex((prev) => (prev + 1) % filteredSkills.length);
                        }
                      } : undefined}
                    >
                      <div className="skill-card-top">
                        <div className="skill-icon-box shimmer">
                          <img src={skill.icon} alt={skill.name} />
                        </div>
                        <div className="skill-card-info">
                          <h3 className="skill-card-name">{skill.name}</h3>
                          <p className="skill-card-level">{skill.level}</p>
                        </div>
                        <span className="skill-card-pct">{skill.percentage}%</span>
                      </div>
                      <p className="skill-card-desc">{skill.description}</p>
                      <div className="skill-progress-track">
                        <m.div
                          className="skill-progress-bar"
                          variants={progressBar(skill.percentage)}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </m.div>
                  );
                }
                return stackCards;
              })()}
            </AnimatePresence>
          </div>
          {filteredSkills.length > 1 && (
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: '#849495', fontSize: '0.85rem', fontFamily: '"Hanken Grotesk", sans-serif' }}>
              <span>← Swipe left or right →</span>
            </div>
          )}
        </div>
      ) : (
        <m.div
          className="skills-grid"
          variants={staggerContainer(0.05, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          key={activeCategory}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <m.div
                key={skill.id}
                className="skill-card-modern"
                variants={scaleStaggerItem}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  borderColor: 'rgba(0, 242, 255, 0.35)',
                  boxShadow: '0 0 25px rgba(0, 242, 255, 0.15), 0 12px 30px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-box shimmer">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="skill-card-info">
                    <h3 className="skill-card-name">{skill.name}</h3>
                    <p className="skill-card-level">{skill.level}</p>
                  </div>
                  <span className="skill-card-pct">{skill.percentage}%</span>
                </div>
                <p className="skill-card-desc">{skill.description}</p>
                <div className="skill-progress-track">
                  <m.div
                    className="skill-progress-bar"
                    variants={progressBar(skill.percentage)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  />
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      )}
    </section>
  );
};

export default Skills;
