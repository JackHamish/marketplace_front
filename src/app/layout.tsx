import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import "../../public/fonts/icons/style.css";
import { Header } from "@/components/header";
import { AuthProvider } from "@/components/providers/auth-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col ${space_mono.variable} ${work_sans.variable}`}
      >
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            {children}
            <Footer />
          </QueryClientProvider>
        </AuthProvider>
        <ToastContainer
          hideProgressBar
          autoClose={3000}
          position="bottom-right"
        />
      </body>
    </html>
  );
}
