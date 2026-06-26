"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const btn = ctaRef.current;
    if (!btn) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const start = performance.now();
    const duration = 700; // ms for full sweep

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const deg = t * 360;
      btn.style.setProperty("--sweep", `${deg}deg`);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        btn.style.setProperty("--sweep", "360deg");
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const btn = ctaRef.current;
    if (btn) {
      btn.style.setProperty("--sweep", "0deg");
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#" className={styles.logo}>
        TELOS
      </a>
      <a
        ref={ctaRef}
        href="https://play.google.com/store/apps/details?id=com.alrawi.telos"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Download
      </a>
    </nav>
  );
}
