import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`flex flex-col ${space_mono.variable} ${work_sans.variable}`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
