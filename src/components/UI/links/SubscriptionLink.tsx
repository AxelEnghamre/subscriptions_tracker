import Link from "next/link";
import Image from "next/image";

const SubscriptionLink = ({
  name,
  iconUrl = "/unknown.svg",
  pricePerMonth,
}: {
  name: string;
  iconUrl?: string;
  pricePerMonth: number;
}) => {
  return (
    <Link
      href={`/subscription/${name}`}
      className="w-24 h-24 p-4 rounded-2xl bg-white text-xs shadow-lg flex flex-col items-center gap-1"
    >
      <div className="relative h-12 w-12">
        <Image fill src={iconUrl} alt={name} />
      </div>
      <p className="text-center">{pricePerMonth} kr/mån</p>
    </Link>
  );
};

export default SubscriptionLink;
