import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "ETH Mobile | The Foundation of Mobile dApps",
  description:
    "Build native mobile dApps with your own custom in-app wallet using React Native",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="/images/logo.png" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
