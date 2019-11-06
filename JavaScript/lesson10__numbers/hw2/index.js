const getRandomNumbers = (length, start, end) => {

    const finishArray = Array(length)
        .fill().map(i => Math.floor(Math.random() * (end - start + 1)) + start);

    let checkInteg = false;

    for (let i = 0; i < finishArray.length; i++) {
        if (Number.isInteger(i)) {
            checkInteg = true;
            break;
        }
    }

    if (start > end && !checkInteg) {
        return null;
    } else {
        return finishArray;
    }


}


console.log(getRandomNumbers(5, 1, 3));