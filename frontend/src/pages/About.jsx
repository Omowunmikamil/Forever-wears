import Title from "../components/Title"; // Import the Title component for section headers
import { assets } from "../assets/assets"; // Import the assets (like images) from the assets folder
import NewsLetter from "../components/NewsLetter"; // Import the Newsletter component

const About = () => {
  return (
    <div>
      {/*----- About Section Header -----*/}
      <div className="text-2xl text-center border-t pt-10">
        <Title text1={"ABOUT"} text2={"US"} />
        {/* Title component with "ABOUT US" text */}
      </div>
      {/*----- About Content Section -----*/}
      <div className="flex flex-col sm:flex-row gap-16 my-10">
        {/* Image displaying the about us image */}
        <img
          src={assets.about_img} // Image source from assets
          alt="About Us"
          className="w-full md:max-w-[450px]" // Styling the image for responsiveness
        />
        {/* Text section describing the company */}
        <div className="flex flex-col justify-center md:w-2/4 text-gray-600 gap-6">
          <p className="text-sm">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-sm">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          {/* Our Mission Section */}
          <div className="">
            <b className="text-gray-800 text-sm">Our Mission</b>
            {/* Mission title */}
            <p className="text-sm mt-2">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      {/*----- Why Choose Us Section Header -----*/}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        {/* Title component with "WHY CHOOSE US" text */}
      </div>
      {/*----- Why Choose Us Content -----*/}
      <div className="flex flex-col md:flex-row text-sm mb-24">
        {/* Quality Assurance Box */}
        <div className="flex flex-col border py-8 sm:py-20 px-10 md:px-16 gap-5">
          <b className="text-sm">Quality Assurance: </b> {/* Label */}
          <p className="text-sm text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        {/* Convenience Box */}
        <div className="flex flex-col border py-8 sm:py-20 px-10 md:px-16 gap-5">
          <b className="text-sm">Convenience </b> {/* Label */}
          <p className="text-sm text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        {/* Exceptional Customer Service Box */}
        <div className="flex flex-col border py-8 sm:py-20 px-10 md:px-16 gap-5">
          <b className="text-sm">Exceptional Customer Service: </b>
          {/* Label */}
          <p className="text-sm text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      {/*----- Newsletter Section -----*/}
      <NewsLetter /> {/* The newsletter subscription section */}
    </div>
  );
};

export default About;
