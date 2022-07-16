import { Request, Response, NextFunction } from "express";
import couponTable from "../models/couponModel";
import cartModel from "../models/cartModel";
import { Op } from "sequelize";

couponTable.sync();
// cartModel.sync();

export class Countrollers {
  async createCoupon(req: Request, res: Response) {
    const {
      coupon_code,
      coupon_expiry_date,
      couponType
    } = req.body;

    const result = await couponTable.create({
      coupon_code,
      coupon_expiry_date,
      couponType
    });

    return res.send({
      msg: "coupon created",
      result,
    });
  }

  // create cart

  async createCart(req: Request, res: Response) {
    const { cartProductPrice, cartProductName, cartProductQuantity } = req.body;

    const result = await cartModel.create({
      cartProductPrice,
      cartProductName,
      cartProductQuantity,
    });

    return res.send(result);
  }

  async getCart(req: Request, res: Response) {
    const result = await cartModel.findAll();
   //  getCartTotalPriceAndLength() 

   console.log(result.length)
    return res.send({ msg: "List of products in cart", result });
  }

  async findOneCouponCode(req: Request, res: Response) {
    const {coupon_code} = req.body;


      const coupon = await couponTable.findOne({
        where: {
          coupon_code: coupon_code,
          coupon_expiry_date: { [Op.gte]: new Date() },
        },
        attributes: ["coupon_code", "couponType"],
      });

      if (coupon) {

         switch(coupon_code){
             case "FIXED10":
               return applyCouponCode("FIXED10");
               case "PERCENT10":
               return applyCouponCode("PERCENT10");
               case "MIXED10":
               return applyCouponCode("MIXED10");
               case "REJECTED10":
               return applyCouponCode("REJECTED10");
               default:
               return res.send({ error: "No coupon code found or expired"});

         }
      } else {
        return res.send({ error: "No coupon code found or expired" });
      }
    
  }
}

// find coupon code and it validity

// apply coupon code

function applyCouponCode(coupon: string) {
  return coupon;
}

export default new Countrollers();
