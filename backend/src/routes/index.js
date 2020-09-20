const router = require('express').Router();
const userRoutes = require('./user.js');
const fieldsRoutes = require('./fields');

router.use(userRoutes);
router.use(fieldsRoutes);



module.exports = router;