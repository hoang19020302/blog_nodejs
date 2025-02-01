const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted({ deletedAt: { $exists: true } })])
            .then(([courses, deletedCount]) => {
                res.render('me/stored_courses', {
                    courses: mutipleMongooseToObject(courses),
                    deletedCount,
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({ deletedAt: { $exists: true } }) //sử dụng version mongoose-delete = 0.5.2 thì sẽ ko cần deletedAt: { $exists: true }
            .then((courses) => {
                res.render('me/trash_courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
