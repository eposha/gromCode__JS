const splitText = (str, len = 10) => {

    if (typeof str !== 'string') return null;

    const arr = [];
    let startPosition = 0;

    while (true) {
        let chunk = str.substr(startPosition, len);
        if (chunk.length === 0) break;
        arr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
    }

    return arr.join('\n');
}


// console.log(splitText('zjdhbvkzdfbvlkdfzbvkdlzfvbkzdfv'));