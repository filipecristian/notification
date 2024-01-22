import { AuthenticationRequest } from './authentication.request';
import { User } from '../../modules/users/user.model';
import jwt from 'jsonwebtoken';

export class AuthenticationService {
    
    private KEY = 'CnjPuj^*FU&v5PmQj7SnqsSyNWKXIuf151$Z57#&z&Scizfd7HyZDV&LvYv4dnbQ';

    async login(req: AuthenticationRequest) : Promise<string|false> {
        const user = await User.findOne(
            {
                where: {
                    email: req.email,
                    company: req.company,
                    password: req.password
                }
            }
        );
        if (user !== null) {
            return jwt.sign(
                {user: user.email, company: user.company},
                this.KEY
            )
        };
        return false;
    }

    getDataByToken(token: string): object|false {
        const decoded = jwt.verify(token, this.KEY);
        if (typeof decoded == 'object') {
            return decoded;
        }
        return false;
    }
}