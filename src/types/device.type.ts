import mongoose from "mongoose";
import type { StringValue } from 'ms'
export interface device {
    _id: mongoose.Types.ObjectId
    serialNumber: string;
    model: string;
    owner?: mongoose.Types.ObjectId;
    mac: string;
    ip: string;
    status: "online" | "offline";
    firmware?: {
        name: string;
        version: string;
        lastUpdated: Date;
    };
    components: {
        id: number;
        catagory: string;
        name: string;
        type: "sensor" | "accutator";
    }[]
}

export interface mqttCredentials {
    token: string;
    expiresIn: StringValue | number
}

export interface deviceInfo {
    message: string;
    deviceVID: string | mongoose.Types.ObjectId;
    isProvisioned: boolean;
    owner?: mongoose.Types.ObjectId | undefined
}