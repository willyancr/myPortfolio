import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utilis";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-md bg-green-400 p-4 shadow-button transition-all hover:brightness-75 md:my-6 md:w-[225px]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
