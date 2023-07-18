import {Request, Response, Router} from "express";
import Users from "../../database/models/Users.model";
import {issueJWT, validPassword} from "../../config/jwt";
import {SecureUserModel} from "../../../types/custom";
import passport from "passport";

export const auth = Router();

//user login
auth.post('/login', async (req: Request, res: Response) => {
    const {email, password, remember} = req.body as { email: string, password: string, remember: string };

    if (!email || !password) return res.status(400).json({success: false, message: 'Podaj email i hasło.'});

    let cookie_age: number = 86400000; //1 day

    if (remember) {
        cookie_age = 1209600000; //14 days
    }

    try {
        const user: Users | null = await Users.findOne({
            attributes: ['id', 'account_type', 'salt', 'hash'],
            where: {email}
        });
        if (!user) return res.status(401).json({success: false, message: 'Nieprawidłowy login lub hasło!'});

        const is_valid_pass = validPassword(password, user.hash, user.salt);
        if (!is_valid_pass) return res.status(401).json({success: false, message: 'Nieprawidłowy login lub hasło!'});

        const {token} = issueJWT(user);

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: cookie_age
        });

        res.status(200).json({
            success: true,
            message: 'Pomyślnie zalogowano.'
        });
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: 'Wystąpił błąd, spróbuj ponownie później.'
        });
    }
})

//user logout
auth.get('/logout', passport.authenticate('jwt', {session: false}), async (req: Request, res: Response) => {
    if (req.cookies['token']) {
        res.clearCookie('token').status(200).json({
            success: true,
            message: 'Zostałeś wylogowany.'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Niepoprawny token.'
        });
    }
})

//get user session data
auth.get('/session', passport.authenticate('jwt', {session: false}), async (req: Request, res: Response) => {
    if (!req.user) return res.status(401).json({success: false, message: 'Sesja wygasła lub nie została ustanowiona.'});

    try {
        const user: SecureUserModel | null = await Users.findOne({
            attributes: ['id', 'first_name', 'second_name', 'email', 'account_type', 'phone_number', 'created_at', 'id_student_data', 'id_recruiter_data'],
            where: {id: req.user.sub},
        });
        if (!user) {
            res.status(401).json({
                success: false,
                message: 'Nie odnaleziono użytkownika w bazie danych.'
            });
        } else {
            res.status(200).json(user);
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: 'Wystąpił błąd, spróbuj ponownie później.'
        });
    }
})

