const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  id,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id: string;
}) => {
  return (
    <input
      className="bg-off-white text-midnight rounded-3xl h-12 w-full pl-4 pr-4"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      id={id}
    />
  );
};

export default Input;
