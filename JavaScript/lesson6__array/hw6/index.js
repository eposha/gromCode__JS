function withdraw(clients, balances, client, amount) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] == client) {
            if (balances[i] - amount >= 0) {
                return balances[i] - amount;
            } else {
                return -1;
            }
        }
    }
}