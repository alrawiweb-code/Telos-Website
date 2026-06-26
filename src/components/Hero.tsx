"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

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

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress specifically through this 250vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Fog moves slightly to create parallax
  const fogX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const fogY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);
  
  // Text Block fades out and moves up as the user starts scrolling
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Phone starts off-screen at the bottom and moves to the center, scaling up
  const phoneY = useTransform(scrollYProgress, [0.1, 0.6], ["80vh", "0vh"]);
  const phoneScale = useTransform(scrollYProgress, [0.4, 0.6], [0.85, 1.05]);
  const phoneFilter = useTransform(scrollYProgress, [0.4, 0.6], [
    "drop-shadow(0px 0px 0px rgba(196,169,107,0))", 
    "drop-shadow(0px 20px 50px rgba(196,169,107,0.4))"
  ]);

  useEffect(() => {
    // Reset scroll to top on reload and disable browser scroll restoration
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    const generated: Particle[] = [];
    for (let i = 0; i < 55; i++) {
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

  return (
    <section id="hero" ref={containerRef} className={styles.hero}>
      <div className={styles.stickyContainer}>
        {/* Volumetric Fog background */}
        <motion.div
          className={styles.fog}
          style={{
            x: fogX,
            y: fogY,
          }}
          aria-hidden="true"
        />

        {/* Floating Particles */}
        <div className={styles.particlesContainer} aria-hidden="true">
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

        {/* Unified Text Block that fades out on scroll */}
        <motion.div 
          className={styles.textBlock}
          style={{ y: textY }}
        >
          <p className={styles.eyebrow}>Intentional Living</p>

          <h1 className={styles.title}>
            {["T", "E", "L", "O", "S"].map((char, index) => {
              const delays = [0.55, 0.63, 0.70, 0.77, 0.87];
              return (
                <span
                  key={index}
                  className={styles.telosLetter}
                  style={{ animationDelay: `${delays[index]}s` }}
                >
                  {char}
                </span>
              );
            })}
          </h1>

          <p className={styles.tagline}>Small Steps. Great Journeys.</p>
          <p className={styles.sub}>A calmer way to move forward.</p>

          <a href="https://play.google.com/store/apps/details?id=com.alrawi.telos" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M4 16l8 4 8-4M4 12l8 4 8-4M12 2L4 8l8 4 8-4-8-4z" />
            </svg>
            Download on Google Play
          </a>
        </motion.div>

        {/* Specular & layered phone SVG preview */}
        <motion.div
          className={styles.phoneWrap}
          style={{
            x: "-50%",
            y: phoneY,
            scale: phoneScale,
            filter: phoneFilter,
          }}
        >
        <svg
          className={styles.phoneSvg}
          viewBox="0 0 260 490"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Telos app interface preview"
          role="img"
        >
          <defs>
            <linearGradient id="phoneBody" x1="0%" y1="0%" x2="20%" y2="100%">
              <stop offset="0%" stopColor="#1a1510" />
              <stop offset="50%" stopColor="#111008" />
              <stop offset="100%" stopColor="#0c0b09" />
            </linearGradient>
            <radialGradient id="screenDepth" cx="50%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#2e2416" stopOpacity="1" />
              <stop offset="50%" stopColor="#1a1410" stopOpacity="1" />
              <stop offset="100%" stopColor="#0d0c09" stopOpacity="1" />
            </radialGradient>
            <radialGradient id="screenGlow" cx="50%" cy="25%" r="50%">
              <stop offset="0%" stopColor="rgba(196,169,107,0.08)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(196,169,107,0)" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="specularLeft" x1="0%" y1="10%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" stopOpacity="1" />
              <stop offset="25%" stopColor="rgba(255,255,255,0.22)" stopOpacity="1" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.12)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="bezelReflect" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.04)" stopOpacity="1" />
              <stop offset="35%" stopColor="rgba(255,255,255,0)" stopOpacity="1" />
            </linearGradient>
            <clipPath id="phoneClip">
              <rect x="6" y="6" width="248" height="478" rx="34" />
            </clipPath>
          </defs>

          <rect
            x="6"
            y="6"
            width="248"
            height="478"
            rx="34"
            fill="url(#phoneBody)"
            stroke="rgba(196,169,107,0.12)"
            strokeWidth="1.5"
          />
          <rect x="7" y="7" width="246" height="15" rx="27" fill="rgba(255,255,255,0.025)" />

          <rect x="14" y="14" width="232" height="462" rx="28" fill="url(#screenDepth)" />
          <rect x="14" y="14" width="232" height="220" rx="28" fill="url(#screenGlow)" />
          <rect x="14" y="30" width="1.5" height="420" rx="1" fill="url(#specularLeft)" />
          <rect
            x="14"
            y="14"
            width="232"
            height="462"
            rx="28"
            fill="url(#bezelReflect)"
            clipPath="url(#phoneClip)"
          />

          <rect x="100" y="19" width="60" height="16" rx="8" fill="#080706" />

          <text
            x="130"
            y="56"
            fontFamily="Inter,sans-serif"
            fontSize="11"
            fontWeight="200"
            fill="rgba(244,242,239,0.38)"
            textAnchor="middle"
            letterSpacing="2"
          >
            09:41
          </text>
          <line
            x1="60"
            y1="73"
            x2="200"
            y2="73"
            stroke="rgba(196,169,107,0.12)"
            strokeWidth="0.5"
          />

          <text
            x="130"
            y="103"
            fontFamily="Georgia,serif"
            fontSize="13"
            fontWeight="400"
            fill="rgba(196,169,107,0.72)"
            textAnchor="middle"
            letterSpacing="6"
          >
            TELOS
          </text>
          <text
            x="130"
            y="127"
            fontFamily="Inter,sans-serif"
            fontSize="7.5"
            fontWeight="300"
            fill="rgba(154,149,144,0.42)"
            textAnchor="middle"
            letterSpacing="2"
          >
            WEDNESDAY 26
          </text>

          <circle
            cx="72"
            cy="152"
            r="11.5"
            fill="rgba(255,255,255,0.025)"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="0.5"
          />
          <text
            x="72"
            y="156"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fill="rgba(154,149,144,0.38)"
            textAnchor="middle"
          >
            M
          </text>

          <circle
            cx="100"
            cy="152"
            r="11.5"
            fill="rgba(255,255,255,0.025)"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="0.5"
          />
          <text
            x="100"
            y="156"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fill="rgba(154,149,144,0.38)"
            textAnchor="middle"
          >
            T
          </text>

          <circle cx="130" cy="152" r="13" fill="rgba(196,169,107,0.88)" />
          <text
            x="130"
            y="156.5"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fontWeight="500"
            fill="#0a0a0a"
            textAnchor="middle"
          >
            W
          </text>

          <circle
            cx="160"
            cy="152"
            r="11.5"
            fill="rgba(255,255,255,0.025)"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="0.5"
          />
          <text
            x="160"
            y="156"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fill="rgba(154,149,144,0.38)"
            textAnchor="middle"
          >
            T
          </text>

          <circle
            cx="188"
            cy="152"
            r="11.5"
            fill="rgba(255,255,255,0.025)"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="0.5"
          />
          <text
            x="188"
            y="156"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fill="rgba(154,149,144,0.38)"
            textAnchor="middle"
          >
            F
          </text>

          <text
            x="40"
            y="192"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fontWeight="300"
            fill="rgba(154,149,144,0.3)"
            letterSpacing="2"
          >
            TODAY&apos;S INTENTIONS
          </text>

          <circle
            cx="54"
            cy="214"
            r="8.5"
            fill="rgba(196,169,107,0.08)"
            stroke="rgba(196,169,107,0.45)"
            strokeWidth="1"
          />
          <polyline
            points="50.5,214 53.5,217 58,210.5"
            fill="none"
            stroke="rgba(196,169,107,0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="70"
            y="218"
            fontFamily="Inter,sans-serif"
            fontSize="8.5"
            fontWeight="300"
            fill="rgba(154,149,144,0.52)"
            textDecoration="line-through"
          >
            Morning meditation
          </text>

          <circle
            cx="54"
            cy="240"
            r="8.5"
            fill="rgba(196,169,107,0.08)"
            stroke="rgba(196,169,107,0.45)"
            strokeWidth="1"
          />
          <polyline
            points="50.5,240 53.5,243 58,236.5"
            fill="none"
            stroke="rgba(196,169,107,0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="70"
            y="244"
            fontFamily="Inter,sans-serif"
            fontSize="8.5"
            fontWeight="300"
            fill="rgba(154,149,144,0.52)"
            textDecoration="line-through"
          >
            Read 20 pages
          </text>

          <circle
            cx="54"
            cy="266"
            r="8.5"
            fill="none"
            stroke="rgba(196,169,107,0.3)"
            strokeWidth="1"
          />
          <text
            x="70"
            y="270"
            fontFamily="Inter,sans-serif"
            fontSize="8.5"
            fontWeight="300"
            fill="rgba(244,242,239,0.9)"
          >
            Write journal entry
          </text>

          <circle
            cx="54"
            cy="292"
            r="8.5"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text
            x="70"
            y="296"
            fontFamily="Inter,sans-serif"
            fontSize="8.5"
            fontWeight="300"
            fill="rgba(244,242,239,0.65)"
          >
            Evening walk
          </text>

          <circle
            cx="54"
            cy="318"
            r="8.5"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          <text
            x="70"
            y="322"
            fontFamily="Inter,sans-serif"
            fontSize="8.5"
            fontWeight="300"
            fill="rgba(244,242,239,0.42)"
          >
            Deep work — 2 hrs
          </text>

          <line
            x1="40"
            y1="348"
            x2="220"
            y2="348"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="1.5"
          />
          <line
            x1="40"
            y1="348"
            x2="112"
            y2="348"
            stroke="rgba(196,169,107,0.65)"
            strokeWidth="1.5"
          />
          <text
            x="40"
            y="365"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fontWeight="300"
            fill="rgba(154,149,144,0.3)"
            letterSpacing="1.5"
          >
            PROGRESS
          </text>
          <text
            x="220"
            y="365"
            fontFamily="Inter,sans-serif"
            fontSize="6.5"
            fontWeight="400"
            fill="rgba(196,169,107,0.6)"
            textAnchor="end"
          >
            40%
          </text>

          <rect x="14" y="400" width="232" height="76" rx="0" fill="url(#screenDepth)" opacity="0.7" />
        </svg>
      </motion.div>

      <motion.div 
        className={styles.scrollHint} 
        aria-hidden="true"
        style={{ opacity: textOpacity }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
      </div>
    </section>
  );
}
