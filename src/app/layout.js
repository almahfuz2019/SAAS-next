import localFont from "next/font/local";
import "./globals.css";
import Animation from "@/hooks/Animation";
import Navbar from "./components/shared/Navbar";
import NavbarForSmallDevices from "./components/shared/NavbarForSmallDevices";
import Footer from "./components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Condo Cloud",
  description: "Generated by TechPlato.Inc",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <NavbarForSmallDevices />
        {children}
        <Footer />
        <Animation />
      </body>
    </html>
  );
}
