import jwt = require('jsonwebtoken');
import { User } from '../contracts/user.contract';

export class JWTService {
    getUser(token: string): User
    {
        let secret = process.env.SECRET ?? '';
        let tokenDecoded: any = jwt.verify(token, secret);
        
        console.log('decoded', tokenDecoded.infoUser.id);
        return {
            id: tokenDecoded.infoUser.id,
            company: tokenDecoded.infoUser.company
        };
    }
}