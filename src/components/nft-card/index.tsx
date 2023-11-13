import { NftData } from "@/domains/nft";
import Image from "next/image";

type Props = NftData & { authorImage: string };

const NftCard = ({ title, url, user, authorImage }: Props) => {
  return (
    <div className="max-w-fit rounded-2xl bg-mine-shaft-darken">
      <Image
        className="rounded-t-2xl"
        src={url}
        alt={title + " image"}
        width={330}
        height={295}
      />
      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-sans text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-3">
          <Image src={authorImage} alt="avatar" width={24} height={24} />
          <span className="font-sans">{user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
