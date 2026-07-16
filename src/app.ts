import express from 'express';
import controller from './routes/controller.js'
import 'dotenv/config'
import { Mongo_Connect } from './config/DB.config.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import cookie from 'cookie-parser'
import cors from 'cors'
import mqtt from './config/mqttBroker.config.js';

await Mongo_Connect();
const app = express()
const allowedDomains: string[] = [
    'http://localhost:3000',
]

app.use(express.json())
app.use(cookie())
app.use(cors({ origin: allowedDomains, credentials: true }))

app.get('/', (req, res) => {
    res.status(200).send(`M9Vends IoT Backend Service Started`)
})

app.use('/api', controller)
app.use(errorHandler)
export default app