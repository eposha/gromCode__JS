const sortDesc = numbers =>

    // let [...sortedArray] = numbers;
    // let sortedArray = numbers.slice();
    numbers.slice().sort((a, b) => b - a);

// return sortedArray.sort((a, b) =>
//     b - a
// );


console.log(sortDesc([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));