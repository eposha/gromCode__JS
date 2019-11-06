const multiRound = arr => [
    Math.floor(arr * 100) / 100,
    Math.round(arr * 100) / 100,
    Math.ceil(arr * 100) / 100,
    Math.trunc(arr * 100) / 100, +arr.toFixed(2)
];


// const array = [555.5, -4.7, 8.88888, 2.54];
// console.log(multiRound(55.5));