import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import Button from "../components/Button";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    // fetch product data
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        //console.log(item);
        return null;
      }
      // if (!products || products.length === 0) return; // Ensure products are available
      // const product = products.find((item) => item._id === productId);
      // if (product) {
      //   setProductData(product);
      //   setImage(product.image[0]);
      // }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 transition-opacity ease-in duration-500 opacity-100 pt-10">
      {/*----- Product Data -----*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*----- Product Images -----*/}
        <div className="flex-1 gap-3 flex flex-col-reverse sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full flex-shrink-0 sm:mb-3 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/*----- Product Information -----*/}
        <div className="flex-1">
          <h1 className="font-medium mt-2 text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(124)</p>
          </div>
          <p className="text-3xl font-medium mt-4">
            {currency}
            {productData.price}
          </p>
          <p className="md:w-4/5 text-gray-500 text-sm mt-4">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-5">
            <p className="">Select Sizes</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-gray-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <Button
            onClick={() => addToCart(productData._id, size)}
            className={"px-8 mb-4"}
            text={"ADD TO CART"}
          />
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
          <p className="border py-2 px-4 text-sm">Review</p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-500 border p-6">
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

      {/*----- Related Products -----*/}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
