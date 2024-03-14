const express = require('express');
const router = express.Router();

const listCourseController = require('../app/controllers/ListCourseController');
const courseController = require('../app/controllers/CourseController');

router.get('/:_id/edit', courseController.edit);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.post('/handle-form-actions-trash', courseController.handleFormActionsTrash);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:_id', courseController.update);
router.patch('/:_id/restore', courseController.restore);
router.delete('/:_id/force', courseController.forceDestroy);
router.delete('/:_id', courseController.destroy);
router.get('/:slug', courseController.show);
router.get('/', listCourseController.index);


module.exports = router;

