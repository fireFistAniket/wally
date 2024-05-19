import type { Metadata } from "next";
import { Expletus_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderFilter from "@/components/HeaderFilter";

const expletusSans = Expletus_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wally",
  description:
    "Wally is a fake eCommerce website designed with help of Platzi fake store api.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={expletusSans.className}>
        <Navbar />
        <HeaderFilter />
        {children}
        <Footer />
      </body>
    </html>
  );
}
