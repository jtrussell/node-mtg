
/**
 * Load a mtgjson file into the sqlite db
 *
 * All parameters are optional. If no file is specified `load` will attempt to
 * download the latest data from mtgjson.com (with extras) and import that.
 *
 * The `opts` options hash can be used to pass configuration options valid
 * options include:
 *
 * - `dbfile`: A string. Where the sqlite data file is or should be created
 * - `extras`: A boolean. Whether or not to include extras data. When using a
 *   local file this will be inferred from the available data and used if
 *   possible. Defaults to `true`.
 *
 * Pass a callback function `cb` as the final parameter. It will be given an
 * error (or `null` if there was none) and a handle to the sqlite3 database.
 *
 * The returned promise will resolve to the sqlite3 db object when the load
 * completes.
 *
 * @param {String} file [optional] Path to the mtgjson file to import
 * @param {Object} opts [optional] The options hash
 * @param {Function} cb [optional] The callback function
 * @return {Promise} Resolves to the sqlite3 cb object
 */
var load = function(file, opts, cb) {
  'use strict';
  /*code*/
};

module.exports = load;
