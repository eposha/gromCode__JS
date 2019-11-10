export const getSquaredArray = arr =>
    arr.map(i => i * i);

export const getOddNumbers = arr =>
    arr.filter(i => (i % 2 === 1));

export default (a, b) => a + b;