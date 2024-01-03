import { app } from './app';
import { websocket } from './app-ws';
import { routes } from './web/routes';

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`App Express is running!`);
});

routes(app);

websocket(server);