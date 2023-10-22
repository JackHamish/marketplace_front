import Image from "next/image";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: any;
};

export const Input = ({ icon, ...rest }: InputProps) => {
    return (
        <div className="py-3 px-5 w-80 flex items-center bg-white rounded-3xl border-2 border-friar-gray ">
            {icon && <Image src={icon} alt={icon} width={20} height={20} />}
            <input
                className="ml-3 flex items-center w-full outline-none text-black caret-black  placeholder:text-friar-gray text-base font-sans"
                {...rest}
            />
        </div>
    );
};
