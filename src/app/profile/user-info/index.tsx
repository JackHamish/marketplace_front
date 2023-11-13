import { useCurrentUser } from "@/domains/user/hooks";
import Image from "next/image";
import UserBgImg from "public/images/user_bg.png";
import UserFullImg from "public/images/user_full.png";
import Loading from "./loading";
import Link from "next/link";
import { Button } from "@/components/button";
import { User } from "@/types/user";
import NftCard from "@/components/nft-card";
import Icon from "@/components/icon";

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  return (
    <>
      <Image src={UserBgImg} alt="user bg" width={1280} height={320} />
      <div className="container relative max-w-6xl ">
        <div className="flex w-full   justify-between">
          <div>
            <Image
              src={UserFullImg}
              alt="user img"
              width={120}
              height={120}
              className="absolute -top-16 rounded-3xl"
            />

            <div className="mt-20 flex flex-col gap-7">
              <h3 className="font-sans text-5xl font-semibold">{user.name}</h3>
              <div className="flex gap-12 ">
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-bold">250k+</h4>
                  <span className="font-sans text-xl font-normal">Volume</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-bold">50+</h4>
                  <span className="font-sans text-xl font-normal">
                    NFTs Sold
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-bold">3000+</h4>
                  <span className="font-sans text-xl font-normal">
                    Followers
                  </span>
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <h4 className="text-2xl font-bold text-friar-gray">Bio</h4>
                <span className="font-sans text-xl font-normal">
                  THe internets's Friendliest Designer Kid.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-20 flex h-fit gap-20">
            <Button fill={false}>Add Steam Account</Button>

            <Link
              className="flex  items-center justify-between rounded-3xl border-2 border-heliotrope bg-heliotrope px-6 py-3"
              href={"profile/edit"}
            >
              Edit
            </Link>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center border-t-2 border-mine-shaft-darken">
          <div className="flex items-center justify-center gap-4 border-b-2 border-friar-gray px-24 py-4">
            <h3 className="font-sans text-2xl font-semibold  ">Created</h3>
            <span className="flex items-center rounded-3xl bg-friar-gray px-2 py-1">
              3
            </span>
          </div>

          <div className="mt-20 flex max-w-[1050px] flex-wrap  items-center gap-7">
            {[
              {
                title: "Distant Galaxy",
                image: "/images/category_placeholder.png",
                authorName: "Animakid",
                authorImage: "/images/avatar.png",
              },
              {
                title: "Distant Galaxy",
                image: "/images/category_placeholder.png",
                authorName: "Animakid",
                authorImage: "/images/avatar.png",
              },
              {
                title: "Distant Galaxy",
                image: "/images/category_placeholder.png",
                authorName: "Animakid",
                authorImage: "/images/avatar.png",
              },
              {
                title: "Distant Galaxy",
                image: "/images/category_placeholder.png",
                authorName: "Animakid",
                authorImage: "/images/avatar.png",
              },
              {
                title: "Distant Galaxy",
                image: "/images/category_placeholder.png",
                authorName: "Animakid",
                authorImage: "/images/avatar.png",
              },
            ].map((nft) => (
              <NftCard {...nft} />
            ))}

            <Button
              className=" h-[434px] w-[330px]  rounded-2xl bg-mine-shaft-darken"
              fill={false}
            >
              <Icon icon="icon-plus" className="text-9xl" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
