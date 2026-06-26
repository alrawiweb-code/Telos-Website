import Link from "next/link";
import styles from "./not-found.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Telos",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.number}>404</div>
        <h1 className={styles.title}>Lost your way?</h1>
        <p className={styles.text}>
          Sometimes the best journeys require taking a step back.
          <br /> The page you&apos;re looking for has wandered off.
        </p>
        <Link href="/" className={styles.backBtn}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
