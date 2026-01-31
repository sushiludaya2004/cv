import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sushil | C++ Developer | SaaS Builder",
  description:
    "Sushil, passionate C++ developer exploring computer science and building SaaS products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}