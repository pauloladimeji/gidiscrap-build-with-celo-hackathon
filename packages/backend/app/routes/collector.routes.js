const router = require('express').Router();

const Collector = require('../controllers/collector.controller');

// Create a new Company
router.get('/', Collector.getCollectors);
router.get('/auth/login', Collector.login);
router.get('/:id', Collector.getOneCollector);
module.exports = router;
