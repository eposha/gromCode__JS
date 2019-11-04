// const copyObj = obj => {
//     const copyArray = Object.assign({}, obj);
//     return copyArray;
// }

const copyObj = obj => Object.assign({}, obj);


console.log(copyObj({
    'Tom': 18,
    'Bob': 24,
    'Ivan': 17.
}));