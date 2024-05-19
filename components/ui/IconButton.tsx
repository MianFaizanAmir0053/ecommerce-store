import { cn } from "@/app/lib/utils";
import { FC, MouseEventHandler, ReactElement } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  Icon: ReactElement;
}

const IconButton: FC<IconButtonProps> = ({ className, Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}>
      {Icon}
    </button>
  );
};

export default IconButton;
