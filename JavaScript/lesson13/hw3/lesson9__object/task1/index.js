const getAdults = obj => {
    return Object.entries(obj)
        .filter(user => user[1] >= 18)
        .map(user => user[0]);
}

// console.log(getAdults({
//     'Tom': 18,
//     'Bob': 24,
//     'Ivan': 17.
// }));