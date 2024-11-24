import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create the ShopContext to be shared across components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // State to manage search query and visibility of search bar
  const [search, setSearch] = useState(" ");
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]); // State to manage products, search results, and filtering options
  const [token, setToken] = useState(""); // State to manage user authentication
  const [cartItems, setCartItems] = useState({}); // State to hold cart data, structured as an object with item IDs and sizes

  // Currency symbol and delivery fee constant
  const currency = "$";
  const delivery_fee = 20;
  const backendUrl = import.meta.env.VITE_BACKEND_URL; // default backend url for backend requests and responses
  const navigate = useNavigate(); // Initialize navigate function from react-router

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

  // Function to fetch products data from the backend API
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Fetch products data from the backend API
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

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
    backendUrl,
    token,
    setToken,
  };

  // Provide the context value to children components
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
