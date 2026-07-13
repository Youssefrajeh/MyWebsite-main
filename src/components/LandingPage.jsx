import { Link } from "react-router-dom";
import { m } from "motion/react";
import { staggerContainer, staggerItem } from "../utils/motionVariants";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <style>{`
        .landing-page {
          min-height: 100svh;
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

        .landing-contact-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 18px;
        }

        .landing-contact-link {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(47, 111, 115, 0.22);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.72);
          color: #2f6f73;
          box-shadow: 0 8px 20px rgba(36, 48, 51, 0.08);
          transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .landing-contact-link svg {
          width: 21px;
          height: 21px;
        }

        .landing-contact-link:hover {
          transform: translateY(-3px);
          color: #285f62;
          border-color: rgba(47, 111, 115, 0.5);
          box-shadow: 0 12px 24px rgba(47, 111, 115, 0.16);
        }

        .landing-contact-link:focus-visible {
          outline: 3px solid rgba(47, 111, 115, 0.28);
          outline-offset: 3px;
        }

        @media (max-width: 520px) {
          .landing-page {
            min-height: calc(100svh - 112px);
            align-items: center;
            padding: 18px 16px;
          }

          .landing-photo {
            width: 118px;
            height: 118px;
            margin-bottom: 18px;
          }

          .landing-kicker {
            margin-bottom: 8px;
            font-size: 0.76rem;
          }

          .landing-title {
            font-size: clamp(2.45rem, 13vw, 3.4rem);
          }

          .landing-summary {
            font-size: 0.93rem;
            line-height: 1.55;
            margin: 14px auto 18px;
          }

          .landing-cta {
            min-height: 46px;
            width: 100%;
            box-sizing: border-box;
          }
        }

        @media (max-width: 520px) and (max-height: 620px) {
          .landing-page {
            min-height: calc(100svh - 98px);
            padding-top: 12px;
            padding-bottom: 12px;
          }

          .landing-photo {
            width: 96px;
            height: 96px;
            margin-bottom: 14px;
          }

          .landing-summary {
            margin-bottom: 14px;
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
        <m.div className="landing-contact-actions" variants={staggerItem}>
          <a className="landing-contact-link" href="https://wa.me/15483884360" target="_blank" rel="noopener noreferrer" aria-label="Message Youssef on WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.53 14.74L2 22l5.39-1.42A9.94 9.94 0 0 0 12.04 22 9.99 9.99 0 0 0 12.04 2Zm0 18.31a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.2.84.85-3.12-.2-.32a8.14 8.14 0 0 1-1.25-4.35 8.28 8.28 0 1 1 8.28 8.27Zm4.54-6.2c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.76 6.76 0 0 1-2-1.24 7.55 7.55 0 0 1-1.38-1.72c-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.55c.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.48-.07 1.47-.6 1.68-1.18.2-.59.2-1.09.14-1.19-.06-.1-.22-.16-.47-.28Z" />
            </svg>
          </a>
          <a className="landing-contact-link" href="tel:+15483884360" aria-label="Call Youssef at +1 548 388 4360" title="Call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
            </svg>
          </a>
        </m.div>
      </m.section>
    </main>
  );
};

export default LandingPage;
