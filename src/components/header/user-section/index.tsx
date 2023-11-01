"use client";
import { useSession } from "next-auth/react";
import SignOutButton from "./sign-out-button";
import SignInButton from "./sign-in-button";

const UserSection = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    const userName =
      "name" in session.user ? session.user.name : session.user.personaname;

    return <SignOutButton userName={userName} />;
  }

  return <SignInButton />;
};

export default UserSection;
