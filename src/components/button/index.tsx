"use client";
import clsx from "clsx";
import Image from "next/image";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: string;
    fill: boolean;
    onClick?: () => void;
};

export const Button = ({
    type = "button",
    icon,
    className,
    children,
    fill,
    ...restProps
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={clsx(
                "py-4 px-7 rounded-3xl  border-2 border-heliotrope justify-center  flex items-center max-w-xs",
                {
                    "bg-heliotrope": fill,
                },
                className,
            )}
            {...restProps}
        >
            {icon && (
                <Image src={icon} alt={icon} width={20} height={20} priority />
            )}

            {children}
        </button>
    );
};
