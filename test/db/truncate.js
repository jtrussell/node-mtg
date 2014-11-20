
'use strict';

var lib = require('./util').lib
  , fx = require('./util').fixture
  , expect = require('chai').expect;

describe('mtg.db.truncate', function() {
  var trunc = lib('db/truncate');

  it('should be able to remove all data from the sqllite db', function(done) {
    // ...
    done();
  });

  it('should not complain if the db is already empty', function(done) {
    // ...
    done();
  });

  it('should not complain if there is no db file at all', function(done) {
    // ...
    done();
  });
});
