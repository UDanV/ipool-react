import React from 'react';
import arrowUpRight from '@/assets/arrow-up-right.svg';

interface SharpButtonProps {
  title: string;
  className?: string;
  icon?: string;
}

const SharpButton: React.FC<SharpButtonProps> = ({
  title,
  className = '',
  icon = arrowUpRight,
}) => {
  return (
    <button
      className={`bg-black text-base sm:text-2xl text-white font-bold flex items-center justify-center gap-2 py-6 sm:py-10 m-3 sm:m-0 2xl:w-full cursor-pointer ${className}`}
    >
      {title}
      <img src={icon} alt="" />
    </button>
  );
};

export default SharpButton;