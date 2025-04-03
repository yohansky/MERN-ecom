import express from "express";
export const router = express.Router();
import { getProductById, getProducts, createProduct, updateProduct } from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.get("/", getProducts).post(protect, admin, createProduct);
//atau
router.route("/").get(getProducts).post(protect, admin, createProduct);

// router.get("/:id", getProductById).put();
router.route("/:id").get(getProductById).put(protect, admin, updateProduct);

export default router;
