import { Request, Response } from 'express'
import { AuthenticationService } from './authentication.service'

export function authenticate(req: Request, res: Response, next: any) {
    try {
        const service = new AuthenticationService;
        const token  = req.headers.authorization;
        if (token) {
            const decoded = service.getDataByToken(token);
            if (decoded) {
                next();
            }
        }
    } catch (e) {
        return res.sendStatus(403);
    }
}