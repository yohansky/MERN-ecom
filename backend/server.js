import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

export const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Body parser middleware (allow us to get body data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
