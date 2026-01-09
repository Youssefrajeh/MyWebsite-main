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

            <div className="experience-content">
              <ul className="experience-list">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index} className="experience-list-item">
                    <span className="bullet">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
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
