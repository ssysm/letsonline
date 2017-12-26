//import all module
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('debug', true);
//import express route module
const index = require('./routes/index');
const users = require('./routes/users');
const status = require('./routes/status');
//Init express
const app = express();
//Import service
require('./service/ping');
//Init express option
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Init express route
app.use('/', index);
app.use('/status',status);
app.use('/auth/user', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.send(err);
});

module.exports = app;
