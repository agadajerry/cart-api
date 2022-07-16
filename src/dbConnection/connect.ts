import {Dialect,Sequelize} from 'sequelize';


// this value ought to be read from .env
const sequelizeConnect = new Sequelize({
   dialect: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'myDB@123',
   database: 'cart_coupon'
})

export default sequelizeConnect;

