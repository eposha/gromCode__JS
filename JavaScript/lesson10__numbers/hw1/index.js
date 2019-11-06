const getTotalPrice = arr => {

    return '$' + arr.reduce((a, b) => a + b).toFixed(2);

}

// const test = [5.5555, 9.3254, 87, -24, 5, -5];


// console.log(getTotalPrice(test));