import jwt = require('jsonwebtoken');
import { JWTService } from './services/jwt.service';

const WebSocket = require('ws');
 
function onError(ws: any, err: any) {
    console.error(`onError: ${err.message}`);
}
 
function onMessage(ws: any, data: any) {
    console.log(`onMessage: ${data}`);
    ws.send(`recebido!`);
}
 
function onConnection(ws: any, req: any, res: any) {

    const token = req.headers['authorization'];

    if (process.env.SECRET === undefined || !token) {
        ws.send('closing because secret or token is invalid');
        ws.close();    
        return;
    }

    jwt.verify(token, process.env.SECRET, function(err: any, decoded: any) {
        if (err) {
            ws.send('closing because token is invalid');
            ws.close();
            return;
        }
        req.userId = decoded.id;
        ws.on('message', (data: any) => onMessage(ws, data));
        ws.on('error', (error: any) => onError(ws, error));
        console.log(`onConnection`, (new JWTService).getUser(token));
    });
}
 
export function websocket(server: any) : any {
    const wss = new WebSocket.Server({
        server
    });
 
    wss.on('connection', onConnection);
 
    console.log(`App Web Socket Server is running!`);
    return wss;
}