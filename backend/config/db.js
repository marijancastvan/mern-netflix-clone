import mongoose from "mongoose";    
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("MongoDB connection string:", conn.connection.host);    

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit the process with failure
    }
}