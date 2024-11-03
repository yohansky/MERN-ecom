import express from "express";
import { authUser, deleteUser, getUserById, getUserProfile, getUsers, logout, registerUser, updateUser, updateUserProfile } from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
export const router = express.Router();

// router.get("/", getUsers);
//atau
router.get("/", protect, admin, getUsers);
router.post("/register", registerUser);
router.post("/logout", logout);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.route("/:id").delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);

export default router;
