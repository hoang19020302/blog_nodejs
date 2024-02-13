const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//router.use('/:slug/:slug', newsController.show1)
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
