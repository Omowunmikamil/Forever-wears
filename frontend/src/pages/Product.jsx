import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import Button from "../components/Button";

const Product = () => {
  const { productId } = useParams(); // Get product ID from the URL params
  const { products, currency, addToCart } = useContext(ShopContext); // Get data from ShopContext
  const [productData, setProductData] = useState(false); // State to store the product data
  const [image, setImage] = useState(""); // State for the currently displayed image
  const [size, setSize] = useState(""); // State to store the selected size

  // Function to fetch the product data based on productId
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        // Check if product ID matches
        setProductData(item); // Set the product data
        setImage(item.image[0]); // Set the first image as the default
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData(); // Fetch product data on component mount or when products/productId change
  }, [products, productId]);

  return productData ? ( // Render the product data if it exists
    <div className="border-t-2 transition-opacity ease-in duration-500 opacity-100 pt-10">
      {/*----- Product Data -----*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*----- Product Images -----*/}
        <div className="flex-1 gap-3 flex flex-col-reverse sm:flex-row">
          {/* Thumbnail images for selecting the main image */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData.image.map(
              (
                item,
                index // Map through all product images
              ) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  onClick={() => setImage(item)} // Set the clicked image as the main image
                  className="w-[24%] sm:w-full flex-shrink-0 sm:mb-3 cursor-pointer"
                />
              )
            )}
          </div>
          <div className="w-full sm:w-[80%]">
            {/* Display the main image */}
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/*----- Product Information -----*/}
        <div className="flex-1">
          <h1 className="font-medium mt-2 text-2xl">{productData.name}</h1>
          {/* Product name */}
          {/* Rating section */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(124)</p>
          </div>
          {/* Product price */}
          <p className="text-3xl font-medium mt-4">
            {currency}
            {productData.price}
          </p>
          {/* Product description */}
          <p className="md:w-4/5 text-gray-500 text-sm mt-4">
            {productData.description}
          </p>
          {/* Size selection */}
          <div className="flex flex-col gap-4 my-5">
            <p className="">Select Sizes</p>
            <div className="flex gap-2">
              {productData.sizes.map(
                (
                  item,
                  index // Map through the available sizes
                ) => (
                  <button
                    onClick={() => setSize(item)} // Set the clicked size
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? "border-gray-500" : "" // Highlight the selected size
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
          {/* Add to Cart button */}
          <Button
            onClick={() => addToCart(productData._id, size)} // Add to cart with the selected size
            className={"px-8 mb-4"}
            text={"ADD TO CART"}
          />
          {/* Product details section */}
          <hr className="mt-5 sm:w-4/5" />
          <div className="flex flex-col mt-5 text-gray-500 text-xs gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/*----- Description & Review Section -----*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border py-2 px-4 text-sm">Description</b>
          {/* Description tab */}
          <p className="border py-2 px-4 text-sm">Review</p> {/* Review tab */}
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-500 border p-6">
          {/* Description content */}
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/*----- Related Products Section -----*/}
      <RelatedProducts
        category={productData.category} // Pass category for related products
        subCategory={productData.subCategory} // Pass sub-category for related products
      />
    </div>
  ) : (
    // If product data is not available, render an empty div
    <div className="opacity-0"></div>
  );
};

export default Product;
