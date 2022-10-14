import express, { Express } from 'express';
import config from 'config';
import indexRouter from './src/routes/index.routes';

const PORT: number = Number(config.get('server.port') ?? 3000);

const app: Express = express();

app.use('/api/v1', indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
