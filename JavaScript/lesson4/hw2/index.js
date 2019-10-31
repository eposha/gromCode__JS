const m = 10,
    n = 49;
let result = 0;

for (let i = m; i <= n; i++) {
    if ((i % 2 == 0) && (i % 4 != 0)) {
        result += i;
    }
}
// console.log(result);
for (let j = m; j <= n; j++) {
    if (j % 3 == 0) {
        result -= j;
    }
}

// console.log(result);

for (let p = m; p <= n; p++) {
    if (p % 4 == 0) {
        result *= p;
    }
}

for (let a = m; a <= n; a++) {
    if (a % 5 === 0) {
        console.log(a);
    }
}