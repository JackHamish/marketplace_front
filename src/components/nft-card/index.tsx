import Image from "next/image";

type Props = {
  title: string;
  image: string;
  authorName: string;
  authorImage: string;
};

const NftCard = ({ title, image, authorName, authorImage }: Props) => {
  return (
    <div className="max-w-fit rounded-2xl bg-mine-shaft-darken">
      <Image src={image} alt={image} width={330} height={295} />
      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-sans text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-3">
          <Image src={authorImage} alt="avatar" width={24} height={24} />
          <span className="font-sans">{authorName}</span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
