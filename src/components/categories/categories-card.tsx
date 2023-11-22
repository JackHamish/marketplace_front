import Image from "next/image";

type CategoriesCardProps = {
  image: string;
  icon: string;
  title: string;
};

export const CategoriesCard = ({ image, icon, title }: CategoriesCardProps) => {
  return (
    <div className="mt-10 w-60 rounded-3xl bg-mine-shaft-darken">
      <div className="relative ">
        <Image src={image} alt="image_placeholder" width={240} height={240} />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-t-3xl backdrop-blur-md">
          <Image
            className="rounded-2xl"
            src={icon}
            alt="image_placeholder"
            width={100}
            height={100}
          />
        </div>
      </div>
      <h3 className="px-7 py-5 font-sans text-xl font-semibold">{title}</h3>
    </div>
  );
};
