// backend/server.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import aiRoutes from './routes/ai.js';

const app = express();
connectDB();

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.get('/', (req, res) => res.send('DSA practice AI backend'));

app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
