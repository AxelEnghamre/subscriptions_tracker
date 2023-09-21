const Notifications = ({
  className,
  id,
}: {
  className?: string;
  id: string;
}) => {
  return (
    <div className={className} id={id}>
      <div className="flex justify-center items-center pb-5">
        <div className="bg-logo w-[43px] h-[4px] rounded"></div>
      </div>
    </div>
  );
};

export default Notifications;
