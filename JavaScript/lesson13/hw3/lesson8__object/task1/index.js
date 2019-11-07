const transformToObject = arr => {
    let obj = {};

    arr.forEach(item => {
        obj[item] = item;
    });

    return obj;
}

// console.log(transformToObject([]));