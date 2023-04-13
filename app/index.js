import express from 'express';
import cors from 'cors';

const app = express();

import mainRouter from './routers/main.router.js';
import { apiRouter } from './routers/api/router.js';
import { swaggerRouter } from './routers/swagger.router.js';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

app.use(mainRouter);
app.use('/api', apiRouter);

app.use('/docs/api', swaggerRouter);

export default app;
