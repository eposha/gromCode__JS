const m = 8;
const n = 18;
let result = 1;
let a = m;

do {
    if (a % 2 != 0) {
        result *= a;
    }
    a++
} while (a <= n);

// console.log(result);5