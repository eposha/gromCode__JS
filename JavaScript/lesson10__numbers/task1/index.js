const getFiniteNumbers = arr => arr
    .filter(a => Number.isFinite(a));

const getFiniteNumbersV2 = arr => arr
    .filter(a => isFinite(a));

const getNaN = arr => arr
    .filter(a => Number.isNaN(a));

const getNaNV2 = arr => arr
    .filter(a => isNaN(a));

const getIntegers = arr => arr
    .filter(a => Number.isInteger(a));

const array = [1, 5.55, undefined, null, Infinity, 'text', '17text', NaN];


// console.log(getIntegers(array));
// console.log(array);