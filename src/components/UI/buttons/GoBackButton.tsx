"use client";

import Image from "next/image";

const GoBackButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: Function;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className={`relative w-10 h-10 ` + className}>
      <Image src="/back.svg" alt="back ikon" fill />
    </button>
  );
};

export default GoBackButton;
