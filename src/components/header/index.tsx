"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { getMe } from "@/domains/user";
import LogoSvg from "public/images/icons/logo.svg";
import UserSection from "./user-section";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-12 py-5">
      <Link href="/">
        <Image src={LogoSvg} alt="Logo" width={243} height={32} priority />
      </Link>

      <div className="flex items-center gap-12 text-base">
        <Button type="button" fill onClick={getMe}>
          Get me
        </Button>

        <Link href="#">Marketplace</Link>
        <Link href="#">Rankings</Link>
        <Link href="#">Connect Wallet</Link>

        <UserSection />
      </div>
    </header>
  );
};
