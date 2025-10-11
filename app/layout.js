import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Veritas Insulation - Premium Attic Insulation Services Ottawa",
  description: "Professional attic insulation services in Ottawa. Save 25-40% on energy bills with premium insulation materials. Free quotes, lifetime warranty, rebate assistance.",
  keywords: "attic insulation Ottawa, insulation company Ottawa, energy savings, R-value insulation, blown-in insulation, air sealing",
  author: "Veritas Insulation",
  robots: "index, follow"
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
