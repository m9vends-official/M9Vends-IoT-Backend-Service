import mqtt from "mqtt";
import 'dotenv/config'
import { updateDeviceStatus } from "../services/device.services.js";

const options: mqtt.IClientOptions = {
    host: process.env.MQTT_BROKER_URL as string,
    port: parseInt(process.env.MQTT_BROKER_PORT as string),
    protocol: 'mqtt',
    username: process.env.MQTT_BROKER_USERNAME as string,
    password: process.env.MQTT_BROKER_PASSWORD as string
}

const mqttClient = mqtt.connect(options);

mqttClient.on("connect", () => {
    console.log("MQTT Broker Connected");
});

mqttClient.subscribe('device/+/status', (err) => {
    if (!err) {
        console.log("Subscribed device Status")
    } else {
        console.log('\x1b[31m%s\x1b[0m', "\n MQTT Subscription Error")
        console.error(err);
    }
})

mqttClient.on("message", async (topic, message) => {
    try {
        // console.log(`\nMessage Received: ${topic}\n${message}`)
        const topicSplitArray = topic.split('/')
        if (topicSplitArray.length === 3 && topicSplitArray[0] === "device" && topicSplitArray[1] && topicSplitArray[2] === "status") {
            await updateDeviceStatus(topicSplitArray[1], message.toString())
        }
    } catch (err) {
        console.log('\x1b[31m%s\x1b[0m', "\n MQTT On Message Error")
        console.error(err);
    }
})

mqttClient.on("error", (error) => {
    console.log('\x1b[31m%s\x1b[0m', "\n MQTT Connection Error")
    console.error(error);
});

export default mqttClient