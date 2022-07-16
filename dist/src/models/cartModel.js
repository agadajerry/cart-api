"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("../dbConnection/connect"));
const sequelize_1 = __importDefault(require("sequelize"));
const cartModel = connect_1.default.define("cart", {
    cartProductId: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    cartProductPrice: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    },
    cartProductName: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    cartProductQuantity: {
        type: sequelize_1.default.INTEGER,
        allowNull: false
    }
});
exports.default = cartModel;
