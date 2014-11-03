
/**
 * Mtg utilities for node
 *
 * @package mtg
 */

/**
 * Set global configuration options for the mtg module
 *
 * @param {Object} opts The options hash
 * @return {Object} This module for chaining
 */
var mtg = function(opts) {
  'use strict';

  // ...

  return module.exports;
};

mtg.card = require('./card');

mtg.cache = require('./deck');

mtg.db = require('./db');

module.exports = mtg;
