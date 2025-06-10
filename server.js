import express from 'express';
import mongoose from 'mongoose';
import { routes } from './Routes/routes.js';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Shoppyglobe_db');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', (err) => {
  console.error('Database connection error:', err);
});

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
routes(app);