export const createArrayOfFunctions = (num) => {

    if (num == undefined)
        return arr;
    if (typeof num !== 'number')
        return null;

    let arr = [];

    for (let i = 0; i < num; i++) {
        arr[i] = () => {
            return i;
        }
    }

    return arr;
};

// console.log(createArrayOfFunctions());