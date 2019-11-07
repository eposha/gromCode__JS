export const getAdults = obj => {
    let age = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            age[key] = obj[key];
        }
    }
    return age;
}

// result = 'false'
// if (typeof { name: 'Andrei' } == 'object') {
//     result = 'true';
// }
// console.log(result)
// console.log(getAdults({ a: 1, b: 2, c: 25 }));