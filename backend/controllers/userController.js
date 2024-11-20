import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { response } from "express";

// generate a JSON Web Token (JWT) for the user from jsonwebtoken
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user Login
const loginUser = async (req, res) => {
  try {
    // Validate the request body
    const { email, password } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // Compare provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If the password doesn't match, return an error
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Generate a JWT if the password is correct
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    // Validate the request body
    const { name, email, password } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Check if the user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // Hash the password before storing it in the database
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a new user object with the validated and hashed data
    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    // Save the new user to the database
    const user = await newUser.save();

    // Generate a JSON Web Token (JWT) for the user
    const token = createToken(user._id); // Assuming createToken function from jwt is defined globally

    // Send the success response with the token
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Export the routes for user login and registration
export { loginUser, registerUser, adminLogin };
