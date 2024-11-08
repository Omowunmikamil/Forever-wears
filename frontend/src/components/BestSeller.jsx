import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestSeller() {
  // Accessing the product data from ShopContext
  const { products } = useContext(ShopContext);

  // State to store the filtered best-selling products
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Filtering products marked as bestsellers
    const bestProducts = products.filter((item) => item.bestseller === true);

    // Setting only the top 5 best-selling products in state
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]); // Adding `products` as a dependency to run this effect when `products` changes

  return (
    <div className="my-10">
      {/* Title section for Best Seller */}
      <div className="text-center py-8 text-xl sm:text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />

        {/* Brief description under the title */}
        <p className="m-auto w-3/4 text-sm sm:text-sm md:text-base text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Displaying Best Selling Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index} // Unique key for each product
            id={item._id} // Product ID, passed as a prop to ProductItem
            image={item.image} // Product image
            name={item.name} // Product name
            price={item.price} // Product price
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
