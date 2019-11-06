const getRandomNumbers = (length, start, end) => {
    const noNumbersBetween = (end - start < 1) && Math.ceil(end) === Math.ceil(start);
    if (start > end || noNumbersBetween) return null;


    return Array(length)
        .fill().map(i => Math.floor(Math.random() * (end - start + 1)) + start);



}


console.log(getRandomNumbers(5, 1, 3));