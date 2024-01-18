import { LoginRequest } from "../http/requests/login.request";
import { User } from '../models/user.model';

export class UserService {

    async login(req: LoginRequest) : Promise<boolean> {
        const user = await User.findOne(
            {
                where: {
                    email: req.email,
                    company: req.company
                }
            }
        );
        return user !== null;
    }
}