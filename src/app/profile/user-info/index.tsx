import { useCurrentUser } from "@/domains/user/hooks";
import Image from "next/image";
import UserBgImg from "public/images/user_bg.png";
import UserFullImg from "public/images/user_full.png";
import Loading from "./loading";
import Link from "next/link";
import { User } from "@/types/user";

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  return (
    <>
      <Image src={UserBgImg} alt="user bg" width={1280} height={320} />
      <div className="container relative flex max-w-5xl justify-between">
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
                <span className="font-sans text-xl font-normal">NFTs Sold</span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-bold">3000+</h4>
                <span className="font-sans text-xl font-normal">Followers</span>
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
        <div className="mt-20">
         
          <Link
            className="flex  items-center justify-between rounded-3xl border-2 border-heliotrope bg-heliotrope px-6 py-3 transition duration-500 
                hover:scale-95"
            href={"profile/edit"}
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserInfo;