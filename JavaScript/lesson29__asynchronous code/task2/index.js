//pinger(num, period)

const pinger = (num, period) => {
    let i = num;
    console.log('Ping');
    const interval = setInterval(() => {
        if (--i > 0) {
            console.log('Ping');
        } else {
            clearInterval(interval);
        }

    }, period);
};

pinger(5, 1000);