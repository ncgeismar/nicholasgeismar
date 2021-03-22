const Sequelize = require('sequelize');

// const db = new Sequelize('postgres://localhost:5432/resume', {
//   logging: false,
// });

const db = new Sequelize('defaultdb', 'doadmin', 'mjvhsoyjehbn83x5', {
  host: 'nicholas-geismar-db-do-user-8895138-0.b.db.ondigitalocean.com',
  port: 25060,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  }
})

// new Sequelize(database, username, password)
// const sequelize = new Sequelize('postgres', 'postgres', '123456', {
//   dialect: 'postgres',
//   port: 5432,
//   replication: {
//     read: [
//       { host: standby_ipv4 },
//       { host: primary_ipv4 }
//       // witness node has no data, only metadata
//     ],
//     write: { host: primary_ipv4 }
//   },
//   pool: {
//     max: 10,
//     idle: 30000
//   },
// })

module.exports = db
