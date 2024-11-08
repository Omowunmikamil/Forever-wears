import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create the ShopContext to be shared across components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // State to manage search query and visibility of search bar
  const [search, setSearch] = useState(" ");
  const [showSearch, setShowSearch] = useState(false);

  // State to hold cart data, structured as an object with item IDs and sizes
  const [cartItems, setCartItems] = useState({});

  // Currency symbol and delivery fee constant
  const currency = "$";
  const delivery_fee = 20;

  // Initialize navigate function from react-router
  const navigate = useNavigate();

  // Function to add items to the cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }

    let cartData = structuredClone(cartItems); // Create a copy of the cart to avoid direct mutation

    // Check if the item already exists in the cart
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        // Increase the quantity of the item for the selected size
        cartData[itemId][size] += 1;
      } else {
        // If the size is new, add it to the cart with quantity 1
        cartData[itemId][size] = 1;
      }
    } else {
      // If the item doesn't exist in the cart, create a new entry for it
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData); // Update the cart state
  };

  // Function to get the total count of items in the cart
  const getCartCount = () => {
    let totalCount = 0;

    // Loop through cart items and sum the quantities
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          // Handle error if needed
        }
      }
    }

    return totalCount;
  };

  // Function to update the quantity of a specific item in the cart
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems); // Create a copy of the cart to avoid direct mutation

    if (cartData[itemId]) {
      if (quantity === 0) {
        // If quantity is 0, remove the item size from the cart
        if (cartData[itemId][size]) {
          delete cartData[itemId][size];

          // If there are no sizes left for this item, remove the entire item
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
          }
        }
      } else {
        // If quantity is not 0, update the size quantity
        cartData[itemId][size] = quantity;
      }

      setCartItems(cartData); // Update the cart state
    }
  };

  // Function to calculate the total amount of items in the cart
  const getCartAmount = () => {
    let totalAmount = 0;

    // Loop through cart items to calculate the total price
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]; // Add the price of the item multiplied by its quantity
          }
        } catch (error) {
          // Handle error if needed
        }
      }
    }

    return totalAmount;
  };

  // Create a value object to hold all the context data
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate, // Providing the navigate function to be used in other components
  };

  // Provide the context value to children components
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
