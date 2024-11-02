import express from "express";
import { authUser, deleteUser, getUserById, getUserProfile, getUsers, logout, registerUser, updateUser, updateUserProfile } from "../controllers/userController.js";
export const router = express.Router();

// router.get("/", getUsers);
//atau
router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/logout", logout);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

export default router;
