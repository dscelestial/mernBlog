import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express()
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App started at PORT ${PORT}`);
});