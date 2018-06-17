var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var musicRouter = require('./routes/music');

var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
}); //view engine settings

mongoose.connect('mongodb://localhost/music'); //database connection 

app.engine( 'html', nunjucks.render );
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);    
app.use('/users', usersRouter);
app.use('/music',musicRouter); 


module.exports = app;
