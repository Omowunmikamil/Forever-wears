import { useContext } from "react";
import { ShopContext } from "../context/ShopContext"; // Importing context to get the currency
import { Link } from "react-router-dom"; // Importing Link to navigate to the product page

function ProductItem({ id, name, image, price }) {
  // Getting the currency value from context
  const { currency } = useContext(ShopContext);

  return (
    // Link to the product page using the product id
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        {/* Product image with a hover effect */}
        <img
          src={image[0]} // Displaying the first image in the image array
          className="hover:scale-110 transition ease-in-out" // Hover effect for scaling
          alt={name} // Using the product name as the alt text
        />
      </div>

      {/* Product name */}
      <p className="pt-3 pb-1 text-sm">{name}</p>

      {/* Product price with currency */}
      <p className="font-medium text-sm">
        {currency} {price} {/* Displaying currency and price */}
      </p>
    </Link>
  );
}

export default ProductItem;
