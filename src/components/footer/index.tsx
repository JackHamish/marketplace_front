import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-mine-shaft-darken max-h-[334px] flex self-end w-full items-center justify-center p-10 grow">
            <div className="max-w-6xl w-full">
                <div className="flex w-full   justify-between ">
                    <div className="max-w-xs">
                        <Image
                            src="/images/icons/logo.svg"
                            alt="Logo"
                            width={243}
                            height={32}
                            priority
                        />
                        <div className="mt-7 font-sans text-silver text-base ">
                            NFT marketplace UI created <br /> with Anima for
                            Figma.
                        </div>

                        <div className="mt-5 font-sans text-silver text-base ">
                            Join our community
                        </div>
                        <div className="flex gap-2 mt-5">
                            <Link href={"#"}>
                                <Image
                                    src="/images/icons/discord.svg"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    src="/images/icons/youtube.svg"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    src="/images/icons/twitter.svg"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    src="/images/icons/instagram.svg"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    priority
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-xs flex flex-col mt-1">
                        <h3 className="font-bold text-xl  ">Explore</h3>

                        <Link
                            className="mt-7 font-sans text-silver text-base "
                            href={"#"}
                        >
                            Marketplace
                        </Link>
                        <Link
                            className="mt-5 font-sans text-silver text-base "
                            href={"#"}
                        >
                            Rankings
                        </Link>
                        <Link
                            className="mt-5 font-sans text-silver text-base "
                            href={"#"}
                        >
                            Connect a wallet
                        </Link>
                    </div>
                    <div className="max-w-xs">
                        <h3 className="font-bold text-xl  ">
                            Join Our Weekly Digest
                        </h3>
                        <div className="mt-7 font-sans text-silver text-base ">
                            Get exclusive promotion & updates straight yo your
                            inbox.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
