import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
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
        url: "https://join.special40.com/og-image.png",
        width: 1200,
        height: 1200,
        alt: "SPECIAL40 — Premium Corporate Finance Program by Capitaire",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPECIAL40 | Premium Corporate Finance Program for Commerce Graduates",
    description: "SPECIAL40 is a selective career transformation ecosystem by CAPITAIRE. We turn ambitious commerce graduates and ACCA/CMA students into corporate-ready finance professionals through practical, CA-led training in a real office environment.",
    images: ["https://join.special40.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '9018742848235297');fbq('track', 'Lead');fbq('track','ApplyNow');" }}
      />
      <noscript>
        <img height="1" width="1" style={{display: "none"}} src="https://www.facebook.com/tr?id=9018742848235297&ev=Lead&noscript=1" alt="" />
      </noscript>
      <body className={`${inter.variable} font-inter`}>
        <div className="relative w-full min-h-screen overflow-x-clip">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}