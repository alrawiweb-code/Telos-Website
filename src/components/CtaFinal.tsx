"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CtaFinal.module.css";

interface Particle {
  id: number;
  left: string;
  top: string;
  dur: string;
  delay: string;
  dy: string;
  dx: string;
  op: number;
  size: string;
}

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1] as const,
      delay,
    },
  }),
};

export default function CtaFinal() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Generate particles
  useEffect(() => {
    const generated: Particle[] = [];
    for (let i = 0; i < 45; i++) {
      generated.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        dur: `${6 + Math.random() * 9}s`,
        delay: `${-(Math.random() * 12)}s`,
        dy: `${-30 - Math.random() * 70}px`,
        dx: `${-35 + Math.random() * 70}px`,
        op: 0.12 + Math.random() * 0.32,
        size: `${1 + Math.random() * 2.5}px`,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generated);
  }, []);

  // Breathing background gradient loop
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Fallback static background if reduced motion
      const container = ctaRef.current;
      if (container) {
        container.style.background = `radial-gradient(ellipse 70% 60% at 50% 50%, #1a1612 0%, #0a0a0a 70%)`;
      }
      return;
    }

    let rafId: number;
    const period = 12000; // 12s full cycle
    const amplitude = 4; // ±4% drift

    const breathe = (timestamp: number) => {
      const container = ctaRef.current;
      if (!container) return;

      const t = timestamp / period;
      // Two slightly offset sine waves for X and Y drift
      const rx = 50 + amplitude * Math.sin(t * Math.PI * 2);
      const ry = 50 + amplitude * Math.sin(t * Math.PI * 2 + 1.1);

      container.style.background = `radial-gradient(ellipse 70% 60% at ${rx.toFixed(
        2
      )}% ${ry.toFixed(2)}%, #1a1612 0%, #0a0a0a 70%)`;

      rafId = requestAnimationFrame(breathe);
    };

    rafId = requestAnimationFrame(breathe);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section ref={ctaRef} id="cta-final" className={styles.ctaFinal}>
      {/* Background Particles */}
      <div className={styles.particles2} aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={
              {
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                "--dur": p.dur,
                "--delay": p.delay,
                "--dy": p.dy,
                "--dx": p.dx,
                "--op": p.op,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <motion.p className={styles.eyebrow} custom={0} variants={revealVariants}>
          Begin your journey
        </motion.p>

        {/* Final Mockup Phone SVG */}
        <motion.div className={styles.phoneFinal} custom={0.15} variants={revealVariants}>
          <svg viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="finalBody" x1="0%" y1="0%" x2="15%" y2="100%">
                <stop offset="0%" stopColor="#1a1510" />
                <stop offset="100%" stopColor="#0c0b09" />
              </linearGradient>
              <radialGradient id="finalScreen" cx="50%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#2a2318" />
                <stop offset="100%" stopColor="#0d0c0a" />
              </radialGradient>
              <linearGradient id="finalSpecular" x1="0%" y1="10%" x2="0%" y2="90%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="30%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            <rect
              x="4"
              y="4"
              width="192"
              height="372"
              rx="28"
              fill="url(#finalBody)"
              stroke="rgba(196,169,107,0.18)"
              strokeWidth="1"
            />
            <rect x="10" y="10" width="180" height="360" rx="24" fill="url(#finalScreen)" />
            <rect x="10" y="25" width="1" height="320" rx="1" fill="url(#finalSpecular)" />
            <rect x="78" y="15" width="44" height="12" rx="6" fill="#080706" />
            <text
              x="100"
              y="80"
              fontFamily="Georgia,serif"
              fontSize="10"
              fontWeight="400"
              fill="rgba(196,169,107,0.78)"
              textAnchor="middle"
              letterSpacing="5"
            >
              TELOS
            </text>
            <line
              x1="40"
              y1="92"
              x2="160"
              y2="92"
              stroke="rgba(196,169,107,0.1)"
              strokeWidth="0.5"
            />
            <text
              x="100"
              y="130"
              fontFamily="Georgia,serif"
              fontSize="8.5"
              fontStyle="italic"
              fill="rgba(244,242,239,0.38)"
              textAnchor="middle"
            >
              Small Steps.
            </text>
            <text
              x="100"
              y="148"
              fontFamily="Georgia,serif"
              fontSize="8.5"
              fontStyle="italic"
              fill="rgba(244,242,239,0.38)"
              textAnchor="middle"
            >
              Great Journeys.
            </text>
            <circle
              cx="100"
              cy="250"
              r="52"
              fill="none"
              stroke="rgba(196,169,107,0.055)"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="250"
              r="36"
              fill="none"
              stroke="rgba(196,169,107,0.09)"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="250"
              r="18"
              fill="rgba(196,169,107,0.07)"
              stroke="rgba(196,169,107,0.22)"
              strokeWidth="1"
            />
            <text
              x="100"
              y="254.5"
              fontFamily="Georgia,serif"
              fontSize="8"
              fill="rgba(196,169,107,0.55)"
              textAnchor="middle"
            >
              ◈
            </text>
          </svg>
        </motion.div>

        <motion.h2 className={styles.headline} custom={0.3} variants={revealVariants}>
          Small Steps.
          <br />
          Great Journeys.
        </motion.h2>

        <motion.p className={styles.sub} custom={0.45} variants={revealVariants}>
          A calmer way to move forward.
        </motion.p>

        <motion.div className={styles.buttons} custom={0.6} variants={revealVariants}>
          <a href="https://play.google.com/store/apps/details?id=com.alrawi.telos" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 19V5m0 14l-4-4m4 4l4-4" />
              <rect x="3" y="19" width="18" height="1.5" rx="0.75" />
            </svg>
            Download on Google Play
          </a>
          <a href="#hero" className={styles.btnSecondary}>
            Watch Preview
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
