import Link from "next/link";
import Image from "next/image";

const AddSubscriptionButton = () => {
  return (
    <div className="w-24 h-24 p-4 rounded-2xl bg-white text-xs shadow-lg flex flex-col items-center gap-1">
      <div className="relative h-12 w-12 m-1">
        <Image src={"/add.svg"} alt="add subscription" fill={true} />
      </div>

      <Link href={"/"}>Lägg till</Link>
    </div>
  );
};

export default AddSubscriptionButton;
