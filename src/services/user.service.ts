import { LoginRequest } from "../http/requests/login.request";
import { User } from '../models/user.model';
import { Sequelize } from "sequelize";

export class UserService {

    async login(req: LoginRequest) : Promise<boolean> {
        console.log("BBBB", req.company);
        const user = await User.findOne(
            {
                where: {
                    email: req.email,
                    company: req.company
                }
            }
        );

        console.log(user, "AAAAA");
        
        return user !== null;
    }
}