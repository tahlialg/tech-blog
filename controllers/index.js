const router = require('express').Router();

const {router: homeRoutes} = require('./controllers/homeRoutes');

router.use(homeRoutes);

module.exports = router;
