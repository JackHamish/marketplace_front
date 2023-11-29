import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import "../../public/fonts/icons/style.css";
import { Header } from "@/components/header";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import React from "react";
import QueryProvider from "@/components/providers/query-provider";
import { NotificationsListener } from "@/components/listeners/notifications-listener";

const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "NFT Marketplace",
};

type Props = React.PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col ${space_mono.variable} ${work_sans.variable}`}
      >
        <AuthProvider>
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </AuthProvider>
        <ToastContainer
          hideProgressBar
          autoClose={3000}
          position="bottom-right"
        />
        <NotificationsListener />
      </body>
    </html>
  );
}
