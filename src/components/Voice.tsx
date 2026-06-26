"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Voice.module.css";

const baseHeights = [
  20, 28, 16, 35, 42, 30, 18, 45, 38, 22, 50, 40, 25, 55, 48, 32, 20, 44,
  36, 28, 52, 42, 18, 38, 46, 30, 22, 48, 34, 26, 40, 50, 28, 16, 36, 24,
];

const fullText = `"Today I felt grateful for the small things — a quiet morning, a good cup of coffee, a moment of stillness before the world woke up..."`;

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.19, 1, 0.22, 1] as const,
      delay,
    },
  }),
};

export default function Voice() {
  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Waveform sine wave modulation loop
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    const freq = 1.4; // radians per second
    const phaseStep = 0.28; // radians between adjacent bars
    const startTime = performance.now();

    const animate = (now: number) => {
      const t = (now - startTime) / 1000;

      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        const sineVal = Math.sin(t * freq + i * phaseStep);
        const normalized = (sineVal + 1) / 2; // 0..1
        const scale = 0.18 + normalized * 0.82;
        const opacity = 0.25 + normalized * 0.6;
        bar.style.transform = `scaleY(${scale.toFixed(3)})`;
        bar.style.opacity = opacity.toFixed(3);
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Natural human typewriter speed loop
  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    let timer: NodeJS.Timeout;

    const type = () => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
        timer = setTimeout(type, 30 + Math.random() * 45); // 30ms - 75ms delay
      }
    };

    const startDelay = setTimeout(type, 650);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timer);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} id="voice" className={styles.voice}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p className="section-label" custom={0} variants={revealVariants} style={{ textAlign: "center" }}>
          03 — Voice to Thought
        </motion.p>
        <motion.h2
          className="section-heading"
          custom={0.15}
          variants={revealVariants}
          style={{ textAlign: "center", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Just speak.
          <br />
          We&apos;ll handle the writing.
        </motion.h2>

        {/* Dynamic Waveform Bars */}
        <div className={styles.waveform} aria-hidden="true">
          {baseHeights.map((h, i) => (
            <div
              key={i}
              ref={(el) => {
                barsRef.current[i] = el;
              }}
              className={styles.waveBar}
              style={{ height: `${h}px` }}
            />
          ))}
        </div>

        {/* Typewritten Text */}
        <p className={styles.transcribedText}>
          {typedText}
          <span className={styles.cursor} />
        </p>
      </motion.div>
    </section>
  );
}
