import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center border-t pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row justify-center my-10 mb-28 gap-10">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <div className="">
            <p className="text-lg font-semibold text-gray-600 mb-3">
              OUR STORE
            </p>
            <p className="text-gray-500 text-sm mb-3">
              54709 Williams Station <br /> Suite 350, Washington, USA
            </p>
            <p className="text-gray-500 text-sm">
              Tel: (415) 555‑0132 <br /> Email: greatstackdev@gmail.com
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-600 mb-3">
              CAREERS AT FOREVER
            </p>
            <p className="text-gray-500 text-sm">
              Learn more about our teams and job openings.
            </p>
          </div>
          <button className="border border-black py-3 px-8 rounded text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Contact;
