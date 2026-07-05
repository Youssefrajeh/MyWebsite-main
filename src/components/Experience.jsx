import { m } from 'motion/react';
import { experienceData } from '../data/experienceData';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '../utils/motionVariants';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <m.h2
        className="section-title"
        variants={fadeInUp}
        initial="visible"
        animate="visible"
      >
        Professional Journey
      </m.h2>

      <m.div
        className="experience-container"
        variants={staggerContainer(0.15, 0.1)}
        initial="visible"
        animate="visible"
      >
        {experienceData.map((exp) => (
          <m.div 
            key={exp.id} 
            className="experience-card"
            variants={staggerItem}
          >
            <div className="experience-header-grid">
              <div className="experience-info">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
              </div>
              <div className="experience-duration">
                {exp.duration}
              </div>
            </div>

            <div className="experience-content" style={{
              width: '100%',
              padding: '0',
              margin: '0'
            }}>
              <div style={{
                width: '100%',
                paddingLeft: '20px',
                paddingRight: '20px',
                boxSizing: 'border-box'
              }}>
                <ul className="experience-list" style={{ 
                  listStyle: 'none', 
                  padding: '0',
                  margin: '0 0 20px 0',
                  textAlign: 'left',
                  paddingLeft: '0',
                  marginLeft: '0',
                  width: '100%'
                }}>
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="experience-list-item" style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: '10px 0',
                      textAlign: 'left',
                      paddingLeft: '14px',
                      marginLeft: '0',
                      listStyle: 'none',
                      width: '100%',
                      borderLeft: '2px solid #3a494b',
                      lineHeight: '1.6',
                      color: '#b9cacb',
                      fontSize: '1rem',
                      fontFamily: '"Hanken Grotesk", sans-serif'
                    }}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              <m.div
                className="experience-tech-stack"
                variants={staggerContainer(0.05, 0)}
                initial="visible"
                animate="visible"
              >
                {exp.technologies.map((tech, index) => (
                  <m.span key={index} className="tech-tag" variants={scaleIn}>
                    {tech}
                  </m.span>
                ))}
              </m.div>
            </div>
          </m.div>
        ))}
      </m.div>

      <style>{`
        .experience-company {
          color: #00f2ff !important;
          font-family: "JetBrains Mono", monospace !important;
          font-size: 0.85rem !important;
        }
        .experience-duration {
          font-family: "JetBrains Mono", monospace !important;
          font-size: 0.8rem !important;
          color: #849495 !important;
        }
        .experience-title {
          font-family: "Space Grotesk", sans-serif !important;
        }
        @media (max-width: 768px) {
          .experience-card {
            padding: 30px 20px !important;
            text-align: center !important;
          }
          .experience-header-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 15px !important;
          }
          .experience-duration {
            text-align: center !important;
            margin: 0 auto !important;
            padding: 6px 16px !important;
            font-size: 0.8rem !important;
          }
          .experience-list-item {
            text-align: center !important;
            padding: 10px 0 !important;
            border-left: none !important;
            border-bottom: 1px solid #3a494b !important;
            padding-left: 0 !important;
          }
          .experience-list-item:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
