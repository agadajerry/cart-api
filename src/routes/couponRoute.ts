var express = require('express');
var router = express.Router();
import Controller from '../controllers/Countrolller';



router.post('/coupon', Controller.createCoupon);
router.post('/cart', Controller.createCart);
router.get('/cart-items', Controller.getCart);

export default router;
