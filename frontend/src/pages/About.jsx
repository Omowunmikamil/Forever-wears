import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center border-t pt-10">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="flex flex-col sm:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
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
          <div className="">
            <b className="text-gray-800 text-sm">Our Mission</b>
            <p className="text-sm mt-2">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-24">
        <div className="flex flex-col border py-8 sm:py-20 px-10 md:px-16 gap-5">
          <b className="text-sm">Quality Assurance: </b>
          <p className="text-sm text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex flex-col border py-8 sm:py-20 px-10 md:px-16 gap-5">
          <b className="text-sm">Convenience </b>
          <p className="text-sm text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="flex flex-col border py-8 sm:py-20 px-10 md:px-16 gap-5">
          <b className="text-sm">Exceptional Customer Service: </b>
          <p className="text-sm text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
