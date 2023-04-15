// my sql connection

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('qrbarcode', 'ravisharma', 'FSrgawky5rwK2NrI0Kq8ng6Jj9dGXCcF', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// module.exports = sequelize;

//================== PostgreSQL Render connection =============================
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('qrbarcode', 'ravisharma', 'FSrgawky5rwK2NrI0Kq8ng6Jj9dGXCcF', {
  dialect: 'postgres',
  protocol: 'postgres',
  host: 'dpg-cgt4iso2qv2fdef6i2s0-a.oregon-postgres.render.com',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
