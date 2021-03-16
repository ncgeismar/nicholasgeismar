const router = require('express').Router();
const Sequelize = require('sequelize')
const {Skill, Description} = require('../database')

//GET api/skills
router.get('/', async (req, res, next) =>{
  try {
    const skill = await Skill.findAll({
      include: [{model: Description}]
    })
    res.json(skill)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
