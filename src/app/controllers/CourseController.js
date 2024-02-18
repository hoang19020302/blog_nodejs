const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { 
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        //res.json(req.body)
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => {

            });
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params._id})
            .then(course => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                })
            })
            .catch(next);
            //console.log(req.params)
    }

    // [PUT] /courses/:_id
    update(req, res, next) {
        //res.json(req.body)
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        Course.updateOne({ _id: req.params._id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
