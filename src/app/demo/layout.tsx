import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scapy.com | Demo",
  description: "Generate Network Packets with Scapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <nav className="w-full flex items-center justify-between p-4 border-b">
        <Link href="/">
          <Image
            className="dark"
            src="/images/scapy_logo.png"
            alt="Scapy.net logo"
            width={72}
            height={72}
            priority
          />
        </Link>
      </nav>
      <main>
        {children}
      </main>
    </body>
  </html>
  );
}
