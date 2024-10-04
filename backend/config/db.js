const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Failed" + error);
        process.exit();
    }
}

module.exports = connectDB;