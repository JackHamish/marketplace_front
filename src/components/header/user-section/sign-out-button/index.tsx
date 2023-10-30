"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const SignOutButton = ({ userName }: { userName: string }) => {
  return (
    <div className="flex items-center justify-between gap-4 border-l-2 border-l-heliotrope px-7">
      <p>{userName}</p>
      <Link
        href="#"
        onClick={() => signOut()}
        className="flex items-center justify-between rounded-3xl border-2 border-heliotrope bg-heliotrope px-6 py-3"
      >
        Sign Out
      </Link>
    </div>
  );
};

export default SignOutButton;
