import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form className="w-full flex flex-col items-start gap-3">
      <div>
        <p className="">Upload image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img src={assets.upload_area} alt="upload" className="w-20" />
            <input type="file" id="image1" hidden required />
          </label>
          <label htmlFor="image2">
            <img src={assets.upload_area} alt="upload" className="w-20" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img src={assets.upload_area} alt="upload" className="w-20" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img src={assets.upload_area} alt="upload" className="w-20" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Enter product Name"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write product Description"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-6">
        <div>
          <p className="mb-2">Product category</p>
          <select className="w-full py-2 px-3" required>
            <option value="Men">Men</option>
            <option value="Woman">Woman</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select className="w-full py-2 px-3" required>
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
            placeholder="50"
            required
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>

        <div className="flex gap-3">
          <div>
            <p className="bg-slate-200 py-1 px-3 cursor-pointer">S</p>
          </div>

          <div>
            <p className="bg-slate-200 py-1 px-3 cursor-pointer">M</p>
          </div>

          <div>
            <p className="bg-slate-200 py-1 px-3 cursor-pointer">L</p>
          </div>

          <div>
            <p className="bg-slate-200 py-1 px-3 cursor-pointer">XL</p>
          </div>

          <div>
            <p className="bg-slate-200 py-1 px-3 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button
        type="submit"
        className="w-28 bg-black text-white py-3 mt-4 hover:bg-gray-600"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;
