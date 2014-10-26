
/**
 * Truncate the sqlite db
 *
 * Removes all data from relevant tables in the associated sqlite database.
 *
 * The `opts` options hash can be used to pass configuration options valid
 * options include:
 *
 * - `dbfile`: A string. Where the sqlite data file is located.
 *
 * Pass a callback function `cb` as the final parameter. It will be given an
 * error (or `null` if there was none) and a handle to the sqlite3 database.
 *
 * The returned promise will resolve to the sqlite3 db object when the load
 * completes.
 *
 * @param {Object} opts The options hash
 * @param {Function} cb The callback function
 * @return {Promise} Resolves to the sqlite3 db object
 */
var truncate = function(opts, cb) {
  'use strict';
  /*code*/
};

module.exports = truncate;
