export const squareArray = array => {
    if (!Array.isArray(array)) return null;


    return array.map(num => num * num);

};


// const someArray = [];
// console.log(squareArray(someArray));