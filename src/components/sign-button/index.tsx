"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SignInButton = () => {
    const { data: session } = useSession();
    console.log({ session });

    if (session && session.user)
        return (
            <div
                className={
                    "px-7   border-l-2 gap-4 border-l-heliotrope flex justify-between items-center"
                }
            >
                <p className="">{session.user.name}</p>
                <Link
                    href={"#"}
                    onClick={() => signOut()}
                    className={
                        "py-3 px-6 rounded-3xl  border-2 bg-heliotrope border-heliotrope flex justify-between items-center"
                    }
                >
                    Sign Out
                </Link>
            </div>
        );

    return (
        <Link
            href={"/login"}
            className={
                "py-4 px-7 rounded-3xl  border-2 bg-heliotrope border-heliotrope flex justify-between items-center"
            }
        >
            <Image
                src="/images/icons/user.svg"
                alt="/images/icons/user.svg"
                width={20}
                height={20}
                priority
            />

            <span className="ml-3 ">Sign in</span>
        </Link>
    );
};
