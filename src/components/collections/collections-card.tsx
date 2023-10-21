import Image from "next/image";

type CollectionCardProps = {
    images: string[];
    title: string;
    author: { avatar: string; name: string };
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
                alt={images[0]}
                width={330}
                height={330}
            />
            <div className="flex justify-between mt-4">
                <Image
                    className="rounded-2xl"
                    src={images[1]}
                    alt={images[1]}
                    width={100}
                    height={100}
                />

                <Image
                    className="rounded-2xl"
                    src={images[2]}
                    alt={images[2]}
                    width={100}
                    height={100}
                />

                <div className="w-[100px] h-[100px] rounded-2xl bg-heliotrope flex items-center justify-center">
                    <span className="text-xl font-bold">
                        +{images.length - 3}
                    </span>
                </div>
            </div>
            <div className=" my-5 flex flex-col gap-3">
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
    );
};
