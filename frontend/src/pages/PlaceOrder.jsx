import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import Button from "../components/Button";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  // State to track the selected payment method
  const [method, setMethod] = useState("cod");

  // Extracting navigate function from ShopContext for navigation purposes
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between min-h-[80vh] pt-5 sm:pt-14 gap-4 border-t">
      {/* Left side: Delivery Information Form */}
      <div className="flex flex-col w-full sm:max-w-[480px] gap-4">
        <div className="text-xl sm:text-2xl my-3">
          {/* Title for the section */}
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        {/* Shipping address form */}
        <div className="flex gap-3">
          {/* Input fields for first and last name */}
          <input
            type="text"
            placeholder="First Name"
            required
            className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
          />
        </div>
        {/* Input fields for email and street address */}
        <input
          type="email"
          placeholder="Email Address"
          required
          className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street Address"
          required
          className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
        />
        {/* Input fields for city, state, and zipcode */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            required
            className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="State"
            required
            className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            required
            className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            required
            className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
          />
        </div>
        {/* Input for phone number */}
        <input
          type="number"
          placeholder="Phone Number"
          required
          className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right side: Cart total and Payment Method */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          {/* Displaying cart total */}
          <CartTotal />
        </div>

        <div className="mt-12">
          {/* Title for the payment method section */}
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* Payment Method Selection */}
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Stripe payment option */}
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center border py-2 px-3 gap-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>

            {/* Razorpay payment option */}
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center border py-2 px-3 gap-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>

            {/* Cash on Delivery payment option */}
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center border py-2 px-3 gap-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-sm font-medium text-gray-500 mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          {/* Place order button */}
          <div className="flex justify-end">
            <Button
              onClick={() => navigate("/orders")}
              text={"PLACE ORDER"}
              className={"px-12 mt-8"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
