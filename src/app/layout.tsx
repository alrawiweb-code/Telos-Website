import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://telos-app.com"),
  title: "Telos — Small Steps. Great Journeys.",
  description: "A calmer, more intentional way to move forward. Focus on less, track daily intentions, reflect with journal entries, and watch your growth accumulate quietly.",
  keywords: ["Intentional Living", "Mindfulness", "Journaling", "Habit Tracker", "Minimalism", "Telos"],
  authors: [{ name: "Telos Team" }],
  openGraph: {
    title: "Telos — Small Steps. Great Journeys.",
    description: "A calmer, more intentional way to move forward. Focus on less, track daily intentions, reflect with journal entries, and watch your growth accumulate quietly.",
    url: "https://telos-app.com", // Assuming generic since we don't have the final domain, but og expects an absolute URL typically. Next.js handles relative images automatically though.
    siteName: "Telos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telos — Small Steps. Great Journeys.",
    description: "A calmer, more intentional way to move forward. Focus on less, track daily intentions, reflect with journal entries, and watch your growth accumulate quietly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function ignoreError(e) {
                  var msg = e.message || '';
                  var filename = e.filename || '';
                  if (
                    filename.indexOf('chrome-extension://') === 0 ||
                    filename.indexOf('moz-extension://') === 0 ||
                    msg.indexOf('Talisman') !== -1 ||
                    msg.indexOf('extension') !== -1
                  ) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    console.warn('Suppressed extension error:', msg);
                  }
                }
                function ignoreRejection(e) {
                  var reason = e.reason;
                  var msg = (reason && reason.message) || '';
                  var stack = (reason && reason.stack) || '';
                  if (
                    msg.indexOf('Talisman') !== -1 ||
                    msg.indexOf('extension') !== -1 ||
                    stack.indexOf('chrome-extension://') !== -1 ||
                    stack.indexOf('moz-extension://') !== -1
                  ) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    console.warn('Suppressed extension rejection:', msg);
                  }
                }
                window.addEventListener('error', ignoreError, true);
                window.addEventListener('unhandledrejection', ignoreRejection, true);
              })();
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
