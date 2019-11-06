const superRound = (num, frac) => {
    const fraction = Math.pow(10, frac);
    return [
        Math.floor(num * fraction) / fraction,
        Math.round(num * fraction) / fraction,
        Math.ceil(num * fraction) / fraction,
        Math.trunc(num * fraction) / fraction, +num.toFixed(frac)
    ]

}

// const testNum = -5.55566666666;
// const testFraction = 20;

// console.log(superRound(testNum, testFraction));