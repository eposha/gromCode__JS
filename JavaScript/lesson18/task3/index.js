function sumOfSquares() {
    return [...arguments].map(i => i ** 2).reduce((prev, current) => {
        return prev + current
    });
};


// console.log(sumOfSquares(5, 5));

export { sumOfSquares }