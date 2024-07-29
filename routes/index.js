const Router = require('express')
const router = new Router()
const pointRouter = require('./pointRouter')

router.use('/points', pointRouter)

module.exports = router
