import app from './app.js'
import 'dotenv/config'
const PORT = process.env.PORT as string | 5000

app.listen(PORT, () => {
    console.log(`server started @ http://localhost:${PORT}`)
})