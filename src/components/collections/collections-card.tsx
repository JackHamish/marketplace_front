import Image, { StaticImageData } from "next/image";

type CollectionCardProps = {
  images: StaticImageData[];
  title: string;
  author: { avatar: StaticImageData; name: string };
};

export const CollectionCard = ({
  images,
  title,
  author,
}: CollectionCardProps) => {
  return (
    <div className="max-w-lg">
      <Image
        className="rounded-2xl"
        src={images[0]}
        alt={images[0].src}
        width={330}
        height={330}
      />
      <div className="mt-4 flex justify-between">
        <Image
          className="rounded-2xl"
          src={images[1]}
          alt={images[1].src}
          width={100}
          height={100}
        />

        <Image
          className="rounded-2xl"
          src={images[2]}
          alt={images[2].src}
          width={100}
          height={100}
        />

        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-2xl bg-heliotrope">
          <span className="text-xl font-bold">+{images.length - 3}</span>
        </div>
      </div>
      <div className="my-5 flex flex-col gap-3">
        <h3 className="font-sans text-xl font-semibold">Space Walking</h3>
        <div className="flex items-center gap-3">
          <Image src={author.avatar} alt="avatar" width={24} height={24} />
          <span className="font-sans text-base font-normal">{author.name}</span>
        </div>
      </div>
    </div>
  );
};
