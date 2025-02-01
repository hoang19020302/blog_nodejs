const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class ListCourseController {
    //[GET] /courses
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('list_course', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new ListCourseController();
