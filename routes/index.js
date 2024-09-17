const Router = require('express')
const router = new Router()
const pointRouter = require('./pointRouter')
const adminRouter = require('./adminRouter')
const visitRouter = require('./visitRouter')

router.use('/visitors', visitRouter)
router.use('/points', pointRouter)
router.use('/admin', adminRouter)

module.exports = router
