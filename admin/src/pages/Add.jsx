import { assets } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setLoading(false);
        setName("");
        setDescription("");
        setPrice("");
        setSizes([]);
        setBestseller(false);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setCategory("Men");
        setSubCategory("Topwear");
      } else {
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onHandleSubmit}
      className="w-full flex flex-col items-start gap-3"
    >
      <div>
        <p className="">Upload image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt="upload"
              className="w-20"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
              required
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt="upload"
              className="w-20"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt="upload"
              className="w-20"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt="upload"
              className="w-20"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter product Name"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Write product Description"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-6">
        <div>
          <p className="mb-2">Product category</p>
          <select
            className="w-full py-2 px-3"
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Men">Men</option>
            <option value="Woman">Woman</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select
            className="w-full py-2 px-3"
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Price</p>
          <input
            type="number"
            className="w-full sm:w-[120px] py-2 px-3"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="50"
            required
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>

        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"
              } py-1 px-3 cursor-pointer`}
            >
              S
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"
              } py-1 px-3 cursor-pointer`}
            >
              M
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"
              } py-1 px-3 cursor-pointer`}
            >
              L
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"
              } py-1 px-3 cursor-pointer`}
            >
              XL
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"
              } py-1 px-3 cursor-pointer`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button
        type="submit"
        className="w-28 bg-black text-white py-3 mt-4 hover:bg-gray-600"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-p-button3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        ) : (
          "ADD"
        )}
      </button>
    </form>
  );
};

export default Add;
