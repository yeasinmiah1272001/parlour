import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomHeader from "@/components/BottomHeadert";
import Layout from "@/Layout/Layout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "parler",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-bodyColor font-bodyFont`}>
        <Layout>
          <div className="sticky top-0 z-50 bg-white">
            <Header />

            <BottomHeader />
          </div>
          {children}
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </Layout>
      </body>
    </html>
  );
}
