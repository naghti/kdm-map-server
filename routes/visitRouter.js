const Router = require('express')
const router = new Router()
const visitController = require('../controllers/visitController')

router.get('/', visitController.get)

module.exports = router
