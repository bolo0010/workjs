"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Users_route_1 = require("./Users.route");
var routes = (0, express_1.default)();
routes.use('/users', Users_route_1.users);
exports.default = routes;
