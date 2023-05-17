import express from "express";
import {
  register,
  authenticate,
  logout,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", register);
router.post("/auth", authenticate);
router.post("/logout", logout);
router.route("/profile").get(getProfile).put(updateProfile);

// router.route("/auth").post(authUser);

export default router;
