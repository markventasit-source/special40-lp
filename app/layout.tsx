import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Script from "next/script";
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
      <body className={`${inter.variable} font-inter`}>
        {/* Meta Pixel — must live inside <body> for Next.js App Router */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1576518714480772');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Ads Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18178682920"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18178682920');
          `}
        </Script>

        <div className="relative w-full min-h-screen overflow-x-clip">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}