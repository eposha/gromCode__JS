export const getSum = (a, b) => {

    if (a > b || a <= 0 || b <= 0) return null;
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(getSum(1, 10));