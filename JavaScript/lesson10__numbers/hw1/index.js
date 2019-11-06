const getRandomNumbers = (length, start, end) => {
    const startFixed = start.toFixed();
    const endFixed = end.toFixed();

    let arrLength = Array(length);
    return arrLength.slice(startFixed, endFixed);
}


// const test = [5,6,9,4,5.55,8,8.65];

// console.log(getRandomNumbers(5, 1, 6));