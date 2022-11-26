const router = require('express').Router();
const userRoutes=require('./api/userRoutes.js')
const apiRoutes = require('./api/');
const homeRoutes = require('../homeRoutes.js');
const journalRoutes = require('./journal-routes.js');
const questionRoutes = require('./questionRoutess.js');
router.use('/', homeRoutes);
router.use('/dashboard', questionRoutes);
router.use('/api', apiRoutes);
router.use('/userRoutes.js', userRoutes);



module.exports = router;