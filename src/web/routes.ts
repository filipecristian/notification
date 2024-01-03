import { LoginController } from '../controllers/login.controller';

export function routes(app: any): void 
{
    app.post('/login', (req: any, any: any, next: any) => (new LoginController).login(req, any, next));
}