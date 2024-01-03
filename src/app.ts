import express = require('express'); 
import cors = require('cors');
import helmet = require('helmet');
import morgan = require('morgan');
import jwt = require('jsonwebtoken');
 
export const app = express();
 
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(helmet.default());
app.use(express.json());
app.use(morgan('dev'));
 
app.get('/clientes', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
})

export function verifyJWT(req: any, res: any, next: any) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }

    if (process.env.SECRET === undefined) {
        return res.status(500).json({message: 'Chave não configurada!'});
    }

    jwt.verify(token, process.env.SECRET, function(err: any, decoded: any) {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
}