export const createCalculator = () => {
    let count = 0;

    return {
        add: num => {
            count += num;
        },

        decrease: num => {
            count -= num;
        },

        reset: () => {
            count = 0;
        },
        getDemo: () => {
            return count;
        },
    }
}

// const result = createCalculator();
// console.log(result);
// result.decrease(5);

// result.getDemo();