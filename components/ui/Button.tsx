import { cn } from "@/app/lib/utils";
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-5 py-3 text-white font-semibold hover:opacity-75 disabled:cursor-not-allowed transition`,
          className
        )}
        ref={ref}
        {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
