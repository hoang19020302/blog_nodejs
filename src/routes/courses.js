const express = require('express');
const router = express.Router();

const listCourseController = require('../app/controllers/ListCourseController');
const courseController = require('../app/controllers/CourseController');

router.get('/:_id/edit', courseController.edit);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.put('/:_id', courseController.update);
router.get('/:slug', courseController.show);
router.get('/', listCourseController.index);


module.exports = router;

