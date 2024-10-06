import mongoose from "mongoose";

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri); // No need for options in Mongoose 6.x and MongoDB 4.x+
        console.log("Connected to DB successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit the process on failure
    }
};
