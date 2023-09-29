import Link from "next/link";
import Image from "next/image";

const SubscriptionLink = ({
  name,
  iconUrl = "/billProfile.svg",
  pricePerMonth,
  id,
}: {
  name: string;
  iconUrl?: string;
  // pricePerMonth: number;
  pricePerMonth: string | null | undefined;
  id: string | number;
}) => {
  return (
    <Link
      href={`/subscription/${id}`}
      className="w-24 h-24 p-4 rounded-2xl bg-white text-xs shadow-lg flex flex-col items-center gap-1"
    >
      <div className="relative h-12 w-12">
        <Image fill src={iconUrl} alt={name} />
      </div>
      {/* <p className="text-center">{pricePerMonth} kr/mån</p> */}
      <p>{pricePerMonth}</p>
    </Link>
  );
};

export default SubscriptionLink;
