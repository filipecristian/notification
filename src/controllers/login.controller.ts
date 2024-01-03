import jwt = require('jsonwebtoken');

export class LoginController {

    login(req: any, res: any, next: any) : any
    {
        let userWs = process.env.USER_WS;
        let passwordWs = process.env.PASSWORD_WS;
        
        if (req.body.user_ws === userWs && req.body.password_ws === passwordWs) {
            if (process.env.SECRET === undefined) {
                return res.status(500).json({message: 'Chave não configurada!'});
            }

            const infoUser = {
                id: req.body.user.id,
                company: req.body.user.company
            }

            const secret = process.env.SECRET;
            const token = jwt.sign({infoUser}, secret, {expiresIn: 300});
            return res.json({auth: true, token: token});
        }
        return res.status(500).json({message: 'Usuário e senha inválidos!'});
    }
}