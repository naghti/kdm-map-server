const Router = require('express')
const router = new Router()
const pointController = require('../controllers/pointController')

router.get('/', pointController.getAll)

// router.get('/:id', markController.getOne)

module.exports = router
