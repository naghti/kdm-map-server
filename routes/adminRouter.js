const Router = require('express')
const router = new Router()
const adminController = require('../controllers/adminController')

router.post('/checkPass', adminController.checkPass)
router.post('/delete', adminController.deletePoint)


// router.get('/:id', markController.getOne)

module.exports = router
