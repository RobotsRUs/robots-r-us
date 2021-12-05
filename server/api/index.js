const router = require('express').Router();

// Routes:
router.use('/route-template', require('./route_template'));
router.use('/users', require('./users'));

// 404:
router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
