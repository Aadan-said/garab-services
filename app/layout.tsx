import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClientSessionProvider } from "@/components/providers/session-provider";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://farsamoyaqan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Farsamo Yaqaan - Madasha Xirfadlayaasha iyo Adeegyada Maxaliga ah",
    template: "%s | Farsamo Yaqaan",
  },
  description:
    "Farsamo Yaqaan waa madasha ugu weyn ee Soomaaliya ee isku xirta macaamiisha iyo xirfadlayaasha maxaliga ah ee la aamini karo (Koronto, Tubooyin, Dhisid, Makaanik, Nadaafad, iwm).",
  keywords: [
    "farsamo yaqaan",
    "farsamo yaqan",
    "farsamo yaqaanka",
    "farsamoyaqan",
    "xirfadle somalia",
    "fundi somalia",
    "fundi muqdisho",
    "adeegyo maxali ah",
    "koronto yaqaan",
    "tubiiste",
    "makaanik",
    "dhismaha somalia",
    "garab services",
  ],
  authors: [{ name: "Farsamo Yaqaan Team" }],
  creator: "Farsamo Yaqaan",
  publisher: "Farsamo Yaqaan",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "so_SO",
    url: siteUrl,
    title: "Farsamo Yaqaan - Madasha Xirfadlayaasha Maxaliga ah",
    description:
      "Hel xirfadle tayo leh oo kugu dhow daqiiqado gudahood. Farsamo Yaqaan waxay kugu xiraysaa farsamo-yaqaanno xaqiijsan.",
    siteName: "Farsamo Yaqaan",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Farsamo Yaqaan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farsamo Yaqaan - Madasha Xirfadlayaasha Maxaliga ah",
    description:
      "Hel xirfadle tayo leh oo kugu dhow daqiiqado gudahood. Farsamo Yaqaan waxay kugu xiraysaa farsamo-yaqaanno xaqiijsan.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

import { ErrorBoundary } from "@/components/error-boundary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var themeV2 = localStorage.getItem('theme_v2');
                  // If user has not explicitly set theme_v2 to 'dark', enforce LIGHT mode by default
                  if (themeV2 === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    if (!themeV2) {
                      localStorage.setItem('theme_v2', 'light');
                      localStorage.setItem('theme', 'light');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Farsamo Yaqaan",
              alternateName: ["Farsamo Yaqan", "FarsamoYaqan", "Farsamo Yaqaan Services"],
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/services?search={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Farsamo Yaqaan",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+252615000000",
                contactType: "customer service",
                email: "support@farsamoyaqan.com",
                areaServed: "SO",
                availableLanguage: ["Somali", "English"],
              },
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} antialiased font-sans`} suppressHydrationWarning>
        <ErrorBoundary>
          <ClientSessionProvider>
            {children}
            <Toaster richColors position="top-right" />
            <SpeedInsights />
          </ClientSessionProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
