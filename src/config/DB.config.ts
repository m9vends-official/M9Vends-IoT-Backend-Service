import mongoose from "mongoose";
import 'dotenv/config'

export async function Mongo_Connect() {
    try {
        await mongoose.connect(process.env.MONGODB_STRING!)
        console.log(`MongoDB Connected`)
    } catch (e) {
        console.error(e)
        throw e
    }
}