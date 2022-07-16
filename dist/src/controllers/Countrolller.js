"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countrollers = void 0;
const couponModel_1 = __importDefault(require("../models/couponModel"));
const cartModel_1 = __importDefault(require("../models/cartModel"));
const sequelize_1 = require("sequelize");
couponModel_1.default.sync();
// cartModel.sync();
class Countrollers {
    createCoupon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { coupon_code, coupon_expiry_date, couponType } = req.body;
            const result = yield couponModel_1.default.create({
                coupon_code,
                coupon_expiry_date,
                couponType
            });
            return res.send({
                msg: "coupon created",
                result,
            });
        });
    }
    // create cart
    createCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cartProductPrice, cartProductName, cartProductQuantity } = req.body;
            const result = yield cartModel_1.default.create({
                cartProductPrice,
                cartProductName,
                cartProductQuantity,
            });
            return res.send(result);
        });
    }
    getCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield cartModel_1.default.findAll();
            return res.send({ msg: "List of products in cart", result });
        });
    }
    findOneCouponCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { coupon_code } = req.body;
            if (coupon_code.length < 4) {
                return;
            }
            else {
                const coupon = yield couponModel_1.default.findOne({
                    where: {
                        coupon_code: coupon_code,
                        coupon_expiry_date: { [sequelize_1.Op.gte]: new Date() },
                    },
                    attributes: ["coupon_code", "coupon_discount"],
                });
                if (coupon) {
                    return res.send({ msg: "coupon code ", coupon });
                }
                else {
                    return res.send({ error: "No coupon code found or expired" });
                }
            }
        });
    }
}
exports.Countrollers = Countrollers;
// find coupon code and it validity
// apply coupon code
function applyCouponCode(coupon) {
    return coupon;
}
exports.default = new Countrollers();
