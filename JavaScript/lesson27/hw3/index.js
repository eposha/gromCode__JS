export const sum = (value) => {
    let arr = [];
    let num = value;
    for (let i = 0; i < value; i++) {
        arr.push(num);
        num -= 1;
    };

    return arr.reduce((acc, next) => acc + next);
};

// export const sum = (value) => {
//     return value !== 1 ? value + sum(value - 1) : 1;
// };

// console.log(sum(4));