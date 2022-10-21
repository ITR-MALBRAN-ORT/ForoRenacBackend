import express, { Express } from 'express';
import config from 'config';
import { ValidationError } from 'express-validation';
import indexRouter from './src/routes/index.routes';
import registerErrorHandling from './src/middlewares/error.middlewares';
import sequelize from './database/mysql.connection';

const PORT: number = Number(config.get('SERVER.port') ?? 3000);

const app: Express = express();

app.use('/api/v1', indexRouter);

app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof ValidationError)
    registerErrorHandling(
      {
        code: err.statusCode,
        message:
          Array.isArray(err.details.body) && err.details.body.length > 0
            ? err.details.body[0].message
            : '',
      },
      req,
      res,
    );
});

sequelize
  .authenticate()
  .then(() => {
    const log = {
      message: 'Connection has been established successfully.',
      timestamp: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    };
    console.log(log);
  })
  .catch((err) => {
    const log = {
      message: 'Cannot establish connection with DB',
      timestamp: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      error: err,
    };
    console.log(log);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
