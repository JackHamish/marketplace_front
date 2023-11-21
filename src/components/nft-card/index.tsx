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
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const queryClient = useQueryClient();

  const { mutateAsync: deleteNftAction } = useDeleteNft();

  const handleMouseEnter = () => {
    setShowDeleteBtn(true);
  };

  const handleMouseLeave = () => {
    setShowDeleteBtn(false);
  };

  const handleClickDelete = async () => {
    await deleteNftAction(id, {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["nfts-user"] });
        toast.success(`Nft ${title} was deleted successful`);
      },
    });
  };

  return (
    <div
      className="max-w-fit rounded-2xl bg-mine-shaft-darken"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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

        {showDeleteBtn && (
          <button
            onClick={handleClickDelete}
            type="button"
            className={cn(
              "flex h-fit animate-fadeIn items-center justify-center self-end rounded-3xl  bg-red-600 px-2 py-1 text-xs transition-all duration-500 hover:scale-95",
            )}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default NftCard;
