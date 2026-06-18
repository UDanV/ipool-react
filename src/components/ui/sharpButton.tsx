import { ArrowUpRightIcon } from "lucide-react";
import React from "react";

interface SharpButtonProps {
  title: string;
  className?: string;
  href?: string;
  onPress?: () => void;
}

const SharpButton: React.FC<SharpButtonProps> = ({
  title,
  className = "",
  href,
  onPress,
}) => {
  const content = (
    <>
      {title}
      <ArrowUpRightIcon className="h-4 w-4" />
    </>
  );

  const baseClasses = `bg-black text-base sm:text-2xl text-white font-bold flex items-center justify-center gap-2 py-6 sm:py-10 sm:m-0 2xl:w-full cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onPress}>
      {content}
    </button>
  );
};

export default SharpButton;
