import express from 'express';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use('/api/posts', require('./api/routes/posts'));

app.listen(
    PORT,
    console.log(`Server started at http://localhost:${PORT}/api/v2`)
);
