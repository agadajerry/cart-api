"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("../dbConnection/connect"));
const sequelize_1 = __importDefault(require("sequelize"));
const couponTable = connect_1.default.define("coupon", {
    coupon_id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    coupon_code: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    coupon_discount: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    coupon_expiry_date: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
    couponMax: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    couponUsage: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
});
exports.default = couponTable;
