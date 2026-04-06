const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-text">
        <p>
          I am a Software Developer with hands-on experience in software development, system troubleshooting, and technical environments. I have a strong background working in manufacturing and quality-controlled settings, with a proven ability to analyze complex problems, improve processes, and support system reliability.
        </p>
        <p>
          Experienced in building client-server applications using C#, .NET Core, and SQL Server, with a solid working knowledge of REST APIs, networking, and system configuration. My chemical engineering background instilled a deep attention to detail, precision, and adaptability to new technologies in fast-paced environments.
        </p>
        <p>
          Beyond development, I have actively volunteered in my community, contributing my skills to the MWN Marketing team and local Food Bank. Fluent in English (C2), French (B1), and Arabic (Native), I am highly motivated to contribute to software and industrial system integration on cross-functional engineering teams.
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

