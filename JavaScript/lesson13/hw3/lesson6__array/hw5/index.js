function removeDuplicates(array) {

    let newArrWithoutDupl = [];

    for (let i = 0; i < array.length; i++) {

        let duplicate = false;

        for (let j = 0; j < newArrWithoutDupl.length; j++) {
            if (array[i] == newArrWithoutDupl[j]) {
                duplicate = true;
            }
        }
        if (!duplicate) {
            newArrWithoutDupl.push(array[i]);
        }
    }

    return newArrWithoutDupl;
}