import { Link } from "react-router-dom";
import { m } from "motion/react";
import { staggerContainer, staggerItem } from "../utils/motionVariants";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <style>{`
        .landing-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f4ef;
          color: #243033;
          padding: 28px 20px;
        }

        .landing-shell {
          width: min(780px, 100%);
          text-align: center;
        }

        .landing-photo {
          width: 156px;
          height: 156px;
          margin: 0 auto 28px;
          border-radius: 50%;
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
          font-size: clamp(2.8rem, 10vw, 5.2rem);
          line-height: 0.95;
          letter-spacing: 0;
          color: #1f2937;
        }

        .landing-summary {
          max-width: 620px;
          margin: 18px auto 30px;
          color: #647174;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 1.08rem;
          line-height: 1.7;
        }

        .landing-cta {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 26px;
          border-radius: 8px;
          background: #2f6f73;
          color: #ffffff;
          text-decoration: none;
          font-family: "Hanken Grotesk", sans-serif;
          font-size: 1rem;
          font-weight: 800;
          box-shadow: 0 14px 30px rgba(47, 111, 115, 0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .landing-cta:hover {
          transform: translateY(-3px);
          background: #285f62;
          box-shadow: 0 18px 36px rgba(47, 111, 115, 0.26);
        }

        @media (max-width: 520px) {
          .landing-page {
            align-items: flex-start;
            padding: 34px 16px;
          }

          .landing-photo {
            width: 132px;
            height: 132px;
            margin-bottom: 24px;
          }

          .landing-summary {
            font-size: 0.98rem;
            margin-bottom: 24px;
          }

          .landing-cta {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>

      <m.section
        className="landing-shell"
        variants={staggerContainer(0.12, 0.08)}
        initial="hidden"
        animate="visible"
      >
        <m.div className="landing-photo" variants={staggerItem}>
          <img src="/images/youssef.jpeg" alt="Youssef Rajeh" />
        </m.div>

        <m.p className="landing-kicker" variants={staggerItem}>
          Personal Website
        </m.p>
        <m.h1 className="landing-title" variants={staggerItem}>
          Youssef Rajeh
        </m.h1>
        <m.p className="landing-summary" variants={staggerItem}>
          Computer Programming & Analysis student building practical web, database, and software projects.
        </m.p>
        <m.div variants={staggerItem}>
          <Link className="landing-cta" to="/portfolio">
            Enter Portfolio
          </Link>
        </m.div>
      </m.section>
    </main>
  );
};

export default LandingPage;
