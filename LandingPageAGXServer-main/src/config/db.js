import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("MongoURI is not defined in .env variable!")
        }

        const connIns = await mongoose.connect(mongoURI);

        console.log(`Connect with MongoDB successfully! host: ${connIns.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}