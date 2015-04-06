'use strict';

var path = require('path');
var lookup = require('./lookup.json');

function get(filename) {
  var ext = path.extname(filename);
  return lookup[ext];
}

function is(filename, name) {
  var result = get(filename, name);
  if (result) {
    return result.indexOf(name) !== -1;
  }
}

module.exports = {
  get: get,
  is: is
};
