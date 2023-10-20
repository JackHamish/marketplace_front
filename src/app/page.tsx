import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link
                className="py-4 px-7 rounded-3xl  border-2 border-[#A259FF] flex justify-between items-center"
                href="/about"
            >
                About
            </Link>
        </main>
    );
}
