import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  // Extracting values from ShopContext: currency, delivery fee, and cart amount calculation function
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      {/* Title component displaying 'CART TOTAL' */}
      <div className="text-xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      {/* Cart Summary Section */}
      <div className="flex flex-col mt-2 text-sm gap-2">
        {/* Displaying subtotal amount */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>

        <hr />

        {/* Displaying shipping fee */}
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>

        <hr />

        {/* Displaying total cost, which includes the subtotal and shipping fee */}
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
            {/* Total is calculated as the cart amount plus delivery fee; displays 0 if cart is empty */}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
