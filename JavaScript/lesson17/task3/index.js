// // defer (func, ms) => Function

// function defer(func, ms) {
//     return function() {
//         setTimeout(func, ms);
//     }
// }


// const sayHi = () => {
//     console.log('Hi');
// };

// // sayHi();

// const deferredSayHi = defer(sayHi, 2000);

// deferredSayHi();





// // defer (func, ms) => Function

// function defer(func, ms) {
//     return function() {
//         setTimeout(() => func(...arguments), ms);
//     }
// }


// const sum = (a, b) => {
//     console.log(a + b);
// };

// // sayHi();

// const deferredSayHi = defer(sum, 2000);

// deferredSayHi(1, 6);



// defer (func, ms) => Function

function defer(func, ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
};


export { defer };