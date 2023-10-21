import { CategoriesCard } from "@/components/categories/categories-card";
import { CollectionCard } from "@/components/collections/collections-card";
import CreatorCard from "@/components/creators/creator-card";
import Image from "next/image";

const About = () => {
    return (
        <main className="flex  flex-col items-center justify-between p-24 grow">
            <div className="max-w-6xl">
                <div className="flex items-center justify-between gap-10 w-full">
                    <div className=" flex items-center flex-col max-w-lg gap-5">
                        <h2 className="font-sans text-6xl font-semibold ">
                            Discover <br /> digital Art & Collect NFTs
                        </h2>
                        <p className="font-sans text-xl font-normal">
                            NFT marketplace. Collect, buy and sell art from more
                            than 20k NFT artists.
                        </p>
                    </div>
                    <div className="max-w-lg bg-mine-shaft-darken rounded-3xl">
                        <Image
                            src="/images/image_placeholder.png"
                            alt="image_placeholder"
                            width={510}
                            height={401}
                        />
                        <div className=" p-5 flex flex-col gap-3">
                            <h3 className="font-sans text-xl font-semibold">
                                Space Walking
                            </h3>
                            <div className="flex  gap-3 items-center">
                                <Image
                                    src="/images/avatar.png"
                                    alt="avatar"
                                    width={24}
                                    height={24}
                                />
                                <span className="font-sans text-base font-normal">
                                    Animakid
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-start flex-col  gap-10 mt-40 w-full">
                    <div className="flex flex-col  max-w-lg gap-5">
                        <h2 className="font-sans text-4xl font-semibold">
                            Trending Collection
                        </h2>
                        <p className="font-sans text-xl font-normal">
                            Checkout our weekly updated trending collection.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between w-full  ">
                        <CollectionCard
                            images={[
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                            ]}
                            title="DSGN Animals"
                            author={{
                                avatar: "/images/avatar.png",
                                name: "MrFox",
                            }}
                        />
                        <CollectionCard
                            images={[
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                            ]}
                            title="DSGN Animals"
                            author={{
                                avatar: "/images/avatar.png",
                                name: "MrFox",
                            }}
                        />

                        <CollectionCard
                            images={[
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                                "/images/image_placeholder.png",
                            ]}
                            title="DSGN Animals"
                            author={{
                                avatar: "/images/avatar.png",
                                name: "MrFox",
                            }}
                        />
                    </div>
                </div>

                <div className="flex items-start flex-col   mt-40 w-full">
                    <div className="flex flex-col  max-w-full gap-5 mt-10">
                        <h2 className="font-sans text-4xl font-semibold">
                            Top Creators
                        </h2>
                        <p className="font-sans text-xl font-normal">
                            Checkout Top Rated Creators on the NFT Marketplace
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 w-full  ">
                        {Array(12)
                            .fill("1")
                            .map((_, i) => (
                                <CreatorCard
                                    key={i}
                                    avatar="/images/creator.png"
                                    rank={1}
                                    name="Keepitreal"
                                    totalSales={34.53}
                                />
                            ))}
                    </div>
                </div>

                <div className="flex items-start flex-col   mt-40 w-full">
                    <div className="flex flex-col  max-w-full gap-5 mt-10">
                        <h2 className="font-sans text-4xl font-semibold">
                            Browse Categories
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5 w-full  ">
                        {Array(8)
                            .fill("1")
                            .map((_, i) => (
                                <CategoriesCard
                                    key={i}
                                    image="/images/category_placeholder.png"
                                    icon="/images/icons/art_icon.svg"
                                    title="Art"
                                />
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
