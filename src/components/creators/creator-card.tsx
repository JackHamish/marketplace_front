import Image from "next/image";

type CreatorCardProps = {
  rank: number;
  avatar: string;
  name: string;
  totalSales: number;
};

const CreatorCard = ({ rank, avatar, name, totalSales }: CreatorCardProps) => {
  return (
    <div className="relative mt-10 flex w-60 flex-col items-center justify-center rounded-3xl bg-mine-shaft-darken p-5">
      <span className="absolute left-5 top-5 flex items-center justify-center rounded-full bg-mine-shaft-lighten px-[10px] py-1 text-friar-gray">
        {rank}
      </span>
      <Image
        className="rounded-full"
        src={avatar}
        alt={avatar}
        width={120}
        height={120}
      />
      <div className="mt-5">
        <h3 className="text-center font-sans text-xl font-semibold">{name}</h3>
        <div className="mt-2 flex w-full text-center">
          <h4 className="font-sans text-base text-friar-gray">Total Sales:</h4>
          <span className="ml-3 text-base">{totalSales} ETH</span>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
