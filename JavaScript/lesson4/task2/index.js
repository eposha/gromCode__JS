let m = 8,
    n = 18,
    result = 1;

do {
    if (m % 2 === 1) {
        result *= m;
    }
    m++
} while (m <= n);

// console.log(result);