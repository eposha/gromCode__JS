let numbers = [7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 1, 2, 3, 5, 4, 88, 99, 88, 33, 45, 2, 3, 101, 62, 3, 55, 24, 92, 4, 1000, 10032, 1000, 928, 32, 7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 1, 2, 3, 5, 4, 88, 99, 88, 33, 45, 2, 3, 101, 62, 3, 55, 24, 92, 4, 1000, 10032, 1000, 928, 32, 111111111111111111199999999999999999999999999555555555555555555555559999999999999999999999999555555555888888888, 28];

function uniqueCount(array) {
    let quantityUniqueCount = array.length;
    nextStep: for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                for (let c = j + 1; c < array.length; c++) {
                    if (array[i] == array[c]) {
                        quantityUniqueCount--;
                        continue nextStep;
                    }
                }
            }
        }

    }
    return quantityUniqueCount;
}



console.log(uniqueCount(numbers));