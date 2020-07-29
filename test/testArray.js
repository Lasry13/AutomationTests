const expect = require('chai').expect;

const arrayMap = (arr) => {
    return arr.map(a => a + 2)
}

const arrayFilter = (arr) => {
    return arr.filter(a => a % 2 === 0)
}

const arraySum = (arr) => {
    return arr.reduce((a, b) => a + b)
}

const arraySort = (arr) => {
    return arr.sort()
}

describe('Array', () => {
    describe('#testArrayMap', () => {
        it('Should return the sum of all elements in the array', () => {
            console.log(arrayMap([3, 5, 2]))
        });
    });

    describe('#testArrayFilter', () => {
        it('Should return the sum of all elements in the array', () => {
            console.log(arrayFilter([3, 5, 2]))
        });
    });

    describe('#testArraySum', () => {
        it('Should return the sum of all elements in the array', () => {
            expect(arraySum([4, 3, 5, 2])).to.equal(14)
        });
    });
});

describe('Array', () => {
    describe('#sortArray', () => {
        it('Should sort the array in ascent order', () => {
            console.log(arraySort([3, 5, 2]))
        });
    });
});
