"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export const SteamLogInButton = () => {
  return (
    <div className="flex max-w-xs items-center  justify-center ">
      <button
        type="button"
        className=" mt-8 flex items-center  justify-center  rounded-3xl "
        onClick={() => signIn("steam")}
      >
        <Image
          src="https://community.cloudflare.steamstatic.com/public/images/signinthroughsteam/sits_01.png"
          alt="steam logIn"
          width={180}
          height={35}
        />
      </button>
    </div>
  );
};
