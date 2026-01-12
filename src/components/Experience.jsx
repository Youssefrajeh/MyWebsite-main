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
                      marginBottom: '12px',
                      textAlign: 'left',
                      gap: '10px',
                      paddingLeft: '0',
                      marginLeft: '0',
                      listStyle: 'none',
                      width: '100%'
                    }}>
                      <span className="bullet" style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        flexShrink: '0',
                        marginTop: '0',
                        width: '20px',
                        display: 'inline-block',
                        textAlign: 'left'
                      }}>•</span>
                      <span style={{
                        flex: '1',
                        textAlign: 'left',
                        lineHeight: '1.6',
                        paddingLeft: '0',
                        margin: '0'
                      }}>{responsibility}</span>
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
    </section>
  );
};

export default Experience;
