
'use strict';

var fs = require('fs')
  , join = require('path').join;

exports.lib = function(path) {
  path = join('../../lib', path);
  return require(path);
};

exports.fixture = function(file) {
  return fs.readFileSync(join(__dirname, 'fixtures', file)).toString();
};
