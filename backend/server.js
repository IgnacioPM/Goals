import path from 'path'
import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';

const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import postRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

app.use('/api/goals', postRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));