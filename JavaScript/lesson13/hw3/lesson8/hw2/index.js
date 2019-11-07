export const getAdults = obj => {
    let age = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            age[key] = obj[key];
        }
    }
    return age;
}

// console.log(getAdults({ a: 1, b: 2, c: 25 }));