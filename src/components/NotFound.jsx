import { Link } from "react-router-dom";
import { m } from "motion/react";
import { fadeInUp, staggerContainer, staggerItem } from "../utils/motionVariants";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <style>{`
        .not-found-page {
          min-height: calc(100vh - 90px);
          padding: 150px 20px 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f4ef;
        }

        .not-found-inner {
          width: min(760px, 100%);
          text-align: center;
        }

        .not-found-code {
          margin: 0 0 12px;
          font-family: "JetBrains Mono", "Space Mono", monospace;
          font-size: clamp(3.5rem, 14vw, 8rem);
          line-height: 0.9;
          color: #1f2937;
          letter-spacing: 0;
        }

        .not-found-title {
          margin: 0 0 14px;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(2rem, 6vw, 3.2rem);
          line-height: 1.1;
          color: #243033;
          letter-spacing: 0;
        }

        .not-found-text {
          max-width: 560px;
          margin: 0 auto 30px;
          color: #647174;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .not-found-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .not-found-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 24px;
          border-radius: 8px;
          font-family: "Hanken Grotesk", sans-serif;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .not-found-btn.primary {
          background: #2f6f73;
          color: #ffffff;
          box-shadow: 0 10px 24px rgba(47, 111, 115, 0.18);
        }

        .not-found-btn.secondary {
          background: #ffffff;
          color: #2f6f73;
          border: 1px solid rgba(47, 111, 115, 0.22);
        }

        .not-found-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(47, 111, 115, 0.18);
        }

        @media (max-width: 600px) {
          .not-found-page {
            min-height: auto;
            padding: 125px 18px 60px;
          }

          .not-found-text {
            font-size: 0.96rem;
            margin-bottom: 24px;
          }

          .not-found-actions {
            flex-direction: column;
            gap: 10px;
          }

          .not-found-btn {
            width: 100%;
          }
        }
      `}</style>

      <m.div
        className="not-found-inner"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
      >
        <m.p className="not-found-code" variants={fadeInUp}>404</m.p>
        <m.h1 className="not-found-title" variants={staggerItem}>Page not found</m.h1>
        <m.p className="not-found-text" variants={staggerItem}>
          This page may have moved, or the link may be typed incorrectly. You can head back home or jump straight to the projects section.
        </m.p>
        <m.div className="not-found-actions" variants={staggerItem}>
          <Link className="not-found-btn primary" to="/">
            Back Home
          </Link>
          <Link className="not-found-btn secondary" to="/portfolio" state={{ scrollTo: "projects" }}>
            View Projects
          </Link>
        </m.div>
      </m.div>
    </section>
  );
};

export default NotFound;
