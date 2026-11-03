import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://zidnirizqia-portofolio.vercel.app"),
  title: "Zidni Khaerur Rizqia | Informatics Graduate, IT Support & Web Developer",
  description:
    "Portfolio of Zidni Khaerur Rizqia, Informatics graduate from Universitas Gunadarma. Hands-on web engineering, computer vision (YOLOv8 & Deep SORT), and IT support & system troubleshooting.",
  keywords: [
    "Zidni Khaerur Rizqia",
    "Portfolio",
    "Informatics",
    "Universitas Gunadarma",
    "IT Support",
    "System Troubleshooting",
    "Networking",
    "Cisco",
    "Web Developer",
    "Computer Vision",
    "YOLOv8",
    "Deep SORT",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Jakarta",
  ],
  authors: [{ name: "Zidni Khaerur Rizqia" }],
  openGraph: {
    title: "Zidni Khaerur Rizqia | Informatics Graduate, IT Support & Web Developer",
    description:
      "Portfolio of web engineering, computer vision, and IT support & troubleshooting.",
    url: "https://zidnirizqia-portofolio.vercel.app",
    siteName: "Zidni Khaerur Rizqia Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zidni Khaerur Rizqia - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zidni Khaerur Rizqia | Informatics Graduate, IT Support & Web Developer",
    description:
      "Portfolio of web engineering, computer vision, and IT support & troubleshooting.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zidni Khaerur Rizqia",
  jobTitle: "Informatics Graduate, IT Support & Web Developer",
  description:
    "Portfolio of Zidni Khaerur Rizqia, Informatics graduate from Universitas Gunadarma. Hands-on web engineering, computer vision (YOLOv8 & Deep SORT), and IT support.",
  url: "https://zidnirizqia-portofolio.vercel.app",
  sameAs: [
    "https://github.com/zidnirizqia",
    "https://www.linkedin.com/in/zidnirizqia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
