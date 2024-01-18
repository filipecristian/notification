import { Request } from 'express'

export interface LoginRequest {
    email: string,
    company: number,
    password: string,
}

export function dtoLoginRequest(req: Request) : LoginRequest | false {
    console.log(req.body.email);
    if (!req.body.email || !req.body.company || !req.body.password) {
        return false;
    }
    return {
        email: req.body.email,
        company: req.body.company,
        password: req.body.password
    }
}