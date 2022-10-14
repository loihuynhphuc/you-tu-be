const express = require('express');
const siteControllers = require('../app/controllers/siteControllers');
const router = express.Router();
const SiteController = require('../app/controllers/siteControllers');

router.get('/search',siteControllers.searchData)

router.get('/category',SiteController.showCategory);

router.get('/',SiteController.showHome);


module.exports = router;

