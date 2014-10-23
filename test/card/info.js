
'use strict';

var lib = require('./util').lib
  , expect = require('chai').expect;

describe('mtg.card.info', function() {

  var info = lib('card/info')
  
  it('should be able to get info for a card', function(done) {
    info('brainstorm', function(err, card) {
      expect(err).to.be.undefined;
      expect(card.name).to.be('Brainstorm');
      done();
    });
  });

  it('should generate an error when it cannot find a card', function(done) {
    info('foobarasaurus', function(err, card) {
      expect(err).to.be.an('Error');
      expect(card).to.not.be.ok;
      done();
    });
  });

  it('should resolve (promise) on success', function(done) {
    info('brainstorm')
      .then(function(card) {
        expect(card.name).to.be('Brainstorm');
        done();
      }, function(reason) {
        // Fail loudly, this should not happen
        expect(reason).to.be(!reason);
        done();
      })
  });

  it('should reject (promise on failure', function() {
    info('brainstorm')
      .then(function(card) {
        // Fail loudly, this should not happen
        expect(card).to.be(!card);
        done();
      }, function(reason) {
        expect(reason).to.be.an('Error');
        done();
      })
  });
});
