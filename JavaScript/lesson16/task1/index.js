export const createArrayOfFunctions = (num = 'empty') => {
    let arr = [];
    // arr.length = num;

    if (num === 'empty') {
        return arr;
    } else if (typeof num !== 'number') {
        return null;
    };

    for (let i = 0; i < num; i++) {
        arr[i] = () => {
            return i;
        }
    }
    return arr;
};

// console.log(createArrayOfFunctions(9)[9]());