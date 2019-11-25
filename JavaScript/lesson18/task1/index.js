const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 18, email: 'example@server.com' },
        { name: 'Tom', age: 16, email: 'exa@server.com' },
        { name: 'Bob', age: 62, email: 'exa@server.com' },
        { name: 'John', age: 6, email: 'exa@server.com' },
        { name: 'Ann', age: 21, email: 'exa@server.com' },
    ],
    getInvitations() {
        return this.guests
            .filter(i => i.age >= 18)
            .map(({ name, email }) => ({
                email: `${email}`,
                message: `Dear ${name}! ${this.message}`
            }));
    }
}

// console.log(event.getInvitations());

export { event };