const expect = require('chai').expect;
const array = require('../array')

describe('Array', () => {
        it('Should return the sum of all elements in the array', () => {
            console.log(array.map([3, 5, 2]))
        });

        it('Should return the sum of all elements in the array', () => {
            console.log(array.filter([3, 5, 2]))
        });

        it('Should return the sum of all elements in the array', () => {
            expect(array.sum([4, 3, 5, 2])).to.equal(14)
        });
        it('Should sort the array in ascent order', () => {
            console.log(array.sort([3, 5, 2]))
        });
    });
