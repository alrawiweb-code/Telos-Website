import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "@/components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Telos",
  description: "Learn about how Telos handles your personal data and protects your privacy.",
};

export default function PrivacyPolicyPage() {
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
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: May 1, 2026</p>
            <div className={styles.divider}>
              <div className={styles.dividerDot} />
            </div>
          </div>

          <div className={styles.bodySection}>
            <p>
              Welcome to Telos. We are committed to protecting your privacy and ensuring you understand how your data is handled. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data.
            </p>

            <h2>Data Collection</h2>
            <p>
              Telos is designed with your privacy in mind. Here&apos;s what you need to know about data collection:
            </p>
            <ul>
              <li>
                <strong>Local Storage:</strong> Your habit data, including habit names, completion records, and preferences, is stored locally on your device. This data never leaves your device unless you choose to back it up.
              </li>
              <li>
                <strong>No Account Required:</strong> Telos does not require you to create an account or provide personal information to use the app.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect anonymous device information such as device type, operating system version, and app version for crash reporting and improving the app experience.
              </li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              Telos uses third-party services that may collect information used to identify you. We want to be transparent about these services:
            </p>

            <h3>Google AdMob</h3>
            <p>
              We use Google AdMob to serve advertisements in our app. AdMob may use device identifiers, cookies, and similar technologies to serve personalized or non-personalized ads based on your preferences. AdMob collects:
            </p>
            <ul>
              <li>Device advertising identifiers</li>
              <li>IP address</li>
              <li>Device and browser information</li>
              <li>Ad interaction data</li>
            </ul>
            <p>
              For more information, please review Google&apos;s Privacy &amp; Terms.
            </p>

            <h3>Adapty</h3>
            <p>
              We use Adapty to manage in-app subscriptions. Adapty may process purchase receipts and anonymous user identifiers to verify subscriptions and provide analytics. Adapty does not have access to your payment details, as all payments are processed securely through the App Store or Google Play.
            </p>

            <h2>How We Use Your Data</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide the core habit tracking functionality</li>
              <li>To serve relevant advertisements through AdMob</li>
              <li>To process subscription payments and manage your premium access</li>
              <li>To improve app performance and fix bugs</li>
              <li>To analyze app usage patterns (anonymously) to improve features</li>
            </ul>

            <h2>Data Deletion</h2>
            <p>Since your habit data is stored locally on your device, you can delete your data at any time by:</p>
            <ul>
              <li>Clearing the app data through your device settings</li>
              <li>Uninstalling the Telos app from your device</li>
            </ul>
            <p>
              To opt out of personalized advertising, you can adjust your device&apos;s advertising settings or contact us to request data deletion from third-party services.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Telos is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last updated” date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
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
