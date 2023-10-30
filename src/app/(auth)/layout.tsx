import Image from "next/image";
import SpaceLoginImg from "public/images/space_login.png";

type Props = React.PropsWithChildren;

export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex grow flex-col items-center ">
      <div className="flex gap-14">
        <Image src={SpaceLoginImg} alt="login.png" width={610} height={690} />

        <div className=" flex h-[690px] w-[610px] flex-col justify-center">
          {children}
        </div>
      </div>
    </main>
  );
}
