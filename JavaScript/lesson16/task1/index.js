export const createArrayOfFunctions = (num) => {
    let arr = [];


    if (num == undefined) {
        return arr;
    } else if (typeof num !== 'number') {
        return null;
    };

    for (let i = 0; i < num; i++) {
        arr[i] = () => {
            return i;
        }
    }
    // arr.length = num;
    return arr;
};

// console.log(createArrayOfFunctions());