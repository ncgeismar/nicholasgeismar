const Sequelize = require('sequelize');
const db = require('./database');

const Skill = db.define("skills", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
})

module.exports = Skill
