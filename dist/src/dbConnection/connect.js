"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// this value ought to be read from .env
const sequelizeConnect = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'myDB@123',
    database: 'cart_coupon'
});
exports.default = sequelizeConnect;
