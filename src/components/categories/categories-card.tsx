import Image from "next/image";

export interface CategoriesCardProps {
    image: string;
    icon: string;
    title: string;
}

const CategoriesCard = ({ image, icon, title }: CategoriesCardProps) => {
    return (
        <div className="w-60 bg-[#3B3B3B] rounded-3xl mt-10">
            <div className="relative ">
                <Image src={image} alt="image_placeholder" width={240} height={240} />
                <div className="backdrop-blur-md w-full h-full absolute flex justify-center items-center top-0 left-0 rounded-t-3xl">
                    <Image
                        className="rounded-2xl"
                        src={icon}
                        alt="image_placeholder"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <h3 className="py-5 px-7 font-sans text-xl font-semibold">{title}</h3>
        </div>
    );
};

export default CategoriesCard;
