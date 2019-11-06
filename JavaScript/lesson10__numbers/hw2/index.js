const getRandomNumbers = (length, start, end) => {
    if (start > end) return null;
    // const arrLength = Array(length);

    // const arrFinish = arrLength.slice(Math.abs(+start.toFixed()), Math.abs(+end.toFixed()));


    return Array(length).fill().map(i => Math.floor(Math.random() * (end - start + 1)) + start)


}


console.log(getRandomNumbers(5, 1, 3));