import express from 'express'
import 'dotenv/config'
import colors from 'colors'

import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';

import postRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express()
const PORT = process.env.PORT || 8000
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', postRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))