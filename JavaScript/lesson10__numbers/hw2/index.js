const getRandomNumbers = (length, start, end) => {
    const startFixed = Math.abs(+start.toFixed());
    const endFixed = Math.abs(+end.toFixed());
    console.log(startFixed);
    console.log(endFixed);

    let arrLength = Array(length);
    return arrLength.slice(startFixed, endFixed);
}


// const test = [5,6,9,4,5.55,8,8.65];

// console.log(getRandomNumbers(5, -1.25, -6,6));