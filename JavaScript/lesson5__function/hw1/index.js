function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        for (d = 2; d <= i; d++) {
            if (n % d == 0) {
                break;
            } else {
                console.log(i);
            }
        }
        // если нет нетривиальных делителей, то простое

    }

};

getPrimes(7);