import express from "express";
export const router = express.Router();
import { getProductById, getProducts } from "../controllers/productController.js";

router.get("/", getProducts);
//atau
// router.route('/').get(getProducts);

router.get("/:id", getProductById);

export default router;
