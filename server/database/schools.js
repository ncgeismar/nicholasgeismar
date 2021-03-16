const Sequelize = require('sequelize');
const db = require('./database');

const School = db.define("schools", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  focus: {
    type: Sequelize.STRING
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
  graduated: {
    type: Sequelize.BOOLEAN
  },
  order: {
    type: Sequelize.INTEGER
  }
})

module.exports = School
