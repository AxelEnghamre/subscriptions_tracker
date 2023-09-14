"use client";

const ConfirmButton = ({
  className,
  value,
  onClick,
  disabled,
  type,
}: {
  className?: string;
  value: string;
  onClick: Function;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {value}
    </button>
  );
};

export default ConfirmButton;
