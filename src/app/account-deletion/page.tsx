import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "@/components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Account Deletion — Telos",
  description: "Request the deletion of your Telos account and associated data.",
};

export default function AccountDeletionPage() {
  return (
    <div className={styles.container}>
      <header className={styles.nav}>
        <Link href="/" className={styles.logo}>
          TELOS
        </Link>
        <Link href="/" className={styles.backBtn}>
          <svg
            width="12"
            height="12"
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
          Back to Home
        </Link>
      </header>

      <main className={styles.main}>
        <article className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>Account Deletion</h1>
            <p className={styles.updated}>Last updated: May 1, 2026</p>
            <div className={styles.divider}>
              <div className={styles.dividerDot} />
            </div>
          </div>

          <div className={styles.bodySection}>
            <p>
              We understand that you may wish to delete your account and associated data from Telos. This page provides information on how to request account deletion.
            </p>

            <h2>How to Request Account Deletion</h2>
            <p>
              To request the deletion of your account and associated data, please email us at{" "}
              <a href="mailto:alrawiweb@gmail.com?subject=Account Deletion Request">
                alrawiweb@gmail.com
              </a>{" "}
              with the subject <strong>“Account Deletion Request”</strong>.
            </p>

            <h2>What Happens After You Request Deletion</h2>
            <p>Once you submit your account deletion request:</p>
            <ul>
              <li>We will verify your identity to ensure the request is legitimate</li>
              <li>We will process your deletion request within 30 days</li>
              <li>All account data associated with your account will be permanently deleted</li>
              <li>You will receive a confirmation email once the deletion is complete</li>
            </ul>

            <h2>Data Deletion Details</h2>
            <p>Please note the following regarding data deletion:</p>
            <ul>
              <li>
                <strong>Local Data:</strong> Since your habit data is stored locally on your device, you can delete it immediately by clearing the app data through your device settings or uninstalling the app.
              </li>
              <li>
                <strong>Account Records:</strong> We will delete all records associated with your account from our servers.
              </li>
              <li>
                <strong>Legal Records:</strong> We may retain certain information as required by law or for legitimate business purposes, such as fraud prevention.
              </li>
            </ul>

            <h2>Subscription Information</h2>
            <p>
              If you have an active subscription, please cancel it through your App Store or Google Play account before or at the time of your deletion request. Account deletion does not automatically cancel active subscriptions. You are responsible for managing your subscription status independently.
            </p>

            <h2>Questions?</h2>
            <p>
              If you have any questions about the account deletion process, please contact us at:
            </p>
            <p>
              <a href="mailto:alrawiweb@gmail.com">alrawiweb@gmail.com</a>
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
