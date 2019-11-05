const getParsedIntegers = arr => arr
    .filter(a => Number.parseInt(a));

const getParsedIntegersV2 = arr => arr
    .filter(a => parseInt(a));

const getParsedFloats = arr => arr
    .filter(a => Number.parseFloat(a));

const getParsedFloatsV2 = arr => arr
    .filter(a => parseFloat(a));



// const array = [1, 5.55, undefined, null, Infinity, 'text', '17text', NaN];


// console.log(getParsedIntegers(array));
// console.log(array);