'use strict'

const router = require('express').Router();
const userController = require('../controllers/Users.controller')

router.get('/',userController.get);
router.post("/",userController.post);
router.put('/:id',userController.put);
router.delete('/:id',userController.delete);

module.exports = router;