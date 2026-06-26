"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./GoldHairline.module.css";

export default function GoldHairline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={`${styles.hairline} ${isInView ? styles.draw : ""}`}
      aria-hidden="true"
    />
  );
}
