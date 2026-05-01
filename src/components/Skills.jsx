import { useState, useEffect } from 'react';
import { skillsData, skillCategories } from '../data/skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => setAnimateItems(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <style>{`
        .skills-section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #e8e8e8;
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
          background: rgba(15, 52, 96, 0.6);
          border: 1px solid rgba(74, 144, 226, 0.15);
          border-radius: 16px;
          padding: 24px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .skill-card-modern:hover {
          transform: translateY(-4px);
          border-color: rgba(74, 144, 226, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
        .skill-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .skill-icon-box {
          width: 44px;
          height: 44px;
          background: rgba(26, 26, 46, 0.8);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          flex-shrink: 0;
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
          font-size: 1rem;
          font-weight: 600;
          color: #e8e8e8;
          margin: 0 0 2px 0;
          text-align: left;
        }
        .skill-card-level {
          font-size: 0.8rem;
          color: #4a90e2;
          font-weight: 500;
          text-align: left;
          margin: 0;
        }
        .skill-card-pct {
          font-size: 0.8rem;
          color: #a0a0a0;
          font-weight: 600;
          flex-shrink: 0;
        }
        .skill-card-desc {
          font-size: 0.85rem;
          color: #a0a0a0;
          line-height: 1.5;
          margin: 0;
          text-align: left;
        }
        .skill-progress-track {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          overflow: hidden;
        }
        .skill-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #4a90e2, #6366f1);
          border-radius: 2px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 768px) {
          .skills-section-title {
            font-size: 1.5rem;
            margin-bottom: 25px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 0 15px;
          }
          .skill-card-modern {
            padding: 18px;
            gap: 12px;
          }
        }
        @media (max-width: 480px) {
          .skills-section-title {
            font-size: 1.3rem;
          }
        }
      `}</style>

      <h2 className="skills-section-title">Skills & Expertise</h2>

      {/* Skills Categories Filter */}
      <div className="skills-categories">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
            style={{
              background: activeCategory === category.id ? '#4a90e2' : '#0f3460',
              border: activeCategory === category.id ? 'none' : '1px solid #2d2d44',
              color: activeCategory === category.id ? 'white' : '#a0a0a0'
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.id}
            className="skill-card-modern"
            style={{
              opacity: animateItems ? 1 : 0,
              transform: animateItems ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 40}ms`,
              transitionProperty: 'all',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease'
            }}
          >
            <div className="skill-card-top">
              <div className="skill-icon-box">
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
              <div
                className="skill-progress-bar"
                style={{ width: animateItems ? `${skill.percentage}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
