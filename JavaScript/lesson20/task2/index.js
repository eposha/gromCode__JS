class Vehicle {
    constructor(name, numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
        this.name = name;
    };

    move() {
        console.log(`${this.name} is moving`);
    };
    stop() {
        console.log(`${this.name} stopped`);
    };
};


class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels, );
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
    };

    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    };
};

export { Vehicle, Ship }

// const ship1 = new Ship('Ivan', 4, '24 knots');
// const ship2 = new Ship('Durin', 12, '32 knots');
// ship1.stop();
// ship2.move();

// console.log(ship1);