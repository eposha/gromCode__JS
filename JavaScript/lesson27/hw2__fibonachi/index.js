export const maxFibonacci = (value) => {
    let prev = 0,
        next = 1;

    if (value < 1) {
        return 0;
    };

    for (let i = 0; i < value; i++) {
        if (prev > value) {
            return next - prev;
        } else {
            next = prev + next;
            prev = next - prev;
        }
    };
    return prev;
};

// console.log(maxFibonacci(1));
// maxFibonacci(5);