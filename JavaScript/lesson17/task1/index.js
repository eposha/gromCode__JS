const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}


export { user };

console.log(user.getFullName());


// const func = user.getFullName().bind(user);

// console.log(func());
//.bind();