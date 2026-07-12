import { Link } from "react-router-dom";
import { m } from "motion/react";

const FloatingHubButton = () => {
  return (
    <m.div
      className="floating-hub-wrap"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link className="floating-hub-btn" to="/" aria-label="Back to personal hub">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10.5V20h13v-9.5" />
          <path d="M9.5 20v-5h5v5" />
        </svg>
        <span>Hub</span>
      </Link>
    </m.div>
  );
};

export default FloatingHubButton;
