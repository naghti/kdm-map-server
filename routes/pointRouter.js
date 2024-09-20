const Router = require('express')
const router = new Router()
const pointController = require('../controllers/pointController')

router.get('/', pointController.getAll)
router.post('/', pointController.create)

// router.get('/:id', markController.getOne)

module.exports = router
