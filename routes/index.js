const router = require('express'). Router()

router.use('/api', require('./noteRoutes.js'))


module.exports = router