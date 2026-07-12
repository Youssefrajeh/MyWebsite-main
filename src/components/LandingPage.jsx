import { Link } from "react-router-dom";
import { m } from "motion/react";
import { fadeInUp, staggerContainer, staggerItem } from "../utils/motionVariants";

const linkGroups = [
  {
    title: "Portfolio",
    description: "Projects, skills, experience, and contact details.",
    to: "/portfolio",
    label: "Open Portfolio",
    icon: "briefcase",
    featured: true,
  },
  {
    title: "Resume",
    description: "Download my current CV as a PDF.",
    href: "/Youssef Rajeh.pdf",
    label: "Download CV",
    icon: "file",
  },
  {
    title: "GitHub",
    description: "Code, assignments, and project repositories.",
    href: "https://github.com/Youssefrajeh",
    label: "View GitHub",
    icon: "github",
  },
  {
    title: "LinkedIn",
    description: "Professional profile, education, and experience.",
    href: "https://www.linkedin.com/in/youssefrajeh",
    label: "Connect",
    icon: "linkedin",
  },
  {
    title: "Contact",
    description: "Email me directly for work, co-op, or collaboration.",
    href: "mailto:youssefrajeh07@gmail.com",
    label: "Send Email",
    icon: "mail",
  },
  {
    title: "Feedback",
    description: "Share quick anonymous feedback about my website.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf_zNZ_TAJhpFpz-Aj-ARUDhseLQ90iGRfVeClJVOScad3uZg/viewform?usp=header",
    label: "Give Feedback",
    icon: "message",
  },
];

const Icon = ({ name }) => {
  const paths = {
    briefcase: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1m-9 4h14M5 6h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
    file: "M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm0 0v5h5M9 13h6M9 17h6M9 9h1",
    github: "M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.86c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.91v2.75c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z",
    linkedin: "M6.94 8.99H3.75v10.2h3.19V8.99ZM5.35 4.1a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.9 9.25c0-3.06-1.63-4.49-3.82-4.49a3.3 3.3 0 0 0-2.99 1.64h-.04V8.99H9.35v10.2h3.18v-5.05c0-1.33.25-2.62 1.9-2.62 1.63 0 1.65 1.52 1.65 2.7v4.97h3.18v-5.84Z",
    mail: "M4 6h16v12H4V6Zm0 0 8 7 8-7",
    message: "M4 5h16v11H8l-4 4V5Z",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
};

const LandingPage = () => {
  const renderLink = (item) => {
    const className = `hub-card ${item.featured ? "featured" : ""}`;
    const content = (
      <>
        <span className="hub-card-icon">
          <Icon name={item.icon} />
        </span>
        <span className="hub-card-copy">
          <strong>{item.title}</strong>
          <span>{item.description}</span>
        </span>
        <span className="hub-card-action">{item.label}</span>
      </>
    );

    if (item.to) {
      return (
        <Link className={className} to={item.to}>
          {content}
        </Link>
      );
    }

    return (
      <a
        className={className}
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        download={item.href.endsWith(".pdf") ? true : undefined}
      >
        {content}
      </a>
    );
  };

  return (
    <main className="landing-page">
      <style>{`
        .landing-page {
          min-height: 100vh;
          background: #f7f4ef;
          color: #243033;
          padding: 32px 20px 54px;
        }

        .landing-shell {
          width: min(980px, 100%);
          margin: 0 auto;
        }

        .landing-topbar {
          min-height: 46px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 42px;
        }

        .landing-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #243033;
          text-decoration: none;
          font-family: "JetBrains Mono", "Space Mono", monospace;
          font-weight: 700;
        }

        .landing-mark span:first-child {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #2f6f73;
          color: #fff;
        }

        .landing-toplink {
          color: #2f6f73;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 700;
          text-decoration: none;
          padding: 10px 14px;
          border: 1px solid rgba(47, 111, 115, 0.2);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.55);
        }

        .landing-hero {
          display: grid;
          grid-template-columns: 170px minmax(0, 1fr);
          gap: 34px;
          align-items: center;
          margin-bottom: 34px;
        }

        .landing-photo {
          width: 170px;
          height: 170px;
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(47, 111, 115, 0.14);
          box-shadow: 0 18px 36px rgba(36, 48, 51, 0.1);
        }

        .landing-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .landing-kicker {
          margin: 0 0 10px;
          color: #2f6f73;
          font-family: "JetBrains Mono", "Space Mono", monospace;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0;
        }

        .landing-title {
          margin: 0;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(2.7rem, 8vw, 5rem);
          line-height: 0.95;
          letter-spacing: 0;
          color: #1f2937;
        }

        .landing-summary {
          max-width: 650px;
          margin: 18px 0 0;
          color: #647174;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 1.08rem;
          line-height: 1.7;
        }

        .landing-status-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0 0;
        }

        .landing-chip {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(47, 111, 115, 0.14);
          color: #445154;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 0.9rem;
          font-weight: 650;
        }

        .hub-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 32px;
        }

        .hub-grid-item.featured {
          grid-column: span 2;
        }

        .hub-card {
          min-height: 128px;
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          grid-template-rows: 1fr auto;
          gap: 14px 16px;
          padding: 18px;
          color: #243033;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.74);
          border: 1px solid rgba(47, 111, 115, 0.14);
          border-radius: 8px;
          box-shadow: 0 12px 28px rgba(36, 48, 51, 0.07);
          transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
        }

        .hub-card:hover {
          transform: translateY(-3px);
          border-color: rgba(47, 111, 115, 0.34);
          box-shadow: 0 18px 36px rgba(36, 48, 51, 0.11);
        }

        .hub-card.featured {
          min-height: 150px;
          background: #2f6f73;
          color: #fff;
          border-color: #2f6f73;
        }

        .hub-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(47, 111, 115, 0.1);
          color: #2f6f73;
        }

        .hub-card.featured .hub-card-icon {
          background: rgba(255, 255, 255, 0.14);
          color: #fff;
        }

        .hub-card-icon svg {
          width: 24px;
          height: 24px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.9;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .hub-card-icon svg path[d*="C"] {
          fill: currentColor;
          stroke: none;
        }

        .hub-card-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .hub-card-copy strong {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.2rem;
          line-height: 1.1;
        }

        .hub-card-copy span {
          color: #647174;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 0.96rem;
          line-height: 1.45;
        }

        .hub-card.featured .hub-card-copy span {
          color: rgba(255, 255, 255, 0.84);
        }

        .hub-card-action {
          grid-column: 2;
          color: #2f6f73;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .hub-card.featured .hub-card-action {
          color: #fff;
        }

        .landing-note {
          margin: 24px 0 0;
          color: #6f7d80;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 0.92rem;
          text-align: center;
        }

        @media (max-width: 720px) {
          .landing-page {
            padding: 20px 16px 38px;
          }

          .landing-topbar {
            margin-bottom: 30px;
          }

          .landing-hero {
            grid-template-columns: 1fr;
            gap: 22px;
            text-align: center;
          }

          .landing-photo {
            width: 132px;
            height: 132px;
            border-radius: 50%;
            margin: 0 auto;
          }

          .landing-status-row {
            justify-content: center;
          }

          .hub-grid {
            grid-template-columns: 1fr;
            margin-top: 26px;
          }

          .hub-card,
          .hub-card.featured {
            min-height: 118px;
          }

          .hub-grid-item.featured {
            grid-column: auto;
          }
        }

        @media (max-width: 420px) {
          .landing-topbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .landing-toplink {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }

          .hub-card {
            grid-template-columns: 42px minmax(0, 1fr);
            padding: 16px;
          }

          .hub-card-icon {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>

      <div className="landing-shell">
        <m.header
          className="landing-topbar"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Link className="landing-mark" to="/">
            <span>YR</span>
            <span>Youssef Rajeh</span>
          </Link>
          <Link className="landing-toplink" to="/portfolio">
            Portfolio
          </Link>
        </m.header>

        <m.section
          className="landing-hero"
          variants={staggerContainer(0.12, 0.08)}
          initial="hidden"
          animate="visible"
        >
          <m.div className="landing-photo" variants={staggerItem}>
            <img src="/images/youssef.jpeg" alt="Youssef Rajeh" />
          </m.div>

          <div>
            <m.p className="landing-kicker" variants={staggerItem}>
              Personal Website Hub
            </m.p>
            <m.h1 className="landing-title" variants={staggerItem}>
              Youssef Rajeh
            </m.h1>
            <m.p className="landing-summary" variants={staggerItem}>
              Computer Programming & Analysis student building practical web, database, and software projects. Choose where you want to go next.
            </m.p>
            <m.div className="landing-status-row" variants={staggerItem}>
              <span className="landing-chip">London, Ontario</span>
              <span className="landing-chip">Open to co-op</span>
              <span className="landing-chip">React, .NET, SQL</span>
            </m.div>
          </div>
        </m.section>

        <m.section
          className="hub-grid"
          variants={staggerContainer(0.08, 0.18)}
          initial="hidden"
          animate="visible"
          aria-label="Personal links"
        >
          {linkGroups.map((item) => (
            <m.div
              key={item.title}
              className={`hub-grid-item ${item.featured ? "featured" : ""}`}
              variants={staggerItem}
            >
              {renderLink(item)}
            </m.div>
          ))}
        </m.section>

        <p className="landing-note">
          This hub will grow as I add more pages, projects, and resources.
        </p>
      </div>
    </main>
  );
};

export default LandingPage;
