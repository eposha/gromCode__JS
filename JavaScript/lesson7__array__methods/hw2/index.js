function reverseArray(arr) {
    let reverseArr = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    arr.forEach(item => reverseArr.unshift(item));

    return reverseArr;
}


console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));