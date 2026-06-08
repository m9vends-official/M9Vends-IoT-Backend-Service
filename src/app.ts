import express from 'express';
import controller from './routes/controller.js'
import 'dotenv/config'
import { Mongo_Connect } from './config/DB.config.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
await Mongo_Connect();
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(`M9Vends IoT Backend Service Started`)
})

app.use('/api', controller)
app.use(errorHandler)
export default app