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
   const {code} =  req.query;

   console.log(code)

   let totalPrice:number = 0;
    const result:any = await cartModel.findAll();

   for(let i = 0; i < result.length;i++){
      totalPrice+= result[i].cartProductPrice;
   }
  const discount = await applyCouponCode(code,totalPrice,result.length);
  

      // const discount =  getCartTotalPriceAndLength(totalPrice,result.length, req.query.code);

      console.log(discount)

    return res.send({ msg: "List of products in cart", result, discount:discount });
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

         
         // switch(coupon_code){
         //     case "FIXED10":
         //       return applyCouponCode("FIXED10");
         //       case "PERCENT10":

         //       return applyCouponCode("PERCENT10");
         //       case "MIXED10":
         //       return applyCouponCode("MIXED10");
         //       case "REJECTED10":
         //       return applyCouponCode("REJECTED10");
         //       default:
         //       return res.send({ error: "No coupon code found or expired"});

         // }
      } else {
        return res.send({ error: "No coupon code found or expired" });
      }
    
  }
}

// find coupon code and it validity

// apply coupon code

 async function applyCouponCode(coupon: any, totalPrice:number, cartSize:number) {

  
   const couponValidity = await couponTable.findOne({
      where: {
        coupon_code: coupon,
        coupon_expiry_date: { [Op.gte]: new Date() },
      },
      attributes: ["coupon_code", "couponType"],
    });

    return couponValidity;
   //  if(couponValidity){
   //    switch(coupon){
   //      case "FIXED10":
   //       if(cartSize >= 1 && totalPrice > 50){
   //          return totalPrice - 10
   //       }
   //      case "PERCENT10":
   //      if(cartSize >= 2 && totalPrice > 100){
   //          return totalPrice * 0.10
   //       }
        
   //      case "MIXED10":
   //       if(cartSize >= 3 && totalPrice >= 200){
   //          return totalPrice * 0.10
   //       }
   //      case "REJECTED10":
   //      if( totalPrice > 1000){
   //          return totalPrice * 0.10
         
   //      }

   //      default:
   //      return 0;
   //    }
   //  }
}

function  getCartTotalPriceAndLength(totalPrice:number,cartSize:number,code:any){

   if(code == "FIXED10" && totalPrice > 50  && cartSize > 1){

      return totalPrice - 10
   }
  
}


export default new Countrollers();
