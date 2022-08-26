import path from 'path'
import express from 'express'
import 'dotenv/config'
import colors from 'colors'
import cors from 'cors'

import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

import postRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express()
const PORT = process.env.PORT || 8000
connectDB()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', postRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))