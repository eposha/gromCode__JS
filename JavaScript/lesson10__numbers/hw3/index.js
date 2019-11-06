const superRound = (num, fraction) => {

    return [
        Math.floor(num * fraction) / fraction,
        Math.round(num * fraction) / fraction,
        Math.ceil(num * fraction) / fraction,
        Math.trunc(num * fraction) / fraction, +num.toFixed(fraction)
    ]

}

const testNum = -5.555;
const testFraction = 1;

console.log(superRound(testNum, testFraction));