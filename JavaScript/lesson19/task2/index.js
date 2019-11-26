const getOwnProps = (obj) => {
    const arrWithProps = [];
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
            arrWithProps.push(prop);
        }
    }

    return arrWithProps;
};

// const objj = {
//     name: 'Ivan',
//     surname: 'Petrov',
//     age() {
//         console.log(`15 years old`);
//     },
// };

// console.log(getOwnProps(objj));

export { getOwnProps };