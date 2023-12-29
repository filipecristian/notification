"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocket = void 0;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
const WebSocket = require('ws');
function onError(ws, err) {
    console.error(`onError: ${err.message}`);
}
function onMessage(ws, data) {
    console.log(`onMessage: ${data}`);
    ws.send(`recebido!`);
}
function onConnection(ws, req) {
    ws.on('message', (data) => onMessage(ws, data));
    ws.on('error', (error) => onError(ws, error));
    console.log(`onConnection`);
}
function websocket(server) {
    const wss = new WebSocket.Server({
        server
    });
    wss.on('connection', onConnection);
    console.log(`App Web Socket Server is running!`);
    return wss;
}
exports.websocket = websocket;
//# sourceMappingURL=app-ws.js.map