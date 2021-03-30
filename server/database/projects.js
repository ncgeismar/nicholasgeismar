const Sequelize = require('sequelize')
const db = require('./database')

const Project = db.define("projects", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  role: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
  },
  technologies: {
    type: Sequelize.TEXT,
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  }
})

module.exports = Project
