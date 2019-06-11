'use strict'

const router = require('express').Router();
const bankAgencyController = require('../controllers/BankAgency.controller')

router.get('/',bankAgencyController.get);
router.post("/",bankAgencyController.post);
router.put('/:id',bankAgencyController.put);
router.delete('/:id',bankAgencyController.delete);

module.exports = router;