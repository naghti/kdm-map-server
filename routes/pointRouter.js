const Router = require('express')
const router = new Router()
const markController = require('../controllers/pointController')

router.post('/', markController.create)
router.get('/', markController.getAll)
// router.get('/:id', markController.getOne)

module.exports = router
