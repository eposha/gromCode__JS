let sum = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 != 0) {
        console.log('Found');
        ++sum;
        if (sum * 5 > 5000) {
            console.log('Bigger');
        } else {
            console.log('Smaller or equal');
        }
    }
}
// console.log(sum);