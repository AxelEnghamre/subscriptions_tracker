import SubscriptionLink from "@/components/UI/links/SubscriptionLink";

const Home = async () => {
  return (<div className="flex flex-col gap-5"><p>Home screen</p>
  
  <SubscriptionLink name={"netflix"} iconUrl="/lock.svg" pricePerMonth={300}/>
  </div>);
};

export default Home;
