const flatArray = arr => {
    let [...copy] = arr;
    return copy.flat();
};