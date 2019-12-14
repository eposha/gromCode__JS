// export const sum = (value) => {
//     let arr = [];
//     let num = value;
//     for (let i = 0; i < value; i++) {
//         arr.push(num);
//         num -= 1;
//     };

//     return arr.reduce((acc, next) => acc + next);
// };

const sum = (value) => {
    let result = 0 + value;

    while (value > 0) {
        sum(value - 1)
    };
    return result;
};

console.log(sum(4));