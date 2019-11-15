export const createArrayOfFunctions = (num = 'empty') => {
    let arr = [];


    if (num === 'empty') {
        return arr;
    } else if (typeof num !== 'number') {
        return null;
    };

    for (let i = 0; i <= num; i++) {
        arr[i] = () => {
            return i;
        }
    }
    arr.length = num;
    return arr.length;
};

// console.log(createArrayOfFunctions(9));