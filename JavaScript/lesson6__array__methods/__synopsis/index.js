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