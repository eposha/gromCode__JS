const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


export { user };

// console.log(user.getFullName());

// console.log(user.getFullName());

// export {}

// const func = user.getFullName().bind(user);

// console.log(func());
//.bind();