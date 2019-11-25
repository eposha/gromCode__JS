const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'Tom', age: 16, email: 'example@server.com' },
        { name: 'John', age: 18, email: 'example@server.com' }
    ],
    getInvitations() {
        return this.guests.filter(i => i.age >= 18).map(i => {
            return {
                email: i.email,
                message: `Dear ${i.name}! ${this.message}`,
            }
        })
    }
}

// console.log(event.getInvitations());

export { event };