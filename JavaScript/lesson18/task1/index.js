const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'Tom', age: 16, email: 'example@server.com' },
        { name: 'John', age: 18, email: 'example@server.com' }
    ],
    getInvitations() {
        let filterAge = this.guests.filter(i => i.age >= 18).map(i => {
            return i;
        });
        for (let i of filterAge) {
            return i;
        }
    }
}

// console.log(event.getInvitations());

export { event };