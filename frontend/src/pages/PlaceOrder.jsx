import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import Button from "../components/Button";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between min-h-[80vh] pt-5 sm:pt-14 gap-4 border-t">
      {/*----- left side -----*/}
      <div className="flex flex-col w-full sm:max-w-[480px] gap-4">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        {/*----- shipping address form -----*/}
        <div className="flex gap-3">
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
        <input
          type="number"
          placeholder="Phone Number"
          required
          className="border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/*----- Right Side -----*/}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/*----- Select Payment Method -----*/}
          <div className="flex flex-col lg:flex-row gap-3">
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
