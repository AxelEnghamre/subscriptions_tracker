import Image from "next/image";

const CategoryButton = ({
  className,
  name,
  source,
  onClick,
  id,
}: {
  className?: string;
  name: string;
  source: string;
  onClick: Function;
  id: string;
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <li className={`${className} inline-block`} key={id} onClick={handleClick}>
      <div className="flex flex-row px-4 py-2 gap-2">
        <Image src={source} alt="icon" width={25} height={25} />
        <p>{name}</p>
      </div>
    </li>
  );
};

export default CategoryButton;
