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