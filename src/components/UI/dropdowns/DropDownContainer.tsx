import Notifications from "./Notifications";
import Search from "./Serach";

const DropDownContainer = () => {
  return (
    <div>
      <Notifications className="z-30 " />
      <Search className="z-30 hidden" />
    </div>
  );
};

export default DropDownContainer;
