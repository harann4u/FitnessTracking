import dotenv from 'dotenv'
import express from 'express';
import connectDB from './config/db';

dotenv.config()

const app = express()


// Middleware to parse JSON
app.use(express.json())

// connect to DB
connectDB()

const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("API is Running")
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});