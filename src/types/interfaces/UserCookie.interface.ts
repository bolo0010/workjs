import {AccountType} from "../enums";

declare global {
    namespace Express {
        interface User extends UserCookie {
        }
    }
}

export interface UserCookie {
    sub: string,
    account_type: AccountType
    iat: number
}