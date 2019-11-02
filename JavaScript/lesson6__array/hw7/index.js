function checker(arr) {
    let max = arr[0],
        min = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    if (max + min > 1000) {
        return true;
    } else {
        return false;
    }
}