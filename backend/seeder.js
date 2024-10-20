import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Order from "./models/order.js";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/user.js";
import Product from "./models/productModels.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// console.log(process.argv);
//cnth: node backend/seeder -d
//terdapat 3 index [0] = node ; [1] = backend/seeder ; [2] = -d

//jika index ke 3nya = '-d',maka execute function destroy
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
