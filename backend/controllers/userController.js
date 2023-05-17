import asyncHandler from "express-async-handler";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const register = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
export const authenticate = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
export const logout = (req, res) => {
  res.send("logout user");
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
  res.send("get profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateProfile = asyncHandler(async (req, res) => {
  res.send("update profile");
});
