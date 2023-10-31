"use client";
import { useSession } from "next-auth/react";
import SignOutButton from "./sign-out-button";
import SignInButton from "./sign-in-button";

const UserSection = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return <SignOutButton userName={session.user.name} />;
  }

  return <SignInButton />;
};

export default UserSection;
