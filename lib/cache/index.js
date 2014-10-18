
'use strict';

var clean = require('./clean');

var list = require('./list');

var cache = function() {};

cache.clean = clean;

cache.list = list;

module.exports = cache;
