const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-text">
        <p>
          I am a dedicated software developer with a unique background in
          Applied Chemistry and extensive experience in quality control,
          production management, and team leadership. Currently pursuing an
          Advanced Diploma in Computer Programming and Analysis at Fanshawe
          College with an impressive 3.9 GPA.
        </p>
        <p>
          My diverse professional journey spans over 15 years in the chemical
          and manufacturing industries across Syria and Cameroon, where I
          developed strong analytical thinking, problem-solving skills, and
          attention to detail. These transferable skills now drive my passion
          for creating efficient, scalable software solutions.
        </p>
        <p>
          Fluent in English (C2), French (B1), and Arabic (Native), I bring a
          multicultural perspective and proven ability to work effectively in
          diverse, international environments.
        </p>
        <div className="cv-button">
          <a href="/Youssef Rajeh.pdf" className="btn primary-btn" download>
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

