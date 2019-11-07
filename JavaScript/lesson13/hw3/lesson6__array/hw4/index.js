function uniqueCount(array) {

    let uniqueArr = [];

    for (let i = 0; i < array.length; i++) {

        let unique = false;

        for (let j = 0; j < uniqueArr.length; j++) {
            if (array[i] == uniqueArr[j]) {
                unique = true;
            }
        }
        if (!unique) {
            uniqueArr.push(array[i]);
        }
    }

    return uniqueArr.length;
}