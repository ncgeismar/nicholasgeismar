const Sequelize = require('sequelize')
const db = require('./database')

const Description = db.define('description', {
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Description
