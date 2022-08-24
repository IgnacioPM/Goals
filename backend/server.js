import express from 'express'
import 'dotenv/config'

import { errorHandler } from './middleware/errorMiddleware.js';

import postRoutes from './routes/goalRoutes.js';

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', postRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))