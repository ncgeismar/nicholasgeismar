const router = require('express').Router();


//api/jobs
router.use('/jobs', require('./jobs'))
router.use('/schools', require('./schools'))
router.use('/skills', require('./skills'))
router.use('/projects', require('./projects'))

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
})

module.exports = router
