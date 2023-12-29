"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("./app");
const app_ws_1 = require("./app-ws");
const server = app.default.listen(process.env.PORT || 3000, () => {
    console.log(`App Express is running!`);
});
(0, app_ws_1.websocket)(server);
//# sourceMappingURL=index.js.map