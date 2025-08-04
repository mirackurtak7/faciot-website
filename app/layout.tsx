
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FACIOT - Reduce Downtime, Increase OEE | Factory Productivity SaaS",
  description: "FACIOT delivers measurable impact in 7 days: Start without IT, then scale with SAP/PLC integrations. Reduce downtime, increase OEE.",
  keywords: "OEE, factory productivity, manufacturing efficiency, downtime reduction, production efficiency",
  openGraph: {
    title: "FACIOT - Reduce Downtime, Increase OEE",
    description: "FACIOT delivers measurable impact in 7 days: Start without IT, then scale with SAP/PLC integrations.",
    type: "website",
    locale: "en_US",
    siteName: "FACIOT"
  },
  twitter: {
    card: "summary_large_image",
    title: "FACIOT - Reduce Downtime, Increase OEE",
    description: "FACIOT delivers measurable impact in 7 days: Start without IT, then scale with SAP/PLC integrations."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
