import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  // Getting products from the ShopContext
  const { products } = useContext(ShopContext);

  // State to store the filtered related products
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Combining both category and subcategory conditions in a single filter for better performance
      const productsCopy = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

      // Updating the state with the first 5 related products
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]); // Effect runs when products, category, or subCategory change

  return (
    <div className="my-20">
      <div className="text-3xl text-center py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      {/* Rendering Related Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          // Map through related products and render each one
          related.map((item) => (
            <ProductItem
              key={item._id} // Using unique product id for the key
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          // Display a message if no related products are found
          <p className="text-center col-span-full">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
