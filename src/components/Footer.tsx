import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="/privacy">Privacy Policy</Link>
        <span className={styles.separator}>·</span>
        <Link href="/terms">Terms of Service</Link>
        <span className={styles.separator}>·</span>
        <Link href="/account-deletion">Account Deletion</Link>
      </div>
      <p>© 2026 Telos · Intentional Living · All rights reserved</p>
    </footer>
  );
}
