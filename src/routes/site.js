const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/siteControllers');

router.get('/category',SiteController.showCategory);

router.get('/',SiteController.showHome);


module.exports = router;

