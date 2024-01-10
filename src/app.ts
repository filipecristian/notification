import express, { Express } from 'express'; 
import cors = require('cors');
import morgan = require('morgan');
import { router } from './routes/api.route';
 
export const app: Express = express();
 
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', router);