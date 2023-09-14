"use client";

const ConfirmButton = ({
  className,
  value,
  onClick,
}: {
  className?: string;
  value: string;
  onClick: Function;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className={className} onClick={handleClick}>
      {value}
    </button>
  );
};

export default ConfirmButton;
