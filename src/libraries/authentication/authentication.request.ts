import { Request } from 'express'

export interface AuthenticationRequest {
    email: string;
    company: string;
    password: string;
}

export function dtoAuthenticationRequest(req: Request) : AuthenticationRequest|false {
    if (!req.body.email || !req.body.company || !req.body.password) {
        return false;
    }
    return {
        email: req.body.email,
        company: req.body.company,
        password: req.body.password
    }
}