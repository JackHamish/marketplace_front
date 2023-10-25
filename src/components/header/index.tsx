"use client";
import Image from "next/image";
import Link from "next/link";

import { SignInButton } from "../sign-button";
import { Button } from "../button";
import { getMe } from "@/domains/user";

export const Header = () => {
    return (
        <header>
            <div className="w-full py-5 px-12 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/icons/logo.svg"
                        alt="Logo"
                        width={243}
                        height={32}
                        priority
                    />
                </Link>

                <div className="flex items-center gap-12 text-base">
                    <Button type="button" fill={true} onClick={getMe}>
                        Get me
                    </Button>

                    <Link href="#">Marketplace</Link>
                    <Link href="#">Rankings</Link>
                    <Link href="#">Connect Wallet</Link>

                    <SignInButton />
                </div>
            </div>
        </header>
    );
};
