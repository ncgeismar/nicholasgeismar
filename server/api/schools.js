const router = require('express').Router();
const Sequelize = require('sequelize')
const {School, Description} = require('../database')

//GET api/schools
router.get('/', async (req, res, next) =>{
  try {
    const school = await School.findAll({
      include: [{model: Description}],
      order: [['order', 'DESC']],
    })
    res.json(school)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
