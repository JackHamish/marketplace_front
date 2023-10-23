import Image from "next/image";
import React, { useId } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: any;
    error?: any;
};

const _Input = (
    { icon, error, ...rest }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    const id = useId();
    return (
        <div>
            <div className="py-3 px-5 w-80 flex items-center bg-white rounded-3xl border-2 border-friar-gray ">
                {icon && <Image src={icon} alt={icon} width={20} height={20} />}
                <input
                    ref={ref}
                    id={id}
                    className="ml-3 flex items-center w-full outline-none text-black caret-black  placeholder:text-friar-gray text-base font-sans"
                    {...rest}
                />
            </div>
            {error && <span className={"text-red-400 text-sm "}>{error}</span>}
        </div>
    );
};

export const Input = React.forwardRef(_Input);
