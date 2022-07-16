"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const Countrolller_1 = __importDefault(require("../controllers/Countrolller"));
router.post('/coupon', Countrolller_1.default.createCoupon);
router.post('/cart', Countrolller_1.default.createCart);
router.get('/cart-items', Countrolller_1.default.getCart);
exports.default = router;
