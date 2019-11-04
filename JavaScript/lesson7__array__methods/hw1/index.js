const squareElements = array => {
    if (!Array.isArray(array)) {
        return null;
    };

    return array.map(num => num * num);

};


// const someArray = [5, 6, 9, 7, 4, 1, 5];
// console.log(squareElements(someArray));