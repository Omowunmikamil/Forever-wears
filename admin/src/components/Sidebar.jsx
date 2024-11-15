import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col pt-6 pl-[20%] text-[15px] gap-4">
        <NavLink
          to={"/add"}
          className="flex items-center border border-gray-300 border-r-0 py-2 px-2.5 sm:px-3 rounded-l shadow-sm gap-3 hover:bg-hoverbg"
        >
          <img src={assets.add_icon} alt="add icon" className="size-5 mr-4" />
          <p className="hidden md:block">Add Item</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className="flex items-center border border-gray-300 border-r-0 py-2 px-2.5 sm:px-3 rounded-l shadow-sm gap-3 hover:bg-hoverbg"
        >
          <img src={assets.order_icon} alt="add icon" className="size-5 mr-4" />
          <p className="hidden md:block">List Item</p>
        </NavLink>
        <NavLink
          to={"/order"}
          className="flex items-center border border-gray-300 border-r-0 py-2 px-2.5 sm:px-3 rounded-l shadow-sm gap-3 hover:bg-hoverbg"
        >
          <img src={assets.order_icon} alt="add icon" className="size-5 mr-4" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
