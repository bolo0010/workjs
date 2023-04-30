"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var sequelize_typescript_1 = require("sequelize-typescript");
var RecruiterData_model_1 = __importDefault(require("./models/RecruiterData.model"));
var Projects_model_1 = __importDefault(require("./models/Projects.model"));
var StudentData_model_1 = __importDefault(require("./models/StudentData.model"));
var StudentDataTechnologies_model_1 = __importDefault(require("./models/StudentDataTechnologies.model"));
var Technologies_model_1 = __importDefault(require("./models/Technologies.model"));
var Users_model_1 = __importDefault(require("./models/Users.model"));
dotenv_1.default.config();
var DatabaseConnection = new sequelize_typescript_1.Sequelize({
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 3306,
    dialect: 'mysql',
    models: [Projects_model_1.default, RecruiterData_model_1.default, StudentData_model_1.default, StudentDataTechnologies_model_1.default, Technologies_model_1.default, Users_model_1.default],
});
exports.default = DatabaseConnection;
