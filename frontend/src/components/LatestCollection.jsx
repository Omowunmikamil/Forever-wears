import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Accessing product data from the shop context
  const [latestProducts, setLatestProducts] = useState([]); // State to store the filtered latest products

  useEffect(() => {
    // Filter products to show only the latest ones based on a 'latestProducts' flag
    const latestProduct = products.filter(
      (item) => (item.latestProducts = true)
    );
    setLatestProducts(latestProduct.splice(0, 10)); // Select the first 10 items
  }, [products]); // Dependency array includes products to re-run when it changes

  return (
    <div className="my-10">
      {/* Header section with title and description */}
      <div className="text-center py-8 text-xl sm:text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="m-auto w-3/4 text-sm sm:text-sm md:text-base text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Rendering Latest Collection Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
