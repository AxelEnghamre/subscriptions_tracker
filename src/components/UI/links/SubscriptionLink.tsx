import Link from "next/link";
import Image from "next/image";

const SubscriptionLink= ({name,iconUrl = "/eye.svg",pricePerMonth}:{name:string,iconUrl?:string,pricePerMonth:number}) => {
    return (
        <Link href={`/subscription/${name}`} className="w-24 h-24 p-4 rounded-2xl bg-white text-xs shadow-lg grid grid-rows-2 grid-cols-1">
            <div className="relative h-full w-fit bg-black">
                
            </div>
            <p className="w-full h-full ">{pricePerMonth} kr/mån</p>
        </Link>
    );
};

export default SubscriptionLink;