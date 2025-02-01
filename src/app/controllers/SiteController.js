const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /home
    index(req, res) {
        res.render('home');
    }
    //[GET] /search
    search(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('search', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
        //res.render('search');
    }

    //[POST] /courses/hello
    hello(req, res) {
        res.send('Hello world!!!');
        console.log(req.body);
    }
}

module.exports = new SiteController();
