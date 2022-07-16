import sequelizeConnect from "../dbConnection/connect";
import Sequelize from "sequelize"
const cartModel = sequelizeConnect.define("cart",{

   cartProductId:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
   },
   cartProductPrice:{
      type:Sequelize.INTEGER,
      allowNull:false
   },
   cartProductName:{
      type:Sequelize.STRING,
      allowNull:false
   },
   cartProductQuantity:{
      type:Sequelize.INTEGER,
      allowNull:false
   }

})

export default cartModel;