function getSum(arr) {
    let sum = 0;

    if (!Array.isArray) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}