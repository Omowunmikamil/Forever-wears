import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  // Extract necessary context values
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  // Get the current location from the router
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // Hook to check if the current path is the "collection" page
  useEffect(() => {
    // Show the search bar only on the "collection" page
    setVisible(location.pathname.includes("/collection"));
  }, [location]); // Only rerun this effect when the location changes

  // If the search bar should not be visible, return null (don't render anything)
  if (!showSearch || !visible) {
    return null;
  }

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        {/* Search input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update the search query as the user types
          className="flex-1 text-sm bg-inherit outline-none"
          type="text"
          placeholder="Search products..."
        />
        {/* Search icon */}
        <img className="w-4" src={assets.search_icon} alt="search" />
      </div>
      {/* Close icon to hide the search bar */}
      <img
        className="w-4 inline cursor-pointer"
        src={assets.cross_icon}
        alt="close"
        onClick={() => setShowSearch(false)} // Close the search bar when clicked
      />
    </div>
  );
}

export default SearchBar;
