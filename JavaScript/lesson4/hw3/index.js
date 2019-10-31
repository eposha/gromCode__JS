let j = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 != 0) {
        console.log('Found');
        j += i;
        if (j * 5 > 5000) {
            console.log('Bigger');
        } else if (j * 5 == 5000) {
            console.log('equal');
        } else {
            console.log('Smaller');
        }
    }
}