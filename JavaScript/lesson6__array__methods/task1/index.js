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