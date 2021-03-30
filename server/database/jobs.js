const Sequelize = require('sequelize')
const db = require('./database')

const Job = db.define("jobs", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  organization: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  start: {
    type: Sequelize.STRING
  },
  end: {
    type: Sequelize.STRING
  },
  order: {
    type: Sequelize.INTEGER
  }
})

module.exports = Job
