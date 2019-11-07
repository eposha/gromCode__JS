export const pickProps = (obj, arr) => {
    let newObj = {};

    for (let i of arr) {
        for (let key in obj) {
            if (i == key) {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));