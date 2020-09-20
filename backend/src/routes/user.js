const router = require('express').Router();
const userController = require('./../controllers/user');


router.post('/users',userController.store);
router.get('/user/:id', userController.index)


module.exports = router;