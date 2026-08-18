import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import StoreProvider from "@/redux/StoreProvider";

import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Mina Space",
  description: "T-shirt printing made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        <StoreProvider>
          <ThemeRegistry>
            <TopBar />
            <Navbar />
            {children}
            <Footer />
          </ThemeRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
