import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Function for adding product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      sizes,
      bestseller,
      category,
      subCategory,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      sizes: sizes ? JSON.parse(sizes) : [], // Default to an empty array if sizes is undefined
      bestseller: bestseller ? JSON.parse(bestseller) : false, // Default to false if bestseller is undefined

      // sizes: JSON.parse(sizes),
      // bestseller: bestseller === true ? true : false,
      category,
      subCategory,
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({
      success: true,
      message: "Product added successfully",
      product: product,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for listing products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for single product info
const singleProduct = async (req, res) => {
  try {
    const productId = req.body.productId;

    // Validate the productId
    if (!productId) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, singleProduct, removeProduct };
