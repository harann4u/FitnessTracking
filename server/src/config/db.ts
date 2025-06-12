import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("MongooseDB connected")
    }catch (error) {
        console.log("MonGo DB connection failed",error)
        process.exit(1)
    }
};

export default connectDB