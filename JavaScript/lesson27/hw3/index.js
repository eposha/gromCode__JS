export const sum = (value) => {
    let arr = [];
    let num = value;
    for (let i = 0; i < value; i++) {
        arr.push(num);
        num -= 1;
    };

    return arr.reduce((acc, next) => acc + next);
};

// const sum = (value) => {

// };

// console.log(sum(4));