const db = require('./database')
const Job = require('./jobs')
const Skill = require('./skills')
const School = require('./schools')
const Project = require('./projects')
const Description = require('./descriptions')

Job.belongsToMany(Description, {through: 'descriptionJob'})
Skill.belongsToMany(Description, {through: 'descriptionSkill'})
School.belongsToMany(Description, {through: 'descriptionSchool'})
Project.belongsToMany(Description, {through: 'descriptionProject'})


module.exports = {
  db,
  Job,
  Skill,
  School,
  Project,
  Description
}

