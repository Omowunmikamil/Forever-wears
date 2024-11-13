import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

// User registration route
userRouter.post("/register", registerUser);
// User login route
userRouter.post("/login", loginUser);
// Admin login route
userRouter.post("/admin", adminLogin);

export default userRouter;
