export const getEvenNumbers = arr =>
    arr.filter(i => (i % 2 !== 1));


console.log(getEvenNumbers([1, 2, 3, 4, 5]));