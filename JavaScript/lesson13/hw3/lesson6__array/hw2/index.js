function reverseArray(arr) {
    let reversArr = [];

    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 1; i <= arr.length; i++) {
        reversArr.push(arr[arr.length - i]);
    }
    return reversArr;
}