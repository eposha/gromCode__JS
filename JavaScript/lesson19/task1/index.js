const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
}


const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    },
};

Object.setPrototypeOf(ship, vehicle);

// ship.stopMachine();

export { vehicle, ship }










// const vehicle = {
//     move() {
//         console.log(`${this.name} moving`);
//     },
//     stop() {
//         console.log(`${this.name} stopped`);
//     },
// };

// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
//     liftAnchorDown() {
//         console.log('lifting anchor down');
//     },
//     liftAnchorUp() {
//         console.log('lifting anchor up');
//     },
// };



// Object.setPrototypeOf(ship, vehicle);
// ship.move();











// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(value) {
//         const [firstName, lastName] = value.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// };
// user.fullName = 'Tom Hardy';
// console.log(user.fullName);