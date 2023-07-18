import crypto from 'crypto';
import fs from 'fs';
import jsonwebtoken from 'jsonwebtoken';
import path from 'path';
import Users from "../database/models/Users.model";
import { GeneratedHashSalt, JwtToken, UserCookie } from "../../types/interfaces";

const pathToKey = path.join(__dirname, '/../', 'keys', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

export const validPassword = (password: string,
                              hash: string,
                              salt: string): boolean => {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512')
        .toString('hex');
    return hash === hashVerify;
}

export const genPassword = (password: string): GeneratedHashSalt => {
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512')
        .toString('hex');
    return {
        hash: genHash,
        salt: salt
    };
}

export const issueJWT = (user: Users): JwtToken => {
    const {id, account_type} = user;
    const payload: UserCookie = {
        sub: id,
        account_type: account_type,
        iat: Date.now()
    };
    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
        algorithm: 'RS256'
    });
    return {
        token: signedToken
    };
}
