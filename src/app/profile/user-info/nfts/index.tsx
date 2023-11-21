"use client";
import { Button } from "@/components/button";
import Icon from "@/components/icon";
import NftCard from "@/components/nft-card";
import { useUserNfts } from "@/domains/nft/hooks";
import Link from "next/link";

import { useRouter } from "next/navigation";

const Nfts = () => {
  const { data: nft } = useUserNfts();

  const router = useRouter();

  const handleClickCreate = () => {
    router.push("/profile/create-nft", { scroll: false });
  };

  return (
    <div className="mt-10 flex w-full flex-col items-center border-t-2 border-mine-shaft-darken">
      <div className="flex items-center justify-center gap-4 border-b-2 border-friar-gray px-24 py-4">
        <h3 className="font-sans text-2xl font-semibold  ">Created</h3>
        <span className="flex items-center rounded-3xl bg-friar-gray px-2 py-1">
          {nft?.length ? nft.length : 0}
        </span>
      </div>

      <div className="mt-20 flex max-w-[1050px] flex-wrap  items-center gap-7">
        {nft &&
          nft.map((nft) => (
            <Link key={nft.id} href={`nft/${nft.id}`}>
              <NftCard {...nft} authorImage="/images/avatar.png" />
            </Link>
          ))}

        <Button
          className=" h-[399px] w-[330px]  rounded-2xl bg-mine-shaft-darken"
          fill={false}
          onClick={handleClickCreate}
        >
          <Icon icon="icon-plus" className="text-9xl" />
        </Button>
      </div>
    </div>
  );
};

export default Nfts;
