const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

//router.get('/:slug/:slug', newsController.show1)
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
