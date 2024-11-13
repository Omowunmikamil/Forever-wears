import { v2 as cloudinary } from "cloudinary";

// Importing environment variables from the.env file
// Function to upload an image to Cloudinary
const connectCloudinary = () => {
  // Connecting to Cloudinary API with the provided environment variables
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
