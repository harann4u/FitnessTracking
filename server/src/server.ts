import app from './app'
import connectDB from './config/db'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running at http://localhost:${PORT}`)
    })
})