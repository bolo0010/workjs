import dotenv from "dotenv";
import {Sequelize} from 'sequelize-typescript';
import RecruiterData from "./models/RecruiterData.model";
import Projects from "./models/Projects.model";
import StudentData from "./models/StudentData.model";
import StudentDataTechnologies from "./models/StudentDataTechnologies.model";
import Technologies from "./models/Technologies.model";
import Users from "./models/Users.model";

dotenv.config();
const DatabaseConnection: Sequelize = new Sequelize({
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 3306,
    dialect: 'mysql',
    models: [Projects, RecruiterData, StudentData,
        StudentDataTechnologies, Technologies, Users],
});
export default DatabaseConnection;