const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const SortMiddleware = require('./app/middlewares/SortMiddleware')

const route = require('./routes');
const db = require('./config/db');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'));

// Custom middleware
app.use(SortMiddleware);

// Middleware - Form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
//app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'main',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));
console.log('Path:', path.join(__dirname))

// Router init - định tuyến
route(app);

// Connect to DB
db.connect();
app.listen(port, 'localhost', () => {
    console.log(`App listening at http://localhost:${port}`);
});
