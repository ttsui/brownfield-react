var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.urlencoded());

function validateRequest(data) {
  var errors = [];

  if (!data['renderType']) {
    errors.push('renderType empty');
  } else if (['mountable', 'static'].indexOf(data['renderType']) < 0) {
    errors.push('Invalid renderType');
  }

  if (!data['componentPath']) {
    errors.push('componentPath empty');
  }

  if (!data['component']) {
    errors.push('component empty');
  }

  if (!data['props']) {
    errors.push('props empty');
  }

  return errors;
}

app.post('/', function (req, res) {
  var errors = validateRequest(req.body);

  if (errors.length) {
    res.send(errors);
    return;
  }

  var reactFunction;

  if (req.body['renderType'] === 'static') {
    reactFunction = 'renderToStaticMarkup';
  } else {
    reactFunction = 'renderToString';
  }

  var component = require(path.resolve(req.body['componentPath']))[req.body['component']];
  var props = JSON.parse(req.body['props'] || '{}');

  res.send(ReactDOMServer[reactFunction](React.createElement(component, props)));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});