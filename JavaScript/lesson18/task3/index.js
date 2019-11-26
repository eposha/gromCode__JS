function sumOfSquares() {
    return [...arguments].map(i => Math.pow(i, i)).reduce((prev, current) => {
        return prev + current
    });
};


// console.log(sumOfSquares(5, 6, 7, 5));

export { sumOfSquares }