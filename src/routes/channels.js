const express = require('express');
const router = express.Router();
const channelController = require('../app/controllers/channelController');

router.get('/create',channelController.createChannel)

router.post('/store',channelController.storeChannel)

module.exports = router;