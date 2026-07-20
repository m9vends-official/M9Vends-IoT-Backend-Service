import mongoose from "mongoose";
import type { device } from "../types/device.type.js";

const deviceSchema = new mongoose.Schema<device>({
    serialNumber: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    model: {
        type: String,
        required: true
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Devices" },
    ip: String,
    status: {
        type: String,
        enum: ["online", "offline"],
        default: "offline"
    },
    firmware: {
        name: String,
        version: String
    },
    components: [{
        id: Number,
        catagory: String,
        name: String,
        type: {
            type: String,
            enum: ["sensor", "accutator"]
        }
    }]
})

export const Devices = mongoose.model<device>("Devices", deviceSchema)