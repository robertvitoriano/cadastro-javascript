const router = require('express').Router();
const fieldsController = require('./../controllers/fields')

router.patch('/:id/delete',fieldsController.deleteField);

module.exports = router;