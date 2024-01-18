import { Router, Request, Response } from 'express'

import { dtoLoginRequest } from '../http/requests/login.request';
import { UserService } from '../services/user.service';

export const router = Router();

router.post('/login', async function(req: Request, res: Response) {
    const user = dtoLoginRequest(req);
    if (user === false) {
        return res.sendStatus(400);
    }
    const service = new UserService;
    if (await service.login(user) === true) {
        return res.sendStatus(202);
    }
    return res.sendStatus(404);
});