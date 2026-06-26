"use client";

import { motion } from "framer-motion";
import styles from "./Backup.module.css";

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

export default function Backup() {
  return (
    <section id="backup" className={styles.backup}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p className="section-label" custom={0} variants={revealVariants} style={{ textAlign: "center" }}>
          06 — Your Data
        </motion.p>
        <motion.h2
          className="section-heading"
          custom={0.15}
          variants={revealVariants}
          style={{ textAlign: "center", fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Your journey
          <br />
          stays with you.
        </motion.h2>

        <div className={styles.cloudAnimation} aria-hidden="true">
          <div className={styles.cloudDevice}>📱</div>
          <div className={styles.cloudDots}>
            <div className={styles.cloudDot} />
            <div className={styles.cloudDot} />
            <div className={styles.cloudDot} />
            <div className={styles.cloudDot} />
            <div className={styles.cloudDot} />
          </div>
          <div className={styles.cloudDevice} style={{ fontSize: "1.3rem" }}>
            ☁
          </div>
          <div className={styles.cloudDots}>
            <div className={styles.cloudDot} style={{ animationDirection: "reverse" }} />
            <div className={styles.cloudDot} style={{ animationDirection: "reverse" }} />
            <div className={styles.cloudDot} style={{ animationDirection: "reverse" }} />
            <div className={styles.cloudDot} style={{ animationDirection: "reverse" }} />
            <div className={styles.cloudDot} style={{ animationDirection: "reverse" }} />
          </div>
          <div className={styles.cloudDevice}>📱</div>
        </div>

        <motion.p
          className="section-body"
          custom={0.3}
          variants={revealVariants}
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          Google Drive backup keeps every entry safe. Switch phones, reinstall, start fresh — your
          journey is always there, waiting for you.
        </motion.p>
      </motion.div>
    </section>
  );
}
