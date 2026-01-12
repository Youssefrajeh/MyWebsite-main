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
      <h2 className="section-title" style={{ 
        color: 'var(--text-color)',
        background: 'none',
        WebkitBackgroundClip: 'unset',
        WebkitTextFillColor: 'unset'
      }}>Skills & Expertise</h2>

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

      {/* Skills Container */}
      <div className="skill-container">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.id}
            className={`skill ${animateItems ? 'animate' : ''}`}
            style={{
              transitionDelay: `${index * 50}ms`,
              opacity: animateItems ? 1 : 0,
              transform: animateItems ? 'translateY(0)' : 'translateY(20px)',
              transitionProperty: 'all',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease'
            }}
          >
            <div className="glass-card" data-percentage={skill.percentage} style={{
              padding: '25px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="skill-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '15px' }}>
                <div className="skill-icon" style={{
                  width: '50px',
                  height: '50px',
                  background: '#1a1a2e',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px'
                }}>
                  <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="skill-name" style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-color)' }}>{skill.name}</h3>
              </div>

              <p className="skill-description" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', flex: 1, marginBottom: '20px' }}>
                {skill.description}
              </p>

              <div className="skill-footer" style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{skill.level}</span>
                  <span style={{ color: 'var(--text-light)' }}>{skill.percentage}%</span>
                </div>
                <div className="progress-bg" style={{ width: '100%', height: '6px', background: '#1a1a2e', borderRadius: '3px', overflow: 'hidden' }}>
                  <div className="progress-fill" style={{
                    width: `${skill.percentage}%`,
                    height: '100%',
                    background: '#4a90e2',
                    borderRadius: '3px'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

