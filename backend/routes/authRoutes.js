const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

//router.post('/cadastro', authController.cadastro);
router.post('/login', authController.login)
router.post('/cru', authController.cru)
router.post('/nvsh',authController.nvsh)
router.post('/recs',authController.recs)

module.exports = router;