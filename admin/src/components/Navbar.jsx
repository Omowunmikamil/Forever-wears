import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img src={assets.logo} alt="logo" className="w-[max(10%,80px)]" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-700 text-white rounded-full py-2 px-5 sm:px-7 text-xs sm:text-sm hover:bg-gray-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
