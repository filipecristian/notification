import app = require('./app');
import { websocket } from './app-ws';

const server = app.default.listen(process.env.PORT || 3000, () => {
    console.log(`App Express is running!`);
})

websocket(server);