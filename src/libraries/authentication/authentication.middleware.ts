import { Router, Request, Response } from 'express'
import { AuthenticationService } from './authentication.service'

export function authenticate(req: Request, res: Response, next: any) {
    try {
        const authenticationService = new AuthenticationService;
        const service = new AuthenticationService;
        const token  = req.headers.authorization;
        if (typeof token === 'string') {
            const decoded = service.getDataByToken(token);
            if (typeof decoded === 'object') {
                next();
            }
        }
    } catch (e) {
        return res.sendStatus(403);
    }
}