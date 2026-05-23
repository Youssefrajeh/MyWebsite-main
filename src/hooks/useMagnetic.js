import { useEffect, useRef } from "react";

/**
 * A custom React hook that creates a high-end magnetic pull animation on hover.
 * The event listener is attached to a wrap container, and translations are applied
 * to a child element to avoid hover border stutters.
 * 
 * @param {number} strength - The intensity of the magnetic pull (default: 0.3)
 * @returns {object} { wrapRef, btnRef } - Refs to attach to the wrap container and button respectively.
 */
export function useMagnetic(strength = 0.3) {
  const wrapRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const btn = btnRef.current;
    if (!wrap || !btn) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const handleMouseMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = "translate(0px, 0px)";
    };

    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return { wrapRef, btnRef };
}
