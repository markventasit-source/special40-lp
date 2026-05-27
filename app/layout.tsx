import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ScrollToTop from "./components/ScrollToTop";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://join.special40.com"),
  title: "SPECIAL40 | Premium Corporate Finance Program for Commerce Graduates",
  description: "SPECIAL40 is a selective career transformation ecosystem by CAPITAIRE. We turn ambitious commerce graduates and ACCA/CMA students into corporate-ready finance professionals through practical, CA-led training in a real office environment.",
  icons: {
    icon: "/favicon-spl.png",
  },
  openGraph: {
    title: "SPECIAL40 | Premium Corporate Finance Program for Commerce Graduates",
    description: "SPECIAL40 is a selective career transformation ecosystem by CAPITAIRE. We turn ambitious commerce graduates and ACCA/CMA students into corporate-ready finance professionals through practical, CA-led training in a real office environment.",
    url: "https://join.special40.com",
    siteName: "SPECIAL40",
    images: [
      {
        url: "https://join.special40.com/favicon-spl.png",
        width: 512,
        height: 512,
        alt: "SPECIAL40 — Corporate Finance Program by Capitaire",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPECIAL40 | Premium Corporate Finance Program for Commerce Graduates",
    description: "SPECIAL40 is a selective career transformation ecosystem by CAPITAIRE. We turn ambitious commerce graduates and ACCA/CMA students into corporate-ready finance professionals through practical, CA-led training in a real office environment.",
    images: ["https://join.special40.com/favicon-spl.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} font-inter`}>
        <div className="relative w-full min-h-screen overflow-x-clip">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}