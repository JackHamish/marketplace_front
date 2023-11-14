import Image from "next/image";
import SpaceLoginImg from "public/images/space_login.png";

type Props = React.PropsWithChildren;

export default function UserLayout({ children }: Props) {
  return (
    <main className="flex grow flex-col items-center justify-between px-12 py-6 pb-20">
      {children}
    </main>
  );
}
