let m = 8;
const n = 18;
let result = 1;

do {
    if (m % 2 === 1) {
        result *= m;
    }
    m++
} while (m <= n);

// console.log(result);