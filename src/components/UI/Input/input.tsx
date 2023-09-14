const Input = ({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  id,
}: {
  className?: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id: string;
}) => {
  return (
    <input
      className={` bg-off-white text-midnight rounded-3xl h-12 w-full pl-4 pr-4 ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
};

export default Input;
