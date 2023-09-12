import dotenv from "dotenv";
import express, {Express} from "express";
import cors from "cors";
import DatabaseConnection from "./database/connection";
import routes from "./api/routes";
import passport from "passport";
import {passportConfig} from "./config/passport";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();

(async function (): Promise<void> {
    try {
        await DatabaseConnection.authenticate();
        console.log('--- Database connected... ---');
    } catch (error) {
        console.error('--- Database connection error: ---', error);
    }
})();

app.use(cors({
    origin: ['https://work.arturmaslowski.pl/'],
    credentials: true
}));
passportConfig(passport);
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.json());
app.use('/api', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`--- Server is listening on port ${port} ---`)
});
