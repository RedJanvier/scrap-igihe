import 'colors';
import express from 'express';
import routes from './api/routes';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use('/api/v2', routes);

app.listen(
  PORT,
  console.log(`Server started at http://localhost:${PORT}/api/v2`)
);

export default app;
