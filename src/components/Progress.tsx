"use client";

import { motion } from "framer-motion";
import styles from "./Progress.module.css";

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

export default function Progress() {
  const totalCells = 28;
  const doneUpTo = 25;

  return (
    <section id="progress-section" className={styles.progress}>
      <div className={styles.inner}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p className="section-label" custom={0} variants={revealVariants}>
            05 — Growth
          </motion.p>
          <motion.h2 className="section-heading" custom={0.15} variants={revealVariants}>
            Growth
            <br />
            you can see.
          </motion.h2>
          <motion.p className="section-body" custom={0.3} variants={revealVariants}>
            Days become weeks. Weeks become months. Your streaks and patterns emerge — not as
            pressure, but as evidence of who you&apos;re becoming.
          </motion.p>

          <div className={styles.statsRow}>
            <motion.div className={styles.statItem} custom={0.4} variants={revealVariants}>
              <p className={styles.statNum}>26</p>
              <p className={styles.statLabel}>Day streak</p>
            </motion.div>
            <motion.div className={styles.statItem} custom={0.48} variants={revealVariants}>
              <p className={styles.statNum}>94%</p>
              <p className={styles.statLabel}>Completion</p>
            </motion.div>
            <motion.div className={styles.statItem} custom={0.56} variants={revealVariants}>
              <p className={styles.statNum}>148</p>
              <p className={styles.statLabel}>Journal entries</p>
            </motion.div>
          </div>
        </motion.div>

        <div>
          <div className={styles.streakGrid} aria-label="Streak calendar">
            {Array.from({ length: totalCells }).map((_, i) => (
              <div
                key={i}
                className={`${styles.streakCell} ${
                  i < doneUpTo ? styles.done : i === doneUpTo ? styles.today : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
