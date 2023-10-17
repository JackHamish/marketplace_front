import Image from "next/image";

export interface CreatorCardProps {
    rank: number;
    avatar: string;
    name: string;
    totalSales: number;
}

const CreatorCard = ({ rank, avatar, name, totalSales }: CreatorCardProps) => {
    return (
        <div className="w-60 flex flex-col items-center justify-center relative bg-[#3B3B3B] rounded-3xl p-5 mt-10">
            <span className="flex items-center justify-center absolute left-5 top-5 bg-[#2B2B2B] text-[#858584] py-1 px-[10px] rounded-full">
                {rank}
            </span>
            <Image className="rounded-full" src={avatar} alt={avatar} width={120} height={120} />
            <div className="mt-5">
                <h3 className="text-center font-sans font-semibold text-xl ">{name}</h3>
                <div className="mt-2 text-center flex w-full">
                    <h4 className="text-base font-sans text-[#858584]">Total Sales:</h4>
                    <span className="ml-3 text-base">{totalSales} ETH</span>
                </div>
            </div>
        </div>
    );
};

export default CreatorCard;
