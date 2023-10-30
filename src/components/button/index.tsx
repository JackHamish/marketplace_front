"use client";
import { cn } from "@/utils/cn";
import Icon from "../icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  fill: boolean;
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
      className={cn(
        "border-2border-heliotrope flex max-w-xs items-center justify-center rounded-3xl px-7 py-4",
        {
          "bg-heliotrope": fill,
        },
        className,
      )}
      {...restProps}
    >
      {icon && <Icon icon={`${icon}`} />}

      {children}
    </button>
  );
};
