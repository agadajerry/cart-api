import sequelizeConnect from "../dbConnection/connect";
import Sequelize,{DataTypes} from "sequelize";

const couponTable = sequelizeConnect.define("coupon", {
  coupon_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  coupon_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  coupon_expiry_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },

couponType:{
    type:DataTypes.ENUM,
       values:  ['FIXED10', 'PERCENT10', 'MIXED10','REJECTED10'],
       defaultValue:'FIXED10'
}
});

export default couponTable;