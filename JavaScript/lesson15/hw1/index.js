export const createCalculator = () => {
    let count = 0;

    const add = num => {
        count += num;
    };

    const decrease = num => {
        count -= num;
    };

    const reset = () => {
        count = 0;
    };

    const add = num => {
        count += num;
    };

    const getDemo = () => {
        return count;
    };

    return {
        getDemo,
        add,
        reset,
        add,
    }
}

const result = createCalculator();
console.log(result);
result.add(5);

console.log(getDemo())