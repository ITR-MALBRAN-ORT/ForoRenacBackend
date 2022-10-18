import express, { Express } from 'express';
import config from 'config';
import { ValidationError } from 'express-validation';
import indexRouter from './src/routes/index.routes';
import registerErrorHandling from './src/middlewares/error.middlewares';
import { body } from 'express-validator';

var bodyParser = require('body-parser')

const PORT: number = Number(config.get('server.port') ?? 3000);

const app: Express = express();

app.use(bodyParser())
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
