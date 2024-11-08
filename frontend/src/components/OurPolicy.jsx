import { assets } from "../assets/assets";

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-700 py-20">
      {/* Easy Exchange Policy */}
      <div className="text-center">
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5"
          alt="Exchange Policy"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      {/* 7 Days Return Policy */}
      <div className="text-center">
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5"
          alt="Return Policy"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy </p>
      </div>

      {/* Best Customer Support */}
      <div className="text-center">
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5"
          alt="Customer Support"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy;
