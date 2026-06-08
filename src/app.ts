import express from 'express';
import controller from './routes/controller.js'
import 'dotenv/config'
import { Mongo_Connect } from './config/DB.config.js';
await Mongo_Connect();
const PORT = process.env.PORT as string | 5000
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(`M9Vends IoT Backend Service Started`)
})

app.use('/api', controller)
app.listen(PORT, () => {
    console.log(`server started @ http://localhost:${PORT}`)
})