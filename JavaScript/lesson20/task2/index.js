class Vehicle {
    constructor(name, hasWheels) {
        this.hasWheels = hasWheels;
        this.name = 'Argo';
    };

    move() {
        console.log(`${this.name} is moving`);
    };
    stop() {
        console.log(`${this.name} stopped`);
    };
};


class Ship extends Vehicle {
    constructor(name, speed) {
        super(name, false);
        this.speed = speed;
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

const ship1 = new Ship('Aurora', 17);

ship1.stop();

// console.log(ship1);