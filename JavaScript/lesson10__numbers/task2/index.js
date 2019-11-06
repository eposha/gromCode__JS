const getParsedIntegers = arr => arr
    .map(a => Number.parseInt(a));


const getParsedIntegersV2 = arr => arr
    .map(a => parseInt(a));

const getParsedFloats = arr => arr
    .map(a => Number.parseFloat(a));

const getParsedFloatsV2 = arr => arr
    .map(a => parseFloat(a));



// const array = [1, 5.55, undefined, null, Infinity, 'text', '17text', NaN];




// console.log(getParsedIntegersV2(array));
// console.log(array);