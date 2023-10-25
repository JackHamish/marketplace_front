import Link from "next/link";

export default function Home() {
    return (
        <main className="flex  h-full  flex-col items-center justify-between p-24 grow">
            <Link
                className="py-4 px-7 rounded-3xl  border-2 border-heliotrope flex justify-between items-center"
                href="/about"
            >
                About
            </Link>
        </main>
    );
}
