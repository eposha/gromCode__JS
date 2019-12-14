export const maxFibonacci = (value) => {
    let prev = 0,
        next = 1;

    for (let i = 0; i < value; i++) {
        if (prev > value) {
            return prev = next - prev;
        } else {
            next = prev + next;
            prev = next - prev;
        }
    };
};