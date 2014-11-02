
/**
 * Get a CMC breakdown for a deckfile
 *
 * The `deckFile` should be a text files in mtgo deck format.
 *
 * The `opts` options hash can be used to pass configuration options, valid
 * options include:
 *
 * - `maindeck`: A boolean: Whether or not cards in the maindeck should be
 *   counted. Defaults to `true`.
 * - `sideboard`: A boolean: Whether or not cards in the sideboard should be
 *   counted. Defaults to `false`.
 *
 * Pass a callback function `cb` as the final parameter. It will be given an
 * error (or `null` if there was none) and an object whose keys are total CMCs
 * and values were the counts for that CMC. E.g.:
 *
 * ```
 * {
 *   1: 12,
 *   2: 20,
 *   3: 0,
 *   5: 4
 * }
 * ```
 *
 * Note you can use `Object.keys` to get a list of the valid CMCs for you deck.
 *
 * The returned promise will resolve to the curve breakdown object.
 *
 * @see http://archive.wizards.com/Magic/Magazine/Article.aspx?x=mtgcom/arcana/678
 * @param {String} deckFile Path to the mtgo formatted deck file
 * @param {Object} opts [optional] The options hash
 * @param {Function} cb [optional] The callback function
 * @return {Promise} Resolves to the curve object
 */
var curve = function(deckFile, opts, cb) {
  'use strict';
  /*code*/
};

module.exports = curve;
