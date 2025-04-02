import express from "express";
export const router = express.Router();
import { getProductById, getProducts, createProduct } from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getProducts).post(protect, admin, createProduct);
//atau
// router.route('/').get(getProducts);

router.get("/:id", getProductById);

export default router;
