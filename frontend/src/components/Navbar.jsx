import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  // State to control sidebar visibility on small screens
  const [visible, setVisible] = useState(false);

  // Context data for controlling search visibility and getting cart count
  const {
    setShowSearch,
    getCartCount,
    navigate,
    setToken,
    token,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex justify-between items-center py-4 font-medium">
      {/* Logo - links to the homepage */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28" />
      </Link>

      {/* Main navigation links, hidden on small screens */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <hr className="w-2/4 h-[2px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col gap-1 items-center">
          <p>COLLECTION</p>
          <hr className="w-2/4 h-[2px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className="w-2/4 h-[2px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 h-[2px] border-none bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons: search, profile, cart, and menu for small screens */}
      <div className="flex gap-3 md:gap-4 lg:gap-6 items-center">
        {/* Search icon triggers search modal */}
        <img
          className="w-4 lg:w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search"
        />

        {/* Profile icon with dropdown menu for profile options */}
        <div className="group relative">
          <Link to={"/login"}>
            <img
              src={assets.profile_icon}
              className="w-4 lg:w-5 cursor-pointer"
              alt="profile"
            />
          </Link>
          <div className="dropdown-menu group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* Cart icon with item count display */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-4 lg:w-5 cursor-pointer"
            alt="cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] leading-4 w-4 items-center bg-black text-white aspect-square text-[10px] text-center rounded-full">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger menu icon for small screens, toggles sidebar visibility */}
        <img
          onClick={() => setVisible(true)}
          className="w-4 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Sidebar menu for mobile view, displays when 'visible' is true */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Close button for sidebar */}
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          {/* Sidebar links to main sections, hides sidebar on click */}
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
