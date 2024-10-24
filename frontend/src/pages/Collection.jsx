import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  // Displaying all products in the collection
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortCategory, setSortCategory] = useState([]);
  const [sortSubCategory, setSortSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (event) => {
    if (sortCategory.includes(event.target.value)) {
      setSortCategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSortCategory((prev) => [...prev, event.target.value]);
    }
  };

  const toggleSubCategory = (event) => {
    if (sortSubCategory.includes(event.target.value)) {
      setSortSubCategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSortSubCategory((prev) => [...prev, event.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortCategory.includes(item.category)
      );
    }

    if (sortSubCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        sortSubCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilters();
        break;
    }
  };

  //useEffect(() => {
  //  setFilterProducts(products);
  //}, []);

  useEffect(() => {
    applyFilters();
  }, [sortCategory, sortSubCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col lg:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Side (Filter Options) */}
      <div className="min-w-60 md:min-w-52">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center text-xl my-2 gap-2 cursor-pointer"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`lg:hidden h-3 ${showFilter ? "rotate-90" : " "}`}
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
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Men"}
                className="w-3"
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Women"}
                className="w-3"
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Kids"}
                className="w-3"
                onChange={toggleCategory}
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
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Topwear"}
                className="w-3"
                onChange={toggleSubCategory}
              />{" "}
              Top Wear
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                className="w-3"
                onChange={toggleSubCategory}
              />{" "}
              Bottom Wear
            </p>
            <p className=" flex gap-2">
              <input
                type="checkbox"
                value={"Winterwear"}
                className="w-3"
                onChange={toggleSubCategory}
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
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 px-2 text-sm outline-none"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Displaying all products (By Mapping through the Products) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((items, index) => (
            <ProductItem
              key={index}
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
