import {Strategy, VerifiedCallback} from 'passport-jwt';
import {Request} from "express";
import {PassportStatic} from "passport";
import fs from 'fs';
import path from 'path';
import Users from "../database/models/Users.model";
import {UserCookie} from "../../types/interfaces";

const pathToKey = path.join(__dirname, '/../', 'keys', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const cookieExtractor = (req: Request) => {
    let jwt = null;

    if (req && req.cookies['token']) {
        jwt = req.cookies['token'];
    }

    return jwt;
};

const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

export const passportConfig = (passport: PassportStatic) => {
    passport.use(
        new Strategy(options, async (jwt_payload: UserCookie, done: VerifiedCallback) => {
            try {
                const user = await Users.findOne({
                    where: {id: jwt_payload.sub}
                });
                if (user) {
                    const data: Express.User = {
                        sub: jwt_payload.sub,
                        account_type: jwt_payload.account_type,
                        iat: jwt_payload.iat
                    };
                    return done(null, data);
                } else return done(null, false);
            } catch (error) {
                console.error(error);
            }
        })
    );
};
