import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/button";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${space_mono.variable} ${work_sans.variable}`}>
                <header>
                    <div className="w-full py-5 px-12 flex items-center justify-between">
                        <Link href="/">
                            <Image src="/logo.svg" alt="Logo" width={243} height={32} priority />
                        </Link>

                        <div className="flex items-center gap-12 text-base">
                            <Link href="#">Marketplace</Link>
                            <Link href="#">Rankings</Link>
                            <Link href="#">Connect Wallet</Link>
                            <Button icon="/user.svg" label="Sign Up" fill={true} />
                        </div>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
