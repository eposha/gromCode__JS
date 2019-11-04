const sortDesc = numbers => {

    let [...sortedArray] = numbers;

    function comper(a, b) {
        if (a < b) {
            return +1;
        } else {
            return -1;
        }
    }
    sortedArray.sort(comper);

    return sortedArray;
};

// console.log(sortDesc([5, 9, 8, 7, 5, 55, 9, 66, 55, 95, 3, 65, 8, 66]));