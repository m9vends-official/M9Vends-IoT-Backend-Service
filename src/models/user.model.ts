import mongoose from "mongoose";
import type { user } from "../types/user.type.js";

const userSchema = new mongoose.Schema<user>({
    email: String,
    url: String,
    devices: { type: [mongoose.Schema.Types.ObjectId], ref: "Devices" }
})

export const User = mongoose.model<user>('User', userSchema)