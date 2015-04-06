'use strict';

var assert = require('assert');
var Filetype = require('./index.js');

describe('Filetype', function() {

  describe('.get', function() {

    it('returns language for the given filename', function() {
      assert.deepEqual(Filetype.get('foo.js'), ['JavaScript']);
    });

    it('returns undefined when filename could not be resolved', function() {
      assert.equal(Filetype.get('foo.barbaz'), undefined);
    });
  });

  describe('.is', function() {

    it('returns true when filename is equal to the given language', function() {
      assert.equal(Filetype.is('foo.h', 'C++'), true);
    });

    it('returns false when filename is not equal to the given language', function() {
      assert.equal(Filetype.is('foo.h', 'JavaScript'), false);
    });

    it('returns undefined when filename could not be resolved', function() {
      assert.equal(Filetype.is('foo.barbaz', 'JavaScript'), undefined);
    });
  });

});
