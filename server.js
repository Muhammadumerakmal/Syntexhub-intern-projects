import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/connection.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Syntexhub API');
});

export default app;