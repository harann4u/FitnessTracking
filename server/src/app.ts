import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(cors({ origin : 'http://localhost:5173', credentials: true}))

app.use('/api/auth',authRoutes)
app.use('/api',userRoutes)

export default  app