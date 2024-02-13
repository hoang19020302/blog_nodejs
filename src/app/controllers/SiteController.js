class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    //[POST] /news
    home(req, res) {
        res.send('Hello world!!!');
    }
}

module.exports = new SiteController();
