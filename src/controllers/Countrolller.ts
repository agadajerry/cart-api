
import {Request, Response, NextFunction} from 'express';
import couponTable from '../models/couponModel';
import cartModel from '../models/cartModel';


// couponTable.sync();
cartModel.sync();


export class Countrollers{


 async createCoupon(req: Request, res: Response){

   const {coupon_code,coupon_discount,coupon_expiry_date,couponMax, couponUsage} = req.body;

     const result = await couponTable.create({
         coupon_code,
         coupon_discount,
         coupon_expiry_date,
         couponMax,
         couponUsage,
      })
   
     return res.send({
      msg:"coupon created", result
     });
  }



  // create cart

  async createCart(req: Request, res: Response){
   
      const {cartProductPrice,cartProductName,cartProductQuantity} = req.body;
   
         const result = await cartModel.create({
               cartProductPrice,
               cartProductName,
               cartProductQuantity
          })
       
         return res.send(result);
    }
  

  async getCart(req: Request, res: Response){
      
         const result = await cartModel.findAll();
         
            return res.send({msg:"Product added to cart",result});
      }
  }



export default new Countrollers();