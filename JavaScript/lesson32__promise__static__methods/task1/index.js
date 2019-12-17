function asyncSum(...asyncNumbers) {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Can\'t calculate')));
};

function getSum(numbers) {
    return numbers
        .filter(elem => !isNaN(elem))
        .reduce((acc, elem) => acc + Number(elem), 0);
};

export { asyncSum };




// const detValueWithDelay = value => new Promise(resolve => resolve(value));

// const asyncNum1 = detValueWithDelay(56, 1000),
//     asyncNum2 = 'find',
//     asyncNum3 = detValueWithDelay(12, 2000);

// const getSum = numbers => numbers
//     .filter(value => !isNaN(value))
//     .reduce((acc, num) => acc + +num, 0);


// const asyncSum = (...asyncNumbers) => {
//     return Promise.all(asyncNumbers)
//         .then(numbers => getSum(numbers))
//         .catch(() => Promise.reject(new Error(`Can't calculate`)))
// };

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
//     .then(result => console.log(result))
//     .catch(result => console.log(result));

// export { asyncSum };













// const detValueWithDelay = (value, daley) => new Promise(resolve => {
//     setTimeout(() => {
//         console.log(value);
//         resolve(value);
//     }, daley);
// });

// const asyncNum1 = detValueWithDelay(56, 1000),
//     asyncNum2 = detValueWithDelay(4, 2000),
//     asyncNum3 = detValueWithDelay(12, 2000);

// const getSum = numbers =>
//     numbers
//     .filter(value => !isNaN(value))
//     .reduce((acc, num) => acc + +num, 0);


// const asyncSum = (...asyncNumbers) => {
//     return Promise.all(asyncNumbers)
//         .then(numbers => getSum(numbers));
// };

// asyncSum(asyncNum1, asyncNum2, asyncNum3)
//     .then(result => console.log(result));










// const detValueWithDelay = (value, daley) => new Promise(resolve => {
//     setTimeout(() => {
//         console.log(value);
//         resolve(value);
//     }, daley);
// });

// const asyncNum1 = detValueWithDelay(56, 1000),
//     asyncNum2 = detValueWithDelay(undefined, 2000),
//     asyncNum3 = detValueWithDelay('10', 2000);

// // const getSum = numbers =>
// //     numbers
// //     .filter(value => !isNaN(value))
// //     .reduce((acc, num) => acc + +num, 0);


// const asyncSum = (...asyncNumbers) => {
//     return Promise.allSettled(asyncNumbers)
//         .then(numbers => console.log(numbers));
// };

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
//     .then(result => console.log(result));