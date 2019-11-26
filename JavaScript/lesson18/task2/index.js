const wallet = {
    transactions: [500, 700, 650, 499, 840],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
};


// console.log(wallet.getMax());

export { wallet };