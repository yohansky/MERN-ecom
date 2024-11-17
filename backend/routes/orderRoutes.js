import express from "express";
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders } from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
export const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, admin, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
