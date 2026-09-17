import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Genius Car",
  description: "Genius Car",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <Navbar />
          {children}
          <div className="h-[40px]" />
          <Footer />
        </div>
      </body>
    </html>
  );
}