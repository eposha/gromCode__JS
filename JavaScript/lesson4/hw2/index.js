const m = 1;
const n = 50;
let result = 0;
let b = m;
let c = n;

while (b <= c) {
    if ((c - b % 2 == 0) && (c - b % 4 != 0)) {
        result += c - b;
    } else if (c - b == 0) {
        result -= c - b;
    } else if (c - b % 4 == 0) {
        result *= c - b;
    } else if (c - b % 5 === 0) {
        console.log(c - b);
    }
    c--
}

console.log(result);