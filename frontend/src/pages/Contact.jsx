import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-2xl text-center border-t pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Main Contact Section: Store Info and Career */}
      <div className="flex flex-col md:flex-row justify-center my-10 mb-28 gap-10">
        {/* Store Image */}
        <img
          src={assets.contact_img}
          alt="Store front with a modern design" // Descriptive alt text for accessibility
          className="w-full md:max-w-[480px]"
        />

        {/* Contact Details */}
        <div className="flex flex-col justify-center items-start gap-6 px-4 sm:px-10">
          {/* Store Address and Contact Info */}
          <section>
            <p className="text-lg font-semibold text-gray-600 mb-3">
              OUR STORE
            </p>
            <p className="text-gray-500 text-sm mb-3">
              54709 Williams Station <br /> Suite 350, Washington, USA
            </p>
            <p className="text-gray-500 text-sm">
              Tel: <a href="tel:+14155550132">(415) 555‑0132</a> <br />
              Email:{" "}
              <a href="mailto:greatstackdev@gmail.com">
                greatstackdev@gmail.com
              </a>
            </p>
          </section>

          {/* Careers Info */}
          <section>
            <p className="text-lg font-semibold text-gray-600 mb-3">
              CAREERS AT FOREVER
            </p>
            <p className="text-gray-500 text-sm">
              Learn more about our teams and job openings.
            </p>
          </section>

          {/* Call to Action Button */}
          <button className="border border-black py-3 px-8 rounded text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetter />
    </div>
  );
};

export default Contact;
