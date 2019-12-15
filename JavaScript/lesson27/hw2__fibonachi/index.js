export const maxFibonacci = (value) => {
    let prev = 0,
        next = 1;

    for (let i = 0; i < value; i++) {
        next = prev + next;
        prev = next - prev;
    };
    return prev;
};

// console.log(maxFibonacci(7));