const map = (arr) => {
    return arr.map(a => a + 2)
}

const filter = (arr) => {
    return arr.filter(a => a % 2 === 0)
}

const sum = (arr) => {
    return arr.reduce((a, b) => a + b)
}

const sort = (arr) => {
    return arr.sort()
}

module.exports.map = map
module.exports.filter = filter
module.exports.sum = sum
module.exports.sort = sort
