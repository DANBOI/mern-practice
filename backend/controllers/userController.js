import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    const { _id, name, email } = user;

    // add res.cookie
    generateToken(res, _id);

    res.status(201).json({ _id, name, email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
export const authenticate = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const checked = await user?.checkPassword(password);

  if (checked) {
    const { _id, name, email } = user;
    generateToken(res, _id);
    res.json({ _id, name, email }); //200
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
export const logout = (req, res) => {
  //clear token
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.json({ message: "Logged out successfully" });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
  //passed by protect middleware
  const { user } = req;

  if (user) {
    const { _id, name, email } = user;
    res.json({ _id, name, email });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateProfile = asyncHandler(async (req, res) => {
  const { user, body } = req;

  // empty body
  if (!Object.keys(body).length) {
    res.status(401);
    throw new Error("No update data provided");
  }

  const currentUser = await User.findById(user._id);
  if (currentUser) {
    Object.assign(currentUser, { ...body });

    const updatedUser = await currentUser.save();
    const { _id, name, email } = updatedUser;

    res.json({ _id, name, email });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
