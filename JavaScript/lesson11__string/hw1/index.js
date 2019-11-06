const splitString = (text, num = 10) => {
    if (typeof text !== 'string') return null;

    const arr = [];
    let startPosition = 0;

    while (true) {

        let chunk = text.substr(startPosition, num);

        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < num) {
            chunk = chunk + '.'.repeat(num - chunk.length);
        };
        arr.push(chunk);
        startPosition += num;
    }

    return arr;
}

// console.log(splitString('zjdhbvkzdfbvlkdfzbvkdlzfvbkzdfv'));