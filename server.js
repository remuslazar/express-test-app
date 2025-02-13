'use strict';
const express = require('express');
const morgan = require('morgan');
const app = express();
const pkg = require('./package.json');
const superagent = require('superagent');

// use morgan to log all request in the Apache combined format to STDOUT
app.use(morgan('combined'));

app.set('APP_TEST_PARAMETER', process.env.APP_TEST_PARAMETER);

app.use(function (req, res, next) {
  res.set('Server', 'express/test-app v' + pkg.version);
  next();
});

// respond to all GET requests
// noinspection JSUnresolvedFunction
app.get('/', async function (req, res) {
  res.json({
    message: 'Express Test App Online',
    version: pkg.version,
    processUptime: process.uptime(),
  });
});

app.get('/env', async function (req, res) {
  res.json(process.env);
});

app.get('/ip', async function (req, res) {
  const ip_address = (await superagent.get('https://api.ipify.org')).text;
  res.json({ip_address});
});

// noinspection JSUnresolvedFunction
app.get('/env', function (req, res) {
  res.json(process.env);
});

app.listen(3000, function () {
  console.log('Listening on port 3000')
});
