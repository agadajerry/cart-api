import sequelizeConnect from "../dbConnection/connect";
import Sequelize from "sequelize";

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
  coupon_discount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  coupon_expiry_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  couponMax: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  couponUsage: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default couponTable;