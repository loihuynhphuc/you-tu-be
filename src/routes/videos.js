const express = require('express');
const router = express.Router();

const videosController = require('../app/controllers/videosController');

router.get('/create',videosController.createVideo);

router.post('/store',videosController.storeVideo);

module.exports = router;