import Image from "next/image";
import Link from "next/link";
import LogoSvg from "public/images/icons/logo.svg";
import DiscordSvg from "public/images/icons/discord.svg";
import YouTubeSvg from "public/images/icons/youtube.svg";
import TwitterSvg from "public/images/icons/twitter.svg";
import InstagramSvg from "public/images/icons/instagram.svg";
import Icon from "../icon";

const Footer = () => {
  return (
    <footer className="flex w-full grow items-center justify-center self-end bg-mine-shaft-darken p-10">
      <div className="w-full max-w-6xl">
        <div className="flex w-full justify-between ">
          <div className="max-w-xs">
            <Image src={LogoSvg} alt="Logo" width={243} height={32} priority />
            <div className="mt-7 font-sans text-base text-silver ">
              NFT marketplace UI created <br /> with Anima for Figma.
            </div>

            <div className="mt-5 font-sans text-base text-silver ">
              Join our community
            </div>
            <div className="mt-5 flex gap-2">
              <Link href={"#"}>
                <Image
                  src={DiscordSvg}
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={YouTubeSvg}
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={TwitterSvg}
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={InstagramSvg}
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="mt-1 flex max-w-xs flex-col">
            <h3 className="text-xl font-bold  ">Explore</h3>

            <Link className="mt-7 font-sans text-base text-silver " href={"#"}>
              Marketplace
            </Link>
            <Link className="mt-5 font-sans text-base text-silver " href={"#"}>
              Rankings
            </Link>
            <Link className="mt-5 font-sans text-base text-silver " href={"#"}>
              Connect a wallet
            </Link>
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-bold  ">Join Our Weekly Digest</h3>
            <div className="mt-7 font-sans text-base text-silver ">
              Get exclusive promotion & updates straight yo your inbox.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
