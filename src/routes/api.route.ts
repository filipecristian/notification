import { Router, Request, Response } from 'express'

export const router = Router();

router.post('/login', function(req: Request, res: Response) {
    return res.json({'status': 'logged'});
});