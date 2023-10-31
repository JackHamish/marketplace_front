import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserSvg from "public/images/icons/user.svg";
import Icon from "@/components/icon";

const SignInButton = () => {
  return (
    <Link
      href="/login"
      className="flex  items-center justify-between gap-3 rounded-3xl border-2 border-heliotrope bg-heliotrope px-7 py-4 transition duration-500 
      hover:scale-95"
    >
      <Icon icon="icon-user text-white text-xl" />

      <span>Sign in</span>
    </Link>
  );
};

export default SignInButton;
