import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "A simple weather application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
