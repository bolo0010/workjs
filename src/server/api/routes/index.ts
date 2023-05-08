import express, {Express} from "express";
import {users} from "./Users.route";
import {auth} from "./Auth.route";
import {technologies} from "./Technologies.route";
import {projects} from "./Projects.route";

const routes: Express = express();

routes.use('/users', users);
routes.use('/auth', auth);
routes.use('/technologies', technologies);
routes.use('/projects', projects);

export default routes;