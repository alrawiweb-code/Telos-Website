"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./JournalBook.module.css";

const PAGE_COUNT = 6;

export default function JournalBook() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div
      ref={ref}
      className={`${styles.stage} ${isInView ? styles.animate : ""}`}
    >
      <div className={styles.shadow} />
      
      <div className={styles.world}>
        {/* Book Base (Right static page) */}
        <div className={styles.bookBase}>
          <div className={styles.rightSide}>
            <div className={styles.bookmark} aria-hidden="true" />
            <div className={styles.pageContent}>
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={`right-${j}`} className={styles.pageLine} />
              ))}
            </div>
          </div>
        </div>

        {/* Flipping pages */}
        {Array.from({ length: PAGE_COUNT }).map((_, i) => (
          <div
            key={i}
            className={styles.page}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className={styles.pageFront}>
              <div className={styles.pageContent}>
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={`front-${j}`} className={styles.pageLine} />
                ))}
              </div>
            </div>
            <div className={styles.pageBack}>
              <div className={`${styles.pageContent} ${styles.leftPageContent}`}>
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={`back-${j}`} className={styles.pageLine} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Book Cover (Starts closed, opens to form the left base) */}
        <div className={styles.bookCover}>
          <div className={styles.coverFront}>
            <div className={styles.coverSpine} />
            <div>
              <p className={styles.coverTitle}>Journal</p>
              <p className={styles.coverDate}>June 2026</p>
            </div>
            <p className={styles.coverEntries}>26 entries</p>
          </div>
          <div className={styles.coverBack}>
            <div className={`${styles.pageContent} ${styles.leftPageContent}`}>
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={`cover-back-${j}`} className={styles.pageLine} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
