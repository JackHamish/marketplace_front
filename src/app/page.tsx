import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full grow flex-col items-center justify-between p-24">
      <Link
        className="flex items-center justify-between rounded-3xl border-2 border-heliotrope px-7 py-4"
        href="/about"
      >
        About
      </Link>
    </main>
  );
}
