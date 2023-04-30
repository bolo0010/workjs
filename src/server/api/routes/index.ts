import express, {Express} from "express";
import { users } from "./Users.route";

const routes: Express = express();

routes.use('/users', users);

export default routes;