const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
    setFullName(fullName) {
        this.firstName = fullName.split(' ')[0];
        this.lastName = fullName.split(' ')[1];
    }
};


export { user };