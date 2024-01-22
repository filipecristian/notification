import express, { Express } from 'express'; 
import cors = require('cors');
import morgan = require('morgan');
import { router } from './libraries/authentication/authentication.routes';
import { Sequelize } from 'sequelize-typescript';
import { User } from './modules/users/user.model';

// Express
export const app: Express = express();

const fs = require('node:fs');

const file = fs.readFileSync(__dirname + '/../config/config.json', 'utf8');

const connection = JSON.parse(file).development;
connection.models = [User];
new Sequelize(connection);

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/authentication', router);