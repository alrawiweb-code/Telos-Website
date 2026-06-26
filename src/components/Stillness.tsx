"use client";

import { motion } from "framer-motion";
import styles from "./Stillness.module.css";

export default function Stillness() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1] as const,
      },
    },
  };

  const moreWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1] as const,
        delay: 0.15,
      },
    },
  };

  return (
    <section id="stillness" className={styles.stillness}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        <motion.span className={styles.label} variants={itemVariants}>
          Philosophy
        </motion.span>

        <motion.p className={styles.line} variants={itemVariants}>
          <span className={styles.wordNormal}>Most apps ask for&nbsp;</span>
          <motion.span className={styles.wordMore} variants={moreWordVariants}>
            more.
          </motion.span>
        </motion.p>

        <motion.p className={`${styles.line} ${styles.italic}`} variants={itemVariants}>
          Telos helps you focus on less.
        </motion.p>

        <motion.div className={styles.divider} variants={itemVariants} />

        <motion.p
          className={styles.line}
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--ash)" }}
          variants={itemVariants}
        >
          Not another tracker.
        </motion.p>

        <motion.p
          className={`${styles.line} ${styles.italic}`}
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          variants={itemVariants}
        >
          A companion for intentional living.
        </motion.p>
      </motion.div>
    </section>
  );
}
