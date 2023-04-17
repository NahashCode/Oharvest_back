import express from 'express';
import cors from 'cors';

const app = express();

// import adminRouter from './routers/backoffice/admin.router.js';
import { apiRouter } from './routers/api/router.js';
import { swaggerRouter } from './routers/swagger.router.js';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(cors());
app.use(express.json());

// app.use(adminRouter);

app.use('/api', apiRouter);
// app.use('/admin', adminRouter);

app.use('/docs/api', swaggerRouter);

export default app;
