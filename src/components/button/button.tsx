import cn from "classnames";
import Image from "next/image";

interface ButtonProps {
    label: string;
    icon?: string;
    fill: boolean;
    onClick?: () => void;
    type?: "submit";
}

const Button = ({ label, onClick, type, fill, icon }: ButtonProps) => {
    return (
        <button
            type={type}
            className={cn({
                "py-4 px-7 rounded-3xl  border-2 border-[#A259FF] flex justify-between items-center":
                    true,
                "bg-[#A259FF]": fill,
            })}
            onClick={onClick}
        >
            {icon && <Image src={icon} alt={label} width={20} height={20} priority />}

            <span className="ml-3 ">{label}</span>
        </button>
    );
};

export default Button;
