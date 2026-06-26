import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "@/components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — Telos",
  description: "Read the Terms of Service for using the Telos mobile application.",
};

export default function TermsOfServicePage() {
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
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.updated}>Last updated: May 1, 2026</p>
            <div className={styles.divider}>
              <div className={styles.dividerDot} />
            </div>
          </div>

          <div className={styles.bodySection}>
            <p>
              Welcome to Telos. By downloading, installing, or using our application, you agree to be bound by these Terms of Service. Please read them carefully before using the app.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using Telos, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the app. We reserve the right to modify these terms at any time, and your continued use of the app constitutes acceptance of any changes.
            </p>

            <h2>Subscription Terms</h2>
            <p>
              Telos offers premium subscription plans that unlock additional features. Please review the following subscription terms carefully:
            </p>

            <h3>What Premium Includes</h3>
            <p>
              A Telos Premium subscription grants you access to ad-free usage, unlimited habits, advanced statistics, and all premium features as described in the app.
            </p>

            <h3>Subscription Plans &amp; Pricing</h3>
            <ul>
              <li>
                <strong>Monthly:</strong> Billed monthly at the price displayed in the app at the time of purchase.
              </li>
              <li>
                <strong>Yearly:</strong> Billed annually at the price displayed in the app at the time of purchase.
              </li>
            </ul>
            <p>
              Prices may vary by region and are subject to change. Current pricing is always displayed in the app before purchase.
            </p>

            <h3>Payment &amp; Billing</h3>
            <ul>
              <li>Payment will be charged to your Apple ID account or Google Play account at confirmation of purchase.</li>
              <li>Your subscription automatically renews unless auto-renewal is turned off at least 24 hours before the end of the current billing period.</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
              <li>The renewal cost will be the same as the original subscription price unless otherwise notified in advance.</li>
            </ul>

            <h3>Managing Your Subscription</h3>
            <p>
              You can manage or cancel your subscription at any time through your device&apos;s account settings:
            </p>
            <ul>
              <li>
                <strong>iOS:</strong> Go to Settings &gt; [Your Name] &gt; Subscriptions &gt; Telos
              </li>
              <li>
                <strong>Android:</strong> Go to Google Play Store &gt; Menu &gt; Subscriptions &gt; Telos
              </li>
            </ul>
            <p>
              Cancellation will take effect at the end of the current billing period. You will retain access to premium features until that date.
            </p>

            <h2>User Conduct</h2>
            <p>When using Telos, you agree not to:</p>
            <ul>
              <li>Use the app for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the app</li>
              <li>Modify, adapt, or create derivative works based on the app</li>
              <li>Exploit any bugs or vulnerabilities in the app</li>
              <li>Use any automated systems or software to extract data from the app</li>
              <li>Interfere with or disrupt the app&apos;s functionality or servers</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The Telos app, including its design, graphics, code, content, and all associated intellectual property, is owned by us and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our app or its content without our express written permission.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Telos is provided “as is” and “as available” without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding the accuracy, reliability, or completeness of any content or information provided through the app.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or any other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your use or inability to use the app</li>
              <li>Any unauthorized access to or alteration of your data</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the app</li>
              <li>Any errors, inaccuracies, or omissions in the app&apos;s content</li>
              <li>Loss of habit data or tracking records</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              Telos may contain links to or integrate with third-party services (such as payment processors or advertising networks). We are not responsible for the content, privacy policies, or practices of these third-party services. Your interactions with third-party services are governed by their respective terms and policies.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to Telos at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties. Upon termination, your right to use the app will immediately cease.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms or your use of the app shall be resolved in the appropriate courts of jurisdiction.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page and updating the “Last updated” date. Your continued use of the app after any changes constitutes acceptance of the new Terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
