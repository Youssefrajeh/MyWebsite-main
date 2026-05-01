import { experienceData } from '../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">My Experience</h2>
      <div className="experience-container">
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-card">
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
                      borderLeft: '2px solid #e2e8f0',
                      lineHeight: '1.6',
                      color: '#475569',
                      fontSize: '1rem'
                    }}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="experience-tech-stack">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
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
            border-bottom: 1px solid #f1f5f9 !important;
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
