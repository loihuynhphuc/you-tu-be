const express = require('express');
const router = express.Router();
const WatchController = require('../app/controllers/watchController');

router.get('/:slug',WatchController.watchVideo);

module.exports = router;
