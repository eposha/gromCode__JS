class Wallet {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Not enouhg funds');
            return;
        };

        this.balance -= amount;
    }
};

export { Wallet };

// const wallet1 = new Wallet();


// console.log(wallet1.getBalance());
// wallet1.deposit(45);
// console.log(wallet1.getBalance());
// wallet1.withdraw(34);
// console.log(wallet1.getBalance());
// wallet1.withdraw(25);