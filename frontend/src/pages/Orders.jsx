import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="mt-8">
        {products.slice(1, 4).map((item, index) => (
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-700 border-t border-b py-4 gap-4"
            key={index}
          >
            <div className="flex items-start text-sm gap-6">
              <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
              <div className="">
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center text-base text-gray-700 gap-3 mt-2">
                  <p className="text-lg">
                    {currency} {item.price}
                  </p>
                  <p>quantity: 1</p>
                  <p className="">Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">7, Nov, 2024</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="text-sm font-medium rounded-sm border py-2 px-4">
                Track Order
              </button>
            </div>
          </div>
        ))}

        {/*products
          .filter((product) => product.ordered)
          .map((product) => (
            <div
              key={product._id}
              className="flex flex-col gap-4 border-b pb-4 mb-4"
            >
              <div className="flex items-center">
                <img
                  src={product.image[0]}
                  className="w-12 h-12 object-cover"
                  alt={product.name}
                />
                <div className="ml-4">
                  <p>{product.name}</p>
                  <p>
                    {currency} {product.price}
                  </p>
                </div>
              </div>
              {product.ordered_at ? (
                <p>
                  Ordered on: {new Date(product.ordered_at).toLocaleString()}
                </p>
              ) : (
                <p>Order date not available</p>
              )}
            </div>
          ))*/}
      </div>
    </div>
  );
};

export default Orders;
