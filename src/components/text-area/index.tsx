import React from "react";
import Icon from "../icon";
import { Error } from "./error";
import { cn } from "@/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  icon?: string;
  error?: string;
};

const _TextArea = (
  { icon, error, className, ...rest }: InputProps,

  ref: React.ForwardedRef<HTMLTextAreaElement>,
) => {
  return (
    <div
      className={cn(
        "flex w-80 flex-col items-center justify-center",
        className,
      )}
    >
      <div className="flex w-80 items-center rounded-3xl border-2 border-friar-gray bg-white px-5 py-3">
        {icon && <Icon icon={`${icon}`} />}
        <textarea
          ref={ref}
          className="ml-3 flex max-h-48 w-full resize-y items-center font-sans text-base text-black caret-black outline-none placeholder:text-friar-gray"
          {...rest}
        />
      </div>
      {error && <Error>{error}</Error>}
    </div>
  );
};

export const TextArea = React.forwardRef(_TextArea);
