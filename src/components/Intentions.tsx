"use client";

import { motion } from "framer-motion";
import styles from "./Intentions.module.css";

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

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.18 + 0.25,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const progressVariants = {
  hidden: { width: "0%" },
  visible: {
    width: "40%",
    transition: {
      delay: 1.4,
      duration: 1.0,
      ease: "easeInOut" as const,
    },
  },
};

const items = [
  { id: "int1", text: "Morning meditation", done: true },
  { id: "int2", text: "Read 20 pages", done: true },
  { id: "int3", text: "Write journal entry", done: false },
  { id: "int4", text: "Evening walk", done: false },
  { id: "int5", text: "Deep work — 2 hours", done: false },
];

export default function Intentions() {
  return (
    <section id="intentions" className={styles.intentions}>
      <div className={styles.stickyLayout}>
        <motion.div
          className={styles.stickyText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="section-label" custom={0} variants={revealVariants}>
            01 — Intentions
          </motion.div>
          <motion.h2 className="section-heading" custom={0.15} variants={revealVariants}>
            Start with
            <br />
            intention.
          </motion.h2>
          <motion.p className="section-body" custom={0.3} variants={revealVariants}>
            Each day begins with clarity. Set your intentions, not your tasks. Telos guides you
            toward what matters, not just what&apos;s due.
          </motion.p>
          <motion.div className="gold-rule" style={{ marginTop: "2.5rem" }} custom={0.4} variants={revealVariants}>
            <div className="gold-rule-dot"></div>
          </motion.div>
          <motion.p className="section-body" custom={0.5} variants={revealVariants}>
            Daily intentions. Recurring rhythms. Progress you can feel. Everything displayed with
            quiet, deliberate simplicity.
          </motion.p>
        </motion.div>

        <div className={styles.stickyPhone}>
          <motion.div
            className={styles.phoneMockup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className={styles.phoneScreen}>
              <p className={styles.phoneDate}>Wednesday · June 26</p>
              <div className={styles.phoneDayStrip}>
                <div className={styles.dayDot}>M</div>
                <div className={styles.dayDot}>T</div>
                <div className={`${styles.dayDot} ${styles.dayDotActive}`}>W</div>
                <div className={styles.dayDot}>T</div>
                <div className={styles.dayDot}>F</div>
              </div>
              <p className={styles.phoneSectionLabel}>Today&apos;s Intentions</p>
              
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={styles.intentionItem}
                  custom={index}
                  variants={itemVariants}
                >
                  <div
                    className={`${styles.intentionCircle} ${
                      item.done ? styles.intentionCircleDone : ""
                    }`}
                  />
                  <span
                    className={`${styles.intentionText} ${
                      item.done ? styles.intentionTextDone : ""
                    }`}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}

              <div className={styles.phoneProgressWrap}>
                <div className={styles.progressLabel}>
                  Progress <span>40%</span>
                </div>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progressFill}
                    variants={progressVariants}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
