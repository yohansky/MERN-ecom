import express from "express";
export const router = express.Router();
import { getProductById, getProducts, createProduct, updateProduct, deleteProduct, createProductReview } from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.get("/", getProducts).post(protect, admin, createProduct);
//atau
router.route("/").get(getProducts).post(protect, admin, createProduct);

// router.get("/:id", getProductById).put();
router.route("/:id").get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
