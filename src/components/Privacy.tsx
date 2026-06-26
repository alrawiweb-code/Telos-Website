"use client";

import { motion } from "framer-motion";
import styles from "./Privacy.module.css";

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

export default function Privacy() {
  return (
    <section id="private" className={styles.private}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className={styles.vaultIcon} aria-hidden="true">
          <div className={styles.vaultRing}>
            <span className={styles.vaultLock}>🔒</span>
          </div>
        </div>

        <motion.p className="section-label" custom={0} variants={revealVariants} style={{ textAlign: "center" }}>
          04 — Privacy
        </motion.p>
        <motion.h2
          className="section-heading"
          custom={0.15}
          variants={revealVariants}
          style={{ textAlign: "center", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Some thoughts
          <br />
          are only yours.
        </motion.h2>
        <motion.p
          className="section-body"
          custom={0.3}
          variants={revealVariants}
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          Hidden journals. Passcode-protected entries. Your most private reflections, locked away.
          Telos will never read, share, or sell what you write.
        </motion.p>
      </motion.div>
    </section>
  );
}
