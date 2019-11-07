export const getSum = (a, b) => {

    if (a > b || typeof a !== 'number' || b !== 'number') return null;
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

// console.log(getSum(6, 3));