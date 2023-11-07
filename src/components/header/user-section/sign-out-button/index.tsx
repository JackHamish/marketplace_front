"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

type Props = {
  userName: string;
};

export const SignOutButton = ({ userName }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 border-l-2 border-l-heliotrope px-7 ">
      <Link
        href="/profile"
        className="transition duration-500 hover:-translate-y-1 active:translate-y-2"
        replace
      >
        {userName}
      </Link>
      <Link
        href="#"
        onClick={() => signOut()}
        className="flex items-center justify-between rounded-3xl border-2 border-heliotrope bg-heliotrope px-6 py-3 transition duration-500 hover:scale-95"
      >
        Sign Out
      </Link>
    </div>
  );
};

export default SignOutButton;
