import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import DatabaseConnection from "./database/connection";
import routes from "./api/routes";

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

app.use(express.json());
app.use(cors());
app.use('/api', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`--- Server is listening on port ${port} ---`)
});
