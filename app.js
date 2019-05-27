var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin-post');
var session = require('express-session');
var app = express();
var hbs = require('hbs');

mongoose.connect('mongodb://thanhliem:Thanhliem123@ds249565.mlab.com:49565/blog', { useNewUrlParser: true }, function (err) {
  if (err) throw err;
  console.log("Connect DB Successfully!");
});

hbs.registerHelper('short', function (options) {
  console.log(options.fn(this));
  return options.fn(this).substring(0, 255) + " ... ";
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(session({ secret: "@@@SADQWEQWEQW", }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
