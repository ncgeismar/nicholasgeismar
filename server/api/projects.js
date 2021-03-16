const router = require('express').Router();
const sequelize = require('sequelize');
const {Project, Description} = require('../database')


//GET api/projects
router.get('/', async (req, res, next) =>{
  try {
    const projects = await Project.findAll({
      include: [{model: Description}]
    })
    res.json(projects)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
