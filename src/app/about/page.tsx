import { CategoriesCard } from "@/components/categories/categories-card";
import { CollectionCard } from "@/components/collections/collections-card";
import CreatorCard from "@/components/creators/creator-card";
import Image from "next/image";
import ImagePlaceholderImg from "public/images/image_placeholder.png";
import AvatarImg from "public/images/avatar.png";

const About = () => {
  return (
    <main className="flex grow flex-col items-center justify-between p-24">
      <div className="max-w-6xl">
        <div className="flex w-full items-center justify-between gap-10">
          <div className="flex max-w-lg flex-col items-center gap-5">
            <h2 className="font-sans text-6xl font-semibold ">
              Discover <br /> digital Art & Collect NFTs
            </h2>
            <p className="font-sans text-xl font-normal">
              NFT marketplace. Collect, buy and sell art from more than 20k NFT
              artists.
            </p>
          </div>
          <div className="max-w-lg rounded-3xl bg-mine-shaft-darken">
            <Image
              src={ImagePlaceholderImg}
              alt="image_placeholder"
              width={510}
              height={401}
            />
            <div className="flex flex-col gap-3 p-5">
              <h3 className="font-sans text-xl font-semibold">Space Walking</h3>
              <div className="flex items-center gap-3">
                <Image src={AvatarImg} alt="avatar" width={24} height={24} />
                <span className="font-sans text-base font-normal">
                  Animakid
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 flex w-full flex-col items-start gap-10">
          <div className="flex max-w-lg flex-col gap-5">
            <h2 className="font-sans text-4xl font-semibold">
              Trending Collection
            </h2>
            <p className="font-sans text-xl font-normal">
              Checkout our weekly updated trending collection.
            </p>
          </div>
          <div className="flex w-full flex-wrap justify-between">
            <CollectionCard
              images={[
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
              ]}
              title="DSGN Animals"
              author={{
                avatar: AvatarImg,
                name: "MrFox",
              }}
            />
            <CollectionCard
              images={[
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
              ]}
              title="DSGN Animals"
              author={{
                avatar: AvatarImg,
                name: "MrFox",
              }}
            />

            <CollectionCard
              images={[
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
                ImagePlaceholderImg,
              ]}
              title="DSGN Animals"
              author={{
                avatar: AvatarImg,
                name: "MrFox",
              }}
            />
          </div>
        </div>

        <div className="mt-40 flex w-full flex-col items-start">
          <div className="mt-10 flex  max-w-full flex-col gap-5">
            <h2 className="font-sans text-4xl font-semibold">Top Creators</h2>
            <p className="font-sans text-xl font-normal">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-5">
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

        <div className="mt-40 flex w-full flex-col items-start">
          <div className="mt-10 flex max-w-full flex-col gap-5">
            <h2 className="font-sans text-4xl font-semibold">
              Browse Categories
            </h2>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-5">
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
