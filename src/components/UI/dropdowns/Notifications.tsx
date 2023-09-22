const Notifications = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <ul className="h-full text-logo flex flex-col gap-5">
        <li className="h-10 border-b-2 border-logo">Netflix</li>
        <li className="h-10 border-b-2 border-logo">Amazon Prime</li>
      </ul>

      <div className="flex justify-center items-center pb-5 pt-5">
        <div className="bg-logo w-[43px] h-[4px] rounded"></div>
      </div>
    </div>
  );
};

export default Notifications;
