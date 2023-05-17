import asyncHandler from "express-async-handler";

// POST /api/users/auth
export const authUser = asyncHandler(async (req, res) => {
  // console.log(req.url);
  res.json({ message: "Success" });
});
