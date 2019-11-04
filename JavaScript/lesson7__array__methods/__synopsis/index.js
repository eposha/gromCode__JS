// forEach

const getSpecialNumbers = numbers => {
    let specialNumbers = [];

    numbers.forEach(num => {
        if (num % 3 == 0) {
            specialNumbers.push(num);
        }
    });

    // function checkIfSpecialNumber(num) {
    //     if (num % 3 == 0) {
    //         specialNumbers.push(num);
    //     }
    // }

    // numbers.forEach(checkIfSpecialNumber);

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % 3 == 0) {
    //         specialNumbers.push(numbers[i]);
    //     }
    // }
    return specialNumbers;
};

// console.log(getSpecialNumbers([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));



//filter

const getSpecialNumbers = numbers => {

    const result = numbers.filter(num => {
        if (num % 3 == 0) {
            return true;
        } else {
            return false;
        }
    });
    return result;
};
console.log(getSpecialNumbers([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));


const getSpecialNumbers = numbers => {

    const result = numbers.filter(num => {
        return num % 3 == 0 ? true : false;
    });
    return result;
};
console.log(getSpecialNumbers([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));


const getSpecialNumbers = numbers => {

    const result = numbers.filter(num => {
        return num % 3 == 0;
    });
    return result;
};
console.log(getSpecialNumbers([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));


const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

console.log(getSpecialNumbers([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));



// sort 

const sortArray = numbers => {
    const sortedArray = numbers
        .sort();

    return sortedArray;
};

console.log(sortArray([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));

const sortDesc = numbers =>

    // let [...sortedArray] = numbers;
    // let sortedArray = numbers.slice();
    numbers.slice().sort((a, b) => b - a);

// return sortedArray.sort((a, b) =>
//     b - a
// );


console.log(sortDesc([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));


// [1,[2,3,4,5],6,[7]] => [1,2,3,4,5,6,7] 
const flatArray = arr => {
    let flatArray = arr
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, []);
    return flatArray;
};



// что делает reduce
// [1,2,3,4] => 10
console.log([1, 2, 3, 4].reduce(function(accumulator, num) {
    return accumulator + num
}));



//flat
const flatArray = arr =>
    arr.flat();

console.log(flatArray([1, [2, 3, 4, 5], 6, [7]]));