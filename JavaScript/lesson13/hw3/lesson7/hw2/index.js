export function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.reverse();

}


console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));