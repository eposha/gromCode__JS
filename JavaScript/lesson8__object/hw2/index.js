const getAdults = obj => {
    let age = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            age[key] = obj[key];
        }
    }
    return age;
}