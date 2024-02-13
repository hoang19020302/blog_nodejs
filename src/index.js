const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
//app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'main',
    }),
);
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources/views'))

// Router init - định tuyến
route(app)

         app.listen(port, 'localhost', () => {
          console.log(`Server is listening at http://localhost:${port}`);
});
