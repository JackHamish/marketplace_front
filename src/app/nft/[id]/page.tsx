"use client";
import { Button } from "@/components/button";
import { useCurrentNft } from "@/domains/nft/hooks";
import Image from "next/image";
import UserBgImg from "public/images/user_bg.png";

type Props = {
  params: { id: string };
};

export default function NftPage({ params: { id } }: Props) {
  const { data: nft } = useCurrentNft(id);

  return (
    nft && (
      <>
        <Image
          src={nft.url}
          alt="NFT Full Image"
          width={1280}
          height={320}
          className="max-h-80 max-w-7xl object-contain"
        />
        <div className="container relative max-w-6xl ">
          <div className="flex w-full   justify-between">
            <div className="mt-14 flex flex-col gap-7">
              <h3 className="font-sans text-5xl font-semibold">{nft.title}</h3>

              <span className="mt-3 font-sans text-xl text-friar-gray">
                Created On: {new Date(nft.createdAt).toDateString()}
              </span>

              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold text-friar-gray">
                  Created By
                </h4>
                <div className="flex gap-3">
                  <Image
                    src="/images/avatar.png"
                    alt="User Avatar"
                    className="object-contain"
                    width={24}
                    height={24}
                  />
                  <span className="font-sans text-xl font-normal">
                    {nft?.user.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold text-friar-gray">
                  Description
                </h4>

                <p className="font-sans text-xl font-normal">
                  {nft?.description}
                </p>
              </div>
            </div>

            <Button className="mt-14 h-fit border-0 bg-red-600" fill={false}>
              Delete
            </Button>
          </div>
        </div>
      </>
    )
  );
}
