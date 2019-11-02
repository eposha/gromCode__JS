function uniqueCount(array) {

    let uniqueArr = [];

    for (let i = 0; i < array.length; i++) {

        let dublicate = false;

        for (let j = 0; j < uniqueArr.length; j++) {
            if (array[i] == uniqueArr[j]) {
                dublicate = true;
            }
        }
        if (!dublicate) {
            uniqueArr.push(array[i]);
        }
    }

    return uniqueArr;
}