const getRandomNumbers = (length, start, end) => {
    if (start > end) return null;

    if (function getRandomInt(start, end) {
            start = Math.ceil(min);
            end = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        });


    const finishArray = Array(length)
        .fill().map(i => Math.floor(Math.random() * (end - start + 1)) + start);

    let checkInteg = false;

    for (let i = 0; i < finishArray.length; i++) {
        if (Number.isInteger(i)) {
            checkInteg = true;
            break;
        }
    }

    if (!checkInteg) {
        return null;
    } else {
        return finishArray;
    }


}


console.log(getRandomNumbers(5, 1, 3));