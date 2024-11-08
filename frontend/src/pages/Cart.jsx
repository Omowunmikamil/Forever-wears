import { useContext, useState, useEffect } from "react"; // Importing React hooks
import { ShopContext } from "../context/ShopContext"; // Importing context to access global state
import Title from "../components/Title"; // Importing the Title component
import { assets } from "../assets/assets"; // Importing assets (like images)
import CartTotal from "../components/CartTotal"; // Importing the CartTotal component
import Button from "../components/Button"; // Importing the Button component

const Cart = () => {
  // Using the ShopContext to access the global state
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  // State to store the processed cart data
  const [cartData, setCartData] = useState([]);

  // useEffect to update cartData whenever cartItems change
  useEffect(() => {
    const tempCartData = [];

    // Loop through the cartItems object and transform it into a more usable array
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempCartData.push({
            _id: items, // Product ID
            size: item, // Product size
            quantity: cartItems[items][item], // Product quantity
          });
        }
      }
    }

    // Update the state with the processed cart data
    setCartData(tempCartData);
  }, [cartItems]); // Dependency array to run effect when cartItems change

  return (
    <div className="border-t pt-14">
      {/* Cart title */}
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {/* Mapping through cartData to display each item */}
        {cartData.map((item, index) => {
          // Find the product data based on the item ID
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="text-gray-700 border-t border-b py-4 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Product image and info */}
              <div className="flex items-start gap-6">
                <img src={productData.image} className="w-16 sm:w-20" alt="" />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name} {/* Product name */}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price} {/* Product price */}
                    </p>
                    <p className="border bg-slate-150 px-2 sm:px-3 sm:py-1">
                      {item.size} {/* Product size */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity input */}
              <input
                type="number"
                min={1}
                className="max-w-10 sm:max-w-20 border px-1 py-1 sm:px-2"
                defaultValue={item.quantity} // Set the default quantity
                onChange={(e) =>
                  // Only update if the input value is a positive number
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value) // Update quantity when input changes
                      )
                }
              />

              {/* Remove button (bin icon) */}
              <img
                src={assets.bin_icon} // Delete icon
                alt="Delete"
                className="w-4 sm:w-5 mr-4 cursor-pointer"
                onClick={() => updateQuantity(item._id, item.size, 0)} // Call updateQuantity with 0 to remove item
              />
            </div>
          );
        })}
      </div>

      {/* Checkout button section */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          {/* Cart total component */}
          <CartTotal />
          <div className="w-full text-end">
            {/* Button to proceed to checkout */}
            <Button
              className={"my-8 px-8"}
              text={"PROCEED TO CHECKOUT"} // Button text
              onClick={() => navigate("/place-order")} // Navigate to the checkout page when clicked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
