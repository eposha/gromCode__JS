const getSpecialNumbers = numbers => {
    let specialNumbers = [];

    function checkIfSpecialNumber(num) {
        if (num % 3 == 0) {
            specialNumbers.push(num);
        }
    }

    numbers.forEach(checkIfSpecialNumber);

    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % 3 == 0) {
    //         specialNumbers.push(numbers[i]);
    //     }
    // }
    return specialNumbers;
};