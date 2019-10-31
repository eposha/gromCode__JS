let goodNumber = 17,
    anotherNumber = goodNumber;

console.log(goodNumber);

anotherNumber = 77;
console.log(anotherNumber);

let customer = {
        name: 'John',
        age: 17
    },
    anotherCustomer = customer;
console.log(customer.age);
customer.age = 20;
console.log(anotherCustomer.age);