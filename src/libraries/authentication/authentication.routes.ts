import { Router, Request, Response } from 'express'
import { dtoAuthenticationRequest } from './authentication.request';
import { AuthenticationService } from './authentication.service';
import { authenticate } from './authentication.middleware';

export const router = Router();

router.use(authenticate);

router.post('/login', async function(req: Request, res: Response) {
    const user = dtoAuthenticationRequest(req);
    if (user === false) {
        return res.sendStatus(400);
    }
    const service = new AuthenticationService;
    const token = await service.login(user);

    if (token !== false) {
        return res.send({token: token});
    }
    return res.sendStatus(404);
});

router.get('/', function (req: Request, res: Response) {
    const service = new AuthenticationService;
    const token  = req.headers.authorization;
    if (typeof token === 'string') {
        const decoded = service.getDataByToken(token);
        return res.send(decoded);
    }
    return res.sendStatus(404);
});