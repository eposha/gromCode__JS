export const getCustomersList = obj => {

    const copyObj = JSON.parse(JSON.stringify(obj));
    const arrWithObj = Object.values(copyObj);
    const objWithKey = Object.keys(copyObj);


    for (let i = 0; i < arrWithObj.length; i++) {
        arrWithObj[i].id = objWithKey[i];
    }


    return arrWithObj.sort((a, b) => a.age > b.age ? 1 : -1);
}



const customers = {
    'customer-id-1': {
        name: 'William',
        age: -54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    'customer-id-3': {
        name: 'Inna',
        age: 22
    },
    'customer-id-4': {
        name: 'Ivan',
        age: 18
    },
};

console.log(getCustomersList(customers));


// console.log(customers);

// const obj = {
//     'Tom': 18,
//     'Bob': 24,
//     'Ivan': 17.
// }

// console.log(copyObj({
//     'Tom': 18,
//     'Bob': 24,
//     'Ivan': 17.
// }));