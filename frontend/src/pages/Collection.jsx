import { useContext, useEffect, useState } from "react"; // Importing React hooks
import { ShopContext } from "../context/ShopContext"; // Importing context to access global state
import { assets } from "../assets/assets"; // Importing assets like icons
import Title from "../components/Title"; // Importing the Title component
import ProductItem from "../components/ProductItem"; // Importing the ProductItem component to display individual products

const Collection = () => {
  // Using the ShopContext to access global state (products, search, etc.)
  const { products, search, showSearch } = useContext(ShopContext);

  // States to manage filter visibility, filtered products, categories, and sorting
  const [showFilter, setShowFilter] = useState(false); // For toggling the visibility of filter options
  const [filterProducts, setFilterProducts] = useState([]); // For storing filtered products
  const [sortCategory, setSortCategory] = useState([]); // For storing selected categories
  const [sortSubCategory, setSortSubCategory] = useState([]); // For storing selected subcategories
  const [sortType, setSortType] = useState("relevant"); // Default sorting type ("relevant")

  // Handle toggling of categories in the filter
  const toggleCategory = (event) => {
    if (sortCategory.includes(event.target.value)) {
      setSortCategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSortCategory((prev) => [...prev, event.target.value]);
    }
  };

  // Handle toggling of subcategories in the filter
  const toggleSubCategory = (event) => {
    if (sortSubCategory.includes(event.target.value)) {
      setSortSubCategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSortSubCategory((prev) => [...prev, event.target.value]);
    }
  };

  // Apply the filters based on selected categories, subcategories, and search query
  const applyFilters = () => {
    let productsCopy = products.slice(); // Create a copy of the products array to apply filters on

    // Filter by search query if present
    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category if selected
    if (sortCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortCategory.includes(item.category)
      );
    }

    // Filter by subcategory if selected
    if (sortSubCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortSubCategory.includes(item.subCategory)
      );
    }

    // Update the filtered products state
    setFilterProducts(productsCopy);
  };

  // Sort the filtered products based on the selected sort type (Low-High, High-Low, or Relevant)
  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice(); // Copy the filtered products array

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price)); // Sort by price low to high
        break;

      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price)); // Sort by price high to low
        break;

      default:
        applyFilters(); // Default sort by "relevant" (without changing the order)
        break;
    }
  };

  // useEffect hook to apply filters whenever categories, subcategories, or search query changes
  useEffect(() => {
    applyFilters();
  }, [sortCategory, sortSubCategory, search, showSearch, products]);

  // useEffect hook to sort the products whenever the sort type changes
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col lg:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Side (Filter Options) */}
      <div className="min-w-60 md:min-w-52">
        <p
          onClick={() => setShowFilter(!showFilter)} // Toggle the filter visibility
          className="flex items-center text-xl my-2 gap-2 cursor-pointer"
        >
          FILTERS
          <img
            src={assets.dropdown_icon} // Dropdown icon to show/hide filters
            className={`lg:hidden h-3 ${showFilter ? "rotate-90" : " "}`} // Rotate the icon when filters are visible
            alt="dropdown"
          />
        </p>
        {/* Filter by Category */}
        <div
          className={`border pl-5 py-3 mt-6 border-gray-300 ${
            showFilter ? " " : "hidden"
          }  lg:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* Category checkboxes */}
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Men"}
                className="w-3"
                onChange={toggleCategory} // Toggle category selection
              />{" "}
              Men
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Women"}
                className="w-3"
                onChange={toggleCategory} // Toggle category selection
              />{" "}
              Women
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Kids"}
                className="w-3"
                onChange={toggleCategory} // Toggle category selection
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* Filter by Sub Category */}
        <div
          className={`border pl-5 py-3 my-5 border-gray-300 ${
            showFilter ? " " : "hidden"
          }  lg:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* Subcategory checkboxes */}
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Topwear"}
                className="w-3"
                onChange={toggleSubCategory} // Toggle subcategory selection
              />{" "}
              Top Wear
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                className="w-3"
                onChange={toggleSubCategory} // Toggle subcategory selection
              />{" "}
              Bottom Wear
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Winterwear"}
                className="w-3"
                onChange={toggleSubCategory} // Toggle subcategory selection
              />{" "}
              Winter Wear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between text-xl sm:text-3xl md:text-xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Sort Product By */}
          <select
            onChange={(e) => setSortType(e.target.value)} // Change the sort type
            className="border-2 border-gray-300 px-2 text-sm outline-none"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Displaying filtered and sorted products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((items, index) => (
            <ProductItem
              key={index} // Passing individual product data to ProductItem component
              id={items._id}
              image={items.image}
              name={items.name}
              price={items.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
