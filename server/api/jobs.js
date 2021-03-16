const router = require('express').Router();
const sequelize = require('sequelize');
const {Job, Description} = require('../database')


//GET api/jobs
router.get('/', async (req, res, next) =>{
  try {
    const job = await Job.findAll({
      include: [{model: Description}],
      order: [['order', 'DESC']],
    })
    res.json(job)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
