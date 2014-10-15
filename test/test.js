'use strict';

var deepTrim = require('../index');
var expect = require('expect.js');

describe('deep-string', function () {
    it('should ignore nulls', function () {
        var str = null;

        expect(deepTrim(str)).to.be(null);
    });

    it('should ignore undefined', function () {
        var str;

        expect(deepTrim(str)).to.be(undefined);
    });

    it('should ignore Dates', function () {
        var str = new Date('2001-01-01');

        expect(deepTrim(str)).to.eql(new Date('2001-01-01'));
    });

    it('should ignore empty string', function () {
        var str = '';

        expect(deepTrim(str)).to.be('');
    });

    it('should trim a string', function () {
        var str = '   a ';

        expect(deepTrim(str)).to.be('a');
    });

    it('should trim strings inside an array', function () {
        var strArray = ['   a ', 1, '', 'a', '             a'];

        expect(deepTrim(strArray)).to.eql(['a', 1, '', 'a', 'a']);
    });

    it('should trim strings inside an object', function () {
        var strArray = { a: '  a', b: 'b  ', c: '   c ', d: 'd' };

        expect(deepTrim(strArray)).to.eql({ a: 'a', b: 'b', c: 'c', d: 'd' });
    });

    it('should trim strings recursively through an object', function () {
        var strArray = { a: '  a', b: 'b  ', c: { ca: '   ca', cb: 'cb   ' }, d: 'd' };

        expect(deepTrim(strArray)).to.eql({ a: 'a', b: 'b', c: { ca: 'ca', cb: 'cb' }, d: 'd' });
    });

    it('should trim strings recursively through an array', function () {
        var strArray = [ '  a', 'b  ', ['   ca', 'cb   '], 'd' ];

        expect(deepTrim(strArray)).to.eql([ 'a', 'b', ['ca', 'cb'], 'd' ]);
    });

    it('should trim strings recursively through an object containing an array', function () {
        var strArray = { a: '  a', b: 'b  ', c: ['   ca', 'cb   '], d: 'd' };

        expect(deepTrim(strArray)).to.eql({ a: 'a', b: 'b', c: ['ca', 'cb'], d: 'd' });
    });

    it('should trim strings recursively through an object containing an array leaving all other values untouched', function () {
        var strArray = { a: '  a', b: 'b  ', c: ['   ca', 'cb   '], d: 'd', e: null, f: undefined, h: 1, i: false, j: new Date('2001-01-01') };

        expect(deepTrim(strArray)).to.eql({ a: 'a', b: 'b', c: ['ca', 'cb'], d: 'd', e: null, f: undefined, h: 1, i: false, j: new Date('2001-01-01') });
    });

    it('should trim strings recursively through an array containing an object', function () {
        var strArray = ['  a', 'b  ', { ca: '   ca', cb: 'cb   ' }, 'd'];

        expect(deepTrim(strArray)).to.eql(['a', 'b', { ca: 'ca', cb: 'cb' }, 'd']);
    });

    it('should trim strings recursively through an array containing an object leaving all other values untouched', function () {
        var strArray = ['  a', 'b  ', { ca: '   ca', cb: 'cb   ' }, 'd', null, undefined, 1, false, new Date('2001-01-01')];

        expect(deepTrim(strArray)).to.eql(['a', 'b', { ca: 'ca', cb: 'cb' }, 'd', null, undefined, 1, false, new Date('2001-01-01')]);
    });
});
