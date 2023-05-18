import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// protect private paths
export const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    try {
      //get userId from decoded token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(userId).select("-password");

      next();
    } catch (error) {
      console.error(error);

      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
