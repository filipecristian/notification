import express = require('express');
 
import cors = require('cors');
import helmet = require('helmet');
import morgan = require('morgan');
 
const app = express();
 
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
 
app.use(helmet.default());
 
app.use(express.json());
 
app.use(morgan('dev'));
 
app.post('/login', (req, res, next) => {
    res.json({ token: '123456' });
});
 
export default app;