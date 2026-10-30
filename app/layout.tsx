import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://zidnirizqia-portofolio.vercel.app"),
  title: "Zidni Khaerur Rizqia | Informatics Graduate & Software Developer",
  description:
    "Portfolio of Zidni Khaerur Rizqia - Informatics graduate from Universitas Gunadarma with experience in Web Application Development, Computer Vision (YOLOv8, Deep SORT), and software engineering.",
  keywords: [
    "Zidni Khaerur Rizqia",
    "Portfolio",
    "Informatics",
    "Gunadarma",
    "Software Developer",
    "Computer Vision",
    "YOLOv8",
    "Deep SORT",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Zidni Khaerur Rizqia" }],
  openGraph: {
    title: "Zidni Khaerur Rizqia | Informatics Graduate & Software Developer",
    description:
      "Turning Ideas into Practical Technology — Web Development & Computer Vision Portfolio.",
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
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zidni Khaerur Rizqia | Informatics Graduate & Software Developer",
    description:
      "Turning Ideas into Practical Technology — Web Development & Computer Vision Portfolio.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/profile.png" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zidni Khaerur Rizqia",
  jobTitle: "Software Developer & Informatics Graduate",
  description:
    "Informatics graduate from Universitas Gunadarma with hands-on experience in web application development and computer vision.",
  url: "https://zidnirizqia-portofolio.vercel.app",
  sameAs: [
    "https://github.com/zidnirizqia",
    "https://www.linkedin.com/in/zidnirizqia"
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
