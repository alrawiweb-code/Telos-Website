"use client";

import { motion } from "framer-motion";
import JournalBook from "./JournalBook";
import styles from "./Journal.module.css";

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

export default function Journal() {
  return (
    <section id="journal" className={styles.journal}>
      <div className={styles.inner}>
        <div className={styles.bookWrap}>
          <JournalBook />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p className="section-label" custom={0} variants={revealVariants}>
            02 — Reflection
          </motion.p>
          <motion.h2 className="section-heading" custom={0.15} variants={revealVariants}>
            Reflect on
            <br />
            your day.
          </motion.h2>
          <motion.p className="section-body" custom={0.3} variants={revealVariants}>
            The journal in Telos isn&apos;t a form to fill. It&apos;s a space to breathe. Write freely, add
            photos, attach voice notes. Your reflections accumulate quietly into something
            meaningful.
          </motion.p>
          <motion.div className="gold-rule" custom={0.4} variants={revealVariants}>
            <div className="gold-rule-dot" />
          </motion.div>
          <motion.p className="section-body" custom={0.45} variants={revealVariants}>
            Each entry is a page in a longer story — one you&apos;re writing one day at a time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
