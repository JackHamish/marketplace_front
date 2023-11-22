"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../button";
import { cn } from "@/utils/cn";
import { useDeleteNft } from "@/domains/nft/hooks";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { NftSmallData } from "@/domains/nft";

type Props = NftSmallData & { authorImage: string };

const NftCard = ({ title, url, id, user, authorImage }: Props) => {
  return (
    <div className="max-w-fit rounded-2xl bg-mine-shaft-darken transition duration-500 hover:scale-95">
      <Image
        className="h-[295px] w-[330px] rounded-t-2xl object-cover"
        src={url}
        alt={title + " image"}
        width={330}
        height={295}
      />
      <div className="flex justify-between p-5">
        <div className="flex flex-col gap-3">
          <h3 className="font-sans text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-3">
            <Image src={authorImage} alt="avatar" width={24} height={24} />
            <span className="font-sans">{user.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
