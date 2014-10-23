
'use strict';

var join = require('path').join;

exports.lib = function(path) {
  path = join('../../lib', path);
  return require(path);
};
